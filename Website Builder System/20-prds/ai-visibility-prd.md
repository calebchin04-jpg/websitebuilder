# AI Visibility PRD — Master Standard

Owned by: `20-prds`

---

## Purpose

This document defines the standard for AI visibility across every build in this system. AI visibility determines whether a local service business appears as an answer in ChatGPT, Perplexity, Claude, Google AI Overviews, and similar AI-powered search surfaces.

It is not a separate SEO strategy. It is an extension of good content architecture: structured, specific, factual content that is machine-readable and accurately describes what the business does.

---

## What AI Visibility Is

AI systems that answer questions about local services pull from:
1. Indexed web content that was crawled and parsed
2. Structured data signals (schema markup)
3. Explicitly AI-readable content files (`llms.txt`, markdown mirrors)

A business wins when its content answers the specific question being asked. "Plumber in Portland" returns the business whose site clearly states what plumbing services they offer, what they cost, where they work, and what makes them credible — in plain, machine-readable language.

---

## What AI Visibility Is NOT

- Keyword stuffing or repetitive phrase insertion
- Fake FAQs with evasive answers
- Fake reviews or fabricated statistics
- Hidden content intended for crawlers only
- Spammy schema markup disconnected from real page content
- `llms.txt` files with placeholder text or marketing copy
- Blocking main crawlers while creating a special AI-only bypass

All of these patterns are detectable and counterproductive. A well-structured honest site outperforms a manipulated one.

---

## Relationship to Local SEO

AI visibility and traditional local SEO share the same foundation:

| Foundation | Local SEO Benefit | AI Visibility Benefit |
|---|---|---|
| Specific service descriptions | Keyword relevance | Quotable, answerable content |
| Real FAQs with direct answers | Featured snippet potential | Source for AI-generated answers |
| Named cities/service areas | Local pack rankings | Location-aware query matching |
| Schema markup | Rich results eligibility | Structured data for AI parsing |
| Clean sitemap + robots.txt | Complete indexing | Crawler access + page discovery |

Investing in AI visibility is investing in good content. There is no tradeoff.

---

## Requirements Matrix

### Required for Every Build

| Component | Location | Implementation Reference |
|---|---|---|
| `llms.txt` | `/public/llms.txt` | `17-feature-local-seo/llms-txt.md` |
| `LocalBusiness` schema | Homepage | `17-feature-local-seo/` schema section |
| `robots.txt` with AI crawler allow list | `/` | `17-feature-local-seo/ai-crawler-rules.md` |
| XML Sitemap | `/sitemap.xml` | `17-feature-local-seo/sitemap-gsc.md` |
| GSC setup + sitemap submission | External | `17-feature-local-seo/sitemap-gsc.md` |

### Conditional (implement when conditions are met)

| Component | Condition | Implementation Reference |
|---|---|---|
| Markdown mirrors | AI visibility tier = FULL or STANDARD; 5+ substantive pages | `17-feature-local-seo/markdown-mirrors.md` |
| `FAQPage` schema | FAQ content exists on page | `17-feature-local-seo/` schema section |
| `Service` schema | Individual service pages exist | `17-feature-local-seo/` schema section |
| Location pages | Business genuinely serves multiple distinct areas | `03-sitemap/ai-readable-page-selection.md` |
| `aggregateRating` schema | Real verified review data available | `17-feature-local-seo/` schema section |

### Optional (add if client-approved data is available)

| Component | Notes |
|---|---|
| Pricing in `llms.txt` | Only if client approves public pricing. Do not estimate or invent. |
| License/cert numbers in schema | Only if real and verified |
| Project count / years in business | Only if accurate |

---

## AI Visibility Tiers

Tier is determined during planning based on discovery outputs (see `02-planning/ai-visibility-decision-rules.md`).

| Tier | Implementation |
|---|---|
| FULL | `llms.txt` + all schema types + markdown mirrors + sitemap + GSC |
| STANDARD | `llms.txt` + `LocalBusiness` schema + sitemap + GSC (no mirrors) |
| MINIMAL | `LocalBusiness` schema + sitemap + GSC only |

