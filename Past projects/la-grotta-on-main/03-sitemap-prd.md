# SITEMAP PRD
**Project:** La Grotta On Main
**Build type:** Redesign
**Date:** 2026-04-17
**Stage:** 03-sitemap — output complete
**Planning PRD status:** Acceptable with flags

---

## 1. Project Overview

La Grotta On Main is a 29-year-old family-owned Italian and Mediterranean restaurant in historic Unionville, Ontario. The site is a 7-page flat-navigation redesign built around a single conversion action: a phone call to reserve a table. Every structural decision serves this path — the site orients visitors quickly, builds trust through story and photography, and removes all friction between the visitor and the phone number.

---

## 2. Sitemap Summary

**Total pages:** 7
**Navigation structure:** Flat (no parent-child, no dropdowns)
**Primary conversion page:** `/contact`
**Local SEO pages included:** No — local SEO handled via schema markup and NAP consistency across all pages; a single-location restaurant in one named village does not warrant city sub-pages
**CMS-managed pages:** None — static site (pending post-launch ownership decision)

**Page count breakdown:**
- Core pages: 5 (Homepage, Menu, Gallery, Private Functions, Contact)
- Service pages: 0 (services are sections, not pages)
- Trust/credibility pages: 0 (trust is woven through all pages, not isolated)
- Local SEO pages: 0
- Utility/legal pages: 1 (Privacy Policy)
- CTA path pages: 1 (Thank You — post Private Functions form)

---

## 3. Critique of Planning PRD

**Overall planning PRD quality:** Acceptable

**Issues identified:**

> **[CONSTRAINTS]** Problem: Post-launch CMS ownership unresolved; budget and timeline not stated. Impact on IA: Cannot confirm whether any pages need CMS-managed content blocks. Resolution: Defaulting to fully static site. If CMS is confirmed later, Menu and Gallery are the most likely candidates for editable content — flag for `06-build-plan`.

> **[PHOTOGRAPHY]** Problem: Photo quality unassessed (Yelp and Instagram inaccessible for quality review). Impact on IA: Gallery page depth (number of categories, image volume) cannot be fully determined. Resolution: Gallery is structured with 4 categories (Food, Interior, Patio, Events) — reduce or merge categories at build time if photo volume per category is insufficient.

> **[LOCAL SEO]** Problem: Planning PRD deferred local SEO to schema markup without evaluating whether city-level pages would add ranking value. Impact on IA: May underserve search intent from Markham, Stouffville, or Richmond Hill diners. Resolution: Single-location restaurant in a named historic village (Unionville) is a legitimate single-page local SEO case. Schema + NAP is the right call. City pages are not warranted and would be thin content.

---

## 4. Send-Back to 02-Planning

*Not triggered. Planning PRD is structurally sound.*

---

## 5. Information Architecture Logic

La Grotta's site is intentionally small and direct. Five content pages serve all visitor needs; two utility pages handle operational and legal requirements. The structure is flat — no dropdowns, no nested service pages, no sub-navigation — because the restaurant's offer is unified and the visitor's decision tree is short: do I want to eat here, and how do I book? The family story lives on the Homepage as a section (not a dedicated About page) because the story is not a destination — it is atmosphere that must appear early in the journey, not after navigation. Private Functions is a standalone page rather than a section because it serves a distinct secondary audience with its own CTA and content needs. The Gallery is a dedicated page rather than a homepage section because the photo volume and category depth (Food, Interior, Patio, Events) warrant full-page treatment, and it is a meaningful trust stop in the visitor journey.

**Key structural decisions:**
- **No dedicated About page:** The 29-year family story is a section on the Homepage. A standalone About page would require a deliberate navigation click, reducing the story's reach. Integrating it into the homepage scroll ensures every visitor encounters it.
- **Menu is a standalone page:** The menu is an evaluation-stage destination. Visitors navigate to it specifically — it must be a full page with its own reservation CTA, not a modal or embedded section.
- **Gallery is a standalone page:** Volume and category depth warrant a full page. A gallery section on the homepage serves as a teaser that links to the full page.
- **No city/service-area pages:** Single fixed location in a named historic village. Local SEO is served by LocalBusiness schema, NAP consistency, and location-specific copy on the Homepage and Contact pages.
- **Thank You page is CTA-path only:** Exists solely to confirm Private Functions inquiry form submission. Not in nav. Not linked from anywhere except the form redirect.
- **Privacy Policy is footer-only:** Required by Canadian PIPEDA for contact form data collection. Not in main nav.

