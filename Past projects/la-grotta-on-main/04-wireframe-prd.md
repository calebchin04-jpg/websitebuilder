# WIREFRAME PRD
**Project:** La Grotta On Main
**Date:** 2026-04-17
**Stage:** 04-wireframe — output complete
**Sitemap PRD status:** Acceptable with flags
**Pages covered:** 7

---

## 1. Project Overview

La Grotta On Main is a 29-year-old family-owned Italian and Mediterranean restaurant in historic Unionville, Ontario. This is a 7-page flat-navigation redesign built around a single conversion action: a phone call to reserve a table. Every page is structured to move a couple from atmospheric first impression → trust in the family story and food quality → frictionless phone call. The most important structural fact: there is no booking form and no reservation widget — the phone number IS the conversion mechanism, and every page treats it as such.

---

## 2. Wireframe Summary

**Total pages wireframed:** 7
**Primary CTA mechanism:** Phone call (tap-to-call on mobile, displayed number on desktop)
**Conversion page:** `/contact` (but CTA is present on every page)
**Reusable templates identified:**
- Global Header (sticky, all pages)
- Mobile Tap-to-Call Bottom Bar (all pages except `/contact`)
- CTA Band (Homepage, Menu, Gallery, Private Functions)
- Footer (all pages)
- Gallery Grid (full on `/gallery`, teaser variant on Homepage)

**Key structural decisions:**
- Hero leads with full-width atmosphere photography — not a split layout — because the emotional first impression is the conversion driver for couples choosing a date-night restaurant
- Trust bar (4.3★ + 29 years) appears immediately below the hero — not buried — because the couple's first question after "does this look nice?" is "can I trust it?"
- Family story section precedes food photography on the homepage — the story is the differentiator, the food confirms the quality, both are required before the reviews section lands with full weight
- Contact page leads with the phone number as the dominant element — no form, no hero, no competing content — because the visitor arriving at `/contact` has already decided; the only job is to make the call take zero friction
- Gallery uses category tabs (Food / Interior / Patio / Events) rather than a flat grid — because different visitors are looking for different types of atmosphere proof

---

## 3. Critique of Sitemap PRD

**Overall sitemap PRD quality:** Strong

**Issues identified:**

> **[GALLERY]** Problem: Photo volume per category unconfirmed — gallery category structure may need to collapse if photo supply is thin. Impact on wireframing: The tab/filter pattern assumed in the sitemap may need to reduce to 2 categories (Food, Atmosphere) if fewer than 6 good photos exist per the 4 planned categories. Resolution: Wireframe defines the 4-category tab structure as designed; note clearly that build team must assess photo volume and collapse categories if needed. The grid structure does not change — only the tab labels.

> **[CONTACT PAGE]** Problem: The sitemap defines Contact as the "primary conversion page" but the conversion mechanism is a phone call — not a form. The standard contact page wireframe rules assume a form. Resolution: Contact page wireframe is rewritten to treat the phone number as the dominant structural element — not a form. All wireframe rules for form placement are replaced by phone number placement rules.

---

## 4. Send-Back to 03-Sitemap

*Not triggered. Sitemap PRD is structurally sound.*

---

## 5. Overall Wireframe Logic

La Grotta's wireframe is built around one core insight: couples making a dinner reservation decision need to feel the restaurant before they call it. This means the visual and emotional case must be made first — atmosphere, story, food quality — and the phone number must appear repeatedly as a low-friction invitation, not a push. The homepage carries the full persuasion sequence: identity → credibility → differentiator → food → proof → secondary offer → action. All other pages are stripped-down evaluation stops that end in the same phone call. The contact page is the most minimal page on the site by design — it exists to make the call happen, not to sell anything further. The gallery page is the only trust page with no copy-heavy sections — photography does all the work, and the CTA appears only after the visitor has scrolled through sufficient visual evidence. Private Functions is the only page that breaks the phone-first pattern — it adds a 4-field inquiry form because event planning requires asynchronous communication.

---

## 6. Reusable Section/Component Patterns

---

### PATTERN: Global Sticky Header

**Used on:** All 7 pages
**Job:** Keep the restaurant identity and reservation CTA visible at all times regardless of scroll position
**Contains:**
- Logo (left-aligned) — links to `/`
- Navigation links: Menu | Gallery | Private Functions | Contact
- "Reserve a Table" CTA button (rightmost — visually distinct from nav links)

**Desktop:** Full horizontal nav bar. Logo left. Nav items center or right. CTA button rightmost with distinct visual treatment (outlined or filled with brand gold). Sticks to top on scroll.
**Mobile:** Logo left. Hamburger menu right. "Reserve" button visible between logo and hamburger — always visible without opening the menu. On menu open: full-screen or slide-out nav with nav links + CTA button repeated.
**Variations:** Active nav state highlights current page. CTA button may change label on `/contact` page to "Call Now" since the page itself is the reservation endpoint.

---

### PATTERN: Mobile Tap-to-Call Bottom Bar

**Used on:** All pages except `/contact` (redundant there)
**Job:** Ensure the phone call CTA is always one tap away on mobile regardless of scroll position or nav state
**Contains:**
- Phone icon + "Call to Reserve" label + phone number (905-940-0235)
- Full-width bar fixed to bottom of mobile viewport

**Desktop:** Not displayed
**Mobile:** Fixed to bottom of viewport. Sits above the browser UI chrome. Full-width. Tapping initiates a phone call via `tel:` link.
**Variations:** On `/contact` — hidden (the page itself contains the phone number prominently).

---

### PATTERN: CTA Band

**Used on:** Homepage (final section), Menu (top + bottom), Gallery (bottom), Private Functions (after form)
**Job:** Re-trigger the primary reservation action after content has built sufficient trust or delivered the information the visitor came for
**Contains:**
- Action headline (e.g., "Ready for a night out?")
- Primary CTA button — "Reserve a Table" → `tel:9059400235`
- Optional single-line reassurance text (e.g., "Call us to book — (905) 940-0235")

