# WIREFRAME PRD
**Project:** Mr. Rooter Plumbing of Markham
**Date:** 2026-04-20
**Stage:** 04-wireframe — output complete
**Sitemap PRD status:** Acceptable with flags (review count unverified; hero image unconfirmed; city rebate program unverified)
**Pages covered:** 13

---

## 1. Project Overview

Mr. Rooter Plumbing of Markham is a 13-page local plumbing service site serving Markham and York Region, Ontario. The site has two conversion paths — emergency callers (phone call, primary) and scheduled job shoppers (form, secondary) — and is structured so the phone number is never more than one tap/click away. The homepage is the primary conversion surface; 5 individual service pages serve local SEO entry; all pages feed back to the phone number or the /contact form.

---

## 2. Wireframe Summary

**Total pages wireframed:** 13
**Primary CTA mechanism:** Phone call (click-to-call + MobileBottomBar)
**Secondary CTA mechanism:** Contact form (/contact)
**Conversion page:** / (Homepage) for calls; /contact for form submissions
**Reusable templates identified:**
- ServiceDetailTemplate — applies to all 5 service detail pages
- Sticky header + MobileBottomBar — applies to all 13 pages
- CTABand — reused on Homepage, /about, /service-areas, /reviews
- TrustBar — Homepage only (full); service pages may include a condensed version

**Key structural decisions:**
- OfferBanner sits above the header (not dismissible for v1) — it is part of the permanent page flow, not a popup
- Hero does NOT contain a background image full-bleed on mobile — content is above a background image on desktop, stacked on mobile (simplified for conversion speed)
- TrustBar appears immediately below Hero — zero distance between "I see a plumber" and "I see the 4 reasons to trust them"
- FAQ section is included on every service detail page — scheduled shoppers have cost and scope anxiety before calling
- The /contact page form is at the top of the page — no hero, no scroll required to reach the form
- /services/emergency page repeats the phone number 3 times (hero, mid-page, CTA band) — intentional for urgent visitors

---

## 3. Critique of Sitemap PRD

**Overall sitemap PRD quality:** Strong

**Issues identified:**

> **[CONTENT]** Problem: Hero background image source unconfirmed. Impact on wireframing: The hero's visual treatment cannot be fully specified. Resolution: Wireframe defines the structural zones (headline area, CTA area, image area) without specifying image treatment. Design system decides treatment.

> **[LOCAL SEO]** Problem: /service-areas page carries SEO for non-Markham cities without city-specific subpages. Impact on wireframing: The /service-areas page must do more structural work than a typical overview page — it needs named-city content sections to have any keyword relevance. Resolution: Service Areas page wireframe includes individual named-city blocks, not just a list.

> **[REVIEWS]** Problem: Review count unverified. Impact on wireframing: If fewer than 6 reviews exist, the /reviews page is too thin for a standalone page. Resolution: Wireframe is built for 8–12 reviews. If count is lower, reduce to 6 minimum or collapse /reviews into a homepage section and remove the standalone page.

No send-back triggered. Sitemap PRD provides sufficient foundation.

---

## 5. Overall Wireframe Logic

The site is built on a single conversion principle: every visitor should encounter the phone number before they encounter any complexity. The hero answers "who are you and why should I call?" before asking the visitor to do anything. The TrustBar immediately below the hero removes the two most common objections (overtime fear, reliability fear) before the visitor scrolls. Services, reviews, and differentiators follow to serve the comparison shopper who stayed. The /services/emergency page is the most conversion-focused page in the site — the phone number is repeated three times and every section points toward calling. Service detail pages use a shared template: capability confirmation → proof → FAQ → CTA. The contact form page has no hero — it starts with the form at the top because visitors who navigate to /contact are already motivated.

---

## 6. Reusable Section/Component Patterns

---

### PATTERN: OfferBanner

**Used on:** All pages (top of every page, above the header)
**Job:** Surface the $30 off offer to every visitor without interrupting the page flow
**Contains:**
- Offer text: "$30 Off Your Next Plumbing Service — Limited Time Offer"
- Expiry note (optional): "Offer expires September 30, 2026"
- CTA text link: "Schedule Service →" (links to /contact)

**Desktop:** Full-width yellow bar. Centered text. Thin (40px height). Offer text left or centered, CTA link right or inline.
**Mobile:** Full-width, slightly taller (48px). Text centered, CTA link below on very small screens.
**Variations:** None — same on all pages.

---

### PATTERN: StickyHeader

**Used on:** All pages
**Job:** Keep phone number and navigation accessible at all times; never let the primary CTA disappear on scroll
**Contains:**
- Logo (left)
- Main navigation links: Services | About | Service Areas | Reviews (center/left)
- Phone number as click-to-call (desktop, right side of nav)
- Secondary CTA button: "Schedule Service" → /contact (desktop, rightmost)
- Hamburger icon (mobile — replaces all nav links)

**Desktop:** Horizontal bar. Logo left, nav center, phone + CTA right. Becomes compact (reduced padding) on scroll. White background with subtle shadow on scroll.
**Mobile:** Logo center or left, hamburger right. Phone number hidden in header — handled by MobileBottomBar. "Schedule Service" not in mobile header.
**Variations:** Active state on current page's nav link. Service detail pages: "Services" link shows as active.

---

### PATTERN: MobileBottomBar

**Used on:** All pages (mobile only, ≤768px)
**Job:** Provide always-visible call and form CTAs on mobile — emergency callers must never scroll to find the phone number
**Contains:**
- Left button: "Call Now" — (905) 472-9100, tel: link, phone icon
- Right button: "Schedule Service" → /contact, calendar icon

