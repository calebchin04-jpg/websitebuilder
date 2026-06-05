# Backend Decision Rules

This file defines how to classify the backend need, select the right model, evaluate each feature, and make hard calls about when to say no to backend complexity.

---

## Part 1: The Five Opening Questions

Answer these five questions from upstream inputs before any architecture work begins. The answers determine the model.

**1. What approved features require server-side logic?**
Walk through every confirmed feature. For each, ask: can this be done entirely in the frontend with static/config data? Can a hosted tool handle it? Does it need custom server-side logic? Does it need data persistence?

**2. What data actually needs to be stored?**
Separate business content (stays in config/data files) from submission data (may need routing or storage) from transactional data (may need persistence). Be specific — "we need to store leads" is vague. "We need to store quote request submissions with service type, urgency, and contact details so the agency can retrieve them from a dashboard" is specific. The specificity determines the right model.

**3. Does any user-facing behavior depend on stored state?**
Static pages do not depend on stored state. A booking confirmation page that shows appointment details does. A form thank-you page that just says "we will call you" does not. Only if user-facing behavior genuinely depends on stored state is a persistent backend needed.

**4. Does any behavior require secrets that cannot be safely kept in the frontend?**
API keys, webhook secrets, payment keys — these must live server-side. This is not a reason to add a full backend; it is a reason to add one API route or serverless function. Know the difference.

**5. Who manages it after launch?**
A backend that the agency cannot realistically maintain is a liability, not an asset. If a recommended backend choice would require the agency to manage database migrations, monitor serverless function errors, and debug webhook failures on an ongoing basis — and they are not equipped for that — the recommendation is wrong regardless of technical elegance.

---

## Part 2: Backend Model Selection

Select one of six models. This drives every downstream recommendation.

**Model A — No True Backend**

Profile:
- Site is mostly static/presentational
- Contact is handled via a lightweight hosted form service or mailto
- No real data persistence needed
- No user accounts
- Booking/payment/chat are either not present or handled entirely by hosted tools

When to choose:
- Brochure sites
- Many local service business websites where "backend" reduces to a contact form forwarding email
- Sites where every dynamic-seeming feature can be offloaded to a hosted tool

Hard rule: Do not add backend infrastructure to handle work that a hosted service like Resend, Formspree, or Zapier can handle cleanly.

---

**Model B — Hosted Tool Led**

Profile:
- The site has forms, booking, payments, or chat
- But each of these is handled by a trusted hosted platform
- There is no custom server-side logic beyond possibly one lightweight API relay
- Data storage is the hosted platform's responsibility

When to choose:
- Sites that need booking (Calendly, Cal.com, Square Appointments)
- Sites with payment links (Stripe payment links, Square, PayPal)
- Sites with chat (Intercom, Crisp, Tidio)
- Sites with form/lead routing (Formspree, Formspark, Netlify Forms, or similar)

Hard rule: Hosted tools should not be rejected because "we could build it ourselves." The question is whether the hosted tool meets the business's real need. If it does, use it.

---

**Model C — Light Custom / Serverless Backend**

Profile:
- The site needs small amounts of server-side logic
- Secrets must be kept server-side
- There is some orchestration, validation, or API proxying that the frontend cannot do safely
- But no real database or app backend is needed

What this typically means in Next.js:
- One to three `app/api/` route handlers
- Environment variables for API keys
- No database connection
- No auth system

When to choose:
- Contact/quote forms that need spam filtering and controlled email delivery via Resend/SendGrid
- Payment flows that need server-side Stripe session creation before redirecting to Stripe hosted checkout
- Webhook receivers for payment events (Stripe `payment_intent.succeeded` etc.)
- Secure third-party API calls that require private keys

What this explicitly is NOT:
- A full backend
- A database
- An auth system
- An admin dashboard

---

**Model D — Minimal Supabase Backend**

