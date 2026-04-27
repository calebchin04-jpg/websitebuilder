# AI Visibility Decision Rules

Owned by: `02-planning`

---

## Purpose

This document defines how to decide the AI visibility tier for a build and what triggers each tier. The decision is made during planning, after discovery has captured business data, and before implementation begins.

The tier drives which components get built. Getting this wrong in planning means building too much (wasted effort) or too little (missed visibility opportunity).

---

## The Three Tiers

### FULL

Build everything:
- `llms.txt`
- `LocalBusiness` schema (homepage)
- `FAQPage` schema (pages with FAQ content)
- `Service` schema (individual service pages)
- XML Sitemap
- `robots.txt` with AI crawler allow list
- Markdown mirrors (`/content/[slug]`)
- Google Search Console setup + sitemap submission

**Use when:**
- Local service business with 5+ substantive pages
- Client approved sharing service details, pricing guidance, and FAQ answers
- Discovery captured specific services, FAQs, service areas, and at least some pricing
- Content is specific enough to be useful (real answers, real prices, real locations)

---

### STANDARD

Build core components, skip mirrors:
- `llms.txt`
- `LocalBusiness` schema
- `FAQPage` schema (if FAQ content exists)
- XML Sitemap
- `robots.txt` with AI crawler allow list
- Google Search Console setup + sitemap submission

**Skip:** Markdown mirrors

**Use when:**
- Local service business but fewer than 5 substantive pages
- Client approved `llms.txt` but not machine-readable page mirrors
- Content is specific enough for `llms.txt` but service pages are thin
- Budget or timeline doesn't support full mirror implementation

---

### MINIMAL

Build technical foundation only:
- `LocalBusiness` schema
- XML Sitemap
- `robots.txt` (standard, may not have explicit AI allow entries if client restricted)
- Google Search Console setup

**Skip:** `llms.txt`, markdown mirrors, `FAQPage` schema, `Service` schema

**Use when:**
- Single-page brochure or portfolio site
- Client declined AI visibility after being informed
- Content is too thin or vague to populate `llms.txt` meaningfully
- Client has legal/contractual restrictions on AI indexing

---

## Decision Tree

```
Is this a local service business with 5+ pages?
├─ NO → MINIMAL
└─ YES → Did discovery capture specific services, FAQs, and service areas?
         ├─ NO (data too vague) → Flag and return to discovery. Cannot proceed.
         └─ YES → Did client approve public visibility for content?
                  ├─ NO (client restrictions) → MINIMAL
                  └─ YES → Does the site have substantive service page content?
                           ├─ NO (thin content, single-page) → STANDARD
                           └─ YES → FULL
```

---

## Gate: Data Quality Check

Before assigning FULL or STANDARD tier, verify that discovery captured:

| Required for FULL/STANDARD | Minimum acceptable |
|---|---|
| Service list | At least 3 named services with descriptions |
| Pricing | At least starting prices for primary services, or explicit "pricing on request" |
| FAQ answers | At least 5 real questions with direct answers |
| Service area | At least 3 named cities |
| Business credentials | At least 1 of: years in business, license number, review count |

If discovery output doesn't meet this minimum, **return to `01-discovery`** before assigning a tier. Do not proceed with AI visibility implementation on insufficient data. A `llms.txt` that says "We offer great services in the area" is worse than no `llms.txt`.

---

## Component Decision Matrix

Once tier is set, use this table to confirm what gets built:

| Component | FULL | STANDARD | MINIMAL |
|---|---|---|---|
| `llms.txt` | ✓ | ✓ | ✗ |
| `LocalBusiness` schema | ✓ | ✓ | ✓ |
| `FAQPage` schema | ✓ (if FAQ content) | ✓ (if FAQ content) | ✗ |
| `Service` schema | ✓ | ✗ | ✗ |
| XML Sitemap | ✓ | ✓ | ✓ |
| `robots.txt` (AI allow list) | ✓ | ✓ | ✓ |
| Markdown mirrors | ✓ | ✗ | ✗ |
| GSC setup | ✓ | ✓ | ✓ |

---

## Recording the Decision

Note the tier in the project plan before implementation begins:

```
AI Visibility Tier: [FULL / STANDARD / MINIMAL]
Reason: [one sentence]
Discovery data quality: [pass / returned for more data]
Mirrors: [yes / no / not applicable]
Client restrictions: [none / pricing withheld / AI crawlers restricted]
```

This note ensures the implementer (17-feature-local-seo) and QA reviewer (18-qa-review) both know what was scoped.

---

## Changing Tier After Implementation Starts

If implementation is underway and the client provides additional data that would warrant a higher tier, it is acceptable to upgrade. Add the missing components.

Never downgrade silently. If content turns out to be too thin to support FULL tier, document the downgrade and update the project notes.
