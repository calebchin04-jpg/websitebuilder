# PLANNING PRD
**Project:** Mr. Rooter Plumbing of Markham
**Build type:** Redesign
**Date:** 2026-04-20
**Stage:** 02-planning — output complete
**Discovery brief status:** Acceptable with flags (visual references absent; logo/photo assets unconfirmed)

---

## 1. Project Overview

Mr. Rooter Plumbing of Markham is a locally-owned franchise plumbing business serving Markham and York Region, Ontario since 1995. The current corporate franchise page (mrrooter.ca/markham) lacks local identity and fails emergency callers — the phone number is buried and there are no urgency signals above the fold. This redesign builds a standalone Next.js site on a custom domain with a single overriding goal: generate more inbound calls from Markham-area homeowners who find them via local organic search.

---

## 2. Planning Summary

This is a dual-audience, phone-call-first local service site. The emergency caller — a homeowner facing an active plumbing crisis — is the conversion-critical audience. Every structural decision must be made with that person in mind first: phone number unmissable, trust signals immediate, urgency language above the fold. The scheduled job shopper (comparison-shopping, review-reading) is the secondary path and will be served by a form, service specificity, and social proof depth. The site's differentiation is built on three concrete, verifiable claims — no overtime charges, flat-rate pricing, 30+ years local — and the Neighbourly Done Right Promise® as a named guarantee. The build is restrained: six feature modules, no CMS, no gallery, no booking payments. Design direction is clean corporate trades — white space, structured grid, red as a precision accent. Trust is carried by longevity, reviews, and guarantee copy since photo proof is unavailable at launch.

---

## 3. Critique of Discovery Brief

**Overall brief quality:** Acceptable

**Weaknesses identified:**

> **Category:** Visual
> **Problem:** No specific visual reference URLs were provided. The direction is described ("clean corporate trades") but no reference sites were named.
> **Planning impact:** Design system stage cannot extract specific principles from real examples. Direction must be built entirely from constraints and description.
> **Resolution:** Discovery brief's banned styles and design principles list is strong enough to proceed. Flagged for design system stage to work harder on constraint specificity.

> **Category:** Trust
> **Problem:** Google review count is unverified. The brief notes "5-star average" from the scrape but exact count is unknown.
> **Planning impact:** ReviewStrip and TrustBar copy must use a placeholder. If the count is low (under 50), the trust architecture needs to lean harder on longevity and guarantee.
> **Resolution:** Flagged as a pre-launch verification item. Design and build can proceed with placeholder.

> **Category:** Assets
> **Problem:** Logo file availability is unconfirmed. Hero image source is unconfirmed.
> **Planning impact:** Header design and hero section are blocked from finalization until assets are confirmed or stock is sourced.
> **Resolution:** Build proceeds with text-based logo fallback and stock image placeholder. Client must confirm assets before launch sign-off.

> **Category:** Audience
> **Problem:** Audience is defined as "both equally" (emergency callers + scheduled shoppers). Two equal primaries is a design tension, not a resolved strategy.
> **Planning impact:** Conversion hierarchy must be explicitly decided — one path must visually dominate or the site will feel ambiguous.
> **Resolution:** Resolved in this PRD: emergency caller (phone call) is the structural primary. Scheduled shopper (form) is the secondary. Both paths are present but not equal — see Section 8.

No send-back triggered. Brief is complete enough to proceed.

---

## 5. Business Goals

- Increase volume of new residential plumbing customers from Markham and York Region
- Differentiate from the generic corporate franchise page and establish a local identity that builds community trust
- Capture inbound leads that currently go to competitor plumbers due to weak SEO and low-converting corporate page
- Reduce dependence on the corporate mrrooter.ca domain for local search authority

---

## 6. Website Goals

- Generate 15+ inbound calls per month from new local residential visitors finding the site via organic search
- Achieve page-1 Google rankings for "plumber Markham," "emergency plumber Markham," and "drain cleaning Markham" within 90 days of launch
- Achieve a Contact form submission rate of 5+ per month from the scheduled-job segment
- Establish the site as the highest-quality-appearing local plumbing result in Markham organic search

