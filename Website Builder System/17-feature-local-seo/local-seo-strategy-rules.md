# Local SEO Strategy Rules

This file defines how to classify the business model, model local search intent, select the right geo strategy, and make hard calls about page justification and expansion.

---

## Part 1: Business Model Classification

Before any other decision, classify the business into one of five types. This classification drives every downstream recommendation.

**Type A — Storefront Local Business**
The business has a real public-facing location that customers visit.
Examples: clinic, salon, gym, retail store, studio, restaurant, physical office with scheduled visits

Local SEO bias:
- Strong homepage and contact/about/location pages
- Map/address/hours are legitimate core trust signals
- LocalBusiness schema with full address and hours is strongly justified
- Service-area pages are usually unnecessary unless the business also sends staff out
- Reviews near the location/contact area add legitimacy

**Type B — Service-Area Business with Local HQ**
The business has a real address (home base, office, garage, warehouse) but customers do not visit — the business travels to them.
Examples: plumber, roofer, landscaper, pressure washer, electrician, HVAC, cleaning company, mobile repair, moving company

Local SEO bias:
- Strong primary-city targeting on homepage and service pages
- Service-area coverage communicated clearly but honestly
- Map usage requires care — do not imply visit intent at a non-public address
- Location pages only when genuinely justified by volume + proof
- Heavy city-page expansion is rarely worth the quality cost

**Type C — Service-Area Business Without True Public-Facing Location**
The business operates from an address that is not intended for customer visits (home office, co-working, residential address, PO box equivalent).
Examples: owner-operator service businesses, solopreneurs, businesses with a registered address but no customer-facing office

Local SEO bias:
- Do not overpromote the address as a storefront
- Avoid Google Maps embeds that imply customers should visit
- Service-area clarity matters more than location confirmation
- Local signals live in service-area copy, homepage geo targeting, and proof
- GMB listing may use a service-area-only configuration

**Type D — Multi-Location Business**
The business genuinely operates multiple distinct locations that customers interact with separately.
Examples: clinic chain, multi-location salon, franchise model, multi-office professional service, multi-gym brand

Local SEO bias:
- Each real location may justify its own dedicated page
- Per-location schema with distinct addresses, hours, and CTAs
- Location-specific reviews, team, and proof where available
- Hierarchy matters: top-level brand page + individual location pages
- Do not create location pages for locations that barely differ

**Type E — Local-Adjacent Business**
The business has some local relevance but weak justification for city-page expansion.
Examples: consultants, digital agencies, coaches, online-first services with local client base

Local SEO bias:
- Homepage, contact, and about pages carry local relevance
- Service-area or city-page expansion is usually thin
- Local proof can live in testimonials and case studies with location mentions
- GMB is still worth maintaining but is not the main local signal

---

## Part 2: Local Search Intent Modeling

Before choosing a geo strategy, model how the actual target customer searches for this business.

**Primary intent types:**

**Service + city** ("roof repair Austin TX")
- Most common for Type B service-area businesses
- Primary strategy: service pages with strong primary-city targeting, supported by homepage geo anchor

**Near me** ("plumber near me", "salon near me")
- Primarily resolved by GMB/Google Maps presence and proximity, not page structure
- Supporting strategy: consistent NAP (name/address/phone), accurate GMB category, LocalBusiness schema

**Branded** ("Peak Ridge Roofing review", "[Business Name] Austin")
- Resolved by brand authority pages (homepage, about, contact)
- Supporting strategy: strong branded schema, GMB completeness, review volume

**Emergency / urgency** ("emergency plumber Austin 24/7", "same-day HVAC repair")
- High-intent, high-value, time-sensitive
- Supporting strategy: homepage and service page copy that confirms availability; click-to-call prominence

**Comparison / vetting** ("best roofer in Austin", "top-rated pediatric clinic near me")
- Resolved by review quality and volume, GMB completeness, and trust signals on the website
- Supporting strategy: AggregateRating schema (only if real data exists), review-adjacent content, clear differentiators

**Ask yourself:**
- Which of these is the primary intent for this business?
- Which is secondary?
- Does the business have the proof and content to compete on comparison/vetting, or should it focus on service + city and near me?

---

## Part 3: Geo Strategy Selection

After classifying the business and modeling intent, select one of five geo models.

**Geo Model 1 — Primary City Only**
The homepage and service pages are geo-targeted to one city. No dedicated secondary-city or service-area pages.

Select when:
- One city clearly dominates the business's service volume
- Adjacent areas are minor, occasional, or unproven
- City-specific pages would be thin or duplicate
- The brand is most competitive as a primary-city expert

