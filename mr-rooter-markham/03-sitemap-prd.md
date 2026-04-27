# SITEMAP PRD
**Project:** Mr. Rooter Plumbing of Markham
**Build type:** Redesign
**Date:** 2026-04-20
**Stage:** 03-sitemap — output complete
**Planning PRD status:** Acceptable with flags (no visual references; logo/photo assets unconfirmed; review count unverified)

---

## 1. Project Overview

Mr. Rooter Plumbing of Markham is a local plumbing service covering Markham and York Region, Ontario. This is a 13-page standalone site structured around two conversion paths — emergency phone call (primary) and scheduled service form (secondary) — with 5 individual service pages built for local organic search. The homepage is the primary conversion surface; every other page feeds back to it or to the contact form.

---

## 2. Sitemap Summary

**Total pages:** 13
**Navigation structure:** Flat (no dropdowns for v1)
**Primary conversion page:** / (Homepage) — phone call conversion
**Secondary conversion page:** /contact — form submission conversion
**Local SEO pages included:** Yes — 5 service detail pages + 1 service-areas overview = 6 pages with local SEO intent
**CMS-managed pages:** None — static site

**Page count breakdown:**
- Core pages: 3 (Home, About, Contact)
- Service pages: 6 (Services overview + 5 service detail pages)
- Trust/credibility pages: 2 (Reviews, Service Areas)
- Local SEO pages: embedded in service pages + service-areas (not standalone city pages for v1)
- Utility/legal pages: 2 (Privacy Policy, Thank You)

---

## 3. Critique of Planning PRD

**Overall planning PRD quality:** Acceptable

**Issues identified:**

> **[CONTENT]** Problem: Copy for all pages not yet written. Impact on IA: Sitemap can be fully defined, but wireframe stage cannot be evaluated for content fit. Resolution: Flagged — agency writes all copy before wireframe evaluation.

> **[ASSETS]** Problem: Hero image and service page images not yet sourced. Impact on IA: No structural impact on sitemap, but image requirements per page are defined here to brief the design stage. Resolution: Image brief included in content requirements per page.

> **[LOCAL SEO]** Problem: Planning PRD deferred service-area subpages. Impact on IA: The /service-areas page will carry the full geographic SEO load for v1. This is a strategic tradeoff — noted as a risk. Resolution: Accepted for v1 with a clear upgrade path defined.

No send-back triggered. Planning PRD provides sufficient foundation for sitemap decisions.

---

## 5. Information Architecture Logic

The site is organized around the two conversion paths defined in planning: emergency callers who need a phone number immediately, and scheduled shoppers who evaluate services before committing. The homepage serves both paths. Service pages target long-tail local search queries ("drain cleaning Markham," "water heater repair Markham") and exist primarily to capture searchers with specific service intent, not as brochure pages. The navigation is deliberately flat — no dropdowns — because emergency callers do not navigate; they call. Scheduled shoppers need clear, fast access to Services, About, and Contact. The /reviews page exists as a dedicated trust-depth destination because scheduled shoppers sometimes want more proof than a three-card strip can provide.

**Key structural decisions:**
- Services are individual pages (5) because each targets a distinct local search query and service-intent visitor. A single services page cannot rank for "emergency plumber Markham" and "drain cleaning Markham" simultaneously.
- Service-area subpages are deferred. The /service-areas overview page handles geographic SEO for v1. Subpages are the v2 SEO expansion play.
- Reviews is a standalone page (not just a homepage section) because scheduled shoppers often deep-read reviews before calling, and a standalone page can be linked to from Google Business Profile.
- About and team profiles are a single /about page. No separate team page — no team photos or bios available at launch.
- Thank You is a CTA path page only — not in navigation. Its only job is post-conversion confirmation.

---

## 6. Full Page Hierarchy

```
Mr. Rooter Plumbing of Markham

├── / (Homepage)
├── /about
├── /services
│   ├── /services/drain-cleaning
│   ├── /services/sewer-line
│   ├── /services/water-heater
│   ├── /services/emergency
│   └── /services/backwater-valve
├── /service-areas
├── /reviews
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
[Mr. Rooter Logo] | Services | About | Service Areas | Reviews | [Schedule Service →]
```

