# 02 — Planning PRD
## Markham Green Golf Club

**Project:** Markham Green Golf Club
**Build type:** Redesign of existing site (markhamgreen.com)
**Date:** April 20, 2026
**Stage:** 02-planning — output complete
**Discovery brief status:** Acceptable with flags — eight unresolved data items (address, hours, rating/review count, years in operation, course specs, logo, booking URL, Greg Salazar arrangement). All are operational facts, not design decisions. Build proceeds with placeholders; items must be filled before launch.

---

## 1. Project Overview

Markham Green Golf Club is a public 9-hole golf course in Markham, Ontario managed by PGA of Canada Professional Scott Haynes, with an on-site instruction program run by Greg Salazar (Salazar Golf Academy). The primary offer is affordable green fees ($44–$48) and structured golf lessons/junior camps. The site is a full redesign of markhamgreen.com — the existing site fails to drive any bookings or inquiries due to no conversion path, an outdated design, and missing critical information. The single most important thing the site must accomplish is generating tee time booking calls to the pro shop at (905) 294-6156.

---

## 2. Planning Summary

This is a focused four-page site whose only job is to convert recreational golfers into tee time bookings and lesson inquiries before the April 24, 2026 season opens. The strategic direction is "refined but welcoming" — dark green palette and quality typography to establish credibility, warm photography and direct copy to prevent the exclusivity signals that alienate the target audience of casual Markham-area golfers. The primary trust strategy relies on PGA credentials (Scott Haynes), the Salazar Golf Academy program, Google reviews once confirmed, and community-feel copy rather than prestige signals. The build is intentionally restrained: four pages, no CMS, no online booking yet (designed to accommodate a future one-line config swap), no gallery page in Phase 1. The main constraint is timeline — the site must be live before April 24, 2026, with several operational data items (address, hours, course specs) still pending from the client.

---

## 3. Critique of Discovery Brief

**Overall brief quality:** Acceptable

**Weaknesses identified:**

> **Category:** Trust
> **Problem:** Google review count and exact rating not confirmed — marked as TBC.
> **Planning impact:** Trust bar copy cannot be finalized. If review count is low (under 20), the "4+ stars on Google" message may weaken rather than strengthen trust.
> **Resolution:** Trust bar uses placeholder text; social proof weight shifts to PGA credentials and staff authority until client confirms. If review count is under 20, trust bar copy shifts to staff credentials only — no star count displayed.

> **Category:** Offer
> **Problem:** Course specs (par, total yards, hole-by-hole layout) not collected. Physical address not found on current site.
> **Planning impact:** Course page cannot be fully written. Local SEO schema (LocalBusiness JSON-LD) will be incomplete — missing address means no Google Maps trust signal and degraded local ranking.
> **Resolution:** Course page copy placeholder used; address placeholder in schema. Both flagged as launch blockers — client must provide before the site goes live. No workaround exists for address in schema.

> **Category:** Features
> **Problem:** Greg Salazar's booking relationship is unresolved — it is unclear whether lesson inquiries should go directly to Greg's email (greg@salazargolfacademy.com) or through the Markham Green pro shop.
> **Planning impact:** Lessons page CTA direction is ambiguous. If Greg is a semi-independent operator, the pro shop may not want to field lesson inquiries.
> **Resolution:** Lessons page CTA defaults to Greg's email with a secondary "Call the Pro Shop" link. Flagged for client clarification before build — this is the only decision that affects page architecture.

> **Category:** Constraints
> **Problem:** Online booking system not yet chosen — no vendor named.
> **Planning impact:** Primary CTA must be designed to work as a phone link now and swap cleanly to a booking URL when the system launches.
> **Resolution:** `siteConfig.bookingUrl` toggle pattern (as per discovery brief). Primary CTA uses `tel:` link until booking system is activated. This is a one-line config change — no rebuild required.

> **Category:** Visual
> **Problem:** No logo file confirmed. Brand colors not yet defined — direction only.
> **Planning impact:** Header and favicon require logo. Without confirmed brand colors, design system stage works from constraints only (dark green, near-black, warm cream, gold accent).
> **Resolution:** Design system stage will establish color tokens from direction. Header uses text fallback until logo is confirmed. Logo file is a launch dependency.

---

## 4. Send-Back to 01-Discovery

*Not required — brief is acceptable with flags. Planning proceeds with assumptions documented in Section 18.*