---

## 6. Full Page Hierarchy

```
La Grotta On Main Website

├── / (Homepage)
├── /menu
├── /gallery
├── /private-functions
├── /contact
│
├── [CTA Path — not in nav]
│   └── /thank-you
│
└── [Utility / Legal — footer only]
    └── /privacy-policy
```

---

## 7. Navigation Structure

### Main Navigation

```
[Logo — La Grotta On Main] | Menu | Gallery | Private Functions | Contact | [Reserve a Table]
```

| Nav Label | Page | URL | Notes |
|---|---|---|---|
| Menu | Menu | `/menu` | Standard nav link |
| Gallery | Gallery | `/gallery` | Standard nav link |
| Private Functions | Private Functions | `/private-functions` | Standard nav link |
| Contact | Contact | `/contact` | Standard nav link |
| Reserve a Table | Contact | `/contact` | Visually distinct CTA button, rightmost — gold or outlined style consistent with brand palette |

**Sticky behavior:** Main nav is sticky on scroll. "Reserve a Table" button remains visible at all times on desktop. On mobile: sticky header collapses to logo + hamburger + "Reserve" button (CTA always visible without opening menu).

**Mobile bottom bar:** A fixed bottom bar on mobile displays the phone number with a tap-to-call link as a persistent fallback. Appears on all pages. Disappears only when the Contact page is the active page (redundant there).

### Footer Navigation

| Column | Links |
|---|---|
| Visit | Menu, Gallery, Private Functions |
| Contact | Contact, (905) 940-0235, lagrottaonmain@gmail.com |
| Follow | Instagram (@lagrottaonmain), Facebook |
| Legal | Privacy Policy |

**Footer also contains:** Business address (205 Main Street, Unionville, ON L3R 2G8), hours of operation, copyright line.

---

## 8. Page Groups and Rationale

### Group 1: Core Pages
**Rationale:** The five content pages cover 100% of visitor needs — orientation (Homepage), evaluation (Menu, Gallery), secondary conversion (Private Functions), and primary conversion (Contact). Every page either builds trust, enables evaluation, or drives the CTA.
**Pages:** Homepage `/`, Menu `/menu`, Gallery `/gallery`, Private Functions `/private-functions`, Contact `/contact`

### Group 2: CTA Path Pages
**Rationale:** The Thank You page confirms Private Functions inquiry submissions. It exists to close the loop for visitors who submitted the inquiry form and give a positive final impression. It is not a conversion page — it is a post-conversion confirmation.
**Pages:** Thank You `/thank-you`

### Group 3: Utility and Legal
**Rationale:** Privacy Policy is required under Canadian PIPEDA for any site that collects personal data via a contact form. It is not a trust page or conversion page — it is a legal operational requirement.
**Pages:** Privacy Policy `/privacy-policy`

---

## 9. Page-by-Page Purpose Statements

---

### Homepage — `/`

**Purpose:** Establish atmosphere, identity, and credibility immediately — and make the phone call feel like the natural next step.

**User need:** Visitor wants to quickly determine if La Grotta is the right choice for their occasion. They need to feel the atmosphere, trust the quality, and find the action to take.

**Business need:** Convert initial Google/Instagram interest into a phone reservation. Establish the family-owned story as the primary differentiator from competitors.

**CTA on this page:** "Reserve a Table" → phone number / `/contact`

**Required content:**
- Hero: full-width atmospheric image, business name, brief positioning line ("29 years of family-owned Italian dining in historic Unionville"), primary CTA
- Family/story section: 29-year tenure, owner presence, what makes La Grotta specific to this place and this family
- Signature dishes highlight: 3–4 featured dishes with photography
- Gallery teaser: 4–6 images linking to `/gallery`
- Google reviews strip: 4.3★ rating, selected review excerpts
- Secondary CTA to view menu
- Footer with full contact info and hours

---

### Menu — `/menu`

**Purpose:** Give visitors the menu information they need to confirm food quality and decide to book.

**User need:** Visitor wants to know what's available, at what level of quality, before committing to a reservation. They are in evaluation mode.

**Business need:** Close the evaluation gap — make it easy for a visitor who would enjoy La Grotta's food to reach that conclusion quickly and proceed to booking.

**CTA on this page:** "Reserve a Table" → phone number — appears at top and bottom of page

**Required content:**
- Menu categories (starters, mains, desserts, drinks — confirm structure from current site)
- 1–2 food images above or alongside the menu
- Allergen/dietary notes (vegetarian, vegan, gluten-free options — referenced on current site)
- Phone number with tap-to-call, prominent at top and bottom
- Note on private functions menu options (brief, with link to `/private-functions`)

