# Local SEO Metadata Rules

This file defines title tag logic, meta description logic, slug conventions, canonical rules, indexation guidance, and duplication-control rules by page type.

---

## Part 1: Core Metadata Principles

All metadata produced by this system must:

- Sound like something a real business would publish — not a keyword formula
- Be human-readable at a glance in search results
- Reflect the real geographic context without stuffing
- Help the right page win for the right intent
- Avoid duplicate title or description patterns across similar pages
- Stay within usable display lengths (title: ~55–65 characters; description: ~140–160 characters)

Local modifiers (city names, region references) belong in metadata when they are genuinely descriptive of the page. They do not belong in metadata when the only reason for including them is to target keywords.

---

## Part 2: Metadata by Page Type

### Homepage

**Title pattern:**
`[Primary Service or Brand Category] in [Primary City] | [Business Name]`
or for branded-primary businesses:
`[Business Name] — [Primary Service] in [Primary City]`

**Title notes:**
- City goes in the title when the business is geographically specific (Type A, B, C)
- Do not stack multiple cities in the homepage title ("Austin, Round Rock, Cedar Park, Pflugerville")
- Do not use pipe-separated city lists
- Keep the service description specific, not generic ("Residential Roofing" not "Roofing Services")

**Meta description pattern:**
One sentence about what the business does and who it serves, followed by a clear CTA signal.

Example:
> "Family-owned roofing contractor serving Austin and the surrounding Hill Country. Free estimates — call us or request a quote online."

**What to avoid:**
- Repeating the title verbatim in the description
- Stuffing secondary cities into the description
- Vague descriptions: "Quality services for your needs"
- Manufactured urgency: "Don't wait — call today before it's too late"

---

### Service Overview Page (if it exists as a standalone page)

**Title pattern:**
`[Service Category] Services in [Primary City] | [Business Name]`

**Meta description pattern:**
Brief statement of what services are offered and the primary outcome or differentiator, with a CTA signal.

Example:
> "Commercial and residential pressure washing in Austin TX. Driveways, houses, roofs, and patios. Insured and locally owned — request a quote today."

---

### Individual Service Pages

**Title pattern:**
`[Specific Service Name] in [Primary City] | [Business Name]`

**Title notes:**
- Use the most natural, searchable service name — not a branded variation the audience would not type
- City is appropriate here because service pages are the primary landing pages for service + city queries
- Do not add secondary cities to service page titles
- Do not include multiple service names in one title

**Meta description pattern:**
What this specific service does, who it is for or what problem it solves, and the CTA.

Example:
> "Soft wash roof cleaning in Austin that removes algae, moss, and black streaks without damaging shingles. Schedule a free inspection."

**What to avoid:**
- Repeating "in [city]" multiple times within the description
- Keyword-led descriptions that read like a list: "Austin roofing, roof repair Austin TX, best roofer Austin"
- Identical meta description templates with only the service name swapped

---

### Contact Page

**Title pattern:**
`Contact [Business Name] — [Primary City] [Short Service Label]`
or:
`Get a Free Quote | [Business Name] — [Primary City]`

**Meta description pattern:**
Specific to the conversion action available, with location confirmation.

Example:
> "Request a free quote from our Austin pressure washing team. Call, email, or fill out the form — we respond within one business day."

**Indexation note:**
Contact pages should be indexed. Some teams noindex contact pages by default — this is a mistake for local businesses where the contact page is a local landing surface.

---

### About Page

**Title pattern:**
`About [Business Name] — [Primary City] [Business Type]`

**Meta description pattern:**
Brief narrative about the business, its founding, and its local identity.

Example:
> "Peak Ridge Pressure Washing is a family-owned business serving Austin homeowners since 2018. Licensed, insured, and built on word-of-mouth referrals."

**Local modifier notes:**
- The About page is a good place to reinforce local roots naturally — it is not stuffed, it is earned
- City name should appear no more than 2–3 times in the meta description

---

### Reviews / Testimonials Page

**Title pattern:**
`[Business Name] Reviews — [Primary City] Customers`
or:
`What Our Customers Say | [Business Name]`

**Meta description pattern:**
Reference the review source and the service context if possible.