---

## 5. Business Goals

- Drive green fee revenue before and throughout the 2026 season (opens April 24)
- Build lesson and junior camp enrollment for the Salazar Golf Academy program
- Establish Markham Green's online presence as the go-to community golf option in Markham and York Region — particularly for casual golfers who currently don't know it exists
- Replace the existing site, which actively undersells the course and creates zero conversion opportunity

---

## 6. Website Goals

- Generate 15+ tee time booking calls per week to (905) 294-6156 from Markham-area golfers searching for affordable local golf
- Generate 5+ lesson/camp inquiry contacts per month via the lessons page (Greg Salazar program)
- Rank on page 1 of Google for "golf Markham," "public golf course Markham," and "golf lessons Markham" within 90 days of launch
- Present pricing and course information clearly enough that visitors can self-qualify without needing to call for basic facts
- Be live and fully functional before April 24, 2026 season open

**Primary website goal:** Generate tee time booking calls — phone calls to (905) 294-6156 from people ready to play. This is the metric that defines success in the first 60 days.

---

## 7. Core Audience

**Primary audience:** Adult recreational golfers aged 25–60 who live in Markham or the broader York Region. They play a few times a year, not weekly. They are not competitive — they want an easy, affordable round near home without advance booking drama or social pressure. They comparison-shop on price and accessibility (not prestige), and their main worry is whether it'll be worth the hassle. They are not looking for a challenging course — they want a low-pressure, good-value afternoon.

**Why this audience:** This is the audience that maps directly to the primary CTA (call and book a tee time) and to the business model (public green fees, accessible pricing, no membership required). They are also the audience most underserved by the current site — which provides no pricing, no hours, and no clear booking path.

**What this audience needs from the site to convert:**
1. Confirmation that it's a real, maintained course — not a neglected municipal track. Quality photography does this immediately.
2. Visible green fee pricing without having to dig — they are price-comparing and will bounce if pricing is buried.
3. A phone number that is impossible to miss — this audience calls first, books second.

**Who this site is NOT for:** Serious competitive golfers who prioritize course difficulty, ratings, and prestige. Private club members who judge courses by their amenities tier. Golfers outside York Region. Beginners looking for a pure driving range experience.

---

## 8. Core CTA

**Primary CTA:** "Book a Tee Time" — directs to pro shop phone number (905) 294-6156 now; swaps to online booking URL when system activates.

**CTA mechanism:** `tel:(905)294-6156` link. When booking system goes live, swaps to `siteConfig.bookingUrl` (external booking widget or URL). The swap is a single config change — no layout rebuild.

**CTA placement strategy:**
- Sticky header — always visible on every page and scroll position
- Hero section — dominant, above the fold, paired with season open date
- Green fees pricing table — inline, immediately after pricing is seen
- Footer — always available as fallback

**CTA tone:** Direct and welcoming. Not urgent or pressured. "Book your round" — not "Reserve before it fills up." Rationale: the audience is slightly hesitant about commitment; urgency framing would push them away. Confidence and ease of access converts this group.

**Secondary CTA:** "Call the Pro Shop" — (905) 294-6156 — used as the inquiry CTA on the lessons page, about page, and footer for visitors not ready to book.
**Secondary CTA placement:** Lessons page (primary CTA for lesson inquiries), About page, footer.

---

## 9. Strategic Website Direction

The site's job is to remove the two friction points that currently stop conversions: visitors can't find the price, and they can't see how to book. Every page must make those two things accessible within 5 seconds. The site is not a brand awareness campaign — it is a conversion surface for people who are already interested in playing golf and need to decide whether Markham Green is worth calling. After 10 seconds on the site, the visitor should believe: "This is a real course, the price is fair, and it's easy to book."

The site operates as a direct lead generation tool — the primary call-to-action (phone booking) must be reachable from every page in a single click. The Salazar Golf Academy is a secondary conversion path: the site introduces the program and routes inquiries to Greg directly, but the lessons page does not compete with the tee time booking path for visual attention.

**Positioning translated into site behavior:**
- "Community feel, not a corporate operation" → Photography and copy lead with naturalness (real golfers, real course light) rather than hero shots of pristine fairways. Staff names and faces appear early.
- "Most accessible golf experience in Markham" → Pricing is visible on the homepage (not buried). No request-a-quote barrier — the price is shown, the phone number is in the header.
- "Affordable compared to Angus Glen" → Pricing section frames the value directly. $44 weekday green fee should appear beside what it includes — 9 holes, cart option, no membership required.
- PGA credentials (Scott Haynes) and Salazar Academy → These are the credibility anchors that separate Markham Green from a municipal track. They appear in the trust bar and staff section, not hidden on an About page.

