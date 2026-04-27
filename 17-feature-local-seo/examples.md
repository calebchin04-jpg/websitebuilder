# Local SEO Feature Agent — Worked Examples

Three worked examples showing how the local SEO agent makes hard calls across different business types. Each example is abbreviated — it demonstrates the key decisions and reasoning, not the full template output.

---

## Example 1 — Home Service Business (Pressure Washing)

**Business:** Peak Ridge Pressure Washing, Austin TX
**Situation:** Owner-operator, serves Austin and surrounding suburbs, no public-facing office, primarily residential clients, 83 Google reviews at 4.9 stars

---

### Business Model Classification

**Type B — Service-Area Business with Local HQ**

The business operates from a home address not intended for customer visits. Customers do not come to them — the crew travels to residential and commercial properties. The classification matters because: map embeds pointing to a residential address would be misleading, and "come visit us" framing does not apply.

---

### Feature Verdict

- Local SEO depth: **Moderate**
- Page expansion level: **Restrained**
- Maps/reviews layer: **Limited** — review strip yes; map embed no (Type B, no public address)
- Geo model: **Model 2 — Primary city + service radius**

**One-sentence verdict:** One strong homepage targeting Austin, service pages with natural Austin geo-targeting, one honest service-area page covering the metro radius, and no individual city pages — the business does not have differentiated local proof for each suburb.

---

### What Is Not Being Built

**Individual city pages for Cedar Park, Round Rock, Pflugerville, Kyle, Buda, Georgetown, Leander** — rejected.

Reason: These markets are all served by the same crew using the same process with no differentiated local proof (no project history by suburb, no suburb-specific reviews, no logistics differences). Building 7 city pages would produce:
- Near-duplicate text with city names swapped
- No genuine user value for a visitor from Round Rock vs. Austin
- Thin content that signals low quality, not local expertise

The service-area page handles coverage communication adequately.

---

### Key Metadata Decisions

**Homepage title:** `Residential Pressure Washing in Austin, TX | Peak Ridge`
(Not: "Austin Pressure Washing | Pressure Washer Austin TX | Best Pressure Washing Austin" — this is stuffing)

**Roof Soft Wash service page title:** `Roof Soft Wash in Austin, TX | Peak Ridge Pressure Washing`
(Not: "Best Roof Soft Wash Austin TX Cedar Park Round Rock" — one city, specific service)

**Service-area page title:** `Peak Ridge Service Area — Austin and Surrounding Communities`
(Not: "Areas We Serve Austin Cedar Park Round Rock Pflugerville Kyle Buda Georgetown Leander Hutto Manor Elgin" — not a city-list title)

---

### Schema Decisions

- Type: `LocalBusiness` (no more specific subtype for pressure washing in schema.org)
- Address: **Omit streetAddress** — Type B, no public-facing address
- Use `areaServed: "Austin, TX and surrounding areas"` — match service-area page
- AggregateRating: **Include** — 4.9 / 83 reviews confirmed from Google
- Map embed: **No** — misleading for a residential HQ; use click-to-call and form instead
- Review strip: **Yes** — "★★★★★ 4.9 · 83 Google reviews" as compact line near primary CTA

---

### Hard Call: Map Embed

The wireframe specified a Google Maps embed on the contact page. This skill is rejecting it for this business.

Reason: The business operates from a residential address. Embedding a map implies customers should navigate to that location for service, appointments, or drop-off. They should not — Peak Ridge travels to the customer. Showing the map:
- Would direct customers to a residential street
- Would create confusion about whether to visit
- Would not add conversion value compared to a clear contact form + click-to-call

**Replacement recommendation:** Contact page shows address only as "Serving Austin, TX and surrounding areas" with click-to-call, contact form, and a clearly linked service-area coverage section. No map embed. This is a 07-implementation-planning and 04-wireframe note.

---

---

## Example 2 — Medical Aesthetic Clinic (Storefront)

**Business:** Revive Aesthetic Studio, [City], TX
**Situation:** Real clinic address, patient appointments on-site, 5 treatment rooms, no additional locations, serves a metro area but patients mostly come from within 15 miles, 62 Google reviews at 4.8 stars

---

### Business Model Classification

**Type A — Storefront Local Business**

Patients visit the clinic. The address is the trust anchor. A map embed is appropriate. Hours are critical. NAP consistency across GMB and the site matters significantly.

---

### Feature Verdict

- Local SEO depth: **Moderate**
- Page expansion level: **None beyond existing pages**
- Maps/reviews layer: **Yes — full** (map embed on contact page, review count in hero micro-zone)
- Geo model: **Model 1 — Primary city only**

**One-sentence verdict:** Strong homepage and service pages anchored to the clinic's real address and city, full LocalBusiness schema with MedicalBusiness subtype, map and hours prominently on contact page, no location page expansion because there is one real location.

---

### What Is Not Being Built

**No service-area pages for surrounding suburbs** — rejected.

