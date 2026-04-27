# AI SEO QA Checklist

Owned by: `18-qa-review`

---

## Purpose

This checklist is used during QA to verify that all AI visibility components are correctly implemented before launch. It is structured by severity: BLOCKER items must be resolved before launch. MAJOR items should be resolved before launch but will not by themselves block it. MODERATE and MINOR items can be resolved in the first week post-launch.

Cross-reference with the implementation documents in `17-feature-local-seo/` for context on any item.

---

## llms.txt

### BLOCKER
- [ ] `llms.txt` exists at `/llms.txt` on the live domain (not just locally)
- [ ] File is served as plain text — visit the URL, no HTML tags should be visible
- [ ] No placeholder brackets remain (`[Business Name]`, `[PLACEHOLDER]`, `[YOUR CITY]`, etc.)
- [ ] Business name, phone, services, and service area all match the live site

### MAJOR
- [ ] All service descriptions are specific — named services, not "all your needs"
- [ ] FAQ answers are direct — each answer actually answers the question
- [ ] If pricing is included, it has been confirmed accurate by client
- [ ] If license numbers are included, they have been verified as real and current
- [ ] Differentiators section contains specific claims, not adjectives

### MODERATE
- [ ] Markdown mirror URLs listed in `llms.txt` all resolve with 200 (if mirrors are implemented)
- [ ] Pages section lists the correct production URLs (not localhost or staging)

### MINOR
- [ ] `llms.txt` format follows the template in `17-feature-local-seo/llms-txt.md`
- [ ] Key Facts section contains at least one verifiable statistic

---

## robots.txt

### BLOCKER
- [ ] `robots.txt` resolves at the live domain as plain text
- [ ] No `Disallow: /` entry under `User-agent: *` without corresponding explicit AI allow entries
- [ ] GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and CCBot are explicitly listed with `Allow: /`

### MAJOR
- [ ] `Sitemap:` directive present and points to correct production URL (not localhost or staging)
- [ ] anthropic-ai and ChatGPT-User are also explicitly listed with `Allow: /`

### MODERATE
- [ ] Standard disallow paths present: `/api/`, `/_next/`, `/thank-you`
- [ ] No admin or login paths are accidentally accessible

### MINOR
- [ ] robots.txt comment header is present with last-updated date

---

## Schema (JSON-LD)

### BLOCKER
- [ ] `LocalBusiness` schema (or appropriate subtype) is present on the homepage
- [ ] Schema `name`, `telephone`, `address`, and `url` fields contain real data — not placeholder values
- [ ] Schema validates with no critical errors in Google Rich Results Test

### MAJOR
- [ ] `FAQPage` schema is present on all pages with FAQ content
- [ ] `Service` schema is present on individual service pages (if AI tier is FULL)
- [ ] No schema fields contain placeholder text
- [ ] Schema `telephone` matches the phone number visible on the page

### MODERATE
- [ ] `aggregateRating` is present only if real review data has been verified — not invented
- [ ] Schema `url` field matches the canonical URL of the page
- [ ] Schema validates with no warnings in Schema.org Validator

### MINOR
- [ ] `LocalBusiness` schema type is the most specific applicable subtype (e.g., `Plumber`, `HomeAndConstructionBusiness`)

---

## XML Sitemap

### BLOCKER
- [ ] `/sitemap.xml` resolves and returns valid XML
- [ ] Homepage and all service pages are in the sitemap
- [ ] All sitemap URLs use the production domain (not localhost or staging)

### MAJOR
- [ ] Thank-you, privacy, and admin pages are excluded from sitemap
- [ ] Priority values follow the scale in `17-feature-local-seo/sitemap-gsc.md`
- [ ] `NEXT_PUBLIC_SITE_URL` env var is set to the correct production domain

### MODERATE
- [ ] `lastModified` dates are present
- [ ] Location pages are in the sitemap (if location pages exist)

### MINOR
- [ ] `changeFrequency` values are set on all entries

---

## Markdown Mirrors (if implemented)

### BLOCKER
- [ ] All mirror URLs return 200 with `Content-Type: text/plain` (not `text/html`)
- [ ] No thank-you, privacy, or admin mirrors exist
- [ ] Home mirror exists at `/content/home`

### MAJOR
- [ ] Every mirror has complete YAML frontmatter: title, description, canonical, last_updated, page_type
- [ ] `canonical` URLs in frontmatter resolve to real rendered pages (no 404s)
- [ ] All service page mirrors exist (one per service page)

### MODERATE
- [ ] FAQ content is included in service page mirrors
- [ ] Mirror content does not contain navigation links or footer content
- [ ] Location page mirrors exist (if location pages exist)

### MINOR
- [ ] `last_updated` dates are current (not months in the past)
- [ ] Mirror list in `llms.txt` is complete and matches actual mirror URLs

---

## Google Search Console

### BLOCKER
- [ ] GSC property is verified for the production domain

### MAJOR
- [ ] Sitemap has been submitted in GSC and shows "Success" status
- [ ] Homepage has been submitted for indexing via URL Inspection tool
- [ ] Each service page has been submitted for indexing via URL Inspection tool

### MODERATE
- [ ] Contact page has been submitted for indexing
- [ ] No manual action penalties shown in GSC

### MINOR
- [ ] GSC account is set up in the client's Google account (not the agency's)

---

## Post-Launch Verification (Week 1)

Run these checks within 7 days of launch:

- [ ] Visit `/llms.txt` on live domain — confirm plain text, no HTML visible
- [ ] Visit `/robots.txt` on live domain — confirm all AI crawlers listed
- [ ] Visit `/sitemap.xml` on live domain — confirm valid XML, production URLs
- [ ] Run homepage through Google Rich Results Test — no critical errors
- [ ] Check GSC sitemap status — shows "Success"
- [ ] If mirrors implemented: visit `/content/home` — confirm plain text, correct frontmatter

---

## Post-Launch Verification (Weeks 2–6)

- [ ] GSC Coverage report: key pages indexed? Any errors?
- [ ] GSC Performance: impressions starting to appear?
- [ ] `llms.txt` still accurate? Any service or pricing changes since launch?
- [ ] If any page copy changed: re-validate schema for that page

---

## Tools

| Tool | URL | Use |
|---|---|---|
| Google Rich Results Test | search.google.com/test/rich-results | Schema validation |
| Schema.org Validator | validator.schema.org | Secondary schema check |
| Google Search Console | search.google.com/search-console | Coverage, indexing, performance |
| Google robots.txt Tester | GSC → Settings → robots.txt tester | Crawler access verification |
| Browser address bar | Direct URL visit | llms.txt, robots.txt, sitemap, mirrors |