---

## 10. User Journey

**1. Arrival:** Primarily Google Search — "golf Markham," "public golf near me," "cheap golf Markham," "golf lessons Markham." Visitor is in comparison mode: they've already decided they want to play golf this week, and they're deciding where. Some arrive from Google Maps after seeing the listing. Some are returning — they've played before and want the phone number.

**2. Orientation:** First 5 seconds on the homepage. The visitor needs to confirm: (a) this is a real course, not a driving range, (b) it's in Markham, (c) there's a way to book. The hero must show a course photograph, the word "golf" and "Markham" prominently, and a visible phone number or "Book a Tee Time" CTA. Season open date (April 24) is relevant for early-season visitors.

**3. Trust building:** Trust bar appears immediately below the hero — Google rating (when confirmed), PGA credentials (Scott Haynes), course established. These two elements (social proof + credentials) establish that it's a legitimate course, not a neglected public track. Photography carries the remaining trust weight — drone shots of the course doing visual work that copy cannot.

**4. Evaluation:** Visitor navigates to Course/Green Fees to see the full pricing table. Or scrolls the homepage to see the lesson overview. At this point they're evaluating: Is the price right? Do they offer what I need? Is there instruction for my kid? This is where full pricing transparency, course specs (when available), and the Salazar program overview are visible. FAQ is not needed — the information is simple and direct.

**5. Conversion:** The phone number is the conversion moment. The visitor is ready to call. Every page has a sticky header with the "Book a Tee Time" button. The friction elimination is: they should never have to hunt for the phone number. On mobile, the phone number should be tap-to-call from the header — the single most important mobile conversion path.

**6. Post-conversion:** When the online booking system launches, post-booking confirmation comes from that system. For phone calls (current state), no post-conversion page exists on the site. The thank-you experience is Scott answering the phone.

---

## 11. Page-Type Responsibilities

**Homepage:**
Convert first-time visitors who arrive from Google Search into tee time booking calls. The homepage must answer "where is this, what does it cost, and how do I book?" within two scrolls. It must also introduce the Salazar lesson program for parents and beginners who are on a different conversion path. Primary CTA reachable in under 1 click from anywhere on the page.

**Course / Green Fees page:**
Remove price uncertainty. Visitors arrive here to see the full pricing table and decide if the course is worth calling. The page must display every green fee tier clearly (weekday/weekend/senior/junior/twilight/cart), basic course facts (9 holes, par, yards when confirmed), and a "Book a Tee Time" CTA directly below the pricing section. This page is the workhorse for cost-comparison searches ("how much does golf cost at Markham Green").

**Lessons & Camps page:**
Convert parents of juniors and beginner adult golfers into lesson inquiries. This page covers the full Salazar Golf Academy program — private lessons, Ladies Learn to Golf, and junior camps — with all pricing displayed. CTA is an email to Greg Salazar (greg@salazargolfacademy.com) with a secondary "Call the Pro Shop" fallback. The page does not compete with the tee time booking path.

**About / Pro Shop page:**
Establish credibility and provide operational facts. This page does two jobs: (a) trust anchor — staff profiles for Scott Haynes, Greg Salazar, Zac Spain, Dennis Gilchrist with credentials and brief bios; (b) contact/operations block — physical address, phone, hours, and embedded Google Map. This is where people go to confirm the course is legitimate and to get directions.

**Gallery:** Deferred to Phase 2. Drone photography may be featured as a section on the homepage in Phase 1 rather than a standalone page. Decision deferred to wireframe stage based on asset quality and count.

---

## 12. Content Requirements

**Available:**
- Green fees pricing (all tiers) — complete, confirmed
- Lesson pricing (Salazar Golf Academy, all packages) — complete, confirmed
- Staff names and titles — Scott Haynes, Greg Salazar, Zac Spain, Dennis Gilchrist
- Scott Haynes credential — PGA of Canada Professional
- Greg Salazar credential — Salazar Golf Academy
- Course photography (drone shots) — confirmed available
- Phone number — (905) 294-6156
- Greg Salazar contact email — greg@salazargolfacademy.com