**Primary website goal:** Generate inbound calls (primary) and form submissions (secondary) from Markham homeowners searching for plumbing services — measured by a combined 20+ contacts per month within 90 days.

---

## 7. Core Audience

**Primary audience:** A Markham homeowner in a plumbing emergency — active leak, no hot water, flooded area, backed-up sewer. They are on their phone, stressed, and not comparison-shopping. They need to know in under 5 seconds: this plumber is local, they answer now, they won't charge overtime for calling at 11pm. They don't read — they scan. They look for the phone number. They look for proof that this is a real, responsive local business. They call or they leave.

**Why this audience:** Because they convert immediately. Emergency callers do not shop — they call the first credible result. The phone call has zero friction if the number is visible and the site radiates trust. This is the highest-value conversion path and the one most damaged by the current corporate site's weak emergency signals.

**What this audience needs from the site to convert:**
1. Immediate confirmation that this is a local Markham plumber who answers 24/7 (above the fold, before any scroll)
2. A phone number that is tappable, large, and always visible — not hidden in a contact page
3. One signal that they won't be financially punished for calling after hours (no overtime charges — must be named, not implied)

**Who this site is NOT for:** Commercial property managers, DIY researchers, people shopping for the cheapest possible option, or out-of-region visitors. Design decisions should not be diluted to serve these groups.

---

## 8. Core CTA

**Primary CTA:** Call (905) 472-9100 — "We Answer 24/7"
**CTA mechanism:** Phone call (tel: link). On mobile: tap-to-call. On desktop: visible number, click-to-call.

**CTA placement strategy:**
1. Sticky header — always visible, top-right, every page
2. Hero section — above the fold, dominant size on mobile
3. MobileBottomBar — fixed bar always visible on mobile (highest-priority mobile placement)
4. CTABand section — dedicated full-width emergency CTA with red background, mid-page
5. Footer — phone number present but not the primary focus there

**CTA tone:** Urgent + reassuring simultaneously. "Call Now — We Answer 24/7" for emergency path. Not aggressive, not corporate. The number should feel like a real person will pick up.

**Secondary CTA:** Request a Free Estimate (form)
**Secondary CTA placement:** Hero section (alongside primary, smaller visual weight), ContactBlock section, Header (text link or secondary button)

---

## 9. Strategic Website Direction

This site's job is to be the most credible-looking and most immediately useful result when a Markham homeowner searches for a plumber. The visitor's first question is not "who is Mr. Rooter?" — it is "can I trust this business to come right now and not surprise me with the bill?" The site must answer that question in the first viewport before asking for any action. Every structural decision is downstream of this.

The site's positioning is built on three verifiable claims that competitors cannot copy without proof: no overtime charges (eliminates the #1 emergency fear), upfront flat-rate pricing (eliminates the #2 fear — bill shock), and 30+ years local (eliminates the "faceless chain" fear). These are not taglines — they are conversion mechanisms. Each must be present early in the page flow and near the primary CTA.

**Positioning translated into site behavior:**
- "No overtime charges" → Named explicitly in TrustBar and near the primary CTA in the Hero. Not in fine print. Not in an FAQ. On the page where the decision is made.
- "Flat-rate pricing, no surprises" → Present in the WhyUs section as a named differentiator. Reinforced in the ContactBlock before the form.
- "Local since 1995" → In the TrustBar (30+ years). In the About page. In the footer. Longevity is used as a proxy for trustworthiness, not just age.
- "Done Right Promise®" → Named in the WhyUs section. Treated as a guarantee, not a tagline. Copy must make clear what it means: if we don't do the job right, we fix it.
- "5-star rated" → ReviewStrip section with real testimonials and a Google rating badge.

---

## 10. User Journey

**Journey stages:**

1. **Arrival:** Visitor finds the site via Google local search ("plumber Markham", "emergency plumber near me", "drain cleaning Markham"). State: either stressed and urgent (emergency caller) or methodical and evaluating (scheduled shopper). Both arrive from mobile in most cases.

