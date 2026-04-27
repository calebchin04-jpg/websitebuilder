# Examples

Three examples in document-comparison format: input planning PRD (summarized) → critique → sitemap output (abbreviated). Each example highlights a distinct scenario.

---

## Example 1 — Strong planning PRD → Strong sitemap

**Scenario:** Marcus Pro Wash (Austin pressure washing). Well-formed planning PRD.

---

### Input: Planning PRD Summary

- Business: Marcus Pro Wash, Austin TX, residential and light commercial pressure/soft washing
- Core audience: Homeowners 35–60, quality-focused, fear of surface damage
- Primary CTA: Call directly (click-to-call, sticky header + hero + post-gallery + contact)
- Secondary CTA: Quote request form
- Differentiator: Technique-first, proven via reviews, free re-clean guarantee
- User journey: Arrive (Google search) → orientation (hero proves expertise immediately) → trust (47 reviews, before/after) → evaluation (services detail) → conversion (call or form)
- Page-type responsibilities: Homepage = proof-first; Services = technique explanation; Gallery = before/after; About = Marcus's story and guarantee; Contact = form + phone; Service Areas = Austin neighborhood SEO
- Features: Required: hero, nav, gallery, contact form, reviews section, click-to-call; Deferred: blog, CMS, live chat
- Local SEO: Austin metro, multiple neighborhoods mentioned

---

### Critique

> **Overall planning PRD quality:** Strong
>
> Issues:
> `[SEO]` Geographic scope mentions "Austin neighborhoods" but doesn't specify which ones. Decision will be made at sitemap level — will target top 3–4 by search volume and proximity. Labeled as assumption.
>
> `[SCOPE]` "Light commercial" is mentioned but no commercial-specific page or CTA is specified. Treating commercial as a secondary note on the residential services page. Flagged for client confirmation.

No send-back required.

---

### Abbreviated Sitemap Output

**Information architecture logic:**
This is an 11-page local service site structured for direct-call conversion. Services are individual pages because pressure washing and soft washing have distinct search queries and different customer needs. City pages are included for Austin's top 4 neighborhoods where competitor search volume is strong. No blog — the content strategy is review-heavy, not editorial.

**Key structural decisions:**
- Services: Option B (overview + individual pages) — "pressure washing" and "soft washing" are distinct search queries
- Gallery: Dedicated page — visual business with 15+ strong before/after sets
- About and Team merged — Marcus is the business
- No separate reviews page — testimonials live in sections across Homepage, Services, and About
- 4 city pages — Austin (city), Cedar Park, Round Rock, Georgetown — based on service area coverage

---

**Full page hierarchy:**

```
Marcus Pro Wash

├── / (Homepage)
├── /services
│   ├── /services/pressure-washing
│   ├── /services/soft-washing
│   └── /services/deck-cleaning
├── /gallery
├── /about
├── /service-areas
│   ├── /austin-pressure-washing
│   ├── /cedar-park-pressure-washing
│   ├── /round-rock-pressure-washing
│   └── /georgetown-pressure-washing
├── /contact
│
├── [CTA Path]
│   └── /thank-you
│
└── [Utility]
    ├── /privacy-policy
    └── 404
```

Total: 14 pages

---

**Main navigation:**

```
Marcus Pro Wash | Services ▾ | Gallery | About | Service Areas | Get a Free Quote →
```

Services dropdown: Pressure Washing, Soft Washing, Deck Cleaning

---

**Selected page purpose statements:**

**/ — Homepage**
- Purpose: Establish Marcus as the technique-first, trusted choice before the visitor reads a word. Proof-forward layout drives calls.
- User need: Fast confidence that this business is safe to hire
- Business need: Filter out price-shoppers, attract quality-focused homeowners
- CTA: Call Marcus (click-to-call, sticky + hero)
- Required content: Hero with before/after or on-site photo of Marcus; review count + star rating; guarantee callout; service overview; featured before/afters; primary CTA

