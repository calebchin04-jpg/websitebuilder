# Backend Architecture Output Template

Use this template to produce the full backend architecture output. Fill every section. Label all assumptions explicitly. Write "N/A — [reason]" where a section does not apply.

---

## BACKEND ARCHITECTURE PACKAGE
**Project:** [Business Name]
**Site type:** [e.g., Local service business — pressure washing]
**Stage:** 09-backend-architecture — output complete
**Backend model:** [A / B / C / D / E / F — with label]
**Activated features:** [List of confirmed features that triggered backend evaluation]
**Prior-stage quality:** [Strong / Acceptable with flags / Weak — assumptions made]

---

## Section 1 — Backend Verdict

**Backend model:** [e.g., Model F — Hybrid: hosted tool + light custom serverless]
**Reason:** [2–3 sentences on why this model is correct for this project]

**What this model is NOT:**
[Explicitly state what was considered and rejected — e.g., "This site does not need Supabase. It does not need custom booking logic. It does not need an auth system."]

**One-sentence verdict:**
[The clearest summary of the backend decision — what it is and what it explicitly is not.]

---

## Section 2 — Critique of Upstream Inputs

**07-implementation-planning:**
[Is the backend scope correctly sized in the implementation plan? Are there assumptions that imply more backend than is needed? Are integration choices realistic?]

**08-frontend-architecture:**
[Did the frontend architecture correctly define the frontend/backend boundary? Are there integration points that need clarification from the backend perspective?]

**12-feature-forms:**
[Are the form submission expectations clearly scoped? Is the submission routing well-defined?]

**16-feature-booking-payments:**
[Is the booking/payment approach confirmed? Are there unclear assumptions that imply custom backend work?]

**Overall backend risks from upstream:**
[List 2–4 specific risks — e.g., "Implementation plan mentions 'lead storage' without specifying what the agency will do with stored leads — if no one reviews them, storage adds no value"]

---

## Section 3 — Backend Necessity Analysis

**Features that create backend needs:**

| Feature | Backend need | Why |
|---|---|---|
| [e.g., Contact form] | API route + email delivery | Secrets must be server-side; spam filtering needed |
| [e.g., Booking] | Hosted tool (Calendly) — no custom backend | Complete hosted solution; no server-side logic needed |
| [e.g., Deposit payment] | Stripe checkout session creation (one API route) | Server-side secret required for session creation |
| [e.g., Gallery] | None — static data | Gallery images are in data files; no backend |

**What stays frontend / config-only:**

| Feature / Content | Why no backend needed |
|---|---|
| [e.g., Services content] | Static data files — no editing workflow needed |
| [e.g., Testimonials] | Pre-approved; static data file |
| [e.g., FAQ content] | Static; agency edits in data file |
| [e.g., Local SEO pages] | Statically generated from data files |

---

## Section 4 — Ownership Boundaries

**What 09-backend-architecture owns on this project:**
[Specific decisions being made here]

**What belongs to other agents:**

| Decision | Owner |
|---|---|
| Form field structure and UX | 12-feature-forms |
| Booking user flow and tool selection at the feature level | 16-feature-booking-payments |
| Frontend code structure and API route file placement | 08-frontend-architecture |
| Metadata and schema generation | 17-feature-local-seo |
| Durable backend product reference | 20-backend-prd |

---

## Section 5 — Data Classification and Handling

**Category 1 — Static Business Content:**

| Content | Handling |
|---|---|
| [e.g., Service descriptions, pricing, hours] | `data/config/` and `data/services/` — no backend |
| [e.g., Testimonials] | `data/features/testimonials.ts` — no backend |
| [e.g., FAQ items] | `data/features/faqs.ts` — no backend |

**Category 2 — Submission Data:**

| Submission type | Handling approach | Storage? |
|---|---|---|
| [e.g., Contact form submissions] | API route + Resend email | [No / Yes — Supabase table] |
| [e.g., Quote requests] | API route + Resend email + [storage if justified] | [Specify] |

**Category 3 — Transactional / Operational Data:**

| Transaction type | Handling approach | Storage? |
|---|---|---|
| [e.g., Deposit payments] | Stripe hosted checkout + webhook handler | Stripe is source of truth; reference ID stored if needed |
| [e.g., Booking events] | Calendly hosted | No custom storage |

**Category 4 — CMS / Dynamic Content:**

| Content type | Handling | Justification |
|---|---|---|
| [e.g., Blog posts] | [Not in scope / Sanity / Data files] | [Reason] |

---

## Section 6 — Recommended Backend Architecture

**Backend structure:**

```
app/
└── api/
    ├── contact/
    │   └── route.ts           # [Purpose: contact form submission]
    ├── quote/
    │   └── route.ts           # [Purpose: quote form — optional if separate from contact]
    ├── checkout/
    │   └── route.ts           # [Purpose: Stripe session creation — if payments confirmed]
    └── webhooks/
        └── stripe/
            └── route.ts       # [Purpose: payment confirmation handling — if payments confirmed]
```