2. **Orientation (0–5 seconds):** The hero must establish: (a) this is a Markham plumber, (b) they are available now / 24/7, (c) the phone number is here and tappable. Emergency callers may stop here and call. If they don't, the OfferBanner ($30 off) and TrustBar (below the fold) give them one more reason to stay.

3. **Trust building:** TrustBar → ServicesGrid → WhyUs → ReviewStrip. The trust sequence moves from proof-of-basics (24/7, no overtime) → service confirmation (they do what I need) → differentiation confirmation (why them specifically) → social proof (real customers, real outcomes). Scheduled shoppers move through this sequence before deciding.

4. **Evaluation:** ServicesGrid → individual service pages (for deeper research), Reviews page (for scheduled shoppers who read multiple testimonials). About page for "who are these people?" credibility check. ServiceAreas confirmation that Markham/their area is covered.

5. **Conversion:** Emergency caller: MobileBottomBar call button or Hero phone number. Scheduled shopper: ContactBlock form or Schedule Service in header. Friction reduction: form is minimal (name, phone, service type, urgency flag). No account required. Instant response: email confirmation + thank-you page.

6. **Post-conversion:** Thank-you page confirms form received, reinforces the phone number ("For emergencies, call us directly"), sets expectations (response time). Emergency callers who call: the phone experience takes over — outside this site's scope.

---

## 11. Page-Type Responsibilities

**Homepage:**
The homepage's job is to confirm credibility and drive the call. A visitor who arrives, spends 15 seconds, and calls — that's a successful homepage. It is not a company brochure. Every section exists to build toward one action: contact. The homepage must make the phone number visible before the scroll and answer the "can I trust them?" question before asking for anything.

**Services pages (individual):**
Each service page serves the scheduled shopper who searched specifically for that service (e.g., "water heater replacement Markham"). Its job: confirm capability, explain the process briefly, show one or two relevant trust signals, and present the CTA. It should rank for the service-specific local keyword. Length: enough to demonstrate expertise, not more.

**Services overview page:**
A wayfinding page for visitors who land on the homepage and need to self-identify their service. Its job is quick navigation, not deep reading. Grid format, icon + service name + one-line description, link to service detail.

**About page:**
Credibility confirmation. Visitors who reach this page are already interested and want to know: "Is this a real local business? Who is behind it? Can I trust them personally?" This page must answer with: years in operation, Markham roots, Neighbourly affiliation, Done Right Promise explanation, and a human-facing tone. No corporate boilerplate.

**Contact page:**
Conversion page for scheduled shoppers who have completed their evaluation and are ready to act. Friction is the enemy here. Minimal form, phone number present, hours clearly listed, no barriers. Post-submit: redirect to thank-you page with confirmation copy.

**Service Areas page:**
Primarily for local SEO — provides named city content (Markham, Stouffville, Unionville, Richmond Hill) that targets area-specific searchers. Secondary: reassures visitors that their specific area is covered. For v1: a single page listing covered areas with brief copy per area. Service-area subpages are deferred.

**Reviews page:**
Trust depth for scheduled shoppers who want more than 3 testimonials. Shows full collection of curated Google reviews. No unique functionality — display only. Supports the "social proof segment" of the trust-building sequence for high-consideration shoppers.

**Thank You page:**
Post-conversion confirmation. Sets expectations. Phone number present for escalation to emergency call. Warm, reassuring tone. No upsell.

---

## 12. Content Requirements

**Available:**
- Business name, phone, address, hours — confirmed from franchise site scrape
- Service list (5 core services) — confirmed
- Done Right Promise® name and concept — confirmed
- Customer testimonials — available from Google reviews (to be curated, 3–5 for launch)
- Trust signals: years in business, 24/7, no overtime, flat-rate — confirmed and usable

