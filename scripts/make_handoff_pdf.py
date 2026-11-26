from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, Preformatted, SimpleDocTemplate, Spacer

out = Path(r"D:\Code\hello-world-astro\PROJECT_HANDOFF_BRIEF.pdf")

doc = SimpleDocTemplate(
    str(out),
    pagesize=LETTER,
    leftMargin=0.75 * inch,
    rightMargin=0.75 * inch,
    topMargin=0.7 * inch,
    bottomMargin=0.7 * inch,
    title="hello-world-astro Project Handoff Brief",
    author="Cursor session handoff",
)

styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="TitleCustom",
        parent=styles["Heading1"],
        fontSize=18,
        textColor=HexColor("#111111"),
        spaceAfter=8,
    )
)
styles.add(
    ParagraphStyle(
        name="H2Custom",
        parent=styles["Heading2"],
        fontSize=12,
        textColor=HexColor("#111111"),
        spaceBefore=12,
        spaceAfter=6,
    )
)
styles.add(
    ParagraphStyle(
        name="BodyCustom",
        parent=styles["BodyText"],
        fontSize=9.5,
        leading=13,
        textColor=HexColor("#222222"),
        spaceAfter=6,
    )
)
styles.add(
    ParagraphStyle(
        name="Small",
        parent=styles["BodyText"],
        fontSize=8.5,
        leading=11.5,
        textColor=HexColor("#333333"),
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="CodeBlock",
        parent=styles["Code"],
        fontSize=8,
        leading=10.5,
        backColor=HexColor("#F4F4F4"),
        leftIndent=4,
        rightIndent=4,
        spaceBefore=4,
        spaceAfter=8,
    )
)

story = []
story.append(
    Paragraph("hello-world-astro — Project Handoff Brief", styles["TitleCustom"])
)
story.append(
    Paragraph(
        "Date: 26 Nov 2026 · Purpose: Continue work in Claude · Scope: local Astro monorepo for micro1 Webflow Cloud",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "This brief summarizes the full Cursor session history and current repository state so another agent can continue modifications safely.",
        styles["BodyCustom"],
    )
)

story.append(Paragraph("1. Project goal", styles["H2Custom"]))
story.append(
    Paragraph(
        "Build and maintain Webflow Cloud Astro apps for micro1: a Research listing/detail experience (DevLink + Sanity blogs) and a separate Blog app, mounted under Webflow site paths.",
        styles["BodyCustom"],
    )
)

story.append(Paragraph("2. Current monorepo structure", styles["H2Custom"]))
story.append(
    Preformatted(
        """hello-world-astro/          # Git root (keep .git here)
├── research/               # Full Research Astro app (existing work)
├── blog/                   # Independent Blog Astro app (new)
├── README.md
└── .gitignore

Git remote: git@github.com:himanshu201209/hello-world-astro.git
Branch: main
Do NOT create nested .git folders.""",
        styles["CodeBlock"],
    )
)

story.append(Paragraph("3. Timeline of work (chronological)", styles["H2Custom"]))
items = [
    "<b>DevLink chrome:</b> Fetched Nav, Footer, GlobalCss from Webflow site “v41 Speed” (siteId 6ae04bddc23a43dde81d354f) into research via DevLink export; wired SiteShell on pages.",
    "<b>Research listing:</b> Replaced starter UI with two research-paper cards styled like micro1 research; ~200px top padding; paper detail pages for agents + PII papers.",
    "<b>Routing / mount path:</b> App uses Astro base: \"CLOUD_MOUNT_PATH\". Live mount is /research. Listing lives at app root; paper routes are sibling pages (avoid double /research/research).",
    "<b>Blog replica page:</b> Built static replica of https://micro1-stage.webflow.io/blog/the-only-bottleneck-should-be-the-model at route /blog-the-only-bottleneck-should-be-the-model with Cellwork chart embeds.",
    "<b>Sanity CMS blogs:</b> Connected project eoib96e0 / dataset production. Dynamic “Blogs” section under Research Papers; detail pages at /blog/[slug] with Portable Text.",
    "<b>Prod 500 fix attempt:</b> Live https://micro1-stage-speed.webflow.io/research returned HTTP 500 after Sanity integration. Root cause: Webflow Cloud builds without .env, so missing Sanity env crashed page. Fixed with hardcoded public defaults + soft-fail fetch. Local Webflow CLI deploy hit Windows Node 26 spawn EINVAL / adapter version issues — may still need redeploy from a supported environment.",
    "<b>Monorepo restructure:</b> Moved entire Astro app into research/; created then scaffolded blog/. Git stays at repo root. Research production build succeeded from research/.",
    "<b>Blog app scaffold:</b> New independent Astro 7 + Cloudflare adapter app in blog/, placeholder “Blog Comes from Webflow Cloud”, Webflow Cloud compatible with CLOUD_MOUNT_PATH (intended mount /blog). Blog production build succeeded. Local blog dev on port 4322.",
]
for t in items:
    story.append(Paragraph(f"• {t}", styles["Small"]))

