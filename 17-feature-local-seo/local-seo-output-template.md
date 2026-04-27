# Local SEO Output Template

Use this template to produce the full local SEO feature output. Fill every section. Label all assumptions explicitly. Do not leave sections blank — if a section is not applicable, write "N/A — [reason]."

---

## LOCAL SEO FEATURE PACKAGE
**Project:** [Business Name]
**Business Type:** [e.g., Pressure Washing / Medical Clinic / Salon / Electrician]
**Location:** [Primary city, state]
**Stage:** 17-feature-local-seo — output complete
**Business model type:** [A / B / C / D / E — with label]
**Geo model:** [1 / 2 / 3 / 4 / 5 — with label]
**Prior-stage quality:** [Strong / Acceptable with flags / Weak — assumptions made]

---

## Section 1 — Feature Verdict

**Local SEO depth:** [Light / Moderate / Aggressive but justified]
**Page expansion level:** [None / Restrained / Selective / Multi-location]
**Metadata strategy level:** [Basic / Moderate / Full per-page system]
**Schema strategy level:** [Minimal / Moderate / Full per-location]
**Maps and reviews local layer:** [Yes — full / Yes — limited / No / Limited to contact page]

**Geo model selected:** [Model number and name]
**Reason:** [2–3 sentences on why this geo model fits this business]

**One-sentence verdict:**
[The clearest possible summary of the right local SEO strategy for this business — what it is and what it is explicitly not.]

---

## Section 2 — Critique of Upstream Inputs

[Critique the upstream planning, sitemap, wireframe, and feature assumptions from a local-intent perspective. Be direct about weaknesses.]

**Sitemap (03):**
[What is strong, what is weak, what is missing from a local perspective. Are location pages already planned that are not justified? Are local pages missing that would help? Are any pages positioned incorrectly from a local-intent standpoint?]

**Planning (02):**
[Does the user journey reflect how local customers actually find and evaluate this business? Is the primary CTA aligned with the local intent patterns?]

**Wireframe (04):**
[Are local modules (maps, service-area sections, local trust signals) placed appropriately? Are any local modules misplaced, missing, or over-engineered?]

**Discovery (01):**
[Is there enough real local proof to support the local strategy? Are there gaps in review data, address confirmation, or service-area clarity?]

**Overall upstream gaps:**
[List any inputs that are missing or that require confirmation before local SEO decisions can be finalized.]

---

## Section 3 — Business Model and Search-Intent Classification

**Business model type:** [A / B / C / D / E]
**Type label:** [e.g., "Service-Area Business with Local HQ"]
**Explanation:** [1 paragraph on why this classification applies and what it means for local SEO strategy]

**Primary local search intent:**
[Service + city / Near me / Branded / Emergency/urgency / Comparison/vetting — with explanation of what this means for the page strategy]

**Secondary local search intent:**
[If applicable]

**Most important local trust signals for this audience:**
[e.g., "Star rating and review count — because this is a high-skepticism category where customers vet before calling" or "Address and hours confirmation — because the business has a public location and customers need to plan a visit"]

**What local signals matter least for this business:**
[e.g., "Neighborhood familiarity copy — this is a transactional service, not a community-relationship business"]

---

## Section 4 — Ownership Boundaries

**What 17-feature-local-seo owns on this project:**
[List the specific decisions this skill is making — metadata strategy, schema types, location page decisions, service-area page structure, map placement rules, etc.]

**What belongs to other agents:**

| Decision | Owner |
|---|---|
| [e.g., "Full testimonial section design and strategy"] | 13-feature-social-proof |
| [e.g., "Service page content and structure"] | 14-feature-services |
| [e.g., "Sitemap page count and hierarchy"] | 03-sitemap |
| [e.g., "Metadata implementation in the Next.js app"] | 07-implementation-planning |
| [e.g., "Design of map/review visual modules"] | 06-design-system |

---

## Section 5 — Recommended Geo Strategy

**Primary geography:** [City, metro area, or region — and why this is the anchor]
**Secondary geographies:** [List with status: "Justified for dedicated page" / "Mentioned in service-area page" / "Not targeted"]

**Geo targeting hierarchy:**

| Geography | Status | Treatment |
|---|---|---|
| [Primary city] | Primary | Homepage, all service pages, full schema anchor |
| [Secondary city 1] | [Justified / Not justified] | [Dedicated page / Service-area mention / No treatment] |
| [Secondary city 2] | [Justified / Not justified] | [Dedicated page / Service-area mention / No treatment] |