**Must be produced or sourced:**
- Physical address — must be provided by client before build; blocks Local SEO schema and About page contact block. Launch blocker.
- Operating hours (seasonal, day-by-day) — must be provided by client; blocks contact block and LocalBusiness schema. Launch blocker.
- Course specs (par, total yards, layout description) — client must provide; blocks course page copy. Build blocker for course page.
- Google review count and exact rating — client must confirm; trust bar copy cannot be finalized. Pre-launch item.
- Years in operation / year established — client must confirm; affects trust bar and About page copy.
- Logo file (vector or high-res PNG) — client must provide; header uses text fallback until received.
- Full staff bios — partial (names and titles only); short bios (2–3 sentences) should be drafted or gathered from client.
- 2–3 testimonials or customer quotes — assumed gatherable from Google reviews or direct request; nice-to-have before launch.

**Content quality notes:**
Drone photography is available but not yet reviewed. Photography quality is load-bearing for this design — the visual direction requires strong, real course images. If drone shots are landscape-format and well-lit, they carry the hero and gallery section. If they are low-quality or poor composition, photography brief for a reshoot before launch is a serious consideration.

---

## 13. Missing Content and Assets

| Missing item | Impact | Who resolves it | Timeline dependency |
|---|---|---|---|
| Physical address | Blocks LocalBusiness JSON-LD schema, About page contact block, Google Maps embed | Client | Before build starts (schema must be complete at launch) |
| Operating hours | Blocks contact block on About page, LocalBusiness schema | Client | Before build starts |
| Course specs (par, yards, layout) | Blocks course page body copy — page shell can be built, copy is placeholder | Client | Before course page copy is written |
| Google review count + exact rating | Trust bar copy cannot be finalized; risk of displaying inaccurate rating | Client | Before launch |
| Year established | Trust bar and About page copy placeholder | Client | Before launch |
| Logo file | Header uses text fallback; brand identity incomplete | Client | Before design system stage |
| Staff bios (full, 2–3 sentences each) | About / staff section has names only | Client or agency | Before build |
| Drone photography review | Cannot confirm if photos are hero-quality without seeing them | Agency (review on receipt) | Before wireframe/design |

---

## 14. Functional Requirements

**Required:**
- [ ] Sticky header with "Book a Tee Time" CTA (tel: link now, bookingUrl when activated)
- [ ] Mobile tap-to-call on all phone number instances
- [ ] Green fees pricing table — all tiers, responsive on mobile
- [ ] Lesson pricing display — all packages, readable on mobile
- [ ] Lesson inquiry contact mechanism — email link to greg@salazargolfacademy.com
- [ ] Staff section — names, credentials, brief bios
- [ ] Contact block — phone, address, hours (placeholders until client provides)
- [ ] Google Maps embed on About page (deferred until address confirmed)
- [ ] LocalBusiness JSON-LD schema — name, phone, address, hours, areaServed (partial at build, complete at launch)
- [ ] Open Graph metadata on all pages
- [ ] robots.txt + sitemap.xml
- [ ] `siteConfig.bookingUrl` toggle — primary CTA swap from tel: to booking URL with zero layout rebuild

**Conditional (if feature is activated):**
- [ ] Online booking widget embed — depends on booking system being selected and URL provided
- [ ] Gallery page — depends on drone photography quality and count (if fewer than 8 strong images, integrate as homepage section instead)

---

## 15. Feature Decisions

**Required Now:**

| Feature | Reason |
|---|---|
| Hero section | Primary trust/conversion surface; course photography does immediate credibility work |
| Sticky navigation with primary CTA | Phone number must be accessible at every scroll position — this is the conversion mechanism |
| Green fees pricing table | Price transparency is the #1 friction to booking for this audience; removing it prevents conversion |
| Lessons overview + pricing | Secondary conversion path; Salazar Academy is a distinct revenue stream with its own audience |
| Staff section (Scott + Greg + team) | PGA credentials are the key differentiator from a municipal course — must be visible |
| Trust bar (Google rating, PGA credentials) | Establishes legitimacy immediately below the hero for first-time visitors |
| Contact block (address, phone, hours, map) | Operational facts required for local search and for visitors who want to verify the course exists |
| Local SEO (JSON-LD schema, sitemap, OG meta) | Site must rank for "golf Markham" and similar terms — this is critical for traffic |
| Mobile-first layout with tap-to-call | Majority of searches for local recreation are mobile; phone call is the conversion action |

