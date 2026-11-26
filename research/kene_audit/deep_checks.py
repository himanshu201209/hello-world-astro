"""Deeper HTML checks: schema, headers, contrast samples, robots, WWW, draft pages."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

OUT = Path(r"d:\Code\hello-world-astro\kene_audit")
HEADERS = {"User-Agent": "KeneAuditBot/1.0"}


def get(url: str):
    r = requests.get(url, headers=HEADERS, timeout=30, allow_redirects=True)
    return r


def inspect_schema(url: str):
    r = get(url)
    soup = BeautifulSoup(r.text, "lxml")
    blocks = []
    for script in soup.find_all("script", type="application/ld+json"):
        raw = (script.string or script.get_text() or "").strip()
        try:
            data = json.loads(raw)
            blocks.append({"ok": True, "data": data, "raw_len": len(raw)})
        except Exception as e:
            blocks.append({"ok": False, "error": str(e), "raw_preview": raw[:300]})
    return {"url": url, "status": r.status_code, "blocks": blocks}


def security_headers(url: str):
    r = requests.head(url, headers=HEADERS, timeout=20, allow_redirects=True)
    if r.status_code >= 400:
        r = get(url)
    interesting = [
        "strict-transport-security",
        "content-security-policy",
        "x-frame-options",
        "x-content-type-options",
        "referrer-policy",
        "permissions-policy",
        "cross-origin-opener-policy",
        "cache-control",
        "server",
        "cf-cache-status",
    ]
    h = {k: r.headers.get(k) for k in interesting}
    return {"url": url, "final": r.url, "status": r.status_code, "headers": h}


def form_audit(url: str):
    r = get(url)
    soup = BeautifulSoup(r.text, "lxml")
    forms = []
    for form in soup.find_all("form"):
        fields = []
        for inp in form.find_all(["input", "select", "textarea"]):
            itype = (inp.get("type") or inp.name).lower()
            if itype == "hidden":
                continue
            iid = inp.get("id")
            name = inp.get("name")
            label = None
            if iid:
                lab = soup.find("label", attrs={"for": iid})
                if lab:
                    label = lab.get_text(" ", strip=True)
            fields.append(
                {
                    "tag": inp.name,
                    "type": itype,
                    "id": iid,
                    "name": name,
                    "placeholder": inp.get("placeholder"),
                    "aria-label": inp.get("aria-label"),
                    "aria-labelledby": inp.get("aria-labelledby"),
                    "label_for": label,
                    "required": inp.has_attr("required"),
                }
            )
        forms.append({"action": form.get("action"), "method": form.get("method"), "fields": fields})
    return {"url": url, "forms": forms}


def nav_footer_links(url: str):
    r = get(url)
    soup = BeautifulSoup(r.text, "lxml")
    nav = soup.find("nav") or soup.select_one(".navigation, [role=navigation], .navbar, .w-nav")
    footer = soup.find("footer") or soup.select_one(".footer")
    def links(root):
        if not root:
            return []
        out = []
        for a in root.find_all("a", href=True):
            out.append({"text": " ".join(a.get_text(" ", strip=True).split())[:80], "href": a["href"]})
        return out
    return {"nav": links(nav), "footer": links(footer), "nav_found": bool(nav), "footer_found": bool(footer)}


def empty_alt_samples(url: str):
    r = get(url)
    soup = BeautifulSoup(r.text, "lxml")
    samples = []
    for img in soup.find_all("img"):
        alt = img.get("alt")
        if alt is not None and alt.strip() == "":
            samples.append(
                {
                    "src": (img.get("src") or "")[:120],
                    "class": " ".join(img.get("class") or [])[:80],
                    "loading": img.get("loading"),
                    "width": img.get("width"),
                    "height": img.get("height"),
                }
            )
    return samples[:20]


def check_pages(urls):
    out = []
    for u in urls:
        try:
            r = get(u)
            out.append({"url": u, "status": r.status_code, "final": r.url, "len": len(r.text)})
        except Exception as e:
            out.append({"url": u, "error": str(e)})
    return out


def main():
    report = {}
    schema_urls = [
        "https://kene.partners/",
        "https://kene.partners/about-us",
        "https://kene.partners/insights/how-to-choose-an-r-and-d-tax-advisor",
        "https://kene.partners/client-stories/ecoeggs-story",
        "https://kene.partners/sector-guides/agriculture",
        "https://kene.partners/grants/women-in-innovation-awards-2025-26",
        "https://kene.partners/support-hub/hmrc-enquiries",
        "https://kene.partners/team-details/adam-kene",
        "https://kene.partners/contact-us",
    ]
    report["schema"] = [inspect_schema(u) for u in schema_urls]
    report["security"] = security_headers("https://kene.partners/")
    report["www_redirect"] = security_headers("https://www.kene.partners/")
    report["http_redirect"] = security_headers("http://kene.partners/")
    report["forms"] = [
        form_audit("https://kene.partners/contact-us"),
        form_audit("https://kene.partners/book-a-free-consultation"),
        form_audit("https://kene.partners/grants-finder"),
        form_audit("https://kene.partners/"),
    ]
    report["nav_footer"] = nav_footer_links("https://kene.partners/")
    report["empty_alt_home"] = empty_alt_samples("https://kene.partners/")
    report["empty_alt_claiming"] = empty_alt_samples("https://kene.partners/claiming-rd")

    # Draft / utility pages accessibility
    utility = [
        "https://kene.partners/thank-you",
        "https://kene.partners/style-guide",
        "https://kene.partners/grants-finder-test",
        "https://kene.partners/support-hub-test",
        "https://kene.partners/fetch-grant",
        "https://kene.partners/previous-grants",
        "https://kene.partners/401",
        "https://kene.partners/checkout",
        "https://kene.partners/detail_services",  # unlikely
        "https://kene.partners/services",
        "https://kene.partners/product/basic-plan",
        "https://kene.partners/category/pricing",
        "https://kene.partners/innovation-funding-event",
        "https://kene.partners/innovation-funding-event-v2",
    ]
    report["utility_pages"] = check_pages(utility)

    # robots + sitemap content-type note
    robots = get("https://kene.partners/robots.txt")
    report["robots"] = {"status": robots.status_code, "body": robots.text}

    # Check if services CMS items exist in sitemap by scanning crawl/sitemap
    sm = (OUT.parent / "kene-sitemap.xml").read_text(encoding="utf-8")
    report["sitemap_prefix_counts"] = dict(
        Counter(re.findall(r"https://kene\.partners/([^/<]+)", sm)).most_common()
    )

    # Mixed content check on home
    home = get("https://kene.partners/")
    mixed = re.findall(r'(?:src|href)=["\']http://[^"\']+', home.text, flags=re.I)
    report["mixed_content_home"] = mixed[:20]

    # Prefer reduced motion?
    report["prefers_reduced_motion_css"] = bool(
        re.search(r"prefers-reduced-motion", home.text, flags=re.I)
    )

    # Skip link
    soup = BeautifulSoup(home.text, "lxml")
    skip = soup.find("a", string=re.compile(r"skip", re.I)) or soup.select_one(".w-skip, a[href='#main'], a[href='#Main']")
    report["skip_link"] = bool(skip) or bool(soup.find("a", href=re.compile(r"#main", re.I)))

    # Landmark roles
    report["landmarks"] = {
        "header": bool(soup.find("header") or soup.find(attrs={"role": "banner"})),
        "nav": bool(soup.find("nav") or soup.find(attrs={"role": "navigation"})),
        "main": bool(soup.find("main") or soup.find(attrs={"role": "main"})),
        "footer": bool(soup.find("footer") or soup.find(attrs={"role": "contentinfo"})),
    }

    (OUT / "deep_checks.json").write_text(json.dumps(report, indent=2, default=str), encoding="utf-8")
    print("Wrote deep_checks.json")
    print("sitemap prefixes:", report["sitemap_prefix_counts"])
    print("utility:", report["utility_pages"])
    print("security:", report["security"])
    print("landmarks:", report["landmarks"], "skip:", report["skip_link"], "reduced-motion:", report["prefers_reduced_motion_css"])
    print("mixed:", report["mixed_content_home"])
    for s in report["schema"]:
        print("SCHEMA", s["url"])
        for b in s["blocks"]:
            if b["ok"]:
                d = b["data"]
                if isinstance(d, dict):
                    print("  type", d.get("@type"), "keys", list(d.keys())[:8])
                else:
                    print("  list", type(d), str(d)[:120])
            else:
                print("  INVALID", b["error"], b["raw_preview"][:120])


if __name__ == "__main__":
    main()
