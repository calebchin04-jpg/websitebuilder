# Examples

---

## Example 1 — Peak Ridge Remodeling (Near-Final Build)

**Business:** Peak Ridge Remodeling — Portland, OR. Kitchen, bathroom, and basement remodeling. Near-final Next.js App Router build reviewed at source code level.

**Review mode:** MODE 2 — BUILD QA, with launch-gate assessment.

**Verdict:** PASS WITH MAJOR REVISIONS

---

### Summary

Structurally sound and above average for a local business site. Design system is restrained and specific (dark green palette, warm off-white, named team, real Portland neighborhoods). The testimonials are strong. The form is well-built. The conversion architecture is clear. Three blockers must be resolved before any public deployment. Several major issues reduce trust and visual proof effectiveness.

---

### Blockers Found (3)

**B1 — `CCB License #[PLACEHOLDER]` in footer**
- `Footer.tsx:157`
- Renders publicly on every page. Implies the contractor may not be licensed.
- Fix: Replace with real Oregon CCB number before any deployment.

**B2 — Gallery captions permanently invisible on mobile**
- `GalleryGrid.tsx:108` — `translate-y-full group-hover:translate-y-0`
- Touch devices never fire hover. Captions (proof labels) are invisible to the majority traffic source.
- Fix: Change to `translate-y-0 md:translate-y-full md:group-hover:translate-y-0`

**B3 — Gallery captions `aria-hidden="true"`**
- `GalleryGrid.tsx:115`
- Proof content inaccessible to screen readers. WCAG failure.
- Fix: Remove `aria-hidden="true"` from caption div.

---

### Major Issues Found (4)

**M1 — Social and review URLs are unverified placeholder values**
- `data/site.ts` — `social.google`, `reviews.platformUrl`, `social.instagram`, `social.houzz`
- "Read all 65+ reviews on Google" links to a URL that may not resolve to the real business. Trust signal becomes liability.
- Fix: Verify every URL in `siteConfig.social` and `reviews.platformUrl` before launch.

**M2 — Service pages have no inline gallery proof**
- `app/services/[service-slug]/page.tsx` — no gallery section
- Homeowner on the kitchen page sees no kitchen project photos. The "See Our Work" secondary CTA is a weak substitute.
- Fix: Add `serviceGallery` array to `data/services.ts`, render `<GalleryGrid showFilters={false}>` per service.

**M3 — Homepage gallery is 3 kitchen / 2 bathroom / 1 basement**
- `data/pages/home.ts:39-70`
- Basement is a primary service but appears once in homepage proof. Misrepresents service breadth.
- Fix: Rebalance to 2/2/2 across categories.

**M4 — Gallery captions are weak (location-only)**
- `data/pages/portfolio.ts:12-30` — all 15 captions
- "Open-concept kitchen, Portland" communicates scope nothing. Proof value is wasted.
- Fix: Rewrite to `[Scope or feature] — [City], [optional trust detail]` formula.

---

### Moderate Issues Found (6)

**Mo1 — "All Service Areas" link missing from footer**
- `Footer.tsx:136` — `.slice(0, -1)` silently removes last nav item
- No footer path to `/service-areas` page for users beyond 3 linked cities.
- Fix: Remove `.slice(0, -1)` or add explicit link after list.

**Mo2 — About page headline is generic**
- `data/pages/about.ts:4` — "About Peak Ridge Remodeling"
- The subheadline "Portland-based, owner-operated, and built on repeat clients and referrals" is stronger than the headline.
- Fix: Promote subheadline to headline. Example: "Portland-Based. Owner-Run. Built on Referrals."

**Mo3 — Portfolio headline "Our Work" is generic**
- `data/pages/portfolio.ts:10`
- Fix: "Portland Remodeling Portfolio" or "300+ Projects Across Portland"

**Mo4 — `prefers-reduced-motion` override not confirmed**
- `app/globals.css` — presence not verified
- Site uses reveal/fade-up animations. WCAG 2.3.3 requires motion reduction support.
- Fix: Add override for `.reveal` and animation classes under `@media (prefers-reduced-motion: reduce)`

**Mo5 — Team photo assets unverified**
- `data/pages/about.ts` — `/images/team/ryan.jpg`, `/images/team/dana.jpg`, `/images/team/ryan-on-site.jpg`
- If photos don't exist, about page renders broken image containers in 3 prominent positions.
- Fix: Confirm files exist before launch.

**Mo6 — Step numbers `aria-hidden` drops sequential context**
- `ProcessSteps.tsx:76`
- Screen readers lose step ordering context.
- Fix: Add visually-hidden "Step N:" prefix to each step heading.

---

### Minor Issues Found (4)

**Mi1 — Footer star rating hardcoded to 5**
- `Footer.tsx:27` — use `siteConfig.reviews.rating` instead
  
**Mi2 — Google G icon in testimonials missing `role="img"`**
- `TestimonialsSection.tsx:36`

**Mi3 — `role="list"` on `<ol>` is redundant**
- `ProcessSteps.tsx:42`

**Mi4 — Houzz URL defined in siteConfig but never linked**
- `data/site.ts:27` — remove or link

---

### What Must Be Preserved

- All form logic (server action, Zod validation, honeypot, Resend integration)
- Design token system (colors, typography, spacing — do not alter)
- All testimonial content — strong and specific, do not genericize
- About page story content — named founder, employee structure, founding year
- Schema markup on all pages
- Guarantee copy placement near CTAs and forms
- Navigation structure and mobile header pattern
- Service page FAQ and process content

---

### Revision Type

Quick patch cycle. Architecture is sound. Blockers require 3 targeted fixes. Major issues require data changes and one new component placement. Not a deep correction cycle.
