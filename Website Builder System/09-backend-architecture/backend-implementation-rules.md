# Backend Implementation Rules

This file defines security and privacy expectations, environment configuration discipline, maintainability and cost rules, and operational standards for any backend this system activates.

---

## Part 1: Security and Privacy Expectations

These expectations are practical and website-appropriate — not enterprise compliance theater. They apply whenever the backend handles form submissions, payments, or stored data.

**Secret management:**
- Every API key, database URL, webhook secret, and integration token lives in environment variables — never in frontend code, never committed to version control
- Environment variables are set in the platform (Vercel, Netlify) and accessed via `process.env.VARIABLE_NAME` in API routes only
- The frontend never receives secrets in responses — only confirmation data the user needs to see
- A leaked secret is a real incident. Treat `.env.local` as sensitive. Add it to `.gitignore` before the first commit.

Minimum required environment variables for common patterns:

```
# Email delivery
RESEND_API_KEY=

# Payments
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=   # Safe to be public — this is intentional

# Database (if Supabase)
SUPABASE_URL=
SUPABASE_ANON_KEY=         # Safe for frontend reads with RLS enabled
SUPABASE_SERVICE_ROLE_KEY= # Server-side only — never in frontend

# CMS (if applicable)
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_TOKEN=          # Server-side only

# Auth (if applicable)
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

**Input validation:**
Every API route that accepts user input must validate it server-side. Do not rely on client-side validation alone.

Minimum validation for a contact form:
- Required fields are present and non-empty
- Email field passes basic format check
- String fields have maximum length limits (prevent payload flooding)
- No script injection in text fields (sanitize if storing; escape on output)

Use a schema validation library (`zod`) for consistent, readable validation:
```typescript
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(20).optional(),
  message: z.string().min(1).max(2000),
  honeypot: z.string().max(0),  // Must be empty — bot trap
})
```

**Spam protection:**
Every publicly accessible form submission API route must include at minimum:
- A honeypot field (hidden input that bots fill in; humans leave empty)
- Rate limiting when submission volume justifies it (Upstash rate limiter or Vercel's built-in)
- Optional: Cloudflare Turnstile or hCaptcha for high-value forms (quote requests, booking requests)

Do not add CAPTCHA to every form by default — it adds friction. Add it where abuse is a real risk.

**Data minimization:**
Store only the data you need. If you are not going to use a field in a workflow, do not collect it or store it. This is both a privacy principle and a maintenance principle.

**Sensitive data handling:**
- Do not store credit card details — Stripe handles this
- Do not store passwords — use an auth provider (Clerk, NextAuth, Supabase Auth)
- Do not log submission content in plain text in server logs — log metadata only (timestamp, status)
- Do not return internal error details to the client — log them server-side, return generic messages

**Failure handling:**
Every API route must handle failures gracefully:
- If the email service is down, do not silently succeed — return an error the frontend can show to the user
- If the database insert fails, attempt retry logic for submission data (or queue via a hosted service)
- Stripe webhook handlers must return 200 quickly and process asynchronously if needed — a slow webhook handler causes Stripe to retry and create duplicates
- No fake success states — do not tell the user their submission succeeded if the underlying action failed

---

## Part 2: Environment Configuration Rules

**Development vs. production:**
All integrations must work in both environments. Use test keys for development and production keys for production. Never use production Stripe keys or live email credentials in development.

Standard environment setup:
```
# .env.local — development (gitignored)
RESEND_API_KEY=re_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Production (set in Vercel dashboard — never in files)
RESEND_API_KEY=re_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

**Webhook configuration:**
Stripe and other webhook providers must be configured to send to the correct production URL. During development, use the Stripe CLI or ngrok to forward webhooks locally. Document the webhook endpoint URL in the handoff so the agency can confirm it is configured correctly after deployment.

**Database connection (if Supabase):**
The `SUPABASE_SERVICE_ROLE_KEY` must only be used in API routes. The `SUPABASE_ANON_KEY` is safe to use in the frontend for reads when Row Level Security (RLS) is properly configured. Confirm RLS is active on every table before using the anon key in the frontend.

