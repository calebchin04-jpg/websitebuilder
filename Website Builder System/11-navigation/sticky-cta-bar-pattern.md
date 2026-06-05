# Sticky Bottom Dual-CTA Bar — Implementation Pattern

Owned by: `11-navigation`
Reference breakdown: `non-ai resources/[FIXED-BOTTOM-DUAL-CTA-PHONE-BOOK-LOCAL-SERVICE] walkerhomeservices-design-breakdown.txt`

---

## What This Is

A permanently fixed bar at the bottom of the viewport containing two full-width CTA buttons:
1. **Left — Phone call** (immediate, synchronous action)
2. **Right — Book/schedule** (planned, asynchronous action)

The bar never hides on scroll. It is always visible. It floats above all page content at `z-index: 9999`.

---

## When to Use

**Use when all of the following are true:**
- Business type is local service (painting, remodeling, plumbing, HVAC, landscaping, cleaning, roofing, etc.)
- Primary conversions are phone call AND/OR booked appointment
- Mobile traffic is significant (this bar is most impactful on mobile where the phone number requires scrolling to find)
- The site is 3+ sections long
- The business actively takes phone calls

**Do not use when:**
- Site already has a sticky nav with a prominent CTA button (double-sticky = visual noise and z-index conflicts)
- Premium or luxury brand positioning (this bar is utilitarian — conflicts with premium feel)
- Creative agency, portfolio, or B2B professional services site
- Business is online-only (no phone support)
- The page is very short (1–2 sections) and the hero CTA is sufficient

---

## HTML Template (Next.js / TSX)

```tsx
// components/layout/StickyServiceBar.tsx
import PhoneIcon from '@/components/ui/icons/PhoneIcon'
import CalendarIcon from '@/components/ui/icons/CalendarIcon'

interface StickyServiceBarProps {
  phone: string          // Display text: "(613) 932-7978"
  phoneHref: string      // tel: link: "tel:6139327978"
  bookingUrl: string     // External URL or "#book" anchor
  bookingExternal?: boolean  // true = opens in new tab
}

export function StickyServiceBar({
  phone,
  phoneHref,
  bookingUrl,
  bookingExternal = false,
}: StickyServiceBarProps) {
  return (
    <div
      className="fixed bottom-0 left-0 w-full z-50 bg-white flex gap-2.5 p-2.5
                 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]"
      role="region"
      aria-label="Quick contact actions"
    >
      {/* LEFT — Phone (primary action) */}
      <a
        href={phoneHref}
        aria-label={`Call us at ${phone}`}
        className="flex items-center justify-center w-full py-[18px] px-4
                   font-semibold rounded-lg no-underline leading-tight
                   transition-all duration-300
                   bg-primary text-accent
                   hover:bg-accent hover:text-primary
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                   focus-visible:outline-accent"
      >
        <PhoneIcon className="w-4 h-4 mr-2 shrink-0" aria-hidden="true" />
        Call for Service
      </a>

      {/* RIGHT — Book (secondary action) */}
      <a
        href={bookingUrl}
        aria-label="Schedule a service appointment"
        {...(bookingExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className="flex items-center justify-center w-full py-[18px] px-4
                   font-semibold rounded-lg no-underline leading-tight
                   transition-all duration-300
                   bg-accent text-primary
                   hover:bg-primary hover:text-accent
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                   focus-visible:outline-primary"
      >
        <CalendarIcon className="w-4 h-4 mr-2 shrink-0" aria-hidden="true" />
        Schedule Service
      </a>
    </div>
  )
}
```

---

## Data Source

Always pull from `siteConfig` — never hardcode:

```ts
// In the page or layout that renders StickyServiceBar:
import { siteConfig } from '@/data/site'

<StickyServiceBar
  phone={siteConfig.phone}
  phoneHref={siteConfig.phoneHref}
  bookingUrl={siteConfig.bookingUrl}
  bookingExternal={siteConfig.bookingExternal}
/>
```

`siteConfig` fields needed:
```ts
// data/site.ts additions
bookingUrl: string        // e.g. "https://book.servicetitan.com/..." or "#book"
bookingExternal: boolean  // true if linking to external platform
```