**Desktop:** Hidden (display: none at desktop breakpoint)
**Mobile:** Fixed to bottom of viewport. Full width. Divided equally into 2 buttons. Background: dark (#111827) or brand red for Call Now button with white for Schedule.
**Variations:** None. Present on all 13 pages on mobile.
**Constraint:** All mobile page layouts must include 64px bottom padding to prevent content from being hidden behind this bar.

---

### PATTERN: TrustBar

**Used on:** Homepage (full version); service detail pages (condensed version optional)
**Job:** Immediately remove the top 4 objections after the hero — 24/7 availability, no overtime, local longevity, and quality proof
**Contains:**
- Stat 1: "30+ Years Local" (with year since icon or simple label)
- Stat 2: "Available 24/7" (clock icon)
- Stat 3: "No Overtime Charges" (checkmark or X icon for no)
- Stat 4: "5-Star Rated" (star icon + approximate review count)

**Desktop:** Dark background (#111827). 4 columns, centered horizontally. Icon above or left of text. Full width. Height: 80–100px.
**Mobile:** 2x2 grid (2 columns, 2 rows). Same dark background. Slightly smaller text.
**Variations:** Service pages may use a 2-item condensed version ("24/7 Available | No Overtime Charges") inline within the hero section rather than a full bar below.

---

### PATTERN: CTABand

**Used on:** Homepage, /about, /service-areas, /reviews
**Job:** Provide an urgent, high-contrast call-to-action section mid-page or at page bottom — primarily for emergency callers who scrolled past the hero
**Contains:**
- Headline: "Plumbing Emergency in Markham?" or "Ready to Schedule?"
- Subline: "We answer every call — 24/7, no overtime charges."
- Phone number: large, tappable, prominent
- Secondary link: "Or Schedule Service Online →" (smaller)

**Desktop:** Full-width, red background (#C41515). Centered content. Phone number in large type (2.5rem+). Two-column optional: text left, phone right.
**Mobile:** Stacked. Headline, subline, phone number. Phone number as a large tappable button.
**Variations:** Homepage version includes secondary link to /contact. About page version is simpler.

---

### PATTERN: ServiceCard

**Used on:** Homepage (ServicesGrid), /services (overview)
**Job:** Enable quick identification of service type; route visitors to the correct service detail page
**Contains:**
- Service icon (lucide-react icon)
- Service name (H3 or similar)
- 1–2 sentence description
- "Learn More →" or "Schedule This Service →" link

**Desktop:** Grid — 3 columns on desktop. Cards with subtle border or shadow.
**Mobile:** 2 columns on mobile. Stack to 1 column only at very small screens if needed.
**Variations:** Homepage version — link goes to service detail page. /services overview — same card but may include an additional "Call for This Service" phone link.

---

### PATTERN: ReviewCard

**Used on:** Homepage (ReviewStrip — 3 cards), /reviews page (8–12 cards)
**Job:** Provide social proof through specific customer testimony with attribution
**Contains:**
- Star rating (5 stars, visual)
- Review text (2–4 sentences)
- Customer first name + initial (e.g., "Michael T.")
- Service type if known (e.g., "Drain Cleaning")
- Google attribution badge (small)

**Desktop:** 3-column grid on homepage (ReviewStrip). On /reviews page: 2-column or 3-column grid.
**Mobile:** Single column (stacked) on both homepage and /reviews.
**Variations:** None.

---

### PATTERN: ServiceDetailTemplate

**Used on:** /services/drain-cleaning, /services/sewer-line, /services/water-heater, /services/emergency (modified), /services/backwater-valve
**Job:** Confirm service capability, build trust, answer objections, convert to call or form
**Contains (in order):**
1. PageHero — service name + H1, subline, primary CTA (phone), secondary CTA (form)
2. ServiceBody — description, what's included, common signs/scenarios
3. CondensedTrustBar — 2 stats (24/7, no overtime)
4. WhyChooseUs — 3 bullets (flat-rate, local since 1995, Done Right Promise)
5. RelatedTestimonial — 1 review relevant to this service
6. FAQSection — 2–3 questions with accordion answers
7. ServiceCTASection — phone + form link, repeated
8. RelatedServices — 2–3 links to other service pages

**Desktop / Mobile:** See individual page wireframes. Generally: single column for body content, accordion for FAQ.
**Variations:** /services/emergency uses a modified version with 3× phone repetition and no FAQ (urgency overrides research mode).

---

### PATTERN: PageHero (service pages)

**Used on:** All service detail pages, /about, /service-areas, /reviews, /contact (modified — no hero on /contact)
**Job:** Orient the visitor to what page they're on and present the CTA immediately
**Contains:**
- H1 (service name + location, or page title)
- 1–2 sentence subline
- Primary CTA: phone or form depending on page

**Desktop:** Centered or left-aligned. Light background (not dark, not red — reserve dark/red for homepage hero). Height: 300–400px.
**Mobile:** Reduced height. Stacked. H1 above CTA.
**Variations:** /services/emergency — dark or red background to signal urgency. All others — white or light grey.

---

## 7. Page-by-Page Wireframes

---

### PAGE: Homepage — `/`

**Page goal:** Drive an inbound phone call from a Markham homeowner; give comparison shoppers enough to stay and convert via form.
**Page role in journey:** Primary entry, primary conversion, trust-building hub
**Conversion role:** Primary conversion

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 0 | OfferBanner | Surface the $30 off offer before any content |
| 1 | Hero | Establish local + 24/7 identity; present phone CTA above fold |
| 2 | TrustBar | Remove top 4 objections immediately after the hero |
| 3 | ServicesGrid | Show capability; route visitors to service detail pages |
| 4 | WhyUs | Prove the 3 differentiators that matter most |
| 5 | ReviewStrip | Social proof for scheduled shoppers; 3 testimonials |
| 6 | ServiceAreas | Confirm geographic coverage; name the cities |
| 7 | CTABand | Emergency re-engagement CTA for visitors who scrolled past the hero |
| 8 | ContactBlock | Scheduled shopper form + hours + contact details |

---

#### Section Details

**Section 0: OfferBanner**
- **Job:** Capture attention with the discount before the hero — incremental conversion incentive
- **Content requirements:**
  - "$30 Off Your Next Plumbing Service — Limited Time Offer"
  - Expiry date (September 30, 2026)
  - CTA link: "Schedule Service →"
- **Notes:** Yellow (#F59E0B) background. Thin bar — does not compete visually with the hero below it.

**Section 1: Hero**
- **Job:** Answer three questions in 5 seconds: (1) Is this a Markham plumber? (2) Are they available now? (3) How do I call?
- **Content requirements:**
  - H1: Locality + urgency — e.g., "Markham's 24/7 Emergency Plumber" or "Plumbing Emergency? We're On Our Way."
  - Subline (1–2 sentences): Reinforces no overtime, local since 1995, or Done Right Promise
  - Primary CTA: "(905) 472-9100 — Call Now" (phone button, large, red)
  - Secondary CTA: "Schedule a Service →" (outlined or text link, smaller)
  - Micro-trust signals (inline, below CTA): 3 small badges — "No Overtime Charges" | "Available 24/7" | "Local Since 1995"
  - Background image zone: full-height hero with overlay. Image: plumbing van, technician at work, or Markham context. (Stock image — see asset requirements.)
- **Notes:** Phone number must be tappable above fold on mobile without any scroll. The three micro-trust signals are the minimum trust that must appear before the fold — do not cut them on mobile.

**Section 2: TrustBar**
- **Job:** Immediately after the hero, deliver 4 trust proof points before the visitor scrolls past them
- **Content requirements:**
  - 30+ Years Local
  - Available 24/7
  - No Overtime Charges
  - 5-Star Rated (with Google review badge or count)
- **Notes:** Dark background. Appears immediately below hero — no padding gap between hero and TrustBar. Visitors should feel a smooth flow from "I see the plumber" to "I see why to trust them."

**Section 3: ServicesGrid**
- **Job:** Confirm capability and route evaluation-stage visitors to the right service detail page
- **Content requirements:**
  - Section headline: "Residential Plumbing Services in Markham" or similar
  - 5 service cards (ServiceCard pattern): Drain Cleaning, Sewer Line, Water Heater, Emergency Plumbing, Backwater Valve & Sump Pump
  - Footer link: "View All Services →" → /services
- **Notes:** Light background (white or surface-2). This section is for the scheduled shopper — the emergency caller has already converted via the hero phone number.

**Section 4: WhyUs**
- **Job:** Prove the 3 differentiators that are conversion-critical — flat-rate pricing, no overtime, Done Right Promise
- **Content requirements:**
  - Section headline: "Why Markham Trusts Mr. Rooter" or similar
  - 4 columns with icons:
    1. Upfront Flat-Rate Pricing — "You know the price before we start. No surprises."
    2. No Overtime Charges — "Same rate at 2am, weekends, or holidays."
    3. Done Right Promise® — "If you're not satisfied, we'll make it right."
    4. Locally Owned Since 1995 — "Your Markham neighbour for 30+ years."
- **Notes:** Slightly different background from ServicesGrid (alternate surface) to create visual rhythm. Icons: lucide-react. This is not generic "we care about quality" copy — each point has a specific, provable claim.

**Section 5: ReviewStrip**
- **Job:** Provide social proof from real named customers for the comparison-shopping audience
- **Content requirements:**
  - Section headline: "What Markham Homeowners Say" or similar
  - 3 ReviewCards (ReviewCard pattern): customer name, service type, star rating, 2–4 sentence review
  - Footer link: "Read All Reviews →" → /reviews
  - Optional: Google rating badge showing aggregate score
- **Notes:** White background. Reviews must be specific (named service, named outcome) — not generic ("great service"). If generic reviews are all that's available, select the most specific ones and note for copy editing.

**Section 6: ServiceAreas**
- **Job:** Confirm geographic coverage; prevent "do they serve my area?" drop-off; local SEO keyword reinforcement
- **Content requirements:**
  - Section headline: "Serving Markham and All of York Region"
  - Named cities in a visual format (list, grid, or styled badges): Markham, Stouffville, Unionville, Richmond Hill, Thornhill, Vaughan (confirm coverage), York Region broadly
  - 1–2 sentence statement: "Locally-owned and operated since 1995. We know these streets."
  - CTA: "See Full Service Area →" → /service-areas
- **Notes:** Can use an alternate surface color or a subtle map background. Does not need to be a large section — this is a quick reassurance element, not a full page.

**Section 7: CTABand**
- **Job:** Re-engage visitors who scrolled past the hero and may now be ready to call after seeing the proof above
- **Content requirements:**
  - Headline: "Plumbing Emergency in Markham?"
  - Subline: "We answer every call, 24/7. No overtime charges."
  - Phone: (905) 472-9100 — large, tappable
  - Secondary link: "Or schedule online →" → /contact
- **Notes:** Red background (#C41515), white text. Full-width. This is the most visually intense section on the page — use it as a pattern interrupt after the measured, professional WhyUs and ReviewStrip sections above.

**Section 8: ContactBlock**
- **Job:** Provide a minimal form for scheduled shoppers who are ready to request service; also serve as the page footer's contact information
- **Content requirements:**
  - Section headline: "Request a Free Estimate" or "Schedule Your Service"
  - Form fields: Name, Phone, Email, Service Type (dropdown), Urgency (radio: Emergency / Scheduled), Message (optional textarea)
  - Submit button: "Send My Request" or "Request Service"
  - Sidebar (desktop): Phone (905) 472-9100 with 24/7 note, Hours, Address with service area note
- **Notes:** Two-column on desktop (form left, info sidebar right). Stacked on mobile (form first, info below). Form submit → server action → Resend email → redirect to /thank-you. If Urgency = Emergency is selected, do not disable the form, but show a prominent note: "For fastest response, call us directly: (905) 472-9100."

---

#### CTA Logic

**Primary CTA:** Call (905) 472-9100 — click-to-call phone button
**Primary CTA placement:** Hero (above fold), micro-trust badge area, CTABand (Section 7), sticky header, MobileBottomBar
**Secondary CTA:** Schedule Service → /contact
**Secondary CTA placement:** Hero (alongside primary, smaller), ContactBlock (Section 8), MobileBottomBar
**CTA rationale:** Emergency callers convert in the hero or via MobileBottomBar — they don't scroll. Comparison shoppers who scroll through the full page will hit the CTABand (urgent re-engagement) and then the ContactBlock (form path). This covers both journeys without forcing either audience to hunt for their preferred conversion path.

---

#### Trust and Proof Placement

**Where proof appears:**
- Hero: 3 inline micro-trust badges (no overtime, 24/7, local since 1995) — before any scroll
- TrustBar: 4 stats — immediately after hero, zero delay
- WhyUs: 4 differentiators with specific claims — mid-page
- ReviewStrip: 3 named customer testimonials — after differentiators are established
- CTABand: "24/7, no overtime charges" reminder near the conversion action

**Rationale:** Trust signals appear immediately (above fold in hero, then TrustBar) because the primary objection — "can I trust this plumber?" — must be answered before the visitor reaches any decision point. The sequence is: orient (hero) → reassure quickly (TrustBar) → evaluate capability (ServicesGrid) → understand why them specifically (WhyUs) → confirm with social proof (ReviewStrip) → act (CTABand / ContactBlock).

---

#### Desktop Wireframe Notes

Header is sticky with full nav, phone number, and "Schedule Service" button. OfferBanner sits above the header in the page flow. Hero is full viewport height on desktop with background image (gradient overlay for text legibility). TrustBar is a full-width dark bar. ServicesGrid is a 3-column grid (5 cards — the 5th card can span or be centered in a 3-column grid, or use 2+3 layout). WhyUs is a 4-column layout. ReviewStrip is a 3-column layout. ServiceAreas and CTABand are full-width single-column centered. ContactBlock is two-column (form left, sidebar right). Footer follows ContactBlock.

---

#### Mobile Wireframe Notes

Hero content stacks vertically: headline → subline → primary call button → secondary form link → 3 micro-trust badges (row of 3). Background image may be simplified or removed for load speed — dark gradient background is acceptable. TrustBar stacks to 2×2 grid. ServicesGrid goes to 2 columns (5th card: full width or centered). WhyUs stacks to 2×2. ReviewStrip goes to single column (show 1 card, with "next" indicator or all 3 stacked). ServiceAreas: city badges wrap naturally. ContactBlock: form full width, sidebar below form. MobileBottomBar is always present — account for 64px clearance at all page content bottoms.

---

#### Layout Rationale

The section order is a trust-first sequence: establish identity → remove objections → prove capability → prove differentiation → prove via social proof → re-engage → convert. This order serves both conversion paths. Emergency callers stop at Section 1 (hero). Comparison shoppers move through 1→2→3→4→5→7→8. Neither audience is made to wait for the content that matters most to them.

---

### PAGE: Services Overview — `/services`

**Page goal:** Help visitors identify their service and route them to the correct detail page quickly.
**Page role in journey:** Wayfinding / evaluation entry
**Conversion role:** Structural routing page (not a primary conversion surface)

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | PageHero | Orient visitor: "All Plumbing Services in Markham" |
| 2 | AllServicesGrid | Show all 5 services with descriptions and links to detail pages |
| 3 | CTABand | Emergency re-engagement for visitors who arrived here from search |

---

#### Section Details

**Section 1: PageHero**
- **Job:** Confirm the visitor is in the right place and provide immediate phone CTA
- **Content requirements:**
  - H1: "Plumbing Services in Markham, Ontario"
  - Subline: "Residential and commercial plumbing — emergency and scheduled service"
  - Primary CTA: phone number (for visitors who don't need to research further)
- **Notes:** Light background (not red or dark — this is a calm wayfinding page). No background image needed.

**Section 2: AllServicesGrid**
- **Job:** Present all 5 services clearly so visitors can self-identify and click through
- **Content requirements:**
  - 5 service cards (expanded ServiceCard pattern): icon, service name, 3–4 sentence description, "Learn More" link
  - Optional: "Emergency? Call us now" callout card as a 6th card in the grid or as a banner above the grid
- **Notes:** Desktop 3-column, mobile 2-column. Cards should be the main content — no decorative padding.

**Section 3: CTABand**
- **Job:** Catch visitors who arrived from search, scanned the page, and are ready to call
- **Content requirements:** Standard CTABand pattern (phone + subline)
- **Notes:** Same CTABand pattern as homepage.

---

#### CTA Logic

**Primary CTA:** Call (905) 472-9100 — in PageHero and CTABand
**Secondary CTA:** Service detail page links from cards
**CTA rationale:** This page's primary job is routing, not direct conversion. But visitors who landed here via search may be in a hurry — the phone number in the hero and CTABand catches them.

---

#### Desktop / Mobile Wireframe Notes

Desktop: full-width hero, 3-column service grid, full-width CTABand. Mobile: single-column hero, 2-column service grid (stacked at very small screens), full-width CTABand. MobileBottomBar handles the persistent mobile phone CTA.

---

#### Layout Rationale

This is the simplest page in the site — its only job is to answer "what services do they offer?" and route the visitor to the right detail page. It should be fast to scan: headline, card grid, done. The CTABand at the bottom catches any visitor who knows what they want but hasn't clicked a service card yet.

---

### PAGE: Service Detail Pages — `/services/[slug]`
*(Single template — applies to all 5 service detail pages. Variations noted per-page.)*

**Page goal:** Confirm capability for this specific service, remove objections, convert to call or form submission.
**Page role in journey:** Local SEO entry point + evaluation stage + conversion
**Conversion role:** Service evaluation → conversion

---

#### Section Order (ServiceDetailTemplate)

| # | Section name | Job |
|---|---|---|
| 1 | ServiceHero | H1 with service + location, phone CTA, key claim |
| 2 | ServiceBody | Describe the service, what's included, common scenarios |
| 3 | CondensedTrustBar | Quick 2-item reassurance: 24/7 + no overtime |
| 4 | WhyChooseUs | 3 bullets: flat-rate, local since 1995, Done Right Promise |
| 5 | ServiceTestimonial | 1–2 reviews relevant to this service |
| 6 | FAQSection | 2–3 accordion questions addressing cost/scope anxiety |
| 7 | ServiceCTASection | Phone + "Schedule This Service" link, repeated |
| 8 | RelatedServices | 2 links to other relevant service pages |

**Emergency service page variation:** Section 1 uses a dark/red background and larger phone number. Section 3 is removed (already in the hero). FAQSection is replaced with a Scenarios section (what to do if X). Phone number appears at sections 1, 4, and 7.

---

#### Section Details

**Section 1: ServiceHero**
- **Job:** Tell the search engine and the visitor exactly what this page is for; deliver the CTA immediately
- **Content requirements:**
  - H1: "[Service Name] in Markham, Ontario" (e.g., "Drain Cleaning in Markham, Ontario")
  - Subline (1–2 sentences): What this service solves, or a key claim
  - Primary CTA: phone button
  - Secondary CTA: "Schedule This Service →" → /contact
- **Notes:** Light grey or white background for most services. Emergency service: dark or red background.

**Section 2: ServiceBody**
- **Job:** Confirm that this plumber actually does this service and explain what's included
- **Content requirements:**
  - Service description (2–3 paragraphs): What the service involves, common scenarios, what to expect
  - Bulleted list: "What's included" or "Signs you need this service"
  - One image: relevant to the service (stock acceptable; must not be clip art or icon-level illustration)
- **Notes:** Two-column on desktop (text left, image right). Single-column on mobile. The image is not decorative — it should show the work being done.

**Section 3: CondensedTrustBar**
- **Job:** Re-establish the top 2 objection removers before asking for trust deeper in the page
- **Content requirements:**
  - "Available 24/7"
  - "No Overtime Charges"
- **Notes:** Condensed, 2-item version of the full TrustBar. Dark background. Can be a narrow band.

**Section 4: WhyChooseUs**
- **Job:** Differentiate from generic competitors
- **Content requirements:**
  - 3 points with icons: Flat-rate pricing, Local since 1995, Done Right Promise®
  - Each point: 1 headline + 1 sentence explanation
- **Notes:** Light background (alternate from ServiceBody). Horizontal on desktop, stacked on mobile.

**Section 5: ServiceTestimonial**
- **Job:** Provide service-specific social proof
- **Content requirements:**
  - 1–2 ReviewCard(s) specifically mentioning this service type
  - Star rating, customer name
- **Notes:** If no service-specific review is available, use a general 5-star review that mentions professionalism or pricing. Flag for copy editor to find a more specific one.

**Section 6: FAQSection**
- **Job:** Address the top 2–3 objections or questions that prevent conversion for this specific service
- **Content requirements:**
  - 2–3 accordion FAQ items
  - Drain Cleaning FAQs: "How long does it take?", "Do you offer same-day service?", "Can you fix recurring clogs?"
  - Sewer Line FAQs: "Is trenchless available?", "How do I know if I need replacement vs. repair?", "Does this cost more than a basic repair?"
  - Water Heater FAQs: "When should I replace vs. repair?", "How long does installation take?", "Do you install tankless?"
  - Backwater Valve FAQs: "What is the City of Markham rebate?", "Do I need both a backwater valve and sump pump?", "How long does installation take?"
- **Notes:** Accordion component. One question open by default (the first one). These are conversion-critical on service pages — do not cut them.

**Section 7: ServiceCTASection**
- **Job:** Convert the visitor after they've read the full page
- **Content requirements:**
  - Headline: "Ready to Schedule Your [Service Name] in Markham?"
  - Phone: (905) 472-9100 — large, tappable
  - Secondary: "Or Schedule Online →" → /contact
- **Notes:** White or light grey background. Not as heavy as the full CTABand — this is a clean, professional close to the page.

**Section 8: RelatedServices**
- **Job:** Keep visitors who are evaluating options on the site; reduce bounce
- **Content requirements:**
  - "You Might Also Need:" (or similar)
  - 2 service cards (condensed): service name + 1-line description + link
- **Notes:** Footer-adjacent. Small, unobtrusive. Just links — not full cards with descriptions.

---

#### CTA Logic

**Primary CTA:** Call (905) 472-9100 — in ServiceHero and ServiceCTASection (+ 3× on /services/emergency)
**Secondary CTA:** Schedule Service → /contact
**CTA rationale:** Visitors landing on service pages from search are usually more specific in their intent than homepage visitors — they know what service they need. CTA can be more service-specific ("Schedule Your Drain Cleaning") rather than generic. Phone should still dominate.

---

#### Trust and Proof Placement

- ServiceHero: immediate CTA (no trust here — they already searched for this service)
- CondensedTrustBar: objection removal before the page asks for deeper engagement
- ServiceTestimonial: after the "this is what we do" section — proof at the evaluation moment
- FAQSection: addresses cost/scope anxiety that prevents the final call

---

#### Desktop / Mobile Wireframe Notes

Desktop: ServiceHero is centered or left-aligned with 400px height. ServiceBody: two-column (text 60%, image 40%). CondensedTrustBar: full-width dark band. WhyChooseUs: 3-column. ServiceTestimonial: 1 card centered or 2 cards side by side. FAQSection: single-column accordion. ServiceCTASection: centered, clean. RelatedServices: 2 cards side by side.

Mobile: All sections stack to single column. ServiceHero reduced height. ServiceBody: image below text. CondensedTrustBar: 2 items side by side. WhyChooseUs: stacked list. FAQSection: full-width accordion (good for mobile — touch-friendly).

---

#### Layout Rationale

Service pages are written for two entry types: someone in an emergency (who converts at Section 1) and a scheduled shopper doing research (who reads through to FAQSection and converts at ServiceCTASection). The template accommodates both by leading with the CTA (Section 1) and ending with the CTA (Section 7) with the trust-building and research content in between.

---

### PAGE: Emergency Plumbing — `/services/emergency`
*(Variant of ServiceDetailTemplate — higher urgency throughout)*

**Section Order (Emergency Variant)**

| # | Section name | Job |
|---|---|---|
| 1 | EmergencyHero | Urgent H1, massive phone CTA, dark/red background |
| 2 | EmergencyReassurance | "We answer every call" + no overtime statement + 3 quick bullets |
| 3 | ScenariosSection | Common emergencies: burst pipe, flooding, no hot water, backed-up sewer |
| 4 | WhyChooseUs | Same as standard template |
| 5 | ServiceTestimonial | Emergency-related review if available |
| 6 | EmergencyPhoneRepeat | Phone number displayed a second time with "Available Now" |
| 7 | RelatedServices | Water heater, sewer line, drain cleaning |

**Notes:** No FAQ on this page — urgency overrides research mode. Phone number appears at sections 1, 6, and the sticky header/MobileBottomBar. Do not make visitors scroll for the phone number. Background of EmergencyHero is dark (#111827) or brand red (#C41515) — the most visually intense hero on the site.

---

### PAGE: About — `/about`

**Page goal:** Confirm that Mr. Rooter Markham is a real, accountable, locally-owned business with 30+ years in the community.
**Page role in journey:** Trust/credibility — evaluation stage for scheduled shoppers
**Conversion role:** Trust/proof page

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | PageHero | "About Mr. Rooter Plumbing of Markham" — simple orientation |
| 2 | BusinessStory | Founded 1995 locally, Neighbourly franchise, real local people |
| 3 | CommitmentsSection | Done Right Promise, licensed/insured, flat-rate, no overtime |
| 4 | AffiliationsBar | Neighbourly logo, IFA logo, licensed/insured badge |
| 5 | CTABand | "Have a plumbing need? Call us." |

---

#### Section Details

**Section 1: PageHero**
- H1: "About Mr. Rooter Plumbing of Markham"
- Subline: "Markham's trusted plumber since 1995"
- CTA: phone number (subtle, not urgent — this is a trust page)

**Section 2: BusinessStory**
- 2–3 paragraphs: founded 1995, locally owned franchise, serves Markham and York Region
- Key points: not a call centre, real local people, 30+ years of community service
- One image: team or van photo if available; branded exterior or workspace if not
- Note: If no team photos are available, use a Markham context image (cityscape, local landmark) or omit image entirely

**Section 3: CommitmentsSection**
- 3–4 commitment items with icons: Done Right Promise® (explained), Licensed & Insured, Flat-Rate Pricing, No Overtime Charges
- Each with a brief explanation of what it means in practice (not just a label)

**Section 4: AffiliationsBar**
- Neighbourly network logo, IFA badge, licensed/insured stamp
- Light background. Simple, clean alignment.

**Section 5: CTABand**
- Standard CTABand pattern
- Headline: "Have a plumbing need in Markham?"

---

#### CTA Logic

**Primary CTA:** Phone — at PageHero (subtle) and CTABand (strong)
**Secondary CTA:** "Schedule Service" link near CTABand
**CTA rationale:** About page visitors are already interested — they're verifying trust, not being convinced. CTA should be present but not aggressive. CTABand at the end catches the visitor once trust is established.

---

#### Desktop / Mobile Wireframe Notes

Desktop: BusinessStory is two-column (text left, image right). CommitmentsSection: 4-column or 2×2 grid. AffiliationsBar: centered row of logos. Mobile: all sections stack. BusinessStory: image below text. CommitmentsSection stacks to 2×2.

---

### PAGE: Contact — `/contact`

**Page goal:** Convert motivated scheduled shoppers via a minimal, friction-free form.
**Page role in journey:** Primary conversion for form path
**Conversion role:** Primary conversion (form)

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | ContactHero | "Request a Free Estimate" — form immediately visible |
| 2 | ContactForm | The form — name, phone, email, service, urgency, message |
| 3 | ContactInfo | Phone (24/7), address, hours — sidebar on desktop |

**Critical note:** There is NO hero section with a background image or marketing content on this page. The form must be the first thing the visitor sees. No scroll required to reach Form Field 1 on mobile.

---

#### Section Details

**Section 1: ContactHero (inline — not a full hero)**
- H1: "Request a Free Estimate" or "Schedule Your Service"
- Subline: "We'll be in touch within a few hours. For emergencies, call us directly."
- Phone: (905) 472-9100 with "24/7 Emergency Line" label — present above the form for emergency escalation

**Section 2: ContactForm**
- Fields (in order): Name (text), Phone (tel), Email (email), Service Type (select: Drain Cleaning / Sewer Line / Water Heater / Emergency / Backwater Valve & Sump Pump / Other), Urgency (radio buttons: Emergency — Need Service Today / Scheduled — Within a Few Days), Message (textarea, optional, labeled "Anything else we should know? (Optional)")
- Submit button: "Send My Request" or "Request Service"
- Microcopy below submit: "We typically respond within 2 hours during business hours."
- Conditional display: If Urgency = Emergency is selected, show an inline message: "For the fastest response, call us directly: (905) 472-9100" — do not disable the form, just surface the phone path.

**Section 3: ContactInfo**
- Phone: (905) 472-9100 with 24/7 label
- Hours: Mon–Sun (list hours)
- Address + service area note
- Note on email: if they want to send email directly (optional)

---

#### CTA Logic

**Primary CTA:** Form submit button
**Phone as escape hatch:** Phone number visible above the form and in the sidebar. Emergency selectors surface it inline.
**CTA rationale:** This page is for motivated scheduled shoppers — they're already committed to contacting. Remove all friction: no extra content, no competing CTAs (beyond the phone emergency escalation). The form is the page.

---

#### Desktop / Mobile Wireframe Notes

Desktop: Two-column. Form on the left (60–65% width). ContactInfo sidebar on the right (35–40%). Form is above the fold — no marketing content above it except the ContactHero (which is brief). Mobile: Single-column. ContactHero (brief) → form → contact info below. Form fields full width. Radio buttons large enough for thumb tapping. MobileBottomBar provides the always-visible call escape hatch.

---

### PAGE: Service Areas — `/service-areas`

**Page goal:** Confirm geographic coverage for visitors from non-Markham cities; provide local keyword content for SEO.
**Page role in journey:** Reassurance + local SEO
**Conversion role:** Trust/credibility (geographic)

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | PageHero | "Serving Markham and All of York Region" |
| 2 | CoverageIntro | What "local" means here: 30+ years, know the streets, fast response |
| 3 | CityBlocks | Named city sections with 1–2 paragraphs each |
| 4 | CTABand | Phone CTA |

---

#### Section Details

**Section 3: CityBlocks**
- 5–6 blocks, one per named area: Markham, Stouffville, Unionville, Richmond Hill, and York Region broadly
- Each block: City/area name (H2 or H3), 1–2 sentences about serving that area, local context if possible (e.g., for Stouffville: "We serve homeowners in Stouffville's growing residential communities with the same 24/7 availability and flat-rate pricing.")
- Layout: 2-column blocks on desktop, single-column on mobile

**Notes:** These blocks carry the local SEO weight for non-Markham cities. Copy must include city name naturally. Do not stuff keywords — write naturally about serving each area.

---

#### Desktop / Mobile Wireframe Notes

Desktop: CityBlocks in a 2-column grid. Mobile: stacked single column. PageHero is minimal (300px). CTABand full width at bottom.

---

### PAGE: Reviews — `/reviews`

**Page goal:** Provide trust depth for high-consideration shoppers who want more social proof than the homepage ReviewStrip.
**Page role in journey:** Trust/proof — evaluation stage depth
**Conversion role:** Trust/proof page

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | PageHero | "What Markham Homeowners Say" + Google aggregate rating |
| 2 | ReviewsGrid | 8–12 ReviewCards in a grid |
| 3 | CTABand | "Convinced? Let's get your plumbing sorted." |

---

#### Section Details

**Section 1: PageHero**
- H1: "Customer Reviews — Mr. Rooter Plumbing of Markham"
- Google aggregate: star rating + review count + Google logo
- Subline: "Real reviews from Markham homeowners — see what our customers say."

**Section 2: ReviewsGrid**
- 8–12 ReviewCards
- Desktop: 3-column grid. Mobile: single-column.
- Reviews sorted by quality — most specific and outcome-oriented reviews first
- Each review includes: service type (if available), city/area (if available), star rating, review text, customer name

**Section 3: CTABand**
- Standard CTABand. Headline: "Ready to Book Your Service?"

---

### PAGE: Thank You — `/thank-you`

**Page goal:** Confirm form submission, set expectations, provide emergency escalation.
**Page role in journey:** Post-conversion
**Conversion role:** Structural/utility

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | ConfirmationBlock | "Request received" + what happens next |
| 2 | EmergencyEscalation | Phone number for urgent needs |
| 3 | ReturnLink | "Back to homepage" |

---

#### Section Details

**Section 1: ConfirmationBlock**
- Headline: "Your request has been received!"
- Body: "A member of our team will be in touch within 2 hours during business hours."
- Checkmark or success icon.

**Section 2: EmergencyEscalation**
- "Need help sooner? Call us directly:"
- Phone: (905) 472-9100 — large, tappable
- "We answer 24/7."

**Section 3: ReturnLink**
- Text link or button: "Return to Homepage"

**Notes:** No navigation distractions on this page. Minimal, clean. No competing CTAs. No MobileBottomBar interference — but MobileBottomBar is technically still present (it's on all pages).

---

### PAGE: Privacy Policy — `/privacy-policy`

**Page goal:** Legal compliance for PIPEDA (Canadian privacy law).
**Page role in journey:** Utility/legal
**Conversion role:** Structural/utility

---

#### Section Order

| # | Section name | Job |
|---|---|---|
| 1 | PageHero (minimal) | "Privacy Policy" title |
| 2 | PolicyContent | Full legal text |

**Notes:** No CTABand. No ReviewStrip. Standard legal page structure. Full-width single column. Header and footer present.

---

## 8. Assumptions Made

- `[ASSUMPTION]` **Topic:** OfferBanner is static (not dismissible). **Why:** Simpler implementation, consistent visibility. **Impact:** If the offer expires or changes, a code update is required. If this is frequent, reconsider.

- `[ASSUMPTION]` **Topic:** Hero does not include a full-bleed image on mobile. **Why:** Image-heavy heroes slow mobile load; emergency callers are on mobile. Desktop gets the full hero image. **Impact:** Design system must define the mobile hero treatment (dark gradient, no image, or a small image — not full bleed).

- `[ASSUMPTION]` **Topic:** FAQ section on service pages uses accordion (one open at a time). **Why:** Common pattern, mobile-friendly, expected behavior. **Impact:** Design system must define the accordion component.

- `[ASSUMPTION]` **Topic:** /contact has no hero section with background image. **Why:** Form must be above the fold; any marketing content above it pushes the form down. **Impact:** If design system needs a visual element above the form, it must be a simple heading block (no hero height).

- `[ASSUMPTION]` **Topic:** MobileBottomBar shows on /thank-you and /privacy-policy. **Why:** It's a global component. **Impact:** May feel unnecessary on /thank-you — consider hiding it post-conversion if it creates visual clutter.

- `[ASSUMPTION]` **Topic:** /services/emergency uses dark/red hero background. **Why:** Urgency differentiation from other service pages. **Impact:** Design system must define this as the "emergency variant" of the PageHero component.

---

## 9. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Hero background image treatment | No image sourced yet | Agency (stock sourcing) | Before design: homepage hero |
| About page: team photo or not | No team photos confirmed | Client | Before design: about page |
| City rebate program for backwater valve | Not verified | Agency / Client | Before copy: backwater-valve page |
| MobileBottomBar visibility on /thank-you | Judgment call on UX | 05-design-system | Design stage |
| Map embed on /service-areas | Whether to include a visual coverage map | Agency | Build stage — low priority |

---

## 10. Blockers and Risks

**Blockers:** None — all page structures are defined. Design system stage can begin.

**Risks:**
- **Hero image quality risk:** The homepage hero is the highest-impact visual decision on the site. Poor stock image selection will undermine the "real local business" positioning. Image selection brief must be written before the hero is designed.
- **/reviews page thin risk:** If fewer than 6 quality reviews are available, the standalone /reviews page should be replaced with a reviews section on the homepage. Verify before building.
- **Emergency page phone repetition:** 3× phone repetition on /services/emergency is intentional but must be executed with restraint — it should feel urgent and clear, not desperate or cluttered. Design system needs to define a "prominent phone display" component that can be used multiple times without looking like a mistake.

---

## 11. Handoff to 05-Design-System

**Wireframe PRD status:** Complete

**Instruction for 05-design-system:**
> The wireframe PRD above defines the section-level structure for all 13 pages. Begin the visual system design with this structure as the foundation. Key constraints to preserve:
> 1. TrustBar must appear immediately below the Hero on the homepage — no margin gap, no intervening element. This is a structural requirement.
> 2. /contact page: the form must be above the fold on mobile — the ContactHero above it must be short (heading + subline + phone only, no hero height). No background image on /contact.
> 3. FAQSection on service pages uses an accordion component — the design system must define this component.
> 4. MobileBottomBar is a global, fixed-position component — the design system must account for 64px of bottom padding on all mobile page layouts.
> 5. /services/emergency has a dark or red hero background — the design system should define this as an "emergency variant" of the standard PageHero.
> 6. CTABand uses brand red (#C41515) as background — this is the only section on the site with a red background (beyond the emergency hero variant). All other sections use white, light grey, or dark navy.
>
> Freedom the design system has:
> - Visual language, color application within the constraints above, typography scale, and spacing rhythm
> - Component styling: card borders/shadows, button shape/size, icon treatment
> - Animation: subtle fade-on-scroll as defined in the discovery brief
> - ServiceCard, ReviewCard, OfferBanner visual treatment
>
> Priority pages for design: Homepage first (establishes all core patterns), /services/emergency second (defines the emergency variant), /contact third (form and sidebar layout).

---

## 12. Instructions for Later Skills

### 06-Build Plan
> Page count: 13. Reusable templates: ServiceDetailTemplate (5 pages: /services/[slug]), all via dynamic route app/services/[slug]/page.tsx. Static pages: all others. Global components: OfferBanner, StickyHeader, MobileBottomBar, Footer — render on all 13 pages via root layout. Components requiring interaction: FAQSection (accordion — client component), ContactForm (client component with react-hook-form + Zod), MobileNav (hamburger drawer — client component), ScrollReveal (intersection observer — client component). Server action: form submit in lib/actions.ts → Resend. No CMS. Data files: data/services.ts drives both /services overview and dynamic service pages.

### 07+ Feature Folders
> 10-hero: Homepage hero uses the Hero section as defined in Section 7. Mobile: no full-bleed image — dark gradient background. Desktop: full-height with background image + overlay. Micro-trust badges inline below CTAs. 11-navigation: MobileBottomBar is the most critical mobile component. Two buttons: [Call Now tel:9054729100] [Schedule Service → /contact]. StickyHeader contains phone number on desktop — not just "Contact" link. 12-forms: ContactForm on /contact, also embedded as ContactBlock on homepage. Fields defined in Section 7 /contact wireframe. Emergency urgency selector triggers inline phone display. 13-social-proof: ReviewStrip (3 cards) on homepage Section 5. ReviewsGrid (8–12 cards) on /reviews. ReviewCard pattern defined in Section 6. 14-feature-services: ServiceDetailTemplate defined in Section 6. Dynamic route /services/[slug]. /services overview page is a simple routing grid. 17-feature-local-seo: sitemap.ts generates entries for all service slugs dynamically. LocalBusiness JSON-LD in root layout. Each service page has its own metadata export. /service-areas page has city-specific copy for non-Markham keyword coverage.