Profile:
- The site needs real persistence
- Structured/relational data is useful (leads table, bookings table, etc.)
- There may be a lightweight protected area (simple admin view of leads, or a client-facing portal)
- The agency is comfortable maintaining a Postgres database in Supabase
- The project scope genuinely justifies the added complexity

When to choose:
- Sites with meaningful lead/quote volume that the agency wants to review in a dashboard
- Sites with a real client portal or gated resource area
- Sites where booking history or client records have genuine business value
- Sites where the structured data model makes future reporting or integrations significantly easier

When NOT to choose:
- Forms that just need to send emails — Resend + API route is enough
- Booking systems that can use Calendly — Supabase adds nothing
- Any site where "we might need a database later" is the justification

---

**Model E — Minimal Firebase Backend**

Profile:
- The project benefits from document-style data, managed serverless functions, or lightweight auth
- Real-time-ish behavior or event-driven patterns are useful
- The agency prefers Firebase's ecosystem
- The project remains modest in complexity

When to choose:
- Sites with light auth/gated functionality where Firebase Auth is the simplest path
- Projects where the agency already uses Firebase and additional infrastructure would be wasteful
- Light serverless workflow logic that fits Firebase Cloud Functions naturally
- Simple content update flows (e.g., a managed FAQ or announcements board)

When NOT to choose:
- When Supabase's structured/relational model would be cleaner
- When the project scope does not justify any persistent backend at all
- When "Firebase is familiar" is the only reason

---

**Model F — Hybrid**

Profile:
- The site is mostly frontend/static
- One or two features need a small custom API layer
- Possibly also one hosted tool integration
- No full database needed

This is often the most accurate answer for real-world business websites.

Example:
- The site uses Calendly for booking (hosted)
- The contact form routes through a custom `app/api/contact/route.ts` with Resend (light custom)
- All other pages are fully static
- Result: Model F = hosted tool + one serverless route

Hard rule: A hybrid should stay simple. If the custom part keeps growing, reconsider whether Model D or E is more honest.

---

## Part 3: Feature-by-Feature Backend Evaluation

**Forms:**

Evaluate: What does the form actually do with submissions?

- If it just sends an email notification to the agency → Resend or SendGrid via one API route. No database.
- If it also needs the agency to review/manage submissions later → Consider lightweight storage (Supabase table) or a hosted leads tool (Airtable, Notion form integration, etc.)
- If it needs spam filtering → API route with honeypot field or Turnstile/hCaptcha integration
- If the client needs to see leads in real time → Consider whether a CRM integration (HubSpot free tier, Pipedrive, etc.) serves this better than custom storage

Hard questions:
- Does anyone actually need to retrieve submissions beyond reading email?
- Is the form volume high enough to justify storage overhead?
- Would forwarding to email + a spreadsheet (via Zapier) be simpler and more reliable?

**Booking:**

Evaluate: What does the booking flow actually require?

- Simple appointment booking → Calendly, Cal.com, Square Appointments, Acuity. These are complete hosted solutions. No backend needed.
- Booking with deposit → Stripe payment link or Calendly paid bookings. No custom backend needed.
- Booking with custom availability logic, team assignment, or complex business rules → Potentially custom backend, but confirm this complexity is genuinely required vs. a hosted tool that handles it.

Hard rule: Do not build a booking system when Calendly exists.

**Payments:**

Evaluate: What kind of payment is this?

- Fixed-price service payment → Stripe payment link. No backend needed.
- Package/product checkout → Stripe hosted checkout. Needs server-side session creation (one API route). No database.
- Deposit on quote → Stripe payment link or Stripe hosted checkout after quote. One API route.
- Subscription → Stripe Billing. Needs webhook handling + some state. Consider whether this is genuinely in scope.
- Full ecommerce → Out of scope for this system unless explicitly confirmed.

Hard rule: For most local service businesses, payment means "pay a deposit" or "pay an invoice." This requires one Stripe API route and one webhook handler — not an ecommerce platform.

**Chat:**