**Must be produced or sourced:**
- All website copy — agency writes; no copy migrated from corporate site. Required before wireframe stage begins for hero and service pages.
- Hero background image — stock photo; plumbing van, technician at work, or local Markham context. Must be sourced before design.
- Service page images — one per service (5 total). Stock acceptable.
- Logo file — client to provide vector or high-res PNG. Text fallback if unavailable at launch.
- Google review count (exact) — verified from Google Business Profile before launch.

**Content quality notes:**
Photography will be stock for v1. This is a trust risk for the Hero — poor stock photo selection will undercut the "real local business" positioning. Image selection must follow the banned styles list: no smiling contractor on white background, no clip-art tools. Real-looking plumbing work photos preferred.

---

## 13. Missing Content and Assets

| Missing item | Impact | Who resolves it | Timeline dependency |
|---|---|---|---|
| Logo file (vector/PNG) | Header and footer cannot be finalized | Client | Before code: header component |
| Hero background image | Hero section blocked from completion | Agency (stock sourcing) | Before design: hero wireframe |
| Service page images (5) | Service detail pages incomplete visually | Agency (stock sourcing) | Before build: service pages |
| Exact Google review count | ReviewStrip and TrustBar copy | Agency (verify via GBP) | Before launch |
| Hero/page copy | Wireframe and design cannot be evaluated without real copy | Agency (copywriting) | Before wireframe stage |

---

## 14. Functional Requirements

**Required:**
- [x] Contact form: fields — Name, Phone, Email, Service Type (dropdown: drain cleaning / sewer / water heater / emergency / backwater valve / other), Urgency (Emergency / Scheduled), Message (optional). Submits via server action → Resend → email to business inbox.
- [x] Form redirect to /thank-you on success
- [x] Click-to-call phone link on all pages (tel: href)
- [x] MobileBottomBar: fixed to bottom of mobile viewport, always visible, two buttons: [Call Now] [Schedule Service]
- [x] Sticky header: visible on all pages, contains phone number and secondary CTA
- [x] robots.ts — allow all, point to sitemap
- [x] sitemap.ts — all pages + service slugs generated dynamically
- [x] LocalBusiness JSON-LD schema in root layout — name, phone, address, hours, geo coordinates, areaServed
- [x] Open Graph metadata on all pages
- [x] Service-specific metadata (title, description) on each service detail page

**Conditional (if feature is activated):**
- [ ] None for v1

---

## 15. Feature Decisions

**Required Now:**

| Feature | Reason |
|---|---|
| Hero section (10-hero) | Above-fold conversion — emergency caller decision point |
| Navigation (11-navigation) | Header, mobile drawer, MobileBottomBar — core site chrome |
| Contact form (12-forms) | Secondary conversion path — scheduled job shopper |
| Social proof (13-social-proof) | ReviewStrip — trust-building sequence, evaluation stage |
| Services (14-feature-services) | ServicesGrid + 5 service detail pages — SEO + evaluation stage |
| Local SEO (17-feature-local-seo) | Schema, sitemap, robots, page metadata — primary traffic source |

**Useful Optional:**

| Feature | Reason | Include? |
|---|---|---|
| $30 off offer banner | Conversion incentive, differentiator for comparison shoppers | Yes — simple top-of-page banner, low build cost |
| Service Areas section (homepage) | Reassurance + local keyword content | Yes — included as a homepage section, not its own feature module |
| Reviews page (/reviews) | Trust depth for scheduled shoppers | Yes — static display page, low complexity |

**Deferred:**

| Feature | Reason deferred | Trigger to activate |
|---|---|---|
| Photo gallery (15-feature-gallery) | No photo assets available for v1 | Activate when client provides before/after or job photos |
| Online booking / payments (16-feature-booking-payments) | Not needed — form is sufficient for v1 lead capture | Activate if client requests calendar booking integration |
| Blog | Not in scope; adds complexity without near-term conversion value | Activate if client commits to regular content production |
| Service-area subpages | SEO depth; good for scale but not required for launch | Activate after v1 is live and ranking — phase 2 SEO expansion |
| Team / technician profiles | No team photos or bio content | Activate if client provides headshots and bios |

---

## 16. Macro UX Principles

