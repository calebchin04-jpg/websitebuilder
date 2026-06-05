
# PLANNING PRD
**Project:** La Grotta On Main
**Build type:** Redesign
**Date:** 2026-04-17
**Stage:** 02-planning — output complete
**Discovery brief status:** Acceptable with flags

---

## 1. Project Overview

La Grotta On Main is a 29-year-old family-owned Italian and Mediterranean restaurant at 205 Main Street in historic Unionville, Ontario. The business serves couples primarily, and also hosts private functions. The current site at lagrottaonmain.ca is being fully redesigned — it is visually raw, performs poorly on mobile, and fails to communicate the family-owned story and warm atmosphere that are the business's primary conversion drivers. The site's single most important job is to make a couple who found the restaurant online confident enough to pick up the phone and reserve a table.

---

## 2. Planning Summary

This is a story-first, conversion-focused restaurant website where the family-owned narrative and atmosphere photography do the primary persuasion work. The site must feel like a polished, personal restaurant — not a template — and must make the phone call feel like the natural next step. The trust strategy relies on the 29-year tenure, owner identity, and curated Google reviews (4.3★), supported by a photography-led gallery. The build is restrained: five pages, static or near-static, no booking widget, no CMS required unless post-launch editing is confirmed. The primary mobile risk — a couple looking up the restaurant on their phone moments before deciding — is addressed by making tap-to-call the most frictionless action on every screen. Visual design follows the Bull & Last reference: generous whitespace, clean typographic hierarchy, photography-forward layout, existing black/white/gold palette retained.

---

## 3. Critique of Discovery Brief

**Overall brief quality:** Acceptable

**Weaknesses identified:**

> **Category:** Visual Direction
> **Problem:** Only one visual reference provided (Bull & Last). The system standard is 2–3. The design system stage has slightly less directional material to work from.
> **Planning impact:** `05-design-system` will have less reference diversity — the agent will need to derive more rules from the single reference and the vibe description.
> **Resolution:** Flagged for `05-design-system` — agent must extract maximal rules from the Bull & Last reference and apply them strictly. Additional mood research permitted within the same register.

> **Category:** Constraints
> **Problem:** Budget tier not stated, timeline not stated, post-launch content ownership not confirmed.
> **Planning impact:** Stack and CMS decisions cannot be fully resolved. Defaulting to static build; CMS decision flagged as an open issue.
> **Resolution:** Defaulting to Next.js + Tailwind static build. CMS flagged as a decision to resolve before build begins.

> **Category:** Goals
> **Problem:** No measurable website goals were stated in discovery. Business goal (more reservations) was implied, not measured.
> **Planning impact:** Success criteria cannot be tied to specific numbers.
> **Resolution:** Inferred website goals from CTA and business model. Labeled as inferred. No business analytics baseline was available.

> **Category:** Trust Strategy
> **Problem:** Photo sourcing is uncertain — "pull from online" may yield inconsistent or low-resolution images. The planned visual direction is photography-led. If photo quality is poor, the design approach breaks down.
> **Planning impact:** The entire visual strategy is at risk if available photos are insufficient.
> **Resolution:** Flagged as a high-priority risk. Planning instructs the design system and build stages to design for photography-led layout — but photography quality must be assessed before wireframe layout is finalized.

---

## 4. Send-Back to 01-Discovery

*Not triggered. Brief meets the minimum threshold for planning.*

---

## 5. Business Goals

- Increase reservation volume, particularly for dinner service (couples/date-night occasions)
- Increase private function and catering inquiries from the Unionville/Markham area
- Build a digital presence that matches the quality of the in-restaurant experience
- Differentiate La Grotta from newer or chain Italian restaurants in the area through story and authenticity

---

## 6. Website Goals

- **Primary website goal:** Drive inbound phone calls resulting in dinner reservations — specifically from couples in the Unionville/Markham area who found the restaurant via Google search or Instagram.
- Generate measurable private function inquiry contacts (email or phone) — at least one inquiry channel visible and frictionless on the Private Functions page.
- Establish visual credibility within 5 seconds of landing — visitor should immediately perceive the site as the representation of a quality, personal restaurant.
- Achieve full mobile usability — tap-to-call must be the lowest-friction action on every page on mobile.
- Support Google local SEO ranking for "Italian restaurant Unionville" and related terms through structured local signals on the site.