**`/services/soft-washing`**
- Purpose: Convert visitors who searched specifically for soft washing in Austin. Explain the technique difference and why it's right for their surface type.
- User need: Understand what soft washing is and confirm this business does it correctly
- Business need: Capture this specific search query; establish expertise before the call
- CTA: Call for a free assessment
- Required content: What soft washing is; which surfaces need it vs. pressure washing; why technique matters; before/after examples for soft-wash surfaces; CTA + guarantee callout

**`/austin-pressure-washing`**
- Purpose: Rank for "pressure washing Austin TX" and related queries. Confirm local service credibility.
- User need: Confirm the business serves their specific area
- Business need: Local SEO traffic for primary city keyword
- CTA: Call Marcus, mention you're in Austin
- Required content: Austin-specific intro; service description; local social proof (reviews from Austin customers if possible); service area confirmation; CTA

---

**User paths:**

Primary path: Google "pressure washing Austin" → `/austin-pressure-washing` → reads, trusts → calls
Secondary path: Google Maps → Homepage → Gallery → Services → calls
Evaluation path: Homepage → About → Services → Contact (quote form)

---

**Handoff to 04-wireframes:**
> Begin with Homepage and /services/pressure-washing. Both are high-conversion pages with the most structural decisions. Homepage must prioritize Marcus's face/on-site photo in the hero + review count above the fold on mobile. City pages all use the same template — wireframe one city page and it applies to all four.

---

## Example 2 — Weak planning PRD → Send-back triggered

**Scenario:** Generic digital marketing agency. Planning PRD received is structurally incomplete.

---

### Input: Planning PRD Summary

- Business: Digital Edge, B2B marketing agency
- Audience: "Small business owners" (no further detail)
- CTA: "Contact us" (no mechanism specified)
- Page-type responsibilities: "About, Services, Contact, Blog" (no detail on what each must accomplish)
- Features: Listed as "standard agency website features"
- User journey: Not defined
- Local SEO: Not mentioned

---

### Critique

> **Overall planning PRD quality:** Weak — send-back triggered
>
> Issues:
>
> `[AUDIENCE]` No core audience defined. Cannot determine what evaluation pages are needed or what trust signals matter.
>
> `[CONVERSION]` "Contact us" is not a CTA mechanism. Cannot determine whether a contact form, Calendly embed, or call is the conversion action — this affects page structure entirely.
>
> `[STRUCTURE]` Page-type responsibilities are a flat list with no job statements. No basis for deciding which pages are required vs. optional.
>
> `[SCOPE]` "Standard agency features" is not a feature decision. Cannot build a sitemap without knowing what features are active.
>
> **Send-back threshold met: 4 of 5 foundations are missing.**

---

### Send-Back

```
SEND-BACK TO 02-PLANNING
Reason: The planning PRD is missing structural foundations required 
to build the information architecture.

Required fixes:

1. Core audience: Define the specific client type Digital Edge 
   serves — industry, company size, problem they're trying to 
   solve. "Small business owners" cannot be the planning target.

2. Primary CTA mechanism: Define what action the visitor takes 
   when they're ready to hire — Calendly booking, a contact form 
   with specific fields, a phone call, or something else. The 
   CTA destination page and its functional requirements depend 
   entirely on this.

3. Page-type responsibilities: For each page type mentioned 
   (About, Services, Contact, Blog), state its single strategic 
   job in the user journey and what it must accomplish for the 
   primary audience.

4. Feature decisions: Replace "standard agency features" with 
   a classified list (Required Now / Deferred). At minimum, 
   confirm: Does this build include case studies? A blog? 
   Pricing? Team page? Each of these implies or removes pages.

Structural risks from current gaps:
- Without audience definition, the services page hierarchy 
  will be wrong — wrong number of pages, wrong content emphasis.
- Without CTA mechanism, the contact/booking page structure 
  is undecidable.
```

---

### After return — revised planning PRD (partial):
- Audience: B2B professional services (law firms, consultants, accountants, 5–30 employees) who need more qualified leads from their website
- CTA: Book a 30-minute strategy call via Calendly embed on the contact page
- Feature decisions: Case studies (3 available) — Required; Team — 4 people, include; Blog — Deferred; Pricing — No (proposal-based); Services: 3 specific service types defined

---

