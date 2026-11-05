"""Build Kene Partners complete website audit workbook."""
from __future__ import annotations

import json
from datetime import date
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

OUT = Path(r"d:\Code\hello-world-astro\kene_audit")
AUDIT_DATE = "2026-11-05"
SITE = "https://kene.partners"

# Load measured data
crawl = json.loads((OUT / "crawl_results.json").read_text(encoding="utf-8"))
issues_raw = json.loads((OUT / "seo_issues.json").read_text(encoding="utf-8"))
lh = json.loads((OUT / "lighthouse" / "summary.json").read_text(encoding="utf-8"))
pages = json.loads((OUT / "kene-pages.json").read_text(encoding="utf-8"))
assets = json.loads((OUT / "assets_summary.json").read_text(encoding="utf-8"))
deep = json.loads((OUT / "deep_checks.json").read_text(encoding="utf-8"))
link_status = json.loads((OUT / "link_status.json").read_text(encoding="utf-8"))

header_font = Font(name="Arial", bold=True, color="FFFFFF", size=11)
header_fill = PatternFill("solid", fgColor="0B3D4A")
section_fill = PatternFill("solid", fgColor="E6F2F0")
crit_fill = PatternFill("solid", fgColor="F8D7DA")
high_fill = PatternFill("solid", fgColor="FCE8B2")
med_fill = PatternFill("solid", fgColor="FFF3CD")
low_fill = PatternFill("solid", fgColor="D1E7DD")
wrap = Alignment(wrap_text=True, vertical="top")
thin = Border(
    left=Side(style="thin", color="CCCCCC"),
    right=Side(style="thin", color="CCCCCC"),
    top=Side(style="thin", color="CCCCCC"),
    bottom=Side(style="thin", color="CCCCCC"),
)


def style_header(ws, cols):
    for col, name in enumerate(cols, 1):
        cell = ws.cell(1, col, name)
        cell.font = header_font
        cell.fill = header_fill
        cell.alignment = Alignment(wrap_text=True, vertical="center")
    ws.freeze_panes = "A2"
    ws.auto_filter.ref = f"A1:{get_column_letter(len(cols))}1"


def autosize(ws, widths):
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w


def severity_fill(sev):
    return {"Critical": crit_fill, "High": high_fill, "Medium": med_fill, "Low": low_fill}.get(sev)


ISSUE_COLS = [
    "Issue ID",
    "Page URL",
    "Category",
    "Issue",
    "Severity",
    "Current Finding",
    "Recommended Fix",
    "Impact",
    "Evidence",
    "Scope",
    "WCAG Reference",
    "Priority",
    "Estimated Effort",
    "Responsible Team",
    "Status",
]

findings = []


def add(**kwargs):
    row = {c: "" for c in ISSUE_COLS}
    row.update(kwargs)
    row.setdefault("Status", "Not Started")
    findings.append(row)


# ---------- Findings (grouped, actionable) ----------

add(
    **{
        "Issue ID": "TECH-001",
        "Page URL": f"{SITE}/ (sitewide sample)",
        "Category": "Technical",
        "Issue": "Poor Largest Contentful Paint (LCP) on key marketing pages",
        "Severity": "Critical",
        "Current Finding": (
            "Lighthouse lab measurements (Chrome headless, 2026-11-05): Home mobile LCP 5.99s (Perf 60); "
            "About mobile LCP 12.35s (Perf 59); Insights mobile LCP 12.66s (Perf 61); Grants Finder mobile LCP 17.54s (Perf 61); "
            "Support Hub mobile LCP 18.03s (Perf 54); Insight article mobile LCP 20.63s (Perf 61). "
            "Contact and Grant detail pages performed better (LCP ~1.9–2.6s)."
        ),
        "Recommended Fix": (
            "In Webflow: (1) Compress/replace oversized hero and CMS images (several assets >2–4MB observed); "
            "prefer AVIF/WebP with correctly sized responsive variants. (2) Preload LCP image on templates. "
            "(3) Defer non-critical third parties (GTM/Trustpilot/Swiper) until after LCP. "
            "(4) Reduce unused Webflow JS chunks and custom CDN form script. Re-test with Lighthouse after each change."
        ),
        "Impact": "Fails Core Web Vitals LCP threshold (2.5s); harms rankings and conversion on high-intent pages.",
        "Evidence": "kene_audit/lighthouse/summary.json; unused JS on home includes webflow chunks, GTM, gtag, form-fields-cdn.js",
        "Scope": "Global",
        "WCAG Reference": "",
        "Priority": "P0",
        "Estimated Effort": "Large",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "TECH-002",
        "Page URL": f"{SITE}/",
        "Category": "Technical",
        "Issue": "High Cumulative Layout Shift (CLS) on homepage (mobile)",
        "Severity": "High",
        "Current Finding": "Home mobile CLS measured at 0.206 (Lighthouse). About mobile CLS 0.123; Insights desktop CLS 0.138; Grants Finder desktop CLS 0.124. Threshold for good CLS is 0.1.",
        "Recommended Fix": "Reserve explicit width/height (or aspect-ratio) for hero media, Trustpilot embed, logo marquee, and late-loading fonts. Avoid injecting cookie/banner content that pushes layout after first paint without reserved space. Stabilize Swiper slide heights.",
        "Impact": "Poor visual stability; hurts INP/UX perception and CWV.",
        "Evidence": "Lighthouse home-mobile.json CLS=0.206",
        "Scope": "Global",
        "Priority": "P0",
        "Estimated Effort": "Medium",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "TECH-003",
        "Page URL": "Global",
        "Category": "Technical",
        "Issue": "Missing modern security headers",
        "Severity": "Medium",
        "Current Finding": "Response headers on https://kene.partners/ include HSTS (max-age=31536000) but lack Content-Security-Policy, X-Frame-Options / frame-ancestors, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy.",
        "Recommended Fix": "Configure via Cloudflare or Webflow custom headers: at minimum nosniff, a sensible Referrer-Policy (strict-origin-when-cross-origin), frame-ancestors 'self', and a staged CSP compatible with GTM/Trustpilot/Turnstile.",
        "Impact": "Increases risk of clickjacking, MIME sniffing, and XSS blast radius.",
        "Evidence": "deep_checks.json > security.headers",
        "Scope": "Global",
        "Priority": "P2",
        "Estimated Effort": "Medium",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "TECH-004",
        "Page URL": "Global (third-party stack)",
        "Category": "Technical",
        "Issue": "Heavy third-party and unused JavaScript",
        "Severity": "High",
        "Current Finding": "Home mobile Lighthouse flagged unused JavaScript (~450ms estimated savings). Largest unused sources included Webflow JS chunks (~99KB + 47KB + 37KB), GTM (~70KB), gtag (~70KB), custom form-fields CDN (~44KB), Turnstile (~24KB).",
        "Recommended Fix": "Audit GTM tags; load marketing tags on interaction/consent. Load Swiper only on pages with sliders. Review form-fields-cdn.js necessity. Enable consent-mode gated loading for analytics.",
        "Impact": "Contributes to poor TBT/LCP and main-thread blocking.",
        "Evidence": "lighthouse/home-mobile.json unused-javascript audit",
        "Scope": "Global",
        "Priority": "P1",
        "Estimated Effort": "Medium",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "TECH-005",
        "Page URL": "Asset library (sampled 300/437)",
        "Category": "Technical",
        "Issue": "Very large image/PDF assets in Webflow library",
        "Severity": "High",
        "Current Finding": "Asset library contains multi‑MB files e.g. History image.jpg ~4.0MB, gradient bg.webp ~3.7MB, ECC.png ~3.5MB, Hiring process steps.png ~3.5MB, multiple JPEGs ~2–3.5MB, plus PDFs up to ~10MB.",
        "Recommended Fix": "Compress images to WebP/AVIF via Webflow asset compression or external tooling; target <200–300KB for heroes where possible. Replace PNG screenshots with compressed WebP. Host large PDFs optimally and lazy-link rather than embedding.",
        "Impact": "Direct driver of LCP and bandwidth cost, especially on mobile.",
        "Evidence": "assets_summary.json largest[]; Webflow data_assets_tool sample",
        "Scope": "Global",
        "Priority": "P0",
        "Estimated Effort": "Medium",
        "Responsible Team": "Designer",
    }
)