**Conversion hierarchy:**
The phone number is the most important element on every page. It must be visible without scrolling on mobile (MobileBottomBar handles this). On desktop, it must be in the sticky header and in the Hero above the fold. The form is secondary — present and accessible, but never competing visually with the phone number. Emergency visitors must never have to search for the call option.

**Trust-building sequence:**
Trust must be established before asking for any action. The correct order: (1) confirm we are local and legitimate (hero headline + 30yrs signal), (2) remove the two biggest fears (no overtime, flat-rate pricing — TrustBar / WhyUs), (3) show real customer proof (ReviewStrip). Do not lead with services before establishing credibility. Do not place the form above the trust signals.

**Navigation logic:**
Navigation is for exploration, not the primary path. Emergency callers don't use nav — they use the phone number. Scheduled shoppers may navigate to Services or Reviews. Nav should be clear, uncluttered, and predictable: Home / Services / About / Service Areas / Contact. No mega-menus. No dropdowns for v1 (5 service pages can be linked from the Services overview).

**Mobile priority:**
The site is used on mobile first. Emergency callers are always on their phone. The MobileBottomBar [Call Now] [Schedule Service] is the single most important conversion element in the entire build — it must be present, visible, and functional on every page on every mobile screen. The hero CTA must be tappable without zooming. Form fields must be sized for thumb input.

**Friction reduction goals:**
- Remove: any barrier between the visitor and the phone number
- Remove: form fields that aren't necessary (no address, no "how did you hear about us")
- Remove: any page load delays that could cause an emergency caller to bounce
- Simplify: form to 5 fields maximum (name, phone, service type, urgency, optional message)
- Simplify: nav to flat links — no dropdowns for v1

---

## 17. Success Criteria

**At launch:**
- [x] Phone number visible without scrolling on mobile on the homepage
- [x] MobileBottomBar [Call Now] button renders and functions on all pages
- [x] Site loads in under 3 seconds on mobile (Lighthouse performance ≥ 90)
- [x] All 5 service pages exist with unique title + meta description
- [x] Contact form sends email on submit + redirects to /thank-you
- [x] LocalBusiness JSON-LD schema validates (Google Rich Results Test)
- [x] No broken links, no 404s on any linked page
- [x] Site does not look like a generic franchise template

**At 90 days:**
- [x] Page-1 Google ranking for at least one of: "plumber Markham," "drain cleaning Markham," "emergency plumber Markham"
- [x] 15+ inbound calls per month attributable to organic search (tracked via call tracking or UTM)
- [x] 5+ form submissions per month

**Design quality bar:**
- [x] Site does not look AI-generated or template-produced
- [x] Red is used as an accent, not a background — consistent across all pages
- [x] Typography hierarchy is legible on mobile without zooming
- [x] Primary CTA (phone) is visually dominant on every page
- [x] No stock image clichés: no smiling contractor on white, no clip-art tools

---

## 18. Assumptions Made

- `[ASSUMPTION]` **Topic:** Emergency caller as structural primary. **Why:** User answered "both equally" but two equal primaries create design ambiguity. Resolved in planning: emergency caller is primary, scheduled shopper is secondary. **Impact:** CTA visual hierarchy is decided; phone dominates, form is secondary. If wrong, hero layout may need to be rebalanced.

- `[ASSUMPTION]` **Topic:** No public pricing page. **Why:** Franchise model uses in-home estimates; no public pricing confirmed. **Impact:** No pricing page will be built. If client later wants a pricing page, it is additive.

- `[ASSUMPTION]` **Topic:** Copy ownership — agency writes all. **Why:** Client is a franchise owner; no copywriting capability assumed. **Impact:** Copy timeline is in agency's control. All page copy must be drafted before build begins.

- `[ASSUMPTION]` **Topic:** Hero image is stock. **Why:** No photo assets confirmed. **Impact:** Hero impact depends entirely on stock image quality. Poor image selection is the highest visual risk for v1.

