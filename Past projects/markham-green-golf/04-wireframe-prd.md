# 04 — Wireframe PRD
## Markham Green Golf Club

**Project:** Markham Green Golf Club
**Date:** April 20, 2026
**Stage:** 04-wireframe — output complete
**Sitemap PRD status:** Acceptable with flags — operational data items (address, hours, course specs, Google rating) are placeholders; do not block wireframe decisions.
**Pages covered:** 5 (Homepage, Course & Green Fees, Lessons & Camps, About / Pro Shop, Privacy Policy)

---

## 1. Project Overview

Markham Green Golf Club is a public 9-hole golf course in Markham, Ontario. The site is a 5-page redesign of markhamgreen.com built entirely around one primary conversion: getting recreational golfers to call (905) 294-6156 and book a tee time. The most important structural fact about this wireframe: the phone number and "Book a Tee Time" CTA must be accessible from every page without scrolling — sticky header on desktop, always-visible tap-to-call on mobile.

---

## 2. Wireframe Summary

**Total pages wireframed:** 5
**Primary CTA mechanism:** Click-to-call phone link (tel:(905)294-6156); designed to swap to booking URL via `siteConfig.bookingUrl` with no layout change
**Conversion page:** `/` (entry and initial conversion) + `/course` (pricing confirmation and secondary conversion)
**Reusable templates identified:**
- Sticky Header (all pages)
- Trust Bar (homepage only — but defined once)
- Section CTA Band (homepage, course, lessons, about)
- Staff Card Pattern (homepage staff section, about page staff section — same component, different context)
- Footer (all pages)

**Key structural decisions:**
- Hero leads with photography overlay, not copy-first — the course photo establishes credibility before the headline; copy overlays the image rather than displacing it.
- Pricing summary on the homepage is a compact preview (3 tiers only), not the full table — the full table lives on `/course`. This creates a natural second-touch path for price-confirming visitors.
- Trust bar appears immediately below the hero — the primary audience's first skepticism is "is this a real, maintained course?" The trust bar with PGA credentials and Google rating answers this before the visitor decides to scroll.
- `/about` page handles both trust (staff, credentials) and operations (address, hours, map) without a separate `/contact` page — justified by the simple contact model (no form, just phone and email links).
- Pricing table on `/course` is designed as stacked tier cards on mobile, not a wide horizontal table — critical for the mobile-first booking path.

---

## 3. Critique of Sitemap PRD

**Overall sitemap PRD quality:** Acceptable

**Issues identified:**

> **[Content Placeholder]** Problem: Physical address, operating hours, course specs, and Google rating are all placeholders in the sitemap. Impact on wireframing: Does not affect section structure — placeholder data uses the same layout as real data. Resolution: Wireframe plans for all of these as populated sections; placeholder copy is used until client provides data.

> **[Lessons CTA ownership]** Problem: Greg Salazar CTA path not resolved — mailto: vs. phone-first. Impact on wireframing: The CTA placement and button labeling on `/lessons` is ambiguous. Resolution: Wireframe plans for the default (Greg email primary, pro shop phone secondary). If client redirects to phone-only, the CTA section is modified in code only — section structure remains identical.

> **[Staff section placement]** Problem: Sitemap shows staff section on both homepage and `/about`. Impact on wireframing: These must be differentiated — homepage staff section is a brief trust anchor (two people, credentials only), About page staff section is the full treatment (all four staff members, full bios). Resolution: Two distinct section variants defined in the pattern catalog.

---

## 5. Overall Wireframe Logic

The site's conversion logic is linear and simple: arrive → see real course + PGA credentials → see pricing → call. Every page is structured to shorten that path. The homepage delivers a compressed version of the full journey in a single scroll — photography (real course), trust bar (credentials + rating), course/pricing teaser, lessons callout, staff anchor, photography gallery section, final CTA. The Course page is purely an evaluation page — get to the pricing table fast and put the booking CTA directly after it. The Lessons page mirrors the Course page structure but for a different audience and offer. The About page builds trust first (staff) then provides operational facts (contact block), ending with a booking CTA for staff-convinced visitors. The sticky header is the site's insurance policy: no matter how deep a visitor scrolls or which page they're on, the booking CTA is one tap away.

---

## 6. Reusable Section/Component Patterns

---

### PATTERN: Sticky Header

**Used on:** All pages (persistent)
**Job:** Provide always-accessible primary CTA and brand identity regardless of scroll position
**Contains:**
- Logo (left) — text fallback until logo file received
- Navigation links: Course & Green Fees / Lessons & Camps / About / Pro Shop
- "Book a Tee Time" CTA button (rightmost) — tel: link or bookingUrl
- Mobile: hamburger icon collapses navigation links; CTA button remains visible at all times

**Desktop:** Horizontal bar, logo left, nav links center, CTA button right. Sticky — fixed to top of viewport on scroll.
**Mobile:** Logo left, CTA button (compact) right, hamburger icon right of CTA. Navigation drawer opens below the header. CTA button never collapses into the drawer.
**Variations:** None — identical across all pages.

---

### PATTERN: Trust Bar

**Used on:** Homepage (immediately below hero)
**Job:** Immediately answer "is this a legitimate, established course?" for first-touch visitors before they decide whether to scroll
**Contains:**
- Google rating — "[X.X] stars on Google" with star icons (placeholder until confirmed)
- PGA credential: "Managed by Scott Haynes — PGA of Canada Professional"
- Community signal: "Markham's neighbourhood course since [year]" (placeholder until confirmed)
- Optional fourth item: "Season opens April 24, 2026" if in season-preview context

**Desktop:** Single horizontal bar, 3–4 items evenly distributed, dark surface (near-black or dark green)
**Mobile:** 2-column grid (2 items per row) or horizontal scrollable single row
**Variations:** None — used only on homepage.