add(
    **{
        "Issue ID": "TECH-006",
        "Page URL": f"{SITE}/previous-grants",
        "Category": "Technical",
        "Issue": "Live page missing from XML sitemap",
        "Severity": "Medium",
        "Current Finding": "https://kene.partners/previous-grants returns HTTP 200 but is not listed in https://kene.partners/sitemap.xml (408 URLs).",
        "Recommended Fix": "If indexable, ensure page is published and included in Webflow sitemap settings. If intentionally non-indexable, add noindex and remove from internal nav if present.",
        "Impact": "Crawl discovery gap for an accessible live URL.",
        "Evidence": "deep_checks utility_pages + sitemap parse",
        "Scope": "Single page",
        "Priority": "P2",
        "Estimated Effort": "Small",
        "Responsible Team": "SEO",
    }
)

add(
    **{
        "Issue ID": "TECH-007",
        "Page URL": f"{SITE}/thank-you",
        "Category": "Technical",
        "Issue": "Thank-you page configured in Webflow but returns 404 live",
        "Severity": "Medium",
        "Current Finding": "Webflow contains Thank you page(s), but live URL returns 404. Form success redirects may 404 if pointed here.",
        "Recommended Fix": "Publish the thank-you page or update all form redirect URLs to an existing published success page. Verify Contact and Book consultation forms.",
        "Impact": "Broken conversion confirmation UX; wasted crawl on 404.",
        "Evidence": "Webflow pages list + live GET status 404",
        "Scope": "Single page",
        "Priority": "P1",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "TECH-008",
        "Page URL": "Global",
        "Category": "Technical",
        "Issue": "Console / best-practice failures in Lighthouse",
        "Severity": "Medium",
        "Current Finding": "Home Lighthouse Best Practices score 65. Failures include browser console errors, incorrect image aspect ratio, low-resolution images, Chrome Issues panel findings, and third-party cookies.",
        "Recommended Fix": "Open DevTools console on home and fix JS errors (testimonial slider warns when missing). Correct image dimensions vs CSS display size. Review Cookiebot/third-party cookie configuration under consent.",
        "Impact": "Signals quality issues to users and tooling; may affect trust and debugging time.",
        "Evidence": "lighthouse/home-mobile.json best-practices category",
        "Scope": "Global",
        "Priority": "P2",
        "Estimated Effort": "Medium",
        "Responsible Team": "Developer",
    }
)

# SEO
add(
    **{
        "Issue ID": "SEO-001",
        "Page URL": "Multiple CMS/static pages (26 in crawl sample)",
        "Category": "SEO",
        "Issue": "Meta descriptions exceed ~160 characters",
        "Severity": "Medium",
        "Current Finding": (
            "Automated crawl of 104 URLs found 26 pages with meta description length >160. Examples: "
            "grants-finder (166), kore-r-and-d-support, claimsure, multiple /insights/* and /grants/* and /support-hub/* items."
        ),
        "Recommended Fix": "Shorten meta descriptions to ~120–155 characters with primary keyword + CTA. For CMS, edit Meta Description fields and enforce editorial guidelines; bind templates already use meta-description CMS fields.",
        "Impact": "Google may truncate snippets; weaker SERP CTR.",
        "Evidence": "seo_issues.json meta_description_too_long; crawl_results.json",
        "Scope": "CMS template",
        "Priority": "P1",
        "Estimated Effort": "Medium",
        "Responsible Team": "Content",
    }
)

add(
    **{
        "Issue ID": "SEO-002",
        "Page URL": "Multiple pages (15 in crawl sample)",
        "Category": "SEO",
        "Issue": "Title tags longer than ~60 characters",
        "Severity": "Medium",
        "Current Finding": "15 crawled URLs have title length >60, including grants-finder (63) and several grants/insights titles up to ~70 chars.",
        "Recommended Fix": "Tighten titles to ~50–60 chars. Prefer pattern: Primary topic | Kene. Update CMS Meta Title fields; keep brand at end.",
        "Impact": "Truncated SERP titles reduce clarity and CTR.",
        "Evidence": "seo_issues.json title_too_long",
        "Scope": "CMS template",
        "Priority": "P1",
        "Estimated Effort": "Medium",
        "Responsible Team": "SEO",
    }
)