**Desktop:** Full-width band. Centered content. Headline above button. Reassurance text below.
**Mobile:** Same stacking. Headline → CTA button (full-width) → reassurance line. CTA button minimum 54px height.
**Variations:** Top-of-page variant on Menu page is smaller — just the phone number + "Reserve a Table" link, no headline. Does not need full-band treatment at the top.

---

### PATTERN: Footer

**Used on:** All 7 pages
**Job:** Provide full site navigation, contact information, social links, and legal access from any page
**Contains:**
- Column 1 — Visit: Menu, Gallery, Private Functions
- Column 2 — Contact: phone number (tap-to-call), email address, physical address
- Column 3 — Follow: Instagram (@lagrottaonmain), Facebook
- Legal row: Privacy Policy | © Year La Grotta On Main
- Hours of operation (brief — full hours on `/contact`)

**Desktop:** 3-column layout. Legal row below. Full-width dark or neutral background.
**Mobile:** Single-column stacked. Columns stack vertically. Legal row last.
**Variations:** None — consistent across all pages.

---

### PATTERN: Gallery Grid

**Used on:** `/gallery` (full version), Homepage (teaser version)
**Job:** Provide visual atmosphere proof through photography
**Contains:**
- Uniform image grid (not masonry — consistent cell sizes for visual calm)
- Full version: category filter tabs (Food / Interior / Patio / Events) above grid
- Teaser version: 6 images, no filter, "View All Photos" link below

**Desktop (full):** 3-column grid. Category tabs above. Clicking a tab filters the grid. Clicking an image opens a lightbox.
**Desktop (teaser):** 3-column, 2-row grid (6 images). No filter. "View All Photos →" link below grid, right-aligned.
**Mobile (full):** 2-column grid. Tabs remain but become scrollable horizontally if needed. Lightbox on tap.
**Mobile (teaser):** 2-column, 3-row grid. "View All Photos →" link below.
**Variations:** If photo volume per category is below 6, collapse to 2 tabs: Food / Atmosphere (combining Interior + Patio + Events).

---

### PATTERN: Review Strip

**Used on:** Homepage
**Job:** Deliver social proof from third-party sources to reduce trust skepticism after the story section
**Contains:**
- Google rating badge: ★★★★☆ 4.3 on Google
- 2–3 short review quote cards (name, quote excerpt, source attribution)
- Link to Google reviews (optional — opens external)

**Desktop:** Horizontal row. Rating badge left. Review cards right (2–3 columns).
**Mobile:** Stacked. Rating badge full-width. Review cards single-column scroll or 1-at-a-time.
**Variations:** Only used on Homepage. Not repeated on other pages.

---

## 7. Page-by-Page Wireframes

---

### PAGE: Homepage — `/`

**Page goal:** Convince a couple that La Grotta On Main is where they want to have dinner, and make calling to reserve feel like the natural next step.
**Page role in journey:** Entry/orientation — the primary arrival point from Google Search, Google Maps, and Instagram
**Conversion role:** Entry/orientation with inline conversion triggers throughout

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Hero | Establish atmosphere and identity; deliver primary + secondary CTA above the fold |
| 2 | Trust Bar | Immediate credibility hit — 4.3★ + 29 years — before the visitor decides to scroll |
| 3 | Family Story | Deliver the primary differentiator — 29 years, family-owned, Sebastian, Unionville |
| 4 | Signature Dishes | Prove food quality through photography of 3–4 signature dishes |
| 5 | Gallery Teaser | Extend the atmosphere proof with 6 images; route interested visitors to full gallery |
| 6 | Reviews Strip | Third-party social proof to consolidate trust before the CTA |
| 7 | Private Functions Callout | Serve the secondary audience without disrupting the primary flow |
| 8 | Final CTA Band | Re-trigger the reservation action after full trust sequence is complete |

---

#### Section Details

**Section 1: Hero**
- **Job:** Make the visitor feel the atmosphere within 3 seconds and give them two clear next actions
- **Content requirements:**
  - Full-width background image — interior or patio atmosphere shot (warm lighting, table settings, inviting space)
  - Restaurant name: La Grotta On Main
  - Positioning tagline: short (max 10 words) — communicates authentic Italian, family, Unionville
  - Primary CTA button: "Reserve a Table" → `tel:9059400235`
  - Secondary CTA: "View Menu" → `/menu` (visually subordinate to primary)
- **Notes:** Image must be full viewport height on desktop (100vh) or at minimum 80vh. Overlay required to ensure text readability over photography. No text-heavy copy in the hero — the image does the work, the tagline supports it. CTA buttons must both be visible above the fold on mobile (375px) without scrolling.

**Section 2: Trust Bar**
- **Job:** Instantly answer the visitor's implicit trust question — "Is this a real, quality restaurant?" — before they invest more attention
- **Content requirements:**
  - Google rating: ★★★★☆ 4.3 on Google (with star icons)
  - Stat: "29 Years in Unionville"
  - Stat: "Family Owned & Operated"
  - Optional third stat: "Est. 1996" or "Proudly Serving Unionville Since 1996"
- **Notes:** This section is narrow — one horizontal band. It is not a section with a headline or copy. It is a quick-scan credibility row. 3–4 items max. No images. Should feel like a proof stamp, not a feature list.

**Section 3: Family Story**
- **Job:** Differentiate La Grotta from every other Italian restaurant by making the family-owned character real and specific
- **Content requirements:**
  - Section headline — frames the story (not generic — specific to the 29-year journey)
  - 2–3 short paragraphs — the story of the restaurant, the family, the Unionville location, what has stayed the same in 29 years
  - One image — ideally owner/family or warm interior shot (not food)
  - No CTA in this section — trust-building is in progress; converting here is premature
- **Notes:** Two-column layout on desktop: text left, image right (or image left, text right). Image should feel personal, not stock. This section earns its length by being the only place on the site where the family story is told fully. Mobile stacks: image first, then text.

**Section 4: Signature Dishes**
- **Job:** Prove food quality through photography of the restaurant's most distinctive dishes
- **Content requirements:**
  - Section headline — frames this as signature or featured dishes
  - 3–4 dish cards: each with a food image, dish name, and 1-sentence description
  - No prices — this is a quality signal, not a menu
  - Inline CTA: "View Full Menu →" `/menu` at the bottom of the section
