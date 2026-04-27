# Local SEO Copy, UX, and Internal Linking Rules

This file defines local copy constraints, on-page signal rules, map/review trust layer logic, internal linking strategy, anti-spam enforcement, mobile-first requirements, and performance rules.

---

## Part 1: Local Copy Constraints

Local copy is copy that references geography — cities, regions, neighborhoods, service areas. It has different rules from general copy because the failure modes are distinct: it can become robotic, spammy, fake-familiar, or wasteful in ways that destroy trust faster than generic copy.

**Local copy must:**
- Sound like a real local business speaking to a real local customer
- Reference geography only when it adds useful context (service availability, travel logistics, local relevance)
- Stay consistent with the business's actual coverage — do not reference areas the business rarely or never serves
- Connect geography to something real: a project, a neighborhood context, a logistics note, a service-area boundary

**Local copy must not:**
- Repeat a city name more than 2–3 times per section in a way that sounds forced
- Use the pattern "[Service] in [City]" more than once per paragraph
- Pretend the business has deep neighborhood familiarity without proof ("We know every street in Tarrytown like the back of our hand" — unless this is genuinely true)
- List nearby cities in body copy as a thin service-area signal
- Invent local references (landmarks, neighborhood names, regional events) without real connection to the business
- Use "best [service] in [city]" framing without evidence to support the superlative

---

## Part 2: Heading and Section Discipline

**H1 rules:**
- One H1 per page
- H1 should be the primary description of the page — service name, location name, or page purpose
- For service pages: H1 = service name + city when this is a primary local landing page
  Example: "Roof Soft Wash in Austin, TX"
- For location pages: H1 = service category + city
  Example: "Pressure Washing Services in Round Rock, TX"
- Do not stuff secondary cities into H1

**H2 rules:**
- H2 subheadings should describe the section content — not repeat the H1 with city name variations
- Avoid: "Best Pressure Washing in Austin" → "Top Pressure Washer Austin TX" → "Affordable Pressure Washing Austin" as a sequence of H2s on one page
- Service section headings: describe what the service does or who it is for, not just what it is called
- Local proof sections: "What Our Austin Customers Say" is appropriate once; do not repeat city in every heading

**H3 and below:**
- Use for genuine structural sub-divisions
- Do not use lower headings to insert keyword variations

---

## Part 3: City Reference Density Rules

**For service pages (primary local landing pages):**
- City name in H1: once
- City name in intro paragraph or hero subheadline: once
- City name in body copy: 1–2 more times where natural
- City name in CTA: optional ("Get a free quote — serving Austin and surrounding areas")
- City name in meta title: once
- Total on-page city references in the main content: 4–6 maximum, and each one must feel earned

**For homepage:**
- Primary city in above-the-fold area: once (hero subheadline or trust line)
- City in services section intro: optional
- City in about/local proof section: 1–2 times where it adds trust
- Do not repeat in every section heading

**For location pages:**
- City name will naturally appear more — this is expected
- Each mention should connect to something real: a project, a neighborhood note, a logistics detail
- Avoid "We are proud to serve the [city] community" with no follow-on specificity

**For service-area page:**
- List real coverage areas once clearly
- Do not repeat each city name multiple times
- The list is the content — do not pad it with city-stuffed prose

---

## Part 4: Maps Usage Rules

Maps (Google Maps embeds or static map imagery) are a local trust and UX tool. Use them selectively.

**Maps are justified when:**
- The business has a real, public-facing address that customers visit or use to confirm legitimacy
- The address is the primary trust signal (e.g., a clinic, salon, or storefront — Type A)
- The contact page benefits from a visual confirmation of location
- A location page for a specific real location needs to anchor that location's legitimacy
- A service-area radius map helps users understand coverage when the service area has an unusual or non-obvious shape

**Maps are not justified when:**
- The business is a pure service-area business (Type B/C) with no customer-visit address
- The map would embed an address the business does not want customers visiting
- The map adds no information the user needs — the address is already shown clearly in text
- The map is included purely as an SEO signal with no user value

**Map placement rules:**
- Contact page: appropriate for Type A businesses; cautious for Type B/C
- Location pages: appropriate when the location is a real business address
- Homepage: only if the business is a storefront (Type A) and the map helps trust
- Service pages: rarely appropriate — service pages are about the service, not the location
- Footer: appropriate for Type A businesses as a persistent trust signal; avoid for Type B/C

**Mobile behavior for maps:**
- Full Google Maps iframes are heavy on mobile — consider a static map image with a "Get directions" link to Google Maps instead
- Lazy-load map embeds — do not block page render for a map
- If the map would take more than 30% of the visible mobile viewport before the scroll, reduce its size or collapse it below primary content
- For purely service-area businesses (Type B/C): map embeds on mobile add clutter without conversion value — omit or make them opt-in

---

## Part 5: Reviews as Local Trust Signals

This skill owns reviews only where they support local legitimacy and local search relevance. 13-feature-social-proof owns the broader testimonials strategy.

**When reviews reinforce local trust:**
- A review mentions a specific city, neighborhood, or project location
- Reviews are displayed with the reviewer's city or general location
- The review count and star rating are shown near the address/contact CTA to confirm legitimacy
- A review strip or summary near the contact form or booking area confirms the business is real and active locally