add(
    **{
        "Issue ID": "SEO-003",
        "Page URL": "Client Stories & some Sector Guides CMS pages",
        "Category": "SEO",
        "Issue": "Invalid JSON-LD structured data (control characters)",
        "Severity": "High",
        "Current Finding": "JSON-LD on client story and some sector guide pages fails JSON.parse with 'Invalid control character'. Verified on /client-stories/ecoeggs-story and /sector-guides/agriculture. Other templates use @graph successfully.",
        "Recommended Fix": "Locate custom schema embed/code component injecting CMS rich text into JSON. Escape newlines/control chars or output description via a plain-text field. Validate with Rich Results Test / Schema validator after fix. Apply at Client Stories Template and Sector Guides Template.",
        "Impact": "Search engines ignore broken schema; loses rich-result eligibility and entity clarity.",
        "Evidence": "deep_checks.json schema blocks INVALID",
        "Scope": "CMS template",
        "Priority": "P0",
        "Estimated Effort": "Medium",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "SEO-004",
        "Page URL": "Most non-home pages",
        "Category": "SEO",
        "Issue": "Structured data is Organization-only / generic @graph without page-type specificity",
        "Severity": "Medium",
        "Current Finding": "Home has Organization schema. Many pages include @graph but lack Article/BlogPosting (insights), FAQPage (FAQ sections), JobPosting, BreadcrumbList, or Service schema. Opportunity for richer results.",
        "Recommended Fix": "Add Webflow JSON-LD per template: BlogPosting+Author for Insights; FAQPage where FAQ CMS field exists; BreadcrumbList sitewide; Service on service landing pages.",
        "Impact": "Missed enhanced SERP features and clearer AI/search understanding.",
        "Evidence": "deep_checks.json schema inspection",
        "Scope": "CMS template",
        "Priority": "P2",
        "Estimated Effort": "Large",
        "Responsible Team": "SEO",
    }
)

add(
    **{
        "Issue ID": "SEO-005",
        "Page URL": f"{SITE}/innovation-funding-event and /innovation-funding-event-v2",
        "Category": "SEO",
        "Issue": "Duplicate meta descriptions on event landing variants",
        "Severity": "Medium",
        "Current Finding": "Both event pages share the same meta description about the agritech draw/gift box.",
        "Recommended Fix": "Differentiate SEO copy per variant or noindex the deprecated version and 301 to the canonical event URL.",
        "Impact": "Keyword cannibalization / duplicate intent.",
        "Evidence": "seo_issues.json duplicate_meta_description",
        "Scope": "Single page",
        "Priority": "P2",
        "Estimated Effort": "Small",
        "Responsible Team": "SEO",
    }
)

add(
    **{
        "Issue ID": "SEO-006",
        "Page URL": "Global footer",
        "Category": "SEO",
        "Issue": "Incorrect / mismatched footer internal links",
        "Severity": "High",
        "Current Finding": (
            "Footer link targets verified from homepage HTML: 'R&D tax credits' points to /rd-innovation-grants (grants page, wrong destination); "
            "'Review my R&D claim' points to /rd-tax-credits-explained (should be ClaimSure page); "
            "some footer items use href='#'. Also nav contains placeholder '#' links for 'RDEC & SME Accounting' and 'Eligible Costs'."
        ),
        "Recommended Fix": "Update footer component links: R&D tax credits → claiming/service page; Review my R&D claim → /claimsure-r-and-d-tax-review; Client stories → /client-stories; remove or complete '#' destinations.",
        "Impact": "Misroutes users and PageRank; harms IA and conversion paths.",
        "Evidence": "deep_checks.json nav_footer.footer; browser snapshot",
        "Scope": "Global",
        "Priority": "P0",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "SEO-007",
        "Page URL": "Webflow Home SEO settings",
        "Category": "SEO",
        "Issue": "Trailing tab character in SEO title field",
        "Severity": "Low",
        "Current Finding": "Webflow page SEO title for Home ends with an explicit tab character: 'R&D Tax Credit Specialists & Advisers London | Kene\\t'.",
        "Recommended Fix": "Re-type the SEO title in Webflow Page Settings and republish.",
        "Impact": "Minor title hygiene / possible odd SERP rendering.",
        "Evidence": "data_pages_tool get_page_metadata Home",
        "Scope": "Single page",
        "Priority": "P3",
        "Estimated Effort": "Small",
        "Responsible Team": "SEO",
    }
)

add(
    **{
        "Issue ID": "SEO-008",
        "Page URL": "CMS collections without SEO field bindings",
        "Category": "SEO",
        "Issue": "Several CMS templates missing SEO title/description bindings",
        "Severity": "High",
        "Current Finding": (
            "Webflow templates with empty SEO title/description: Videos Template, Support Hub Categories, Industries, "
            "Client Stories Categories, Blog Tags, Products/Categories/SKUs. Services Template still uses leftover 'Teknolab' branding in SEO title "
            "and shouldPublish=false (not on live sitemap)."
        ),
        "Recommended Fix": "For any collection intended to be public, add Meta Title/Description fields and bind template SEO. Remove Teknolab placeholder from Services Template. Keep ecommerce templates noindex if unused.",
        "Impact": "Risk of thin/generic titles if those collections are published later; leftover brand pollution.",
        "Evidence": "kene-pages.json; get_page_metadata Services/Videos",
        "Scope": "CMS template",
        "Priority": "P1",
        "Estimated Effort": "Medium",
        "Responsible Team": "Webflow",
    }
)

add(
    **{
        "Issue ID": "SEO-009",
        "Page URL": f"{SITE}/r-and-d-tax-calculator",
        "Category": "SEO",
        "Issue": "Title tag too short",
        "Severity": "Low",
        "Current Finding": "Crawl flagged title length <20 characters on the calculator page.",
        "Recommended Fix": "Expand to a descriptive title e.g. 'R&D Tax Credit Calculator | Estimate Your Claim | Kene'.",
        "Impact": "Weak SERP relevance signal.",
        "Evidence": "seo_issues.json title_too_short",
        "Scope": "Single page",
        "Priority": "P3",
        "Estimated Effort": "Small",
        "Responsible Team": "SEO",
    }
)