MINIMAL is only appropriate for single-page brochure sites or cases where the client has restricted content distribution.

---

## Content Quality Rules

The AI visibility layer is only as good as the underlying content. These rules apply to `llms.txt`, schema fields, and markdown mirrors:

### Use specific numbers, not ranges or adjectives

| Wrong | Right |
|---|---|
| "Competitive pricing" | "Kitchen remodels starting at $18,000" |
| "Serving the greater Portland area" | "Serving Portland, Beaverton, Hillsboro, Tigard, and Lake Oswego" |
| "Years of experience" | "Licensed since 2009" |
| "High-quality work" | "All work backed by a 2-year workmanship warranty" |
| "Many satisfied customers" | "4.9 stars across 127 Google reviews" |

### FAQs must be direct
Every FAQ answer must actually answer the question. Test: does the answer give a real piece of information, or does it redirect to "call us for details"?

OK to redirect to phone: questions where pricing genuinely requires a quote.  
Not OK to redirect: questions about service area, licensing, process, timeline.

### Service descriptions must cover scope
Each service entry needs:
- What the service includes
- What it does not include (if relevant)
- Typical pricing or pricing starting point
- Typical timeline
- Who it is for

### Local signals must be named
"We serve the greater metro area" is not useful. Name the cities. Name the neighborhoods if relevant.

---

## Technical Implementation

All AI visibility components are generated from the same `data/` files that power the rendered site:

```
data/
  site.ts          → llms.txt (About, Contact, Service Area), schema (LocalBusiness)
  services.ts      → llms.txt (Services, FAQs), Service schema, markdown mirrors
  service-areas.ts → llms.txt (Service Area), location page mirrors, sitemap
```

This ensures the AI visibility layer stays in sync with the site automatically. When `services.ts` changes, the `llms.txt`, schema, sitemap, and markdown mirrors all update on the next build.

Do not handwrite `llms.txt` separately from the data files. That creates two sources of truth and guarantees they will go out of sync.

---

## What NOT to Do — 10 Anti-Patterns

1. **Vague service descriptions** — "We handle all your home improvement needs" tells AI nothing. Specific services only.

2. **Blocked AI crawlers** — `Disallow: /` in `robots.txt` with no explicit AI allow entries cuts off all discovery.

3. **Missing FAQs** — Sites with no FAQ content lose answer box and AI citation opportunities. Every service page needs FAQs.

4. **Fake or estimated statistics** — Invented review counts or project numbers in schema will be cited by AI and discovered to be false.

5. **Schema disconnected from page content** — Schema for a service that isn't on the page, or a phone number that differs from the visible contact info.

6. **`llms.txt` with placeholder text** — Unforgivable on a live site. Destroys credibility with AI systems that ingest it.

7. **Markdown mirrors served as HTML** — A mirror route that returns `text/html` instead of `text/plain` causes AI parsers to attempt to parse tags as content.

8. **Sitemap pointing to staging domain** — Crawlers are directed to wrong URLs, indexing incorrect pages.

9. **Thank-you or privacy pages in sitemap** — These pages provide no content value and dilute crawl budget.

10. **No GSC setup** — Without Search Console, there's no visibility into indexing issues, and no ability to request indexing for key pages.

---

## QA Standard

All AI visibility pre-launch checks are in `18-qa-review/ai-seo-checklist.md`.

The AI visibility audit process (ongoing maintenance) is in `17-feature-local-seo/ai-visibility-audit.md`.

Pre-launch: every BLOCKER item in the AI SEO checklist must be resolved before launch.

Post-launch: audit must be run at Week 1 and Week 6. Maintenance audit must be triggered whenever services, pricing, service area, phone number, or license information changes.

---

## Ownership and Routing

| Phase | Responsible Agent |
|---|---|
| Capture AI visibility questions | `01-discovery` — `ai-visibility-questions.md` |
| Decide AI visibility tier | `02-planning` — `ai-visibility-decision-rules.md` |
| Select AI-readable pages | `03-sitemap` — `ai-readable-page-selection.md` |
| Implement all AI visibility components | `17-feature-local-seo` |
| QA and audit | `18-qa-review` — `ai-seo-checklist.md` |
