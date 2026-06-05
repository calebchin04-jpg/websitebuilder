# Local SEO Schema Rules

This file defines which schema types are justified, which properties are required vs. optional vs. forbidden, validation constraints, and page-level schema logic for local business websites.

---

## Part 1: Core Schema Principles

Schema markup must:
- Be accurate — every property value must reflect what is actually true about the business
- Align with visible page content — do not mark up information that a user cannot find on the page
- Be minimal-to-sufficient — include what is genuinely useful, not every possible property
- Be implementation-maintainable — the team should be able to update it when business details change
- Never be fabricated — review counts, star ratings, and addresses must be real

Schema markup must not:
- Include AggregateRating or Review markup without real, supportable data
- Duplicate invisible information across every page indiscriminately
- Copy schema templates from generic sources without validation against this specific business
- Include properties that contradict the visible page (e.g., schema says "open 24/7" but the page says "by appointment only")

---

## Part 2: Schema Types by Justification Level

### Strongly Justified for Most Local Business Sites

**LocalBusiness (or specific subtype)**
The primary schema type for nearly every business in this system.

Use the most specific applicable subtype when available:
- `Plumber`, `Electrician`, `HVACBusiness`, `RoofingContractor`, `LandscapingBusiness` — for trade service businesses
- `MedicalBusiness`, `Physician`, `Dentist` — for medical/clinical businesses
- `BeautySalon`, `HairSalon`, `NailSalon` — for personal care
- `AutoRepair` — for automotive services
- `LegalService` — for legal
- `FinancialService`, `AccountingService` — for financial/accounting
- If no specific subtype fits, use `LocalBusiness`

**Core required properties (apply only when the information is real and confirmed):**
```json
{
  "@type": "LocalBusiness",
  "name": "Business legal name",
  "url": "https://domain.com",
  "telephone": "+1XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Street address if public-facing",
    "addressLocality": "City",
    "addressRegion": "State abbreviation",
    "postalCode": "ZIP",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": XX.XXXXXX,
    "longitude": -XX.XXXXXX
  },
  "openingHoursSpecification": [],
  "image": "URL to primary business image",
  "priceRange": "$$ — only if applicable and honest"
}
```

**Type B/C (service-area business) — address handling:**
If the business does not have a public-facing address, omit `streetAddress` and use `areaServed` instead of implying a customer-visit location. This matches GMB service-area-only configuration.

**areaServed:**
Use when the business serves a defined geographic area. Can be:
- A `City` or `State` schema object
- A plain string for the primary service area
- An array of cities (restrained — match the actual service-area page content)

Do not stuff `areaServed` with 30+ cities if the service-area page only honestly names 8.

---

**BreadcrumbList**
Justified on every page with a clear hierarchy below the homepage.

Example for a service page:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://domain.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://domain.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Roof Soft Wash", "item": "https://domain.com/services/roof-soft-wash" }
  ]
}
```

Justified: yes, on all non-homepage pages.

---

**WebSite**
Justified on the homepage only, primarily to enable sitelinks search box if the site has a search function. For most local service businesses without site search, this adds limited value but is harmless when accurate.

```json
{
  "@type": "WebSite",
  "name": "Business Name",
  "url": "https://domain.com"
}
```

Optional. Include only when the homepage is also where Organization/LocalBusiness schema lives.

---

### Conditionally Justified

**Service**
Justified on individual service pages when the service has meaningful description content visible on the page.

```json
{
  "@type": "Service",
  "serviceType": "Roof Soft Wash",
  "provider": { "@type": "LocalBusiness", "name": "Business Name" },
  "areaServed": "Austin, TX",
  "description": "Low-pressure cleaning that removes algae, moss, and streaks from residential roofs."
}
```

Only mark up services that have real pages. Do not mark up every service in a flat list on the homepage as individual Service objects — that is over-marking.

---

**FAQPage**
Justified only when FAQ content is genuinely visible on the page in a question-and-answer format.

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a roof soft wash take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential roofs take 2–3 hours depending on size and pitch."
      }
    }
  ]
}
```

**Hard rule:** Do not add FAQPage schema for FAQs that do not appear visibly on the page. Google has penalized invisible FAQ schema. If FAQs are collapsed in an accordion, they still count as visible — but if they are only in the schema and nowhere in the HTML, they are fraudulent.

---

**AggregateRating / Review**
Justified only when:
- Real reviews exist with a real star rating and real count
- The rating data is displayed visibly on the page (or clearly sourced from a real visible integration like Google Reviews embed)
- The values are accurate and can be updated when they change

```json
{
  "@type": "LocalBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "83",
    "bestRating": "5"
  }
}
```

