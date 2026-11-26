from pathlib import Path

root = Path(__file__).resolve().parents[1] / "src" / "content" / "research"


def escape_braces(line: str) -> str:
    out = []
    i = 0
    while i < len(line):
        ch = line[i]
        if ch == "\\" and i + 1 < len(line) and line[i + 1] in "{}":
            out.append(line[i : i + 2])
            i += 2
            continue
        if ch in "{}":
            out.append("\\" + ch)
            i += 1
            continue
        out.append(ch)
        i += 1
    return "".join(out)


for path in root.glob("*.mdx"):
    if path.name == "are-ai-agents-getting-better.mdx":
        continue
    text = path.read_text(encoding="utf-8")
    # Normalize any previous escaping down to unescaped, then escape once.
    while "\\{" in text or "\\}" in text:
        text = text.replace("\\{", "{").replace("\\}", "}")
    if text.startswith("---"):
        end = text.find("---", 3)
        fm, body = text[: end + 3], text[end + 3 :]
    else:
        fm, body = "", text
    lines = []
    for line in body.splitlines(True):
        stripped = line.lstrip()
        if stripped.startswith("import ") or stripped.startswith("<"):
            lines.append(line)
        else:
            lines.append(escape_braces(line))
    path.write_text(fm + "".join(lines), encoding="utf-8")
    print("ok", path.name)

sample = (root / "pii-transformation-for-enterprise-datasets.mdx").read_text(
    encoding="utf-8"
).splitlines()[72]
print(sample)