**API route responsibilities:**

| Route | Input | External calls | Output |
|---|---|---|---|
| `/api/contact` | name, email, phone, message, honeypot | Resend (send email) | `{ success: true }` or error |
| `/api/checkout` | priceId, metadata | Stripe (create session) | `{ url: sessionUrl }` |
| `/api/webhooks/stripe` | Stripe event payload | Stripe (verify signature) | `{ received: true }` |

**Hosted integrations (no custom backend needed):**

| Feature | Tool | Integration point |
|---|---|---|
| [e.g., Booking] | Calendly | Embed in page via script or iFrame |
| [e.g., Chat] | [Tool] | Script embed in root layout |

**Intentionally omitted:**
[State explicitly what is not being built and why — e.g., "No database. No auth system. No admin dashboard. These were not confirmed in scope and would add complexity without justifying value."]

---

## Section 7 — Tooling Recommendation

**Email delivery:** [Resend / SendGrid / Formspree / other]
**Reason:** [Why this choice; why alternatives were rejected]

**Payments (if applicable):** [Stripe payment links / Stripe hosted checkout / other]
**Reason:** [Why; what was considered and rejected]

**Booking (if applicable):** [Calendly / Cal.com / Acuity / custom]
**Reason:** [Why; what was considered and rejected]

**Database (if applicable):** [Supabase / None / other]
**Reason:** [Why; whether Supabase was considered and accepted or rejected]

**Auth (if applicable):** [Clerk / NextAuth / Supabase Auth / None]
**Reason:** [Why or why not]

**CMS (if applicable):** [Sanity / Contentful / None / Data files]
**Reason:** [Why or why not]

**Rejected alternatives and why:**
[e.g., "Firebase — rejected because the data model is relational and the agency is more familiar with Postgres; also Supabase is overkill here so both were rejected in favor of email-only routing"]

---

## Section 8 — Feature-by-Feature Backend Support

**Contact Form:**
- Backend support level: [None — hosted form routing / API route + email / API route + email + storage]
- Route: `[app/api/contact/route.ts — if applicable]`
- External service: [Resend, Formspree, etc.]
- Spam protection: [Honeypot / Turnstile / Rate limiting / None]
- Failure behavior: [What the user sees if submission fails]
- Confirmation: [Email to agency / Email to user / Both / None]

**Booking (if activated):**
- Backend support level: [Hosted tool only / Custom backend]
- Tool: [Calendly / Cal.com / custom]
- Integration: [Embed / Redirect / iFrame]
- Payment integration: [Included in tool / Separate Stripe flow]
- Custom backend needed: [Yes — specify / No]

**Payments (if activated):**
- Backend support level: [Payment link / Stripe hosted checkout / Custom]
- Route(s): [app/api/checkout/route.ts / app/api/webhooks/stripe/route.ts]
- What Stripe handles: [Session, checkout UI, confirmation email]
- What custom code handles: [Session creation, webhook verification, post-payment action]
- Data stored: [Stripe is source of truth; payment_intent ID stored in X if applicable]

**Chat (if activated):**
- Backend support level: [Embedded widget — zero backend]
- Tool: [Intercom / Crisp / Tidio / other]
- Integration: [Script in root layout]

**CMS (if activated):**
- Backend support level: [Not in scope / Headless CMS]
- Tool: [Sanity / Contentful / other]
- Content types: [List confirmed content types]
- Integration: [API fetch at build time / ISR / real-time]

**Gated Access (if activated):**
- Backend support level: [Not in scope / Simple password / Auth provider]
- Tool: [Clerk / NextAuth / Supabase Auth / None]
- Protected routes: [List]
- Data behind gate: [What the user accesses after auth]

---

## Section 9 — Security / Privacy / Reliability Expectations

**Secret management:**
- All API keys and secrets in environment variables: [confirmed]
- `.env.local` in `.gitignore`: [confirmed]
- No secrets in frontend code: [confirmed]
- `.env.example` with placeholder values: [to be created]

**Input validation:**
- Validation library: [Zod / manual / none]
- Fields validated: [List per form]
- Max length limits: [Set on all string inputs]

**Spam protection:**
- Honeypot field: [Yes / No — on which forms]
- Rate limiting: [Yes / No — tool if yes]
- CAPTCHA: [Yes / No — tool and which forms if yes]

**Failure handling:**
| Failure scenario | User experience | Backend behavior |
|---|---|---|
| Email service down | Error message shown to user | Log failure; return 500 |
| Database insert fails | Error message shown to user | Log failure; retry if transient |
| Stripe webhook delivery fails | Stripe retries automatically | Handler is idempotent; deduplicates by event ID |

