"""Simplify existing Kene audit into one developer action checklist."""
from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

OUT = r"d:\Code\hello-world-astro\Kene_Partners_Fix_Checklist.xlsx"

# Confirmed actionable tasks only — sourced from existing audit; duplicates merged.
# Priority mapped: P0 Critical/High -> High; important P1/P2 -> Medium; minor -> Low
tasks = [
    # HIGH
    {
        "Priority": "High",
        "Page URL": "Global — Footer component (all pages)",
        "Issue": "Footer links go to the wrong pages, and social labels are misspelled.",
        "What Needs to Be Fixed": (
            "In the global Footer symbol: point “R&D tax credits” to the correct R&D/claiming page (not /rd-innovation-grants); "
            "point “Review my R&D claim” to /claimsure-r-and-d-tax-review; set “Client stories” to /client-stories; "
            "remove or finish any href=# links. Fix accessible names/labels: Facebook, LinkedIn, Back to home page "
            "(currently facbook / linkdin / back to hom page)."
        ),
    },
    {
        "Priority": "High",
        "Page URL": "Global — Contact, Book a consultation, newsletter forms",
        "Issue": "Form fields have no proper labels (placeholders only).",
        "What Needs to Be Fixed": (
            "On each form (Contact, Book a consultation, footer/newsletter, and any shared form component), "
            "add a Webflow Label linked to the field (or aria-label). Keep placeholders as examples only. "
            "One form-component fix covers every page that uses it."
        ),
    },
    {
        "Priority": "High",
        "Page URL": "Global — Site styles / buttons / teal text",
        "Issue": "Button and teal text colors fail accessibility contrast checks.",
        "What Needs to Be Fixed": (
            "In Webflow variables/styles, darken teal or lighten text so contrast is at least 4.5:1 "
            "(especially .button_text and teal-on-dark text). Do not redesign layouts—only adjust colors. "
            "Affects Home, Grants Finder, About, Contact, Insights, and other pages using the same styles."
        ),
    },
    {
        "Priority": "High",
        "Page URL": "Global — Site custom code / CSS",
        "Issue": "Keyboard focus outline is turned off, so focus is hard to see.",
        "What Needs to Be Fixed": (
            "Add site-wide CSS for :focus-visible (clear outline/ring). "
            "Stop using blanket outline:none on links, buttons, and nav (except where a custom focus style already exists)."
        ),
    },
    {
        "Priority": "High",
        "Page URL": "CMS templates — Client Stories + Sector Guides",
        "Issue": "Structured data (JSON-LD) is broken on these templates.",
        "What Needs to Be Fixed": (
            "In the Client Stories and Sector Guides templates, find the JSON-LD embed/custom code. "
            "Stop injecting rich text with line breaks into JSON (or escape it / use a plain-text field). "
            "Publish and recheck a sample page (e.g. /client-stories/ecoeggs-story)."
        ),
    },
    {
        "Priority": "High",
        "Page URL": "Global — Asset library + Home, About, Insights, Grants Finder, Support Hub",
        "Issue": "Pages load slowly because images/assets are too large.",
        "What Needs to Be Fixed": (
            "Compress oversized assets in Webflow (many images are 2–4MB+). Use WebP/AVIF and sensible sizes for heroes. "
            "Replace heavy hero/CMS images on Home, About, Insights listing, Grants Finder, Support Hub, and insight articles. "
            "Set width/height or aspect-ratio on hero, Trustpilot, and marquee images to reduce layout shift on Home."
        ),
    },
    {
        "Priority": "High",
        "Page URL": "https://kene.partners/thank-you",
        "Issue": "Thank-you page is set up in Webflow but shows 404 on the live site.",
        "What Needs to Be Fixed": (
            "Publish the Thank you page, or change Contact / Book a consultation form redirects to a live success page. "
            "Submit a test form to confirm."
        ),
    },
    {
        "Priority": "High",
        "Page URL": "Webflow — Services CMS Template",
        "Issue": "SEO title still says “Teknolab” (old template brand).",
        "What Needs to Be Fixed": (
            "Open Services Template → Page SEO settings. Replace “Teknolab” with Kene branding, or archive/unpublish "
            "the unused Services CMS if those pages are not needed."
        ),
    },
    {
        "Priority": "High",
        "Page URL": "https://kene.partners/insights (listing page)",
        "Issue": "An icon control on Insights has no accessible name.",
        "What Needs to Be Fixed": (
            "On the Insights page, find the unnamed filter/search/pagination icon control and add an aria-label "
            "(e.g. Search insights or Clear filters)."
        ),
    },
    # MEDIUM
    {
        "Priority": "Medium",
        "Page URL": "Global — Site settings custom code (head/footer)",
        "Issue": "Extra scripts (Swiper, Trustpilot, custom CDN) slow the site.",
        "What Needs to Be Fixed": (
            "In Site Settings → Custom Code: load Swiper only on pages that use sliders; lazy-load Trustpilot; "
            "review whether form-fields-cdn.js is still needed. Keep GTM, but avoid loading non-essential tags before the page is usable."
        ),
    },
    {
        "Priority": "Medium",
        "Page URL": "CMS items — Insights, Grants, Support Hub, etc. (many items)",
        "Issue": "Many meta titles are too long and many meta descriptions are too long.",
        "What Needs to Be Fixed": (
            "In CMS item fields (Meta Title / Meta Description), shorten titles to about 50–60 characters and "
            "descriptions to about 120–155. Start with Grants Finder page SEO, then long grant and insight items. "
            "Same field pattern across templates—fix content, not the template binding."
        ),
    },
    {
        "Priority": "Medium",
        "Page URL": "Global — Navbar / page wrapper",
        "Issue": "No “Skip to main content” link for keyboard users.",
        "What Needs to Be Fixed": (
            "In the global nav/header component, add a visually hidden Skip to main content link as the first focusable "
            "element, pointing to the main content block (give main an id, e.g. main)."
        ),
    },
    {
        "Priority": "Medium",
        "Page URL": "Global — Home testimonials Swiper (shared component)",
        "Issue": "Testimonial slider uses an invalid ARIA list role.",
        "What Needs to Be Fixed": (
            "On the testimonials Swiper wrapper, remove role=list (or give slides proper listitem roles). "
            "Keep Previous/Next buttons labeled as they are."
        ),
    },
    {
        "Priority": "Medium",
        "Page URL": "Global — Asset Manager (informative images)",
        "Issue": "About one-third of library assets have no alt text set.",
        "What Needs to Be Fixed": (
            "In Webflow Assets, add clear alt text for informative images (team photos, charts, meaningful photos). "
            "Leave alt empty only for pure decoration (e.g. comma icons)."
        ),
    },
    {
        "Priority": "Medium",
        "Page URL": "https://kene.partners/innovation-funding-event and /innovation-funding-event-v2",
        "Issue": "Both event pages share the same meta description.",
        "What Needs to Be Fixed": (
            "In Page SEO settings, write unique meta descriptions for each page, or noindex/redirect the old version "
            "to the one you want to keep."
        ),
    },
    {
        "Priority": "Medium",
        "Page URL": "https://kene.partners/previous-grants",
        "Issue": "Page is live but missing from the sitemap.",
        "What Needs to Be Fixed": (
            "If it should be indexed: confirm it is published and included in the sitemap. "
            "If not: add noindex in Page SEO settings."
        ),
    },
    {
        "Priority": "Medium",
        "Page URL": "https://kene.partners/checkout (+ draft/test pages in Webflow)",
        "Issue": "Unused checkout/draft pages are still in the project; checkout is publicly reachable.",
        "What Needs to Be Fixed": (
            "Noindex or password-protect /checkout (and related ecommerce pages), or disable ecommerce if unused. "
            "Archive draft pages: Grants Finder Test, Support Hub test, Fetch grant, Style Guide."
        ),
    },
    {
        "Priority": "Medium",
        "Page URL": "CMS — Services collection",
        "Issue": "Services CMS still contains Lorem ipsum placeholder text.",
        "What Needs to Be Fixed": (
            "Open Services collection items and replace Lorem ipsum / placeholder copy with real content, "
            "or archive the collection if it is not used on the live site."
        ),
    },
    {
        "Priority": "Medium",
        "Page URL": "Global — Marquee + Swiper custom code",
        "Issue": "Animations ignore “reduce motion” user settings.",
        "What Needs to Be Fixed": (
            "In site footer custom code, pause marquee CSS and Swiper autoplay when prefers-reduced-motion: reduce is set."
        ),
    },
    # LOW
    {
        "Priority": "Low",
        "Page URL": "https://kene.partners/ (Home) — Page SEO",
        "Issue": "Home SEO title has a hidden tab character at the end.",
        "What Needs to Be Fixed": "In Home Page Settings → SEO, retype the title cleanly and republish.",
    },
    {
        "Priority": "Low",
        "Page URL": "https://kene.partners/r-and-d-tax-calculator",
        "Issue": "Page title is too short / not descriptive enough.",
        "What Needs to Be Fixed": (
            "In Page SEO, set a fuller title such as: R&D Tax Credit Calculator | Estimate Your Claim | Kene."
        ),
    },
    {
        "Priority": "Low",
        "Page URL": "CMS template — Team Details",
        "Issue": "Team profile meta descriptions are almost identical.",
        "What Needs to Be Fixed": (
            "Add a Meta Description field per team member (or shorten the shared template text) so each profile "
            "has a unique one-line description including their role."
        ),
    },
    {
        "Priority": "Low",
        "Page URL": "CMS — Sector Guides (e.g. software, water-and-waste)",
        "Issue": "Some sector guide pages skip heading levels in the content.",
        "What Needs to Be Fixed": (
            "In those CMS rich-text fields, use headings in order (H2 then H3). Fix content on affected items "
            "such as software-rd-tax-relief-funding and water-and-waste."
        ),
    },
    {
        "Priority": "Low",
        "Page URL": "Cloudflare / hosting headers (not Webflow Designer)",
        "Issue": "Security headers like CSP and X-Content-Type-Options are missing.",
        "What Needs to Be Fixed": (
            "In Cloudflare (or hosting), add basic headers: X-Content-Type-Options: nosniff, "
            "Referrer-Policy, and frame protection. Stage CSP carefully so GTM/Trustpilot still work."
        ),
    },
]

