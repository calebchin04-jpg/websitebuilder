# 03 — Sitemap PRD
## Markham Green Golf Club

**Project:** Markham Green Golf Club
**Build type:** Redesign of existing site (markhamgreen.com)
**Date:** April 20, 2026
**Stage:** 03-sitemap — output complete
**Planning PRD status:** Acceptable with flags — eight unresolved data items carried forward as assumptions; none block sitemap decisions.

---

## 1. Project Overview

Markham Green Golf Club is a public 9-hole golf course in Markham, Ontario offering affordable green fees and a professional instruction program (Salazar Golf Academy). This is a 5-page local service site (4 core + 1 utility) structured entirely around one conversion: calling (905) 294-6156 to book a tee time. The sitemap is intentionally minimal — no gallery page, no blog, no location sub-pages, no contact page separate from About. Every page earns its place by serving a direct role in the user's booking or inquiry decision.

---

## 2. Sitemap Summary

**Total pages:** 5
**Navigation structure:** Flat — 4 pages in main nav, 1 utility page in footer only
**Primary conversion page:** `/` (Homepage — first touch for Google Search arrivals) and `/course` (where pricing confirms the decision)
**Local SEO pages included:** No — single-location business; LocalBusiness schema + homepage content handles Markham/York Region targeting
**CMS-managed pages:** None — static build

**Page count breakdown:**
- Core pages: 4 (`/`, `/course`, `/lessons`, `/about`)
- Service pages: 0 (covered within core pages — course fees + lessons are the two offers)
- Trust/credibility pages: 0 (trust built into About page and homepage sections)
- Local SEO pages: 0 (schema + homepage copy handles Markham geo-targeting)
- Utility/legal pages: 1 (`/privacy-policy`)
- CTA path pages: 0 (no form submission → no thank-you page; phone call is the CTA)

---

## 3. Critique of Planning PRD

**Overall planning PRD quality:** Acceptable

**Issues identified:**

> **[CTA Architecture]** Problem: Planning PRD correctly identifies the `siteConfig.bookingUrl` toggle but does not specify what happens visually when both are null — the tel: fallback is implied but not explicit. Impact on IA: No page structure issue, but the sitemap should clarify that no `/book` or `/booking` page exists — the CTA is always a header sticky button or inline link. Resolution: Confirmed in sitemap — all booking CTAs resolve to tel: link or bookingUrl config value; no dedicated booking page in the architecture.

> **[Greg Salazar CTA ownership]** Problem: Still unresolved — lessons page CTA direction unknown. Impact on IA: Does not change page count or structure. The lessons page exists regardless; only the CTA destination is variable. Resolution: Lessons page structure planned for both cases. Default: "Contact Greg" email link + "Call the Pro Shop" secondary. If client directs all inquiries to pro shop, both CTAs become phone-first.

> **[No thank-you page]** Problem: Planning PRD does not define a post-conversion state because the primary CTA is a phone call. Impact on IA: No `/thank-you` page is needed, which simplifies the sitemap. However, if Greg Salazar inquiry is via email link (mailto:), there is no post-send state either. Resolution: Confirmed no thank-you page — phone calls and mailto: links do not require a dedicated post-conversion page at this build stage.

---

## 5. Information Architecture Logic

The site has two offers and two audiences, but a single primary conversion action (booking call). The IA is structured so that both audiences can self-direct from the homepage: recreational golfers go to `/course` to confirm pricing and call; parents, beginners, and lesson-seekers go to `/lessons` to see the program and contact Greg. The About page is folded with the contact block because Markham Green is a single-location business — a separate `/contact` page would only dilute the About page's trust value and create a redundant page with no unique job. No local SEO sub-pages are justified: Markham Green is one location, one city, and the LocalBusiness schema + homepage copy handles Markham/York Region targeting efficiently. A gallery is not a standalone page in Phase 1 — drone photography serves as a section on the homepage.