| Nav Label | Page | URL | Notes |
|---|---|---|---|
| Services | Services overview | /services | Links to overview; service detail pages linked from within |
| About | About | /about | |
| Service Areas | Service Areas | /service-areas | |
| Reviews | Reviews | /reviews | |
| Schedule Service | Contact | /contact | Visually distinct button (outlined or secondary style), rightmost |

**Phone number in header:** Yes — (905) 472-9100 displayed as click-to-call beside or above the nav, always visible on desktop. On mobile, header collapses to logo + hamburger only; MobileBottomBar handles phone CTA.

**No dropdowns:** Services nav item links to /services overview only. Service detail pages are accessed from the overview page, not from the nav dropdown. This keeps the header clean and removes nav complexity for emergency visitors.

### Footer Navigation

| Column heading | Links |
|---|---|
| Services | Drain Cleaning, Sewer Line Repair, Water Heater, Emergency Plumbing, Backwater Valve & Sump Pump |
| Company | About, Reviews, Service Areas, Privacy Policy |
| Contact | (905) 472-9100, Schedule Service (/contact), Address, Hours |

---

## 8. Page Groups and Rationale

### Group 1: Core Pages
**Rationale:** These three pages form the essential conversion skeleton. Every other page ultimately routes back to one of these.
**Pages:** Homepage (/), About (/about), Contact (/contact)

### Group 2: Services
**Rationale:** Service pages are the primary local SEO entry points. Each page targets a distinct service + location query. The overview page is the wayfinding hub for visitors who arrive via nav, not direct search. Individual service pages rank; the overview page organizes.
**Pages:** /services, /services/drain-cleaning, /services/sewer-line, /services/water-heater, /services/emergency, /services/backwater-valve

### Group 3: Trust and Credibility
**Rationale:** These pages serve the scheduled shopper at the evaluation stage. Reviews provides proof depth. Service Areas provides geographic reassurance and local SEO content.
**Pages:** /reviews, /service-areas

### Group 4: Local SEO
**Rationale:** Local SEO is distributed across service detail pages (service + city keyword targeting) and the service-areas overview (geographic coverage content). No standalone city pages for v1 — service pages carry this load.
**Structure:** Service detail pages each contain Markham-specific content, local trust signals, and areaServed schema markup. /service-areas lists all covered cities with brief local copy.

### Group 5: Utility and Legal
**Rationale:** Standard operational pages required for data collection compliance and post-form UX.
**Pages:** /thank-you, /privacy-policy

---

## 9. Page-by-Page Purpose Statements

---

### Homepage — `/`

**Purpose:** Establish credibility immediately and drive the emergency call; give comparison shoppers enough to stay and explore.

**User need:** Confirm this is a local Markham plumber who is available now, won't charge overtime, and has good reviews — then make it trivially easy to call.

**Business need:** Primary inbound call generation surface and top-level local SEO page for "plumber Markham."

**CTA on this page:** Primary — Call (905) 472-9100. Secondary — Schedule Service (/contact).