# Needs further verification — not in main action list as confirmed fix tasks
verify = [
    {
        "Priority": "Verify",
        "Page URL": "https://kene.partners/contact-us",
        "Issue": "Contact submit stays disabled until fields are filled — screen reader behavior not fully tested.",
        "What Needs to Be Fixed": (
            "Manual check with keyboard + screen reader: confirm users understand why Submit is disabled, "
            "and that validation errors are announced. Only change Webflow form settings if that test fails."
        ),
    },
    {
        "Priority": "Verify",
        "Page URL": "https://kene.partners/ (browser console)",
        "Issue": "Lighthouse reported console/best-practice warnings; exact JS errors need a quick DevTools check.",
        "What Needs to Be Fixed": (
            "Open Home in Chrome DevTools → Console. Fix any real errors (e.g. slider warnings). "
            "Ignore noise from third-party cookies unless it breaks functionality."
        ),
    },
    {
        "Priority": "Verify",
        "Page URL": "Nav items “RDEC & SME Accounting” and “Eligible Costs”",
        "Issue": "These nav links currently point to # — confirm if pages are missing or links are unfinished.",
        "What Needs to Be Fixed": (
            "Decide with content/SEO: link to real pages, or remove the nav items until pages exist."
        ),
    },
]

header_font = Font(name="Arial", bold=True, color="FFFFFF", size=11)
header_fill = PatternFill("solid", fgColor="0B3D4A")
high_fill = PatternFill("solid", fgColor="F8D7DA")
med_fill = PatternFill("solid", fgColor="FFF3CD")
low_fill = PatternFill("solid", fgColor="D1E7DD")
verify_fill = PatternFill("solid", fgColor="E2E3E5")
section_font = Font(name="Arial", bold=True, size=12, color="0B3D4A")
wrap = Alignment(wrap_text=True, vertical="top")
thin = Border(
    left=Side(style="thin", color="CCCCCC"),
    right=Side(style="thin", color="CCCCCC"),
    top=Side(style="thin", color="CCCCCC"),
    bottom=Side(style="thin", color="CCCCCC"),
)

