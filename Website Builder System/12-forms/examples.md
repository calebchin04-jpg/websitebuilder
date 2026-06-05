# Examples

---

## Example 1 — Peak Ridge Remodeling (Local Home Services)

**Business:** Peak Ridge Remodeling — Portland, OR. Kitchen, bathroom, and basement remodeling. High-ticket ($12k–$80k+), local service area, in-home estimate as next step.

**Questions asked:**
1. Form placement → Contact page only
2. Qualification depth → Keep lean (no budget/timeline)
3. Success state → Redirect to /thank-you
4. Photo upload → Optional (1–3 photos)

---

### 1. Form Strategy Summary

The form converts a Portland homeowner researching a remodel into a booked in-home estimate visit. Peak Ridge sells high-trust, high-ticket services — the form is a handoff, not the sale. The correct strategy is light qualification + high trust. Collect enough to make the follow-up call useful (who, how to reach them, what kind of project), then stop. The in-home estimate visit handles real qualification. Over-qualifying on the form hurts completion without improving lead quality for this business type.

The addition of optional photo upload is appropriate: it lets motivated leads share context without gating completion, and gives the estimator useful preparation before the visit.

---

### 2. Form Type Recommendation

**Consultation request form — single step.**

The business has a defined next step (free in-home estimate), a clear service area, and a known service set. There is nothing to route or qualify beyond project type. Multi-step would add friction without adding value.

---

### 3. Field List

| Field | Type | Required | Notes |
|---|---|---|---|
| Your Name | Text | Yes | `autocomplete="name"` |
| Phone Number | Tel | Yes | `autocomplete="tel"`, primary contact method |
| Email Address | Email | Yes | `autocomplete="email"`, reply-to on notification |
| Project Type | Select | Yes | Kitchen / Bathroom / Basement / Multiple / Not Sure Yet |
| Brief Project Description | Textarea | No | Labeled optional |
| Photos (up to 3) | File | No | JPEG/PNG/HEIC/WebP, max 10MB each |
| Honeypot | Hidden text | — | Bot protection |

---

### 4. Field Hierarchy / Order

1. Name — establishes the person first, lowest friction
2. Phone + Email — side by side on desktop, stacked on mobile; both required
3. Project Type — first qualifier, single dropdown
4. Project Description — optional textarea, placed late so it doesn't block completion
5. Photo Upload — optional, placed last after commitment is established
6. Submit + privacy note

Contact first → qualifier second → enrichment last. This maximizes completion of required fields and frames optional fields as bonuses.

---

### 5. Step Logic

Not applicable. Single-step form.

---

### 6. Conditional Logic

Not applicable. The service dropdown does not produce different field sets that would justify conditional logic.

---

### 7. Validation Rules

- **Name:** Required, min 2 chars. Validate on blur and submit.
- **Phone:** Required, min 10 digits. Accept any common US format. Validate on blur and submit.
- **Email:** Required, valid email format. Validate on blur and submit.
- **Project Type:** Required, must not be default placeholder. Validate on submit only.
- **Message:** Optional, no validation.
- **Photos:** Optional. Validate on file select: max 3 files, accepted types JPEG/PNG/HEIC/WebP, max 10MB per file.
- **Honeypot:** Server-side only.

---

### 8. Error States

| Field | Error copy |
|---|---|
| Name | "Please enter your name" |
| Phone | "Please enter a valid phone number" |
| Email | "Please enter a valid email address" |
| Project Type | "Please select a project type" |
| Photos (count) | "You can attach up to 3 photos" |
| Photos (size) | "Each photo must be under 10MB" |
| Photos (type) | "Please use JPEG, PNG, or HEIC files" |

**Global server error:** "There was a problem submitting your request. Please call us directly." with phone as tap-to-call link. Form is preserved on error.

---

### 9. Success States

Redirect to `/thank-you`. The thank-you page confirms receipt, sets 24-hour response expectation, offers tap-to-call as fallback, and links back to home. No-index. This is the correct pattern — a dedicated contact page warrants a dedicated confirmation page, and the URL change supports conversion tracking.

---

### 10. Trust / Privacy Cues

- Below submit: "We never share your information. No spam."
- Near photo upload: "Photos are only shared with your estimator. Never stored publicly."
- In sidebar: real customer quote, phone + hours, service area, privacy policy link.
- Do not add: SSL icons, review counts (handled elsewhere), consent checkboxes (not legally required for this business type), long privacy text.

---

### 11. Upload / Scheduling / Completion Layer

**Photo upload:**
- Max 3 files
- Accepted: JPEG, PNG, HEIC, WebP
- Max 10MB per file
- Validate on file selection
- Show file names after selection with per-file remove (×) control
- Label: "Add photos (optional)"
- Helper: "Share the existing space or inspiration — up to 3 photos. Helps us prepare for your estimate."
- Mobile: `accept="image/*"` triggers native photo picker

No scheduling follow-up. The business model is: form → follow-up call → booked visit. Scheduling on the form would add complexity without a defined process behind it.

---

### 12. Mobile Behavior

- All fields full-width on mobile
- Phone + Email: side-by-side at `sm` breakpoint, stacked below
- Input types: `tel` for phone, `email` for email, `select` for project type (native OS picker)
- Photo upload: full-width, tap triggers native photo picker (`accept="image/*"`)
- Labels visible above all inputs at all times
- Submit button: full-width, minimum 52px height
- All touch targets: minimum 44×44px
- Privacy note: centered, below submit, small text
- Spacing: `space-y-5` between fields, increase to `space-y-6` if the form feels dense after upload is added

---

### 13. Optional Backend / Integration Notes

**For Agent 09 — photo delivery decision needed:**

The form collects up to 3 image files. Agent 09 must decide:
- **Option A:** Attach files directly to the Resend notification email (simple, no extra infrastructure, limited by attachment size)
- **Option B:** Upload to Vercel Blob first, include download links in notification email (more robust for larger files)

The form layer is ready regardless of which path is chosen. The server action needs updating once 09 decides.

---

### 14. Implementation Notes

**Correct as-is — do not change:**
- Field set (Name, Phone, Email, Project Type, Message)
- Zod validation schema and error shape
- `useActionState` + Server Action pattern (`lib/actions.ts`)
- Honeypot implementation
- Resend email delivery
- `/thank-you` redirect on success
- Privacy note placement and copy
- Contact page sidebar layout
- Error rendering via `aria-describedby`

**Add:**
1. Photo upload field — `<input type="file" multiple accept="image/*">` with custom styling, file-level validation, selected-file list with remove controls
2. Upload trust line near the field: "Photos are only shared with your estimator. Never stored publicly."
3. Update `data/pages/contact.ts` — add upload field label, helper text, trust copy
4. Update Zod schema in `lib/actions.ts` — add optional `photos` field
5. Update server action — handle file delivery per 09's decision

**Accessibility for photo upload:**
- `<label>` explicitly associated via `htmlFor`/`id`
- Helper text via `aria-describedby`
- Error states via `aria-describedby`
- Focus ring on custom upload button
- Selected files announced to screen readers

---

### 15. Escalation Flags

> **Escalate to 09:** Photo file delivery method. The form collects up to 3 images. Agent 09 must decide whether to attach files to the Resend email or upload to Vercel Blob and include links. This is an infrastructure decision outside the form agent's scope. The form layer is implementation-ready either way.