- **Notes:** Card grid on desktop (3 columns or 2+1 featured layout). Mobile: single-column stacked cards. Photography is the dominant element in each card — name and description are supporting. If only 3 dishes have strong photos, use 3 cards; do not pad with weak imagery.

**Section 5: Gallery Teaser**
- **Job:** Extend atmosphere proof beyond the hero and route visually-motivated visitors to the full gallery
- **Content requirements:**
  - 6 curated images — mix of food, interior, patio, and events
  - No section headline required — let the images speak
  - "View All Photos →" link below grid → `/gallery`
- **Notes:** Uses Gallery Grid (teaser variant) from reusable patterns. 3-column, 2-row on desktop. 2-column, 3-row on mobile. No caption text on images. Link to full gallery is right-aligned on desktop, centered on mobile.

**Section 6: Reviews Strip**
- **Job:** Deliver peer validation at the point where trust is highest and the CTA is near
- **Content requirements:**
  - Google rating badge: ★★★★☆ 4.3
  - 2–3 short review excerpts with reviewer first name and "via Google" attribution
  - Reviews must be real — sourced from Google or OpenTable, not invented
- **Notes:** Uses Review Strip reusable pattern. Select reviews that specifically mention atmosphere, food quality, or the family/owner — not generic praise. Avoid reviews that mention wait times or service issues. No Tripadvisor attribution anywhere on the site.

**Section 7: Private Functions Callout**
- **Job:** Alert the secondary audience (event planners) that La Grotta hosts private events, without disrupting the primary couple-focused flow
- **Content requirements:**
  - Brief headline — names the service clearly
  - 2–3 sentence description — what kinds of events, what the experience is like
  - One image — an event setup or private dining room photo
  - CTA: "Learn More" or "Enquire About Private Events" → `/private-functions`
- **Notes:** This section is intentionally brief — it is a pointer for the secondary audience, not a full pitch. The full pitch lives on `/private-functions`. Two-column layout (text + image). Mobile: stacked, image below text. CTA is secondary-styled — clearly subordinate to the main reservation CTA.

**Section 8: Final CTA Band**
- **Job:** Re-trigger the reservation action after the full trust sequence has been delivered
- **Content requirements:** Uses CTA Band reusable pattern
  - Headline: invitation-toned (e.g., "Come join us in Unionville")
  - Primary CTA button: "Reserve a Table" → `tel:9059400235`
  - Reassurance line: phone number displayed as text below button
- **Notes:** This is the last section before the footer. The visitor has now seen: atmosphere → credibility → story → food → more atmosphere → peer proof → secondary offer. This CTA band closes the persuasion sequence.

---

#### CTA Logic

**Primary CTA:** "Reserve a Table" → `tel:9059400235`
**Primary CTA placement:** Hero (Section 1), Final CTA Band (Section 8), Sticky Header (persistent)
**Secondary CTA:** "View Menu" → `/menu`
**Secondary CTA placement:** Hero (Section 1, below primary), Signature Dishes section (inline link)
**CTA rationale:** The primary CTA appears at the top (before trust is built — for high-intent visitors who need no convincing) and at the bottom (after trust is fully built — for visitors who needed the full sequence). The middle of the page is trust-building, not CTA-heavy. The sticky header and mobile bottom bar handle mid-page CTA needs so section CTAs can be spaced appropriately.

---

#### Trust and Proof Placement

**Where proof appears:**
- Section 2 (Trust Bar): 4.3★ + years + family-owned — immediate credibility, pre-scroll
- Section 3 (Family Story): founder/family narrative — the differentiator as proof
- Section 4 (Signature Dishes): food photography — quality proof through imagery
- Section 5 (Gallery Teaser): atmosphere photography — experience proof
- Section 6 (Reviews Strip): third-party social proof — peer validation before CTA

**Rationale:** Proof is front-loaded, not back-loaded. The trust bar provides a quick credibility hit immediately after the hero to stop skeptical visitors from bouncing. The story and food sections build deeper trust through specificity. Reviews close the trust sequence with third-party validation before the final CTA. No section is purely decorative — each one is a proof mechanism.

---

#### Desktop Wireframe Notes

Full-width viewport layout. Sticky header occupies the top — all section content accounts for header height offset. Hero is full-viewport-height with a centered or left-aligned text overlay. Trust bar is a single horizontal band, full-width, subdued background (not white — must be distinguishable from hero). Story section is two-column: 55% text, 45% image, generous vertical padding. Signature dishes are 3-column cards. Gallery teaser is 3×2 grid. Reviews strip is horizontal with badge left and cards right. Private functions callout is two-column. Final CTA band is full-width centered.

---

#### Mobile Wireframe Notes

Hero text, tagline, and both CTA buttons must be fully visible at 375px without scrolling — hero height should be limited to 90vh max on mobile, and text overlay positioned in lower half with buttons below it. Trust bar collapses to 2-column grid (2 stats per row, 2 rows). Story section stacks: image first (full-width, fixed height), then text. Signature dishes go single-column (full-width cards). Gallery teaser is 2×3 grid. Reviews strip stacks: badge above, cards below in single column. Private Functions callout stacks: image above, text + CTA below. Fixed bottom tap-to-call bar is always present.

---

#### Layout Rationale

The homepage section sequence is a deliberate trust funnel. Each section answers a specific question the visitor has in sequence: "Is this the vibe?" (Hero) → "Can I trust it?" (Trust Bar) → "What's the story?" (Story) → "Is the food good?" (Signature Dishes) → "What does it actually look like?" (Gallery) → "What do other people say?" (Reviews) → "What else do they offer?" (Private Functions) → "Okay, I'm ready" (CTA Band). The sequence cannot be reordered without breaking the persuasion logic. The one non-obvious decision is placing the family story (Section 3) before food photography (Section 4) — this is intentional because the story is what differentiates La Grotta from competitors; the food confirms the choice but the story earns the emotional investment.

---

### PAGE: Menu — `/menu`