---

## Body Padding Requirement

The bar is ~90px tall (10px wrapper padding + 18px button padding top + 18px bottom + ~44px content). The page layout wrapper must add equivalent bottom padding or the last section will be partially hidden behind the bar.

In the root layout:

```tsx
// app/layout.tsx
<body className="pb-[90px]">
  {children}
  <StickyServiceBar ... />
</body>
```

Or in Tailwind config if using a global layout class:
```css
/* globals.css — only if the bar is always rendered */
body {
  padding-bottom: 90px;
}
```

If the bar is conditionally rendered (some pages have it, some don't), apply `pb-[90px]` as a class on the layout wrapper only on pages where the bar renders.

---

## Placement in Page Architecture

The `StickyServiceBar` renders **outside the main content container** — it must not be inside any max-width wrapper. It goes at the root level so `width: 100%` resolves to `100vw`.

```tsx
// Correct placement in app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body className="pb-[90px]">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyServiceBar ... />  {/* Outside all containers */}
      </body>
    </html>
  )
}
```

---

## Color Inversion Pattern

The two buttons use only the brand's two primary colors — swapped between default and hover:

| State | Left button (phone) | Right button (book) |
|---|---|---|
| Default | `bg-primary text-accent` | `bg-accent text-primary` |
| Hover | `bg-accent text-primary` | `bg-primary text-accent` |

Each button's hover state becomes the other button's default state. This means:
- No third color is introduced
- The visual system stays within the brand palette
- Both states feel familiar (the user has already seen both color combinations)

This works with any two-color brand system where both colors have sufficient contrast
against each other when used as background + text.

**Contrast check required:** Verify both combinations (primary on accent, accent on primary)
meet WCAG AA minimum 4.5:1 for normal text. If the contrast fails, adjust shade values
before using this pattern.

---

## CTA Wording Rules

| Position | Wording | Icon | Why |
|---|---|---|---|
| Left (phone) | "Call for Service" | Phone | Not "Call Us" — ties action to the service outcome |
| Right (book) | "Schedule Service" | Calendar | Not "Book Now" — lower pressure, implies planning not commitment |

Alternative wording for different business types:
- Plumbing/HVAC emergency: "Call Now" (urgency is appropriate)
- Cleaning/maintenance: "Get a Free Quote" (if quote is the primary CTA, not a booking)
- If only one CTA is needed: render a single full-width button, don't force two

---

## Accessibility Checklist

- [ ] `role="region"` + `aria-label` on the wrapper div
- [ ] `aria-label` on each `<a>` that includes the full action (phone number in call label)
- [ ] Icons have `aria-hidden="true"` (button text already describes the action)
- [ ] No `tabIndex="-1"` on either link — both must be keyboard-focusable
- [ ] Focus ring visible on both buttons (`focus-visible:outline`)
- [ ] Tap targets meet 44×44px minimum (the `py-[18px]` padding achieves this)
- [ ] `prefers-reduced-motion`: the `transition-all duration-300` on buttons is acceptable
  (it is a background-color change, not a transform/translate — low motion sensitivity risk)

---

## Mobile Behavior

- Bar is always visible — no hide-on-scroll behavior
- Buttons reduce padding on mobile: `py-[18px]` → `py-3.5` + `text-sm` at < 768px:
  ```
  md:py-[18px] py-3.5 md:text-base text-sm
  ```
- Gap between buttons stays at 10px (2.5 in Tailwind) on all screen sizes
- Bar background (`bg-white`) ensures readability regardless of the section behind it

---

## Conflict With Sticky Navigation

If the site also has a sticky header (navigation that sticks on scroll), the two fixed
elements may conflict visually or with z-index. Rules:

- Sticky nav: use `z-40` (or equivalent)
- Sticky bottom bar: use `z-50` (or equivalent)
- Never let them overlap — the nav sticks to the top, the bar to the bottom. There is no
  vertical conflict as long as `padding-bottom` on the body is correctly set.
- If the nav contains a phone CTA AND the bottom bar has a phone CTA — remove the phone
  from the nav. Two phone CTAs on the same page is redundant. The bottom bar handles it.