**Useful Optional:**

| Feature | Reason | Include? |
|---|---|---|
| Lesson inquiry form | Alternative to email link; captures inquiries even if Greg doesn't check email immediately | No — email link + phone is sufficient; form adds complexity without clear lift for this volume |
| FAQ section | Price and booking questions are already answered by the pricing table and CTA | No — content is simple enough that FAQ would be redundant; adds page weight without conversion value |
| Social media links | Instagram/Facebook may exist; community-oriented audience does follow local businesses | Yes (footer only) — if client provides social handles; low effort, minor trust signal for community-feel positioning |
| Gallery section on homepage | Drone shots do emotional trust work that copy cannot | Yes — as a section on homepage, not a standalone page; see Deferred for standalone gallery page |

**Deferred:**

| Feature | Reason deferred | Trigger to activate |
|---|---|---|
| Online booking widget | Booking system not yet chosen; no vendor or URL available | Client selects system and provides URL/embed code |
| Gallery page (standalone) | Insufficient information on asset count and quality; integrate as section on homepage in Phase 1 | Client provides 8+ high-quality drone/course images; Phase 2 if traffic data suggests gallery page would rank |
| Blog / content section | No editorial strategy; client has no plan to maintain it; adds complexity without conversion benefit | Never, unless SEO content strategy is explicitly scoped in a future engagement |
| CMS | No content update needs identified beyond pricing changes; static build is appropriate | Client explicitly requests ability to self-edit content |
| Newsletter signup | No email marketing program exists or planned | Client initiates email marketing program |
| Tournament management | Explicitly out of scope; different audience entirely | Separate scope engagement if client introduces competitive events |
| Membership portal | No membership model — public course only | Not applicable to this business model |
| Live scoring | Out of scope; requires ongoing system and data feed | Not applicable at this tier |

---

## 16. Macro UX Principles

**Conversion hierarchy:**
Phone number and "Book a Tee Time" CTA must be the most accessible interactive element on every page. On desktop, sticky header makes this constant. On mobile, the phone number must be visible in the header without scrolling, and tap-to-call must require zero friction. Pricing must be reachable from the homepage without page navigation — either as a section or a clear link to the Course page.

**Trust-building sequence:**
The visitor arrives skeptical ("is this a real course?") before they are considering pricing. The trust sequence is: (1) quality photography in the hero confirms it's a maintained, real course; (2) trust bar immediately below establishes PGA credentials and Google rating; (3) staff section on the homepage or About page provides named, credentialed humans. Trust is established before the visitor reaches the pricing table — so when they see $44, the price lands as good value rather than a warning sign.

**Navigation logic:**
Four pages only. Navigation labels must be clear and descriptive: Home, Course & Green Fees, Lessons & Camps, About / Pro Shop. No ambiguity about where pricing lives (Course & Green Fees) or where to find the instruction program (Lessons & Camps). The About page doubles as the contact page — no separate /contact needed.

**Mobile priority:**
The most important mobile conversion path is: (1) Hero loads, visitor sees course photo and phone number; (2) one tap calls (905) 294-6156. Everything else is secondary. The sticky header must include a tap-to-call button on mobile. Green fees must display cleanly as a stacked table on small screens. Lesson pricing must be scannable on mobile without horizontal scroll.

**Friction reduction goals:**
The biggest friction point this site must eliminate is price uncertainty — visitors should never have to call just to find out what a round costs. The second friction point is access difficulty — the phone number must be present and tappable without any search. No forms required for tee time inquiry — just a phone number. Lesson inquiries use email link (low-friction) with phone as fallback.

---

## 17. Success Criteria

**At launch:**
- [ ] All four pages load in under 3 seconds on mobile (no CLS, no large unoptimized images)
- [ ] "Book a Tee Time" CTA visible without scrolling on every page on both desktop and mobile
- [ ] Phone number is tap-to-call on all mobile screens
- [ ] Full green fees pricing table displays correctly on a 375px screen
- [ ] LocalBusiness JSON-LD schema is valid and complete (requires address + hours from client)
- [ ] Site passes Lighthouse accessibility ≥ 90, SEO ≥ 95
- [ ] Season open date (April 24, 2026) is visible on homepage
- [ ] Live before April 24, 2026