add(
    **{
        "Issue ID": "SEO-010",
        "Page URL": "Team profile CMS pages",
        "Category": "SEO",
        "Issue": "Near-duplicate meta descriptions across team profiles",
        "Severity": "Low",
        "Current Finding": "Team template uses a shared description pattern 'Discover the passionate team behind Kene Partners...' with name injection; lengths often 158–165 chars and highly similar across people.",
        "Recommended Fix": "Write unique 1-sentence bios into a Meta Description CMS field per person, or shorten template boilerplate and include role/expertise.",
        "Impact": "Limited differentiation in branded SERPs.",
        "Evidence": "crawl CMS team-details sample titles/descriptions; team template SEO binding",
        "Scope": "CMS template",
        "Priority": "P3",
        "Estimated Effort": "Medium",
        "Responsible Team": "Content",
    }
)

add(
    **{
        "Issue ID": "SEO-011",
        "Page URL": "robots.txt / sitemap",
        "Category": "SEO",
        "Issue": "robots.txt and sitemap are present and valid (pass)",
        "Severity": "Low",
        "Current Finding": "robots.txt disallows /*_page= and references https://kene.partners/sitemap.xml. Sitemap returns 200 with 408 URLs. www → apex 301 confirmed. HTTPS enforced.",
        "Recommended Fix": "No change required for basics. Optionally add sitemap index if URL count grows further; keep pagination param disallow.",
        "Impact": "Positive crawl foundation.",
        "Evidence": "Live robots.txt + sitemap.xml fetch 2026-11-05",
        "Scope": "Global",
        "Priority": "P3",
        "Estimated Effort": "Small",
        "Responsible Team": "SEO",
        "Status": "Verified",
    }
)

# Accessibility
add(
    **{
        "Issue ID": "A11Y-001",
        "Page URL": "Global (Lighthouse)",
        "Category": "Accessibility",
        "Issue": "Insufficient color contrast on buttons and teal text",
        "Severity": "High",
        "Current Finding": (
            "AUTOMATED (Lighthouse): Home mobile color-contrast failed (9 nodes) including CookieYes Accept button and multiple .button_text / .text-color-teal / heading teal elements. "
            "Grants Finder mobile reported 48 contrast failures. About/Contact/Insights also failed contrast audits. Accessibility scores 92–97."
        ),
        "Recommended Fix": "Adjust design tokens so text/button contrast meets 4.5:1 (3:1 for large text). Recheck teal-on-dark and white-on-teal combinations in Webflow variables. Retest with Lighthouse/axe.",
        "Impact": "WCAG 1.4.3 AA failures; harder to read CTAs for low-vision users.",
        "Evidence": "lighthouse home-mobile/grants-finder-mobile color-contrast audits",
        "Scope": "Global",
        "WCAG Reference": "1.4.3 Contrast (Minimum)",
        "Priority": "P0",
        "Estimated Effort": "Medium",
        "Responsible Team": "Designer",
    }
)

add(
    **{
        "Issue ID": "A11Y-002",
        "Page URL": "Contact, Book consultation, newsletter, filters (global forms)",
        "Category": "Accessibility",
        "Issue": "Form fields rely on placeholders without associated <label>",
        "Severity": "Critical",
        "Current Finding": (
            "AUTOMATED HTML audit: Contact form fields First-Name, Last-Name, Company-Name, Email, Phone-Number, Message have ids but no <label for> and no aria-label. "
            "Footer/newsletter email inputs similarly unlabeled. Crawl flagged inputs_missing_label on 48/104 sampled pages (global components). "
            "Browser a11y tree exposes placeholder as name (helpful) but placeholder-only labeling is not WCAG-sufficient when placeholder disappears on input."
        ),
        "Recommended Fix": "Add visible or visually-hidden labels in Webflow forms (Label element linked via For). Or set aria-label on each input. Keep placeholders as examples only.",
        "Impact": "Screen reader and cognitive accessibility risk; WCAG 1.3.1 / 3.3.2.",
        "Evidence": "deep_checks.json forms; crawl seo_issues form_inputs_missing_label",
        "Scope": "Global",
        "WCAG Reference": "1.3.1 Info and Relationships; 3.3.2 Labels or Instructions",
        "Priority": "P0",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "A11Y-003",
        "Page URL": "Global navigation / interactive components",
        "Category": "Accessibility",
        "Issue": "Focus indicators removed (outline: none) without consistent replacement",
        "Severity": "High",
        "Current Finding": (
            "MANUAL + CSS inspection: Focused nav logo and CTA show outline-style:none and box-shadow:none. "
            "Found 14 CSS rules setting outline:none/0 on Webflow focus states (dropdown, nav button, inputs, slider arrows). No sitewide :focus-visible replacement detected."
        ),
        "Recommended Fix": "Add global CSS e.g. :focus-visible { outline: 2px solid <brand>; outline-offset: 2px; } and remove blanket outline:none except where a custom focus ring exists.",
        "Impact": "Keyboard users cannot see focus; WCAG 2.4.7.",
        "Evidence": "Browser CDP computed styles + stylesheet rule samples in session notes",
        "Scope": "Global",
        "WCAG Reference": "2.4.7 Focus Visible",
        "Priority": "P0",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "A11Y-004",
        "Page URL": "Global",
        "Category": "Accessibility",
        "Issue": "No skip-to-main-content link",
        "Severity": "Medium",
        "Current Finding": "MANUAL: No skip link (#main / .w-skip / skip-link) found on homepage. Landmarks header/nav/main/footer are present.",
        "Recommended Fix": "Add a visually hidden 'Skip to main content' link as first focusable element pointing to <main id=\"main\">.",
        "Impact": "Keyboard users must tab through full nav repeatedly.",
        "Evidence": "deep_checks landmarks/skip_link; browser DOM query",
        "Scope": "Global",
        "WCAG Reference": "2.4.1 Bypass Blocks",
        "Priority": "P1",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "A11Y-005",
        "Page URL": "Home testimonials Swiper",
        "Category": "Accessibility",
        "Issue": "ARIA role=list missing required listitem children",
        "Severity": "Medium",
        "Current Finding": "AUTOMATED (Lighthouse): aria-required-children failed on Swiper wrapper <div role=\"list\" class=\"swiper-wrapper ... w-dyn-items\"> — required child roles missing (Swiper alters DOM).",
        "Recommended Fix": "Remove role=list from Swiper wrappers or ensure slides expose role=listitem. Prefer relying on native semantics; expose carousel with aria-roledescription and labeled controls (Previous/Next already named).",
        "Impact": "Confusing screen reader announcements for testimonials.",
        "Evidence": "lighthouse home-mobile aria-required-children",
        "Scope": "Global",
        "WCAG Reference": "4.1.2 Name, Role, Value",
        "Priority": "P1",
        "Estimated Effort": "Medium",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "A11Y-006",
        "Page URL": "Insights listing (and similar controls)",
        "Category": "Accessibility",
        "Issue": "Control missing accessible name (aria-command-name)",
        "Severity": "High",
        "Current Finding": "AUTOMATED: Insights mobile Lighthouse failed aria-command-name (1 item) — a button/link/menuitem without accessible name.",
        "Recommended Fix": "Inspect Insights filters/pagination icon buttons; add aria-label text (e.g. 'Search insights', 'Clear filters').",
        "Impact": "Screen reader users hear unnamed control.",
        "Evidence": "lighthouse/insights-mobile.json",
        "Scope": "Single page",
        "WCAG Reference": "4.1.2 Name, Role, Value",
        "Priority": "P1",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "A11Y-007",
        "Page URL": "Global images",
        "Category": "Accessibility",
        "Issue": "Many images use empty alt=\"\" and ~33% of sampled assets lack asset-level alt text",
        "Severity": "Medium",
        "Current Finding": (
            "AUTOMATED: Across 104 crawled pages, 66 pages include empty alt attributes (273 instances), often decorative SVGs (comma icons) — empty alt can be correct if decorative. "
            "Webflow asset library sample 300/437: 99 assets (33%) have blank altText at asset level. Informative images must have meaningful alt when rendered."
        ),
        "Recommended Fix": "Audit non-decorative images (team photos, charts, client logos that convey meaning) and set descriptive alt in Webflow Asset Manager or per-image settings. Keep empty alt only for pure decoration.",
        "Impact": "Risk of missing information for screen reader users when informative images are marked decorative.",
        "Evidence": "crawl empty_alt counts; assets_summary.json",
        "Scope": "Global",
        "WCAG Reference": "1.1.1 Non-text Content",
        "Priority": "P1",
        "Estimated Effort": "Large",
        "Responsible Team": "Content",
    }
)