**Key structural decisions:**
- **No separate `/contact` page:** About page performs the combined trust + contact job. This is a single-location business with a simple contact block — there is nothing to merit a separate page.
- **No gallery page in Phase 1:** Drone photography is embedded as a visual section on the homepage. If photography volume and quality warrant it, `/gallery` is the first Phase 2 addition.
- **No thank-you page:** Primary CTA is a phone call. No form submission occurs in the base build. Mailto: links for lesson inquiries do not require a confirmation page.
- **No local SEO sub-pages:** Single location, single city. Markham/York Region is covered by LocalBusiness schema, homepage copy, and the About page address block. City sub-pages would be thin, low-value, and inappropriate for a single-course business.
- **Lessons and course are separate top-level pages:** These are distinct offers for distinct audiences — combining them onto a single pricing page would create a layout that serves neither well and buries the lesson program for parents searching specifically for "golf lessons Markham."

---

## 6. Full Page Hierarchy

```
Markham Green Golf Club Website

├── / (Homepage)
├── /course (Course & Green Fees)
├── /lessons (Lessons & Camps)
├── /about (About / Pro Shop — includes contact block, staff, map)
│
└── [Utility / Legal — footer only]
    └── /privacy-policy
```

*Phase 2 additions (not in this build):*
```
├── /gallery (if drone photography quality and count warrant a standalone page)
└── /book (if booking system requires a dedicated embed page rather than header CTA link)
```

---

## 7. Navigation Structure

### Main Navigation

```
[Markham Green Logo] | Course & Green Fees | Lessons & Camps | About / Pro Shop | [Book a Tee Time →]
```

| Nav Label | Page | URL | Notes |
|---|---|---|---|
| Course & Green Fees | Course & Green Fees | `/course` | Pricing is the decision page — name must be explicit |
| Lessons & Camps | Lessons & Camps | `/lessons` | Second audience path |
| About / Pro Shop | About | `/about` | Includes contact block — "Pro Shop" signals operational info |
| Book a Tee Time | — | `tel:(905)294-6156` or `siteConfig.bookingUrl` | Visually distinct button, rightmost; tel: link until booking system activates |

**Mobile navigation:** Hamburger drawer with same 4 links. "Book a Tee Time" CTA always visible in header — does not collapse into the drawer.

### Footer Navigation

| Column heading | Links |
|---|---|
| Markham Green Golf Club | Course & Green Fees, Lessons & Camps, About / Pro Shop |
| Contact | (905) 294-6156, [address placeholder], [hours placeholder] |
| Follow | [Instagram link if provided], [Facebook link if provided] |
| Legal | Privacy Policy |

---

## 8. Page Groups and Rationale

### Group 1: Core Pages
**Rationale:** These four pages constitute the complete site. Each has a distinct strategic job and distinct audience need. No page is redundant with another. All four are in the main navigation.
**Pages:** `/` (Homepage), `/course` (Course & Green Fees), `/lessons` (Lessons & Camps), `/about` (About / Pro Shop)

### Group 2: Utility and Legal
**Rationale:** Privacy policy is required for any site with contact information, Google Analytics, or embedded maps. Single utility page — no terms of service needed for a non-transactional site.
**Pages:** `/privacy-policy`

### Group 3: Local SEO
**Rationale:** Not a separate page group for this build. Local SEO is implemented at the infrastructure level (LocalBusiness JSON-LD schema in `layout.tsx`, structured address + hours on `/about`, geo-targeted copy on homepage and course page). A single-location business in one city does not benefit from city sub-pages — they would be thin, duplicate-risk pages that dilute rather than strengthen the main pages.
**Pages:** None (schema + content on existing pages)

---

## 9. Page-by-Page Purpose Statements

---

### Homepage — `/`

**Purpose:** Convert first-touch Google Search visitors into tee time booking calls by immediately establishing that Markham Green is a real, affordable, welcoming course with a clear path to book.

**User need:** The visitor wants to quickly confirm that this course exists, that it's accessible and affordable, and how to book a round — within one page load.

**Business need:** Drive phone calls to (905) 294-6156. The homepage is the highest-traffic page and the entry point for the majority of organic search arrivals.

**CTA on this page:** "Book a Tee Time" → tel:(905)294-6156 (or bookingUrl when activated). Sticky in header + dominant in hero + inline near pricing summary.