Signals you are looking at a Geo Model 1 business:
- 80%+ of clients are from one city
- The business's GMB/reviews are almost entirely from that city
- Secondary areas are served only by request, not actively marketed

**Geo Model 2 — Primary City + Service Radius**
One city anchors the brand, with a clear service-area communication layer (usually one page, a section on the contact page, or a clear copy block). No dedicated secondary-city pages.

Select when:
- The business operates across a clear metro or county radius
- The audience benefits from knowing coverage boundaries
- Dedicated city pages for the secondary areas would be thin
- The business serves suburban/adjacent areas but is not equally competitive there

**Geo Model 3 — Primary City + Selective Secondary City Pages**
One city leads, with 2–5 secondary cities that have dedicated pages because they are materially different and can be genuinely differentiated.

Select when:
- A few secondary markets represent significant real revenue
- Those markets have distinct local proof (projects, reviews, named local context)
- Each secondary page can be meaningfully differentiated from the homepage
- The business actively targets and wins work in those markets

Hard gates for Geo Model 3 (every secondary page must pass all of these):
1. The city is a real, significant market for the business
2. There is at least one piece of unique local proof (project, review, area-specific context)
3. The page has a different CTA path or logistics note that is genuinely useful
4. The page will not be >60% duplicate text with the homepage or another location page

**Geo Model 4 — True Multi-Location Cluster**
Multiple real locations, each with its own dedicated page, schema, map, hours, and CTAs.

Select when:
- The business genuinely operates multiple physical locations that customers interact with
- Each location has its own address, hours, phone number, and ideally reviews
- Location-level differentiation is real and substantial

**Geo Model 5 — No Dedicated Local Page Expansion**
Local relevance lives entirely in homepage, contact, about, and service pages. No dedicated geo pages of any kind.

Select when:
- The business is primarily local-adjacent or consultant-type (Type E)
- The business has very thin local proof
- Page expansion would produce only thin, near-duplicate content
- The audience does not make decisions based on geographic specificity

---

## Part 4: Location Page Justification Rules

A location page must pass a justification test. If it fails, do not build it.

**Justify a location page when several of these are true:**
- The market is materially important to the business (real volume, not aspirational)
- The business has local proof for this area: named projects, reviews from the area, specific case references
- The logistics or CTA differ meaningfully (different phone, different service availability, different driving area note)
- The page can be written with at least 40% unique copy angle beyond just swapping a city name
- A user from that area would find the page genuinely more useful than the homepage
- The page would rank for intent that the homepage cannot address as well

**Reject a location page when any of these are true:**
- The city name is the main (or only) differentiator from the homepage
- There is no real proof for the area
- The service/process is identical with no local angle
- The page exists only to hold keywords
- The business barely serves the area
- The page would read like a spun template

**Say it plainly:** "We are not building a [City] location page because there is no unique proof or angle. The homepage and service pages handle this coverage adequately."

---

## Part 5: Service-Area Page Rules

A single, well-built service-area page is often the right answer for Type B and Type C businesses.

**A service-area page is justified when:**
- The business serves a meaningful geographic radius beyond its primary city
- The audience legitimately needs to know whether they are in the service area
- The page will not be a city-list skeleton — it will have actual structure and content

**A service-area page structure must include:**
- Clear statement of the primary service area and radius
- Secondary areas served (honest, not aspirational)
- A contact/quote CTA that directly connects to coverage confirmation
- Optional: map section showing radius (only if the business genuinely serves the area shown)
- Optional: brief note about travel/availability for edge-of-radius requests

**A service-area page must avoid:**
- A long list of 30+ cities with no other content
- Repeated service descriptions lifted from service pages
- Keyword-stuffed city lists formatted as prose
- Cities the business rarely or never serves

---

## Part 6: Priority Ordering for Hard Decisions

When a decision is not obvious, apply these priorities in order:

1. **Truthfulness** — Is the local signal honest and supportable?
2. **Fit to the real business model** — Does this reflect how the business actually operates?
3. **Clarity of geo targeting** — Will users and search engines understand the geographic relevance?
4. **Trust** — Does this increase or decrease user confidence in the business?
5. **Page quality** — Is the page strong enough to exist?
6. **Conversion support** — Does this help users take the right action?
7. **Implementation realism** — Can this actually be built and maintained?
8. **Page count** — More pages are a cost, not a benefit

Never optimize for page count or keyword surface area. Optimize for whether a real user in a specific location would find the page genuinely useful and trustworthy.