**Primary website goal:** A couple searching "Italian restaurant Unionville" or "date night restaurant Markham" lands on the site, feels the warmth and quality of the restaurant within seconds, and calls the phone number. That call is the conversion.

---

## 7. Core Audience

**Primary audience:** A couple — likely 30–55 — in the Unionville or Markham area planning a dinner out. They want a restaurant that feels special but not intimidating, with authentic Italian food, a warm atmosphere, and confidence that the experience will be worth the occasion. They are comparison-shopping between 2–4 options. The website is their deciding moment. They respond to visual atmosphere, story, and social proof — not just a menu listing.

**Why this audience:** The business's primary revenue driver is dinner service. Couples are the stated primary customer. The primary CTA (phone reservation) matches this audience's decision mode — they compare online, then act via phone.

**What this audience needs from the site to convert:**
1. Immediate atmosphere proof — they need to feel the restaurant before they visit. Photography is the primary persuasion tool.
2. Trust in the quality and authenticity — 29 years, family-owned, a real person running the kitchen, a real story behind the restaurant.
3. Menu confidence — they need to know the food is the caliber they're looking for before committing to a reservation.

**Who this site is NOT for:** Budget-seeking diners, fast-casual customers, tourists looking for a quick lunch. The site should not attempt to attract all diners — it should self-select for the couple willing to invest in a real dinner experience.

---

## 8. Core CTA

**Primary CTA:** "Reserve a Table" — directs to the restaurant's phone number (905-940-0235)

**CTA mechanism:** Phone call. On mobile: tap-to-call link (`tel:` href). On desktop: phone number displayed prominently with instruction to call.

**CTA placement strategy:**
- Sticky header: persistent on all pages, all scroll positions
- Hero section: primary button, above the fold on all devices
- After the food/signature dishes section on the homepage
- Bottom of the Private Functions page
- Contact page: large, obvious, primary element
- Mobile: fixed bottom bar with tap-to-call as a fallback if sticky header is obscured

**CTA tone:** Warm and inviting. Not urgent. The phrasing should feel like an invitation, not a push. "Reserve Your Table" or "Call to Book" — not "Book Now" or "Call Today."

**Secondary CTA:** "View Menu"
**Secondary CTA placement:** Hero section (below primary CTA), food highlight section on homepage, navigation

---

## 9. Strategic Website Direction

La Grotta On Main's website is not a marketing brochure — it is an atmosphere preview. The visitor's primary question is not "what do they serve?" but "will I feel good there?" The site must answer that question emotionally and visually before it answers it informationally. Every page exists to build one belief: this is a real, personal, exceptional place run by people who care about it. The family-owned story — 29 years, the owner's name, the specific character of the restaurant in historic Unionville — must be woven through the site at every level, not siloed to an About section. The site's role in the sales process is to be the final trust confirmation step: the couple has already heard of or searched for La Grotta; the site must make them confident enough to call.

**Positioning translated into site behavior:**
- "29 years, family-owned" → owner story and tenure are present in the hero or within the first scroll — not buried on an About page. The longevity is a structural trust signal, not just a fact.
- "Authentic food, real quality" → signature dishes are shown with photography in a dedicated highlight section, not just listed in a menu link. Food imagery is the visual backbone.
- "Warm atmosphere" → the gallery section carries emotional weight — interior, patio, events, and atmosphere shots establish what the in-restaurant experience feels like.
- "Digital gap" → the current site doesn't sell the experience. The redesign exists to close this gap — every design decision should ask: does this communicate warmth and quality?
- "Phone-only reservations" → the entire conversion path leads to a phone number. There is no friction from forms or booking systems. The CTA is singular and simple.

---

## 10. User Journey

**Journey stages:**

1. **Arrival:** Visitor lands primarily from Google Search ("Italian restaurant Unionville," "date night Markham") or from Google Maps after reading reviews. Secondary arrivals from Instagram. They are in comparison mode — evaluating 2–4 restaurants simultaneously. They are not yet committed.

2. **Orientation (0–5 seconds):** The hero must immediately communicate: (a) this is an Italian restaurant in Unionville, (b) it has warmth and character, (c) there is a clear action to take. The visitor must feel that this is a real, special place — not a generic listing.

