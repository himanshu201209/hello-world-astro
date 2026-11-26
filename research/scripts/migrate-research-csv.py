"""
Migrate Webflow Researches CSV → Astro MDX under src/content/research/.
Preserves figures, tables, and interactive embeds as reusable components.
"""

from __future__ import annotations

import csv
import html as html_lib
import json
import re
from html.parser import HTMLParser
from pathlib import Path

CSV_PATH = Path(r"C:\Users\ADMIN\Downloads\v41 - Researches - 6a04bd23eb9d40f76dac12bd.csv")
ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "src" / "content" / "research"
EMBEDS_DIR = CONTENT_DIR / "embeds"
AUTHORS_PATH = ROOT / "src" / "data" / "research-authors.ts"

# Roles known from existing Astro content / published micro1 pages only.
AUTHORS: dict[str, dict[str, str]] = {
    "liu-zhang": {"name": "Liu Zhang", "role": "Member of Technical Staff, micro1"},
    "mark-esposito": {"name": "Mark Esposito", "role": "Chief Economist, micro1"},
    "ali-ansari": {"name": "Ali Ansari", "role": "micro1"},
    "ava-fitoussy": {"name": "Ava Fitoussy", "role": "micro1"},
    "jaime-paik": {"name": "Jaime Paik", "role": "micro1"},
    "yuhao-jiang": {"name": "Yuhao Jiang", "role": "micro1"},
    "arian-sadeghi": {"name": "Arian Sadeghi", "role": "micro1"},
    "mitali-potnis": {"name": "Mitali Potnis", "role": "micro1"},
    "andrew-maas": {"name": "Andrew Maas", "role": "micro1"},
    "aruj-mahajan": {"name": "Aruj Mahajan", "role": "micro1"},
    "yongchao-zhou": {"name": "Yongchao Zhou", "role": "micro1"},
    "rajeev-joshi": {"name": "Rajeev Joshi", "role": "micro1"},
    "rumi-elias-calles": {"name": "Rumi Elias Calles", "role": "Director of Research Eng, micro1"},
    "zhuoyi-huang": {"name": "Zhuoyi Huang", "role": "micro1"},
}

CATEGORY_BY_SLUG: dict[str, str] = {
    "quantifying-the-benefits-of-ai-assisted-recruitment": "Agents",
    "evaluating-speech-to-text-vs-llm-vs-text-to-speech-combinations-for-ai-interview-systems": "Multi-model",
    "no-last-mile": "Enterprise",
    "safe-and-helpful-model-behavior-through-competence-under-constraint": "Safety",
    "the-next-productivity-engine-humanoid-robots-and-beyond": "Robotics",
    "uncovering-candidate-potential-with-multi-modal-ai-assessments": "Multi-model",
    "zara-an-llm-based-candidate-interview-feedback-system": "Agents",
    "the-benchmark-ceiling": "Reasoning",
    "robotics-is-entering-a-phase-of-rapid-diversification": "Robotics",
    "ai-models-now-introduce-safety-risks-in-the-physical-world": "Safety",
    "pii-transformation-for-enterprise-datasets": "Enterprise",
    "are-ai-agents-getting-better": "Reasoning",
    "post-training-a-748b-model-on-stem-reasoning": "Post-training",
}

# Keep hand-crafted MDX for these (already migrated / higher fidelity).
SKIP_OVERWRITE = {"are-ai-agents-getting-better"}