add(
    **{
        "Issue ID": "A11Y-008",
        "Page URL": "Global",
        "Category": "Accessibility",
        "Issue": "No prefers-reduced-motion support for marquee/Swiper animations",
        "Severity": "Medium",
        "Current Finding": "MANUAL/CSS: No prefers-reduced-motion media queries detected in stylesheets. Site custom footer code creates infinite CSS marquees; Swiper autoplay delay 12500ms on testimonials.",
        "Recommended Fix": "Wrap marquee/autoplay init in matchMedia('(prefers-reduced-motion: reduce)') checks; pause CSS animations under reduced motion.",
        "Impact": "Vestibular/motion sensitivity issues; WCAG 2.3.3 / 2.2.2 related best practice.",
        "Evidence": "deep_checks prefers_reduced_motion_css=false; site freeform footer JS",
        "Scope": "Global",
        "WCAG Reference": "2.3.3 Animation from Interactions; 2.2.2 Pause, Stop, Hide",
        "Priority": "P2",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "A11Y-009",
        "Page URL": "Footer social links",
        "Category": "Accessibility",
        "Issue": "Misspelled accessible names on social links",
        "Severity": "Low",
        "Current Finding": "MANUAL browser snapshot: social link accessible names read 'facbook', 'linkdin', and logo link 'back to hom page'.",
        "Recommended Fix": "Correct aria-labels/alt text to 'Facebook', 'LinkedIn', 'Back to home page' in the footer component.",
        "Impact": "Confusing announcements; unprofessional SR experience.",
        "Evidence": "Browser snapshot refs e47–e49 on homepage",
        "Scope": "Global",
        "WCAG Reference": "2.5.3 Label in Name (related); 4.1.2",
        "Priority": "P2",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "A11Y-010",
        "Page URL": "Sector guides CMS (sampled)",
        "Category": "Accessibility",
        "Issue": "Skipped heading levels on some sector guide pages",
        "Severity": "Low",
        "Current Finding": "AUTOMATED: heading hierarchy skip detected on /sector-guides/software-rd-tax-relief-funding and /sector-guides/water-and-waste.",
        "Recommended Fix": "Ensure rich text uses sequential h2→h3 without jumping; update CMS content or template styles that force wrong heading tags.",
        "Impact": "Harder screen reader navigation by headings.",
        "Evidence": "seo_issues.json skipped_heading_level",
        "Scope": "CMS template",
        "WCAG Reference": "1.3.1 Info and Relationships",
        "Priority": "P3",
        "Estimated Effort": "Small",
        "Responsible Team": "Content",
    }
)

add(
    **{
        "Issue ID": "A11Y-011",
        "Page URL": "Contact form submit",
        "Category": "Accessibility",
        "Issue": "Submit button remains disabled until fields completed (manual verification note)",
        "Severity": "Low",
        "Current Finding": "MANUAL: On /contact-us, 'Send request' button exposed as disabled/readonly before input. Confirm disabled state is communicated and that errors are announced after failed submit (needs further SR testing — NOT fully verified with NVDA/VoiceOver).",
        "Recommended Fix": "Ensure disabled reason is clear; on validation failure, move focus to first error and use aria-describedby/aria-invalid. Perform dedicated screen reader test.",
        "Impact": "Potential confusion if users cannot tell why submit is disabled.",
        "Evidence": "Browser snapshot contact-us button states: disabled",
        "Scope": "Single page",
        "WCAG Reference": "3.3.1 Error Identification; 3.3.3 Error Suggestion",
        "Priority": "P2",
        "Estimated Effort": "Medium",
        "Responsible Team": "Developer",
        "Status": "Not Started",
    }
)