cols = ["Priority", "Page URL", "Issue", "What Needs to Be Fixed", "Status"]


def write_row(ws, r, item, fill=None):
    values = [
        item["Priority"],
        item["Page URL"],
        item["Issue"],
        item["What Needs to Be Fixed"],
        "Pending",
    ]
    for c, val in enumerate(values, 1):
        cell = ws.cell(r, c, val)
        cell.font = Font(name="Arial", size=10)
        cell.alignment = wrap
        cell.border = thin
        if fill and c == 1:
            cell.fill = fill


wb = Workbook()
ws = wb.active
ws.title = "Fix Checklist"

for c, name in enumerate(cols, 1):
    cell = ws.cell(1, c, name)
    cell.font = header_font
    cell.fill = header_fill
    cell.alignment = Alignment(wrap_text=True, vertical="center", horizontal="center")

row = 2
for t in tasks:
    fill = {"High": high_fill, "Medium": med_fill, "Low": low_fill}[t["Priority"]]
    write_row(ws, row, t, fill)
    ws.row_dimensions[row].height = 55
    row += 1

# Spacer + verification section
row += 1
ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=5)
ws.cell(row, 1, "Needs verification (check before changing Webflow)")
ws.cell(row, 1).font = section_font
row += 1

for t in verify:
    write_row(ws, row, t, verify_fill)
    ws.row_dimensions[row].height = 50
    row += 1

# Status dropdown for all data rows
dv = DataValidation(type="list", formula1='"Pending,In Progress,Fixed"', allow_blank=False)
dv.error = "Pick Pending, In Progress, or Fixed"
dv.errorTitle = "Status"
# Apply to Status column for task + verify rows (skip header and section title)
dv.add(f"E2:E{row}")
ws.add_data_validation(dv)

ws.column_dimensions["A"].width = 12
ws.column_dimensions["B"].width = 42
ws.column_dimensions["C"].width = 42
ws.column_dimensions["D"].width = 70
ws.column_dimensions["E"].width = 14
ws.freeze_panes = "A2"
ws.auto_filter.ref = f"A1:E{len(tasks)+1}"

# Note row
row += 1
ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=5)
ws.cell(
    row,
    1,
    "Source: existing Kene Partners audit (2026-11-05). No new audit. Passed checks and non-actionable suggestions removed. Related issues combined into single tasks.",
).font = Font(name="Arial", italic=True, size=9, color="666666")

wb.save(OUT)
print(f"Wrote {OUT}")
print(f"Action tasks: {len(tasks)} | Verify: {len(verify)}")
