"""Crawl Kene Partners pages for SEO/a11y technical signals. Read-only."""
from __future__ import annotations

import json
import re
import time
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE = "https://kene.partners"
OUT = Path(r"d:\Code\hello-world-astro\kene_audit")
OUT.mkdir(exist_ok=True)
HEADERS = {
    "User-Agent": "KeneAuditBot/1.0 (+internal audit; contact: audit)",
    "Accept": "text/html,application/xhtml+xml",
}
NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}


def load_sitemap() -> list[str]:
    tree = ET.parse(OUT.parent / "kene-sitemap.xml")
    root = tree.getroot()
    return [u.find("sm:loc", NS).text.rstrip("/") or BASE for u in root.findall("sm:url", NS)]


def classify(url: str) -> str:
    path = urlparse(url).path.strip("/")
    if not path:
        return "static-home"
    first = path.split("/")[0]
    cms_prefixes = {
        "insights",
        "team-details",
        "services",
        "client-stories",
        "sector-guides",
        "grants",
        "support-hub",
        "industry",
        "open-positions",
        "videos",
        "blog-tags",
        "client-stories-category",
        "support-hub-category",
        "product",
        "sku",
        "category",
    }
    if first in cms_prefixes and "/" in path:
        return f"cms-{first}"
    if first in cms_prefixes:
        return f"listing-{first}"
    return "static"


def meta_content(soup: BeautifulSoup, *, name: str | None = None, prop: str | None = None) -> str | None:
    if name:
        tag = soup.find("meta", attrs={"name": name})
    else:
        tag = soup.find("meta", attrs={"property": prop})
    if not tag:
        return None
    return (tag.get("content") or "").strip() or None