**Explicitly excluded geographies:**
[Cities or areas the business mentioned but that are not being targeted — and why.]

---

## Section 6 — Local Page Strategy

**Recommended page set:**

| Page | Justified? | Reason |
|---|---|---|
| Homepage (geo-targeted) | Yes — always | Primary local anchor |
| Service pages with local relevance | Yes | [Reason — e.g., primary landing for service + city queries] |
| Service-area page | [Yes / No] | [Reason] |
| [City] location page | [Yes / No] | [Reason — specific justification or rejection] |
| [City 2] location page | [Yes / No] | [Reason] |

**Pages explicitly not being built:**
[Be direct. "We are not building individual city pages for Cedar Park, Pflugerville, Kyle, and Buda. The homepage and service pages handle this coverage adequately. Dedicated pages for these markets would be thin and near-duplicate."]

**Location page justification (for each page being built):**
For each justified location page, confirm:
- [ ] The market is materially important (real volume)
- [ ] There is local proof available for this area
- [ ] The page has at least 40% unique copy angle
- [ ] The CTA or logistics differ usefully
- [ ] A user from this area would find it more useful than the homepage

---

## Section 7 — Metadata Strategy

**Homepage:**
- Title: `[Exact title — ~55–65 characters]`
- Meta description: `[Exact description — ~140–160 characters]`
- Canonical: self-referencing
- Index: yes

**Service pages (pattern + example):**
- Title pattern: `[Pattern]`
- Title example: `[Example for one specific service page]`
- Meta description pattern: `[Pattern]`
- Meta description example: `[Example]`
- Canonical: self-referencing
- Index: yes

**Contact page:**
- Title: `[Exact title]`
- Meta description: `[Exact description]`
- Index: yes

**About page:**
- Title: `[Exact title]`
- Meta description: `[Exact description]`
- Index: yes

**Service-area page (if applicable):**
- Title: `[Exact title]`
- Meta description: `[Exact description]`
- Index: yes

**Location pages (if applicable — pattern + first example):**
- Title pattern: `[Pattern]`
- Title example: `[Example]`
- Meta description pattern: `[Pattern]`
- Meta description example: `[Example — must reference something specific to this location]`
- Index: yes
- Canonical: self-referencing (do not canonical to homepage)