3. **Trust building:** The family-owned story, years in business, and owner presence build the first layer of credibility. Google reviews (4.3★) reinforce it. Photography of food, interior, and atmosphere builds emotional confidence. These must appear early in the scroll — trust must be established before evaluation begins.

4. **Evaluation:** The visitor examines the menu to confirm food quality and match their occasion. They may look at the gallery for atmosphere confirmation. If considering a private event, they check the Private Functions page. This is the research phase — the site must make finding this information effortless.

5. **Conversion:** The visitor decides to call. Friction must be zero: the phone number is visible, the CTA is clear, and on mobile the tap-to-call works instantly. No forms, no booking widget, no intermediate steps.

6. **Post-conversion:** Visitor calls, speaks with the restaurant, and books. The site's job is done. No thank-you page needed (phone call closes the loop). The impression they should leave with: "this is clearly the right choice."

---

## 11. Page-Type Responsibilities

**Homepage:**
The homepage has one job: convince a couple that La Grotta On Main is where they want to have dinner. It must establish atmosphere, identity, and credibility within the first two scrolls, then deliver the menu and reservation CTA within reach. The visitor should leave the homepage having answered: "Is this place worth it?" — and the answer must be yes. The primary CTA must be reachable in 0 clicks (visible in hero) and 1 click (sticky header).

**Menu page:**
The menu page's job is confidence-building, not just information delivery. It must make the visitor feel the quality of the food — not just list dishes. If possible, one or two food images accompany the menu. The menu must be readable on mobile without zooming or horizontal scroll. A reservation CTA appears at the top and bottom of the menu page.

**Private Functions page:**
This page serves a secondary audience: planners organizing events, corporate functions, or milestone celebrations. Its job is to communicate capacity, capability, and ease of working with the restaurant. It must answer: "Can they handle my event?" and "How do I reach them?" The CTA here is an email or phone call for inquiry, not a reservation.

**Gallery page:**
The gallery's job is atmosphere proof. It must show the restaurant as it actually is — food quality, interior warmth, patio character, events in progress. The gallery is not decorative. It is a trust-building tool for the visitor who needs to see before they believe. Organized by category (Food, Interior, Patio, Events).

**Contact page:**
The contact page's job is frictionless conversion. Phone number must be the dominant element. Address, hours, map embed, and parking information reduce the final practical barriers. No long contact form — at most a simple inquiry form for private functions (name, email, message).

---

## 12. Content Requirements

**Available:**
- Logo — present on current site; high-res version to be confirmed
- Brand colors — black, white, gold/warm neutrals; confirmed carry-over
- Menu content — on current site at lagrottaonmain.ca; accuracy to be confirmed by client before launch
- Public reviews — Google (4.3★), OpenTable (4.1★), Facebook (82% recommend); available for testimonial content
- Food and atmosphere photography — 150+ photos on Yelp, active Instagram (@lagrottaonmain); quality unconfirmed

**Must be produced or sourced:**
- All written copy — agency writes. This includes hero headline, story section, all page intro copy, CTA labels, and Private Functions pitch copy.
- Curated photo set — agency sources from Yelp and @lagrottaonmain, selects best for design use. Quality assessment required before wireframe layout is finalized.
- Hours of operation — must be confirmed with client for accuracy on Contact page
- Private Functions details — capacity, event types, pricing range (if any) — must be confirmed or provided by client

**Content quality notes:**
Photography is the visual backbone of this design direction. If sourced photos from Yelp and Instagram are low-resolution, inconsistent in lighting, or amateur in quality, the photography-led layout will not achieve the Bull & Last register. This is the highest-risk content item. Assessment must happen before design system work begins on layout. If photo quality is insufficient, a professional photography session must be recommended to the client before the build proceeds.

---

## 13. Missing Content and Assets