Reason: The clinic's patients visit the clinic. They are not served at their location. A "service-area" concept does not apply in the same way as a mobile business. Patients who live in nearby suburbs will find the clinic via Google Maps / near me searches and branded searches — not via a "We serve [suburb]" page. Adding suburb pages would be thin filler for a business where the patient is always coming to one specific address.

---

### Key Schema Decision: MedicalBusiness Subtype

Use `MedicalBusiness` as the schema type (a subtype of `LocalBusiness`) rather than generic `LocalBusiness`. This gives search engines a more accurate classification signal.

The clinic does not offer anything that requires `Physician`, `Dentist`, or `Hospital` — `MedicalBusiness` is the correct level.

Include:
- Full address and coordinates (real, public-facing location)
- Opening hours (critical for medical/appointment businesses)
- Telephone number
- AggregateRating (real: 4.8 / 62 reviews — confirmed)

---

### Map Decision

**Include Google Maps embed on the contact page** — appropriate for Type A.

Implementation notes:
- Lazy-load the iframe — do not block page render
- On mobile: replace iframe with static map image + "Get directions" link to avoid heavy load
- Height on desktop: 350px; embedded within the contact page alongside address and hours
- Ensure the map pin points to the real clinic address, not a nearby intersection

---

### Metadata Example

**Homepage title:** `Medical Aesthetic Treatments in [City], TX | Revive Aesthetic Studio`
(Not: "Botox Fillers Laser Microneedling in [City] TX Best Medical Spa [City]")

**Botox service page title:** `Botox & Dysport in [City], TX | Revive Aesthetic Studio`

**Contact page title:** `Contact Revive Aesthetic Studio — [City], TX Aesthetics Clinic`

**Hard rule for this business:** Do not use "medical spa" or "med spa" in titles unless this is how the business is registered and positioned — these terms carry regulatory sensitivity in some states. Use the business's own language from the brand direction document.

---

---

## Example 3 — Multi-Location Dental Practice

**Business:** Summit Dental Group — 3 locations in a metro area (Downtown, North Suburb, South Suburb)
**Situation:** Three distinct offices with separate addresses, different hours, different dentists, separate phone numbers, each with their own Google My Business profiles

---

### Business Model Classification

**Type D — Multi-Location Business**

Three real, patient-facing locations that operate independently under one brand. Each location justifies its own page because each has:
- A distinct address and coordinates
- Different hours
- Different staff
- Different patient reviews from the local area
- Different appointment availability

---

### Feature Verdict

- Local SEO depth: **Aggressive but justified**
- Page expansion level: **Multi-location** — three location pages, each fully built
- Maps/reviews layer: **Yes — per location**
- Geo model: **Model 4 — True multi-location cluster**

**One-sentence verdict:** A brand homepage anchors the practice, with three fully differentiated location pages — each with unique address, hours, staff, map, and location-specific reviews — supported by per-location schema and metadata.

---

### Location Page Structure

Each location page must be genuinely differentiated. A page that only swaps the address is not a real location page.

**Required differentiation per location:**
- Location-specific address, hours, phone number
- Photo of the actual office (not a stock image)
- The dentist(s) who practice at this location by name (if available)
- A review or two from patients at this location specifically
- Parking or access notes specific to this location
- A map embed pointing to this specific address
- A CTA that routes to location-specific booking or contact

**What makes the Downtown page different from the North Suburb page:**
Not just the address. The dentist names are different. The hours are different. Downtown has parking garage access notes. North Suburb has a weekend availability that Downtown does not. These are real user-useful differences.

---

### Schema Decision

**Homepage:** `Organization` + `MedicalBusiness` combo structure, with `hasMap` and `sameAs` pointing to the brand's Google presence. Does not include address (because the brand has three addresses — the homepage is the parent, not one location).

**Each location page:** Full `Dentist` (subtype of `MedicalBusiness`, subtype of `LocalBusiness`) schema with:
- Location-specific name: "Summit Dental Group — Downtown Austin"
- Location-specific address, coordinates, telephone, hours
- `parentOrganization` pointing to the main brand
- AggregateRating if location-specific review data is available; if not, omit for that location page

---

### The Hard Call: Review Count

The brand has 180+ total reviews across all three locations. This agent will not aggregate them into a single "180 reviews" figure used on all three pages.

Reason: AggregateRating should reflect the reviews associated with that specific location. Using the total brand count on a location page implies those reviews are about this specific office — which may not be true. Each location page should show only the reviews attributable to that location's GMB profile.

If a location has only 25 reviews, show 25. If a location has 97, show 97. The schema must match the visible display on the page.

---

### What Would Fail This Business

The most common failure mode for multi-location sites: using a single location page template where only the city name and address change. This produces:
- Near-identical title tags differing only in the city name
- Identical body copy with city-swapped paragraphs
- The same reviews appearing on every location page
- No reason for a patient to feel the page was built for their specific location

Google recognizes thin location pages. Patients recognize impersonal templates. This system builds each location page as a real, unique page — or it does not build the location page at all.
