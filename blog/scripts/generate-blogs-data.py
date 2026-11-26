"""Generate blog hub data + HTML body files from the Webflow Blogs CSV."""

from __future__ import annotations

import csv
import html as html_lib
import re
from pathlib import Path

CSV_PATH = Path(r"C:\Users\ADMIN\Downloads\v41 - Blogs - 6a26947603b09f1df9ad9eba.csv")
ROOT = Path(__file__).resolve().parents[1]
OUT_DATA = ROOT / "src" / "data" / "blogs.ts"
OUT_AUTHORS = ROOT / "src" / "data" / "blog-authors.ts"
CONTENT_DIR = ROOT / "src" / "content" / "blog"

MONTHS = {
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

# Known roles from Research where available — names only, no invented bios.
KNOWN_AUTHORS: dict[str, dict[str, str]] = {
    "ali-ansari": {"name": "Ali Ansari", "role": "micro1"},
    "arian-sadeghi": {"name": "Arian Sadeghi", "role": "micro1"},
    "ava-fitoussy": {"name": "Ava Fitoussy", "role": "micro1"},
    "liu-zhang": {"name": "Liu Zhang", "role": "Member of Technical Staff, micro1"},
    "mark-esposito": {"name": "Mark Esposito", "role": "Chief Economist, micro1"},
    "rumi-elias-calles": {
        "name": "Rumi Elias Calles",
        "role": "Director of Research Eng, micro1",
    },
}


def esc(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def parse_date(raw: str) -> tuple[str, str, tuple[int, int, int]]:
    m = re.match(
        r"^[A-Za-z]{3}\s+([A-Za-z]{3})\s+(\d{1,2})\s+(\d{4})",
        (raw or "").strip(),
    )
    if not m:
        cleaned = (raw or "").strip()
        return cleaned.upper(), cleaned, (0, 0, 0)
    mon_abbr = m.group(1)
    day = int(m.group(2))
    year = int(m.group(3))
    mon = MONTHS.get(mon_abbr, mon_abbr)
    month_num = {
        "Jan": 1,
        "Feb": 2,
        "Mar": 3,
        "Apr": 4,
        "May": 5,
        "Jun": 6,
        "Jul": 7,
        "Aug": 8,
        "Sep": 9,
        "Oct": 10,
        "Nov": 11,
        "Dec": 12,
    }.get(mon_abbr, 0)
    hub = f"{mon.upper()} {year}"
    detail = f"{mon} {day}, {year}"
    return hub, detail, (year, month_num, day)


def author_from_slug(slug: str) -> dict[str, str]:
    if slug in KNOWN_AUTHORS:
        return dict(KNOWN_AUTHORS[slug])
    name = " ".join(part.capitalize() for part in slug.split("-") if part)
    return {"name": name or slug, "role": "micro1"}


def resolve_authors(raw: str) -> list[dict[str, str]]:
    out: list[dict[str, str]] = []
    for part in (raw or "").split(";"):
        slug = part.strip()
        if not slug:
            continue
        out.append(author_from_slug(slug))
    return out


def main() -> None:
    csv.field_size_limit(10**7)
    with CSV_PATH.open(encoding="utf-8-sig", newline="") as f:
        rows = list(csv.DictReader(f))

    CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    # Clear previous generated HTML bodies
    for old in CONTENT_DIR.glob("*.html"):
        old.unlink()

    all_authors: dict[str, dict[str, str]] = {}
    posts: list[dict] = []

    for row in rows:
        if (row.get("Draft") or "").lower() == "true":
            continue
        if (row.get("Archived") or "").lower() == "true":
            continue
        if (row.get("Hide") or "").lower() == "true":
            continue

        slug = (row.get("Slug") or "").strip()
        title = (row.get("Title") or "").strip()
        if not slug or not title:
            continue

        hub_date, detail_date, sort_key = parse_date(row.get("Date") or "")
        image = (row.get("Thumbnail") or "").strip()
        hero = (row.get("Hero") or "").strip() or image
        description = (row.get("OG Desc") or row.get("Desc") or "").strip()
        authors = resolve_authors(row.get("Author") or "")
        for part in (row.get("Author") or "").split(";"):
            key = part.strip()
            if key:
                all_authors[key] = author_from_slug(key)

        body = (row.get("Main") or "").strip()
        body2 = (row.get("Main — part 2") or "").strip()
        if body2:
            body = f"{body}\n{body2}" if body else body2

        body_file = CONTENT_DIR / f"{slug}.html"
        body_file.write_text(body, encoding="utf-8")

        posts.append(
            {
                "id": slug,
                "title": title,
                "date": hub_date,
                "detailDate": detail_date,
                "dateSort": sort_key,
                "image": image,
                "heroImage": hero,
                "description": description,
                "authors": authors,
            }
        )

    posts.sort(key=lambda p: p["dateSort"], reverse=True)

    # blogs.ts
    lines = [
        "export type BlogAuthor = {",
        "  name: string;",
        "  role: string;",
        "  avatar?: string;",
        "};",
        "",
        "export type BlogPost = {",
        "  id: string;",
        "  title: string;",
        "  /** Hub card date, e.g. MARCH 2026 */",
        "  date: string;",
        "  /** Detail page date, e.g. March 17, 2026 */",
        "  detailDate: string;",
        "  image: string;",
        "  heroImage: string;",
        "  description?: string;",
        "  authors: BlogAuthor[];",
        "};",
        "",
        "/** Blog Hub + Detail data generated from the Webflow Blogs CSV. */",
        "export const blogPosts: BlogPost[] = [",
    ]

    for post in posts:
        author_lines = []
        for a in post["authors"]:
            author_lines.append(
                "      {\n"
                f'        name: "{esc(a["name"])}",\n'
                f'        role: "{esc(a["role"])}",\n'
                "      }"
            )
        authors_block = (
            "[\n" + ",\n".join(author_lines) + "\n    ]" if author_lines else "[]"
        )
        desc = post["description"]
        desc_line = f'    description: "{esc(desc)}",\n' if desc else ""
        lines.append(
            "  {\n"
            f'    id: "{esc(post["id"])}",\n'
            f'    title: "{esc(post["title"])}",\n'
            f'    date: "{esc(post["date"])}",\n'
            f'    detailDate: "{esc(post["detailDate"])}",\n'
            f'    image: "{esc(post["image"])}",\n'
            f'    heroImage: "{esc(post["heroImage"])}",\n'
            f"{desc_line}"
            f"    authors: {authors_block},\n"
            "  },"
        )

    lines.append("];\n")
    lines.append(
        "export function getBlogPost(slug: string): BlogPost | undefined {\n"
        "  return blogPosts.find((post) => post.id === slug);\n"
        "}\n"
    )
    OUT_DATA.parent.mkdir(parents=True, exist_ok=True)
    OUT_DATA.write_text("\n".join(lines), encoding="utf-8")

    # authors helper
    author_lines = ["export const blogAuthors = {"]
    for slug, info in sorted(all_authors.items()):
        author_lines.append(
            f'  "{slug}": {{ name: "{esc(info["name"])}", role: "{esc(info["role"])}" }},'
        )
    author_lines.append("} as const;\n")
    OUT_AUTHORS.write_text("\n".join(author_lines), encoding="utf-8")

    print(f"wrote {OUT_DATA.relative_to(ROOT)} ({len(posts)} posts)")
    print(f"wrote {CONTENT_DIR.relative_to(ROOT)} ({len(list(CONTENT_DIR.glob('*.html')))} bodies)")


if __name__ == "__main__":
    main()