**Required content:**
- Hero: Course photograph (full-width, quality drone/course shot), headline establishing what it is and where, season open date, "Book a Tee Time" CTA
- Trust bar: Google rating (placeholder until confirmed), PGA credentials (Scott Haynes), community/local signal
- Course overview: brief description of the 9-hole layout and what to expect — accessible, real course feel
- Pricing summary: key green fee tiers visible on homepage (weekday, weekend, twilight at minimum) — not the full table, just enough to confirm affordability; link to `/course` for full pricing
- Lessons callout: brief intro to Salazar Golf Academy — program types and a link to `/lessons`; secondary audience pathway
- Staff/team section: Scott Haynes and Greg Salazar at minimum — PGA credentials visible; community-feel human signal
- Course photography section (drone shots): visual proof section — shows the course is maintained and real
- Footer with address (placeholder), phone, hours (placeholder), social links

---

### Course & Green Fees — `/course`

**Purpose:** Present the full green fees pricing table clearly so visitors can confirm affordability and proceed to booking without uncertainty.

**User need:** The visitor has decided they might want to play at Markham Green and wants to see exactly what it costs for their situation (weekday, weekend, senior, junior, with/without cart).

**Business need:** Remove the price uncertainty that currently prevents calls. A visitor who sees the price and finds it reasonable will call. A visitor who can't find the price will bounce.

**CTA on this page:** "Book a Tee Time" → tel:(905)294-6156, placed prominently below or inline with the pricing table.

**Required content:**
- Brief course intro: what the course is (9-hole public, Markham), who it's for, what to expect — framing for the pricing that follows
- Full green fees pricing table: all tiers — Weekday ($44), Weekend ($48), Senior ($38), Junior weekday/weekend ($31/$35), Twilight ($37), Replay (weekday $26, weekend $31), Power cart ($14/person)
- Course details: par, total yards, layout description (placeholder until client provides) — course specs for golfers evaluating the course's character
- Cart rental info: $14/person — must be visible near the pricing table, not buried
- Course rules or dress code (if applicable and client provides)
- "Book a Tee Time" CTA: after pricing table — this is the natural conversion moment
- Footer with phone, address, hours

---

### Lessons & Camps — `/lessons`

**Purpose:** Present the Salazar Golf Academy program clearly enough that interested visitors — parents of juniors, beginner adults, women new to golf — take the action of contacting Greg Salazar to enroll.

**User need:** The visitor wants to understand what programs are available, whether they're suitable for their skill level or their child's age, what it costs, and how to sign up.

**Business need:** Drive lesson and junior camp inquiries. The Salazar program is a distinct high-value revenue stream for the course. Even if this page generates 5 inquiries per month, it is serving its purpose.

**CTA on this page:** "Contact Greg" → mailto:greg@salazargolfacademy.com (primary). "Call the Pro Shop" → tel:(905)294-6156 (secondary fallback). [Subject to client clarification on booking ownership.]

**Required content:**
- Program intro: Greg Salazar's credentials and the Salazar Golf Academy — who he is, what he teaches, why it matters at this course
- Private Lessons section: formats (30 min / 1 hr / initial assessment), all pricing ($90, $165, $175), packages (3×30min $255, 5×30min $425, 3×1hr $425, 5×1hr $700, 10×1hr $1,350)
- Ladies Learn to Golf section: program description ($250/level, 5 weekly 1-hour lessons), what "level" means, who it's for
- Junior Camps section: schedule (Mon–Fri), formats (half-day 9–12 or 1–4 at $425; full-day 9–3 at $850), age range and what's included
- Contact/inquiry CTA: clear "Contact Greg" email link + pro shop phone fallback — visible after each program section and at page bottom
- Brief note about course context: lessons are held at Markham Green Golf Club — location confirmation for parents

---

### About / Pro Shop — `/about`

**Purpose:** Build credibility through staff profiles and provide the operational facts (address, hours, phone, map) that local-search visitors need to confirm the course is real and to plan their visit.

**User need:** Two types of visitors arrive here: (1) trust-seekers who want to know who runs this course before committing; (2) operational-info seekers who need the address, hours, or directions.

**Business need:** Serve both visitor types without confusion — credentials/bios for trust-builders, contact block for operational fact-seekers. A strong About page reduces "is this course legit?" hesitation.

**CTA on this page:** "Book a Tee Time" → tel:(905)294-6156 (after staff section and contact block).

