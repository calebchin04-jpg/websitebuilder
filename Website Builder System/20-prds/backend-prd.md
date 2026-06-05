# Backend PRD — Minimal Backend Philosophy

Owned by: `20-prds`

---

## Purpose

This document defines when backend infrastructure is warranted in this system, what the approved patterns are, and what to refuse. The default posture is: **no backend unless there is a clear, specific need.**

Local service business websites are primarily content and conversion surfaces. Most do not need a database, custom auth, or a CMS. Adding backend complexity for no reason increases deployment risk, maintenance burden, and cost.

---

## Default Stack

### Forms
Use **Next.js Server Actions** + **Resend** for email delivery.

```ts
// app/actions/contact.ts
'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  await resend.emails.send({
    from: 'noreply@yourdomain.com',
    to: process.env.CONTACT_EMAIL!,
    subject: `New inquiry from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  })
}
```

No database. No CMS. No auth. Form data goes directly to the client's email.

### Data
Use **static TypeScript data files** in `data/`.

```
data/
  site.ts          ← business name, phone, email, address, service area
  services.ts      ← services array with slugs, descriptions, pricing, FAQs
  service-areas.ts ← locations array with city names and slugs
```

These files are the single source of truth. They drive rendered pages, schema, `llms.txt`, sitemap, and markdown mirrors. No database query needed.

---

## When Backend Is Justified

Add backend infrastructure **only** when one of the following is true and confirmed with the client:

| Need | Approved Solution | Condition |
|---|---|---|
| Contact / quote forms | Server Actions + Resend | Always — this is the default |
| Appointment booking | External service (Calendly, ServiceTitan, Jobber) | Prefer external tool. Only build custom booking if client has documented reasons to avoid third-party tools. |
| Payments | Stripe via Server Actions | Only if client is collecting deposits or payments online. Requires Stripe account setup and `STRIPE_SECRET_KEY`. |
| Frequently changing content | Sanity CMS (or similar) | Only if content changes weekly and client will manage it. Not justified for sites updated a few times a year. |
| Multi-location data | Supabase (Postgres) | Only if there are 10+ locations with unique data that can't reasonably be maintained in static files. |
| Gated access / portals | Supabase Auth + Next.js middleware | Only if client requires login-protected content. Not justified for public service sites. |

If the need doesn't fit one of the rows above, default to no backend.

---

## Approved Backend Patterns

### Server Actions (always available)
Used for all form handling. No separate API route needed.

```ts
// In a form component:
<form action={submitContactForm}>
  <input name="name" required />
  <button type="submit">Send</button>
</form>
```

### Resend (email delivery)
Required env vars:
```
RESEND_API_KEY=re_...
CONTACT_EMAIL=owner@businessdomain.com
```

### Stripe (payments, if justified)
Required env vars:
```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```
Use `@stripe/stripe-js` on the client, `stripe` package in Server Actions. Never expose `STRIPE_SECRET_KEY` to the client.

### Supabase (database, if justified)
Required env vars:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```
The service role key is server-only. Never expose it to the client.

### External Booking Tools (preferred over custom booking)
ServiceTitan, Jobber, Calendly, Acuity, and similar tools embed via `<iframe>` or hosted link. This is always preferable to building a custom booking system. No backend code required.

---

## Anti-Patterns — Refuse These

| Anti-Pattern | Why |
|---|---|
| Custom CMS when static data files work | Static files are simpler, faster, and version-controlled. A CMS is only justified if the client will actively update content. |
| Database for content that never changes | If services and locations are updated twice a year, a database adds zero value and real maintenance cost. |
| Auth on a public service website | Local service businesses do not need login portals unless they have a client dashboard. Do not add auth by default. |
| Custom booking engine | External scheduling tools exist. Building a custom booking system is months of work for functionality that ServiceTitan does out of the box. |
| Redis or KV cache for a static or near-static site | Next.js ISR handles this. No cache layer needed for sites with no real-time data requirements. |
| Multiple separate API routes for simple form handling | Server Actions replace this pattern. One action file handles one form — no route needed. |
| `prisma` + `postgresql` for a 5-page brochure site | An ORM and relational database are not appropriate for a site with no dynamic multi-record data. |

---

## Environment Variables

All environment variables must be documented in `.env.example` before handoff. No exceptions.

```bash
# .env.example

# Required for all builds
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Required if contact forms are implemented
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=owner@clientdomain.com

# Required only if Stripe is used
STRIPE_SECRET_KEY=sk_live_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_secret_here

# Required only if Supabase is used
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ_your_key_here
SUPABASE_SERVICE_ROLE_KEY=eyJ_your_service_role_key_here
```

Rules:
- `.env.local` is never committed to version control
- `.env.example` is always committed, with real keys replaced by descriptive placeholders
- Backend scope (which patterns are in use) must be noted in the project handoff document

---

## Handoff Requirements

Before delivering any site with backend components:

1. `.env.example` is complete — every env var used in the code has a corresponding example entry
2. All third-party accounts are set up in the client's name (not the agency's) — Resend sender domain, Stripe account, Supabase project
3. Any webhooks are documented: which URL, what events, what they do
4. If Supabase is used: schema migrations are committed, not just applied manually
5. Deployment environment variables are set in the production environment (Vercel dashboard or equivalent)

---

## Scope Decision Checklist

Before implementing any backend component, answer:

- [ ] Is there a simpler solution that requires no backend? (External tool, static file, no-auth approach)
- [ ] Does the client actually need this, or is it a nice-to-have?
- [ ] Is this in one of the approved patterns above?
- [ ] Are the required env vars documented in `.env.example`?
- [ ] Is the backend scope noted in the project plan?

If any answer is "no" or "unsure," default to no backend and document the decision.