**Environment variable documentation:**
Every environment variable used in the project must be documented. Create a `.env.example` file (safe to commit) that lists all variable names with placeholder values and comments:

```
# Email delivery — Resend (https://resend.com)
RESEND_API_KEY=

# Payments — Stripe (https://dashboard.stripe.com)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=   # Set up via Stripe Dashboard > Webhooks
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

This is the agency's setup guide for future deployments or team members.

---

## Part 3: Maintainability and Cost Rules

**The maintenance burden test:**
Before finalizing any backend recommendation, ask: "If the lead developer on this project is unavailable for 3 months, can the agency keep this backend running without incident?" If the answer is no, the backend is too complex.

**Operational simplicity hierarchy:**
1. No backend — always maintainable
2. Hosted tool — the provider handles maintenance
3. Serverless API routes — stateless, no infrastructure to manage
4. Supabase — managed Postgres with UI; lower maintenance than self-hosted
5. Firebase — managed NoSQL with UI; lower maintenance than self-hosted
6. Self-hosted or complex custom backend — highest maintenance burden; avoid for business sites

**Cost expectations by model:**

| Model | Monthly cost range | Who pays |
|---|---|---|
| Model A (no backend) | $0–$20 (hosting only) | Agency / client |
| Model B (hosted tools) | $0–$100+ depending on tools (Calendly, Stripe fees, etc.) | Client (SaaS fees) |
| Model C (serverless) | $0–$10 (Vercel functions, Resend, etc.) | Agency / client |
| Model D (Supabase) | $0–$25 (free tier generous; Pro at $25/month) | Agency / client |
| Model E (Firebase) | $0–variable (Spark free tier; Blaze pay-as-you-go) | Agency / client |

Define which costs the agency absorbs and which are the client's responsibility. Recurring SaaS fees (Calendly, Stripe fees, chat widgets) are typically client costs.

**Upgrade path discipline:**
If the project starts at Model A or B and the client later needs more, the architecture should support upgrading without a full rewrite. Practically:
- Contact forms built with API routes are easy to add storage to later
- Booking via Calendly can later be replaced with a custom booking system without touching other pages
- Data files can later be replaced by CMS integration without changing component structure

Good backend architecture creates clean upgrade paths, not migration nightmares.

**Database maintenance (if Supabase):**
- Enable Point-in-Time Recovery on production databases
- Set up at least weekly automated backups
- Confirm who is responsible for running migrations when the schema changes
- Document the schema in a `supabase/migrations/` folder — never modify production schema without a migration file

---

## Part 4: Operational Reliability Rules

**Email delivery reliability:**
- Do not use `nodemailer` with SMTP directly — deliverability is poor for cold SMTP setups
- Use a transactional email service (Resend or SendGrid) with a verified sending domain
- Verify the sending domain before launch — unverified domains land in spam
- Set up SPF and DKIM records for the sending domain
- Test email delivery in production before launch — do not assume staging behavior equals production

**Webhook reliability:**
- Stripe and other webhook providers retry failed deliveries. Make webhook handlers idempotent — processing the same event twice should not create duplicates.
- Use the event ID to deduplicate if needed
- Keep webhook handlers fast — complete processing within the request, or offload heavy work to a background job
- Log webhook events on receipt (event type + ID) for debugging

**Form submission reliability:**
- Provide the user with immediate confirmation that their submission was received
- If the backend action fails silently, the user has no way to know — always surface failures
- Consider a secondary submission safety net: even if the main email fails, write to a fallback (log + alert)

**Booking and payment reliability:**
- Never rely on the frontend redirect completing successfully as proof of payment — always confirm via webhook
- Show a clear confirmation page after payment that does not depend on the payment succeeding in real time — the webhook handles the actual confirmation
- For booking, confirm the booking via the hosted tool's confirmation email — do not build a custom confirmation system unless the hosted tool does not provide one
