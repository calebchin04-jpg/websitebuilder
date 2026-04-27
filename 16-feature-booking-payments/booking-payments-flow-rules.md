# Booking & Payments Flow Rules

This file defines the complete specification for each flow type — what the user path looks like, what forms are required, how deposits and payments integrate, how confirmation works, what the mobile experience must be, and what anti-patterns must be avoided.

---

## Flow Type A — Direct Appointment

### User Path
```
1. Visitor sees service + price (or clear price range)
2. Visitor taps primary CTA: "Book [Service Name]"
3. Service selection (if multiple services — pre-selected if routed from service page)
4. Date + time selection (real availability only)
5. Contact details: name, phone, email, optional notes
6. Deposit step (if deposit_enabled == true)
7. Confirmation screen + confirmation email/SMS
8. Automated reminder before appointment
```

### What Can Be Booked
- Fixed-duration services with a predictable time requirement
- Services with a price known upfront (fixed or published range)
- Services the business can reliably schedule without manual review
- Consultation calls with defined duration (when type A, not C)

### What Must NOT Be Booked
- Services requiring inspection before scope can be defined
- Services where time on-site varies unpredictably
- Emergency response situations — phone must lead
- Services where pricing depends on what the technician finds

### Date/Time Selection Rules
- Show only real available slots — connect to live calendar or manually managed availability
- Do NOT show a dense monthly calendar on mobile — use week view or scrollable day list
- If real availability cannot be shown dynamically, use "Preferred date" + "Preferred time of day" dropdowns and flag confirmation as pending (not auto-confirmed)
- Never show greyed-out times without explanation
- Show timezone clearly if the business serves multiple regions

### Form Fields (Type A)
```
Required:
  - Service (if not pre-selected via routing)
  - Preferred date (or slot selection from live calendar)
  - Preferred time (or slot selection from live calendar)
  - First name + last name (or full name)
  - Phone number
  - Email address

Optional:
  - Notes / special requests (1 open field, not prominent)
  - Address (only if service is location-based)

Never include:
  - Account creation
  - How did you hear about us
  - Detailed intake questions (wrong stage)
  - Multiple service add-ons in the booking form
```

### Confirmation Logic
```
Auto-confirm (use when):
  - Real-time availability is connected
  - The business can honor the slot without manual review
  - Screen copy: "Your appointment is confirmed for [Day, Date] at [Time]."

Pending confirm (use when):
  - Availability is managed manually or semi-manually
  - Human review before confirming is standard
  - Screen copy: "We've received your request. We'll confirm within [timeframe]."
  - Email copy: "request received" — NEVER say "booking confirmed" for a pending request
```

### Cancellation / Rescheduling
- Define the policy on the booking confirmation screen — not buried in terms
- If deposit held: state clearly what happens on cancellation
- Rescheduling path: phone, email, or link (specify which) — do not build self-serve portal unless 09 confirms capacity
- Minimum required: policy visible on confirmation screen and confirmation email

---

## Flow Type B — Request-First

### User Path
```
1. Visitor describes their situation
2. Visitor selects service type + submits details + contact info + urgency
3. Business reviews and responds (call, text, or email)
4. Scope and price confirmed in conversation
5. If deposit warranted: business sends deposit payment link
6. Job scheduled
7. Work performed
8. Final invoice sent and paid via payment link — NOT via website checkout
```

### Critical Distinction
This is NOT booking. The visitor is requesting help. Do not show a calendar. Do not show a payment step. Do not say "booking confirmed." The form is a service request, not a reservation.

### Form Fields (Type B) — owned by 12-feature-forms, specified here
```
Required:
  - Service type (dropdown or visual selector — routes to correct internal handling)
  - Brief description of the issue or request
  - Address / location (required for home services)
  - Name
  - Phone number
  - Urgency: Emergency (same day) / Urgent (this week) / Flexible / Not sure

Optional:
  - Email
  - Photos (if the platform supports attachment — flag to 09 if needed)
  - Preferred contact method

Never include:
  - Date/time slot selector
  - Pricing selector
  - Payment step
  - Account creation
```

### Emergency CTA Rules
If the business has any emergency or urgent service dimension:
- "Emergency? Call [Number]" must be visible on every page — above the header or as a persistent banner
- On mobile, "Call Now" is the primary CTA — it must outrank the request form CTA
- Never hide the phone number behind a calendar or form for urgent businesses

