# Backend Data and Tooling Rules

This file defines how to classify data, select the right tooling, design integration boundaries, and apply the data-handling model for different backend scenarios.

---

## Part 1: Data Classification

Every piece of information on the site must be classified before a backend is designed. The classification determines where the data lives and how it is managed.

**Category 1 — Static Business Content**

Definition: Information about the business that rarely or never changes and has no user-generated variation.

Examples:
- Business name, address, phone, email
- Service list and service descriptions
- Pricing (fixed or starting-at)
- Opening hours
- Service area coverage
- FAQ content
- Team member profiles
- Testimonials (pre-approved, manually selected)
- Page copy, headings, and CTAs

Correct handling: **Frontend config and data files.** This content belongs in `data/config/` and `data/pages/` — not in a database. Storing static content in a database adds query overhead, deployment dependencies, and maintenance burden with no benefit.

If an argument is made to store this data in a CMS, confirm that a real editing workflow justifies it (see CMS rules in `backend-decision-rules.md`). If no one is regularly editing this content outside of code deploys, a CMS adds complexity without value.

**Category 2 — Submission Data**

Definition: Data created by site visitors through forms or contact interactions.

Examples:
- Contact form submissions
- Quote request details
- Service request forms
- Callback preference submissions
- Newsletter signups

Correct handling options, in order of preference:

Option A: **Hosted form routing only.** Submission goes directly to an email inbox or a connected spreadsheet via the form provider (Formspree, Netlify Forms, etc.). No custom backend code. Best for low volume, simple contact needs.

Option B: **API route + email delivery.** A Next.js `app/api/` route validates the submission, applies spam filtering, and sends via Resend or SendGrid. No database. Best when you need control over validation, formatting, and delivery without persisting data.

Option C: **API route + email + storage.** As option B, but also writes a record to a lightweight storage layer (Supabase table, or a connected CRM/Airtable via API). Best when the agency genuinely needs to review or query submissions beyond reading email.

Do not default to Option C. Start at Option A or B and justify the upgrade.

**Category 3 — Transactional / Operational Data**

Definition: Data created by user actions that trigger business workflows with real operational consequences.

Examples:
- Booking requests or confirmed appointments
- Deposit or payment events
- Invoice payment confirmations
- Service request fulfillment tracking

Correct handling options:

Option A: **Hosted platform handles it.** Calendly, Acuity, or Square Appointments manages the booking record. Stripe manages payment records. The website frontend simply triggers the action and redirects. No custom storage needed.

Option B: **Webhook-driven record creation.** A payment event (Stripe webhook) or booking event triggers an API route that creates a lightweight record and sends a confirmation notification. Minimal persistence only for what is operationally necessary.

Option C: **Structured persistence layer.** A Supabase table that stores appointments, booking details, and associated contact records. Appropriate when the agency needs aggregate reporting, follow-up workflows, or integration with other systems — and when hosted tool records alone are insufficient.

Default to Option A wherever a hosted tool covers the need.

**Category 4 — CMS / Dynamic Content**

Definition: Content that is regularly updated by the agency or client outside of code deployments.

Examples:
- Blog posts
- Case studies
- Team updates
- Service content that the client edits
- Announcement banners
- Gallery additions

Correct handling:
- **No CMS unless confirmed in scope.** If the agency edits the site directly, data files are the right answer.
- **Headless CMS when confirmed.** Sanity, Contentful, or similar — define content types and integration approach. Do not build a custom CMS.
- **Incremental Static Regeneration (ISR) or Static Generation** to fetch content at build time or on a revalidation interval. This keeps the site fast and avoids per-request CMS queries.

Hard rule: If CMS was not confirmed in upstream planning, do not design for it. Flag it as out of scope and move on.

---

## Part 2: Tooling Selection Rules

**Form submission / email delivery:**

| Scenario | Tool | Why |
|---|---|---|
| Basic contact form, no storage needed | Formspree, Formspark, or Netlify Forms | Zero backend code; reliable hosted routing |
| Needs custom validation or spam filtering | Resend or SendGrid via Next.js API route | One route file; no database |
| Needs email + lightweight storage | Resend + Supabase insert, or Resend + Airtable API | One route file; storage justified by retrieval need |
| Needs CRM routing | Zapier/Make webhook from form submission | No custom code; integrates with HubSpot, Pipedrive, etc. |

**Booking:**

| Scenario | Tool | Why |
|---|---|---|
| Appointment booking (most cases) | Calendly, Cal.com, or Acuity | Complete hosted solution; no backend |
| Booking with deposit | Calendly paid events, or Square Appointments | Handles payment + booking together |
| Multi-service booking with custom rules | Acuity or SimplyBook.me | Still hosted; handles complexity |
| Custom availability/team logic (confirmed) | Custom API + Supabase | Justified only if no hosted tool meets the need |

**Payments:**