**Required content:**
- Staff profiles:
  - Scott Haynes — Course Manager, PGA of Canada Professional — bio, credentials, photo (if available)
  - Greg Salazar — Salazar Golf Academy — instructor credentials, brief bio, link to `/lessons`
  - Zac Spain — Food & Beverage — brief role description
  - Dennis Gilchrist — Course Superintendent — brief role description and what the role means for course quality
- Course background: establishment story, community note, how long in operation (placeholder until confirmed)
- Contact block:
  - Physical address (placeholder until client provides)
  - Phone: (905) 294-6156 — tap-to-call link
  - Operating hours (placeholder until client provides, marked seasonal)
  - Google Maps embed (deferred until address is confirmed)
- Food & beverage mention: brief note on on-site F&B (Zac Spain) — relevant for golfers planning a full round experience

---

### Privacy Policy — `/privacy-policy`

**Purpose:** Legal compliance for data handling on a site with embedded Google Maps, potential Google Analytics, and email links.

**User need:** Visitors who want to understand how their data is handled (minimal, given no forms on this site).

**Business need:** Legal compliance requirement. Standard for any site with third-party embeds.

**CTA on this page:** None. Footer link back to homepage.

**Required content:**
- Standard privacy policy text covering: site analytics (if implemented), Google Maps embed data handling, email link disclaimer
- Contact email or address for privacy inquiries

---

## 10. User Paths

### Primary Path: Direct Booker — arrives and calls

```
Google Search ("golf Markham" / "public golf near me") → / (Homepage) → sees price preview → calls (905) 294-6156
```
**User type:** Adult recreational golfer, 25–60, Markham/York Region. Has decided they want to play golf soon. Comparing options on price and accessibility.
**Likely entry page:** `/` (homepage via Google organic)
**Key decision pages:** Homepage (establishes legitimacy and rough price) → optional: `/course` (confirms exact pricing)
**Conversion page:** Phone call from header CTA, hero CTA, or pricing section inline CTA

---

### Secondary Path: Price Confirmer — checks pricing before calling

```
Google Search → / (Homepage) → /course → "Book a Tee Time" CTA → phone call
```
**User type:** Same recreational golfer, slightly more deliberate — wants to see the full pricing table before committing to a call.
**Likely entry page:** `/` — then navigates to `/course`
**Key decision pages:** `/course` — full pricing table is the decision surface
**Conversion page:** "Book a Tee Time" CTA on `/course`

---

### Tertiary Path: Lesson Inquirer — parent or beginner

```
Google Search ("golf lessons Markham" / "junior golf camps Markham") → / or /lessons → contact Greg
```
**User type:** Parent of junior, adult beginner, or woman looking for the Ladies Learn to Golf series.
**Likely entry page:** `/lessons` (direct search) or homepage → lessons section link
**Key decision pages:** `/lessons` — program descriptions and pricing are the decision surface
**Conversion page:** "Contact Greg" mailto: link or pro shop phone call

---

### Quaternary Path: Returning visitor — needs address or hours

```
Direct URL / Google Maps → /about → finds address, hours, map
```
**User type:** Someone who has played before and wants to confirm hours or get directions.
**Likely entry page:** `/about` (direct navigation or Google Maps link)
**Key decision pages:** None — operational fact-finding only
**Conversion page:** Tap-to-call from contact block if they want to confirm something by phone

---

### CTA Paths

| Starting page | CTA trigger | Destination | Post-conversion |
|---|---|---|---|
| Any page (sticky header) | "Book a Tee Time" button | tel:(905)294-6156 | Phone call to pro shop |
| Homepage (hero) | "Book a Tee Time" | tel:(905)294-6156 | Phone call |
| Homepage (pricing summary) | "See Full Pricing" | `/course` | Pricing confirmation → call |
| `/course` (after pricing table) | "Book a Tee Time" | tel:(905)294-6156 | Phone call |
| `/lessons` | "Contact Greg" | mailto:greg@salazargolfacademy.com | Email to Greg Salazar |
| `/lessons` | "Call the Pro Shop" | tel:(905)294-6156 | Phone call |
| `/about` | "Book a Tee Time" | tel:(905)294-6156 | Phone call |

---

## 11. Internal Linking Logic

**Structural links (must exist):**

