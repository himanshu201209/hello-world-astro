import json
from pathlib import Path

summary = json.loads(Path(r"d:\Code\hello-world-astro\kene_audit\lighthouse\summary.json").read_text(encoding="utf-8"))
print("=== LIGHTHOUSE SUMMARY ===")
for s in summary:
    if s.get("error"):
        print(s)
        continue
    print(
        f'{s["name"]:16} {s["formFactor"]:7} P={s["performance"]:3} A={s["accessibility"]:3} BP={s["bestPractices"]:3} SEO={s["seo"]:3} '
        f'LCP={round((s.get("LCP") or 0)/1000,2)}s CLS={round(s.get("CLS") or 0,3)} TBT={round((s.get("TBT") or 0),0)}ms'
    )

# Detailed a11y failures from one home mobile report
home = json.loads(Path(r"d:\Code\hello-world-astro\kene_audit\lighthouse\home-mobile.json").read_text(encoding="utf-8"))
print("\n=== HOME MOBILE A11Y FAILURES ===")
for a in home["audits"].values():
    if a.get("score") is not None and a["score"] < 1:
        # only a11y category
        pass
a11y_ids = {r["id"] for r in home["categories"]["accessibility"]["auditRefs"]}
for aid in sorted(a11y_ids):
    a = home["audits"][aid]
    if a.get("score") is not None and a["score"] < 1:
        details = a.get("details", {})
        items = details.get("items") or []
        print(f'- {a["id"]}: {a["title"]} (score={a["score"]}) items={len(items)}')
        for it in items[:3]:
            node = it.get("node") or {}
            print("   ", node.get("snippet") or it)

print("\n=== HOME MOBILE PERF OPPORTUNITIES ===")
for a in home["audits"].values():
    if a.get("details", {}).get("type") == "opportunity" and (a.get("numericValue") or 0) > 100:
        print(f'- {a["id"]}: {a["title"]} save~{round(a["numericValue"])}ms')

print("\n=== HOME MOBILE BP FAILURES ===")
bp_ids = {r["id"] for r in home["categories"]["best-practices"]["auditRefs"]}
for aid in sorted(bp_ids):
    a = home["audits"][aid]
    if a.get("score") is not None and a["score"] < 1:
        print(f'- {a["id"]}: {a["title"]}')

# Also grants-finder and about for a11y uniqueness
for fname in ["about-mobile.json", "grants-finder-mobile.json", "contact-mobile.json", "insights-mobile.json"]:
    p = Path(r"d:\Code\hello-world-astro\kene_audit\lighthouse") / fname
    data = json.loads(p.read_text(encoding="utf-8"))
    print(f"\n=== {fname} A11Y FAIL ===")
    a11y_ids = {r["id"] for r in data["categories"]["accessibility"]["auditRefs"]}
    for aid in sorted(a11y_ids):
        a = data["audits"][aid]
        if a.get("score") is not None and a["score"] < 1:
            items = (a.get("details") or {}).get("items") or []
            print(f'- {a["id"]}: {a["title"]} items={len(items)}')