---

### Gallery — `/gallery`

**Purpose:** Provide atmosphere proof — show the restaurant as it actually is so the visitor can emotionally confirm their interest before booking.

**User need:** Visitor wants to see the food, space, and experience before committing. They are building emotional confidence, not gathering information.

**Business need:** Close the visual trust gap — give visitors the atmospheric evidence that converts interest into intent.

**CTA on this page:** "Reserve a Table" → phone number — appears at bottom of page after full gallery exposure

**Required content:**
- Category filter or tabs: Food / Interior / Patio / Events
- Photography grid — minimum 6 images per category (if volume allows; merge categories if not)
- Brief atmospheric caption or category label only — no long descriptions
- CTA at bottom of page

---

### Private Functions — `/private-functions`

**Purpose:** Convert event planners and group organizers into inquiry leads by communicating capability, capacity, and ease of working with the restaurant.

**User need:** Visitor is planning an event and wants to know if La Grotta can handle it — capacity, menu options, process for booking.

**Business need:** Generate direct inquiry contacts for private dining and event business, which is a secondary but meaningful revenue stream.

**CTA on this page:** Inquiry form (name, email, occasion type, message) + phone number

**Required content:**
- Brief positioning statement (what kind of events, what the experience is like)
- Capacity and space details (if confirmable from current site or client)
- Available menus / catering options (brief)
- FAQ: 3–5 common questions (what's the minimum, do you handle AV, can you do a custom menu)
- Inquiry form: 4 fields max (name, email, occasion, message)
- Phone number as alternative contact

---

### Contact — `/contact`

**Purpose:** Be the frictionless conversion endpoint — make calling as easy as possible and remove every practical barrier to visiting.

**User need:** Visitor has decided they want to come. They need the phone number, address, hours, and confirmation of how to get there.

**Business need:** Convert the decided visitor into a confirmed reservation phone call. Remove all doubt and all friction.

**CTA on this page:** Phone number (tap-to-call on mobile) — the dominant element on this page

**Required content:**
- Phone number: large, tap-to-call on mobile, dominant placement
- Address: 205 Main Street, Unionville, ON — with Google Maps embed
- Hours of operation: full weekly hours
- Email address (for non-urgent or private functions inquiries)
- Parking or access notes if relevant (Unionville Main Street is a destination area)
- Instagram and Facebook links

---

### Thank You — `/thank-you`

**Purpose:** Confirm that the Private Functions inquiry form was submitted successfully and set expectations for the next step.

**User need:** Visitor wants confirmation their message was received and to know what happens next.

**Business need:** Close the loop on form submissions and leave a positive final impression.

**CTA on this page:** "Back to Homepage" → `/`

**Required content:**
- Confirmation message: inquiry received
- Expected response time (e.g., "We'll be in touch within 24 hours")
- Phone number if they prefer to speak immediately
- Link back to homepage

---

### Privacy Policy — `/privacy-policy`

**Purpose:** PIPEDA compliance for personal data collected via the Private Functions inquiry form.

**User need:** Legal right to understand how their data is used.

**Business need:** Legal requirement for operating a contact form in Canada.

**CTA on this page:** None

**Required content:**
- Standard PIPEDA-compliant privacy policy
- Data collected (name, email, message)
- How it is used (to respond to inquiries only)
- Contact for privacy questions

---

## 10. User Paths

### Primary Path: Direct Converter — arrives and calls
```
Google Search → / (Homepage) → phone call
```
**User type:** Couple who has heard of La Grotta or found it in search. Confident enough after the homepage to call.
**Likely entry page:** `/` (Homepage)
**Key decision pages:** Homepage hero and story section
**Conversion page:** Phone call triggered from homepage CTA or sticky header

---

### Secondary Path: Evaluator — checks menu before deciding
```
Google Search → / (Homepage) → /menu → phone call
```
**User type:** Couple who wants to see the food before committing. Food-forward decision-maker.
**Likely entry page:** `/` (Homepage)
**Key decision pages:** Menu page — food quality and variety confirm the decision
**Conversion page:** Phone number on `/menu` (bottom CTA)

---

### Tertiary Path: Visual Confirmer — needs to see the space
```
Google Search or Instagram → / (Homepage) → /gallery → phone call
```
**User type:** Visitor driven by atmosphere — they want to see the space, patio, or food before deciding.
**Likely entry page:** `/` (Homepage) or Instagram link
**Key decision pages:** Gallery page — atmosphere photography closes the emotional decision
**Conversion page:** Phone number on `/gallery` (bottom CTA)

---

### Quaternary Path: Event Planner
```
Google Search → /private-functions → inquiry form submission → /thank-you
```
**User type:** Person organizing a private dinner, corporate event, or celebration.
**Likely entry page:** `/private-functions` (direct search: "private dining Unionville")
**Key decision pages:** Private Functions page — capacity, menus, FAQ
**Conversion page:** Inquiry form on `/private-functions` → `/thank-you`

---

### CTA Paths

| Starting page | CTA trigger | Destination | Post-conversion |
|---|---|---|---|
| Homepage | "Reserve a Table" button | `tel:9059400235` | Phone call |
| Homepage | "View Menu" secondary CTA | `/menu` | Evaluation |
| Homepage | Gallery teaser "See All Photos" | `/gallery` | Trust building |
| Menu | "Reserve a Table" (top + bottom) | `tel:9059400235` | Phone call |
| Gallery | "Reserve a Table" (bottom) | `tel:9059400235` | Phone call |
| Private Functions | Inquiry form submit | `/thank-you` | Confirmation |
| Private Functions | Phone number | `tel:9059400235` | Phone call |
| Contact | Phone number | `tel:9059400235` | Phone call |
| Any page | Sticky header "Reserve a Table" | `tel:9059400235` | Phone call |
| Any page (mobile) | Fixed bottom bar | `tel:9059400235` | Phone call |

---

## 11. Internal Linking Logic

**Structural links (must exist):**

| From page | Link type | To page | Reason |
|---|---|---|---|
| All pages | Sticky header CTA | `tel:9059400235` | Primary CTA always accessible |
| All pages (mobile) | Fixed bottom bar | `tel:9059400235` | Mobile tap-to-call always accessible |
| Homepage | "View Menu" CTA | `/menu` | Secondary evaluation path |
| Homepage | Gallery teaser link | `/gallery` | Atmosphere trust path |
| Homepage | "Private Functions" mention | `/private-functions` | Secondary audience path |
| Menu | Bottom CTA | `tel:9059400235` | Evaluation → conversion |
| Menu | Private functions note | `/private-functions` | Cross-path for event planners finding menu first |
| Gallery | Bottom CTA | `tel:9059400235` | Trust → conversion |
| Private Functions | Form submit | `/thank-you` | Form confirmation |
| Private Functions | Phone number | `tel:9059400235` | Alternative to form |
| Thank You | "Back to Homepage" | `/` | Post-conversion return |
| All pages | Footer nav | All 5 core pages | Full site accessibility |
| All pages | Footer | Instagram, Facebook | Social proof extension |

**Do not link:**
- `/privacy-policy` from anywhere except the footer
- `/thank-you` from nav or any page except form redirect
- Tripadvisor — do not link or reference anywhere on the site

---

## 12. Local SEO Page Structure

**Decision:** No dedicated local SEO city pages.

**Rationale:** La Grotta On Main is a single fixed-location restaurant in Unionville, a named historic village within Markham. The relevant search queries ("Italian restaurant Unionville," "date night Markham," "Italian restaurant near me") are all served by a well-optimized homepage and Contact page with LocalBusiness schema. City landing pages for a single-location restaurant would be thin content and would not provide meaningful ranking uplift over properly structured schema and location-specific homepage copy. Local SEO is implemented via:
- Google LocalBusiness schema on all pages (name, address, phone, hours, cuisine type, priceRange)
- Location-specific copy on Homepage hero and Contact page
- Consistent NAP (Name, Address, Phone) across all pages and footer
- Google Maps embed on Contact page

---

## 13. URL Structure Summary

| Page | URL | Nav placement |
|---|---|---|
| Homepage | `/` | Main nav (logo click) |
| Menu | `/menu` | Main nav |
| Gallery | `/gallery` | Main nav |
| Private Functions | `/private-functions` | Main nav |
| Contact | `/contact` | Main nav + CTA button |
| Thank You | `/thank-you` | CTA path only (not in nav) |
| Privacy Policy | `/privacy-policy` | Footer only |

---

## 14. Assumptions Made

- `[ASSUMPTION]` **Topic:** Gallery category volume. **Why:** Photo quality and count unassessed. **Impact:** If fewer than 6 good photos exist per category, Food + Interior may need to merge into a single grid, and Patio + Events may need to merge. Gallery structure should be confirmed at build time.

- `[ASSUMPTION]` **Topic:** No About page needed. **Why:** Family story is strong enough to live as a homepage section. **Impact:** If the client wants a dedicated About page later, it can be added in Phase 2 without structural rework.

- `[ASSUMPTION]` **Topic:** Private Functions page can be built from current site content + client confirmation. **Why:** Capacity and catering details not captured in discovery. **Impact:** Page copy will require one round of client confirmation before it goes live.

- `[ASSUMPTION]` **Topic:** Thank You page handles only Private Functions form. **Why:** Phone is the only reservation mechanism — no reservation form exists. **Impact:** If a reservation form is ever added, the Thank You page would need to handle both flows.

---

## 15. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Hours of operation | Not captured | Client confirms | Before build |
| Private Functions capacity details | Not captured | Client confirms | Before copy is written |
| Menu accuracy | Current site menu may be outdated | Client confirms | Before launch |
| High-res logo | Not confirmed available | Client provides | Before design system |
| CMS decision | Post-launch editing preference unknown | Client confirms | Before build plan |
| Gallery photo volume per category | Photos not accessible for review | Agency assesses at content sourcing | Before gallery is built |

---

## 16. Blockers and Risks

**Blockers:** None that prevent `04-wireframes` from starting. Wireframes can proceed based on the page structure above.

**Risks:**
- **Gallery category depth:** If photo volume is insufficient for 4 separate categories, the gallery tab/filter structure must be simplified. This affects the gallery page wireframe but not the overall sitemap.
- **Private Functions page accuracy:** Without confirmed capacity and catering details from the client, this page will launch with placeholder-level specificity. Must be resolved before launch.
- **Static build assumption:** If client confirms they want to edit menu or gallery content post-launch, the build plan must add a headless CMS layer. This does not affect the sitemap but significantly affects the build plan and timeline.

---

## 17. Handoff to 04-Wireframes

**Sitemap status:** Complete

**Instruction for 04-wireframes:**
> The sitemap defines 7 pages. Begin wireframe section planning in this order: Homepage, Menu, Gallery, Private Functions, Contact. Thank You and Privacy Policy require minimal wireframe attention — standard layout with no conversion architecture needed. For each page, follow the page purpose and required content in Section 9 of this document. The trust-building sequence from the planning PRD must govern homepage section order: atmosphere → story → food quality → social proof → menu CTA → reservation CTA. On all pages: the phone number and reservation CTA must be visible without scrolling on mobile (375px). The sticky header and mobile bottom bar are structural constants — they must be accounted for in every page wireframe as existing conversion infrastructure.

**Priority pages for wireframe (do these first):**
1. Homepage — highest conversion impact; most section decisions to resolve; trust sequence must be correct
2. Menu — most content decisions; must be readable on mobile without compromise
3. Private Functions — secondary conversion path with unique form and FAQ requirements
4. Gallery — category structure and filter behavior need wireframe definition
5. Contact — simplest page; frictionless conversion endpoint

---

## 18. Instructions for Later Skills

### 05-Design System
> The site has 7 pages with a flat navigation structure. Header is sticky with a persistent CTA button. Mobile has an additional fixed bottom bar (tap-to-call). These two persistent UI elements must be defined in the design system as global components. Gallery page uses a category filter or tab — this interaction pattern must be defined. All 5 content pages share the same header and footer. Thank You and Privacy Policy use a minimal single-column layout — a simplified page template variant is needed.

### 06-Build Plan
> Page count: 7. No local SEO template pages. CTA path pages: 1 (`/thank-you`). Utility pages: 1 (`/privacy-policy`). Static build. No CMS unless client confirms otherwise. URL structure is flat — no nested routes except `/thank-you` and `/privacy-policy`. Private Functions inquiry form requires a serverless form handler (Resend or Formspree). Google Maps embed on `/contact`. LocalBusiness schema on all pages. GA4 analytics on all pages.

### 07+ Feature Folders
> `15-feature-gallery`: Gallery page is at `/gallery` as a standalone page. Homepage contains a teaser section (4–6 images) linking to `/gallery`. Gallery page uses a 4-category filter (Food, Interior, Patio, Events) — reduce to 2 categories if photo volume is insufficient. `12-forms`: Contact form lives on `/private-functions` only (not `/contact`). `/contact` is phone-first with no form. `17-feature-local-seo`: Schema markup implemented on all pages — no dedicated city pages. NAP consistency is required across all pages including footer.