**Duplication control rules:**
[Specific rules for preventing duplicate or near-duplicate titles and descriptions across this site's page set]

**Local modifier rules:**
[When and how city names appear in titles and descriptions — explicit rules for this project]

---

## Section 8 — Schema Strategy

**Primary schema type:** [e.g., LocalBusiness / RoofingContractor / MedicalBusiness]
**AggregateRating justified:** [Yes — real data confirmed / No — insufficient real data / Pending confirmation]

**Schema by page:**

| Page | Schema types | Key properties |
|---|---|---|
| Homepage | [e.g., LocalBusiness (full), BreadcrumbList] | [address, geo, telephone, openingHours, areaServed, sameAs] |
| Service pages | [e.g., Service, BreadcrumbList, FAQPage if FAQs present] | [serviceType, provider, areaServed, description] |
| Contact page | [e.g., LocalBusiness (abbreviated), BreadcrumbList] | [name, address, telephone, openingHours] |
| About page | [e.g., LocalBusiness (abbreviated), BreadcrumbList] | [name, foundingDate, description] |
| Location pages | [e.g., LocalBusiness (full per location), BreadcrumbList] | [location-specific address, geo, telephone, openingHours] |

**Schema data object (homepage LocalBusiness — fill with real confirmed values):**
```json
{
  "@context": "https://schema.org",
  "@type": "[BusinessType]",
  "name": "[Legal business name]",
  "url": "https://[domain].com",
  "telephone": "[+1XXXXXXXXXX]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street — omit if Type B/C without public address]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [XX.XXXXXX],
    "longitude": [-XX.XXXXXX]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "areaServed": "[Primary city and state — or array of cities]",
  "image": "https://[domain].com/images/[business-photo].jpg",
  "sameAs": [
    "[Google Maps URL]",
    "[Facebook URL if active]"
  ]
}
```

**AggregateRating block (only if data is confirmed):**
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "[X.X]",
  "reviewCount": "[N]",
  "bestRating": "5"
}
```

**Schema validation checklist:**
- [ ] All address fields are real and confirmed
- [ ] Hours are accurate and match visible page content
- [ ] AggregateRating only present if real data confirmed
- [ ] FAQPage only present where FAQs are visible in HTML
- [ ] areaServed matches service-area page content
- [ ] sameAs URLs are real and active
- [ ] Schema can be generated from data file, not hardcoded per page

---

## Section 9 — Maps and Reviews Local-Trust Strategy

**Map recommendation:**
- Homepage: [Include / Omit — with reason]
- Contact page: [Include / Omit — with reason]
- Location pages: [Include / Omit — with reason]
- Map type: [Google Maps embed / Static image + "Get directions" link / None]
- Mobile behavior: [Specific — lazy-load? height cap? replace with static on mobile?]

**Review signal recommendation:**
- Homepage: [Include star rating + count near CTA? Yes / No — with reason]
- Contact page: [Include? Yes / No — with reason]
- Location pages: [Include location-specific review signal? Yes / No]
- Review count and rating (confirmed real data): [X.X stars / N reviews — or "Pending confirmation"]
- Display format: [e.g., "★★★★★ 4.9 · 83 Google reviews — compact strip below hero"]

**What must never be fabricated or overstated:**
[Explicit statement that review counts, star ratings, and reviewer identities must be real. Define what happens if real data is not available yet: "Omit the review count display until real data is confirmed."]

---

## Section 10 — Local Copy and On-Page Signal Rules

**City reference density rule for this project:**
[e.g., "Primary city ([City]) should appear in the H1, once in the intro paragraph, and 1–2 more times in the body. No section heading should repeat the city name. Maximum 5 city name appearances per service page."]

**Heading discipline for this project:**
[Specific rules for H1 and H2 structure on service pages, location pages, and the homepage.]

**Local familiarity tone rule:**
[e.g., "This business does not have neighborhood-specific project history yet. Avoid any copy that claims deep local knowledge. Reference the city and service area clearly and honestly, not familiarly."]

**Service-area communication approach:**
[e.g., "State the service area once clearly on the homepage in a brief section or trust line. Do not repeat the full area list on every page. Link to the service-area page for coverage confirmation."]

**Anti-spam confirmation for this project:**
[Run through the Part 8 checklist from `local-seo-copy-ux-rules.md` and confirm each item passes — or document what needs to be fixed.]

---

## Section 11 — Internal Linking Strategy

**Local-intent link map:**

| From | To | Purpose |
|---|---|---|
| Homepage services section | Individual service pages | Route local visitors to right service |
| Homepage footer or service-area section | Service-area page | Confirm coverage |
| Service pages | Contact/quote page | Local conversion path |
| Service pages | Related service pages (2–3 max) | Paired services |
| Service-area page | Contact/quote page | Edge-of-area confirmation path |
| Location pages | Relevant service pages (2–4 max) | Connect location to service |
| Location pages | Contact/quote page | Location-specific conversion |
| About page | Primary city service page(s) | Reinforce local relevance |

**What overlinking to avoid:**
[Specific to this project — e.g., "Do not link every occurrence of 'Austin' in body copy to a location page. Do not add a sidebar with links to all city pages on service pages."]

---

## Section 12 — UX / Trust / Mobile / Performance Rules

**Local UX trust standard:**
[What should a visitor from the primary city feel when they land on this site? What confirms local legitimacy for this specific business type?]

**Mobile-specific local module rules:**

| Module | Desktop treatment | Mobile treatment |
|---|---|---|
| Map embed | [Size, placement] | [Lazy-load, height cap, or replace with static image + link] |
| Review strip | [Placement, format] | [Single compact line above CTA, or below hero] |
| Service-area section | [How coverage is communicated] | [Condensed — most important cities only, link to full page] |
| Click-to-call | [Placement in nav/CTA] | [Persistent or prominent — tap-to-call link required] |

**Performance constraints:**
[Specific rules — e.g., "Google Maps embed must be lazy-loaded. Review widget from third-party platform is not approved — use static review data instead. Location page templates must not add more than [X]KB over standard service page weight."]

---

## Section 13 — Implementation Notes

**Global config data structure:**
```typescript
// lib/config/local-seo.ts
export const localSeoConfig = {
  businessName: string,
  businessType: string,           // Schema @type
  primaryCity: string,
  primaryState: string,
  primaryZip: string,
  streetAddress: string | null,   // null for Type B/C without public address
  coordinates: { lat: number; lng: number } | null,
  telephone: string,              // E.164 format: +1XXXXXXXXXX
  openingHours: OpeningHoursSpec[],
  serviceArea: string[],          // Array of cities served
  aggregateRating: {              // null until real data confirmed
    ratingValue: number;
    reviewCount: number;
  } | null,
  sameAs: string[],               // Active profile URLs only
}
```

**Per-page metadata generation:**
```typescript
// Metadata should be generated from page data files, not hardcoded
// Example pattern for service pages:
export function generateServiceMetadata(service: ServiceData, city: string) {
  return {
    title: `${service.name} in ${city} | ${businessName}`,
    description: service.metaDescription,   // Unique per service — not template-generated
    canonical: `https://domain.com/services/${service.slug}`,
  }
}
```

**Schema injection approach:**
- Homepage: inject full LocalBusiness JSON-LD in `<head>` via page component
- Service pages: inject Service + BreadcrumbList JSON-LD
- Location pages: inject per-location LocalBusiness JSON-LD (built from location data file)
- FAQPage schema: inject only when FAQ section component is rendered on the page
- All schema values sourced from config/data files — never hardcoded in component JSX

**Component flags:**
```typescript
// Page-level flags that control local SEO module rendering
{
  showMap: boolean,               // true only for Type A or confirmed public-address pages
  showReviewCount: boolean,       // true only when real data is confirmed
  showServiceAreaSection: boolean,
  mapType: 'embed' | 'static',    // 'static' preferred for performance
  serviceAreaPageLink: string | null,
}
```

**Maintenance expectations:**
- Review count/rating: update in `local-seo.ts` config — propagates to all schema and display components
- Hours changes: update in `local-seo.ts` config — propagates to schema and contact page
- Service area expansion: update `serviceArea` array — propagates to service-area page and schema
- New location pages: add a new location data file; schema and metadata generate from it

---

## Section 14 — Risks and Failure Modes

**Risk 1: [Specific risk for this project]**
[e.g., "Service-area page becoming a city-list skeleton. Mitigation: enforce minimum content requirements — coverage map or radius statement, honest city list, CTA, and at least one supporting proof element."]

**Risk 2:**
[e.g., "AggregateRating schema added before review data is confirmed. Mitigation: gate this behind a confirmed flag in the config — default to null until data is verified."]

**Risk 3:**
[e.g., "City names stuffed into body copy by content writers after launch. Mitigation: define the city-reference density rules in the copy guidelines document and include in client handoff."]

**Risk 4:**
[e.g., "Map embed added to a Type B service business contact page, implying customers should visit a residential address. Mitigation: set showMap flag to false for this business by default."]

**Risk 5 — Thin location pages:**
[e.g., "If the business requests location pages for more cities in the future without providing local proof. Mitigation: define the justification checklist and make it a requirement before any new location page is added."]

---

## Section 15 — Final Handoff

**What is built and why:**
[Concise summary — one paragraph covering the page structure, metadata approach, schema approach, and local module decisions]

**What is deferred pending confirmation:**
[Specific items that cannot be finalized without client/agency confirmation — e.g., real review count, confirmed address, specific service-area cities]

**Handoff to 07-implementation-planning:**
- Metadata generation pattern: [Reference Section 13 pattern]
- Schema injection approach: [Reference Section 13 approach]
- Component flags for local modules: [Reference Section 13 flags]
- Global config file structure: [Reference Section 13 config]

**Handoff to 03-sitemap (if pages need to be added or removed):**
[Any adjustments to the existing sitemap — e.g., "Add service-area page at /service-area. Do not build individual city pages for Cedar Park and Round Rock — remove from sitemap if already planned."]

**Handoff to 13-feature-social-proof:**
[What this skill has defined about reviews/maps and where 13 takes over — e.g., "Local review count display near CTA is defined here. Full testimonials strategy, section design, and social proof hierarchy belong to 13-feature-social-proof."]

**Assumptions made:**
| Assumption | Based on | Risk if wrong |
|---|---|---|
| [e.g., "Business has a public-facing address"] | [01-discovery — address listed] | [Medium — if address is not public-facing, map and schema strategy changes] |
| [e.g., "Review count of 83 at 4.9 stars"] | [01-discovery client intake] | [High — must be confirmed before AggregateRating schema goes live] |