**Page goal:** Give visitors the menu information they need to confirm food quality and make the reservation call.
**Page role in journey:** Evaluation — the visitor has decided they're interested and wants to verify the food matches their occasion
**Conversion role:** Service/evaluation

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Menu Header + Top CTA | Orient the visitor and place the reservation CTA before they scroll into the menu |
| 2 | Menu Content | Deliver the full menu in a mobile-readable format |
| 3 | Dietary Notes | Confirm accommodation options (veg, vegan, GF) for the decision-maker in the couple |
| 4 | Private Functions Note | Route event planners who land on menu first to the correct page |
| 5 | Bottom CTA Band | Re-trigger reservation after the visitor has finished evaluating |

---

#### Section Details

**Section 1: Menu Header + Top CTA**
- **Job:** Orient the visitor instantly and keep the reservation option accessible before they dive into menu browsing
- **Content requirements:**
  - Page title: "Our Menu"
  - 1-sentence framing (e.g., "Authentic Italian and Mediterranean cuisine — crafted with care since 1996")
  - Phone number displayed as text with "Call to Reserve" label — not a full CTA band, just a persistent access point
- **Notes:** This is a slim header, not a full hero section. No background image needed. The goal is to get the visitor into the menu content quickly while keeping the phone number visible. On mobile, phone number becomes a tap-to-call link.

**Section 2: Menu Content**
- **Job:** Deliver the full menu in a readable, organized format that communicates quality
- **Content requirements:**
  - Menu organized by category: Starters, Pasta, Mains, Desserts, Drinks (confirm category names from current site)
  - Each item: dish name + brief description
  - Pricing: include if menu has pricing; omit if no pricing exists on current site
  - 1–2 food images adjacent to or above the menu categories (not mandatory if photo quality is limited)
- **Notes:** Menu must be HTML-rendered — no PDF embed, no image of a printed menu. Category headers clearly distinguish sections. On mobile, category sections stack vertically; do not use horizontal tabs for menu categories (too small a tap target, too disruptive for browsing). Consider a sticky category nav (anchor links to menu sections) on desktop for long menus.

**Section 3: Dietary Notes**
- **Job:** Confirm that dietary accommodation options exist — this is a decision-making factor for couples where one person has restrictions
- **Content requirements:**
  - Brief callout: vegetarian / vegan / gluten-free options available
  - Optional: note to contact the restaurant for specific accommodations
- **Notes:** This does not need its own full section — it can be a callout box or visual badge row within or below the menu content. Small but important.

**Section 4: Private Functions Note**
- **Job:** Route visitors who are event-planning (not just dining) to the correct page
- **Content requirements:**
  - Brief line: "Planning a private event or corporate dinner?"
  - CTA link: "Learn About Private Functions →" → `/private-functions`
- **Notes:** This is an inline text callout or small banner, not a full section. It should not disrupt the menu reading flow. Placed after the full menu content, before the bottom CTA band.

**Section 5: Bottom CTA Band**
- **Job:** Convert the visitor who has finished reviewing the menu and is ready to book
- **Content requirements:** Uses CTA Band reusable pattern — action headline, "Reserve a Table" button, phone number as text
- **Notes:** Positioned after all menu content. The visitor has done their evaluation; the CTA here has the highest conversion probability on this page.

---

#### CTA Logic

**Primary CTA:** "Reserve a Table" → `tel:9059400235`
**Primary CTA placement:** Top of page (slim phone number display), Bottom CTA Band, Sticky Header
**Secondary CTA:** None on this page — evaluation is complete, reservation is the only logical next step
**CTA rationale:** The menu page is a pure evaluation page. The visitor arrived to check the food. The CTA at the top catches high-intent visitors who confirm quickly; the CTA at the bottom catches those who read the full menu. No mid-menu CTA interrupts the evaluation flow.

---

#### Trust and Proof Placement

**Where proof appears:** Minimal on this page — the menu itself is the proof. The page header tagline ("crafted with care since 1996") is a light trust signal. The 29-year reference can appear in the header framing copy.
**Rationale:** The visitor who arrives at `/menu` has already passed through trust-building on the homepage or Google. Adding full review sections here would be redundant and would slow the evaluation. Trust signals are light and integrated into the copy context rather than sectioned.

---

#### Desktop Wireframe Notes

Slim page header (no hero image). Menu content is the dominant element — full-width or max-width container, generous line spacing for readability. On desktop, consider a two-column layout for the menu (categories split between two columns) if the menu is long — check content volume. Sticky category nav (anchor links) is recommended on desktop if the menu has 5+ categories. Optional food image spans full width or sits in a column alongside menu content.

---

#### Mobile Wireframe Notes

Page header collapses to minimal — just the page title and a tap-to-call link, no decorative elements. Menu content goes single-column, full-width. Category headers are full-width and visually distinct (bold, ample top padding) so the visitor can scan and jump mentally between sections. No sticky category nav on mobile — it adds complexity for a menu that will be scrolled linearly. Font size must be minimum 16px for dish names, 14px for descriptions. Bottom CTA button is full-width, minimum 54px height.

---

#### Layout Rationale

The menu page is intentionally stripped of atmospheric decoration. The visitor came here for one thing: the menu. The layout respects that intent by getting to the menu content as fast as possible (slim header, no hero) and keeping the evaluation experience uninterrupted. The CTA appears before and after — never during — the menu content. This is an evaluation page that should feel like a well-formatted restaurant menu, not a marketing page.

---

### PAGE: Gallery — `/gallery`

**Page goal:** Provide visual atmosphere proof that converts lingering interest into confirmed intent.
**Page role in journey:** Trust/proof — the visitor wants to see the space before committing
**Conversion role:** Trust/proof

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Gallery Header | Minimal orientation — name the gallery and let the images take over |
| 2 | Category Filter Tabs | Allow visitors to find the type of visual proof they're looking for |
| 3 | Image Grid | Deliver the atmospheric proof — photography is the entire content of this page |
| 4 | Bottom CTA Band | Convert the visitor whose trust has just peaked from scrolling through the gallery |

---

#### Section Details

**Section 1: Gallery Header**
- **Job:** Orient the visitor with minimum overhead — this page is about images, not copy
- **Content requirements:**
  - Page title: "Gallery" or "Our Restaurant"
  - Optional 1-line atmospheric caption (e.g., "Food, atmosphere, and everything in between")
