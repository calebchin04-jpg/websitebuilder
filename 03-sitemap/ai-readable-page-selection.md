# AI-Readable Page Selection

Owned by: `03-sitemap`

---

## Purpose

Not every page on a site should be in the AI visibility layer. This document defines which pages are always included, which are conditional, and which must never be included — across the sitemap, `llms.txt` page listing, and markdown mirrors.

The goal is to surface every page that has genuine discovery value for a potential customer, and exclude every page that doesn't.

---

## Required AI-Readable Pages

These pages must be in the sitemap, included in `llms.txt` page listings, and mirrored (if mirrors are implemented):

| Page | Sitemap | llms.txt Pages | Markdown Mirror |
|---|---|---|---|
| Homepage | ✓ Required | ✓ Required | ✓ Required |
| Each service page | ✓ Required | ✓ Required | ✓ Required |
| Contact page | ✓ Required | ✓ Required | ✓ If it has more than a form |

These pages are the minimum AI-readable surface for any local service business. A business cannot appear in AI answers for service queries without service pages indexed and machine-readable.

---

## Conditional AI-Readable Pages

Include when the stated condition is met:

| Page | Condition | Sitemap | llms.txt | Mirror |
|---|---|---|---|---|
| Service area / location pages | Business genuinely serves distinct areas with separate pages | ✓ | ✓ | ✓ |
| About page | Contains at least one differentiating, verifiable fact (year founded, certifications, owners' story with real details) | ✓ | Optional | Only if substantive |
| FAQ page | Dedicated FAQ page with 10+ questions and direct answers | ✓ | Optional | ✓ |
| Portfolio / gallery page | Contains project descriptions with real details (location, scope, outcome), not just images | ✓ | ✗ | ✗ |
| Service overview / index page | If it exists as a real content page (not just a sitemap) | ✓ | ✓ | Only if it has content beyond a list |
| Blog / news articles | If the site has a blog with substantive content | ✓ | ✗ | ✗ |

**Do not create location pages speculatively.** Only create them if the business genuinely operates differently in different areas — separate phone numbers, service differences, different service areas for different crews. "We serve all of Oregon" does not warrant 50 city pages.

---

## Pages That Must Never Be Included

These pages must be excluded from the sitemap, `llms.txt`, and markdown mirrors:

| Page | Reason |
|---|---|
| `/thank-you` | Confirmation page, no indexable content, should not be cited |
| `/privacy-policy` | Legal boilerplate, not a content page |
| `/terms-of-use` | Legal boilerplate |
| `/404`, `/not-found` | Error pages |
| Any admin or login pages | Not public content |
| Any page with `noindex` meta tag | Signal contradicts inclusion |
| Duplicate content pages | Pagination, filtered views without canonical |

If any of these pages end up in the sitemap or mirrored, that is a BLOCKER item in the pre-launch checklist.

---

## Internal Linking Rules for AI Discoverability

Internal links help both crawlers and AI systems understand the relationship between pages. Apply these rules:

### Service pages must link to each other
Every service page should include links to related service pages. If a user reads about "Kitchen Remodeling," they should find a link to "Bathroom Remodeling." This gives AI systems a complete map of the service offering.

```md
## Related Services

- [Bathroom Remodeling](/services/bathroom-remodeling)
- [Basement Finishing](/services/basement-finishing)
```

### Location pages must link to relevant service pages
If location pages exist, each location page should link to the primary services offered in that area.

### Homepage must link to all primary service pages
Direct links from the homepage to individual service pages — not just a link to a "Services" overview page. Crawlers follow links; deeper links require more hops.

### Service pages must link to the contact page
Every service page should have a clear path to contact. This serves both conversion and crawl depth.

---

## Crawl Priority Signals

Priority values for the XML sitemap (used by both traditional crawlers and AI crawlers):

| Page Type | Priority | Change Frequency |
|---|---|---|
| Homepage | 1.0 | weekly |
| Individual service pages | 0.9 | monthly |
| Service overview page | 0.85 | monthly |
| Location / service area pages | 0.8 | monthly |
| Portfolio / gallery | 0.7 | monthly |
| Contact page | 0.65 | yearly |
| About page | 0.6 | yearly |
| FAQ page (if dedicated) | 0.7 | monthly |

These values signal to crawlers which pages carry the most content value. Do not set all pages to 1.0 — that defeats the purpose of priority values.

---

## Page Selection Checklist

When finalizing the sitemap and AI visibility layer, confirm:

- [ ] Homepage is included
- [ ] All named service pages are included
- [ ] Contact page is included
- [ ] Location pages included only if real distinct areas (not speculative)
- [ ] Thank-you, privacy, and admin pages are excluded
- [ ] All included pages have real, specific content (not placeholder copy)
- [ ] Each service page links to related services
- [ ] Sitemap priority values follow the scale above

---

## Output to Downstream Agents

After page selection is complete, pass the finalized page list to:

- `17-feature-local-seo` — to populate sitemap, `llms.txt` pages section, and markdown mirror list
- `18-qa-review` — to verify all listed pages exist and return 200
