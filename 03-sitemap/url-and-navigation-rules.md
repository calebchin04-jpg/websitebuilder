# URL and Navigation Rules

This file defines how to assign pages to navigation areas, how to write URL slugs, and how to apply naming conventions consistently across the sitemap.

---

## Navigation Placement Logic

Every page in the sitemap must be assigned to exactly one of these navigation areas:

| Area | Description |
|---|---|
| **Main Nav** | Primary navigation visible on all pages — desktop and mobile |
| **Footer Nav** | Secondary navigation in the footer — for pages important but not primary |
| **Utility / Legal** | Legal and operational pages — footer only, typically small text links |
| **CTA Path** | Pages accessible only through conversion flows — not in nav |
| **In-Page Section** | Content that lives as a section on another page, not a standalone page |

---

## Main Nav Rules

### What belongs in main nav:
- Pages that most visitors will need to make a purchase decision
- Pages that the primary user journey passes through
- The primary CTA destination (contact, booking, quote form)
- No more than 6 items in the primary nav

### What does NOT belong in main nav:
- Legal pages (Privacy Policy, Terms, Disclaimer)
- Utility pages (Thank-You, 404)
- Blog or resources (unless content is a primary business driver — rare for local businesses)
- Duplicate pages (e.g., both "About" and "Our Story" do not both belong)
- SEO-only pages (city pages, service-area sub-pages) — these live under parent pages or in footer

### Main nav label style:
- Use noun phrases or short verb phrases
- Be consistent in style across all items: do not mix "Services" with "Learn More" and "Get a Quote"
- Preferred: Services, About, Gallery, Contact (nouns) — or — View Services, About Us, Book Now (verb phrases)
- Do not mix styles
- Max 2-word labels preferred. 3 words maximum.

### CTA in main nav:
- The primary CTA should have a visually distinct treatment in the nav (button or highlighted label)
- It should always be the rightmost item
- Label should match the CTA defined in the planning PRD (e.g., "Get a Quote," "Book Now," "Call Us")

### Dropdown / submenu rules:
- Use a dropdown only when there are 3+ pages under a parent and all are worth navigating to directly
- Do not create dropdowns for 2 items — link to the parent page instead
- Do not nest dropdowns more than 1 level deep
- If services have individual pages: "Services" can have a dropdown. If there is only one services page, it is a direct link.

---

## Footer Nav Rules

### What belongs in footer nav:
- Secondary pages the visitor may want but that don't drive primary conversion (e.g., About, Blog, FAQ)
- Pages that are important for SEO crawlability but not primary navigation
- Repeated links to the primary CTA page (Contact / Book / Quote)
- Service sub-pages (if main nav only links to the overview)
- City or service-area pages (if applicable)
- Social media links

### Footer nav sections:
Organize footer links into labeled columns:

**Example footer structure:**
```
Company          Services           Service Areas      Legal
About Us         [Service 1]        [City 1]           Privacy Policy
Team             [Service 2]        [City 2]           Terms of Service
Contact          [Service 3]        [City 3]           Cookie Policy
```

Adjust columns to the actual site content. Do not create empty or thin columns.

---

## URL Slug Conventions

### Core principles:
1. All lowercase
2. Hyphens between words, never underscores or spaces
3. No trailing slashes (except homepage `/`)
4. No duplicate words in the path (e.g., `/services/cleaning-services` — remove the duplicate)
5. No dates in URLs unless it is a dated content type (blog posts)
6. Keep slugs short — use the most important keyword, not the full page title
7. Consistent depth — avoid mixing `/page` with `/parent/page` randomly

### Homepage:
`/`

### Core pages:
```
/about
/contact
/services
/gallery
/pricing         (if separate)
/team            (if separate)
/blog            (if included)
/faq             (if separate)
/reviews         (if separate)
```

### Individual service pages:
```
/services/[service-slug]
```
Examples:
```
/services/pressure-washing
/services/soft-washing
/services/deck-cleaning
```

### Local SEO pages:

**Service-area overview:**
```
/service-areas
```

**City-specific pages (pattern A — city-first):**
```
/[city-slug]-[service-slug]
```
Examples:
```
/austin-pressure-washing
/cedar-park-pressure-washing
/round-rock-pressure-washing
```
Use this pattern when the city is the primary keyword modifier (common in competitive local markets).

**City-specific pages (pattern B — service-first):**
```
/services/[city-slug]
```
Examples:
```
/services/austin
/services/cedar-park
```
Use this pattern when the business offers multiple services in each city and the city page is a hub.

**Note:** Pick one pattern and use it consistently. Do not mix patterns.

### Legal and utility pages:
```
/privacy-policy
/terms-of-service
/cookie-policy
/thank-you
/404              (not a real slug — handled by server)
```

---

## Naming Conventions

### Page title vs. nav label vs. URL slug

These are three different things and should each be optimized for their purpose:

| Property | Purpose | Style |
|---|---|---|
| Page `<title>` / H1 | SEO and first impression | Full descriptive, includes keyword |
| Nav label | Quick navigation | Short, action-oriented or clear noun |
| URL slug | SEO and shareability | Keyword-rich, lowercase, hyphenated |

Example:
- Page title: "Pressure Washing Services in Austin, TX — Marcus Pro Wash"
- Nav label: "Services"
- URL slug: `/services/pressure-washing`

### Service page naming:
- Use the service name the customer would search, not the business's internal name
- Prefer: `/services/roof-cleaning` not `/services/roof-care-solution`
- Prefer: `/services/soft-washing` not `/services/delicate-surface-treatment`

### City page naming:
- Use the city name customers use, not official municipality names
- Prefer: `/austin-pressure-washing` not `/city-of-austin-pressure-washing`
- For suburbs and neighborhoods: use the name most likely to be searched

### Avoid:
- `/page1`, `/p2`, `/section-a` — no meaning
- `/our-services`, `/our-team`, `/our-story` — the "our" is redundant
- `/solutions` without a qualifier — meaningless
- `/home` — homepage is always `/`
- `/index` — never use this as a URL path

---

## CTA Path Pages

Some pages exist in the conversion flow but not in the navigation. These must still be in the sitemap.

Define for each:
- URL
- Purpose
- What triggers navigation to this page

**Examples of CTA path pages:**

| Page | URL | Trigger |
|---|---|---|
| Thank-You | `/thank-you` | Form submission or booking confirmation |
| Quote Confirmation | `/quote-confirmed` | Quote form submission |
| Booking Confirmation | `/booking-confirmed` | Online booking completion |
| Download Confirmation | `/download-confirmed` | Lead magnet download (if applicable) |

These pages should not appear in main or footer nav. They must appear in the sitemap and handoff documents.

---

## Internal Linking Logic (High Level)

Define the primary linking relationships — not every link, just the structural ones.

**Always link from:**
- Homepage → Services (and individual service pages if applicable)
- Homepage → Primary CTA page
- Every page → Primary CTA (in header, footer, and at least one inline position)
- Services overview → Individual service pages
- Individual service pages → Contact/Quote form
- About page → Contact/Quote form
- Gallery → Contact/Quote form
- City pages → Contact/Quote form (with city-specific CTA if possible)

**Cross-links (where relevant):**
- Related service pages link to each other
- City pages link to service pages that apply in that city
- Blog posts (if present) link to relevant service pages

**Do NOT link:**
- Legal pages to anywhere except from the footer
- Thank-you pages to anywhere except a clear "return to homepage" link
- CTA path pages into the standard navigation flow