| From page | Link type | To page | Reason |
|---|---|---|---|
| All pages | Sticky header button | tel: / bookingUrl | Booking CTA always accessible |
| Homepage | Pricing summary callout | `/course` | Direct path to full pricing table |
| Homepage | Lessons callout section | `/lessons` | Second audience pathway |
| Homepage | Staff section (Greg name) | `/lessons` | Cross-reference from staff to program |
| `/course` | Inline CTA below pricing | tel: / bookingUrl | Natural conversion moment |
| `/lessons` | "Contact Greg" CTA | mailto:greg@salazargolfacademy.com | Lesson inquiry CTA |
| `/lessons` | "Call the Pro Shop" | tel:(905)294-6156 | Phone fallback CTA |
| `/about` | Staff section (Greg name/link) | `/lessons` | From About → Lessons |
| All pages | Footer | `/about` | Operational info in footer |
| All pages | Footer | `tel:(905)294-6156` | Phone always available |

**Do not link:**
- `/privacy-policy` to anything except footer return link to homepage
- Social media links inside page content — footer only
- Greg's external site or Salazar Golf Academy external URL unless client provides and approves

---

## 12. Local SEO Page Structure

**Decision:** No dedicated local SEO pages. Single-location business in one city does not benefit from city sub-pages at this content depth. Local SEO is handled through:
- LocalBusiness JSON-LD schema in `app/layout.tsx` — name, address, phone, hours, geo coordinates, areaServed (Markham, York Region)
- Homepage headline and copy containing "Markham" and "golf" explicitly
- `/about` page with address and map embed (when address is confirmed)
- Title tags and meta descriptions on each page targeting "golf Markham," "public golf course Markham," "golf lessons Markham," "junior golf camps Markham"

This covers the primary search intent without thin city sub-pages.

---

## 13. URL Structure Summary

| Page | URL | Nav placement |
|---|---|---|
| Homepage | `/` | Main nav (logo link) |
| Course & Green Fees | `/course` | Main nav |
| Lessons & Camps | `/lessons` | Main nav |
| About / Pro Shop | `/about` | Main nav |
| Privacy Policy | `/privacy-policy` | Footer only |

*Phase 2 (not in this build):*

| Page | URL | Nav placement |
|---|---|---|
| Gallery | `/gallery` | Main nav (if added) |
| Online booking redirect | `/book` | Header CTA (only if booking system requires a dedicated page) |

---

## 14. Assumptions Made

> `[ASSUMPTION]` **No `/contact` page needed:** About page performs the combined trust + contact job. Assumed the About page contact block is sufficient given the single-location, phone-primary conversion model. **Impact:** If client wants a separate contact form (e.g., general inquiry form), a `/contact` page would be added in Phase 2.

> `[ASSUMPTION]` **No thank-you page required:** Primary CTA is a phone call; secondary CTA is mailto: link. Neither generates a site-side post-conversion state. **Impact:** If a lesson inquiry form is added later, a thank-you page would be required.

> `[ASSUMPTION]` **Google Maps embed deferred until address is confirmed:** Address is a launch blocker. Maps embed is included in the page spec but cannot be implemented until address is provided. **Impact:** `/about` launches without a map if address is not provided in time; embed added when address is confirmed.

> `[ASSUMPTION]` **Social media handles available:** Footer includes social links with the assumption that the client has at least one active social profile (Instagram or Facebook). **Impact:** If no social profiles exist, the social footer column is removed.

> `[ASSUMPTION]` **No `/book` page in base build:** Booking CTA resolves to tel: link or external bookingUrl via header button. No dedicated booking page architecture is needed. **Impact:** If the selected booking system requires an embed page rather than a redirect, a minimal `/book` page can be added with zero structural impact.

---

## 15. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Physical address | Not provided by client | Client | Before build; blocks schema and `/about` contact block |
| Operating hours | Not collected | Client | Before build; blocks contact block and schema |
| Greg Salazar CTA ownership | Client has not clarified whether lesson inquiries go to Greg directly or through pro shop | Client clarification | Before `/lessons` CTA is finalized |
| Drone photography quality | Photos not yet reviewed | Agency on receipt | Before wireframe/design; informs homepage hero and gallery section decision |
| Social media handles | Not confirmed | Client | Before footer is finalized |
| Logo file | Not yet received | Client | Before design system; header text fallback used until received |