- **Notes:** No hero image, no background. Keep this section to 2–3 lines maximum. The photography grid should begin within a single viewport height of the page top.

**Section 2: Category Filter Tabs**
- **Job:** Allow the visitor to navigate directly to the type of proof they're seeking — a couple checking the ambiance goes to Interior; a group checking the patio goes to Patio
- **Content requirements:**
  - Tab labels: Food | Interior | Patio | Events
  - Default active tab: Food (highest interest for most visitors)
  - "All" tab as optional first option if photo volume permits
- **Notes:** Tabs filter the grid below without page reload (JavaScript filter or React state). Active tab is visually indicated. If photo volume assessment reveals fewer than 6 usable photos in Patio or Events, collapse: Food | Atmosphere (combining Interior + Patio + Events into one tab).

**Section 3: Image Grid**
- **Job:** Deliver visual proof — photography of the restaurant's best food, space, and experiences
- **Content requirements:**
  - Uniform grid (not masonry) — consistent cell proportions
  - Images per tab: target 6–12 per category (minimum 6 to justify a separate tab)
  - Clicking an image opens a lightbox (full-screen view with next/prev navigation)
  - No captions required — images are self-explanatory
- **Notes:** Lazy loading is required — grid images load as the visitor scrolls, not all at once. No hover overlays with text — the images must speak without labels interrupting them. Lightbox on click/tap with close (X) and keyboard navigation on desktop.

**Section 4: Bottom CTA Band**
- **Job:** Capture the conversion intent that peaks after the visitor has seen the full gallery
- **Content requirements:** Uses CTA Band reusable pattern
  - Headline: timing-aware (e.g., "Like what you see? Join us for dinner.")
  - Primary CTA: "Reserve a Table" → `tel:9059400235`
- **Notes:** This is the only CTA on the gallery page. It does not appear at the top — the visitor must experience the gallery before the conversion ask. Positioned immediately after the grid, before the footer.

---

#### CTA Logic

**Primary CTA:** "Reserve a Table" → `tel:9059400235`
**Primary CTA placement:** Bottom CTA Band only (within the page body), Sticky Header (persistent)
**Secondary CTA:** None
**CTA rationale:** The gallery page is pure proof delivery. Interrupting the visual experience with mid-gallery CTAs would break the trust-building flow. The CTA appears only at the point where trust is highest — after the visitor has scrolled through the full gallery. The sticky header handles any high-intent visitors who are ready before completing the gallery.

---

#### Trust and Proof Placement

**Where proof appears:** The entire gallery page is proof. No separate review or testimonial sections needed here — adding them would dilute the photography's impact.
**Rationale:** Visitors who navigate to the gallery have already seen reviews on the homepage. Repeating reviews here is redundant. The gallery's single trust mechanism is the photography itself.

---

#### Desktop Wireframe Notes

3-column uniform image grid. Tabs above the grid, left-aligned or centered. Grid cells are square or 4:3 ratio — consistent across all images. Desktop lightbox: full-screen overlay with image centered, X button top-right, left/right arrow navigation. Bottom CTA band is full-width with centered content.

---

#### Mobile Wireframe Notes

2-column grid. Tabs remain but are scrollable horizontally if all 4 labels don't fit. Grid cells are square. Tapping an image opens a full-screen lightbox with swipe navigation (left/right swipe for next/previous image). Grid loads progressively — first 6 images load on arrival, additional images load as visitor scrolls. Bottom CTA button is full-width.

---

#### Layout Rationale

The gallery page is the most minimal content page on the site by design. Its structure is: header → tabs → grid → CTA. Nothing else. Adding copy sections, review blocks, or story content here would be an anti-pattern — the visitor came for images. The layout clears the path to the photography as fast as possible and closes with a single well-timed CTA.

---

### PAGE: Private Functions — `/private-functions`

**Page goal:** Convert event planners and group organizers into inquiry submissions or direct phone calls.
**Page role in journey:** Evaluation — the visitor is assessing whether La Grotta can host their event
**Conversion role:** Service/evaluation (secondary conversion path)

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Page Hero | Establish that La Grotta hosts private events and immediately differentiate the offer |
| 2 | What We Offer | Communicate capacity, experience type, and what makes La Grotta right for their event |
| 3 | FAQ | Reduce inquiry friction by answering the questions planners always ask before reaching out |
| 4 | Inquiry Form | Convert — let the planner send their details for follow-up |
| 5 | Phone Alternative | Provide a direct call option for planners who prefer to speak immediately |

---

#### Section Details

**Section 1: Page Hero**
- **Job:** Confirm that this page is about private events and establish the atmosphere and capability immediately
- **Content requirements:**
  - Background image: private dining setup or event-ready table arrangement
  - Page headline: frames private functions clearly
  - 1–2 sentence positioning statement: what kinds of events, the experience
  - Primary CTA: "Enquire Now" — smooth-scrolls to the inquiry form on this page
- **Notes:** Smaller hero than homepage — 50–60vh on desktop, not full viewport. The visitor arrived specifically for private functions; the hero confirms they're in the right place quickly, then the page delivers details.

**Section 2: What We Offer**
- **Job:** Answer the planner's evaluation questions — what kind of space, what capacity, what menus, what experience
- **Content requirements:**
  - 3–4 key feature points: capacity (confirm number), event types (corporate, celebrations, intimate dinners), menu options (fixed menus, custom options if available), atmosphere description
  - One image: private dining setup or event in progress
  - Optional: pricing context (if restaurant discloses — e.g., "fixed menus from $X per person")
- **Notes:** Two-column layout on desktop (text left, image right or vice versa). No full paragraph blocks — use a short intro + feature list or icon+text pairs for scannability. Planners evaluate quickly; dense prose loses them.

**Section 3: FAQ**
- **Job:** Proactively answer the 3–5 questions that planners always ask before contacting — reduces inquiry friction and increases form submission quality
- **Content requirements:**
  - Q: What is the minimum guest count for a private function?
  - Q: Do you offer a custom menu for private events?
  - Q: Is there AV or presentation equipment available?
  - Q: Can I do a site visit before booking?
  - Q: How far in advance should I book?
  - (Confirm actual answers with client — placeholder structure only)