def yaml_escape(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def format_date(raw: str) -> str:
    # "Tue Jul 29 2025 00:00:00 GMT+0000 (...)" → "July 29, 2025"
    m = re.match(
        r"^[A-Za-z]{3}\s+([A-Za-z]{3})\s+(\d{1,2})\s+(\d{4})",
        (raw or "").strip(),
    )
    if not m:
        return (raw or "").strip()
    months = {
        "Jan": "January",
        "Feb": "February",
        "Mar": "March",
        "Apr": "April",
        "May": "May",
        "Jun": "June",
        "Jul": "July",
        "Aug": "August",
        "Sep": "September",
        "Oct": "October",
        "Nov": "November",
        "Dec": "December",
    }
    mon = months.get(m.group(1), m.group(1))
    return f"{mon} {int(m.group(2))}, {m.group(3)}"


def resolve_authors(raw: str) -> list[dict[str, str]]:
    out: list[dict[str, str]] = []
    for part in (raw or "").split(";"):
        slug = part.strip()
        if not slug:
            continue
        info = AUTHORS.get(slug)
        if info:
            out.append(info)
        else:
            name = " ".join(p.capitalize() for p in slug.split("-"))
            out.append({"name": name, "role": "micro1"})
    return out


def clean_text(text: str) -> str:
    text = html_lib.unescape(text or "")
    text = text.replace("\xa0", " ").replace("\u200d", "")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def inline_to_md(text: str) -> str:
    """Convert a small HTML fragment with inline tags to markdown-ish text."""
    text = re.sub(r"<br\s*/?>", "  \n", text, flags=re.I)
    text = re.sub(
        r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>',
        lambda m: f"[{clean_text(re.sub('<[^>]+>', '', m.group(2)))}]({m.group(1)})",
        text,
        flags=re.I | re.S,
    )
    text = re.sub(r"<(strong|b)[^>]*>(.*?)</\1>", r"**\2**", text, flags=re.I | re.S)
    text = re.sub(r"<(em|i)[^>]*>(.*?)</\1>", r"*\2*", text, flags=re.I | re.S)
    text = re.sub(r"<sup[^>]*>(.*?)</sup>", r"<sup>\1</sup>", text, flags=re.I | re.S)
    text = re.sub(r"<sub[^>]*>(.*?)</sub>", r"<sub>\1</sub>", text, flags=re.I | re.S)
    text = re.sub(r"<[^>]+>", "", text)
    return clean_text(text)


class BodyConverter(HTMLParser):
    def __init__(self, slug: str):
        super().__init__(convert_charrefs=False)
        self.slug = slug
        self.parts: list[str] = []
        self.embed_index = 0
        self._stack: list[str] = []
        self._buf = ""
        self._capture_html = False
        self._html_buf: list[str] = []
        self._in_table = False
        self._table_parts: list[str] = []
        self._in_figure = False
        self._figure_src = ""
        self._figure_alt = ""
        self._figure_caption = ""
        self._list_type: str | None = None
        self._list_items: list[str] = []
        self._item_buf = ""
        self._heading_level: int | None = None
        self._skip_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]):
        tag = tag.lower()
        ad = {k: (v or "") for k, v in attrs}

        if self._skip_depth:
            self._skip_depth += 1
            return

        if self._capture_html:
            attr = "".join(
                f' {k}="{html_lib.escape(v, quote=True)}"' if v is not None else f" {k}"
                for k, v in attrs
            )
            self._html_buf.append(f"<{tag}{attr}>")
            return

        if tag in {"style", "script"} or ad.get("data-rt-embed-type") == "true":
            self._flush_buf()
            self._capture_html = True
            self._html_buf = []
            attr = "".join(
                f' {k}="{html_lib.escape(v, quote=True)}"' if v is not None else f" {k}"
                for k, v in attrs
            )
            self._html_buf.append(f"<{tag}{attr}>")
            return

        if tag == "iframe":
            self._flush_buf()
            src = ad.get("src", "")
            title = ad.get("title") or ad.get("aria-label") or "Embedded content"
            self.parts.append(
                f'\n<ArticleEmbed kind="iframe" src="{yaml_escape(src)}" title="{yaml_escape(title)}" />\n'
            )
            return

        if tag == "figure":
            self._flush_buf()
            self._in_figure = True
            self._figure_src = ""
            self._figure_alt = ""
            self._figure_caption = ""
            return

        if tag == "img":
            src = ad.get("src", "")
            alt = ad.get("alt", "")
            if alt in {"__wf_reserved_inherit", ""}:
                alt = ""
            if self._in_figure:
                self._figure_src = src
                self._figure_alt = alt
            else:
                self._flush_buf()
                self.parts.append(
                    f'\n<ArticleFigure src="{yaml_escape(src)}" alt="{yaml_escape(alt)}" />\n'
                )
            return

        if tag == "figcaption" and self._in_figure:
            self._buf = ""
            self._stack.append("figcaption")
            return

        if tag == "table":
            self._flush_buf()
            self._in_table = True
            self._table_parts = ["<table>"]
            return

        if self._in_table:
            attr = "".join(
                f' {k}="{html_lib.escape(v, quote=True)}"' for k, v in attrs if v is not None
            )
            self._table_parts.append(f"<{tag}{attr}>")
            return

        if tag in {"ul", "ol"}:
            self._flush_buf()
            self._list_type = tag
            self._list_items = []
            return

        if tag == "li" and self._list_type:
            self._item_buf = ""
            self._stack.append("li")
            return

        if tag in {"h1", "h2", "h3", "h4"}:
            self._flush_buf()
            self._heading_level = int(tag[1])
            self._buf = ""
            return

        if tag == "p":
            self._flush_buf()
            self._buf = ""
            self._stack.append("p")
            return

        if tag == "br":
            self._buf += "  \n"
            return

        if tag in {"strong", "b"}:
            self._buf += "**"
            self._stack.append("strong")
            return
        if tag in {"em", "i"}:
            self._buf += "*"
            self._stack.append("em")
            return
        if tag == "a":
            href = ad.get("href", "")
            self._buf += "["
            self._stack.append(f"a:{href}")
            return
        if tag in {"sup", "sub"}:
            self._buf += f"<{tag}>"
            self._stack.append(tag)
            return

        # ignore structural wrappers
        if tag in {"div", "span", "section", "text", "main", "article"}:
            return

    def handle_endtag(self, tag: str):
        tag = tag.lower()

        if self._skip_depth:
            self._skip_depth -= 1
            return

        if self._capture_html:
            self._html_buf.append(f"</{tag}>")
            # close capture when the opening embed/style/script closes
            open_tag = re.match(r"<([a-z0-9-]+)", self._html_buf[0] or "", re.I)
            if open_tag and open_tag.group(1).lower() == tag:
                # For nested same tags, only finish when depth returns — simple heuristic:
                opens = sum(1 for p in self._html_buf if re.match(rf"<{tag}(\s|>)", p, re.I))
                closes = sum(1 for p in self._html_buf if p.lower() == f"</{tag}>")
                if opens <= closes:
                    self._finish_embed()
            return

        if tag == "figure" and self._in_figure:
            src = self._figure_src
            alt = self._figure_alt
            caption = clean_text(self._figure_caption)
            if src:
                if caption:
                    self.parts.append(
                        f'\n<ArticleFigure src="{yaml_escape(src)}" alt="{yaml_escape(alt)}" caption="{yaml_escape(caption)}" />\n'
                    )
                else:
                    self.parts.append(
                        f'\n<ArticleFigure src="{yaml_escape(src)}" alt="{yaml_escape(alt)}" />\n'
                    )
            self._in_figure = False
            return

        if tag == "figcaption" and self._in_figure:
            self._figure_caption = self._buf
            self._buf = ""
            if self._stack and self._stack[-1] == "figcaption":
                self._stack.pop()
            return

        if self._in_table:
            self._table_parts.append(f"</{tag}>")
            if tag == "table":
                table_html = "".join(self._table_parts)
                inner = re.sub(
                    r"^<table[^>]*>|</table>$",
                    "",
                    table_html,
                    flags=re.I | re.S,
                ).strip()
                self.parts.append(
                    "\n<ArticleTable>\n" + inner + "\n</ArticleTable>\n"
                )
                self._in_table = False
                self._table_parts = []
            return

        if tag in {"ul", "ol"} and self._list_type:
            bullet = "-" if self._list_type == "ul" else "1."
            for item in self._list_items:
                self.parts.append(f"{bullet} {item}")
            self.parts.append("")
            self._list_type = None
            self._list_items = []
            return

        if tag == "li" and self._list_type:
            self._list_items.append(clean_text(self._item_buf or self._buf))
            self._item_buf = ""
            self._buf = ""
            if self._stack and self._stack[-1] == "li":
                self._stack.pop()
            return

        if tag in {"h1", "h2", "h3", "h4"} and self._heading_level:
            level = self._heading_level
            text = clean_text(self._buf)
            self.parts.append("\n" + ("#" * level) + f" {text}\n")
            self._heading_level = None
            self._buf = ""
            return

        if tag == "p":
            text = clean_text(self._buf)
            if text:
                self.parts.append(text)
                self.parts.append("")
            self._buf = ""
            if self._stack and self._stack[-1] == "p":
                self._stack.pop()
            return

        if tag in {"strong", "b"} and self._stack and self._stack[-1] == "strong":
            self._buf += "**"
            self._stack.pop()
            return
        if tag in {"em", "i"} and self._stack and self._stack[-1] == "em":
            self._buf += "*"
            self._stack.pop()
            return
        if tag == "a" and self._stack and self._stack[-1].startswith("a:"):
            href = self._stack.pop().split(":", 1)[1]
            self._buf += f"]({href})"
            return
        if tag in {"sup", "sub"} and self._stack and self._stack[-1] == tag:
            self._buf += f"</{tag}>"
            self._stack.pop()
            return

    def handle_data(self, data: str):
        if self._skip_depth:
            return
        if self._capture_html:
            self._html_buf.append(data)
            return
        if self._in_table:
            self._table_parts.append(html_lib.escape(data))
            return
        if self._list_type and self._stack and self._stack[-1] == "li":
            self._item_buf += data
            return
        self._buf += data

    def handle_entityref(self, name: str):
        self.handle_data(f"&{name};")

    def handle_charref(self, name: str):
        self.handle_data(f"&#{name};")

    def _flush_buf(self):
        text = clean_text(self._buf)
        if text and not self._heading_level and not (self._stack and self._stack[-1] == "p"):
            # stray text
            self.parts.append(text)
            self.parts.append("")
        # don't clear if inside p/heading — callers manage
        if not self._heading_level and not (self._stack and self._stack[-1] in {"p", "li", "figcaption"}):
            self._buf = ""

    def _finish_embed(self):
        self._capture_html = False
        raw = "".join(self._html_buf)
        self._html_buf = []
        self.embed_index += 1
        rel = f"embeds/{self.slug}-{self.embed_index}.html"
        out = EMBEDS_DIR / f"{self.slug}-{self.embed_index}.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(raw, encoding="utf-8")
        self.parts.append(
            f'\n<ArticleEmbed src="./{rel}" />\n'
        )

    def finish(self) -> str:
        if self._capture_html:
            self._finish_embed()
        self._flush_buf()
        body = "\n".join(self.parts)
        body = re.sub(r"\n{3,}", "\n\n", body).strip() + "\n"
        return body


