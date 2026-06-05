# Sitemap and Google Search Console

Owned by: `17-feature-local-seo`

---

## XML Sitemap Requirements

Every build in this system must have a valid XML sitemap served at `/sitemap.xml`.

The sitemap tells Google, Bing, and AI crawlers the complete list of indexable pages, their relative priority, and how recently they were updated. Without it, crawlers discover pages through internal links only — slower and less complete.

---

## Next.js Implementation (app/sitemap.ts)

Use the Next.js App Router `sitemap.ts` convention:

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map(service => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const locationPages = serviceAreas.map(area => ({
    url: `${BASE_URL}/service-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...servicePages,
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.65,
    },
    ...locationPages,
  ]
}
```

---

## Page Priority Rules

Use this scale consistently across all builds:

| Page Type | Priority | Change Frequency |
|---|---|---|
| Homepage | 1.0 | weekly |
| Service overview page | 0.85 | monthly |
| Individual service pages | 0.9 | monthly |
| Portfolio / gallery | 0.7 | monthly |
| Location / service-area pages | 0.8 | monthly |
| About page | 0.6 | yearly |
| Contact page | 0.65 | yearly |
| Blog / news (if present) | 0.5–0.7 | weekly |

---

## Pages to EXCLUDE from Sitemap

Never include these in the sitemap:

- `/thank-you` — confirmation page, no SEO value, should not be indexed
- `/privacy-policy` — legal boilerplate, not an indexable content page
- `/terms-of-use` — same
- `/404` or `/not-found` — error pages
- Any admin, login, or gated access pages
- Any page with a `noindex` meta tag
- Duplicate content pages (pagination, filtered views without canonical)

---

## robots.txt Linkage

The `robots.txt` must reference the sitemap. This is required — see `ai-crawler-rules.md`:

```
Sitemap: https://yourdomain.com/sitemap.xml
```

Without this, some crawlers will not discover the sitemap even if it exists.

---

## Google Search Console Setup

GSC must be set up for every site before or immediately after launch. It is not optional.

### Step 1 — Add Property

Go to search.google.com/search-console → Add property → Choose "URL prefix" (not domain) if the client does not have DNS access. Choose "Domain" if DNS access is available (preferred — covers all subdomains and variants).

### Step 2 — Verify Ownership

Preferred verification methods (in order):
1. **HTML file upload** — Download the verification file, place in `/public/`, deploy. Fast and reliable.
2. **HTML meta tag** — Add the `google-site-verification` meta tag to `<head>` in `app/layout.tsx`:
   ```tsx
   // app/layout.tsx
   export const metadata = {
     verification: {
       google: 'your-verification-code-here',
     },
   }
   ```
3. **DNS TXT record** — Requires client DNS access. Best for domain-level properties.
4. **Google Tag Manager / Analytics** — Works if GTM is already installed on the site.

### Step 3 — Submit Sitemap

1. In GSC sidebar: Sitemaps → Add new sitemap
2. Enter: `sitemap.xml` (just the path, not the full URL)
3. Click Submit
4. Confirm status shows "Success" (may take minutes to hours)

### Step 4 — Request Indexing for Key Pages

After sitemap submission, manually request indexing for the highest-priority pages:
1. Use the URL Inspection tool in GSC
2. Enter the page URL → Inspect → "Request Indexing"
3. Do this for: homepage, each service page, contact page
4. Do NOT request indexing for: thank-you, privacy, location pages (let them crawl naturally)

---

## Post-Launch Audit Schedule

### At 2 Weeks Post-Launch
Check in GSC:
- Coverage report: are the key pages indexed? Any "Excluded" or "Error" status?
- Sitemap status: still shows "Success"?
- Any manual action penalties? (unlikely for new sites, but check)
- Any crawl errors in the Coverage → Error section?

Common issues at 2 weeks:
- Key pages showing as "Crawled — currently not indexed" → check content quality, internal links
- Pages excluded due to `noindex` tag accidentally present → check metadata in app/layout.tsx
- Sitemap error → verify the sitemap URL resolves and returns valid XML

### At 6 Weeks Post-Launch
Check in GSC:
- Impressions and clicks starting to appear in Performance report?
- Which queries are driving impressions? Are they relevant?
- Any pages with high impressions but low CTR? (may need better title/description)
- Compare index count to expected page count from sitemap

Quick wins to act on at 6 weeks:
- Pages with position 5–15 and decent impressions → optimize title tags and meta descriptions
- Service pages with no impressions → check if content is thin, add more specific copy
- Homepage ranking for wrong terms → review H1 and page copy

---

## QA Checklist

**Pre-launch:**
- [ ] `/sitemap.xml` resolves and returns valid XML
- [ ] All indexable pages are in the sitemap
- [ ] Thank-you, privacy, and admin pages are excluded from sitemap
- [ ] `robots.txt` includes `Sitemap:` directive pointing to sitemap URL
- [ ] Sitemap uses `NEXT_PUBLIC_SITE_URL` (not localhost or staging URL)
- [ ] All priority values follow the priority scale above

**Post-launch (at 2 weeks):**
- [ ] GSC property is verified
- [ ] Sitemap submitted and shows "Success" status
- [ ] Homepage and service pages show as indexed or in crawl queue
- [ ] No unexpected errors or exclusions in Coverage report
- [ ] Key pages manually submitted for indexing

**Post-launch (at 6 weeks):**
- [ ] Performance data is appearing in GSC
- [ ] Quick wins identified and actioned
- [ ] Sitemap still resolving correctly after any post-launch deploys
