# Backend Architecture Agent — Worked Examples

Three worked examples showing how the backend agent makes decisions across different complexity levels. Each is abbreviated to demonstrate the key calls and reasoning.

---

## Example 1 — Pressure Washing Business (Model F — Hybrid)

**Business:** Peak Ridge Pressure Washing, Austin TX
**Confirmed features:** Contact/quote form, static gallery, service pages, service-area page, local SEO
**Not in scope:** Booking, payments, CMS, gated access

---

### Backend Verdict

**Model F — Hybrid: one serverless API route + zero hosted tools**

The only backend need on this site is secure contact form submission handling. The gallery is static. The service pages are statically generated. The service-area page is static. Local SEO is metadata and schema — no backend.

One API route at `app/api/contact/route.ts` handles form submission, validates inputs, filters spam via honeypot, and sends an email notification via Resend. That is the entire backend.

**What this site does NOT need:**
No database. No auth. No Supabase. No Firebase. No booking backend. No payment backend. No CMS. No webhooks. No admin dashboard.

---

### The Hard Call: "Should We Store Leads?"

The agency asked whether form submissions should be stored in a database so they can review them later.

The answer is no, for this project.

Reasoning:
- The business receives an estimated 5–15 quote requests per month
- The agency reads email — they will see every submission
- A Supabase table for 15 records per month adds deployment complexity, environment variable management, database security, and ongoing maintenance without enabling any workflow the agency is not already doing via email
- If the volume grows to where email management becomes painful, adding a Supabase insert to the existing API route is a 10-line change — the architecture supports it without a rewrite

The right answer now is email only. The upgrade path is clear.

---

### Backend Structure

```
app/api/
└── contact/
    └── route.ts
```

**`app/api/contact/route.ts` responsibilities:**
1. Parse JSON body
2. Validate with Zod: name (required), email (required, valid format), phone (optional), message (required), service (optional), honeypot (must be empty)
3. If honeypot is filled → return 400 silently (do not tell bots they were caught)
4. Call Resend to send notification email to agency
5. Return `{ success: true }` on success, `{ error: 'Something went wrong' }` on failure

**Environment variables:**
```
RESEND_API_KEY=
RESEND_FROM_EMAIL=noreply@peakridgepressurewashing.com
AGENCY_NOTIFICATION_EMAIL=info@peakridgepressurewashing.com
```

**Email domain setup:** `peakridgepressurewashing.com` is the sending domain. SPF and DKIM records must be configured before launch.

---

### What the Agency Gets

A contact form that:
- Validates input server-side
- Filters obvious bot submissions
- Sends a formatted email to the agency inbox immediately
- Shows the user a clear success or failure state
- Never exposes any API keys in the browser
- Costs approximately $0/month (Resend free tier covers this volume)

Simple. Reliable. Maintainable by anyone who can manage email.

---

---

## Example 2 — Medical Aesthetic Clinic (Model F — Hybrid: hosted booking + serverless)

**Business:** Revive Aesthetic Studio
**Confirmed features:** Online booking (Acuity), contact form (inquiry only), Stripe deposit for certain treatments, gallery, reviews, local SEO
**Not in scope:** CMS, gated access, custom booking logic

---

### Backend Verdict

**Model F — Hybrid:**
- Acuity Scheduling for booking (hosted — zero custom backend)
- Stripe hosted checkout for deposits (one API route for session creation + one webhook route)
- Resend for contact form email delivery (one API route)

**Three API routes total. No database.**

---

### Feature-by-Feature Breakdown

**Booking (Acuity):**
Acuity handles availability, booking confirmation emails, reminders, calendar sync, and rescheduling. The website embeds the Acuity booking widget on the `/contact` and service pages. Zero custom backend code. Acuity stores the booking records — the clinic reviews them in the Acuity dashboard, not on the website.

What the frontend does: renders `<AcuityWidget />` inside `components/features/booking/BookingWidget.tsx`. Client component. That is it.

**Deposit payments (Stripe):**
Some treatments require a deposit before the appointment is confirmed. The flow:
1. User completes booking in Acuity
2. User is redirected to a deposit payment page on the website
3. Frontend calls `/api/checkout` → API route creates a Stripe hosted checkout session → returns session URL
4. Frontend redirects to Stripe-hosted checkout
5. After payment, Stripe redirects to `/booking/confirmed?session_id=...`
6. Stripe webhook fires to `/api/webhooks/stripe` → API route verifies signature + confirms payment + triggers Resend confirmation email

**Why no database:** Stripe is the source of truth for payment records. The clinic views payments in the Stripe dashboard. The webhook handler does not store payment data — it only triggers a confirmation email and updates the Acuity appointment status via Acuity's API.

**Contact form:**
Inquiry-only (not a booking form). Routes to `/api/contact` → Resend email to clinic. Same pattern as Example 1.

