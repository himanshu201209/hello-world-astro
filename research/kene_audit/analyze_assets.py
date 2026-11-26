import json
from pathlib import Path
from collections import Counter
import re

files = [
    Path(r"C:\Users\ADMIN\.cursor\projects\d-Code-hello-world-astro\agent-tools\48f81f61-0ce1-4af5-890a-81a10fa7b911.txt"),
    Path(r"C:\Users\ADMIN\.cursor\projects\d-Code-hello-world-astro\agent-tools\6dbd70ae-97c8-45fa-875f-76647daa41a7.txt"),
]

assets = []
paginations = []
for f in files:
    raw = f.read_text(encoding="utf-8")
    # may contain multiple JSON objects concatenated
    parts = []
    decoder = json.JSONDecoder()
    idx = 0
    raw_s = raw.strip()
    while idx < len(raw_s):
        while idx < len(raw_s) and raw_s[idx].isspace():
            idx += 1
        if idx >= len(raw_s):
            break
        obj, end = decoder.raw_decode(raw_s, idx)
        parts.append(obj)
        idx = end
    for obj in parts:
        res = obj.get("result") or obj
        if "assets" in res:
            assets.extend(res["assets"])
            paginations.append(res.get("pagination"))

print("batches", paginations)
print("assets loaded", len(assets))
# unique by id
by_id = {a["id"]: a for a in assets}
assets = list(by_id.values())
print("unique", len(assets))

missing_alt = [a for a in assets if not (a.get("altText") or "").strip()]
poor_names = []
patterns = Counter()
for a in assets:
    name = a.get("displayName") or a.get("originalFileName") or ""
    base = name.rsplit(".", 1)[0]
    if re.match(r"(?i)^(IMG_|DSC_|DCIM_|Screen Shot|screenshot|untitled|image[-_ ]?\d+|photo[-_ ]?\d+|asset)", base):
        patterns["camera_or_generic"] += 1
        poor_names.append(name)
    elif re.search(r"\s|_", base) and not re.match(r"^[a-z0-9\-]+$", base):
        patterns["spaces_or_underscores_or_caps"] += 1
        poor_names.append(name)
    elif re.search(r"[A-Z]", base) or " " in base:
        patterns["non_seo"] += 1
        poor_names.append(name)

# size / type
types = Counter(a.get("contentType") for a in assets)
large = sorted(assets, key=lambda a: a.get("size") or 0, reverse=True)[:15]

print("missing_alt", len(missing_alt), f"{100*len(missing_alt)/max(len(assets),1):.1f}%")
print("types", dict(types))
print("name patterns", dict(patterns))
print("largest:")
for a in large:
    print(round((a.get("size") or 0)/1024), "KB", a.get("contentType"), a.get("displayName"), "alt=", repr((a.get("altText") or "")[:40]))

out = {
    "total_sampled": len(assets),
    "pagination_hint": paginations,
    "missing_alt_count": len(missing_alt),
    "missing_alt_samples": [
        {"id": a["id"], "name": a.get("displayName"), "url": a.get("hostedUrl"), "type": a.get("contentType"), "size": a.get("size")}
        for a in missing_alt[:40]
    ],
    "poor_name_samples": poor_names[:40],
    "largest": [
        {"name": a.get("displayName"), "size": a.get("size"), "type": a.get("contentType"), "alt": a.get("altText")}
        for a in large
    ],
}
Path(r"d:\Code\hello-world-astro\kene_audit\assets_summary.json").write_text(json.dumps(out, indent=2), encoding="utf-8")
print("wrote assets_summary.json")
