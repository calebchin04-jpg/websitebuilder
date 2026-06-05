# AI Crawler Rules — robots.txt Policy

Owned by: `17-feature-local-seo`

---

## Default Stance

**Allow all AI crawlers by default.**

Local service businesses benefit from AI visibility. Being discoverable in ChatGPT, Perplexity, and Claude-powered search is an increasing source of qualified leads. Blocking AI crawlers removes this opportunity for no benefit.

The default `robots.txt` for every build in this system must explicitly allow the crawlers listed below unless the client has a documented reason to restrict them.

---

## Required Allow List

Every `robots.txt` must include explicit entries for these AI crawlers:

```
# AI Search Crawlers — explicitly permitted
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Omgilibot
Allow: /

User-agent: FacebookBot
Allow: /
```

These must appear as EXPLICIT Allow entries, not just as absence of Disallow. Some crawlers will default to blocked if not explicitly permitted.

---

## Full Standard robots.txt Template

```
# Standard robots.txt — Website Builder System
# Last updated: [date]

User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /thank-you
Disallow: /admin/
Disallow: /private/

# AI Search Crawlers — explicitly permitted
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://[domain]/sitemap.xml
```

Replace `[domain]` with the actual domain before launch.

---

## Standard Disallow Entries

Always disallow these paths by default:

| Path | Reason |
|---|---|
| `/api/` | Server API routes — not public content |
| `/_next/` | Next.js build artifacts |
| `/thank-you` | Confirmation page — no SEO value, should not be indexed |
| `/admin/` | Admin interfaces if present |
| `/private/` | Any gated/private content routes |

Do NOT disallow:
- Service pages
- Location pages
- Portfolio/gallery pages
- About pages
- Contact pages
- FAQ content
- `llms.txt`
- Markdown mirrors
- Sitemap

---

## When Blocking AI Crawlers Is Justified

Only block specific AI crawlers if ONE of the following is true and documented in the project notes:

1. **Client has legal/contractual restriction** — some enterprise clients or regulated industries (healthcare, finance, legal) may have policies against AI training use
2. **Content is licensed/proprietary** — if the site contains content that the client does not want used for AI training (photography portfolios with licensing agreements, proprietary research)
3. **Explicit client request** — client has specifically and knowingly requested AI crawlers be blocked after being informed of the implications

If blocking is justified, use selective disallow for the specific crawler, not a global block:

```
# Example: block only AI training crawlers, keep AI search crawlers
User-agent: CCBot
Disallow: /

User-agent: GPTBot
Allow: /
```

---

## Sitemap Linkage (Required)

The `robots.txt` file MUST include a `Sitemap:` directive pointing to the XML sitemap:

```
Sitemap: https://yourdomain.com/sitemap.xml
```

This tells all crawlers — including AI crawlers — where to find the complete page list. Without this, crawlers discover pages more slowly and incompletely.

---

## robots.txt in Next.js App Router

Place the file at `public/robots.txt` for static serving, OR use the `app/robots.ts` route for dynamic generation:

```ts
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/thank-you', '/admin/'],
      },
      { userAgent: 'GPTBot',       allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot',    allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot',allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot',        allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

**Note:** The `app/robots.ts` approach generates the file dynamically and supports environment variable injection for the domain. Preferred over a static `public/robots.txt` for builds where the domain may differ between environments.

---

## Verification

After launch, verify with:

1. **Visit the file:** `https://yourdomain.com/robots.txt` — confirm it renders as plain text, all entries are present
2. **Google Search Console:** Use the robots.txt tester in GSC to confirm no unintended blocks
3. **Manual test:** Paste the robots.txt content into any online robots.txt validator

---

## QA Checklist

- [ ] `robots.txt` is accessible at the live URL
- [ ] File renders as plain text (not HTML)
- [ ] All AI crawler user-agents are explicitly listed with `Allow: /`
- [ ] Standard disallow paths are present (`/api/`, `/_next/`, `/thank-you`)
- [ ] `Sitemap:` directive points to the correct live sitemap URL
- [ ] No accidental `Disallow: /` that blocks all crawlers
- [ ] Domain in Sitemap directive matches actual production domain (not localhost or staging)