| Missing item | Impact | Who resolves it | Timeline dependency |
|---|---|---|---|
| High-resolution logo file | Cannot finalize header, favicon, or brand system without it | Client provides or agency re-exports from current site | Before design system |
| Photo quality assessment | If photos are insufficient, entire visual strategy requires pivot | Agency assesses Yelp + Instagram before layout begins | Before wireframe |
| Confirmed menu accuracy | Menu page will be inaccurate if current site menu is outdated | Client confirms | Before launch |
| Hours of operation | Contact page will be incomplete | Client confirms | Before build |
| Private Functions details | Private Functions page cannot be written without specifics | Client provides | Before copy is written |
| Post-launch CMS decision | If client wants to edit content, stack must change before build | Client or agency decides | Before build plan |

---

## 14. Functional Requirements

**Required:**
- [x] Tap-to-call link on every page — primary mobile CTA mechanism (`tel:9059400235`)
- [x] Phone number displayed in sticky header — persistent on all pages
- [x] Menu page — readable on mobile, no horizontal scroll, no PDF-only solution
- [x] Gallery — image grid organized by category, lightbox or expandable view
- [x] Map embed on Contact page — Google Maps embed for location
- [x] Instagram social link — footer and Contact page (@lagrottaonmain)
- [x] Basic contact/inquiry form — Private Functions page only (name, email, occasion, message)
- [x] Local SEO structure — structured data markup (LocalBusiness schema), correct NAP (Name, Address, Phone) on every page
- [x] Mobile-first responsive layout — all pages fully functional on 375px viewport

**Conditional (if feature is activated):**
- [ ] Instagram feed embed — depends on Instagram API access (@lagrottaonmain confirmed, API access unconfirmed)
- [ ] CMS for content editing — depends on post-launch ownership decision (currently deferred)

---

## 15. Feature Decisions

**Required Now:**

| Feature | Reason |
|---|---|
| Hero section with photography | Primary atmosphere-first impression — removing it eliminates the conversion hook |
| Sticky navigation with phone CTA | The primary CTA must be persistent; this is the conversion rail |
| Family story / About section (integrated into homepage) | The differentiator is the family story; it must be structural, not optional |
| Food highlight section | Menu confidence is required before conversion; photography of signature dishes builds it |
| Google reviews strip (4.3★) | Social proof is required; 4.3★ is a credible, usable signal |
| Gallery page | Visual business — atmosphere proof is a required trust signal for this audience |
| Private Functions page | Secondary conversion path; has its own audience and CTA |
| Menu page | Evaluation stage requirement — audience must be able to confirm food quality |
| Contact page with tap-to-call | Conversion endpoint — must be frictionless |
| Local SEO markup | Unionville/Markham search visibility is the primary acquisition channel |
| Mobile-first layout with tap-to-call bar | Primary audience is making decisions on mobile; friction-free calling is required |

**Useful Optional:**

| Feature | Reason | Include? |
|---|---|---|
| Instagram feed embed | Adds live social proof and atmosphere content; @lagrottaonmain is active | Yes — if API access is available; static gallery fallback if not |
| Analytics / conversion tracking | GA4 + phone call tracking would allow measuring reservation call volume | Yes — include GA4 at minimum; call tracking if client has budget |
| FAQ section on Private Functions page | Reduces inquiry friction; anticipates common event-planning questions | Yes — small, targeted, added to Private Functions page only |

**Deferred:**

| Feature | Reason deferred | Trigger to activate |
|---|---|---|
| Online reservation widget | Reservations are phone-only by client choice; widget adds complexity with no current benefit | Client switches to online booking platform |
| CMS / editable backend | Post-launch ownership unresolved; static build is correct default | Client confirms they want to edit content independently |
| Blog / content marketing | No SEO content strategy defined; client has no stated maintenance plan | Phase 2 if local SEO strategy expands |
| Newsletter signup | No email marketing program referenced | Phase 2 if client builds email list strategy |
| UberEats / third-party ordering embed | Handled externally; no need to integrate | N/A |
| Online payment | No booking or ordering on site | N/A |

---

## 16. Macro UX Principles

**Conversion hierarchy:**
Every page must answer one question first: "Is this place right for my occasion?" The visitor's attention must be guided in this order — (1) atmosphere and identity, (2) trust and story, (3) food quality, (4) the action to take. The phone number is never more than one tap/click away on any device. It must be visible without scrolling on arrival.