---

## 16. Blockers and Risks

**Blockers:**
- Physical address must be provided before `/about` contact block and LocalBusiness schema can be completed. Build can proceed with placeholders; schema must be correct at launch.
- Logo file must be provided before design system and header design can be finalized.
- Greg Salazar CTA direction must be clarified before the lessons page is built.

**Risks:**
- **Drone photography quality:** If not hero-quality, the entire visual direction requires reassessment. The 5-page site has no fallback trust builder if photography fails.
- **Timeline:** April 24, 2026 deadline with multiple pending client deliverables. Each unresolved item above requires a client response. Building in parallel (pages with placeholders) is the recommended approach.

---

## 17. Handoff to 04-Wireframes

**Sitemap status:** Complete with flags — see Blockers section.

**Instruction for 04-wireframes:**
> The sitemap defines 5 pages: `/` (Homepage), `/course`, `/lessons`, `/about`, `/privacy-policy`. Begin section planning for all four core pages. For each page, the wireframe plan must follow the purpose statements and required content in Section 9. The user journey in Section 10 defines the conversion hierarchy — booking CTA access is the highest priority on every page. Specific constraints: (1) Sticky header with "Book a Tee Time" CTA must be planned as a persistent element, not a section — it appears on every page. (2) Homepage must show a pricing summary section (not full table) with a link to `/course` — do not duplicate the full pricing table on both pages. (3) The `/course` page pricing table must be designed for mobile readability — consider a stacked card layout per tier rather than a wide row-based table. (4) The `/lessons` page must clearly separate the three program types (Private Lessons, Ladies Learn to Golf, Junior Camps) — these are distinct offers for distinct audiences. (5) The `/about` page includes both a staff section and a contact/operations block — wireframe must accommodate both without one burying the other.

**Priority pages for wireframe (do these first):**
1. Homepage (`/`) — highest conversion impact; photography section, trust bar, pricing summary, and two-audience split all require section-level planning
2. Course & Green Fees (`/course`) — pricing table mobile layout is the key wireframe decision
3. Lessons & Camps (`/lessons`) — three-program structure and CTA treatment require planning
4. About / Pro Shop (`/about`) — dual job (trust + operations) requires careful section ordering

---

## 18. Instructions for Later Skills

### 05-Design System
> The site has 4 core pages with a flat navigation structure. All pages share the same sticky header and footer components. No page template differentiation is needed — this is a single-template site with different content. The design system must define: dark green surface variant (hero, trust bar, footer), warm cream/off-white surface variant (body sections), and a near-black surface variant (optional depth sections). Typography must include a serif heading variant (Playfair Display or Cormorant — golf club authority register) and a clean sans-serif body variant (Inter). The header must include both a logo slot and a text fallback treatment — client logo is pending. Pricing table component should be designed once and reused on the Course page; it must be mobile-responsive (stacked on small screens).

### 06-Build Plan (07-Implementation-Plan)
> Page count is 5 (4 core + 1 utility). No dynamic routes — all pages are static. No CMS. No form submission server action required — lesson inquiry CTA is mailto:, tee time CTA is tel: or external URL. The only server-side element is the LocalBusiness JSON-LD schema in `app/layout.tsx`. `siteConfig.bookingUrl` toggle must be implemented: if null, primary CTA renders as `tel:(905)294-6156`; if populated, renders as external link. URL structure is flat — no parent/child routing. Build order: globals.css + design tokens → UI primitives → layout (Header, Footer) → Homepage → Course page → Lessons page → About page → schema + SEO → Privacy Policy.

### 10-Hero Feature Folder
> Hero section lives on the Homepage only. Full-width course photograph background with headline overlay. Dark overlay treatment to ensure text legibility against photography. "Book a Tee Time" CTA in hero — this is the primary above-the-fold conversion point. Season open date (April 24, 2026) visible in hero or immediately below. Must be photogenic on mobile (portrait crop) — image strategy should be discussed with design system stage.

### 14-Services Feature Folder (if applicable)
> Course and lessons are not traditional "services" pages with slug-based routing. They are flat top-level pages (`/course`, `/lessons`). No dynamic routing or service template is needed. Both pages are unique in content and structure.
