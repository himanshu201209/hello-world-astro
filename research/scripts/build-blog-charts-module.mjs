import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("src/content/blog-charts");
const files = fs
  .readdirSync(dir)
  .filter((f) => /^chart-\d+\.html$/.test(f))
  .sort();

const imports = files
  .map(
    (f, i) =>
      `import chart${String(i + 1).padStart(2, "0")} from "./blog-charts/${f}?raw";`,
  )
  .join("\n");

const arr = files
  .map((_, i) => `  chart${String(i + 1).padStart(2, "0")},`)
  .join("\n");

const out = `${imports}

/** Cellwork embed HTML fragments from the reference blog page (1-indexed via data-blog-chart). */
export const blogCharts: string[] = [
${arr}
];
`;

fs.writeFileSync(path.resolve("src/content/blogCharts.ts"), out);
console.log("wrote blogCharts.ts with", files.length, "charts");