**Trust-building sequence:**
Trust must be established before evaluation begins. On the homepage: hero establishes atmosphere → family story section establishes credibility → food photography establishes quality → Google reviews provide social proof → menu link invites evaluation → CTA closes. Do not ask for the conversion before trust is built. Reviews and story must appear above the menu CTA in the scroll order.

**Navigation logic:**
The site has five pages. Navigation must be simple and always visible. Primary nav: Menu, Gallery, Private Functions, Contact. Reservation CTA in the header is not a nav item — it is a persistent action button. Visitors who land on an interior page must be oriented immediately without needing to return to the homepage.

**Mobile priority:**
The mobile experience is the primary conversion path. Key mobile requirements: (1) tap-to-call must be visible without scrolling — sticky header or fixed bottom bar; (2) menu must be readable at mobile font sizes without zooming; (3) gallery must perform acceptably on mobile network speeds — lazy loading required; (4) hero image must not dominate mobile viewport at the expense of the headline and CTA; (5) all touch targets must be minimum 44px.

**Friction reduction goals:**
- Eliminate: PDF-only menu (must be HTML/readable)
- Eliminate: any step between seeing the phone number and calling it
- Eliminate: multi-page or multi-field forms (Private Functions inquiry form is 4 fields max)
- Reduce: scroll distance to first trust signal — story or reviews must appear within 2 viewport heights of the hero
- Reduce: confusion about what the site is — identity (Italian restaurant, Unionville) must be clear within 3 seconds of landing

---

## 17. Success Criteria

**At launch:**
- [ ] Site loads in under 3 seconds on mobile (LCP < 2.5s)
- [ ] Phone number is visible without scrolling on all major pages on mobile (375px viewport)
- [ ] Menu is fully readable on mobile without zooming or horizontal scroll
- [ ] Tap-to-call is functional on all mobile CTAs
- [ ] All 5 pages are complete and linked
- [ ] Google LocalBusiness schema is implemented and validated
- [ ] Gallery loads without blocking page render (lazy loading confirmed)
- [ ] Instagram social link resolves to @lagrottaonmain

**At 90 days:**
- [ ] Site ranks in top 5 Google results for "Italian restaurant Unionville"
- [ ] Site ranks in Google Maps 3-pack for "Italian restaurant Unionville" or "date night Unionville"
- [ ] Reservation call volume is measurably attributed to website (via call tracking or client-reported)
- [ ] Private Functions inquiry contact is accessible and functional

**Design quality bar:**
- [ ] Site does not look AI-generated, template-produced, or generic
- [ ] Visual design applies the design system consistently across all 5 pages
- [ ] Primary CTA is visually dominant on every page without being aggressive
- [ ] Family-owned story is present and felt — not just stated in a paragraph
- [ ] Photography quality matches or exceeds the Bull & Last visual register

---

## 18. Assumptions Made

- `[ASSUMPTION]` **Topic:** Photo quality. **Why:** "Pull from online" was confirmed but quality not assessed. **Impact:** If photos are insufficient, the photography-led visual strategy must be replaced with a typography/illustration-led approach — a significant design pivot. Must be resolved before wireframes are locked.

- `[ASSUMPTION]` **Topic:** Static build / no CMS. **Why:** Post-launch editing preference was not confirmed. **Impact:** If client wants to edit menu, photos, or hours independently, a headless CMS (Sanity or similar) must be added before build begins. This changes the stack and timeline.

- `[ASSUMPTION]` **Topic:** Measurable website goals. **Why:** No analytics baseline or target numbers provided. **Impact:** Success criteria are directional, not numeric. 90-day goals cannot be tied to specific call volumes.

- `[ASSUMPTION]` **Topic:** Instagram feed embed. **Why:** Handle confirmed (@lagrottaonmain) but API access not confirmed. **Impact:** Live feed embed may not be implementable — static curated grid is the fallback.

- `[ASSUMPTION]` **Topic:** No FAQ needed on most pages. **Why:** Client did not raise objection-handling as a concern. **Impact:** If the Private Functions page generates "what's your minimum?" or "do you have AV?" type inquiries, a FAQ addition may be needed post-launch.

---

## 19. Unresolved Issues

