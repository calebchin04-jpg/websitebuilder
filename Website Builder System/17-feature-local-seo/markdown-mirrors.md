# Markdown Mirrors — Rules and Implementation

Owned by: `17-feature-local-seo`

---

## What Markdown Mirrors Are

Markdown mirrors are plain-text versions of key website pages, served at predictable URLs, formatted as Markdown, and stripped of navigation, footers, and decorative chrome.

They exist for AI systems that process text content. When a language model crawls or is given a URL to process, a clean Markdown version is far easier to parse than the full rendered HTML page. Markdown mirrors make the business's content quotable, structured, and machine-readable.

They are NOT a separate content system. They are generated from the same `data/` files that power the rendered pages. Same content, different delivery format.

---

## When to Implement

**Implement markdown mirrors when:**
- AI visibility tier is FULL or STANDARD (see `02-planning/ai-visibility-decision-rules.md`)
- The site has 5+ pages with substantive content
- Service and location pages contain specific, factual content worth making available
- The client has approved the content for machine-readable distribution

**Skip markdown mirrors when:**
- AI visibility tier is MINIMAL
- Site is a single-page brochure
- Content is too thin to warrant the implementation effort
- Client has restricted content distribution

If skipped: note in the `llms.txt` that markdown mirrors are not available. Do not list them.

---

## URL Pattern

Use a consistent, stable URL pattern:

```
/content/[slug]
```

Examples:
```
/content/home
/content/services/kitchen-remodeling
/content/services/bathroom-remodeling
/content/about
/content/contact
/content/locations/portland
/content/locations/beaverton
```

Rules:
- URL patterns must not change after launch — AI tools and crawlers may cache these URLs
- Slugs must match the corresponding page's canonical URL slug
- Never use query parameters in mirror URLs

---

## Required Frontmatter

Every markdown mirror file must begin with YAML frontmatter:

```yaml
---
title: Kitchen Remodeling in Portland — Peak Ridge Remodeling
description: Full kitchen remodeling services in Portland, OR. Custom cabinets, countertops, layout changes. Starting at $18,000. Licensed contractor.
canonical: https://peakridgeremodeling.com/services/kitchen-remodeling
last_updated: 2026-04-17
page_type: service
---
```

Required fields:
- `title` — same as the page's `<title>` tag
- `description` — same as the page's meta description
- `canonical` — the full URL of the rendered page
- `last_updated` — ISO date (YYYY-MM-DD), updated whenever content changes
- `page_type` — one of: `home`, `service`, `location`, `about`, `contact`, `portfolio`

---

## What to Include in the Mirror Content

Include everything that carries meaning:

- H1, H2, H3 headings (use proper Markdown heading levels)
- Service description and scope paragraphs
- What's included / what's not included
- Pricing information if available
- Process steps
- FAQ questions and answers (especially important for AI quotability)
- Trust signals: years in business, license numbers, review stats
- Service area mentions (named cities)
- Contact info (phone, email)
- Internal links to related pages (as Markdown links)

---

## What to Exclude

Strip all structural chrome:
- Navigation links
- Header/footer content
- Cookie banners
- Decorative dividers and visual section labels
- CTA buttons as HTML (convert to text links if meaningful, remove if redundant)
- Testimonial carousels (include testimonial text as quoted content if meaningful)
- Image captions that are purely decorative
- Breadcrumbs (unless they carry content meaning)

---

## Pages to Mirror

| Page | Mirror URL | Include? |
|---|---|---|
| Homepage | `/content/home` | Always |
| Each service page | `/content/services/[slug]` | Always |
| Each location page | `/content/locations/[slug]` | If location pages exist |
| About page | `/content/about` | If it contains differentiating facts |
| Contact page | `/content/contact` | If it has more than just a form |
| Portfolio page | `/content/portfolio` | Only if it has substantive text content |
| FAQ page | `/content/faq` | If a dedicated FAQ page exists |

Pages to NEVER mirror:
- `/thank-you`
- `/privacy-policy`
- `/terms-of-use`
- Any admin, login, or gated pages
- 404 page

---

## Next.js App Router Implementation

Create a dynamic route that serves content mirrors as plain text:

```ts
// app/content/[...slug]/route.ts
import { NextRequest, NextResponse } from 'next/server'

// Import your page content data
import { siteConfig } from '@/data/site'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const slug = params.slug.join('/')
  const content = getMirrorContent(slug)

  if (!content) {
    return new NextResponse('Not found', { status: 404 })
  }

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}

function getMirrorContent(slug: string): string | null {
  // Route to the appropriate content generator
  if (slug === 'home') return generateHomeMirror()
  if (slug.startsWith('services/')) {
    const serviceSlug = slug.replace('services/', '')
    const service = services.find(s => s.slug === serviceSlug)
    return service ? generateServiceMirror(service) : null
  }
  if (slug.startsWith('locations/')) {
    const locationSlug = slug.replace('locations/', '')
    const location = serviceAreas.find(l => l.slug === locationSlug)
    return location ? generateLocationMirror(location) : null
  }
  if (slug === 'about') return generateAboutMirror()
  return null
}
```

Content generator example:
```ts
function generateServiceMirror(service: Service): string {
  const today = new Date().toISOString().split('T')[0]

  return `---
title: ${service.seo.title}
description: ${service.seo.description}
canonical: ${siteConfig.url}/services/${service.slug}
last_updated: ${today}
page_type: service
---

# ${service.name}

${service.description}

## What's Included

${service.scope.map(item => `- ${item}`).join('\n')}

## Pricing

${service.pricing ?? 'Contact us for a free estimate.'}

## Frequently Asked Questions

${service.faqs.map(faq => `### ${faq.question}\n\n${faq.answer}`).join('\n\n')}

## Service Area

${siteConfig.serviceArea}

## Contact

Phone: ${siteConfig.phone}
Email: ${siteConfig.email}
`
}
```

---

## Content-Type Requirement

Mirrors MUST be served as `text/plain`. If served as `text/html`, AI crawlers will attempt to parse HTML tags and the content degrades. Verify in browser dev tools → Network → Headers after deploy.

---

## Linking from llms.txt

Once mirrors are live, list them in the `## Markdown Mirrors` section of `llms.txt`:

```
## Markdown Mirrors
- https://yourdomain.com/content/home
- https://yourdomain.com/content/services/kitchen-remodeling
- https://yourdomain.com/content/services/bathroom-remodeling
- https://yourdomain.com/content/about
```

---

## Stability Rules

1. **Never change URL patterns after launch.** If you change `/content/services/[slug]` to `/markdown/services/[slug]`, every AI tool that cached the old URL gets a 404.
2. **If a page is removed**, keep the mirror URL returning a 410 Gone response (not a redirect to homepage, not a 404).
3. **Content must stay in sync with the rendered page.** When copy changes, the mirror content changes too (since both draw from the same data files, this is automatic).
4. **`last_updated` must be accurate.** Update it whenever the content data changes.

---

## QA Checklist

- [ ] Mirror URLs follow the `/content/[slug]` pattern consistently
- [ ] Each mirror returns `Content-Type: text/plain`
- [ ] Each mirror has complete YAML frontmatter
- [ ] Frontmatter `canonical` URLs resolve to real pages (no 404s)
- [ ] No navigation, footer, or chrome content appears in mirror output
- [ ] FAQ content is included in service page mirrors
- [ ] Mirror list in `llms.txt` is complete and accurate
- [ ] All mirror URLs return 200 (not 301 or 404)
- [ ] Thank-you, privacy, and admin pages are NOT mirrored
