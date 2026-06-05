# Booking & Payments Strategy Rules

This file defines how to read upstream inputs, classify the business into the correct flow type, compute the feature verdict, and determine what should and should not exist in the booking/payment layer.

---

## Part 1: Reading Upstream Inputs

Before making any decision, extract these four things from the upstream package:

**1. Service scope type**
Is the service fixed, semi-fixed, variable, or mixed?
- Source: `01-discovery` (services listed, pricing structure, inspection requirements)
- Expressed as: "This business sells [time-slots / jobs / consultations / packages / relationships]."

**2. Price predictability**
Can the customer know the price before contacting or committing?
- Source: `01-discovery` (pricing model, quote process, change-order frequency)
- This is the single most important factor in the booking/payment decision

**3. Urgency dimension**
Does this business respond to urgent or emergency contact needs?
- Source: `01-discovery` (emergency services, same-day availability, urgent request patterns)
- If yes, phone CTA always outranks booking CTA on mobile

**4. Operational fit**
Can the business actually honor what the website would offer?
- Source: `01-discovery` (staff count, calendar management, current booking process)
- If the business can't manage a live calendar, don't promise one

If any of these four cannot be answered from upstream inputs, flag it in Section 14 and state your assumption. Default to the most conservative flow type when uncertain.

---

## Part 2: Flow Type Classification

Every business maps to exactly one primary flow type. Mixed-scope businesses may have service-level overrides (see Part 3).

### Type A — Direct Appointment Business

**Fits when:**
- Service is time-slot based with predictable duration
- Price is fixed or semi-fixed and knowable upfront
- Customers expect self-serve scheduling
- Staff/resource capacity can be honestly represented in a calendar
- No inspection or triage required before booking

**Common business types:**
Salons, med spas, massage studios, fitness classes, tutors, photographers, simple consultations, personal training, wellness practitioners, nail studios, barbershops, yoga studios

**Typical verdict:**
- Booking: YES
- Payment: CONDITIONAL (if offer is standardized and trust is strong)
- Deposit: CONDITIONAL (if no-show cost is real)

---

### Type B — Request-First Service Business

**Fits when:**
- Job scope varies — price depends on what they find when they get there
- Time on-site is not reliably predictable
- Emergency or urgent response matters as much as scheduling
- Staff availability isn't managed by neat time slots
- A bad booking would require manual correction and damage trust

**Common business types:**
Plumbers, electricians, HVAC techs, roofers, movers, painters, landscapers, cleaners (custom scope), general contractors, pest control, window/gutter services, repair services

**Typical verdict:**
- Booking: NO for variable jobs — request-first only
- Booking: LIMITED (consultation-slot only, for certain scoping calls)
- Payment: NO at website — payment link sent post-qualification
- Deposit: CONDITIONAL after scope confirmation only

---

### Type C — Consultation-Led Business

**Fits when:**
- The first step is a discovery call, intake, or consultation — not a service delivery
- The business qualifies before selling
- The real sale happens after the consultation
- Service is customized or high-ticket

**Common business types:**
Agencies, consultants, coaches, financial advisors, renovation/design consultants, legal services (where permitted), high-ticket B2B services, custom service providers

**Typical verdict:**
- Booking: YES for consultation slot only — full service booking is premature
- Payment: CONDITIONAL for paid consultation fee only
- Deposit: Rarely at consultation stage — consider only for high-demand paid consults

---

### Type D — Payment / Light Checkout Business

**Fits when:**
- Offer is standardized with a known name, deliverable, and price
- Customer can complete purchase without speaking to anyone
- No inspection, triage, or qualification needed
- Online payment is expected by the customer

**Common business types:**
Fixed service packages, workshops, events, classes, memberships, gift cards, simple digital or local fixed bundles

**Typical verdict:**
- Booking: NO or separate from payment
- Payment: YES — hosted checkout
- Deposit: Unnecessary if full payment is standard

---

### Type E — Contact-First Only

**Fits when:**
- Trust and conversation must come before any commitment
- No structured appointment or transaction flow exists
- Booking or payment would add clutter without improving conversion
- The website's job is to generate a call or message — that IS the conversion

**Common business types:**
High-trust professional services, relationship-led businesses, businesses with no operational capacity for self-serve scheduling, businesses where every engagement is bespoke

**Typical verdict:**
- Booking: NO
- Payment: NO
- Deposit: NO
- Strong contact → phone, email, or simple form only

---

## Part 3: Mixed-Scope Service Routing

When a business offers both fixed-scope and variable-scope services, do NOT create one unified booking/payment flow. Route by service type.

**Rule:** Each service line must be classified independently. The website must route users to the correct flow at the service-selection step.

**Example routing logic:**
```
Service A (fixed price, fixed duration) → Type A flow → Book Appointment
Service B (variable scope, quote required) → Type B flow → Request Estimate
Service C (first step is discovery) → Type C flow → Book Consultation
```

**Implementation note:** The service selection step on the homepage or services page is the routing decision point. CTAs per service must reflect the correct flow type — not a single global "Book Now" that misrepresents some services.

---

## Part 4: Verdict Decision Tree

```
STEP 1: Is the service scope predictable enough to book without speaking first?
  NO  → Type B or E. Stop. Do not add direct booking.
  YES → Continue to Step 2.

STEP 2: Is the price knowable before the customer commits?
  NO  → Type B or C. No direct booking or upfront payment.
  YES → Continue to Step 3.

STEP 3: Does the customer need qualification or discovery first?
  YES → Type C. Booking applies to consultation only.
  NO  → Continue to Step 4.

STEP 4: Is the offer standardized enough for unassisted online payment?
  NO  → Type A. Book now, pay at service or via invoice later.
  YES → Continue to Step 5.

STEP 5: Is immediate payment expected by the customer or operationally required?
  NO  → Type A. Booking with optional deposit only.
  YES → Type D. Book + pay or pay-only checkout.
```