**At 90 days:**
- [ ] Ranking in top 3 for "golf Markham" and "public golf course Markham" on Google
- [ ] At least 10 tee time booking calls attributable to website per week (tracked via call analytics or UTM on phone CTA)
- [ ] Lesson inquiry contacts increased from zero (current site generates none)

**Design quality bar:**
- [ ] Site does not look AI-generated or template-produced
- [ ] Feels like a proper golf club site — quality typography, dark green palette, real photography — not a generic local business template
- [ ] Does not trigger "exclusive" or "intimidating" read — accessible, welcoming, unpretentious
- [ ] Primary CTA is visually dominant on every page
- [ ] Visual design is consistent across all four pages

---

## 18. Assumptions Made

> `[ASSUMPTION]` **Physical address:** Assumed to be in Markham, ON. Client has not provided exact address. **Why:** Not found on current site; not collected during discovery. **Impact:** LocalBusiness schema is incomplete until address is confirmed. About page contact block uses placeholder. Launch blocker.

> `[ASSUMPTION]` **Operating hours:** Assumed seasonal (April–November, approximately 7am–dusk based on typical public golf course operations). Day-by-day hours not confirmed. **Why:** Not collected during discovery. **Impact:** Contact block and schema hours are placeholder. Launch blocker.

> `[ASSUMPTION]` **Google review count:** Assumed 4+ stars with meaningful volume (50+ reviews) based on site context. Exact count and rating not verified. **Why:** Not confirmed by client. **Impact:** Trust bar copy uses placeholder. If rating or count is lower than assumed, trust bar copy strategy changes.

> `[ASSUMPTION]` **Years in operation:** Assumed established course (10+ years) based on site context and the professional management structure (PGA Pro on staff). **Why:** Year founded not collected. **Impact:** "Established since [year]" trust signal in trust bar is placeholder. If course is under 5 years old, copy angle shifts to freshness/improvement rather than longevity.

> `[ASSUMPTION]` **Greg Salazar's CTA path:** Assumed lesson inquiries route to greg@salazargolfacademy.com. This is Greg's confirmed contact. **Why:** Arrangement between Greg and the pro shop not clarified. **Impact:** Lessons page CTA uses Greg's email with a "Call the Pro Shop" secondary. If the pro shop wants to handle all inquiries, CTA must change to phone-first.

> `[ASSUMPTION]` **Course specs:** Par, total yards, and layout description not collected. **Why:** Not gathered during discovery. **Impact:** Course page body copy is placeholder. Informational SEO value for this page is reduced until specs are added.

> `[ASSUMPTION]` **Logo availability:** Client assumed to have a logo file. **Why:** Existing site has branding; logo likely exists in some form. **Impact:** Header uses text fallback until logo file is received. If no logo file exists, a logotype treatment is needed from design system stage.

> `[ASSUMPTION]` **Drone photography quality:** Drone shots described as "available" and "confirmed." **Why:** Assets not yet reviewed. **Impact:** If images are not hero-quality (poor light, wrong composition, low resolution), the visual direction — which relies heavily on photography for trust — requires a reshoot before design can proceed.

---

## 19. Unresolved Issues

| Issue | Why unresolved | Who resolves it | When |
|---|---|---|---|
| Physical address | Not found on current site; not provided by client | Client | Before build (schema dependency) |
| Operating hours | Not collected | Client | Before build |
| Google review count + rating | Not confirmed | Client | Before launch |
| Year established | Not collected | Client | Before launch |
| Course specs (par, yards, layout) | Not collected | Client | Before course page is written |
| Logo file | Not yet received | Client | Before design system stage |
| Greg Salazar booking arrangement | Client has not clarified ownership of lesson inquiry path | Client clarification + planning decision | Before lessons page is built |
| Drone photography quality | Assets not reviewed | Agency — on receipt of photos | Before wireframe/design |
| Online booking system | System not yet selected | Client selects vendor | Before launch (CTA swap only — not a build blocker) |

---

## 20. Blockers and Risks

**Blockers:**
- Physical address and operating hours must be provided by client before the build is complete. LocalBusiness JSON-LD schema is invalid without them. The About page contact block cannot be finalized.
- Logo file must be provided before design system stage can be completed (header treatment and brand identity depend on it).
- Greg Salazar arrangement must be clarified before the lessons page CTA is built.

