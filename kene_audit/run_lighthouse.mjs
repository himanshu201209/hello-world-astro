import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const outDir = "d:/Code/hello-world-astro/kene_audit/lighthouse";
fs.mkdirSync(outDir, { recursive: true });

const urls = [
  ["home", "https://kene.partners/"],
  ["about", "https://kene.partners/about-us"],
  ["insights", "https://kene.partners/insights"],
  ["grants-finder", "https://kene.partners/grants-finder"],
  ["support-hub", "https://kene.partners/support-hub"],
  ["contact", "https://kene.partners/contact-us"],
  ["insight-article", "https://kene.partners/insights/how-to-choose-an-r-and-d-tax-advisor"],
  ["grant-detail", "https://kene.partners/grants/women-in-innovation-awards-2025-26"],
];

const summary = [];

for (const [name, url] of urls) {
  for (const formFactor of ["mobile", "desktop"]) {
    const outPath = path.join(outDir, `${name}-${formFactor}.json`);
    console.log(`Running ${name} ${formFactor}...`);
    try {
      execFileSync(
        "npx",
        [
          "--yes",
          "lighthouse",
          url,
          "--quiet",
          "--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage",
          `--form-factor=${formFactor}`,
          formFactor === "mobile" ? "--screenEmulation.mobile=true" : "--screenEmulation.mobile=false",
          "--only-categories=performance,accessibility,best-practices,seo",
          "--output=json",
          `--output-path=${outPath}`,
        ],
        { stdio: "inherit", shell: true }
      );
      const report = JSON.parse(fs.readFileSync(outPath, "utf8"));
      const cats = report.categories || {};
      const audits = report.audits || {};
      const metrics = {
        name,
        url,
        formFactor,
        performance: Math.round((cats.performance?.score || 0) * 100),
        accessibility: Math.round((cats.accessibility?.score || 0) * 100),
        bestPractices: Math.round((cats["best-practices"]?.score || 0) * 100),
        seo: Math.round((cats.seo?.score || 0) * 100),
        LCP: audits["largest-contentful-paint"]?.numericValue,
        INP: audits["interaction-to-next-paint"]?.numericValue ?? audits["experimental-interaction-to-next-paint"]?.numericValue,
        CLS: audits["cumulative-layout-shift"]?.numericValue,
        TBT: audits["total-blocking-time"]?.numericValue,
        FCP: audits["first-contentful-paint"]?.numericValue,
        SI: audits["speed-index"]?.numericValue,
        TTI: audits["interactive"]?.numericValue,
        failedA11y: Object.values(audits)
          .filter((a) => a.score !== null && a.score < 1 && (a.id?.includes("aria") || a.id?.includes("color") || a.id?.includes("button") || a.id?.includes("label") || a.id?.includes("link") || a.id?.includes("heading") || a.id?.includes("image") || a.id?.includes("meta") || a.id?.includes("html") || a.id?.includes("document") || a.id?.includes("bypass") || a.id?.includes("focus") || a.id?.includes("name")))
          .map((a) => ({ id: a.id, title: a.title, score: a.score }))
          .slice(0, 30),
        failedSeo: Object.values(audits)
          .filter((a) => a.score !== null && a.score < 1 && cats.seo?.auditRefs?.some((r) => r.id === a.id))
          .map((a) => ({ id: a.id, title: a.title })),
        opportunities: Object.values(audits)
          .filter((a) => a.details?.type === "opportunity" && (a.numericValue || 0) > 50)
          .map((a) => ({ id: a.id, title: a.title, savingsMs: a.numericValue }))
          .sort((a, b) => (b.savingsMs || 0) - (a.savingsMs || 0))
          .slice(0, 8),
      };
      summary.push(metrics);
      console.log(JSON.stringify({ name, formFactor, p: metrics.performance, a: metrics.accessibility, s: metrics.seo, LCP: metrics.LCP, CLS: metrics.CLS }));
    } catch (e) {
      console.error("FAILED", name, formFactor, e.message);
      summary.push({ name, url, formFactor, error: String(e.message) });
    }
  }
}

fs.writeFileSync(path.join(outDir, "summary.json"), JSON.stringify(summary, null, 2));
console.log("Done", summary.length);
