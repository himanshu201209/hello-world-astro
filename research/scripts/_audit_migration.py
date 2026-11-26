import csv
import re
from pathlib import Path

path = Path(r"C:\Users\ADMIN\Downloads\v41 - Researches - 6a04bd23eb9d40f76dac12bd.csv")
content = Path(__file__).resolve().parents[1] / "src" / "content" / "research"

with path.open(encoding="utf-8-sig", newline="") as f:
    rows = list(csv.DictReader(f))

for r in rows:
    slug = r["Slug"]
    body = r.get("Body") or ""
    intro = r.get("Research Intro") or ""
    mdx = content / f"{slug}.mdx"
    mdx_text = mdx.read_text(encoding="utf-8") if mdx.exists() else ""
    imgs = len(re.findall(r"<img", body, re.I))
    tables = len(re.findall(r"<table", body, re.I))
    embeds = len(re.findall(r"data-rt-embed|<iframe", body, re.I))
    draft = "draft: true" in mdx_text
    print(
        f"{slug}: csv_body={len(body)} intro={len(intro)} imgs={imgs} "
        f"tables={tables} embeds={embeds} mdx={len(mdx_text)} draft={draft} "
        f"hide={r.get('Hide')!r} cms_draft={r.get('Draft')!r}"
    )