# Webflow-specific
add(
    **{
        "Issue ID": "WF-001",
        "Page URL": "Webflow site settings / custom code",
        "Category": "Webflow",
        "Issue": "Site-wide custom code loads GTM, Trustpilot, Swiper, jQuery marquees",
        "Severity": "Medium",
        "Current Finding": (
            "Freeform head: GTM GTM-WRGN3J8, Swiper CSS preload, Trustpilot bootstrap widget. "
            "Footer: jQuery marquee cloning, GTM noscript, lang=en-GB setter, Swiper init with autoplay, FAQ accordion jQuery, navbar scroll class, MutationObserver for date formatting. "
            "Registered scripts API empty; custom code is freeform only."
        ),
        "Recommended Fix": "Keep GTM; lazy-init Trustpilot/Swiper. Move critical SEO lang attribute to Webflow locale/html setting instead of JS. Prefer Webflow IX or native components over jQuery where possible.",
        "Impact": "Performance and maintainability; JS-dependent lang is fragile.",
        "Evidence": "data_scripts_tool get_site_freeform_code",
        "Scope": "Global",
        "Priority": "P1",
        "Estimated Effort": "Medium",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "WF-002",
        "Page URL": "Services Template (Webflow)",
        "Category": "Webflow",
        "Issue": "Leftover 'Teknolab' template branding in SEO title",
        "Severity": "High",
        "Current Finding": "Services Template SEO title is 'Teknolab - {{name}}' with placeholder description. shouldPublish=false currently (not in live sitemap), but still a brand-risk if published.",
        "Recommended Fix": "Replace with Kene SEO pattern or unpublish/archive unused Services CMS if superseded by static service pages.",
        "Impact": "Severe brand damage if template goes live.",
        "Evidence": "get_page_metadata Services Template",
        "Scope": "CMS template",
        "Priority": "P1",
        "Estimated Effort": "Small",
        "Responsible Team": "SEO",
    }
)