**Required content:**
- Offer banner: $30 off offer with expiry date
- Hero: Headline establishing local + 24/7 identity, phone CTA, secondary form CTA, micro-trust signals (no overtime, local since 1995)
- TrustBar: 4 proof points (30+ years, 24/7, no overtime charges, 5-star rated)
- Services overview grid: 5 services with icons and one-line descriptions, link to /services
- WhyUs: 4 differentiators (flat-rate pricing, no overtime, Done Right Promise, local since '95)
- ReviewStrip: 3 testimonials + Google rating badge
- ServiceAreas strip: named cities covered
- CTABand: Emergency headline + phone number, red background
- ContactBlock: Abbreviated form + hours + address sidebar

---

### About — `/about`

**Purpose:** Confirm that Mr. Rooter Markham is a real, accountable local business — not a faceless franchise call centre.

**User need:** Scheduled shoppers who have evaluated the services and want to know: who are these people, how long have they been here, and can I trust them with my home?

**Business need:** Trust conversion for high-consideration visitors who would otherwise bounce to a competitor they feel they "know better."

**CTA on this page:** Call (905) 472-9100 + Schedule Service (/contact) — repeated at bottom of page.

**Required content:**
- Business history: founded locally 1995, Markham roots, 30+ years in the community
- Neighbourly Done Right Promise® explained — what it means, what it guarantees
- Franchise vs. local: clarify that this is a locally-owned franchise (not a corporate call centre)
- Certifications and affiliations: licensed and insured, Neighbourly network, IFA membership
- Service philosophy: flat-rate pricing, no overtime charges, professional appearance standards
- CTA section at page bottom

---

### Contact — `/contact`

**Purpose:** Provide the scheduled shopper with a minimal-friction form to request service, while keeping the emergency call path prominent.

**User need:** Submit a service request without unnecessary steps. Know when to expect a response.

**Business need:** Capture qualified leads from the scheduled-job audience who completed their evaluation and are ready to act.

**CTA on this page:** Form submission (primary action on this page). Phone number present as emergency alternative.

**Required content:**
- Contact form: Name, Phone, Email, Service Type (dropdown: 5 services + "other"), Urgency (Emergency / Scheduled), Message (optional)
- Phone number displayed prominently with 24/7 availability label
- Business address with approximate service area note
- Hours of operation (Mon–Sun, 24/7 for emergencies)
- Form submission behavior: server action → Resend email to business → redirect to /thank-you

---

### Services Overview — `/services`

**Purpose:** Act as a wayfinding hub for visitors who want to identify their service before reading deeper.

**User need:** "I know I need a plumber but I want to see if they handle my specific problem before I call."

**Business need:** Internal linking hub that distributes SEO value to individual service pages and routes visitors to the correct service detail page.

**CTA on this page:** Call (905) 472-9100 (always present in header/bottom bar). Cards link to individual service pages.

**Required content:**
- Intro paragraph: "We handle all residential plumbing in Markham and York Region — from emergency repairs to planned installations."
- Service cards (5): icon, service name, 2-sentence description, link to service detail page
- Phone CTA band at bottom: "Not sure which service you need? Call us and we'll help."

---

### Drain Cleaning — `/services/drain-cleaning`

**Purpose:** Capture visitors searching specifically for drain cleaning in Markham; convert them to a call or form submission.

**User need:** Confirm that this plumber handles drain cleaning, understand the process, feel confident calling.

**Business need:** Rank for "drain cleaning Markham," "clogged drain Markham," and related queries.

**CTA on this page:** Call (905) 472-9100. Secondary: Schedule Service (/contact).

**Required content:**
- H1 targeting "drain cleaning Markham" or variant
- Service description: what's included (clearing blockages, hydro jetting, video camera inspection)
- Common causes / signs you need this service (toilet slow, gurgling, backing up)
- Why choose Mr. Rooter: flat-rate, no overtime, local since 1995
- 1 relevant testimonial (drain-related if available)
- FAQ section: 2–3 questions (how long does it take, do you offer same-day, how much does it cost)
- CTA section: phone + form link
- Related services links (at least 2): sewer line, emergency plumbing

---

### Sewer Line Repair & Replacement — `/services/sewer-line`

**Purpose:** Capture visitors searching for sewer repair in Markham; serve both emergency (broken sewer) and planned (inspection/replacement) audiences.

**User need:** Confirm this plumber handles sewer work, understand scope, feel confident calling for a major job.

**Business need:** Rank for "sewer line repair Markham," "sewer replacement Markham."

**CTA on this page:** Call (905) 472-9100. Secondary: Schedule Service (/contact).

**Required content:**
- H1 targeting sewer line repair in Markham
- Service description: repair vs. replacement, video camera inspection, trenchless options (if offered)
- Signs of sewer line problems (slow drains throughout house, sewage smell, wet spots in yard)
- Why choose Mr. Rooter: major job — licensed, insured, Done Right Promise covers this
- 1 relevant testimonial
- FAQ section: 2–3 questions (cost range guidance, how long does it take, trenchless vs. traditional)
- CTA section
- Related services: drain cleaning, emergency plumbing

---

### Water Heater Repair & Installation — `/services/water-heater`

**Purpose:** Capture visitors searching for water heater service in Markham; serve both repair (urgent — no hot water) and planned replacement audiences.

**User need:** Fast diagnosis and response for no-hot-water emergencies; clear information for planned replacements.

**Business need:** Rank for "water heater repair Markham," "water heater installation Markham," "no hot water Markham."

**CTA on this page:** Call (905) 472-9100 (strong emergency signal — no hot water is an immediate need). Secondary: Schedule Service.

**Required content:**
- H1 targeting water heater service in Markham
- Service description: repair, replacement, tankless options
- Common issues: no hot water, inconsistent temperature, leaking tank, age-related failure
- Why choose Mr. Rooter: same-day availability, no overtime for emergency calls
- 1 relevant testimonial
- FAQ: 2–3 questions (tank vs. tankless, how long to install, when to replace vs. repair)
- CTA section
- Related services: emergency plumbing, backwater valve

---

### Emergency Plumbing — `/services/emergency`

**Purpose:** The highest-urgency service page — capture visitors in active plumbing emergencies searching "emergency plumber Markham" or "24 hour plumber Markham."

**User need:** Immediate confirmation that this plumber answers now, 24/7, with no overtime charges.

**Business need:** Rank for "emergency plumber Markham," "24 hour plumber Markham," "burst pipe Markham." This page is a direct-dial conversion surface — every element points to the phone number.

**CTA on this page:** Call (905) 472-9100 — above the fold, repeated multiple times. This page should have the phone number more visually prominent than any other page.

**Required content:**
- H1 targeting "emergency plumber Markham" or "24/7 plumber Markham"
- Immediate reassurance: "We answer every call. No voicemail, no overtime charges, same rate any hour."
- Common emergency scenarios: burst pipe, flooding, no hot water, gas smell (call 911 first), backed-up sewer
- Response process: what happens when you call (dispatched immediately, flat-rate quote before work starts)
- No overtime charges statement — must appear on this page near the CTA
- Trust signals: 30+ years local, Done Right Promise
- Phone CTA: large, red, tappable — at top and bottom of page
- Related services: drain cleaning, sewer line, water heater

---

### Backwater Valve & Sump Pump — `/services/backwater-valve`

**Purpose:** Capture visitors searching for flood prevention services in Markham; serve planned-installation audience (less urgent than emergency).

**User need:** Understand what a backwater valve and sump pump are, whether they need one, and whether this plumber installs them.

**Business need:** Rank for "backwater valve installation Markham," "sump pump Markham." Relevance is high given Markham's freeze-thaw climate and older infrastructure.

**CTA on this page:** Schedule Service (/contact) — this is a planned job, not an emergency. Phone also present.

**Required content:**
- H1 targeting backwater valve or sump pump installation in Markham
- Explanation: what each device does and why Markham homeowners need them (local freeze-thaw, basement flooding risk, City rebate program if applicable)
- Installation process: what to expect, how long it takes
- Why choose Mr. Rooter: experienced with Markham's infrastructure, licensed, Done Right Promise
- FAQ: 2–3 questions (am I eligible for the City rebate, how long does installation take, do I need both)
- CTA section
- Related services: drain cleaning, sewer line

---

### Service Areas — `/service-areas`

**Purpose:** Establish geographic credibility, capture area-specific search traffic, and reassure visitors that their specific city is covered.

**User need:** "Do they serve my area?" — Stouffville resident, Unionville homeowner, Richmond Hill caller.

**Business need:** Local SEO coverage for city-level queries ("plumber Stouffville," "emergency plumber Unionville") without building individual city pages for v1.

**CTA on this page:** Call (905) 472-9100.

**Required content:**
- Intro: "Serving Markham and all of York Region since 1995"
- Named areas (with 1–2 sentences each): Markham, Stouffville, Unionville, Richmond Hill, York Region broadly
- Note on response time / local proximity
- Map embed or visual showing coverage area (optional, can be deferred)
- CTA: phone + schedule service

---

### Reviews — `/reviews`

**Purpose:** Provide trust depth for high-consideration scheduled shoppers who want more social proof than the 3-card homepage strip.

**User need:** Read more reviews before deciding to call — "Are these people consistently good or was the homepage just cherry-picking?"

**Business need:** Capture the segment of leads who don't convert on the homepage alone but would convert after reading 8–12 reviews. Also linkable from Google Business Profile.

**CTA on this page:** Call (905) 472-9100 + Schedule Service (/contact).

**Required content:**
- Full curated review collection (8–12 reviews)
- Google rating badge + aggregate star display
- Review sourcing note: "From our Google Business Profile"
- CTA section at bottom

---

### Thank You — `/thank-you`

**Purpose:** Post-form submission confirmation — set expectations, reassure the visitor, and provide an emergency escalation path.

**User need:** "Did my form go through? What happens now?"

**Business need:** Close the form conversion experience with a positive impression. Provide the phone number for anyone who submitted for something urgent.

**CTA on this page:** Call (905) 472-9100 (for urgent needs). Homepage link.

**Required content:**
- Confirmation: "Your request has been received."
- Response expectation: "We'll be in touch within X hours. For emergencies, call us directly."
- Phone number: large, tappable
- Link back to homepage

---

### Privacy Policy — `/privacy-policy`

**Purpose:** Legal compliance page for data collection via the contact form.

**User need:** Understanding of data practices (rarely read, but required).

**Business need:** Compliance with PIPEDA (Canadian privacy law) for contact form data.

**CTA on this page:** None.

**Required content:**
- Standard Canadian small business privacy policy covering: data collected (form fields), use of data (internal only, Resend email delivery), retention, contact for privacy concerns
- Business name, address, contact email

---

## 10. User Paths

### Primary Path: Emergency Caller — Direct Convert
```
Google search ("emergency plumber Markham") → Homepage → MobileBottomBar [Call Now] → Call
```
**User type:** Homeowner in active plumbing emergency, on mobile
**Likely entry page:** / (Homepage) or /services/emergency
**Key decision pages:** Homepage hero (phone number visibility, 24/7 signal, no overtime)
**Conversion page:** Phone call (triggered from any page)

---

### Secondary Path: Scheduled Shopper — Research then Form
```
Google search ("drain cleaning Markham") → /services/drain-cleaning → Homepage (back navigation) → /reviews → /contact → /thank-you
```
**User type:** Homeowner planning a non-urgent service, comparing options
**Likely entry page:** /services/[service-slug] or / (Homepage)
**Key decision pages:** Service detail page (capability confirmation), /reviews (social proof depth), /contact (low-friction form)
**Conversion page:** /contact → /thank-you

---

### Tertiary Path: Direct Homepage Evaluator
```
Google Maps / GMB listing → Homepage → /about → /contact → /thank-you
```
**User type:** Homeowner who found them on Google Maps and is doing a quick trust check
**Likely entry page:** / (Homepage)
**Key decision pages:** Homepage (general trust), /about (local legitimacy check)
**Conversion page:** /contact or direct call

---

### CTA Paths

| Starting page | CTA trigger | Destination page | Post-conversion |
|---|---|---|---|
| Any page | MobileBottomBar [Call Now] | Phone call | External (call) |
| Any page | Header phone number | Phone call | External (call) |
| Homepage | Hero [Schedule Service] | /contact | /thank-you |
| Homepage | CTABand [Call Now] | Phone call | External (call) |
| Homepage | ContactBlock form submit | /thank-you | Resume from /thank-you |
| /services/[any] | CTA section | /contact or phone | /thank-you or call |
| /about | CTA section | /contact or phone | /thank-you or call |
| /reviews | CTA section | /contact or phone | /thank-you or call |
| /service-areas | CTA | Phone call | External (call) |

---

## 11. Internal Linking Logic

**Structural links (must exist):**

| From page | Link type | To page | Reason |
|---|---|---|---|
| Homepage | Nav | /services | Services wayfinding |
| Homepage | ServicesGrid cards | /services/[each] | Direct SEO + evaluation routing |
| Homepage | ServiceAreas section | /service-areas | Geographic reassurance |
| Homepage | ReviewStrip "See All Reviews" | /reviews | Trust depth path |
| Homepage | ContactBlock form | /thank-you | Form submission path |
| /services | Service cards | /services/[each] | Overview to detail routing |
| /services/[each] | CTA section | /contact | Service page to conversion |
| /services/[each] | Related services | /services/[related] | Reduce bounce, increase evaluation depth |
| /about | CTA section | /contact | Trust page to conversion |
| /reviews | CTA section | /contact | Proof page to conversion |
| /service-areas | CTA | Homepage or /contact | Geographic page to conversion |
| /contact | Form submit | /thank-you | Conversion completion |
| /thank-you | Return link | / | Post-conversion home |
| Every page | Header nav | All main nav pages | Standard navigation |
| Every page | Footer | All footer links | Standard navigation |

**Cross-link recommendations:**
- /services/emergency → /services/drain-cleaning, /services/water-heater: "Other services you might need"
- /services/backwater-valve → /service-areas: "Serving Markham homeowners in flood-prone areas"
- /about → /reviews: "Read what our customers say →"

**Do not link:**
- /privacy-policy to anything except footer and /contact (if referenced in form compliance copy)
- /thank-you to any page except / (homepage) — no nav, no exploration prompts
- Service detail pages into the main nav (accessed via /services overview or direct search only)

---

## 12. Local SEO Page Structure

**Decision:** Service-detail pages carry local SEO for v1, plus one /service-areas overview page. No standalone city pages — deferred to v2.

**Local SEO page set:**

| Page name | URL | Target keyword(s) | Local differentiation |
|---|---|---|---|
| Drain Cleaning Markham | /services/drain-cleaning | "drain cleaning Markham," "clogged drain Markham" | Markham-specific intro, local trust signals |
| Sewer Line Repair Markham | /services/sewer-line | "sewer line repair Markham," "sewer replacement Markham" | Markham infrastructure context, local reviews |
| Water Heater Markham | /services/water-heater | "water heater repair Markham," "no hot water Markham" | Same-day availability, no overtime |
| Emergency Plumber Markham | /services/emergency | "emergency plumber Markham," "24 hour plumber Markham" | 24/7, no overtime, local since 1995 |
| Backwater Valve Markham | /services/backwater-valve | "backwater valve installation Markham," "sump pump Markham" | City rebate program, local freeze-thaw context |
| Service Areas | /service-areas | "plumber Stouffville," "plumber Unionville," "plumber Richmond Hill" | Named coverage with city-specific copy |

**URL pattern used:** Service-first (/services/[service-name]) — keeps service pages under a clean parent path, supports the /services overview page as a hub, and produces predictable URLs for internal linking.

**Content standard for each service page:**
- City name (Markham) in H1 or first paragraph
- Local trust signals: "serving Markham since 1995," "locally owned and operated"
- Markham-specific context where relevant (freeze-thaw, older infrastructure, City rebate programs)
- LocalBusiness schema on every page via root layout (areaServed includes all covered cities)
- Service-specific meta title format: "[Service Name] in Markham, ON | Mr. Rooter Plumbing"
- Service-specific meta description: 150–160 chars, includes service + Markham + key differentiator (no overtime / flat-rate)

---

## 13. URL Structure Summary

| Page | URL | Nav placement |
|---|---|---|
| Homepage | `/` | Main nav (logo) |
| Services Overview | `/services` | Main nav |
| Drain Cleaning | `/services/drain-cleaning` | Footer (Services column) |
| Sewer Line | `/services/sewer-line` | Footer (Services column) |
| Water Heater | `/services/water-heater` | Footer (Services column) |
| Emergency Plumbing | `/services/emergency` | Footer (Services column) |
| Backwater Valve | `/services/backwater-valve` | Footer (Services column) |
| Service Areas | `/service-areas` | Main nav + Footer (Company column) |
| About | `/about` | Main nav + Footer (Company column) |
| Reviews | `/reviews` | Main nav + Footer (Company column) |
| Contact | `/contact` | Main nav (CTA button) + Footer |
| Thank You | `/thank-you` | Not in nav — CTA path only |
| Privacy Policy | `/privacy-policy` | Footer (Legal) |

---

## 14. Assumptions Made

- `[ASSUMPTION]` **Topic:** No service dropdown in main nav. **Why:** Planning PRD specified flat nav; emergency callers don't navigate; 5 service pages accessible via /services overview and footer. **Impact:** If testing shows scheduled shoppers struggle to find service pages, a services dropdown can be added in v2.

- `[ASSUMPTION]` **Topic:** Reviews page includes 8–12 reviews. **Why:** Discovery brief confirmed reviews are available but did not specify count. If fewer than 6 reviews exist, the standalone /reviews page may feel thin. **Impact:** If review count is low, /reviews may be downgraded to a homepage-only section.

- `[ASSUMPTION]` **Topic:** No Terms of Service page. **Why:** No e-commerce, no subscription, no user accounts — only a contact form. PIPEDA compliance is met with Privacy Policy alone. **Impact:** If legal review flags this, a ToS page can be added as a utility page.

- `[ASSUMPTION]` **Topic:** Backwater valve and sump pump are one page. **Why:** Related services, similar audience, small content volume — splitting would produce thin pages. **Impact:** If content volume grows in v2, these can be split.

---

## 15. Unresolved Issues

| Issue | Why unresolved | Who resolves | When |
|---|---|---|---|
| Map embed on /service-areas | Decision on whether to include a visual coverage map | Agency | Before wireframe: service-areas page |
| City rebate program (backwater valve) | Unknown if Markham offers a subsidy | Agency / Client verify | Before copy: backwater-valve page |
| Review count for /reviews page | Not verified | Agency via GBP | Before build: reviews page |
| /services/emergency page — phone prominence level | How many times the phone number should repeat on this one page | 04-wireframes to decide | Wireframe stage |

---

## 16. Blockers and Risks

**Blockers:** None — sitemap is complete. Wireframe stage can begin.

**Risks:**
- **No city-level service pages:** /service-areas overview carries all geographic SEO for cities other than Markham. This is a known SEO limitation for v1. If organic traffic from Stouffville/Unionville/Richmond Hill is a priority, service-area subpages should be built in v2.
- **Reviews page thin risk:** If Google Business Profile has fewer than 8 quality reviews, the standalone /reviews page will feel underpopulated. Verify count before building the page.
- **Emergency page CTA density:** Repeating the phone number multiple times on /services/emergency is intentional for the urgent audience, but wireframes must balance this with readability for non-emergency visitors who land there.

---

## 17. Handoff to 04-Wireframes

**Sitemap status:** Complete

**Instruction for 04-wireframes:**
> The sitemap above defines all 13 pages. Begin section planning in this order: Homepage first (highest conversion impact, most section decisions), /services/emergency second (most conversion-critical service page), /contact third (form + friction decisions), then remaining service pages (share a template), then /about, /service-areas, /reviews, /thank-you, /privacy-policy. For each page, section order must follow the user journey defined in the planning PRD Section 10. Homepage: hero (with phone number above fold on mobile) → TrustBar → ServicesGrid → WhyUs → ReviewStrip → ServiceAreas → CTABand → ContactBlock. Mobile: all layouts must account for 64px MobileBottomBar clearance at the bottom of the viewport.

**Priority pages for wireframe (do these first):**
1. Homepage — highest conversion impact; most section decisions; establishes the section patterns all other pages reference
2. /services/emergency — most urgent conversion surface; phone number density decisions must be made here
3. /contact — form field decisions, friction elimination, emergency escalation path within a form page

---

## 18. Instructions for Later Skills

### 05-Design System
> Site has 13 pages. Navigation is flat with no dropdowns. Service detail pages share a single reusable template (ServiceDetail component). The design system must define: (a) a service-detail page template that works for all 5 service pages, (b) a confirmation/thank-you page variant that is minimal and reassuring, (c) the OfferBanner component in yellow (#F59E0B) — this is the only yellow element on the site. Phone number display style must be defined at the component level — it appears in header, hero, CTABand, footer, MobileBottomBar, and service page CTA sections.

### 06-Build Plan
> Page count: 13. Dynamic routes: /services/[slug] using a single ServiceDetail component fed by data/services.ts. Static pages: all others. CTA path: /contact → /thank-you (form server action). URL pattern: /services/[service-slug] for all service detail pages. No CMS. Sitemap.ts must dynamically generate entries for all 5 service slugs. LocalBusiness JSON-LD schema in root layout applies to all pages.

### 07+ Feature Folders
> 10-hero: Hero section lives on homepage only. Phone number must be tappable and above fold on mobile. 11-navigation: MobileBottomBar is the critical mobile component — [Call Now] | [Schedule Service]. Header must include phone number on desktop. 12-forms: Contact form lives at /contact. Field list is finalized in Section 9 of this document. 13-social-proof: ReviewStrip on homepage (3 cards); /reviews page is a full collection (8–12 reviews). 14-feature-services: 5 service pages at /services/[slug], all using the ServiceDetail template. 17-feature-local-seo: Sitemap.ts must include all 13 pages; service page metadata defined per page; LocalBusiness schema in root layout.