- `[ASSUMPTION]` **Topic:** Review count placeholder. **Why:** Exact count unknown. **Impact:** TrustBar and ReviewStrip use "200+ Google Reviews" as placeholder. Must be verified before launch.

---

## 19. Unresolved Issues

| Issue | Why unresolved | Who resolves it | When |
|---|---|---|---|
| Logo file availability | Client has not provided assets | Client → Agency | Before code: header component |
| Exact Google review count | Not verified from GBP | Agency | Before launch |
| Hero image selection | Stock sourcing not yet done | Agency | Before design: hero section |
| Copy for all pages | Not yet written | Agency | Before wireframe evaluation |

---

## 20. Blockers and Risks

**Blockers:** None that prevent next stage (sitemap). Wireframe stage is blocked from final evaluation until page copy exists.

**Risks:**
- **No visual references:** Design system stage must work harder to define constraints. Without reference sites, the "clean corporate trades" direction is interpretive. Risk: design drifts toward generic if constraints are not explicit enough.
- **Hero image is stock:** This is the highest-risk visual element. The difference between a "real local business" look and a "generic template" look often comes down to the hero photo. Image selection brief should be written before design begins.
- **Emergency caller primary vs. dual audience:** If the site tilts too hard toward emergency urgency, it may feel alarmist to scheduled shoppers. The design must balance urgency signals (TrustBar, CTABand) with professionalism signals (WhyUs, ReviewStrip, clean layout) so both audiences feel correctly addressed.

---

## 21. Handoff to 03-Sitemap

**Brief status:** Complete

**Instruction for 03-sitemap:**
> Produce the full site structure for Mr. Rooter Plumbing of Markham. The sitemap must include all pages needed to serve the user journey in Section 10 and fulfill the page-type responsibilities in Section 11. Services must be broken into individual pages for local SEO (one page per service, each with its own slug and metadata). Do not add a blog — deferred. Do not add service-area subpages — deferred. Do not add a pricing page — excluded. Do include: Home, Services (overview), 5 service detail pages, Service Areas, About, Contact, Reviews, Thank You, Privacy Policy. Navigation structure must follow the flat-link principle defined in Section 16 — no dropdowns for v1.

**Features to activate in sitemap planning:**
- Required: hero, navigation, forms, social-proof, services, local-seo
- Optional (include): offer-banner, reviews-page, service-areas-section
- Deferred: gallery, booking-payments, blog, service-area-subpages

---

## 22. Instructions for Later Skills

### 04-Wireframes
> The wireframe plan must follow the user journey sequence in Section 10. On the homepage: the hero section must contain the phone number and 24/7 availability signal above the fold on mobile — no exceptions. The TrustBar must appear immediately below the hero. Do not place the form above the trust-building sequence (ServicesGrid, WhyUs, ReviewStrip). The MobileBottomBar is a layout constraint: all mobile page layouts must account for 64px of bottom clearance. Contact page: minimize the form — name, phone, service type, urgency, optional message. No multi-step form for v1.

### 05-Design System
> Visual direction: "clean corporate trades" — white space dominant, structured grid, red as precision accent only (CTAs, TrustBar, emergency signals). No red section backgrounds. See discovery brief Section 12 for full color constraints, banned styles, and font direction. Trust register: 7/10 toward premium-corporate — polished but approachable, not luxury. No visual references were provided — design system stage must build direction entirely from the constraint rules in the discovery brief. Animation: subtle only (fade-on-scroll, no parallax, no looping). The OfferBanner uses yellow (#F59E0B) as the only non-red accent — use this sparingly.

### Build and Code Skills (general constraints)
> Backend complexity: minimal — server action for contact form → Resend email only. No database, no auth, no CMS. Stack: Next.js 15 App Router, TypeScript, Tailwind CSS 3.4, react-hook-form + Zod, Resend, lucide-react. No third-party booking or payment integrations. Performance target: Lighthouse ≥ 90 on mobile. MobileBottomBar must not overlap page content — all page layouts must include bottom padding equivalent to the bar height on mobile. Images: Next.js Image component with explicit width/height for all above-fold images to prevent CLS.
