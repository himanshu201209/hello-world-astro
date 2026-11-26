import csv
import re
from pathlib import Path

path = Path(r"C:\Users\ADMIN\Downloads\v41 - Researches - 6a04bd23eb9d40f76dac12bd.csv")
with path.open(encoding="utf-8-sig", newline="") as f:
    rows = {r["Slug"]: r for r in csv.DictReader(f)}

slug = "post-training-a-748b-model-on-stem-reasoning"
body = rows[slug]["Body"]
intro = rows[slug]["Research Intro"]
print("intro", intro)
print("body len", len(body))
print("h2 count", len(re.findall(r"<h2", body, re.I)))
print("p count", len(re.findall(r"<p", body, re.I)))
print("img count", len(re.findall(r"<img", body, re.I)))
print("embed count", len(re.findall(r"data-rt-embed", body, re.I)))
# first 2000 chars
print("---BODY START---")
print(body[:2000])
print("---BODY MID---")
print(body[20000:22000])