story.append(Paragraph("4. Key technical config", styles["H2Custom"]))
story.append(
    Preformatted(
        """Both apps:
- Astro 7, output: "server", adapter: @astrojs/cloudflare
- base: "CLOUD_MOUNT_PATH"  (Webflow Cloud replaces with mount path)
- Scripts: npm run dev | build | preview | deploy

research/
- DevLink: src/devlink (Nav, Footer, GlobalCss)
- Sanity: src/lib/sanity.ts (defaults eoib96e0 / production)
- Listing: src/pages/index.astro + DevLinkChrome.tsx
- Paper pages: are-ai-agents-getting-better, pii-transformation-...
- Bottleneck replica: blog-the-only-bottleneck-should-be-the-model
- Sanity detail: src/pages/blog/[slug].astro
- webflow.json siteId: 6ae04bddc23a43dde81d354f

blog/
- Minimal placeholder page only
- webflow.json siteId same site; intended mount /blog
- Local test: http://localhost:4322/CLOUD_MOUNT_PATH""",
        styles["CodeBlock"],
    )
)

story.append(Paragraph("5. Important URLs", styles["H2Custom"]))
story.append(
    Paragraph(
        "• Live Research mount (had 500): https://micro1-stage-speed.webflow.io/research",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• Stage blog reference: https://micro1-stage.webflow.io/blog/the-only-bottleneck-should-be-the-model",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• Local Research (when running): http://localhost:4321/CLOUD_MOUNT_PATH",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• Local Blog (when running): http://localhost:4322/CLOUD_MOUNT_PATH",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• Webflow Cloud app (research): app id 623015b3-111c-4b98-8b80-e59544488976 (from earlier CLI list)",
        styles["Small"],
    )
)

story.append(Paragraph("6. Constraints the user repeatedly set", styles["H2Custom"]))
story.append(
    Paragraph(
        "• Do not push/commit unless asked; do not change git remote/branch.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• Do not deploy/publish to Webflow Cloud unless asked.", styles["Small"]
    )
)
story.append(
    Paragraph(
        "• Research and Blog must build independently from their folders.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• Do not create nested Git repos; keep .git at monorepo root.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• Prefer not modifying research when only working on blog (and vice versa).",
        styles["Small"],
    )
)

story.append(Paragraph("7. Known issues / follow-ups for Claude", styles["H2Custom"]))
story.append(
    Paragraph(
        "• <b>Production Research 500:</b> Code was hardened for missing Sanity env; confirm redeploy succeeded. Webflow CLI deploy on Windows/Node 26 previously failed (spawn EINVAL; adapter wanted @astrojs/cloudflare &gt;=14.1.7 &lt;14.2.0).",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• <b>research/.gitignore:</b> May have been diluted during monorepo move (verify it still ignores node_modules/, dist/, .env).",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• <b>Blog local dev:</b> First astro dev start can fail on Vite SSR optimize-deps race with Cloudflare adapter; retry usually works. Prefer port 4322 if Research uses 4321.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• <b>Sanity posts:</b> publishedAt often null — UI falls back to _createdAt as Month Year.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• <b>Bottleneck charts:</b> Cellwork embeds mounted client-side from extracted HTML fragments under research/src/content/blog-charts/.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "• User plans to add more Blog application files later; current blog app is a placeholder scaffold.",
        styles["Small"],
    )
)

story.append(Paragraph("8. Suggested next steps", styles["H2Custom"]))
story.append(
    Paragraph(
        "1. Verify/redeploy Research to Webflow Cloud mount /research and confirm 500 is gone.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "2. Expand blog/ beyond placeholder (content, DevLink, Sanity, or Webflow CMS as requested).",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "3. Deploy blog/ to Webflow Cloud mount /blog when ready.", styles["Small"]
    )
)
story.append(
    Paragraph(
        "4. Optionally restore a proper research/.gitignore and align @astrojs/cloudflare versions for Webflow Cloud compatibility.",
        styles["Small"],
    )
)

story.append(Spacer(1, 10))
story.append(
    Paragraph(
        "End of handoff brief. Repository path: D:\\Code\\hello-world-astro",
        styles["Small"],
    )
)

doc.build(story)
print(f"Wrote {out}")
print(f"Size={out.stat().st_size}")