**Formatting rules for local-trust review usage:**
- Show reviewer first name + last initial + location context when available
- Never fabricate reviewer identities, locations, or star ratings
- Never show a star rating in the hero or contact area without a real source (Google, Yelp) and accurate numbers
- Review counts must be real and updatable — do not hardcode a number that will become stale

**What belongs to 13-feature-social-proof instead:**
- The full testimonials strategy and section design
- Deciding how many testimonials appear, in what format
- Case studies and extended proof content
- The social proof positioning within the page hierarchy

---

## Part 6: Internal Linking Strategy for Local Intent

Internal linking for local intent should help users navigate to relevant service or contact pages and help search engines understand geographic relevance. It should not create a link-farm effect.

**Linking rules:**

**Homepage → service pages:**
- Primary service cards should link to individual service pages
- A "Service areas" or "Areas we serve" link should appear near the footer or contact section

**Service pages → contact/quote:**
- Every service page must link clearly to the contact or quote page
- The link should be in a CTA context, not just a text mention

**Service pages → related service pages:**
- When two services are commonly paired (e.g., house washing + driveway cleaning), a "Related services" row at the bottom of each page is appropriate
- Do not link every service page to every other service page — link only where there is genuine user relevance

**Location pages → contact and relevant service pages:**
- Location pages should link to the contact/quote page with location context in the CTA
- Location pages can reference 2–4 relevant services with links
- Do not link from a location page to every service page — link to the services most relevant to the area

**Service-area page → contact:**
- The service-area page must have a prominent CTA linking to contact/quote
- "Not sure if we cover your area? Contact us to confirm" is a useful pattern

**Homepage/about → service-area page:**
- A reference to "service area" in the footer or a section on the homepage should link to the service-area page when it exists

**What to avoid:**
- Linking every city mentioned anywhere on the site to a location page (this creates a keyword-anchor-text spamming pattern)
- Footer lists of 20+ city names as linked text
- Service pages linking to every location page in a sidebar or footer block
- Reciprocal links between every pair of pages without user-value justification

---

## Part 7: Mobile-First Rules for Local Modules

Every local SEO element must be specified for mobile. "It adapts responsively" is not a specification.

**Click-to-call:**
- Phone number must be a tap-to-call link on mobile: `tel:+1XXXXXXXXXX`
- Click-to-call should appear at least twice: in the header/navigation and near the primary CTA on the homepage and contact page
- On mobile, click-to-call can be a persistent bottom bar for high-urgency service businesses (Type B, emergency services)

**Map embeds on mobile:**
- Full iframe maps: lazy-load required; cap height at 250px on mobile; provide "Get directions" link as tap target
- Static map image + "Get directions" button: often the better mobile-first approach
- For Type B/C businesses: omit map iframe on mobile if it adds no conversion value

**Service-area coverage on mobile:**
- If the coverage area is communicated as a list, keep it to 6–8 cities on mobile; link to full service-area page for the complete list
- Avoid long city lists that push CTAs far down the page on mobile

**Review signals on mobile:**
- Star rating + review count should appear as a single compact line near the CTA: "★★★★★ 4.9 · 83 Google reviews"
- Do not expand full review blocks on mobile above the CTA — put the review strip in the micro-zone (below hero), not inside the hero itself
- Full testimonial sections come after the conversion zone on mobile

**Local trust near CTAs on mobile:**
- On mobile, the sequence near the primary CTA should be: CTA button → trust line (review count or one proof signal) → secondary CTA or phone number
- Do not stack large map embeds, long area lists, and review carousels between the hero and the CTA on mobile

---

## Part 8: Anti-Spam Enforcement Checklist

Before finalizing any local SEO output, check against this list. Reject any output that fails.

- [ ] No city × service matrix page generation without individual justification
- [ ] No title tags with multiple city names
- [ ] No body copy that repeats a city name more than 5 times per page
- [ ] No "areas we serve" pages that are only city lists with no other content
- [ ] No location pages where the city name is the only differentiator
- [ ] No AggregateRating schema with unverified or invented values
- [ ] No FAQPage schema for FAQs that are not visible on the page
- [ ] No map embeds pointing to addresses the business does not want customers visiting
- [ ] No fake local familiarity copy ("We've been serving Tarrytown families for generations" without real history)
- [ ] No "best [service] in [city]" claims without supporting evidence
- [ ] No schema properties the business cannot honestly support
- [ ] No internal linking that creates a city-name link farm
- [ ] No service-area page that looks like a spun template
- [ ] No location pages created solely for potential future ranking without present justification

---

## Part 9: Trust and Performance Principles

**Trust:**
Local SEO should make the site feel more legitimate, not less. A visitor who lands on a well-built local service page should feel:
- "Yes, this business serves my area"
- "Yes, this feels like a real local company"
- "Yes, I know what to do next"

A visitor who lands on a thin, stuffed, or fake-familiar local page feels the opposite — and leaves.

**Performance:**
Local SEO modules must not degrade page performance.

- Google Maps iframes are expensive — lazy-load them or replace with static maps + CTA links
- Review widgets from third-party platforms (Birdeye, Podium, etc.) can block render — evaluate load impact
- Schema is lightweight and has no performance cost — include it
- Large local image galleries on location pages should use responsive images and lazy loading
- Location page templates should not load significantly more JavaScript than standard service pages