Evaluate: What does the business actually need from chat?

- Live chat support → Intercom, Crisp, Tidio, or Tawk.to. Embedded widget. Zero backend.
- Basic contact routing → A chat widget with routing to email or SMS. Zero backend.
- Custom chat with stored message history → Genuinely complex. Only justify if explicitly confirmed as a real requirement.

Hard rule: Chat almost never justifies custom backend on a business marketing site.

**CMS:**

Evaluate: Who needs to edit content and how often?

- Agency edits code directly → No CMS. Config/data files.
- Agency wants non-code editing for some content → Sanity (free tier), Contentful, or similar. Headless CMS, no custom backend.
- Client wants self-serve editing → Headless CMS confirmed in scope. Define the content types only.
- Client needs to manage leads, bookings, and content → Now the scope is genuinely larger. Define what the CMS actually covers.

Hard rule: CMS is a separate architectural decision. If a CMS is confirmed, define its content types and integration approach. Do not build a custom CMS.

**Gated Access / Membership:**

Evaluate: Is there a real protected area in the confirmed scope?

- Client portal with specific data → Auth + protected routes + some data layer. Define scope carefully.
- Simple password-protected page → Next.js middleware with env-variable password. No auth system.
- Member resource library → Auth system (Clerk, NextAuth, Supabase Auth) + protected routes.

Hard rule: Do not add an auth system unless there is a real, confirmed protected area with specific user-facing behavior that requires it.

---

## Part 4: The "No Backend" Test

Run this test before finalizing any recommendation that includes backend infrastructure.

Ask each question. If the answer is no, reconsider whether backend is truly needed.

1. Can the form submission be handled entirely by a hosted service (Formspree, Resend, Netlify Forms)?
2. Can the booking flow be handled by Calendly, Cal.com, or an equivalent?
3. Can the payment be a Stripe payment link or hosted checkout session?
4. Does anyone need to retrieve stored records beyond reading email notifications?
5. Does any page show content that changes based on database state?
6. Does any user-facing interaction require authentication?
7. Is there a server-side secret that cannot be kept in an environment variable in a single API route?

If the answers are mostly "no" or "handled by hosted tool," the right model is A, B, or F.

---

## Part 5: Hard Calls — What to Say No To

These are patterns that frequently appear in project scopes but rarely justify the complexity they add.

**"We should store all the leads in a database."**
Why it sounds reasonable: the agency wants to review submissions.
Why it often is not: email + a forwarded-to spreadsheet (Zapier to Airtable/Google Sheets) handles this better for most agencies than a custom Supabase table they need to maintain and secure.
Hard call: Ask whether the agency realistically needs row-level database access to leads, or whether they just need the submissions to arrive reliably. If the latter, hosted form routing wins.

**"We might need to scale this later."**
Why it sounds reasonable: future-proofing seems responsible.
Why it is not: the backend should serve the site that is being built now, not a hypothetical future product. Premature scalability adds complexity that the current project does not need and the agency may never be able to maintain.
Hard call: Build for now. Good architecture can be extended; bad architecture that was "future-proof" is harder to understand and maintain.

**"We should build our own booking system."**
Why it sounds reasonable: full control, custom branding, no third-party fees.
Why it is not: booking systems are complex (availability, conflict handling, reminders, calendar sync, rescheduling). Calendly et al. have solved this problem. Custom booking logic is weeks of work and ongoing maintenance.
Hard call: Use a hosted booking tool unless there is a very specific unmet need that no hosted tool supports.

**"We should add a CMS so the client can edit the site."**
Why it sounds reasonable: client empowerment seems like a product improvement.
Why it often is not: the PRD specifies that the agency edits the site. Most clients who "want to edit" actually want to change prices, hours, and service descriptions occasionally — which can be handled by a shared data file the agency controls or a lightweight headless CMS integration.
Hard call: CMS is a scope increase. If the upstream planning confirmed it, define it. If it was not confirmed, flag it as out of scope.