**Risks:**
- **Drone photography quality:** If photos are low-quality, the entire visual direction (dark green, photography-led) collapses. The design relies on real course imagery. Reshoot risk is moderate — flag immediately on receipt.
- **Timeline:** Season opens April 24, 2026. If multiple blockers are unresolved (address, hours, logo) and require back-and-forth with the client, the timeline is at risk. Client must be briefed on these dependencies immediately.
- **Online booking system:** If the client selects a booking system with a poor embed experience or complex integration requirements, the "one-line swap" assumption may not hold. Confirmed booking system vendors (Lightspeed Golf, Club Prophet) are typically URL-redirect compatible.
- **Greg Salazar arrangement:** If Greg operates across multiple venues and does not want Markham Green to be his primary contact point, the lessons page CTA architecture may need to change significantly.

---

## 21. Handoff to 03-Sitemap

**Brief status:** Complete with flags — see Blockers section for items that must be resolved before specific pages can be finalized.

**Instruction for 03-sitemap:**
> Based on this planning PRD, produce the full site structure for Markham Green Golf Club. The sitemap must serve the four core pages defined in the discovery brief: Home, Course & Green Fees, Lessons & Camps, About / Pro Shop. The About page doubles as the contact page — no separate /contact is needed. A gallery page is deferred; if drone photography warrants it, plan a `/gallery` as an optional Phase 2 addition only. Do not add a blog, tournament page, or any deferred feature. Service area pages are not required — Markham / York Region is covered in the About page and Local SEO schema. Each page entry must include its primary job, primary CTA, and key sections.

**Features to activate in sitemap planning:**
- Required: Hero, Sticky Navigation with CTA, Green Fees Pricing Table, Lessons/Camps Overview + Pricing, Staff Section, Trust Bar, Contact Block, Local SEO (schema, sitemap, OG)
- Optional (include if scope allows): Social media links (footer), Gallery section on homepage (not standalone page), Tap-to-call on all mobile CTA instances
- Deferred: Gallery page (standalone), Online booking widget, Blog, CMS, Newsletter, Tournament management

---

## 22. Instructions for Later Skills

### 04-Wireframes
> The wireframe plan must reflect the user journey sequence: Photography/credibility first → pricing second → booking CTA always accessible. Conversion hierarchy: phone number and "Book a Tee Time" must be in the sticky header and never more than one scroll from any page position. The hero section leads with a full-width course photograph, not a text block — copy overlays the photo, it does not replace it. The trust bar appears immediately below the hero on every page or just on the homepage (03-sitemap will define this). Pricing table on Course page must be scannable on mobile — consider a stacked layout rather than a wide table with horizontal scroll. Lessons page should clearly separate the three program types (Private Lessons, Ladies Learn to Golf, Junior Camps) with pricing under each.

### 05-Design System
> Visual direction: dark hunter green (#1a3a2a range) as primary background/section color, near-black (#0f1f17) for depth, warm off-white/cream for body surfaces, single gold/amber accent for CTAs and hover states only. Serif for headings (Playfair Display or Cormorant — classic golf club authority), clean geometric sans-serif for body and UI (Inter). Animation: subtle fade-in on scroll only — no parallax, no looping elements. Quality register: 7–8 out of 10 toward premium. Banned styles: white-glove exclusivity signals, neon/gradient overuse, generic golf clip art, cartoon golf ball graphics, cluttered multi-CTA layouts. No confirmed visual references — design system stage establishes direction from constraints and vibe description only. Logo file is pending — design system must include a text fallback treatment that integrates cleanly into the header.

### Build and Code Skills (general constraints)
> Backend complexity: Minimal — no CMS, no database, no authentication. Contact form is not required (no inquiry form; lesson CTA is email link + phone). The only server-side concern is the LocalBusiness JSON-LD schema in layout.tsx. Stack: Next.js 15 App Router, TypeScript, Tailwind CSS 3.4, matching existing project standards. CMS: Not required. Post-launch updates (pricing changes, hours) are expected to go through a dev request or direct code edit. Booking CTA: implement as a `siteConfig.bookingUrl` string — if null/empty, CTA renders as `tel:(905)294-6156`; if populated, renders as external link to booking system. Performance: all pages must load under 3 seconds on mobile — optimize drone photography aggressively (WebP, Next.js Image, explicit dimensions). No Resend/form integration required for this build (lesson CTA is mailto: link).
