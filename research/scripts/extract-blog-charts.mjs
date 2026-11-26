import fs from "node:fs";
import path from "node:path";

const html = fs.readFileSync("ref-blog.html", "utf8");
const outDir = path.resolve("src/content/blog-charts");
fs.mkdirSync(outDir, { recursive: true });

const markers = [
  "after-tldr-list",
  "One system feeds every environment at once",
  "The agent accounts for 88% of elapsed time",
  "Over five months, monthly token volume grew 12 times",
  "Each script tracked its own results",
  "When a component fails, the run recovers",
  "The scheduler groups dozens of wake-ups",
  "Workers now start in about twelve seconds",
  "Because agents spend much of a rollout waiting",
  "Eight readers share one build",
  "From one request, the service manages the work",
  "The controller finishes the job by reaching",
  "A dead agent and a wrong answer used to leave",
  "The watchdog stops an agent that has stopped",
  "The ledger stays locked until the matrix",
  "Faster starts need pacing so each job",
  "An adapter gives the harness a new model",
  "Our telemetry platform shows live rollout stages",
];

const embeds = [];
let searchFrom = 0;
while (true) {
  const hit = html.indexOf("attachShadow", searchFrom);
  if (hit === -1) break;
  const scriptStart = html.lastIndexOf("<script>", hit);
  const scriptEnd = html.indexOf("</script>", hit);
  if (scriptStart === -1 || scriptEnd === -1) {
    searchFrom = hit + 12;
    continue;
  }

  let start = scriptStart;
  const lookBehind = html.slice(Math.max(0, scriptStart - 800), scriptStart);

  const wEmbedRel = lookBehind.lastIndexOf('<div class="w-embed"');
  if (wEmbedRel !== -1) {
    start = scriptStart - (lookBehind.length - wEmbedRel);
  } else {
    // Non-w-embed Cellwork: usually
    // <div data-rt-embed-type="true">?<div data-cellwork ...></div><script>...</script></div>
    // or <div><div></div><script>
    const cellworkRel = lookBehind.lastIndexOf("data-cellwork");
    if (cellworkRel !== -1) {
      const hostOpen = lookBehind.lastIndexOf("<div", cellworkRel);
      start = scriptStart - (lookBehind.length - hostOpen);
      // include outer wrapper if present
      const more = html.slice(Math.max(0, start - 120), start);
      const outer = more.lastIndexOf("<div");
      if (outer !== -1) {
        const candidate = more.slice(outer);
        if (/^<div[^>]*>\s*$/.test(candidate) || /data-rt-embed-type/.test(candidate)) {
          start = start - (more.length - outer);
        }
      }
    } else {
      // empty host: <div></div><script>
      const emptyHost = lookBehind.lastIndexOf("<div></div>");
      if (emptyHost !== -1) {
        start = scriptStart - (lookBehind.length - emptyHost);
        const more = html.slice(Math.max(0, start - 80), start);
        const outer = more.lastIndexOf("<div");
        if (outer !== -1) start = start - (more.length - outer);
      }
    }
  }

  let end = scriptEnd + "</script>".length;
  for (let i = 0; i < 3; i++) {
    const m = html.slice(end, end + 40).match(/^\s*<\/div>/);
    if (!m) break;
    end += m[0].length;
  }

  const chunk = html.slice(start, end);
  embeds.push(chunk);
  searchFrom = end;
}

console.log("embeds", embeds.length);
const manifest = [];
embeds.forEach((chunk, i) => {
  const id = String(i + 1).padStart(2, "0");
  const file = `chart-${id}.html`;
  fs.writeFileSync(path.join(outDir, file), chunk);
  const startsWithScript = chunk.trimStart().startsWith("<script>");
  manifest.push({
    id: i + 1,
    file,
    marker: markers[i] || `chart-${id}`,
    bytes: chunk.length,
    startsWithScript,
  });
  console.log(
    file,
    chunk.length,
    startsWithScript ? "BAD-SCRIPT-FIRST" : "ok",
    (markers[i] || "").slice(0, 40),
  );
});

fs.writeFileSync(
  path.join(outDir, "manifest.json"),
  JSON.stringify(manifest, null, 2),
);