| Scenario | Tool | Why |
|---|---|---|
| Fixed service payment / deposit | Stripe payment link | No backend code; Stripe-hosted |
| Package checkout | Stripe hosted checkout | Server-side session creation only (one API route) |
| Subscription billing | Stripe Billing + webhook handler | One webhook route; no custom subscription logic |
| Invoice payment | Stripe invoice link or hosted invoice | No backend |
| Full ecommerce | Out of scope for this system | Confirm separately |

**Auth (only when a protected area is confirmed):**

| Scenario | Tool | Why |
|---|---|---|
| Simple password-protected page | Next.js middleware + env variable | No auth system; appropriate for low-stakes access |
| Client portal with per-user data | Clerk or NextAuth | Managed auth with minimal custom code |
| Full membership with granular roles | Supabase Auth + RLS | When Supabase is already the data layer |

Do not add auth without a confirmed protected area in scope.

**CMS (only when confirmed in scope):**

| Scenario | Tool | Why |
|---|---|---|
| Agency updates content occasionally | No CMS — data files | Simpler; version-controlled |
| Agency wants UI for content updates | Sanity (free tier) or Contentful | Clean headless CMS with structured content types |
| Client manages their own content | Sanity or Contentful with role restrictions | Gives client access without exposing code |

**Chat:**

| Scenario | Tool | Why |
|---|---|---|
| Any live chat or chatbot need | Intercom, Crisp, Tidio, or Tawk.to | Embedded widget; zero backend |

---

## Part 3: Integration Boundary Design

When a backend integration is needed, the boundary must be clearly defined. The frontend should never know implementation details of the backend integration beyond what it needs to call the API route.

**Standard integration pattern for Next.js:**

```
Frontend (React component)
    ↓
Next.js API Route (app/api/[route]/route.ts)
    ↓
External service (Resend, Stripe, Supabase, etc.)
```

The component calls the API route. The API route calls the external service. The component never holds API keys or calls external services directly.

**API route responsibilities:**
- Input validation (confirm required fields, sanitize values)
- Spam/abuse filtering where relevant
- Calling the external service with the server-side secret
- Returning a structured response (success with data or error with message)
- Never returning internal error details to the client

**Error handling in API routes:**
- Validation errors → 400 with user-readable message
- External service failure → 500 with generic "something went wrong" message
- Success → 200 with minimal necessary confirmation data

The frontend component handles loading state, success state, and error state based on the API route response. It does not parse external service responses directly.

---

## Part 4: Persistence Design (When Needed)

When real persistence is confirmed as needed, apply these rules before designing the schema.

**Minimum viable persistence rule:**
Store only what is needed for a confirmed operational purpose. Every table and every column has a cost: storage, maintenance, security surface, backup risk. Ask "what decision does this data enable?" If no one can answer clearly, do not store it.

**For lead/submission storage in Supabase:**

Minimum table structure for a quote request:
```sql
create table quote_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text,
  service_type text,
  message text,
  status text default 'new'   -- 'new' | 'contacted' | 'converted'
);
```

Row-level security: submissions insert-only from the API route. Select requires authenticated agency user.

Do not add columns speculatively. If the agency is not going to use a field in a real workflow, do not create it.

**For booking records (when a custom booking layer is confirmed):**
Define only the fields the business's operations actually require. Confirm with the agency what they need to see, what they need to query, and what they need to report on — before designing the schema.

**For payment records:**
Stripe is the source of truth for payment data. Do not replicate payment details in your own database unless there is a specific operational reason. Store the Stripe `payment_intent.id` or `session.id` as a reference and fetch details from Stripe when needed.

---

## Part 5: Serverless Function Patterns

For Model C (light custom/serverless) and Model F (hybrid) backends, these are the common pattern types.

**Pattern 1 — Contact form API route:**
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json()
  // 1. Validate inputs
  // 2. Check honeypot / spam signal
  // 3. Send email via Resend
  // 4. Return success or error
}
```

**Pattern 2 — Stripe checkout session creation:**
```typescript
// app/api/checkout/route.ts
export async function POST(request: Request) {
  const { priceId, metadata } = await request.json()
  // 1. Create Stripe checkout session server-side
  // 2. Return session URL to frontend
  // Frontend redirects to Stripe-hosted checkout
}
```

**Pattern 3 — Stripe webhook handler:**
```typescript
// app/api/webhooks/stripe/route.ts
export async function POST(request: Request) {
  // 1. Verify webhook signature (STRIPE_WEBHOOK_SECRET)
  // 2. Handle specific events (payment_intent.succeeded, etc.)
  // 3. Trigger email confirmation, record update, or notification
  // 4. Return 200 immediately — do not delay webhook response
}
```

**Pattern 4 — Form submission with storage:**
```typescript
// app/api/quote/route.ts
export async function POST(request: Request) {
  // 1. Validate inputs
  // 2. Insert to Supabase table
  // 3. Send email notification via Resend
  // 4. Return success
}
```

Keep each route file focused on one job. Do not build a multi-purpose API route that handles different feature flows based on request parameters.
