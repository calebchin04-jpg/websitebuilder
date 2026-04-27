# Sitemap Rules

This file defines the rules for building the information architecture — what pages to include, how to group them, when to merge or remove, and how to structure service pages, SEO pages, and utility pages.

---

## Core Rule: Every Page Must Earn Its Place

A page is justified if it satisfies at least one of:

1. It is required for the primary CTA path (the visitor cannot convert without it)
2. It provides trust information the audience specifically needs before converting
3. It captures organic search traffic that supports the business goal
4. It serves a distinct audience segment or intent that no other page covers
5. It is a legal or operational requirement

If a page satisfies none of these, it does not belong in the sitemap.

---

## Page Inventory Process

Before assigning pages, list every page suggested by:
- The planning PRD page-type responsibilities
- The feature list
- The user journey stages
- Standard local business page types

Then for each, ask:
1. **What is this page's one job?** If you cannot state it in one sentence, the page may not be necessary.
2. **Who specifically needs this page?** If the answer is "no one in particular," the page should be cut.
3. **Is this job already done by another page?** If yes, merge them.
4. **Does removing this page break the user journey or conversion path?** If no, it is optional at best.

---

## Page Merge, Rename, and Removal Criteria

### Merge when:

- Two pages cover the same user need (e.g., "About" and "Our Story" are the same page)
- Two pages would have nearly identical content (e.g., "Contact" and "Get a Quote" as separate pages when the quote IS the contact form)
- A page's content is thin enough to be a section on another page (e.g., a "Mission" page that should be a section on About)
- A standalone "Testimonials" page and an "About" page both just show social proof — consolidate

### Rename when:

- The page name is vague or generic ("Solutions," "Resources," "Information")
- The page name does not describe the user action or the content ("Our Team" vs "Meet the Team," fine — but "Team" alone is weak)
- The page name is inconsistent with others in the same group (mixing verbs and nouns in nav labels)
- The URL would be confusing or non-descriptive

### Remove when:

- The page has no defined job
- The content is "coming soon" with no clear timeline
- The page exists only to make the site look bigger
- It duplicates another page entirely
- It requires content that does not exist and will not exist at launch

---

## Page Group Categories

Organize all pages into these groups for the sitemap:

### Group 1: Core Pages
Pages that every visitor may land on. Required for the site to function.
- Homepage
- Contact / Get a Quote / Booking page (whichever is the CTA destination)
- Primary conversion thank-you page (if applicable)

### Group 2: Services
Pages that describe what the business offers.
- May be a single Services page, multiple service pages, or both
- Decision criteria below

### Group 3: Trust and Credibility
Pages that build confidence before conversion.
- About / About Us
- Team (if separate)
- Gallery / Portfolio (if applicable)
- Reviews (if high volume justifies a dedicated page)
- Case Studies (if available)

### Group 4: Local SEO / Location
Pages that serve geographic search intent.
- Service Areas overview
- City-specific or neighborhood-specific pages (if warranted)
- Location page (if the business has a physical address visitors need)

### Group 5: Resources and Content *(deferred by default)*
- Blog
- FAQ (can be its own page or a section)
- Resource pages

### Group 6: Utility and Legal
- Privacy Policy
- Terms of Service (if applicable)
- Cookie notice (if applicable)
- 404 error page
- Thank-you / confirmation pages
- Sitemap (XML, for SEO)

---

## Service Page Structure Decision

Decide whether services should be:

**Option A: Single Services Page**
Use when:
- The business offers 2–4 closely related services
- Services are best understood together (e.g., a cleaning company offering house, office, and move-out cleaning)
- The total content for all services fits cleanly on one scrollable page
- SEO value of individual service pages is low

**Option B: Services Overview + Individual Service Pages**
Use when:
- Each service has significantly different audiences, pricing, or process
- Each service has strong independent search volume (e.g., "pressure washing Austin" and "soft washing Austin" are separate queries)
- There are 4+ distinct services
- Clients frequently arrive with a specific service in mind and should land on a dedicated page

**Option C: Services Sections on Homepage Only**
Use when:
- The offer is very focused (1–2 services) and all service content fits on the homepage
- The site is intentionally minimal and a full services page would thin the content

State the chosen option and the reason in the sitemap PRD.

---

## Local SEO Page Decision Rules

Make a direct recommendation. Do not present options unless the data is genuinely ambiguous.

### Include city/location pages when:
- The business serves multiple distinct cities or neighborhoods
- Each city has real search volume for the service type
- The business can provide city-specific content (not just swapped city names)
- The planning PRD identifies local SEO as a goal
- The business type is one where local search is a primary acquisition channel (home services, medical, fitness, legal, etc.)

### Include service-area overview page when:
- The business serves a metro area but not city-specific pages
- Local SEO is a goal but the market doesn't justify individual city pages
- The business wants to communicate geographic coverage without committing to city-page content maintenance

### Do NOT include location pages when:
- The business is national or online-only
- The service area is a single neighborhood within a large city (on-page local signals are sufficient)
- The business does not have meaningful competition at the city keyword level
- The client cannot provide differentiated content per city

### Format for city pages (if included):
Each city page should have:
- URL: `/services/[city-slug]` or `/[city-slug]-[service-slug]` (see URL rules)
- Content: service description tailored to city, local trust signals, local CTA
- Not: identical copy with just the city name swapped

---

## FAQ Page Decision Rules

Include a dedicated FAQ page when:
- The service involves significant objections, concerns, or complexity that affects conversion (clinics, legal, financial services, high-ticket home services)
- The FAQ content is long enough to warrant its own page (10+ questions)
- There is SEO value in FAQ content targeting long-tail queries

Include FAQ as a section on other pages when:
- 4–8 questions cover all relevant objections
- The questions are service-specific and belong on service pages

Do not include FAQ at all when:
- The offer is simple and self-explanatory
- No significant buyer objections exist

---

## Gallery / Portfolio Page Decision Rules

Include a dedicated Gallery or Portfolio page when:
- The business is visual and work quality is a primary conversion driver (salon, remodeling, landscaping, photography, fitness)
- There are enough high-quality images to fill a dedicated page (15+ strong images or 5+ case study sets)

Include gallery as a section on the homepage or services page when:
- Work quality matters but content is limited (5–15 images)
- The business is not primarily visual

Do not include gallery when:
- No visual assets exist at launch
- The business type does not benefit from visual proof (purely text-based services, B2B consulting)

---

## Thank-You / Confirmation Page Rules

Include a dedicated thank-you page when:
- The primary CTA is a form submission or booking
- Conversion tracking is important (a separate page makes Google Analytics goals easy to set)
- There is a meaningful next step to offer after conversion (e.g., "Check your email," "We'll call within 24 hours")

Can use an inline confirmation message instead when:
- The site is minimal and a dedicated page feels disproportionate
- The CTA is a phone call (no post-call page needed)

---

## Legal and Utility Page Rules

Always include:
- Privacy Policy (required if any form collects data — which most sites do)
- 404 error page (always)

Include when applicable:
- Terms of Service (if the site involves payments, memberships, or bookings)
- Cookie Policy (if the site uses analytics or tracking)
- Disclaimer (if regulated industry — medical, legal, financial)

Placement: footer links only. These should never appear in main navigation.