add(
    **{
        "Issue ID": "WF-003",
        "Page URL": "Draft / utility Webflow pages",
        "Category": "Webflow",
        "Issue": "Draft and test pages exist in project",
        "Severity": "Low",
        "Current Finding": "Draft pages in Webflow: Grants Finder Test, Support Hub test, Fetch grant, Style Guide, Service Template static slug. Live 404 for several test slugs (good). Ecommerce product/category URLs 404 live.",
        "Recommended Fix": "Archive unused drafts; confirm ecommerce is intentionally disabled; document that /checkout remains reachable (HTTP 200) — password/protect or noindex if not used.",
        "Impact": "Workspace clutter; accidental publish risk.",
        "Evidence": "kene-pages.json draft flags; utility_pages statuses",
        "Scope": "Global",
        "Priority": "P3",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)

add(
    **{
        "Issue ID": "WF-004",
        "Page URL": "CMS content quality (Services collection sample)",
        "Category": "Webflow",
        "Issue": "Placeholder Lorem ipsum remains in Services CMS fields",
        "Severity": "Medium",
        "Current Finding": "Services item 'R&D tax…' still contains Lorem ipsum in small-details-two and generic benefit copy in sample item retrieved via API.",
        "Recommended Fix": "Clean CMS fields; if Services collection unused on live site, archive items.",
        "Impact": "Content quality risk if linked later.",
        "Evidence": "data_cms_tool list_collection_items Services sample",
        "Scope": "CMS template",
        "Priority": "P2",
        "Estimated Effort": "Small",
        "Responsible Team": "Content",
    }
)

add(
    **{
        "Issue ID": "WF-005",
        "Page URL": "Asset filenames",
        "Category": "Webflow",
        "Issue": "Non SEO-friendly asset display names (spaces, mixed case, Unsplash hashes)",
        "Severity": "Low",
        "Current Finding": "Of 300 sampled assets, majority use spaces/underscores/caps; examples include unsplash filenames and generic names. Modern formats partially adopted (118 webp, 15 avif, still many png/jpeg).",
        "Recommended Fix": "Rename key landing/CMS images to kebab-case descriptive names when replacing assets; prefer WebP/AVIF going forward.",
        "Impact": "Minor image SEO / ops hygiene.",
        "Evidence": "assets_summary.json",
        "Scope": "Global",
        "Priority": "P3",
        "Estimated Effort": "Large",
        "Responsible Team": "Content",
    }
)

add(
    **{
        "Issue ID": "WF-006",
        "Page URL": f"{SITE}/checkout",
        "Category": "Webflow",
        "Issue": "Ecommerce checkout URL publicly reachable",
        "Severity": "Medium",
        "Current Finding": "/checkout returns HTTP 200 even though product pages 404 and ecommerce appears unused for public catalog.",
        "Recommended Fix": "Disable ecommerce or noindex/password-protect checkout & order pages; remove from crawl paths.",
        "Impact": "Unnecessary attack/surface and thin pages.",
        "Evidence": "utility_pages checkout 200; product 404",
        "Scope": "Single page",
        "Priority": "P2",
        "Estimated Effort": "Small",
        "Responsible Team": "Developer",
    }
)


def write_issues_sheet(ws, category=None):
    style_header(ws, ISSUE_COLS)
    rows = [f for f in findings if category is None or f["Category"] == category]
    # For Action Plan use all
    for r_i, f in enumerate(rows, 2):
        for c_i, col in enumerate(ISSUE_COLS, 1):
            cell = ws.cell(r_i, c_i, f.get(col, ""))
            cell.font = Font(name="Arial", size=10)
            cell.alignment = wrap
            cell.border = thin
            if col == "Severity":
                fill = severity_fill(f.get("Severity"))
                if fill:
                    cell.fill = fill
    autosize(ws, [12, 36, 14, 36, 12, 50, 50, 28, 28, 14, 22, 10, 12, 14, 12])
    ws.row_dimensions[1].height = 30
    return len(rows)


def build():
    wb = Workbook()

    # --- Executive Summary ---
    ws = wb.active
    ws.title = "Executive Summary"
    ws.merge_cells("A1:B1")
    ws["A1"] = "Kene Partners — Complete Website Audit"
    ws["A1"].font = Font(name="Arial", bold=True, size=16, color="0B3D4A")
    ws.merge_cells("A2:B2")
    ws["A2"] = f"Site: {SITE}  |  Audit date: {AUDIT_DATE}  |  Webflow site: Kene Website (673b62c92b84c2a97fd703f6)  |  Read-only"
    ws["A2"].font = Font(name="Arial", size=10)

    summary_lines = [
        ("Coverage", ""),
        ("Sitemap URLs inventoried", "408"),
        ("Webflow pages in Designer", "60 (44 static/system, 16 CMS templates; 5 drafts)"),
        ("CMS collections", "16 (incl. ecommerce Products/SKUs/Categories)"),
        ("URLs deep-crawled for on-page SEO/a11y signals", "104 (all static/listing + representative CMS samples across insights, grants, team, support hub, client stories, sector guides)"),
        ("Lighthouse pages tested", "8 URLs × mobile + desktop = 16 runs (measured, not estimated)"),
        ("Assets sampled for alt/name", "300 of 437 library assets"),
        ("Manual browser checks", "Homepage + Contact (cookie banner, keyboard focus styles, form states, nav/footer)"),
        ("Changes made to site", "None (read-only audit)"),
        ("", ""),
        (
            "Issue totals (actionable findings)",
            str(len([f for f in findings if f["Issue ID"] != "SEO-011"])) + " + 1 verified pass note (SEO-011)",
        ),
        ("Critical", str(sum(1 for f in findings if f["Severity"] == "Critical"))),
        ("High", str(sum(1 for f in findings if f["Severity"] == "High"))),
        ("Medium", str(sum(1 for f in findings if f["Severity"] == "Medium"))),
        ("Low", str(sum(1 for f in findings if f["Severity"] == "Low"))),
        ("", ""),
        ("Key findings", ""),
        (
            "1. Performance",
            "Core marketing pages show poor lab LCP (often 6–20s on mobile). Oversized images + third-party JS are primary drivers. Contact/grant detail pages prove better performance is achievable.",
        ),
        (
            "2. Accessibility",
            "Systemic form label gaps, color contrast failures (especially teal CTAs), and missing focus indicators. Lighthouse a11y 92–97 with recurring contrast/ARIA issues.",
        ),
        (
            "3. SEO / IA",
            "Titles/meta generally present (strong baseline, Lighthouse SEO 100 on tested pages). Fix footer mis-links, invalid Client Story JSON-LD, long titles/descriptions on CMS items, and leftover Teknolab SEO on unused Services template.",
        ),
        (
            "4. Webflow hygiene",
            "Custom code bundle is heavy; draft/test pages and unused ecommerce checkout remain; asset library needs compression/alt cleanup.",
        ),
        ("", ""),
        ("Overall recommendations", ""),
        (
            "Quick wins (1–3 days)",
            "Fix footer href mismatches & social label typos; add form labels; restore :focus-visible; publish or retarget thank-you page; trim event duplicate meta; fix Teknolab SEO string.",
        ),
        (
            "Critical path (1–2 weeks)",
            "Image compression pipeline + LCP fixes on Home/About/Insights/Grants Finder/Support Hub; repair JSON-LD on Client Stories/Sector Guides; contrast token update.",
        ),
        (
            "Longer-term",
            "Template-level Article/FAQ/Breadcrumb schema; reduced-motion support; CSP/security headers; CMS editorial guidelines for meta length; archive unused collections.",
        ),
        ("", ""),
        (
            "Method notes",
            "Automated ≠ complete. Color contrast and ARIA issues from Lighthouse are automated. Keyboard focus and skip-link checks were manually performed in browser. Full screen-reader pass (NVDA/VoiceOver) and exhaustive link check of all 408 URLs were NOT completed; treat A11Y-011 and any unmarked SR items as requiring manual verification. CMS issues are grouped by template rather than repeated per URL.",
        ),
    ]
    ws.cell(3, 1, "Section").font = header_font
    ws.cell(3, 1).fill = header_fill
    ws.cell(3, 2, "Detail").font = header_font
    ws.cell(3, 2).fill = header_fill
    for i, (a, b) in enumerate(summary_lines, 4):
        ws.cell(i, 1, a).font = Font(name="Arial", bold=(b == "" and bool(a)), size=10)
        ws.cell(i, 2, b).font = Font(name="Arial", size=10)
        ws.cell(i, 2).alignment = wrap
    autosize(ws, [36, 100])
    ws.freeze_panes = "A4"

    # --- Page Inventory ---
    ws = wb.create_sheet("Page Inventory")
    inv_cols = [
        "URL",
        "Source",
        "Page Type",
        "CMS Collection",
        "In Sitemap",
        "Live Status",
        "Indexability Notes",
        "Deep Audited",
        "Lighthouse",
        "Webflow Page Title",
        "Draft in Webflow",
        "Coverage Notes",
    ]
    style_header(ws, inv_cols)

    # Build inventory from sitemap + webflow extras
    import xml.etree.ElementTree as ET

    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    root = ET.parse(OUT.parent / "kene-sitemap.xml").getroot()
    sitemap_urls = [u.find("sm:loc", ns).text.rstrip("/") or SITE for u in root.findall("sm:url", ns)]

    def ctype(url):
        path = url.replace(SITE, "").strip("/")
        if not path:
            return "Static", ""
        first = path.split("/")[0]
        mapping = {
            "insights": ("CMS Item", "Insights"),
            "team-details": ("CMS Item", "Team Details"),
            "grants": ("CMS Item", "Grants"),
            "support-hub": ("CMS Item" if "/" in path else "Listing", "Support Hubs"),
            "client-stories": ("CMS Item" if "/" in path else "Listing", "Client Stories"),
            "sector-guides": ("CMS Item" if "/" in path else "Listing", "Sector Guides"),
        }
        if first in mapping:
            t, c = mapping[first]
            if first in {"support-hub", "client-stories", "sector-guides", "insights"} and "/" not in path:
                return "Listing", c
            return t, c
        return "Static", ""

    crawled_set = {r.get("url", "").rstrip("/") for r in crawl}
    lh_set = {s["url"].rstrip("/") for s in lh}

    # status map from crawl
    status_map = {r.get("url", "").rstrip("/"): r.get("status") for r in crawl}

    row = 2
    for url in sitemap_urls:
        pt, coll = ctype(url)
        deep_yes = "Yes" if url in crawled_set or url == SITE else "No — inventory only; template issues grouped"
        if pt == "Static" or pt == "Listing":
            # static should be deep audited if in crawl
            deep_yes = "Yes" if (url in crawled_set or url == SITE) else "No"
        ws.cell(row, 1, url if url != SITE else SITE + "/")
        ws.cell(row, 2, "Sitemap")
        ws.cell(row, 3, pt)
        ws.cell(row, 4, coll)
        ws.cell(row, 5, "Yes")
        st = status_map.get(url)
        ws.cell(row, 6, st if st else ("200 assumed via sitemap; not individually re-fetched" if deep_yes.startswith("No") else ""))
        ws.cell(row, 7, "Indexable (in sitemap; robots allow)")
        ws.cell(row, 8, deep_yes)
        ws.cell(row, 9, "Yes" if url in lh_set or (url + "/") in {u + "/" for u in lh_set} else "No")
        ws.cell(row, 10, "")
        ws.cell(row, 11, "No")
        ws.cell(
            row,
            12,
            "Full on-page crawl" if deep_yes == "Yes" else "Included in site inventory; represented by CMS template sample audits",
        )
        for c in range(1, 13):
            ws.cell(row, c).font = Font(name="Arial", size=9)
            ws.cell(row, c).alignment = wrap
        row += 1

    extras = [
        (f"{SITE}/previous-grants", "Live crawl", "Static", "", "No", "200", "Missing from sitemap — review indexability", "Partial", "No", "Previous grants", "No", "Flagged excluded from sitemap"),
        (f"{SITE}/thank-you", "Webflow", "Static", "", "No", "404", "Not live / not indexable", "Yes", "No", "Thank you", "No", "Configured in Webflow but 404 live"),
        (f"{SITE}/checkout", "Live crawl", "Ecommerce", "Products", "No", "200", "Should likely be noindex", "Yes", "No", "Checkout", "No", "Ecommerce remnant"),
        (f"{SITE}/grants-finder-test", "Webflow draft", "Static", "", "No", "404", "Draft/unpublished", "No", "No", "Grants Finder Test", "Yes", "Excluded"),
        (f"{SITE}/support-hub-test", "Webflow draft", "Static", "", "No", "404", "Draft/unpublished", "No", "No", "Support Hub test", "Yes", "Excluded"),
        (f"{SITE}/style-guide", "Webflow draft", "Static", "", "No", "404", "Draft/unpublished", "No", "No", "Style Guide", "Yes", "Excluded"),
        (f"{SITE}/product/basic-plan", "Webflow ecommerce", "CMS Item", "Products", "No", "404", "Not publicly available", "No", "No", "Products Template", "No", "Excluded/inaccessible"),
    ]
    for e in extras:
        for c, val in enumerate(e, 1):
            ws.cell(row, c, val).font = Font(name="Arial", size=9)
            ws.cell(row, c).alignment = wrap
        row += 1

    autosize(ws, [55, 14, 12, 16, 12, 18, 28, 18, 12, 22, 12, 40])

    # Category sheets
    for title, cat in [
        ("SEO Audit", "SEO"),
        ("Accessibility Audit", "Accessibility"),
        ("Technical & Performance", "Technical"),
        ("Webflow Audit", "Webflow"),
    ]:
        ws = wb.create_sheet(title)
        write_issues_sheet(ws, cat)

    # Action Plan - all findings sorted by priority
    ws = wb.create_sheet("Action Plan")
    style_header(ws, ISSUE_COLS)
    priority_order = {"P0": 0, "P1": 1, "P2": 2, "P3": 3}
    sev_order = {"Critical": 0, "High": 1, "Medium": 2, "Low": 3}
    ordered = sorted(
        findings,
        key=lambda f: (priority_order.get(f["Priority"], 9), sev_order.get(f["Severity"], 9), f["Issue ID"]),
    )
    for r_i, f in enumerate(ordered, 2):
        for c_i, col in enumerate(ISSUE_COLS, 1):
            cell = ws.cell(r_i, c_i, f.get(col, ""))
            cell.font = Font(name="Arial", size=10)
            cell.alignment = wrap
            cell.border = thin
            if col == "Severity":
                fill = severity_fill(f.get("Severity"))
                if fill:
                    cell.fill = fill
    autosize(ws, [12, 36, 14, 36, 12, 50, 50, 28, 28, 14, 22, 10, 12, 14, 12])

    # Metrics appendix sheet
    ws = wb.create_sheet("Measured Metrics")
    style_header(ws, ["Page", "Form Factor", "Performance", "Accessibility", "Best Practices", "SEO", "LCP (s)", "CLS", "TBT (ms)", "Source"])
    r = 2
    for s in lh:
        if s.get("error"):
            continue
        ws.cell(r, 1, s["name"]).font = Font(name="Arial", size=10)
        ws.cell(r, 2, s["formFactor"])
        ws.cell(r, 3, s["performance"])
        ws.cell(r, 4, s["accessibility"])
        ws.cell(r, 5, s["bestPractices"])
        ws.cell(r, 6, s["seo"])
        ws.cell(r, 7, round((s.get("LCP") or 0) / 1000, 2))
        ws.cell(r, 8, round(s.get("CLS") or 0, 3))
        ws.cell(r, 9, round(s.get("TBT") or 0))
        ws.cell(r, 10, "Lighthouse CLI 13.6.0 lab run 2026-11-05")
        for c in range(1, 11):
            ws.cell(r, c).font = Font(name="Arial", size=10)
        r += 1
    autosize(ws, [16, 12, 12, 14, 14, 8, 10, 10, 10, 36])

    # Coverage methodology
    ws = wb.create_sheet("Audit Methodology")
    lines = [
        "This workbook documents a read-only audit of https://kene.partners/ performed 2026-11-05.",
        "Webflow project inspected via official Webflow MCP (site, pages, CMS schemas/items, assets, site custom code).",
        "Live site audited via HTTP crawl, XML sitemap (408 URLs), robots.txt, security headers, and browser inspection.",
        "Lighthouse scores and CWV lab metrics are actual CLI measurements — not estimates.",
        "Deep on-page crawl covered all static & listing pages plus stratified CMS samples (104 URLs).",
        "Repeated CMS template issues are reported once with scope=CMS template and affected URL examples — not duplicated 195 times.",
        "Accessibility: automated (Lighthouse/HTML) vs manual (keyboard focus, skip link, cookie banner, contact form) are labeled in findings.",
        "Not performed: full NVDA/VoiceOver pass; PageSpeed Insights field CrUX (lab only); exhaustive HEAD of all external links sitewide.",
        "Broken internal links: spot-checked 56 unique internal links from key pages — none returned HTTP >=400 in that sample.",
        "Do not treat 'Lighthouse SEO 100' as absence of SEO opportunity; it checks a limited ruleset.",
    ]
    ws["A1"] = "Audit Methodology & Limitations"
    ws["A1"].font = Font(name="Arial", bold=True, size=14)
    for i, line in enumerate(lines, 3):
        ws.cell(i, 1, line).font = Font(name="Arial", size=10)
        ws.cell(i, 1).alignment = wrap
    autosize(ws, [120])

    out_path = OUT / "Kene_Partners_Website_Audit_2026-11-05.xlsx"
    wb.save(out_path)
    print("Wrote", out_path)
    print("Findings", len(findings))


if __name__ == "__main__":
    build()