- **Notes:** Accordion layout — questions collapsed by default, expand on click. 3–5 questions max. FAQs must contain real answers, not generic filler. If specific answers are not available before launch, this section can launch with 3 confirmed questions and expand later.

**Section 4: Inquiry Form**
- **Job:** Collect the planner's contact information and event details for follow-up
- **Content requirements:**
  - Form fields: Name (text), Email (email), Occasion / Event Type (text or dropdown), Message (textarea)
  - Submit button: "Send Enquiry"
  - Form success: redirect to `/thank-you`
  - No more than 4 fields — additional information is gathered on follow-up
- **Notes:** Form is the conversion mechanism for this page — it must be above the fold when the visitor scrolls to the bottom of the FAQ section. No CAPTCHA visible (use hidden honeypot or service-side spam protection). Form handler via Resend or Formspree. On submit, redirect to `/thank-you`.

**Section 5: Phone Alternative**
- **Job:** Serve planners who prefer to speak directly rather than submit a form
- **Content requirements:**
  - Brief line: "Prefer to speak with us directly?"
  - Phone number with tap-to-call: (905) 940-0235
  - Email address: lagrottaonmain@gmail.com
- **Notes:** This is a simple text block below the form — not a full section. It acknowledges that some planners want a human conversation before submitting a form.

---

#### CTA Logic

**Primary CTA:** "Enquire Now" (smooth scroll to form) in hero, "Send Enquiry" on form
**Primary CTA placement:** Hero section, form submit button
**Secondary CTA:** Phone number (tap-to-call) below the form
**CTA rationale:** The event planner's conversion action is the inquiry form, not a phone call — event planning requires asynchronous communication for dates, numbers, and details. The form is the right primary mechanism here. The phone alternative respects planners who prefer voice.

---

#### Trust and Proof Placement

**Where proof appears:** The page hero and "What We Offer" section carry implicit trust through specificity (real details about capacity, menus, and event types). No separate review section — the homepage covers social proof for La Grotta overall, and repeating reviews here would interrupt the evaluation-to-conversion flow.
**Rationale:** The planner has likely already visited the homepage. Trust is pre-established. This page's job is evaluation and conversion — not trust-building from scratch.

---

#### Desktop Wireframe Notes

Hero at 50–60vh with text overlay. What We Offer section is two-column (text/feature list + image). FAQ is full-width accordion with questions left-aligned and expand icons right-aligned. Form is centered, max-width ~600px, fields stacked vertically. Phone alternative is centered text below the form. Section spacing is generous throughout — this page is not dense.

---

#### Mobile Wireframe Notes

Hero collapses to 40–50vh. What We Offer stacks: image full-width first, then text. FAQ accordion remains — collapse behavior is unchanged on mobile, but tap targets for accordion toggles must be minimum 44px height. Form goes full-width on mobile — each field full-width, stacked. Submit button full-width, minimum 54px height. Phone alternative below form, centered.

---

#### Layout Rationale

The section sequence on this page follows service/evaluation logic: confirm relevance (hero) → deliver the offer details (what we offer) → reduce objection (FAQ) → collect the conversion (form) → offer an alternative (phone). The FAQ is placed before the form — not after — because planners who have unanswered questions will not submit the form. Answering questions first produces higher-quality, more committed form submissions.

---

### PAGE: Contact — `/contact`

**Page goal:** Make the reservation phone call happen with zero friction.
**Page role in journey:** Primary conversion endpoint
**Conversion role:** Primary conversion

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Headline + Reassurance | Confirm the visitor is in the right place and set a welcoming tone |
| 2 | Phone Number (dominant) | Deliver the primary CTA — the phone number — as the most prominent element on the page |
| 3 | Hours + Address | Remove the practical barriers — when are they open, where exactly are they |
| 4 | Map Embed | Confirm the physical location and support directions |
| 5 | Email + Social | Provide alternative contact for non-urgent inquiries |
| 6 | Minimal Trust Line | A single reassurance element — not a full proof section |

---

#### Section Details

**Section 1: Headline + Reassurance**
- **Job:** Orient the visitor and set expectations for the reservation process
- **Content requirements:**
  - Short headline: "Reserve Your Table" or "Come Dine With Us"
  - 1-sentence reassurance: confirms they can call to book, suggests what to expect (e.g., "Call us to reserve — we'd love to have you")
- **Notes:** This section is 2–3 lines total. No image, no hero. The page gets to the phone number in the next section immediately.

**Section 2: Phone Number**
- **Job:** Make the phone call the most visually dominant and frictionless element on the page
- **Content requirements:**
  - Large-display phone number: (905) 940-0235
  - Tap-to-call link on mobile (wraps the entire phone number)
  - "Call to reserve" label above or below the number
- **Notes:** The phone number should be the largest text element on this page — significantly larger than body copy. On desktop: display it at a headline-equivalent size (think 36–48px range — design system will set exact sizing). On mobile: full-width tap-to-call button treatment, minimum 54px height. This is the only page where the phone number gets this dominant treatment — on all other pages it appears in the header and bottom bar.

**Section 3: Hours + Address**
- **Job:** Remove the practical decision barriers — when can they come, where exactly is it
- **Content requirements:**
  - Full weekly hours (confirm with client — placeholder structure for now)
  - Physical address: 205 Main Street, Unionville, ON L3R 2G8
  - Optional: parking note if Unionville Main Street parking has specifics worth noting
- **Notes:** Two columns on desktop: Hours left, Address right. Clean, scannable formatting — no dense paragraphs. Hours presented as a simple table (Day | Hours). On mobile, stacked.

**Section 4: Map Embed**
- **Job:** Visually confirm the restaurant's location and support visitors who need directions
- **Content requirements:**
  - Google Maps embed — La Grotta On Main at 205 Main Street, Unionville
  - Map height: approximately 300px on desktop, 250px on mobile