**Hard rule:** Never fabricate review counts or star ratings. Never use round numbers that are clearly invented ("100 reviews" with exactly a 5.0 rating). If real data is not confirmed, omit AggregateRating entirely. A missing rating is not a ranking problem — a false rating is a trust and policy problem.

---

**sameAs**
Justified when the business has real, confirmed presence on third-party platforms.

```json
"sameAs": [
  "https://www.google.com/maps/place/[place-id]",
  "https://www.yelp.com/biz/[slug]",
  "https://www.facebook.com/[page-slug]"
]
```

Only include URLs that are real and active. Do not include placeholder or aspirational profile links.

---

### Rarely Justified / Use With Caution

**Organization**
Use `LocalBusiness` (which is a subtype of `Organization`) rather than `Organization` alone for local businesses. `Organization` is better suited for national or enterprise brands without a local physical anchor.

Only use `Organization` as a supplement to `LocalBusiness` if the business has a meaningful brand identity separate from its local presence (e.g., a franchise parent brand that has its own homepage above the individual location pages).

**Product**
Rarely appropriate for service businesses. Do not mark up services as Products unless the business genuinely sells a packaged product (equipment, physical goods).

**Event**
Only when the business hosts real events visible on the page.

---

## Part 3: Page-Level Schema Assignment

Define which schema lives on which page type.

| Page type | Schema types | Notes |
|---|---|---|
| Homepage | LocalBusiness (full), WebSite (optional), BreadcrumbList (if subpages exist), AggregateRating (if real data exists) | This is the primary schema anchor for the whole site |
| Service pages | Service, BreadcrumbList, FAQPage (if FAQ section visible) | LocalBusiness can be referenced but not repeated in full |
| Contact page | LocalBusiness (abbreviated — name, address, telephone, hours), BreadcrumbList | Reinforce the local signal near the conversion action |
| About page | LocalBusiness (abbreviated), BreadcrumbList | Reinforce legitimacy and founding context |
| Location pages | LocalBusiness (full, location-specific), BreadcrumbList, AggregateRating (if location-specific data exists) | Each location should have distinct schema with its own address/hours/phone |
| Service-area page | LocalBusiness (abbreviated with areaServed array), BreadcrumbList | Do not use full-page LocalBusiness schema that competes with homepage |
| Reviews/Testimonials page | AggregateRating (if real data is visible), BreadcrumbList | Only if the review count and rating are visibly stated on the page |

---

## Part 4: Schema Validation Constraints

Before finalizing schema recommendations, apply these checks:

**Accuracy check:**
- Is every address field real and public-facing (or properly omitted for SABs)?
- Are opening hours accurate to what the business actually offers?
- Are review counts and star ratings real and sourced?
- Does `areaServed` match the actual service-area page content?

**Visibility check:**
- Does FAQPage schema correspond to FAQs that are rendered in the HTML?
- Does AggregateRating schema correspond to a visible rating display on the page?
- Does Service schema describe a service with an actual page?

**Duplication check:**
- Is the full LocalBusiness block only on the homepage (and per-location pages for multi-location)?
- Are service pages using abbreviated/referenced schema, not repeating the full business block?

**Implementation check:**
- Can the schema be generated from the data structure (not hardcoded per-page)?
- Can AggregateRating values be updated in one place when the review count changes?
- Are coordinates verified against the actual business address?

---

## Part 5: Schema Anti-Patterns

These patterns are banned.

**1. AggregateRating with invented values**
"ratingValue: 5.0, reviewCount: 100" with no real source. This is fabrication and violates Google's structured data guidelines.

**2. FAQPage schema for invisible FAQs**
FAQ markup that does not correspond to visible HTML on the page. Google has issued manual penalties for this.

**3. Full LocalBusiness block on every page**
Repeating the complete LocalBusiness schema block (with full address, hours, coordinates) on every single page. This is noise and can create conflicting signals if any field is inconsistent across pages.

**4. Generic schema copied from templates**
Schema that was copy-pasted from an example without verifying that the properties apply to this business. Check every property.

**5. Using "Organization" instead of "LocalBusiness" for local businesses**
Organization schema lacks the local-specific properties (address, geo, openingHours, areaServed) that help search engines understand local relevance.

**6. sameAs pointing to inactive or unclaimed profiles**
Linking to a Yelp page the business never claimed or a Facebook page with no activity. If the profile is not real and active, omit it.

**7. priceRange without real basis**
Using `"priceRange": "$$$"` arbitrarily. Only include priceRange if it reflects real market positioning and the business is comfortable with the implied tier.
