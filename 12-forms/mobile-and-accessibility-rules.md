# Mobile and Accessibility Rules

## Mobile Rules

Mobile is not a scaled-down desktop form. Define it explicitly.

### Layout

- All fields full-width on mobile by default
- Side-by-side field pairs (e.g., phone + email) stack vertically on mobile
- Use responsive grid classes: side-by-side at `sm` breakpoint and above, full-width below
- Multi-step forms: one step visible at a time, back/next controls full-width
- Progress indicators (if multi-step) stay above the fold

### Input types for keyboard optimization

| Field | Input type | Effect |
|---|---|---|
| Name | `type="text"` | Standard keyboard |
| Phone | `type="tel"` | Numeric / phone keyboard |
| Email | `type="email"` | Email keyboard with @ |
| Number / quantity | `type="number"` | Numeric keyboard |
| URL | `type="url"` | URL keyboard with .com |
| Free text short | `type="text"` | Standard keyboard |
| Free text long | `<textarea>` | Standard keyboard |
| Dropdown / select | `<select>` | Native OS picker |
| File upload | `type="file" accept="image/*"` | Native photo picker / camera |

Always use the most specific input type. The wrong type forces mobile users to manually switch keyboards.

### Labels

- Labels must remain visible above inputs at all times
- Do not use floating label patterns — they disappear at the wrong moment and hurt accessibility
- Label text minimum 14px / 0.875rem

### Touch targets

- Input fields: minimum height 48px
- Submit button: minimum height 52px, full-width on mobile
- All interactive elements: minimum touch target 44×44px (WCAG 2.5.5)
- File upload button / drop zone: minimum height 48px, full-width tap target

### Button

- Full-width on mobile
- Never less than 48px height
- Tap state should be visually distinct (active:scale or background change)
- Loading state should prevent double-tap submission

### Upload on mobile

- `accept="image/*"` triggers native iOS photo picker / Android file picker
- Do not require drag-and-drop on mobile — it is not supported
- Show selected file names below the upload area after selection
- Provide a per-file remove (×) control that is at least 44×44px

### Privacy note placement

- Below submit button, centered
- Small text but legible (minimum 12px / 0.75rem)
- Does not compete visually with the submit CTA

### Spacing

- Minimum `1.25rem` (20px) between fields on mobile
- Increase to `1.5rem` (24px) if the form includes uploads or complex fields
- Do not compress vertical spacing to fit "above the fold" — scrolling is acceptable on mobile

### What should remain immediately visible on mobile

- Form headline / CTA headline
- The first 2–3 fields
- The submit button must be reachable by scrolling — it does not need to be above the fold
- Privacy note must be visible just below the submit button without additional scrolling

---

## Accessibility Rules

Every form must meet WCAG 2.1 AA at minimum.

### Labels

- Every input must have a visible `<label>` associated via `for`/`id`
- Do not use `placeholder` as the only label — placeholders disappear on focus and are not accessible
- Do not use `aria-label` as a substitute for a visible label on primary fields (use it as a supplement)

### Required field signaling

- Mark required fields visually (asterisk * is standard)
- Include `aria-required="true"` on required inputs
- Provide a legend or note explaining the asterisk convention (e.g., "* Required")
- Do not rely on color alone to indicate required status

### Error association

- Every error message must be associated to its input via `aria-describedby`
- Use `role="alert"` or `aria-live="polite"` on error messages that appear dynamically
- On submit with errors: move focus to the first invalid field or to the global error message

### Focus states

- All interactive elements must have a visible focus ring
- Do not remove default browser focus styles without replacing them
- Focus ring contrast must meet 3:1 against adjacent colors (WCAG 2.4.11)
- Tab order must follow visual order

### Keyboard navigation

- All fields, buttons, and controls must be reachable and operable via keyboard
- File upload: the custom upload button must be keyboard-accessible (button element, not div)
- Select dropdowns are natively keyboard-accessible — preserve this
- No keyboard traps

### Screen reader clarity

- Form must have a meaningful `aria-label` on the `<form>` element
- Field errors are announced when they appear (use `role="alert"`)
- File input: announce selected file names to screen readers after selection
- Submit button: label must reflect the action ("Request My Free Estimate", not "Submit")
- Loading state: use `aria-disabled="true"` on the button during submission, not just `disabled`

### Input states

All inputs must have visually distinct states:

| State | Visual requirement |
|---|---|
| Default | Visible border, readable placeholder |
| Hover | Subtle border darkening or glow |
| Focus | Visible focus ring (design-system color) |
| Filled | No change required, value is visible |
| Error | Red border, red error text below |
| Disabled | Reduced opacity, cursor: not-allowed |
| Loading (button) | Spinner or text change, opacity reduction |

### Color and contrast

- Body text against form background: minimum 4.5:1 contrast ratio
- Placeholder text: minimum 3:1 (note: WCAG 1.4.3 allows lower for placeholder)
- Error text: minimum 4.5:1 against background
- Focus ring: minimum 3:1 against adjacent colors

### Touch target sizing

- Every interactive element: minimum 44×44px (WCAG 2.5.5)
- File remove (×) buttons: minimum 44×44px — do not make these tiny
- Checkbox / radio: 44×44px touch target even if the visual indicator is smaller