def convert_body(slug: str, body_html: str, intro_html: str) -> str:
    chunks: list[str] = []
    if intro_html and intro_html.strip():
        conv = BodyConverter(f"{slug}-intro")
        conv.feed(intro_html)
        intro_md = conv.finish().strip()
        if intro_md:
            chunks.append(f'<p class="research-detail_lead">\n\n{intro_md}\n\n</p>')
    if body_html and body_html.strip():
        conv = BodyConverter(slug)
        conv.feed(body_html)
        chunks.append(conv.finish().strip())
    return "\n\n".join(chunks).strip() + "\n"


def write_mdx(row: dict[str, str]) -> Path | None:
    slug = (row.get("Slug") or "").strip()
    if not slug:
        return None
    if slug in SKIP_OVERWRITE:
        print(f"skip existing handcrafted: {slug}")
        return None

    title = clean_text(row.get("Title") or "")
    draft = (row.get("Draft") or "").lower() == "true" or (row.get("Hide") or "").lower() == "true"
    date = format_date(row.get("Release date") or "")
    description = clean_text(row.get("Meta description") or "")
    authors = resolve_authors(row.get("Author") or "")
    thumb = (row.get("Thumbnail") or "").strip()
    hero = (row.get("Research Hero") or "").strip() or thumb
    platform = (row.get("Platform") or "").strip()
    link = (row.get("Link") or "").strip()
    category = CATEGORY_BY_SLUG.get(slug, "Reasoning")

    body = convert_body(slug, row.get("Body") or "", row.get("Research Intro") or "")

    fm_authors = "\n".join(
        [
            f'  - name: "{yaml_escape(a["name"])}"\n    role: "{yaml_escape(a["role"])}"'
            for a in authors
        ]
    ) or '  - name: "micro1"\n    role: "Research"'

    frontmatter = f"""---
title: "{yaml_escape(title)}"
date: "{yaml_escape(date)}"
description: "{yaml_escape(description)}"
category: "{category}"
platform: "{yaml_escape(platform)}"
paperLink: "{yaml_escape(link)}"
authors:
{fm_authors}
heroImage: "{yaml_escape(hero)}"
heroImageAlt: "{yaml_escape(title)}"
thumbnail: "{yaml_escape(thumb)}"
draft: {str(draft).lower()}
---
"""

    imports = """
import ArticleFigure from "../../components/research-detail/ArticleFigure.astro";
import ArticleTable from "../../components/research-detail/ArticleTable.astro";
import ArticleEmbed from "../../components/research-detail/ArticleEmbed.astro";
""".lstrip()

    extras = []
    if link:
        extras.append(
            f'\n<ArticleCallout title="Read the paper">\n\n[{platform or "Full paper"}]({link})\n\n</ArticleCallout>\n'
        )
        imports += 'import ArticleCallout from "../../components/research-detail/ArticleCallout.astro";\n'

    content = frontmatter + "\n" + imports + "\n" + body
    if extras:
        content += "\n" + "".join(extras)

    out = CONTENT_DIR / f"{slug}.mdx"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(content, encoding="utf-8")
    print(f"wrote {out.relative_to(ROOT)} draft={draft}")
    return out