| Issue | Why unresolved | Who resolves it | When |
|---|---|---|---|
| Photo quality assessment | Must view Yelp + Instagram photos before committing to photography-led layout | Agency | Before wireframe |
| High-res logo file | Not confirmed available | Client | Before design system |
| Post-launch CMS decision | Client preference not stated | Client or agency default | Before build plan |
| Menu accuracy | Current site menu may be outdated | Client confirms | Before launch |
| Hours of operation | Not captured in discovery | Client confirms | Before build |
| Private Functions specifics (capacity, catering details) | Not captured | Client or sourced from current site | Before copy is written |

---

## 20. Blockers and Risks

**Blockers:**
- Photography quality must be assessed before wireframe layout is finalized. If photos are insufficient, the design direction must be reconsidered. This is the only true blocker before Stage 3.

**Risks:**
- **Photo quality risk (high):** The entire visual strategy depends on photography that has not yet been quality-assessed. If Yelp and Instagram photos are too low-quality, inconsistent, or limited, the build may require recommending a professional photography session — adding cost and timeline that was not discussed with the client.
- **Phone-only mobile risk (medium):** A couple browsing on mobile who can't immediately find or use the phone number will leave. Tap-to-call placement and visibility must be treated as a primary design constraint, not a secondary consideration.
- **Tripadvisor rating risk (low):** Tripadvisor rating (3.3★) is below average. Do not surface this platform anywhere on the site. Google (4.3★) and OpenTable (4.1★) are the only review platforms to reference.

---

## 21. Handoff to 03-Sitemap

**Brief status:** Complete with flags (see Blockers — photo quality must be assessed in parallel)

**Instruction for 03-sitemap:**
> Based on the planning PRD above, produce the full site structure for La Grotta On Main. The sitemap must include exactly 5 pages: Home, Menu, Private Functions, Gallery, Contact. Navigation structure is: primary nav (Menu, Gallery, Private Functions, Contact) + persistent reservation CTA in header. Footer nav mirrors primary nav and adds social links and address. No blog, no online ordering, no service area sub-pages. Local SEO is handled via schema markup and copy — not dedicated location pages. Define section-level structure for each page in the sitemap output so that `04-wireframes` can use it directly.

**Features to activate in sitemap planning:**
- Required: Hero, sticky nav, family story section, food highlights, Google reviews strip, gallery, private functions section, contact with map, local SEO markup, tap-to-call, mobile-first layout
- Optional (include if scope allows): Instagram feed embed, FAQ on Private Functions page, analytics tracking
- Deferred: Online reservation widget, CMS, blog, newsletter, UberEats embed

---

## 22. Instructions for Later Skills

### 04-Wireframes
> The wireframe plan must follow the trust-building sequence from Section 16: atmosphere → story → food quality → social proof → evaluation → CTA. On the homepage, the family story and Google reviews must appear before the menu link in scroll order. The hero must deliver the primary CTA above the fold on mobile (375px). Private Functions page must end with a simple inquiry form (4 fields max). Contact page must lead with the phone number — not a map, not a form. The gallery must be organized by category (Food, Interior, Patio, Events) with a simple filter or tab mechanism.

### 05-Design System
> Visual direction: Bull & Last reference (whitespace, typographic hierarchy, heritage restraint — not color). Existing palette: black, white, gold/warm neutrals — unchanged. Animation: between subtle and moderate — scroll-triggered reveals, no looping or distracting motion. Trust register: mid-premium local — warm and personal, not luxury, not chain. Banned: busy patterns, distracting animation, aggressive CTAs, stock people photography, oversized decorative script fonts as primary type. Font direction: serif or refined sans-serif consistent with a 29-year heritage restaurant. Only one visual reference was provided — design system agent must extract maximal rules from Bull & Last and supplement with same-register research (no color extraction from external references — palette is locked).

### Build and Code Skills (general constraints)
> Stack: Next.js + Tailwind CSS. Static build by default — no CMS unless client confirms post-launch editing need. No booking widget integration. Phone CTA uses `tel:` links only. Menu must be HTML-rendered (no PDF embed). Gallery requires lazy loading for performance. Google LocalBusiness schema required on all pages. GA4 analytics to be included. Instagram embed is conditional on API access — static gallery is the confirmed fallback. All pages must pass Core Web Vitals on mobile. No backend complexity beyond a lightweight contact form (Private Functions inquiry only) — can be handled via a service like Resend or Formspree.