### Abbreviated sitemap (post-return):

```
Digital Edge

├── / (Homepage)
├── /services
│   ├── /services/b2b-lead-generation
│   ├── /services/linkedin-advertising
│   └── /services/google-ads-for-professional-services
├── /case-studies
│   ├── /case-studies/[client-1]
│   ├── /case-studies/[client-2]
│   └── /case-studies/[client-3]
├── /about
├── /team
├── /contact (Calendly embed + short form)
│
├── [CTA Path]
│   └── /call-confirmed
│
└── [Utility]
    ├── /privacy-policy
    └── 404
```

Total: 12 pages

Main nav: Services ▾ | Case Studies | About | Team | Book a Call →

---

**Key page merges and decisions:**
- No blog at launch (deferred — no content strategy)
- No pricing page (proposal-based model — pricing would confuse the CTA)
- Case studies as individual pages — 3 detailed stories are better than a generic social proof section
- Team gets its own page (4 named people, personal credibility is a B2B conversion driver)

---

## Example 3 — Complex local business with local SEO decisions

**Scenario:** Multi-service home services company (plumbing + HVAC) serving 6 cities in a metro area.

---

### Input: Planning PRD Summary

- Business: Morrison Home Services — plumbing and HVAC, Dallas-Fort Worth metro
- Audience: Homeowners 30–65, urgency-driven (often emergency repairs), some planned work
- CTA: Call 24/7 — plus online quote form for non-urgent jobs
- Services: Plumbing (drain cleaning, water heater, leak repair), HVAC (AC repair, heating, tune-up)
- Local SEO: DFW metro, 6 cities (Dallas, Fort Worth, Plano, Arlington, Garland, Irving)
- Features: Required — emergency call CTA everywhere, dual CTAs, service pages; Deferred — blog, membership plan

---

### Key structural decisions and reasoning:

**Service structure:** Option B — Services overview + individual service pages
Each service has independent search volume (e.g., "water heater repair Plano" is a real query). 6 service pages across plumbing and HVAC.

**Local SEO:** 12 city × service pages REJECTED. Rationale: 6 cities × 6 services = 36 pages — this is spammy scale for a single business. Decision: 6 city hub pages (one per city) plus individual service pages that all reference the full service area. City pages link to all services available in that city.

Pattern chosen: `/service-areas/[city-slug]` for hubs, plus `/services/[service-slug]` with service-area content included on each service page.

**No separate emergency page:** Emergency call CTA lives on every page via sticky header. Not a page — a behavior.

**No blog:** Deferred. No content plan. Does not belong in this sitemap.

---

### Abbreviated page hierarchy:

```
Morrison Home Services

├── / (Homepage)
├── /services
│   ├── /services/drain-cleaning
│   ├── /services/water-heater-repair
│   ├── /services/leak-repair
│   ├── /services/ac-repair
│   ├── /services/heating-repair
│   └── /services/hvac-tune-up
├── /service-areas
│   ├── /service-areas/dallas
│   ├── /service-areas/fort-worth
│   ├── /service-areas/plano
│   ├── /service-areas/arlington
│   ├── /service-areas/garland
│   └── /service-areas/irving
├── /about
├── /contact
│
├── [CTA Path]
│   └── /thank-you
│
└── [Utility]
    ├── /privacy-policy
    └── 404
```

Total: 19 pages

---

**URL pattern decision:**
`/service-areas/[city]` — Service-first pattern because the business offers multiple service types in each city and city pages are hubs, not service-specific landing pages.

**Main nav:**
```
Morrison | Services ▾ | Service Areas ▾ | About | Call Now →
```

Services dropdown: 6 service names
Service Areas dropdown: 6 city names

**Note:** Two dropdowns are justified here because both service and location are high-intent entry points. For a simpler single-service business, this would be excessive.

---

**City page structure:**
Each `/service-areas/[city]` page:
- City-specific intro + coverage confirmation
- List of available services with links to each service page
- Local trust signals (any reviews from that city)
- Emergency call CTA
- Online quote form as secondary CTA
- NOT: duplicate service descriptions — those live on `/services/[service-slug]`