**Data minimization:**
[List what is stored and why. Confirm nothing is stored speculatively.]

---

## Section 10 — Environment / Configuration Requirements

**Required environment variables:**

```bash
# [Group 1 — e.g., Email delivery]
RESEND_API_KEY=

# [Group 2 — e.g., Payments]
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# [Group 3 — if Supabase]
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# [Group 4 — if CMS]
[CMS_VARIABLE]=
```

**Webhook configuration required:**
| Service | Webhook URL | Events to handle | Notes |
|---|---|---|---|
| [Stripe] | `https://[domain]/api/webhooks/stripe` | `payment_intent.succeeded`, etc. | Configure in Stripe dashboard |

**Email sending domain setup:**
- Sending domain: [domain or subdomain used for transactional email]
- SPF record: [required]
- DKIM record: [required]
- Verify before launch: [yes]

**Per-environment differences:**
[What differs between development and production — test vs. live keys, webhook forwarding setup, etc.]

---

## Section 11 — Maintainability / Cost / Operational Risks

**Who manages the backend post-launch:**
[The agency / the client / external developer — and what their technical level needs to be]

**Expected maintenance load:**
[Low / Medium — with specifics. E.g., "The only ongoing maintenance is updating environment variables if API keys rotate, and monitoring email delivery rates. No database migrations or infrastructure management."]

**Monthly cost estimate:**

| Service | Tier | Monthly cost |
|---|---|---|
| Resend | Free tier (up to 3,000 emails/month) | $0 |
| Vercel (hosting + functions) | Hobby / Pro | $0 / $20 |
| Stripe fees | Per transaction (2.9% + 30¢) | Variable — client's cost |
| [Other services] | | |

**Operational risks:**
- [e.g., "Email domain not verified before launch — emails land in spam. Mitigation: verify domain and test delivery in staging before launch"]
- [e.g., "Stripe webhook not configured in production — payment confirmations never fire. Mitigation: webhook configuration is part of the pre-launch checklist"]

---

## Section 12 — Risks and Failure Modes

**Risk 1 — Overbuilding:**
[e.g., "Adding a Supabase database to store form submissions when email notification is sufficient. Mitigation: clearly define what stored submissions enable. If no one is querying them, they add cost and maintenance without value."]

**Risk 2 — Underbuilding:**
[e.g., "No spam protection on contact forms. Public forms without honeypot or rate limiting are exploited within hours of launch. Mitigation: honeypot field on every form submission route."]

**Risk 3 — Silent failures:**
[e.g., "Form submission API route catches errors and returns 200 anyway to avoid showing errors. User believes submission succeeded; agency never receives it. Mitigation: surface failures to users; never fake success."]

**Risk 4 — Secret exposure:**
[e.g., "Stripe secret key referenced in a frontend component accidentally. Mitigation: all Stripe server-side calls are in API routes only; Next.js build fails if server-only env vars are accessed in client components."]

**Risk 5 — Scope creep:**
[e.g., "Downstream developer adds a lead management dashboard 'while they're in there.' Mitigation: scope is explicitly defined in this document; any additions require a new feature decision from the agency."]

---

## Section 13 — Final Handoff

**What is defined and ready for build:**
[One paragraph: the backend model is confirmed, API routes are specified, tooling is selected, environment variables are listed, integration boundaries are clear. A developer has what they need.]

**Pre-launch checklist:**
- [ ] All environment variables set in production platform
- [ ] Sending domain verified for transactional email
- [ ] Stripe webhook URL configured in Stripe dashboard
- [ ] Spam protection (honeypot) present on all submission forms
- [ ] Error handling tested — confirm user sees an error if submission fails
- [ ] Success flow tested — confirm user sees confirmation if submission succeeds
- [ ] `.env.example` created and committed to repository
- [ ] [Any other project-specific items]

**What must NOT be added by later implementers:**
[Explicit statement — e.g., "Do not add a database without a new backend scope decision. Do not add Supabase 'just in case.' Do not add auth without a confirmed protected area. Do not add CMS without confirming who will edit it and what they will edit."]

**Assumptions made:**
| Assumption | Based on | Risk if wrong |
|---|---|---|
| [e.g., "No lead storage needed — email notification is sufficient"] | [07 implementation plan + 12-feature-forms — no storage requirement mentioned] | [Low — API route can be extended to add storage if needed without architectural change] |
| [e.g., "Booking is via Calendly"] | [16-feature-booking-payments confirmation] | [Medium — if a different tool is chosen, the embed integration changes] |

**Handoff to build stage:**
- API routes: [List files with purpose]
- Environment variables: [Reference Section 10]
- External service accounts needed before build can complete: [List — e.g., "Resend account with verified sending domain, Stripe account in test mode"]
- Webhook configuration required before launch: [Reference Section 10]