---

### PATTERN: Pricing Tier Table

**Used on:** `/course` (full version), `/` Homepage (condensed version — 3 tiers only)
**Job:** Present green fee tiers clearly so visitors can confirm affordability and proceed to booking
**Contains (full version):**
- Weekday, Weekend, Senior, Junior (weekday/weekend), Twilight, Replay rates, Power cart rate
- Each tier: label, price, brief note (e.g., "Mon–Fri, excl. holidays")

**Desktop (full):** Clean table layout — label column, price column, notes column. Dark header row, alternating light/white rows.
**Mobile (full):** Stacked tier cards — each tier as its own card block (label + price prominent, notes below). Eliminates horizontal scroll.
**Desktop (condensed, homepage):** 3 cards side-by-side — Weekday, Weekend, Twilight — with "See Full Pricing" link
**Mobile (condensed):** Stacked 3 cards with link to `/course`
**Variations:** Full version on `/course`; condensed 3-up preview on homepage.

---

### PATTERN: Staff Card

**Used on:** Homepage (brief variant — 2 people), `/about` (full variant — 4 people)
**Job:** Establish named, credentialed humans behind the course — differentiation from anonymous municipal courses
**Contains (brief variant):**
- Photo (if available) or initials placeholder
- Name + title + 1-line credential

**Contains (full variant):**
- Photo (if available) or initials placeholder
- Name + title + credential
- 2–3 sentence bio

**Desktop:** Card grid — 2-column on homepage (Scott + Greg), 4-column or 2×2 grid on About
**Mobile:** Stacked single column on both pages
**Variations:** Brief (homepage) vs. full (About).

---

### PATTERN: CTA Band

**Used on:** Homepage (bottom), `/course` (after pricing table), `/lessons` (after program sections), `/about` (after contact block)
**Job:** Re-trigger the primary booking action after trust and evaluation content has been delivered
**Contains:**
- Short direct headline — e.g., "Ready to play?" or "Book your round"
- Primary CTA button: "Book a Tee Time" → tel: or bookingUrl
- Secondary line (optional): "Or call us directly at (905) 294-6156" as a visible phone number in the band

**Desktop:** Full-width band, dark background (green or near-black), centered content
**Mobile:** Same structure, stacked. CTA button full-width tap target.
**Variations:** None — same structure every time.

---

### PATTERN: Footer

**Used on:** All pages
**Job:** Provide navigational fallback, operational information, and legal links
**Contains:**
- Column 1: Business name + brief tagline + social links (if provided)
- Column 2: Navigation — Course & Green Fees, Lessons & Camps, About / Pro Shop
- Column 3: Contact — Phone (tap-to-call), Address (placeholder), Hours (placeholder)
- Bottom strip: © Markham Green Golf Club [Year] | Privacy Policy

**Desktop:** 3-column layout with bottom strip
**Mobile:** Stacked columns; phone number prominent and tap-to-call
**Variations:** None.

---

## 7. Page-by-Page Wireframes

---

### PAGE: Homepage — `/`

**Page goal:** Convert first-touch visitors from Google Search into tee time booking calls by immediately establishing legitimacy, communicating affordability, and making the booking CTA impossible to miss.

**Page role in journey:** Entry and initial conversion. This is where the majority of visitors arrive and where many will convert without visiting another page.

**Conversion role:** Entry/orientation — compressed trust-building and CTA-forward.

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Hero | Establish identity, show the course, trigger primary CTA |
| 2 | Trust Bar | Immediately answer "is this legit?" before visitor decides whether to scroll |
| 3 | Course Overview + Pricing Preview | Confirm affordability — enough to keep visitors; link to full pricing |
| 4 | Lessons & Camps Callout | Route the secondary audience (parents, beginners) to their path |
| 5 | Staff Anchor | Named, credentialed humans — differentiation from anonymous municipal courses |
| 6 | Photography Section | Visual proof the course is maintained and enjoyable |
| 7 | CTA Band | Final re-trigger of primary booking action |

---

#### Section Details

**Section 1: Hero**
- **Job:** Immediately communicate "this is a real golf course in Markham, you can book a round today."
- **Content requirements:**
  - Full-width or full-height background: course photograph (drone shot or wide fairway image) — the photo establishes legitimacy faster than any headline
  - Dark overlay for text legibility
  - Headline: communicates Markham + golf + accessibility (e.g., "Markham's public golf course")
  - Subheadline: single value-positioning line (affordable, accessible, no pretension)
  - Season open date: "Season opens April 24, 2026" — visible in hero; relevant for pre-season visitors
  - Primary CTA: "Book a Tee Time" button — bold, unmissable — tel: link
  - Secondary CTA: "See Green Fees →" text link to `/course`
- **Notes:** Hero is the primary visual moment — photography quality is critical. If drone shots are landscape-format and well-lit, they should fill the hero. Copy overlays the image; it does not replace it. No stat blocks or icon grids inside the hero — trust bar handles that immediately below.

**Section 2: Trust Bar**
- **Job:** Reduce first-touch skepticism with PGA credentials and social proof immediately below the hero — before the visitor decides whether to scroll further.
- **Content requirements:**
  - Google rating + star icons (placeholder: "4.X ★ on Google — [N] reviews")
  - PGA credential: Scott Haynes — PGA of Canada Professional
  - Community/establishment signal: "Markham's neighbourhood course since [year]" (placeholder)
  - Optional: Course type signal — "Public 9-hole course, open to all"
- **Notes:** Dark background surface — visually separates from hero while maintaining the dark green brand register. 3–4 items max. This is not a place for marketing copy — it is a factual credibility strip.

