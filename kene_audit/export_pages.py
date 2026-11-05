import json
from pathlib import Path

src = Path(r"C:\Users\ADMIN\.cursor\projects\d-Code-hello-world-astro\agent-tools\5f79d4d3-b0c2-4460-8b4d-e4d4537a2b75.txt")
data = json.loads(src.read_text(encoding="utf-8"))
pages = data["result"]["pages"]
print("pagination", data["result"].get("pagination"))
print("count", len(pages))
out = []
for p in pages:
    seo = p.get("seo") or {}
    og = p.get("openGraph") or {}
    out.append(
        {
            "id": p["id"],
            "title": p.get("title"),
            "slug": p.get("slug"),
            "draft": p.get("draft"),
            "archived": p.get("archived"),
            "collectionId": p.get("collectionId"),
            "seoTitle": seo.get("title"),
            "seoDesc": seo.get("description"),
            "ogTitle": og.get("title"),
            "ogDesc": og.get("description"),
            "ogTitleCopied": og.get("titleCopied"),
            "ogDescCopied": og.get("descriptionCopied"),
            "createdOn": p.get("createdOn"),
            "lastUpdated": p.get("lastUpdated"),
        }
    )
Path(r"d:\Code\hello-world-astro\kene_audit\kene-pages.json").write_text(
    json.dumps(out, indent=2), encoding="utf-8"
)
static = [x for x in out if not x["collectionId"]]
cms = [x for x in out if x["collectionId"]]
drafts = [x for x in out if x["draft"]]
print("static", len(static), "cms_templates", len(cms), "drafts", len(drafts))
missing_seo = [x for x in out if not (x["seoTitle"] and x["seoDesc"])]
print("missing seo title or desc", len(missing_seo))
for x in out:
    print(
        f'{x["slug"]}|draft={x["draft"]}|cms={bool(x["collectionId"])}|'
        f'seoT={bool(x["seoTitle"])}|seoD={bool(x["seoDesc"])}|title={x["title"]}'
    )
