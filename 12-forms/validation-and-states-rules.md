# Validation and States Rules

## Validation Behavior

Validation should be clear, lightweight, helpful, specific, and non-punitive.

### When to validate

| Trigger | Behavior |
|---|---|
| On blur (field loses focus) | Validate required fields and format fields (email, phone) |
| On submit | Validate all required fields regardless of touch state |
| On file select | Validate file type, size, and count immediately |
| On change | Do not validate — too aggressive, interrupts typing |

Never show errors on fields the user has not yet touched before they attempt to submit.

### What to validate

**Required fields:** Must not be empty / must have a non-placeholder selection.

**Email:** Valid email format. Do not over-validate (reject + symbols, subdomains, etc.).

**Phone:** Minimum 10 digits. Accept all common US formats: `(503) 555-0100`, `503-555-0100`, `5035550100`. Do not enforce a specific format — just ensure enough digits exist.

**Select / dropdown:** Must not have the default placeholder option selected.

**Textarea (optional):** No validation unless a minimum length is specified for business reasons.

**File upload:** Validate type, size per file, and file count on selection. Do not wait for submit.

**Honeypot:** Server-side only. Must be empty. Never surface to user.

---

## Error State Rules

### Inline field errors

- Appear directly below the relevant field
- Left-aligned
- Small text (one step below body text)
- Red color using the design system error token
- Associated to the field via `aria-describedby`
- Field border turns red on error
- Error clears when the user corrects the input

### Error copy standards

Error messages must:
- State what is wrong
- Imply how to fix it
- Sound like a person wrote them, not a validator

| Field | Correct | Wrong |
|---|---|---|
| Name | "Please enter your name" | "Name is required" |
| Phone | "Please enter a valid phone number" | "Invalid format" |
| Email | "Please enter a valid email address" | "Email field error" |
| Project type | "Please select a project type" | "Selection required" |
| File count | "You can attach up to 3 photos" | "Max files exceeded" |
| File size | "Each photo must be under 10MB" | "File too large" |
| File type | "Please use JPEG, PNG, or HEIC files" | "Unsupported format" |

### Global / server error

When the form submission fails at the server level:

- Show an inline alert above the form fields
- Use a clearly visible but non-alarming style (soft error background, error border)
- Include a direct fallback action (phone number as tap-to-call)
- Never expose technical error details
- Never clear the form — let the user try again
- Example: "There was a problem submitting your request. Please call us directly at [phone]."

### What not to do

- Do not show errors before the user has interacted with a field
- Do not show errors on every keystroke
- Do not use modal popups for field-level errors
- Do not use generic error messages that don't explain what to fix
- Do not prevent form resubmission after a server error

---

## Success State Rules

### Post-submit behavior

Two valid patterns:

**1. Redirect to a thank-you page**
- Cleaner separation of states
- Easier conversion tracking (URL-based)
- Better for analytics and retargeting pixel fires
- Preferred when the business has a defined follow-up message to deliver

**2. Inline success state**
- Form is replaced in-place with a confirmation message
- No page change — lower cognitive load
- Suitable for forms embedded within a larger page where navigation away is disruptive
- Harder to track conversions via URL alone

Use redirect when the form is the primary action on a dedicated page.
Use inline when the form is embedded within a content-heavy page.

### Thank-you page requirements

The thank-you page must:
- Confirm receipt clearly (not just "success")
- Set a response time expectation ("we'll be in touch within 24 hours")
- Offer a direct fallback contact (phone number, email)
- Give the user a clear next step (return home, view portfolio, call now)

The thank-you page must NOT:
- Be indexed by search engines (`noindex`)
- Be a dead end with no outbound navigation
- Be vague about what happens next
- Trigger another form

### Inline success state requirements

The inline success state must:
- Replace the entire form (not just show a banner above it)
- Confirm what was submitted (a check mark + brief confirmation copy)
- Set a response time expectation
- Offer a direct fallback contact
- Match the visual style of the surrounding page

---

## Trust and Privacy Rules

### Required near every form

- **Privacy reassurance** below the submit button: "We never share your information. No spam." or equivalent. Short, specific, not legal.

### Required only when uploads are present

- **Upload reassurance** near the file input: "Your photos are only shared with [who]. Never stored publicly." or equivalent.

### Add when genuinely useful

- Response time expectation ("We respond within 24 hours")
- Specific trust signal near the form (a real customer quote, star rating, or badge)
- Local credibility marker (service area, years in business) if it reduces geographic hesitation

### Do not add

- SSL / security lock icons — implied by HTTPS, not needed for this audience
- Legal consent checkboxes unless required by law (GDPR, CCPA) — confirm with `09` if applicable
- Generic "we value your privacy" filler without specific reassurance
- Fake urgency or scarcity near forms ("Only 3 spots left")
- Review counts if they're already displayed elsewhere on the page
- Long privacy policy text inline — link to it instead

### Consent language

For most US service businesses: a privacy policy link in the footer is sufficient. No inline consent checkbox required unless the business:
- Is in a regulated industry (healthcare, finance, legal)
- Explicitly markets to EU/UK users (GDPR)
- Has been advised by counsel to add consent capture

If consent is required, keep the checkbox label concise:
> "I agree to the [Privacy Policy](link) and consent to being contacted about my request."