### Deposit in Type B
- NEVER collect a deposit through the website at the request stage
- Deposit is only appropriate after scope is confirmed (via phone or site visit)
- Business sends a Stripe Payment Link post-qualification — the website is not involved
- If the business wants a deposit collection page, it is a private link — not a public page

---

## Flow Type C — Consultation-Led

### User Path
```
1. Visitor reads about services and qualifies themselves
2. Visitor taps: "Book a Free Consultation" or "Schedule Intro Call"
3. Simple scheduling: select date + time from available slots
4. Brief form: name, email, phone, optional context question
5. Payment step (only if consultation is paid)
6. Confirmation + calendar invite
7. Consultation happens
8. If qualified: full service proposal and payment follow outside the website
```

### What Gets Booked
- Only the consultation/intro call — not the full service
- Duration must be defined (30 min / 45 min / 60 min) and shown to the visitor before they book
- The consultation booking is low-commitment — it is a conversation, not a purchase

### Form Fields (Type C)
```
Required:
  - Name
  - Email
  - Phone
  - Date + time slot selection

Optional (1 field max):
  - "What would you like to discuss?" — open field, not required
  - Do NOT make this a full intake form

Never include:
  - Detailed scope questions (that's what the consultation is for)
  - Pricing discussion
  - Account creation
  - Multiple service selections
```

### Paid Consultation Rules
If the consultation has a fee:
- Show the fee clearly before the calendar step — do not reveal price at payment
- Payment step comes after date/time selection and contact info
- State what the fee includes (duration, deliverable, whether it applies to future work)
- Trust copy required: "This fee reserves your consultation slot. It will be credited toward your project if we move forward."
- Refund policy must appear before payment

---

## Flow Type D — Payment / Checkout

### User Path
```
1. Visitor sees package: name, deliverable, and price clearly shown
2. Visitor taps: "Purchase [Package Name]" or "Reserve Your Spot"
3. Brief summary: confirm what they are buying
4. Payment step: hosted checkout (Stripe, Square, etc.)
5. Confirmation screen + receipt
6. Fulfillment begins per stated process
```

### What Must Be True Before Offering Checkout
- Price is fixed and shown before the payment step
- Deliverable is clearly described
- No inspection or qualification required
- Refund policy is clear and stated before payment
- The business can reliably fulfill what is being sold

### Payment Step Rules
- Use hosted checkout only — Stripe Checkout, Square, etc.
- Never build a custom card input field
- Never collect card details in a native HTML form
- Total amount must be visible on the payment button: "Pay $[Amount]"
- Secure checkout indicator required (Stripe branding or lock icon)
- Refund/cancellation policy visible before the payment button
- Contact info for questions visible on the checkout page

---

## Flow Type E — Contact Only

### What This Means
No booking widget. No calendar. No checkout. No deposit.

The website generates calls and messages. That is the complete conversion flow.

### What Must Be Prominent
- Phone number: large, visible, in the header and hero
- "Call Now" tel: link — primary CTA on mobile
- Simple contact/request form (owned by 12-feature-forms)
- Response time expectation: "We respond within [timeframe]"

### What Must Not Appear
- Any calendar or scheduling widget
- Any payment or deposit UI
- "Book Now" CTA of any kind
- Checkout flows

---

## Placement Rules by Flow Type

### Sticky Header
```
Type A: "Book [Service]" right-aligned — persistent
Type B: "Request Service" right-aligned + phone number visible
Type C: "Book Consultation" right-aligned
Type D: "See Packages" right-aligned
Type E: Phone number always visible — no booking CTA
```

### Hero CTA
```
Type A: Primary — "Book [Service]" | Secondary — "Call With Questions"
Type B: Primary — "Request [Service/Estimate]" | Secondary — "Call Now"
         If emergency: "Emergency? Call [Number]" as banner above hero
Type C: Primary — "Book a Free Consultation" | Secondary — "See How It Works"
Type D: Primary — "See Packages" → pricing/checkout | Secondary — "Ask a Question"
Type E: Primary — "Call Now" (tel: link) | Secondary — "Send a Message"
```

### Service Pages
```
Type A: Per-service booking button → pre-selects that service in booking flow
Type B: Per-service request button → pre-selects that service in request form
Type C: "Book a consultation about [this service]" → links to consultation booking
Type D: "Purchase [Package]" → routes to checkout for that specific package
Type E: "Call to discuss [service]" → tel: link
```

