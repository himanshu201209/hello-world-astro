"""Diagnose post-training body conversion embed split."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from migrate_research_csv import convert_body, CSV_PATH
import csv

# module is migrate-research-csv.py — hyphenated; import via runpy
import importlib.util

spec = importlib.util.spec_from_file_location(
    "migrate", Path(__file__).parent / "migrate-research-csv.py"
)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

with mod.CSV_PATH.open(encoding="utf-8-sig", newline="") as f:
    rows = {r["Slug"]: r for r in csv.DictReader(f)}

row = rows["post-training-a-748b-model-on-stem-reasoning"]
# Clear embeds dir for this slug first? just convert
out = mod.convert_body(row["Slug"], row["Body"], row["Research Intro"])
print("mdx body chars", len(out))
print("embed count", out.count("ArticleEmbed"))
print(out[:1500])
print("---")
print("embed files after:")
for p in sorted((mod.EMBEDS_DIR).glob("post-training*.html")):
    print(p.name, p.stat().st_size)