def write_authors_ts():
    lines = ["export const researchAuthors = {"]
    for slug, info in sorted(AUTHORS.items()):
        lines.append(
            f'  "{slug}": {{ name: "{info["name"]}", role: "{info["role"]}" }},'
        )
    lines.append("} as const;\n")
    AUTHORS_PATH.write_text("\n".join(lines), encoding="utf-8")


def listing_entries(rows: list[dict[str, str]]) -> str:
    entries = []
    for row in rows:
        draft = (row.get("Draft") or "").lower() == "true"
        hide = (row.get("Hide") or "").lower() == "true"
        if draft or hide:
            continue
        slug = row["Slug"].strip()
        title = clean_text(row["Title"])
        date = format_date(row.get("Release date") or "")
        # short month-year for listing cards
        m = re.match(r"^([A-Za-z]+) (\d+), (\d+)$", date)
        list_date = f"{m.group(1)} {m.group(3)}" if m else date
        category = CATEGORY_BY_SLUG.get(slug, "Reasoning")
        href = f'withBase("/{slug}")'
        entries.append(
            "  {\n"
            f'    id: "{slug}",\n'
            f'    title: "{yaml_escape(title)}",\n'
            f'    date: "{list_date}",\n'
            f'    category: "{category}",\n'
            f"    href: {href},\n"
            "  }"
        )
    return ",\n".join(entries)


def patch_research_data(rows: list[dict[str, str]]):
    path = ROOT / "src" / "data" / "research.ts"
    text = path.read_text(encoding="utf-8")
    block = listing_entries(rows)
    new = re.sub(
        r"export const researchPapers: ResearchPaper\[\] = \[[\s\S]*?\];",
        f"export const researchPapers: ResearchPaper[] = [\n{block},\n];",
        text,
        count=1,
    )
    # Ensure Safety is in filters if used
    if '"Safety"' not in new and "Safety" in block:
        new = new.replace(
            '  "Enterprise",\n] as const;',
            '  "Enterprise",\n  "Safety",\n] as const;',
        )
        new = new.replace(
            '| "Enterprise"\n  | "Safety";',
            '| "Enterprise"\n  | "Safety";',
        )
    path.write_text(new, encoding="utf-8")
    print("updated research.ts listing")


def main():
    EMBEDS_DIR.mkdir(parents=True, exist_ok=True)
    with CSV_PATH.open(encoding="utf-8-sig", newline="") as f:
        rows = list(csv.DictReader(f))
    write_authors_ts()
    for row in rows:
        write_mdx(row)
    patch_research_data(rows)
    print(f"done: {len(rows)} csv rows")


if __name__ == "__main__":
    main()