def analyze_html(url: str, html: str, status: int, final_url: str, elapsed_ms: float) -> dict:
    soup = BeautifulSoup(html, "lxml")
    title = (soup.title.string or "").strip() if soup.title else ""
    desc = meta_content(soup, name="description")
    robots = meta_content(soup, name="robots")
    canonical = None
    can = soup.find("link", rel="canonical")
    if can:
        canonical = can.get("href")
    og_title = meta_content(soup, prop="og:title")
    og_desc = meta_content(soup, prop="og:description")
    og_image = meta_content(soup, prop="og:image")
    tw_card = meta_content(soup, name="twitter:card")

    headings = []
    for level in range(1, 7):
        for h in soup.find_all(f"h{level}"):
            text = " ".join(h.get_text(" ", strip=True).split())
            headings.append({"level": level, "text": text[:120]})

    h1s = [h for h in headings if h["level"] == 1]
    h_levels = [h["level"] for h in headings]
    skipped = False
    if h_levels:
        prev = h_levels[0]
        for lvl in h_levels[1:]:
            if lvl > prev + 1:
                skipped = True
                break
            prev = lvl

    images = soup.find_all("img")
    missing_alt = []
    empty_alt = 0
    for img in images:
        alt = img.get("alt")
        src = img.get("src") or img.get("data-src") or ""
        if alt is None:
            missing_alt.append(src[:100])
        elif alt.strip() == "":
            empty_alt += 1

    links = []
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        text = " ".join(a.get_text(" ", strip=True).split())
        links.append({"href": href, "text": text[:80]})

    internal = []
    external = []
    for link in links:
        href = link["href"]
        if href.startswith("#") or href.lower().startswith("javascript:") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
        abs_url = urljoin(final_url, href)
        parsed = urlparse(abs_url)
        if parsed.netloc.replace("www.", "") == "kene.partners":
            internal.append(abs_url.split("#")[0].rstrip("/") or BASE)
        elif parsed.scheme in ("http", "https"):
            external.append(abs_url)

    schema = []
    for script in soup.find_all("script", type="application/ld+json"):
        raw = script.string or script.get_text() or ""
        try:
            data = json.loads(raw)
            if isinstance(data, list):
                for item in data:
                    schema.append(item.get("@type"))
            elif isinstance(data, dict):
                schema.append(data.get("@type"))
        except Exception:
            schema.append("INVALID_JSON")

    # Forms
    inputs_missing_label = 0
    for inp in soup.find_all(["input", "select", "textarea"]):
        itype = (inp.get("type") or "").lower()
        if itype in ("hidden", "submit", "button", "image"):
            continue
        iid = inp.get("id")
        has_label = bool(iid and soup.find("label", attrs={"for": iid}))
        has_aria = bool(inp.get("aria-label") or inp.get("aria-labelledby"))
        has_placeholder_only = bool(inp.get("placeholder")) and not has_label and not has_aria
        if not has_label and not has_aria:
            inputs_missing_label += 1

    # Buttons without accessible name
    unlabeled_buttons = 0
    for btn in soup.find_all("button"):
        text = " ".join(btn.get_text(" ", strip=True).split())
        if not text and not btn.get("aria-label") and not btn.get("aria-labelledby") and not btn.get("title"):
            unlabeled_buttons += 1

    # lang
    html_tag = soup.find("html")
    lang = html_tag.get("lang") if html_tag else None

    # viewport
    viewport = soup.find("meta", attrs={"name": "viewport"})

    # security / tech markers in head
    scripts_src = [s.get("src") for s in soup.find_all("script", src=True)]
    stylesheets = [l.get("href") for l in soup.find_all("link", rel=lambda x: x and "stylesheet" in x)]

    vague_links = [l for l in links if l["text"].lower() in {"click here", "read more", "learn more", "here", "more"}]

    return {
        "url": url,
        "final_url": final_url.rstrip("/") or BASE,
        "status": status,
        "elapsed_ms": round(elapsed_ms, 1),
        "page_type": classify(url),
        "title": title,
        "title_len": len(title),
        "meta_description": desc,
        "meta_description_len": len(desc) if desc else 0,
        "robots": robots,
        "canonical": canonical,
        "og_title": og_title,
        "og_description": og_desc,
        "og_image": og_image,
        "twitter_card": tw_card,
        "h1_count": len(h1s),
        "h1_texts": [h["text"] for h in h1s],
        "heading_count": len(headings),
        "heading_skip": skipped,
        "headings_sample": headings[:15],
        "img_count": len(images),
        "img_missing_alt_count": len(missing_alt),
        "img_missing_alt_sample": missing_alt[:5],
        "img_empty_alt_count": empty_alt,
        "internal_link_count": len(set(internal)),
        "external_link_count": len(set(external)),
        "internal_links": sorted(set(internal)),
        "schema_types": schema,
        "inputs_missing_label": inputs_missing_label,
        "unlabeled_buttons": unlabeled_buttons,
        "lang": lang,
        "has_viewport": bool(viewport),
        "vague_link_count": len(vague_links),
        "vague_links_sample": vague_links[:5],
        "script_count": len(scripts_src),
        "stylesheet_count": len(stylesheets),
        "word_count": len(re.findall(r"\w+", soup.get_text(" ", strip=True))),
        "html_bytes": len(html.encode("utf-8", errors="ignore")),
    }


def fetch(url: str) -> dict:
    t0 = time.perf_counter()
    try:
        r = requests.get(url, headers=HEADERS, timeout=30, allow_redirects=True)
        elapsed = (time.perf_counter() - t0) * 1000
        ctype = r.headers.get("content-type", "")
        if "html" not in ctype.lower() and r.status_code == 200:
            return {
                "url": url,
                "final_url": r.url,
                "status": r.status_code,
                "elapsed_ms": round(elapsed, 1),
                "page_type": classify(url),
                "error": f"non-html content-type: {ctype}",
            }
        if r.status_code >= 400:
            return {
                "url": url,
                "final_url": r.url,
                "status": r.status_code,
                "elapsed_ms": round(elapsed, 1),
                "page_type": classify(url),
                "error": f"HTTP {r.status_code}",
            }
        return analyze_html(url, r.text, r.status_code, r.url, elapsed)
    except Exception as e:
        return {
            "url": url,
            "status": 0,
            "page_type": classify(url),
            "error": str(e),
        }