---

### The Hard Call: "Should We Build Custom Booking?"

The original brief mentioned that Acuity "might not match the brand perfectly" and asked about building a custom booking UI.

The answer is: no.

Reasoning:
- Acuity handles all booking complexity (availability, conflicts, reminders, calendar sync, rescheduling, staff assignment)
- Building this from scratch is 4–6 weeks of backend work with ongoing maintenance
- The brand concern is a UI concern — Acuity embeds can be styled, and the deposit payment flow uses the clinic's own Stripe-hosted checkout which can be branded
- If the brand mismatch is genuinely severe, Cal.com (open-source, more customizable) is the alternative before building custom

**Escalation note:** If the client insists on a fully custom booking UI with no hosted tool, this becomes Model D (Supabase) territory with significant additional scope. That decision requires explicit confirmation and repricing — it is not handled here.

---

### Environment Variables

```
# Email
RESEND_API_KEY=
RESEND_FROM_EMAIL=hello@reviveaesthetic.com
CLINIC_NOTIFICATION_EMAIL=bookings@reviveaesthetic.com

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Acuity (embed only — no API key needed for basic embed)
# If Acuity API is used for post-payment status update:
ACUITY_USER_ID=
ACUITY_API_KEY=
```

---

---

## Example 3 — Regional Roofing Contractor (Model D — Minimal Supabase)

**Business:** Summit Roofing Co., multiple service types, insurance claim support
**Confirmed features:** Multi-step quote form with lead storage, Stripe deposit payment, gallery, chat widget, possibly a simple client portal to check job status
**Explicitly out of scope:** CMS, full ecommerce, complex membership

---

### Backend Verdict

**Model D — Minimal Supabase**

This is the first example in this system where a real database is genuinely justified. The reasons:

1. The multi-step quote form collects detailed project information (address, damage type, urgency, estimated scope) that the agency needs to review and track, not just receive via email
2. The agency wants to see lead pipeline status (new → contacted → quoted → converted) without managing a spreadsheet manually
3. The client portal feature (confirmed in scope) requires per-user job status data — this needs a persistent data layer and authentication

If the client portal were not in scope, this would still be Model F — lead storage can be justified, but for a different system it might have gone to an external CRM instead. The combination of lead tracking + client portal makes Supabase the right call here.

---

### What Supabase Handles

**Tables:**
```sql
-- Quote requests / leads
create table quote_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text not null,
  address text,
  service_type text,      -- 'roof-repair' | 'full-replacement' | 'inspection' | etc.
  urgency text,           -- 'emergency' | 'within-week' | 'planning'
  description text,
  status text default 'new',   -- 'new' | 'contacted' | 'quoted' | 'converted' | 'lost'
  stripe_payment_intent_id text   -- Reference to deposit payment if applicable
);

-- Client portal jobs (separate from quote requests — confirmed jobs only)
create table jobs (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references auth.users(id),
  quote_request_id uuid references quote_requests(id),
  status text,    -- 'scheduled' | 'in-progress' | 'complete' | 'warranty'
  scheduled_date date,
  notes text,
  created_at timestamptz default now()
);
```

RLS rules:
- `quote_requests`: insert from API route using service role key; select requires authenticated agency user
- `jobs`: insert/update via service role key; select allows authenticated client for their own rows only

**Auth:**
- Agency admin: Supabase Auth with email/password — for reviewing leads and updating job statuses
- Client portal: Supabase Auth with email/password or magic link — clients see only their own job records

This is the minimum auth scope: two user roles, simple permissions, managed by Supabase.

---

### The Hard Call: "Should We Build a Full Admin Dashboard?"

The agency asked about a full admin CRM panel — lead pipeline view, email templates, scheduling calendar, invoice tracking.

The answer is: no, not in this project.

What is built:
- Supabase dashboard (the built-in Supabase table editor) is the agency's lead review tool — it is an admin panel that already exists and requires zero custom code
- Status updates on leads are done directly in the Supabase table
- The client portal is a simple status view page — not a full client management system

If the agency genuinely needs a branded admin interface, that is a separate product decision that requires significant additional scope. For this build, the Supabase table editor handles lead management and the client portal handles client communication.

---

### What Would Have Made This Model D Instead of Simpler

Without the confirmed client portal:
- Lead tracking could go to Airtable via Zapier (no Supabase)
- Or a simple Supabase table with no client-facing auth
- Either of those keeps the complexity lower

The client portal is what justified Model D. Gated per-user data requires a real data layer and auth. That is the threshold.

If the client portal had been "we might want one later," the answer would have been: build Model F now, upgrade to Model D when the portal is confirmed.

**This is the correct use of Supabase in this system.** It is not added for ambition. It is added because a confirmed feature genuinely requires it.
