import json
from collections import Counter, defaultdict
from pathlib import Path

OUT = Path(r"d:\Code\hello-world-astro\kene_audit")
results = json.loads((OUT / "crawl_results.json").read_text(encoding="utf-8"))
issues = json.loads((OUT / "seo_issues.json").read_text(encoding="utf-8"))

print("=== SAMPLE TITLES / META / H1 / SCHEMA / ALT ===")
for r in results:
    if r.get("page_type") in ("static-home", "static", "listing-insights") or r.get("url", "").endswith(
        ("/about-us", "/contact-us", "/grants-finder", "/support-hub")
    ):
        if r.get("page_type") == "static" and not any(
            r["url"].endswith(x)
            for x in (
                "/about-us",
                "/contact-us",
                "/grants-finder",
                "/support-hub",
                "/client-stories",
                "/join-our-team",
                "/claiming-rd",
                "/privacy-policy",
            )
        ):
            continue
        print("---", r.get("url"))
        print(" title:", (r.get("title") or "")[:90], f"({r.get('title_len')})")
        print(" desc:", (r.get("meta_description") or "")[:100], f"({r.get('meta_description_len')})")
        print(" h1:", r.get("h1_count"), r.get("h1_texts"))
        print(" canonical:", r.get("canonical"))
        print(" og:", bool(r.get("og_title")), bool(r.get("og_description")), bool(r.get("og_image")))
        print(" schema:", r.get("schema_types"))
        print(
            " imgs:",
            r.get("img_count"),
            "missing_alt",
            r.get("img_missing_alt_count"),
            "empty_alt",
            r.get("img_empty_alt_count"),
        )
        print(" labels missing:", r.get("inputs_missing_label"), "unlabeled btn:", r.get("unlabeled_buttons"))
        print(" lang:", r.get("lang"), "words:", r.get("word_count"), "ms:", r.get("elapsed_ms"))

print("\n=== CMS SAMPLE ===")
for r in results:
    if r.get("page_type", "").startswith("cms-"):
        print(
            r["page_type"],
            r["url"].split("/")[-1][:40],
            "|T",
            r.get("title_len"),
            "|D",
            r.get("meta_description_len"),
            "|h1",
            r.get("h1_count"),
            "|schema",
            r.get("schema_types"),
            "|emptyAlt",
            r.get("img_empty_alt_count"),
            "|missAlt",
            r.get("img_missing_alt_count"),
            "|labels",
            r.get("inputs_missing_label"),
        )

# Aggregate empty alt
empty_alt_pages = [r for r in results if r.get("img_empty_alt_count", 0) > 0]
print("\nPages with empty alt:", len(empty_alt_pages), "total empty alts:", sum(r["img_empty_alt_count"] for r in empty_alt_pages))
print("Pages missing schema:", len([r for r in results if not r.get("schema_types") and not r.get("error")]))
print("Pages incomplete OG:", len([r for r in results if not (r.get("og_title") and r.get("og_description") and r.get("og_image")) and not r.get("error")]))

# Duplicate titles among crawl
titles = Counter(r.get("title") for r in results if r.get("title"))
print("\nDuplicate titles:")
for t, c in titles.most_common():
    if c > 1:
        print(c, t[:80])

descs = Counter(r.get("meta_description") for r in results if r.get("meta_description"))
print("\nDuplicate descriptions:")
for t, c in descs.most_common():
    if c > 1:
        print(c, (t or "")[:100])

# Issue grouping
by_type = defaultdict(list)
for i in issues:
    by_type[i["type"]].append(i["url"])
print("\n=== ISSUE URLS ===")
for k, urls in by_type.items():
    print(k, len(urls))
    for u in urls[:8]:
        print(" ", u)
    if len(urls) > 8:
        print(f"  ... +{len(urls)-8} more")