- **Notes:** Map is not a decoration — it serves a genuine navigation need for first-time visitors. Unionville Main Street is a specific historic destination; the map confirms the exact location. Ensure embed does not require cookie consent to render in Canada.

**Section 5: Email + Social**
- **Job:** Provide non-phone contact options for visitors who have a non-urgent question or want to connect via social
- **Content requirements:**
  - Email: lagrottaonmain@gmail.com (mailto link)
  - Instagram: @lagrottaonmain (external link)
  - Facebook: facebook.com/lagrottaonmain (external link)
- **Notes:** Simple text-and-icon block. No full section header needed. Positioned after the map — these are secondary contact options, not primary.

**Section 6: Minimal Trust Line**
- **Job:** Provide a single reassurance element for any remaining hesitation — without re-launching the full trust sequence
- **Content requirements:**
  - Single short line: e.g., "⭐ 4.3 on Google · Family-owned since 1996 · Unionville, Ontario"
  - Optional: one short review quote (1 sentence, attributed)
- **Notes:** This is a single line or two, not a section. It must not compete with the phone number for visual weight. It is a quiet reassurance, not a testimonials block.

---

#### CTA Logic

**Primary CTA:** Phone number display + tap-to-call (Section 2)
**Primary CTA placement:** Section 2 — immediately after the headline, before any other information
**Secondary CTA:** Email link (Section 5)
**CTA rationale:** On the contact page, the conversion has already been decided. The visitor arrived here ready to act. Every structural decision on this page removes obstacles rather than building more persuasion. The phone number is front and center, and nothing else on the page competes with it for visual prominence.

---

#### Trust and Proof Placement

**Where proof appears:** Section 6 — a single minimal trust line at the bottom
**Rationale:** The visitor arriving at `/contact` has already been through the trust sequence on the homepage or another page. Repeating the full proof sequence here would be redundant and would add scroll distance between the visitor and the phone number. The minimal trust line exists only as a closing reassurance — not as a persuasion tool.

---

#### Desktop Wireframe Notes

No hero, no full-width image sections. The page is clean and direct. Sections flow top to bottom: headline → phone number (large) → hours/address (two-column) → map (full-width) → email/social (simple) → trust line. Max page width on content columns; map goes full-width. The phone number in Section 2 should have significant vertical padding above and below to give it visual breathing room and dominance.

---

#### Mobile Wireframe Notes

The mobile bottom tap-to-call bar is hidden on this page (redundant). The phone number in Section 2 becomes a full-width tappable button. Hours/address sections stack vertically. Map reduces to 250px height. Email and social links stack vertically with adequate tap target size (44px minimum). The page should be completable in minimal scroll on mobile — all critical information (phone, hours, address) should be visible within the first 2 viewport heights.

---

#### Layout Rationale

The contact page is the most intentionally minimal page on the site. Its job is to be frictionless. Every section that does not directly help the visitor call, find, or contact the restaurant has been excluded. There is no hero, no story section, no review block, no service list — those belong on pages earlier in the user journey. The contact page assumes the decision has been made and removes every possible obstacle between the visitor and the phone number.

---

### PAGE: Thank You — `/thank-you`

**Page goal:** Confirm the Private Functions inquiry was received and set expectations for the next step.
**Page role in journey:** Post-conversion confirmation
**Conversion role:** Structural/utility

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | Confirmation Message | Confirm the form was received and set expectations |
| 2 | Next Step + Phone Option | Tell them what happens next; offer a phone call if they want faster response |
| 3 | Return to Homepage | Give them a clear next action |

---

#### Section Details

**Section 1: Confirmation Message**
- Content: "Thank you for your enquiry" headline, 1–2 sentences confirming receipt and expected response time (e.g., "We'll be in touch within 24 hours")

**Section 2: Next Step + Phone Option**
- Content: What happens next (team will review and reach out), phone number for those who want to follow up immediately

**Section 3: Return Link**
- Content: "Back to Homepage" → `/` — simple text link or button

**Notes:** This page is single-column, centered, minimal. No header image, no marketing content. Maximum 10 lines of content total. Footer is included as standard.

---

#### Desktop + Mobile Wireframe Notes

Single-column centered layout on both. Max-width ~600px for content. Vertically centered on the viewport if content is short. Standard header and footer included.

---

### PAGE: Privacy Policy — `/privacy-policy`

**Page goal:** PIPEDA compliance for data collected via the Private Functions inquiry form.
**Page role in journey:** Structural/utility
**Conversion role:** None

---

#### Section Order

| # | Section | Job |
|---|---|---|
| 1 | Privacy Policy Content | Full legal text — PIPEDA compliant |

**Notes:** Single-column, full-width text. Standard header and footer. No CTA, no images, no marketing content. Standard body text sizing with clear heading hierarchy for each policy section. Generated from a PIPEDA-compliant privacy policy template and customized for La Grotta's data practices (inquiry form: name, email, message).

---

## 8. Assumptions Made

- `[ASSUMPTION]` **Topic:** Gallery category structure (4 tabs). **Why:** Photo volume per category not yet confirmed. **Impact:** If fewer than 6 usable photos exist per category, tabs must collapse (e.g., Food + Atmosphere). Build team must assess before implementing the tab filter.

- `[ASSUMPTION]` **Topic:** Menu content structure (categories). **Why:** Confirmed category names from current site not verified in detail. **Impact:** If menu has significantly more or fewer categories than standard (Starters, Pasta, Mains, Desserts, Drinks), the menu layout logic may need adjustment. Client must confirm current menu is the accurate version to build from.

- `[ASSUMPTION]` **Topic:** Private Functions capacity and details. **Why:** Not captured in discovery. **Impact:** Section 2 of the Private Functions page cannot be fully written without real capacity/menu details from the client. Placeholder structure is defined — content must be supplied before launch.

- `[ASSUMPTION]` **Topic:** Story section content (Section 3, Homepage). **Why:** The family story is referenced but Sebastian's specific narrative, the founding year story, and any notable milestones were not captured in discovery. **Impact:** Agency must write this copy from available sources (current site, Google reviews, Instagram) or request a brief written input from the client.

