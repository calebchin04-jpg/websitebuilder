# AI Visibility Audit and Maintenance

Owned by: `17-feature-local-seo`

---

## Purpose

This file defines the pre-launch checklist, post-launch verification steps, and ongoing maintenance schedule for the AI visibility layer. It is used by both `17-feature-local-seo` when implementing and `18-qa-review` when checking.

AI visibility degrades when content goes stale, crawlers get accidentally blocked, or schema goes out of sync with the actual page. This audit catches those issues.

---

## Pre-Launch Checklist

Complete every item before the site goes live. Items marked BLOCKER cannot be skipped.

### llms.txt
- [BLOCKER] `llms.txt` exists at `/llms.txt` and returns plain text (not HTML)
- [BLOCKER] No placeholder brackets remain (`[Business Name]`, `[PLACEHOLDER]`, etc.)
- [BLOCKER] All business data matches the live site (phone, services, service area, contact)
- [MAJOR] All prices or pricing guidance are confirmed accurate by client
- [MAJOR] License/certification numbers are real and verified
- [MAJOR] FAQ answers are direct — no evasive or marketing-speak answers
- [MODERATE] Markdown mirror URLs listed (if mirrors are implemented) all resolve with 200
- [MODERATE] Business differentiators are specific claims, not adjectives

### robots.txt
- [BLOCKER] `robots.txt` resolves at the live URL as plain text
- [BLOCKER] No `Disallow: /` that blocks all crawlers
- [BLOCKER] AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot) are explicitly listed with `Allow: /`
- [MAJOR] `Sitemap:` directive present and points to correct production URL (not localhost or staging)
- [MODERATE] Standard disallow paths present (`/api/`, `/_next/`, `/thank-you`)

### Schema (JSON-LD)
- [BLOCKER] `LocalBusiness` (or best-matching subtype) schema present on homepage
- [BLOCKER] Schema `name`, `telephone`, `address`, `url` fields contain real data
- [MAJOR] `FAQPage` schema present on pages with FAQ content
- [MAJOR] `Service` schema present on individual service pages
- [MAJOR] No placeholder values in schema fields
- [MODERATE] `aggregateRating` present only if real review count and rating are available
- [MODERATE] Schema validates with no errors in Google Rich Results Test

### Sitemap
- [BLOCKER] `/sitemap.xml` resolves and returns valid XML
- [BLOCKER] Homepage and all service pages are included
- [MAJOR] Thank-you, privacy, and admin pages are excluded
- [MAJOR] Priority values follow the scale defined in `sitemap-gsc.md`
- [MODERATE] `lastModified` dates are present

### Markdown Mirrors (if implemented)
- [BLOCKER] All listed mirror URLs return 200 with `Content-Type: text/plain`
- [BLOCKER] No thank-you, privacy, or admin page mirrors exist
- [MAJOR] Every mirror has complete YAML frontmatter (title, description, canonical, last_updated, page_type)
- [MAJOR] `canonical` URLs in frontmatter resolve to real rendered pages
- [MODERATE] FAQ content is included in service page mirrors
- [MODERATE] Mirror content does not contain nav/footer chrome

---

## Post-Launch Verification (Week 1)

Perform these checks within 7 days of launch:

1. **Visit `/llms.txt` on live domain** — confirm plain text, no HTML tags visible
2. **Visit `/robots.txt` on live domain** — confirm all AI crawlers listed, no unintended blocks
3. **Visit `/sitemap.xml` on live domain** — confirm valid XML, correct URLs (production domain, not staging)
4. **Test schema** — run homepage URL through Google Rich Results Test (search.google.com/test/rich-results). No errors should appear.
5. **GSC sitemap** — confirm sitemap submitted and showing "Success" status
6. **Test one markdown mirror** (if implemented) — visit `/content/home`, confirm plain text, correct frontmatter

If any BLOCKER items are found at this stage, fix immediately before continuing to promote the site.

---

## Post-Launch Verification (Week 2–6)

1. **GSC Coverage report** — key pages indexed? Any errors or exclusions?
2. **GSC Performance** — any impressions starting to appear?
3. **Test llms.txt accuracy** — has any content changed since launch? If services or prices changed, update llms.txt.
4. **Schema re-validation** — if any page copy changed, re-test schema for that page

---

## Ongoing Maintenance Triggers

Re-run the pre-launch checklist sections relevant to the change whenever any of the following happen:

| Change | What to update |
|---|---|
| New service added | `llms.txt` (services + FAQs + pages), schema (add Service schema), sitemap (add new page), markdown mirror (add mirror for new page) |
| Service removed | `llms.txt`, sitemap (remove page), markdown mirror (return 410 for removed URL) |
| Pricing changes | `llms.txt` (update prices), schema (update `priceRange` if used), markdown mirrors |
| New location / service area added | `llms.txt` (service area section), sitemap (add location page), markdown mirror |
| Phone number changes | `llms.txt`, schema, markdown mirrors (if contact info in mirrors) |
| Business moves or closes | `llms.txt`, schema (`address`), GSC (address change) |
| License number changes | `llms.txt`, schema |
| New reviews / rating changes | Schema `aggregateRating` (if used), llms.txt key facts section |

---

## Tools

| Tool | Use |
|---|---|
| Google Rich Results Test | Validate schema on any page. URL: search.google.com/test/rich-results |
| Schema.org Validator | Secondary schema validation. URL: validator.schema.org |
| Google Search Console | Coverage, indexing, performance, sitemap status |
| Google robots.txt Tester | In GSC: Settings → robots.txt tester |
| Any browser | Visit `/llms.txt`, `/robots.txt`, `/sitemap.xml`, `/content/home` directly |

---

## Red Flags Requiring Immediate Action

Act on these immediately — do not defer:

- `robots.txt` shows `Disallow: /` under `User-agent: *` with no explicit AI crawler allow entries → all crawlers blocked
- `llms.txt` still contains placeholder text on live site → credibility destroyed
- Schema validation shows CRITICAL errors → rich results suppressed
- Sitemap returning 404 → crawlers have no page list
- A markdown mirror returning a rendered HTML page instead of plain text → content useless to AI
- `Sitemap:` directive in robots.txt pointing to staging URL → crawlers directed to wrong domain

---

## Audit Log Format

For ongoing projects, maintain a brief audit log in the project's notes:

```
AI Visibility Audit — [Date]
Performed by: [name]
Trigger: [launch / content change / scheduled]

llms.txt:      PASS / ISSUES FOUND
robots.txt:    PASS / ISSUES FOUND
Schema:        PASS / ISSUES FOUND
Sitemap:       PASS / ISSUES FOUND
Mirrors:       PASS / ISSUES FOUND / NOT IMPLEMENTED

Issues found:
- [description + fix applied]

Next audit due: [date or trigger]
```