### Contact / Booking Page
```
Type A: /book — full appointment booking flow
Type B: /contact — service request form (12-feature-forms owns this)
Type C: /consultation — consultation booking flow
Type D: /packages — pricing + checkout per package
Type E: /contact — phone + simple message form
```

### Mobile-Specific Rules
```
Type A: Floating bottom bar — "Book Now" + "Call" side by side. "Call" smaller.
Type B: "Call Now" is primary tap target. "Request Service" secondary.
         For urgent services, "Call Now" must be the dominant mobile action.
Type C: Full-width "Book Consultation" below hero — no floating bar needed.
Type D: Full-width "Purchase [Package]" on pricing page — price visible above button.
Type E: "Call Now" full-width bottom tap target — tel: link, large touch area.

Universal mobile rules:
  - Tap target minimum: 44×44px on all booking/payment actions
  - Phone CTA always uses tel: link — never a form for urgent contact
  - Date/time pickers must be mobile-native or scrollable week view — no dense desktop calendars
  - Form fields: 4–5 maximum — never more on a mobile booking form
  - Payment must use hosted checkout — never a native card form on mobile
```

---

## Confirmation / Next-Step Messaging Rules

### What every confirmation must include
- What was just submitted / confirmed
- Whether it is a request (pending) or a confirmed booking
- When they will hear back (stated timeframe, not "soon")
- Contact details for questions (phone or email)
- What to do if they need to cancel or reschedule

### Auto-confirmed booking
```
Screen: "Your appointment is confirmed. See you [Day, Date] at [Time]."
Details: Address, what to bring/expect, cancellation instructions
Email:   Sent immediately. Calendar invite attachment recommended.
```

### Pending request
```
Screen: "We've received your request. [Business name] will confirm
         within [timeframe]. You'll get a text and email."
Email:   "Request received" — never "booking confirmed"
Follow-up: Business confirms within stated window
```

### Post-payment
```
Screen: "Payment received. You're all set for [Date/Time] / [Package Name]."
Receipt: Via Stripe email or custom confirmation
Next step: State explicitly — "We'll send you a reminder 24 hours before."
```

---

## Anti-Pattern Reference

| Anti-pattern | Why it fails | Fix |
|---|---|---|
| Calendar widget for Type B businesses | Visitor "books" before anyone has seen the job. Scope, price, and timing are all unknown. | Remove calendar. Use request form with urgency selector. |
| Fake live calendar (no real availability) | Visitor picks a slot that doesn't exist or is taken. First interaction collapses trust. | Use "Preferred date/time" dropdowns and pending confirmation until real availability is connected. |
| Deposit before scope is confirmed | Customer pays before understanding what they're committing to. Disputes, chargebacks, trust damage. | Deposit only post-qualification. Business sends payment link. |
| "Book Now" for a variable-scope service | Misrepresents what the action does. Business must call to triage every "booking." | Use "Request Service" or "Request Estimate." |
| Single form for quote + booking + payment | Visitor can't tell what they're doing. Form handles three different intents badly. | Separate flows. Route by service type at the service-selection step. |
| Payment page for unconfirmed scope | Customer pays before the business knows what the job entails. Common source of chargebacks. | Payment only after scope is confirmed and quote is accepted. |
| Deposit with no visible refund policy | Visitor fears losing money. Abandons at deposit step even after completing booking. | Refund policy must appear above the payment button, every time. |
| No phone fallback for urgent businesses | Tool breaks, calendar errors, mobile UX fails. Urgent customer has no path to reach the business. | Always show phone number alongside any booking widget. |
| "Get Started" as CTA | Generic. Tells the visitor nothing about what happens next. | Replace with the actual action: "Book [Service]," "Request Estimate," "Schedule Intro Call." |
| Custom card input form | Security liability. Does not handle card errors properly. Poor mobile UX. | Always use hosted checkout: Stripe Checkout, Square, Calendly+Stripe. |
| Account creation required | Adds friction at the highest-intent moment. Most visitors abandon. | Never require account creation for booking or payment. |
| Ecommerce language (cart, order, checkout) | Feels wrong for service businesses. Reads as transactional rather than trustworthy. | Use service-context language: "Confirm Booking," "Reserve Your Spot," "Pay Invoice." |