**Section 3: Course Overview + Pricing Preview**
- **Job:** Confirm the course exists (brief description) and confirm the price is right (3-tier pricing preview). The goal is to get price-curious visitors to either call now or proceed to `/course` for the full table.
- **Content requirements:**
  - Brief section heading: "9 Holes in the Heart of Markham" or similar
  - 2–3 sentence course description: 9-hole public course, open to all, community feel, no membership required (placeholder until course specs confirmed)
  - Condensed pricing preview: 3 tiers — Weekday $44, Weekend $48, Twilight $37 — with a "See Full Pricing" link to `/course`
  - Power cart callout: $14/person (brief note near the pricing cards)
  - Section CTA: "Book a Tee Time" inline link or compact button after the pricing preview
- **Notes:** This section must communicate price affordably — the $44 weekday rate is a competitive advantage vs. Angus Glen's $100+. It should be visible without requiring a click to `/course` for visitors who just want ballpark confirmation. "See Full Pricing" is for those who want all tiers.

**Section 4: Lessons & Camps Callout**
- **Job:** Route the secondary audience — parents of juniors, adult beginners, women looking for Ladies Learn to Golf — to the Lessons page without interrupting the primary tee-time booking path.
- **Content requirements:**
  - Section heading: something like "Golf Lessons & Junior Camps"
  - 2–3 sentence intro to the Salazar Golf Academy — Greg Salazar's name and credential
  - Brief mention of the three program types: Private Lessons, Ladies Learn to Golf, Junior Camps
  - Starting price or price range (e.g., "Private lessons from $90")
  - CTA: "Explore Lessons →" link to `/lessons`
- **Notes:** This section is secondary conversion — it should be clearly subordinate to the tee time booking path. No "Book a Tee Time" CTA here — this section routes lesson-seekers away from the primary call path. Light background to visually distinguish from the darker sections above.

**Section 5: Staff Anchor**
- **Job:** Show that named, credentialed professionals run this course — not an anonymous chain or neglected municipal track.
- **Content requirements:**
  - Section heading: "Meet the Team" or "The People Behind the Course"
  - Scott Haynes: name, title (Course Manager, PGA of Canada Professional), 1-line credential, photo if available
  - Greg Salazar: name, title (Head Instructor, Salazar Golf Academy), 1-line credential, photo if available
  - Brief link: "Full team profiles →" to `/about`
- **Notes:** This is the brief variant of the Staff Card pattern. 2 people only on the homepage — Scott and Greg as the primary trust anchors. Zac and Dennis appear in full on `/about`. No bios here — credentials only. Section stays compact.

**Section 6: Photography Section**
- **Job:** Let the course speak visually — confirm it's well-maintained, enjoyable, and worth playing. Overcomes "is this a beaten-up track?" skepticism with evidence.
- **Content requirements:**
  - Grid of 3–4 course photographs (drone shots, fairway shots, clubhouse if available)
  - Optional: brief caption or single tagline ("9 holes of real golf, no pretension")
  - No CTA in this section — it is a visual trust moment, not a conversion trigger
- **Notes:** [ASSUMPTION] Photography quality is assumed hero-grade based on "drone shots confirmed." If photos are low-quality on review, this section is reduced to a single full-width band image rather than a grid. Photography layout is 3-column on desktop, 2-column on mobile.

**Section 7: CTA Band**
- **Job:** Final conversion re-trigger after the visitor has seen the course, pricing, and staff — they are now informed and ready to act.
- **Content requirements:**
  - Headline: direct call to action — "Ready to play? Book your round."
  - Primary CTA button: "Book a Tee Time" → tel: or bookingUrl
  - Supporting line: "(905) 294-6156" visible as text in the band — phone number as reassurance
- **Notes:** Standard CTA Band pattern. Dark green or near-black background.

---

#### CTA Logic

**Primary CTA:** "Book a Tee Time" → tel:(905)294-6156
**Primary CTA placement:** Hero (dominant, above fold), inline after pricing preview (Section 3), final CTA band (Section 7)
**Secondary CTA:** "See Full Pricing →" → `/course`
**Secondary CTA placement:** Hero (text link, below primary CTA), pricing preview section (inline link)
**CTA rationale:** The hero CTA converts visitors who arrive ready to book. The post-pricing CTA converts visitors who needed price confirmation. The final band re-engages visitors who scrolled for information first. The secondary CTA (See Full Pricing) serves the price-comparing segment without competing with the primary call action.

---

#### Trust and Proof Placement

**Where proof appears:**
- Section 1 (Hero): Course photography — visual proof the course is real and maintained
- Section 2 (Trust Bar): Google rating + PGA credentials — immediately below hero, before the second scroll
- Section 5 (Staff): Named PGA Professional and named instructor — human credibility anchors
- Section 6 (Photography): Visual proof section — course maintenance and atmosphere

**Rationale:** The primary audience skepticism is "is this a real, maintained course worth going to?" Photography and PGA credentials answer that faster than any copy. The trust bar placement (immediately below hero) ensures this skepticism is addressed before the visitor evaluates pricing — if they trust the course first, the $44 price feels like value rather than a red flag.

---

#### Desktop Wireframe Notes

Full-height hero (85–100vh) with course photography background, dark overlay, headline and CTAs centered or left-aligned. Sticky header sits above the hero on scroll. Trust bar is a full-width horizontal strip immediately below the hero — dark surface, 3–4 items distributed horizontally. Course Overview section: text left, pricing cards right (2-column) on wider screens, or stacked for smaller breakpoints. Lessons Callout: light surface, potentially full-width with a golf photography background at reduced opacity. Staff section: 2-column card grid (Scott | Greg) centered in the content column. Photography grid: 3-column equal-height image grid. CTA Band: full-width, centered.