Example:
> "See what Austin homeowners say about Peak Ridge Pressure Washing. 4.9 stars across 80+ Google reviews."

**Indexation note:**
Reviews pages should generally be indexed. If the page is thin (fewer than 5–10 real reviews), consider including reviews as a section on another page rather than creating a standalone page that could be thin content.

---

### Location Pages (when justified)

**Title pattern:**
`[Primary Service] in [City] | [Business Name]`

**Title notes:**
- Title must be specific to this location page — do not repeat the homepage title format exactly
- The service reference should be specific to what the business actually does in this area
- Do not stack multiple services or cities in the title

**Meta description pattern:**
Must reference something specific to this location — a project, a neighborhood, a local logistics note — not a generic version of the homepage description.

Example:
> "Roof and driveway cleaning in Round Rock TX. We've worked across the Teravista and Forest Creek neighborhoods — free quotes available this week."

**What to avoid:**
- City location pages with identical descriptions except for the city name swapped
- Location pages whose description could apply to any market the business serves

---

### Service-Area Page

**Title pattern:**
`[Business Name] Service Area — [Primary City] and [Region/Surrounding Areas]`
or:
`Areas We Serve | [Business Name] — [Primary City] and Beyond`

**Meta description pattern:**
Clear statement of the coverage area, with a confirmation CTA for edge-of-area inquiries.

Example:
> "Peak Ridge serves Austin and surrounding areas including Cedar Park, Georgetown, Pflugerville, and Kyle. Not sure if we reach you? Contact us to confirm."

---

## Part 3: Duplication Control Rules

Duplicate or near-duplicate title tags across pages are a signal of thin content and poor page differentiation. Apply these rules:

**No two pages on the site should have the same title tag.**

Common duplication failures to prevent:
- Service pages with titles that differ only in the service name but follow the exact same formula (acceptable) vs. titles that are nearly identical in meaning ("Roof Cleaning Austin" vs "Roof Wash Austin" on two separate pages — this is a duplication problem)
- Location pages with titles that differ only in the city name and carry no additional differentiation signal
- Meta descriptions copy-pasted across service pages with only the service name changed

**Prevent duplication by:**
- Grounding each page's metadata in something unique: a specific service, a specific market, a specific differentiator or proof point
- Treating metadata as a real description of this specific page — not a template
- Using the implementation data structure to flag pages where descriptions are template-only

---

## Part 4: Slug and URL Conventions

**Service pages:** `/services/[service-slug]`
Example: `/services/roof-soft-wash`, `/services/house-washing`

**Location pages (when justified):** `/[city-slug]` or `/locations/[city-slug]`
Example: `/round-rock`, `/locations/cedar-park`

**Service-area page:** `/service-area` or `/areas-we-serve`

**Contact page:** `/contact`

**About page:** `/about`

**Rules:**
- Use lowercase hyphenated slugs — no underscores, no camelCase, no spaces
- Slugs should use the most common search-intent phrasing, not internal naming
- Do not include keyword modifiers in slugs that are not also in the page title ("best-roofing-austin" as a slug when the page title is "Roofing Services in Austin" is misaligned)
- Keep slugs stable — do not change them after launch without proper redirects

---

## Part 5: Canonical and Indexation Guidance

**Standard indexation stance:**
All content pages (homepage, service pages, about, contact, reviews, location pages) should be indexed by default.

**Noindex candidates:**
- Thank-you pages after form submissions
- Admin or preview pages
- Duplicate location pages that failed the justification test but exist in the CMS for management purposes
- Location pages that are 90%+ duplicate and cannot be genuinely differentiated — either improve them or noindex them

**Canonical rules:**
- Each location page should have a self-referencing canonical
- If a service-area page and a location page cover the same geography with similar content, canonical the weaker page to the stronger one or merge them
- Paginated review or blog archives: canonical first page; use rel=next/prev if applicable
- HTTPS canonical should be set — do not let http versions compete

**Do not noindex unnecessarily:**
Some implementations noindex contact pages, about pages, or service pages to "protect crawl budget." For local business sites (typically 10–30 pages), this is wrong. Every real page should be indexed. Noindex is a tool for removing weak or duplicate content, not for protecting small sites.