---

## Part 5: Deposit Logic

### When deposits are justified

Deposits earn their friction cost when at least one of these is true:
- The business incurs a real measurable cost if the appointment is missed (travel, blocked slot, prep labor)
- The service is high-demand and slot scarcity is real
- The deposit amount is proportional and reasonable
- The refund/credit policy is clear and fair
- The deposit is applied to the final invoice (feels like a down-payment, not a fee)

### When deposits backfire

```
Do NOT use deposits when:
  - Trust has not yet been established (new business, low reviews)
  - Service scope is still unknown (never deposit before quoting)
  - The audience is price-sensitive or skeptical
  - The deposit is a large % of a low-cost service
  - There is no clear refund policy
  - The business hasn't confirmed it can process and manage deposits operationally
```

### No-show risk → deposit decision

```
no_show_risk == "significant"  → deposit YES for booked appointments with real hold cost
no_show_risk == "mild"         → deposit CONDITIONAL — only for services above value threshold
no_show_risk == "not really"   → deposit NO — friction not worth it
no_show_risk == "unknown"      → deposit CONSERVATIVE — do not require at initial booking
                                  revisit after 60 days of live operations
```

---

## Part 6: Payment Logic

### Payment category separation

Always identify which payment category applies. Do not lump them together.

| Category | When | Tool |
|---|---|---|
| Deposit | At booking (post trust-establishment) | Stripe Checkout, Square |
| Consultation fee | At consultation booking | Stripe Checkout, Calendly+Stripe |
| Invoice payment | Post-qualification, sent by business | Stripe Payment Link |
| Fixed-package checkout | Customer self-initiates, scope known | Stripe Checkout, Square |
| Subscription/membership | Recurring signup | Stripe Billing — flag to 09 |

### Public vs. post-qualification

```
PUBLIC payment page (self-serve):
  Use when scope is fixed, price is known, no qualification needed

POST-QUALIFICATION only (business sends link):
  Use when scope was customized, price was negotiated, or customer hasn't spoken with business

DEFAULT for local service businesses:
  Most should NOT have a public payment page.
  Payment happens after scope is confirmed — via a link sent directly.
  Do not build a public checkout for businesses that quote before selling.
```

---

## Part 7: CTA Vocabulary

CTA wording must match the real commitment level. Never use generic language that misrepresents what the action does.

### Correct CTA vocabulary by flow type

```
Type A — Direct Appointment:
  Primary:   "Book [Service Name]" / "Reserve Your Appointment" / "Book a [Service]"
  Secondary: "Call Us" / "Ask a Question"
  Avoid:     "Get Started", "Book Now" (too vague), "Schedule" (too corporate), "Submit"

Type B — Request-First:
  Primary:   "Request Service" / "Request Estimate" / "Get a Free Quote"
  Secondary: "Call Now" (especially urgent services — phone should often be primary)
  Avoid:     "Book Now", "Schedule Appointment", "Pay Now", "Reserve"

Type C — Consultation-Led:
  Primary:   "Book a Free Consultation" / "Schedule Intro Call" / "Book a [Paid] Call"
  Secondary: "Learn How It Works" / "See the Process"
  Avoid:     "Get Started", "Sign Up", "Book Now", "Continue"

Type D — Payment / Checkout:
  Primary:   "Purchase [Package Name]" / "Reserve Your Spot" / "Get [Offer Name]"
  Secondary: "See What's Included" / "Have a Question First?"
  Avoid:     "Add to Cart", "Checkout", "Buy Now" (too ecommerce-generic)

Type E — Contact Only:
  Primary:   "Call Now" / "Send Us a Message" / "Get in Touch"
  Secondary: Phone number visible, email, directions
```

### Weak CTA patterns — always replace

| Weak | Replace With |
|---|---|
| "Get Started" | "Request [Service]" or "Book [Service]" |
| "Book Now" (for request-first business) | "Request Service" |
| "Submit" | "Confirm Booking" or "Send Request" |
| "Continue" | Describe what continues |
| "Pay Now" (scope undefined) | Remove entirely — add payment post-qualification |
| "Schedule" (generic) | "Book a [Specific Service]" |

---

## Part 8: Upstream Critique Checklist

Run this before producing any recommendation. Flag everything that is wrong or vague.

```
From 02-planning:
  [ ] Does the primary CTA say "Book Now" for a variable-scope business? FLAG.
  [ ] Is "pay online" listed as a goal without confirmed fixed scope? FLAG.
  [ ] Is there a consultation-led business with a direct service booking CTA? FLAG.

From 04-wireframe:
  [ ] Does the wireframe show a calendar widget without real availability confirmed? FLAG.
  [ ] Does booking/payment appear before trust content for a high-barrier business? FLAG.
  [ ] Does one form try to handle quote request + booking + payment? FLAG.

From 05-brand-direction:
  [ ] Does an authoritative register have a pushy checkout CTA? FLAG mismatch.
  [ ] Does an approachable brand have cold transactional copy? FLAG mismatch.

From 01-discovery:
  [ ] Is service scope clearly classified? If not, default to Type B.
  [ ] Is no-show risk mentioned? If not, default deposit logic to conservative.
  [ ] Does the business have an urgency/emergency dimension? If yes, phone CTA must lead on mobile.
  [ ] Does an existing booking/payment system already exist? If yes, integration path changes.
```