---

#### Mobile Wireframe Notes

Hero stacks: full-width photograph, overlay, centered headline, season date, primary CTA button (full-width), secondary text link below. Trust bar: 2×2 grid or horizontal scroll strip (2 visible items, scroll for more). Pricing preview cards stack vertically. Lessons callout: full-width single column. Staff cards stack vertically. Photo grid: 2-column grid. CTA Band: full-width stacked. The "Book a Tee Time" button in the sticky header remains always visible — compact version on mobile, never collapses.

---

#### Layout Rationale

The homepage section order follows the trust-first, conversion-ready logic appropriate for a new visitor who has never heard of Markham Green. They arrive skeptical (is this real? is it any good?), so photography and credentials appear before pricing. Pricing appears before the staff section because most visitors are deciding primarily on cost — they want to know it's affordable before they care who the pro is. The Lessons callout is placed between pricing and staff because it is a distinct offer for a distinct audience — it needs to be visible enough that the secondary audience finds their path, but subordinate enough that it doesn't compete with the primary (tee time) path. Photography comes late because by that point the visitor has already evaluated the offer; the photos are final evidence rather than first impression.

---

### PAGE: Course & Green Fees — `/course`

**Page goal:** Present the full green fees pricing table so visitors can confirm exactly what a round costs and immediately book.

**Page role in journey:** Evaluation and conversion. Visitors arrive here after the homepage teases pricing, or directly from a search like "Markham Green green fees."

**Conversion role:** Service/evaluation — pricing table is the decision surface; CTA placed directly after it.

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Page Hero | Orient visitor to the page, confirm they're in the right place, restate primary CTA |
| 2 | Full Green Fees Pricing Table | Deliver complete pricing information — the primary purpose of this page |
| 3 | Course Information | What the course is (specs, description) — evaluating the course character, not just the price |
| 4 | CTA Band | Convert the now-informed visitor |

---

#### Section Details

**Section 1: Page Hero**
- **Job:** Confirm this is the pricing page, restate the course positioning briefly, and keep the booking CTA immediately accessible.
- **Content requirements:**
  - Page headline: "Green Fees & Course Information" or similar
  - 1–2 sentence positioning statement: e.g., "Affordable 9-hole golf in Markham — no membership, no pressure"
  - Primary CTA: "Book a Tee Time" → tel: link
  - Optional: course photograph as a background (smaller than homepage hero — banner height rather than full-viewport)