def pick_urls(all_urls: list[str]) -> list[str]:
    """All static + listing pages, plus representative CMS samples + every template type."""
    by_type: dict[str, list[str]] = defaultdict(list)
    for u in all_urls:
        by_type[classify(u)].append(u)

    selected = []
    for t, urls in by_type.items():
        if t.startswith("static") or t.startswith("listing"):
            selected.extend(urls)
        else:
            # CMS detail pages: sample up to 8 per collection (first/mid/last-ish)
            urls_sorted = sorted(urls)
            n = len(urls_sorted)
            idxs = sorted(set([0, n // 4, n // 2, (3 * n) // 4, n - 1, 1, 2, min(3, n - 1)]))
            for i in idxs:
                if 0 <= i < n:
                    selected.append(urls_sorted[i])
            # Also keep more for insights/grants which are large
            if t in ("cms-insights", "cms-grants") and n > 8:
                for i in range(0, n, max(1, n // 15)):
                    selected.append(urls_sorted[i])
    # dedupe preserve order
    seen = set()
    out = []
    for u in selected:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out


def check_link_status(urls: list[str], limit: int = 80) -> list[dict]:
    results = []
    sample = urls[:limit]

    def head(u: str):
        try:
            r = requests.head(u, headers=HEADERS, timeout=15, allow_redirects=True)
            if r.status_code >= 400 or r.status_code == 405:
                r = requests.get(u, headers=HEADERS, timeout=20, allow_redirects=True, stream=True)
                r.close()
            return {"url": u, "status": r.status_code, "final_url": r.url}
        except Exception as e:
            return {"url": u, "status": 0, "error": str(e)}

    with ThreadPoolExecutor(max_workers=8) as ex:
        futs = [ex.submit(head, u) for u in sample]
        for f in as_completed(futs):
            results.append(f.result())
    return results


def main():
    all_urls = load_sitemap()
    # normalize
    all_urls = [u.rstrip("/") or BASE for u in all_urls]
    selected = pick_urls(all_urls)
    print(f"Sitemap URLs: {len(all_urls)}; selected for deep crawl: {len(selected)}")

    results = []
    with ThreadPoolExecutor(max_workers=6) as ex:
        futs = {ex.submit(fetch, u): u for u in selected}
        done = 0
        for f in as_completed(futs):
            results.append(f.result())
            done += 1
            if done % 20 == 0:
                print(f"  crawled {done}/{len(selected)}")

    (OUT / "crawl_results.json").write_text(json.dumps(results, indent=2), encoding="utf-8")

    # Aggregate SEO issues
    titles = Counter()
    descs = Counter()
    for r in results:
        if r.get("title"):
            titles[r["title"]] += 1
        if r.get("meta_description"):
            descs[r["meta_description"]] += 1

    issues = []
    for r in results:
        if r.get("error") or r.get("status", 200) >= 400:
            issues.append({"type": "http_error", "url": r.get("url"), "detail": r.get("error") or r.get("status")})
            continue
        if not r.get("title"):
            issues.append({"type": "missing_title", "url": r["url"]})
        elif r["title_len"] > 60:
            issues.append({"type": "title_too_long", "url": r["url"], "detail": f'{r["title_len"]}: {r["title"]}'})
        elif r["title_len"] < 20:
            issues.append({"type": "title_too_short", "url": r["url"], "detail": r["title"]})
        if titles[r.get("title", "")] > 1:
            issues.append({"type": "duplicate_title", "url": r["url"], "detail": r["title"]})
        if not r.get("meta_description"):
            issues.append({"type": "missing_meta_description", "url": r["url"]})
        elif r["meta_description_len"] > 160:
            issues.append({"type": "meta_description_too_long", "url": r["url"], "detail": r["meta_description_len"]})
        elif r["meta_description_len"] < 70:
            issues.append({"type": "meta_description_too_short", "url": r["url"], "detail": r["meta_description_len"]})
        if descs[r.get("meta_description", "")] > 1 and r.get("meta_description"):
            issues.append({"type": "duplicate_meta_description", "url": r["url"]})
        if r.get("h1_count", 0) == 0:
            issues.append({"type": "missing_h1", "url": r["url"]})
        elif r["h1_count"] > 1:
            issues.append({"type": "multiple_h1", "url": r["url"], "detail": r.get("h1_texts")})
        if r.get("heading_skip"):
            issues.append({"type": "skipped_heading_level", "url": r["url"]})
        if r.get("img_missing_alt_count", 0) > 0:
            issues.append(
                {
                    "type": "images_missing_alt",
                    "url": r["url"],
                    "detail": f'{r["img_missing_alt_count"]} images',
                    "sample": r.get("img_missing_alt_sample"),
                }
            )
        if not r.get("canonical"):
            issues.append({"type": "missing_canonical", "url": r["url"]})
        elif r["canonical"].rstrip("/") != r["final_url"].rstrip("/") and r["canonical"].rstrip("/") + "/" != r[
            "final_url"
        ].rstrip("/") + "/":
            # allow trailing slash differences lightly
            can = r["canonical"].rstrip("/")
            fin = r["final_url"].rstrip("/")
            if can != fin:
                issues.append({"type": "canonical_mismatch", "url": r["url"], "detail": f'{can} vs {fin}'})
        if not r.get("og_title") or not r.get("og_description") or not r.get("og_image"):
            issues.append(
                {
                    "type": "incomplete_og",
                    "url": r["url"],
                    "detail": {
                        "og_title": bool(r.get("og_title")),
                        "og_description": bool(r.get("og_description")),
                        "og_image": bool(r.get("og_image")),
                    },
                }
            )
        if not r.get("schema_types"):
            issues.append({"type": "missing_schema", "url": r["url"]})
        if r.get("inputs_missing_label", 0) > 0:
            issues.append({"type": "form_inputs_missing_label", "url": r["url"], "detail": r["inputs_missing_label"]})
        if r.get("unlabeled_buttons", 0) > 0:
            issues.append({"type": "unlabeled_buttons", "url": r["url"], "detail": r["unlabeled_buttons"]})
        if r.get("word_count", 0) < 150 and r.get("page_type", "").startswith("static"):
            issues.append({"type": "thin_content", "url": r["url"], "detail": r.get("word_count")})
        if r.get("vague_link_count", 0) >= 3:
            issues.append({"type": "vague_link_text", "url": r["url"], "detail": r.get("vague_links_sample")})

    (OUT / "seo_issues.json").write_text(json.dumps(issues, indent=2), encoding="utf-8")

    # Internal link graph from crawled pages for orphans among sitemap
    inbound = Counter()
    for r in results:
        for link in r.get("internal_links") or []:
            inbound[link.rstrip("/") or BASE] += 1
    sitemap_set = set(all_urls)
    orphans = [u for u in all_urls if inbound[u] == 0 and classify(u).startswith("static")]
    # note: orphans among only crawled outbound — incomplete for CMS; flag carefully
    (OUT / "link_inbound_sample.json").write_text(
        json.dumps({"inbound_top": inbound.most_common(40), "static_zero_inbound_in_sample": orphans}, indent=2),
        encoding="utf-8",
    )

    # Broken link check on unique internal + external from home + key pages
    key_pages = [r for r in results if r.get("url") in {BASE, f"{BASE}/about-us", f"{BASE}/contact-us", f"{BASE}/insights"}]
    link_pool = []
    for r in key_pages:
        link_pool.extend(r.get("internal_links") or [])
    # also add some external from home
    home = next((r for r in results if r.get("url") == BASE), None)
    if home:
        # re-fetch externals cheaply: parse not stored; skip external deep check limited
        pass
    unique_internal = sorted(set(link_pool))
    print(f"Checking {min(80, len(unique_internal))} internal links from key pages...")
    link_status = check_link_status(unique_internal, limit=80)
    broken = [x for x in link_status if x.get("status", 0) >= 400 or x.get("status") == 0]
    (OUT / "link_status.json").write_text(json.dumps({"checked": link_status, "broken": broken}, indent=2), encoding="utf-8")

    # Summary
    issue_counts = Counter(i["type"] for i in issues)
    summary = {
        "sitemap_total": len(all_urls),
        "crawled": len(results),
        "http_errors": len([r for r in results if r.get("status", 200) >= 400 or r.get("error")]),
        "issue_counts": dict(issue_counts.most_common()),
        "broken_links_found": broken,
        "by_page_type": dict(Counter(r.get("page_type") for r in results)),
    }
    (OUT / "crawl_summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