- `[ASSUMPTION]` **Topic:** FAQ answers for Private Functions. **Why:** Specific answers to planner questions not provided. **Impact:** FAQ section will require client confirmation of answers before launch. Accordion structure is defined; content is placeholder.

- `[ASSUMPTION]` **Topic:** Hours of operation. **Why:** Not confirmed during discovery. **Impact:** Contact page Section 3 (Hours + Address) and the footer will display placeholder hours until client confirms. Must be resolved before launch.

---

## 9. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Photo volume per gallery category | Photos not accessible for quality/volume assessment | Agency at content sourcing | Before gallery is built |
| Menu accuracy and category names | Current site menu may be outdated | Client confirms | Before Menu page is built |
| Hours of operation | Not captured | Client provides | Before build |
| Private Functions capacity + menu options | Not captured | Client provides | Before Private Functions copy is written |
| Family story narrative details | Not captured beyond "29 years, family-owned, Sebastian" | Agency writes from sources, or client provides brief input | Before Homepage copy is written |
| High-res logo file | Not confirmed | Client provides | Before design system begins |

---

## 10. Blockers and Risks

**Blockers:** None that prevent `05-design-system` from starting. The design system can proceed with the wireframe structure above.

**Risks:**
- **Gallery structure risk:** If photo volume forces tab collapse from 4 categories to 2, the gallery header copy and tab labels must be adjusted at build time. This is a content risk, not a structural one — the grid pattern is unchanged.
- **Private Functions content risk:** If client cannot provide capacity/menu/FAQ details before build, this page will launch with thin content. This risks the page's conversion effectiveness for event planners.
- **Story copy risk:** The family story section (Homepage Section 3) is the most important copy block on the site. If agency-written copy is based only on current site and public reviews, it may miss the real story. A short input from the client (3–5 sentences about the restaurant's history) would significantly improve this section.

---

## 11. Handoff to 05-Design-System

**Wireframe PRD status:** Complete

**Instruction for 05-design-system:**
> The wireframe PRD above defines the full section-level structure for all 7 pages. Begin the visual system design with this structure as the foundation. Key structural constraints to preserve:
>
> 1. The sticky header and mobile tap-to-call bottom bar are structural constants — they must be defined as global components in the design system. Every page layout must account for the header height offset.
> 2. The hero on the Homepage is full-viewport-height (100vh desktop, 90vh mobile max) — the design system must not reduce this below 80vh or the atmosphere impact is lost.
> 3. The trust bar (Section 2, Homepage) is a narrow horizontal band immediately below the hero — it must remain visually distinct from both the hero above and the story section below. It is not a full design section; it is a proof stamp.
> 4. The phone number on the Contact page is the largest text element on that page — the design system's type scale must accommodate a display-size phone number (larger than standard headings if needed).
> 5. The gallery grid uses uniform cell sizes (not masonry) — the design system must define a consistent image ratio for gallery cells.
> 6. The FAQ on the Private Functions page uses accordion behavior — an accordion component is required in the design system.
> 7. The mobile bottom bar (tap-to-call) is a fixed-position element — the design system must define it as a component with appropriate z-index and background treatment.
>
> Freedom the design system has:
> - All visual decisions: color usage within the locked palette (black/white/gold), typography scale, spacing rhythm, component styling, border treatments, shadow/depth decisions
> - Animation and motion behavior (within the defined range: between subtle and moderate)
> - Image overlay treatment on hero and section backgrounds
> - Card styling for dish cards, review cards, and gallery items
> - Button shape, weight, and hover states
>
> Priority pages for design (do these first):
> 1. Homepage — highest visual complexity; sets the design register for the entire site
> 2. Gallery — photography-led; image treatment decisions made here inform the rest of the site
> 3. Contact — most structurally unusual (phone-dominant, minimal); needs specific component definition for the display-size phone number

---

## 12. Instructions for Later Skills

### 06-Build Plan
> Page count: 7. Reusable templates: Global Header, Mobile Bottom Bar, CTA Band, Footer, Gallery Grid (full + teaser variants). Component patterns requiring build decisions: accordion (FAQ on Private Functions), gallery grid with tab filter and lightbox, sticky header with mobile hamburger + persistent CTA button, fixed mobile bottom bar, Google Maps embed, LocalBusiness schema on all pages, form with Resend/Formspree handler (Private Functions only), tap-to-call `tel:` links throughout. Pages sharing patterns: Homepage and Gallery share the Gallery Grid component (teaser vs. full). Thank You and Privacy Policy share a minimal single-column template.

### 07+ Feature Folders
> `10-hero`: Homepage hero is full-viewport-height, full-width background image with overlay for text readability. Two CTA buttons visible above the fold on mobile. No split-column layout — full-width immersive. Private Functions hero is 50–60vh, same overlay treatment, smaller scale.
>
> `11-navigation`: Sticky header with logo left, nav links center/right, CTA button rightmost. Mobile: logo left, "Reserve" button center, hamburger right. Full-screen or slide-out mobile menu. Mobile tap-to-call fixed bottom bar is a separate component — always present except on `/contact`.
>
> `12-forms`: Form lives on `/private-functions` only. 4 fields: Name, Email, Occasion, Message. Submit redirects to `/thank-you`. Spam protection via honeypot. Form handler via Resend or Formspree. No form on `/contact`.
>
> `13-social-proof`: Review Strip lives on Homepage only (Section 6). 2–3 Google/OpenTable review cards. Google 4.3★ badge. No Tripadvisor. Trust Bar (Section 2, Homepage) is a separate narrow component — not the same as the review strip.
>
> `15-feature-gallery`: Gallery page at `/gallery`. 4-category tab filter (Food, Interior, Patio, Events). Uniform grid, 3-column desktop / 2-column mobile. Lightbox on click/tap. Lazy loading required. Homepage teaser is a 3×2 (desktop) / 2×3 (mobile) subset with no filter and a "View All Photos →" link.
>
> `17-feature-local-seo`: LocalBusiness schema on all pages. NAP (Name, Address, Phone) consistent in footer on all pages. Google Maps embed on `/contact`. Location-specific copy on Homepage hero tagline and Contact page. No dedicated city pages.