- **Notes:** This is not a full-height hero — it is a page header section. Purpose is orientation (confirm the page) and CTA accessibility (don't make them scroll past a hero to reach pricing).

**Section 2: Full Green Fees Pricing Table**
- **Job:** Display all pricing tiers clearly so the visitor can find their rate and make a booking decision.
- **Content requirements:**
  - All tiers with labels and prices:
    - Weekday (Mon–Fri, excl. holidays): $44
    - Weekend & Holidays: $48
    - Senior (60+, weekdays excl. holidays): $38
    - Junior (under 18): Weekday $31 / Weekend $35
    - Twilight: $37 (any day)
    - Replay — Weekday: $26 / Weekend: $31
    - Power cart: $14/person
  - Brief note under the table: "Rates for 2026 season. Prices subject to change."
  - Inline CTA directly below the table: "Book a Tee Time" → tel: link
- **Notes:** Mobile layout must be stacked tier cards — not a wide table requiring horizontal scroll. Each tier is its own card: label prominent, price prominent, brief condition note beneath. On desktop, a clean table layout (label | price | conditions) works well. The inline CTA after the pricing table is critical — this is the natural decision moment.

**Section 3: Course Information**
- **Job:** Describe what the course actually plays like — 9 holes, par, yards, character — so golfers can evaluate whether it's appropriate for their game.
- **Content requirements:**
  - Course specs: 9 holes, par [TBC], total yards [TBC], layout description (placeholder until client provides)
  - Brief character description: public course, accessible to all skill levels, no intimidation factor
  - [ASSUMPTION] Course rules or etiquette note: assumed minimal (public course, no formal dress code) — placeholder if client provides specific rules
  - Course superintendent note: Dennis Gilchrist responsible for course maintenance — brief credibility signal
- **Notes:** [ASSUMPTION] Course specs are placeholder. This section is built but uses placeholder copy until client provides par, yardage, and layout description. Section still appears at build — placeholder copy signals to the client what data is needed.

**Section 4: CTA Band**
- **Job:** Final re-trigger after the visitor has seen pricing and course info — they are fully informed and ready to act.
- **Content requirements:** Standard CTA Band pattern — "Ready to play?" headline, "Book a Tee Time" primary CTA, phone number visible
- **Notes:** Standard CTA Band pattern.

---

#### CTA Logic

**Primary CTA:** "Book a Tee Time" → tel:(905)294-6156
**Primary CTA placement:** Page hero header (top), inline after pricing table (Section 2), final CTA band (Section 4)
**Secondary CTA:** None on this page — the visitor's only decision is whether to book
**CTA rationale:** Pricing table is the decision moment on this page. CTA placement directly after the table captures visitors at peak decision confidence. Duplicate in the hero header captures visitors who arrived ready to book and don't need to read the full table.

---

#### Trust and Proof Placement

**Where proof appears:**
- Section 1 (Page Hero): Brief course positioning statement and course photograph (if used) — visual quality signal
- Section 3 (Course Info): Dennis Gilchrist as Course Superintendent — named professional maintaining course quality

**Rationale:** This page's job is primarily informational (pricing). Trust signals are lighter here because visitors who arrived on this page have already passed the basic trust threshold on the homepage. The pricing table itself acts as a trust signal — transparent pricing builds confidence.

---

#### Desktop Wireframe Notes

Page hero is a banner section (30–40vh), not full-height. Pricing table uses a standard HTML table structure on desktop — label column, price column, conditions column — with clear row separation. Desktop allows the full table to be readable without stacking. Course information section is a 2-column layout (description text left, course specs summary right) or a single clean text block with a specs callout. CTA band is full-width.

---

#### Mobile Wireframe Notes

Page hero: stacked — headline → subheadline → CTA button. Pricing table converts to stacked tier cards — each tier is its own visual block (label + price prominent, note below). Cart rental is either its own card or appended as a note to the relevant tier. Course info section: single column, specs displayed as a simple labeled list (Par: [X] | Total Yards: [X]). CTA Band: full-width.

---

#### Layout Rationale

The Course page is the price-confirmation page. Get to the pricing table fast — the page hero is minimal, the table is the first full section. Course information follows the pricing table because the visitor's primary question is "what does it cost?" — not "what's the yardage?" — and answering the secondary question after the primary one mirrors the visitor's decision sequence.

---

### PAGE: Lessons & Camps — `/lessons`

**Page goal:** Present the Salazar Golf Academy program clearly so interested parents, adult beginners, and women seeking structured instruction contact Greg Salazar or call the pro shop.

**Page role in journey:** Secondary conversion path — evaluation and inquiry. Visitors arrive from the homepage lessons callout or directly from a search like "golf lessons Markham" or "junior golf camp Markham."

**Conversion role:** Service/evaluation — three distinct offers for distinct sub-audiences.

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Page Hero | Orient visitor, establish Greg Salazar's credentials, primary inquiry CTA |
| 2 | Private Lessons | Present private lesson formats and pricing |
| 3 | Ladies Learn to Golf | Present the ladies program with structure and pricing |
| 4 | Junior Camps | Present junior camp formats, schedule, and pricing |
| 5 | CTA Band | Final inquiry re-trigger |

---

#### Section Details

**Section 1: Page Hero**
- **Job:** Establish that this is a professional instruction program run by a credentialed instructor at a real course — not just ad-hoc tips from a local pro.
- **Content requirements:**
  - Page headline: "Golf Lessons & Camps — Salazar Golf Academy at Markham Green"
  - 2–3 sentence intro: Greg Salazar's credentials, the Salazar Golf Academy program, hosted at Markham Green Golf Club
  - Primary CTA: "Contact Greg" → mailto:greg@salazargolfacademy.com
  - Secondary CTA: "Call the Pro Shop" → tel:(905)294-6156
  - Greg Salazar headshot or course photo as visual background (if headshot available)
- **Notes:** [ASSUMPTION] Greg Salazar's CTA defaults to mailto: as the primary because his email (greg@salazargolfacademy.com) is the confirmed contact. If client directs to phone-first, CTA buttons swap in order only — section structure is unchanged.

**Section 2: Private Lessons**
- **Job:** Explain the private lesson formats and pricing to adults considering 1-on-1 instruction.
- **Content requirements:**
  - Section heading: "Private Lessons"
  - Brief description: 30-minute and 1-hour options, who they're for, what to expect
  - Individual session pricing: $90 (30 min), $165 (1 hr), $175 (initial assessment)
  - Package pricing table or card list:
    - 3×30 min: $255
    - 5×30 min: $425
    - 3×1 hr: $425
    - 5×1 hr: $700
    - 10×1 hr: $1,350
  - Inline inquiry CTA: "Book a Lesson →" → mailto: or phone (compact, not a full CTA band)
- **Notes:** Pricing for private lessons is complex (7 line items). Use a pricing card or simple table rather than a prose list. The inline inquiry CTA after this section captures visitors who have already decided — don't make them scroll to the bottom.

**Section 3: Ladies Learn to Golf**
- **Job:** Present the ladies program to women new to golf who are looking for a structured, welcoming entry point.
- **Content requirements:**
  - Section heading: "Ladies Learn to Golf"
  - Program description: 5 weekly 1-hour lessons per level, group format, who it's for (beginners and near-beginners), welcoming/non-intimidating framing
  - Pricing: $250/level
  - Dates or scheduling note (if available — otherwise "contact Greg for upcoming schedule")
  - Inline inquiry CTA: "Register for the Next Session →" → mailto: or phone
- **Notes:** This section needs the warmest tone on the page — the audience is women who may feel intimidated by golf. Copy direction should be welcoming without being condescending. The program structure (group, 5 weeks, structured) is the main reassurance signal — not "don't worry, we're nice."

**Section 4: Junior Camps**
- **Job:** Convert parents of juniors into camp inquiries by presenting the structure, schedule, and pricing clearly.
- **Content requirements:**
  - Section heading: "Junior Golf Camps"
  - Camp description: Mon–Fri format, half-day and full-day options, age range (if available)
  - Pricing:
    - Half-day (9–12 or 1–4 PM): $425
    - Full-day (9–3 PM): $850
  - Schedule: Mon–Fri — note dates or "contact Greg for 2026 schedule" if dates not confirmed
  - Inline inquiry CTA: "Enroll Your Child →" → mailto: or phone
- **Notes:** Parents are the decision-makers for junior camps. Pricing is the primary question — make it visible without burying it in body copy. The half-day vs. full-day distinction should be clearly laid out as two separate pricing lines, not a single paragraph.

**Section 5: CTA Band**
- **Job:** Final inquiry re-trigger after all three program types have been presented.
- **Content requirements:**
  - Headline: "Questions? Contact Greg directly."
  - Primary CTA: "Email Greg" → mailto:greg@salazargolfacademy.com
  - Secondary line: "Or call the pro shop: (905) 294-6156"
- **Notes:** Standard CTA Band pattern with lesson-inquiry framing.

---

#### CTA Logic

**Primary CTA:** "Contact Greg" → mailto:greg@salazargolfacademy.com
**Primary CTA placement:** Page hero, inline after each program section, final CTA band
**Secondary CTA:** "Call the Pro Shop" → tel:(905)294-6156
**Secondary CTA placement:** Page hero (paired with primary), final CTA band (secondary line)
**CTA rationale:** Lesson inquiries are the conversion action on this page — not tee time bookings. The CTA is inquiry-focused (email or call for program questions), not booking-focused. Inline CTAs after each program section capture visitors who have seen enough to decide — don't force them to scroll to the bottom.

---

#### Trust and Proof Placement

**Where proof appears:**
- Section 1 (Page Hero): Greg Salazar's credentials — primary trust anchor for the lesson program
- Each program section: pricing transparency acts as a trust signal — programs are structured and priced professionally

**Rationale:** The primary trust question on this page is "is Greg Salazar a real, qualified instructor?" The page hero answers this first with credentials. After that, the program structure and pricing communicate seriousness. Testimonials from students would strengthen this page significantly — [ASSUMPTION] 1–2 student quotes assumed gatherable from Google reviews or direct client request.

---

#### Desktop Wireframe Notes

Page hero is a banner section with Greg Salazar's photo (if available) or a course/lesson photograph. Private Lessons section: pricing displayed as a 2-column layout — individual rates left, package table right — or as a single pricing table with section/header grouping. Ladies Learn to Golf: single-column content block with image alongside if available. Junior Camps: similar to private lessons — structure and pricing in a clean 2-column or table layout. Each section alternates light/surface background for visual separation.

---

#### Mobile Wireframe Notes

All pricing tables convert to stacked cards on mobile. Private lesson package pricing: each package as its own card (package name, price prominent). Each program section stacks to single column. Inline CTAs are full-width buttons on mobile. The page hero headline, Greg's credentials, and the two CTA buttons (Contact Greg / Call Pro Shop) stack vertically in the hero.

---

#### Layout Rationale

The three program sections (Private, Ladies, Junior) are ordered by audience size and general interest level: private lessons serve the broadest adult audience, Ladies Learn to Golf is the most structured entry program, and junior camps are seasonal and require parent action. Putting private lessons first ensures the most common use case is encountered first. Each section is self-contained with its own inline CTA — visitors don't need to read all three programs before converting; they can find their program and act immediately.

---

### PAGE: About / Pro Shop — `/about`

**Page goal:** Build credibility through staff profiles and provide operational facts (address, hours, phone, map) that visitors need to confirm the course is real and plan a visit.

**Page role in journey:** Trust-building and operational confirmation. Visited by two types: skeptical trust-builders and logistics-seekers wanting hours/directions.

**Conversion role:** Trust/proof — staff credentials → contact block → booking CTA.

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Page Hero | Orient visitor, brief course identity statement, secondary CTA |
| 2 | Staff Profiles — Full | Build credibility through named, credentialed people |
| 3 | Course Background | Establishment story, community identity, years in operation |
| 4 | Contact & Operations Block | Address, hours, phone, map |
| 5 | CTA Band | Convert trust-convinced visitor to tee time booking |

---

#### Section Details

**Section 1: Page Hero**
- **Job:** Confirm this is the About / Pro Shop page, briefly restate course identity, and provide the secondary CTA (pro shop call).
- **Content requirements:**
  - Page headline: "About Markham Green Golf Club"
  - 1–2 sentence course identity: community-feel public 9-hole course, managed by professionals
  - CTA: "Call the Pro Shop" → tel:(905)294-6156 (secondary framing — this is a trust page, not primary conversion)
- **Notes:** Minimal hero — this is a trust page, not an entry page. No full-height hero needed. Banner height.

**Section 2: Staff Profiles — Full**
- **Job:** Introduce all four staff members with names, titles, credentials, and bios — establish that the course is managed and maintained by named professionals.
- **Content requirements:**
  - Scott Haynes: photo (if available), Course Manager, PGA of Canada Professional, 2–3 sentence bio
  - Greg Salazar: photo (if available), Head Instructor, Salazar Golf Academy, 2–3 sentence bio, link to `/lessons`
  - Zac Spain: photo (if available), Food & Beverage Manager, 1–2 sentence role description
  - Dennis Gilchrist: photo (if available), Course Superintendent, 1–2 sentence role description and what "superintendent" means for course quality
- **Notes:** Greg's staff card should include a link to the Lessons page — he is the primary lesson inquiry contact. Full Staff Card pattern (4 people, full bios). Photos: [ASSUMPTION] assumed available for Scott and Greg at minimum; Zac and Dennis may require placeholder initials.

**Section 3: Course Background**
- **Job:** Tell the story of Markham Green as a community-rooted neighbourhood course — reinforces "welcoming, not intimidating" positioning.
- **Content requirements:**
  - Year established (placeholder until confirmed)
  - Brief history: community course, how long it's been serving Markham-area golfers
  - Community identity statement: neighbourhood feel, regulars know each other, staff knows members
  - F&B mention: Zac Spain and the on-site food and beverage operation
- **Notes:** [ASSUMPTION] Year established and history details are placeholder. This section is built with placeholder copy and filled in when client provides information. If years of operation is under 5 years, copy shifts from "established community course" to "revitalized local course" framing.

**Section 4: Contact & Operations Block**
- **Job:** Provide every operational fact a visitor needs to plan their visit — address, hours, phone, and a map.
- **Content requirements:**
  - Physical address (placeholder — launch blocker)
  - Operating hours: seasonal (April–November), day-by-day if available (placeholder)
  - Phone: (905) 294-6156 — tap-to-call
  - Google Maps embed (deferred until address is confirmed)
  - Pro shop email (if available from client)
- **Notes:** [ASSUMPTION] Address and hours are placeholder. Map embed is deferred until address is confirmed. The contact block renders in placeholder state with clear "TBC" labels during build; these are replaced before launch. This section must be easy to find — visitors who arrive on `/about` specifically for the address should reach it by scrolling halfway down at most.

**Section 5: CTA Band**
- **Job:** Convert visitors who visited the About page to build trust — they've now seen the staff and the course background and are ready to act.
- **Content requirements:** Standard CTA Band — "Ready to book your round?" headline, "Book a Tee Time" CTA, phone number visible
- **Notes:** Standard CTA Band pattern.

---

#### CTA Logic

**Primary CTA:** "Book a Tee Time" → tel:(905)294-6156 (final CTA band)
**Primary CTA placement:** CTA band (Section 5) — after trust content has been delivered
**Secondary CTA:** "Call the Pro Shop" → tel:(905)294-6156 (page hero) and visible phone number in contact block (Section 4)
**CTA rationale:** Trust pages earn the conversion at the end — the visitor needs to see staff credentials and course background before the booking CTA feels natural. The page hero includes a "Call the Pro Shop" secondary because visitors who came specifically to find the phone number should get it immediately without scrolling.

---

#### Trust and Proof Placement

**Where proof appears:**
- Section 2 (Staff Profiles): Named, credentialed staff — PGA Professional (Scott), Salazar Golf Academy (Greg), professional Superintendent (Dennis) — this is the primary trust moment on this page
- Section 3 (Course Background): Establishment history and community identity — social trust signal

**Rationale:** The About page visitor is a skeptic who has not yet decided if Markham Green is credible. Staff credentials are the strongest available proof — they lead the page. History and community story land better after credentials are established.

---

#### Desktop Wireframe Notes

Page hero is a banner (30–40vh), light or dark surface. Staff profiles: 4-column card grid (desktop) — each card has photo, name, title, credential, bio. Course background: single-column text section, warm cream surface. Contact block: 2-column layout — contact details left (address, hours, phone), Google Maps embed right. CTA band: full-width, dark surface.

---

#### Mobile Wireframe Notes

Staff profiles: stacked single-column cards. Contact block: stacked — contact details above, map below. Map embed should have a fixed height on mobile (200–300px) to avoid overwhelming the screen. Phone number in contact block must be a large tap-to-call link. Page hero and CTA band: standard full-width stacked layout.

---

#### Layout Rationale

The About page puts credentials before operations because the trust-building visit is the more common use case. The contact block is deep in the page (Section 4) — visitors who arrived only for the address will scroll past staff and history to find it. A reasonable trade-off given that the address is also in the footer and that most address-seekers will use Google Maps rather than the website. If data suggests address lookups are a primary use case, the contact block could move to Section 2 and staff profiles to Section 3 in a future iteration.

---

### PAGE: Privacy Policy — `/privacy-policy`

**Page goal:** Satisfy legal compliance requirements for a site with Google Maps embed, potential analytics, and email links.

**Page role in journey:** Structural/utility — no conversion role.

**Conversion role:** Structural/utility.

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Privacy Policy Content | Legal compliance — standard privacy policy text |

---

#### Section Details

**Section 1: Privacy Policy Content**
- **Job:** Provide required legal disclosures for analytics, third-party embeds, and data handling.
- **Content requirements:**
  - Standard privacy policy text: data collection practices, Google Maps/Analytics data handling, email link disclaimer, contact information for privacy inquiries
  - Last updated date
- **Notes:** No CTA, no hero, no photography. Minimal layout — single content column, standard typography. Footer navigation provides exit back to site. No design or conversion investment warranted here.

---

#### CTA Logic

**Primary CTA:** None.
**Secondary CTA:** None.
**CTA rationale:** Legal compliance page — no conversion action appropriate.

---

#### Trust and Proof Placement

Not applicable.

---

#### Desktop Wireframe Notes

Single centered content column (max-width ~680px for readability), standard page padding above and below. No sidebars. Header and footer present.

---

#### Mobile Wireframe Notes

Same as desktop — single column. Standard font size for legal text (min 16px).

---

#### Layout Rationale

Minimal is correct for this page. Standard legal content structure.

---

## 8. Assumptions Made

> `[ASSUMPTION]` **Photography quality:** Drone shots assumed to be landscape-format, well-lit, and hero-grade based on "drone shots confirmed available." If photos are low-quality on review, Section 6 on the homepage (Photography Grid) collapses to a single full-width band image, and the hero background may require an alternative source or placeholder until a reshoot is arranged.

> `[ASSUMPTION]` **Course specs (par, yards, layout):** Assumed placeholder at build time. Section 3 on `/course` is built with placeholder copy. Client must provide before course page goes live.

> `[ASSUMPTION]` **Google rating and review count:** Trust bar on homepage uses placeholder values (e.g., "4.X ★ on Google — [N]+ reviews"). If review count is under 20, the trust bar copy shifts to credentials only — no review count displayed.

> `[ASSUMPTION]` **Staff headshots:** Assumed available for Scott Haynes and Greg Salazar at minimum. Zac Spain and Dennis Gilchrist use initial placeholders if headshots are not provided. Full staff card layout is maintained regardless — placeholder initials are acceptable at launch if headshots are unavailable.

> `[ASSUMPTION]` **Greg Salazar CTA defaults to mailto::** Lessons page CTAs use mailto:greg@salazargolfacademy.com as the primary inquiry path. If client confirms pro shop handles all inquiries, the CTA label and href change; section structure is identical.

> `[ASSUMPTION]` **Social media links:** Footer includes social link placeholders. If client confirms no active social profiles, the social column is removed from the footer — no layout change to any page.

> `[ASSUMPTION]` **No student testimonials on Lessons page:** Page is built without testimonial quotes for the lesson program. If client can provide 1–2 student or parent quotes, they slot into the page hero or beneath the Private Lessons section.

> `[ASSUMPTION]` **About page history:** Course background section uses placeholder copy ("established in [year]") until client provides year founded and any founding/history context.

---

## 9. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Physical address | Not provided by client | Client | Before build — blocks contact block and schema |
| Operating hours | Not collected | Client | Before build |
| Greg Salazar CTA direction | Client has not confirmed lesson inquiry path | Client | Before lessons page CTA is finalized |
| Course specs (par, yards, layout) | Not collected | Client | Before course page copy is written |
| Google rating + review count | Not confirmed | Client | Before launch — trust bar copy |
| Year established | Not confirmed | Client | Before launch — about page and trust bar |
| Staff headshots | Not confirmed | Client | Before About page design; initials placeholder used until received |
| Drone photography (quality review) | Photos not yet reviewed | Agency on receipt | Before design starts |
| Social media handles | Not confirmed | Client | Before footer is built |
| Logo file | Not received | Client | Before design system |

---

## 10. Blockers and Risks

**Blockers:**
- Drone photography must be reviewed before design begins — the visual direction is photography-dependent. If photos are unusable, a reshoot or stock alternative must be sourced before design can proceed.
- Logo file must be received before the header design is finalized in the design system stage.
- Physical address, operating hours, and Greg Salazar CTA direction must be resolved before the corresponding page sections can be finalized.

**Risks:**
- **Photography risk:** If drone shots are poor composition, low resolution, or not hero-appropriate, the entire visual direction needs adjustment. The dark-green, photography-led design aesthetic has no fallback if real course imagery is inadequate.
- **Timeline risk:** Season opens April 24, 2026. Multiple client-dependent items remain. Build should proceed with placeholders on all pending items — the site can launch with placeholder data in some sections if necessary, but LocalBusiness schema (address/hours) must be correct at launch for local SEO.
- **Lessons CTA:** If client redirects to phone-only for lessons, the mailto: links across multiple inline CTAs on `/lessons` need updating. Not a structural change, but must be confirmed before build.

---

## 11. Handoff to 05-Design-System

**Wireframe PRD status:** Complete with flags — see Blockers section for pre-design dependencies.

**Instruction for 05-design-system:**
> The wireframe PRD defines section-level structure for all 5 pages. Begin the visual system with this structure as the foundation. Key structural constraints to preserve:
> 1. The sticky header with "Book a Tee Time" CTA must remain always-visible at every scroll position and on every page — do not treat the header as a standard non-sticky element.
> 2. The trust bar must appear immediately below the hero on the homepage — not buried below the first scroll. Dark surface with 3–4 factual items.
> 3. The pricing table on `/course` must be mobile-first — stacked tier cards on mobile, not a wide horizontal table. Design system should include a pricing tier card component.
> 4. The `/lessons` page has inline CTAs within program sections (Private, Ladies, Junior) — these are compact inquiry prompts, not full CTA bands. Design system needs a compact inline CTA variant.
> 5. The `/about` page contact block has a Google Maps embed slot — design system should accommodate a responsive map container.
>
> Freedom the design system has:
> - Full visual language: dark green palette, near-black, warm cream surfaces, gold accent — direction from discovery brief, tokens and specific values determined in this stage
> - Typography selection within the direction: serif heading (Playfair Display or Cormorant), geometric sans body (Inter)
> - Animation and motion: subtle fade-in on scroll only — implementation is the design system's call
> - Component styling within wireframed sections (card borders, shadow depth, button shape, icon use)
> - Photography treatment decisions: overlay opacity, crop ratios, whether hero uses full viewport height or 85vh
>
> Priority pages for design:
> 1. Homepage — most complex section composition; trust bar, photography grid, and staff cards all need visual definition first
> 2. Course & Green Fees — pricing table mobile component is the most reusable component decision
> 3. Sticky Header — universal pattern; must be designed before any page can be finalized

---

## 12. Instructions for Later Skills

### 07-Implementation-Plan (Build Plan)
> Page count: 5. No dynamic routes — all pages are static. No CMS, no server actions, no form submission. Reusable components: StickyHeader, TrustBar, PricingTierCard, StaffCard, CTABand, Footer, PhotoGrid. The only server-side element is the LocalBusiness JSON-LD schema in `app/layout.tsx`. `siteConfig.bookingUrl` toggle required: if null, CTA renders as `tel:(905)294-6156`; if populated, renders as external link. Build order: globals.css + design tokens → UI primitives → StickyHeader + Footer → Homepage → Course page → Lessons page → About page → schema + SEO metadata → Privacy Policy. Placeholder components for address, hours, course specs, and Google Maps embed are required — these should be clearly marked in code comments for the client handoff.

### 16-Feature-Booking-Payments (if activated)
> Booking CTA lives entirely in the sticky header as a button that links to `siteConfig.bookingUrl`. When the booking system is activated, this is a one-line config change — no new page, no widget embed on any existing page (unless the booking system specifically requires an embed page, in which case a minimal `/book` page is added with zero structural change to the rest of the site).

### 15-Feature-Gallery (if activated in Phase 2)
> If a gallery page is added in Phase 2, it is a single-column or 3-column grid page at `/gallery`. Section structure: page header (brief heading + "9 holes of real golf" tagline) + photography grid (3-column desktop, 2-column mobile) + CTA band. No captions required unless photography has specific course identification value. Add to main navigation in Phase 2 only.
