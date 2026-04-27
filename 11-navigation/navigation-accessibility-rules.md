# Navigation Accessibility Rules

Specific, implementable accessibility requirements for all navigation components.

---

## Semantic Structure

- Wrap the entire header navigation in a `<nav>` element with `aria-label="Main navigation"`
- If a secondary/utility nav is present, give it a distinct `aria-label` (e.g. `aria-label="Utility navigation"`)
- If breadcrumbs are present, wrap in a separate `<nav aria-label="Breadcrumb">`
- Use `<ul>` and `<li>` for navigation link lists — not `<div>` soup
- Use `<a>` for links that navigate to a URL; use `<button>` for triggers that open menus or modals
- Never use a `<div>` as an interactive element — always `<button>` or `<a>`

---

## Skip Link

- The **first focusable element on every page** must be a skip link: `<a href="#main-content">Skip to main content</a>`
- Visually hidden by default (CSS `position: absolute; left: -9999px` or clip-path equivalent)
- Becomes visible on keyboard focus (`:focus { position: static; }` or equivalent reveal)
- Target: `<main id="main-content">` — the main content landmark
- This is required — not optional. It is the first keyboard navigation fix for users who don't want to tab through the entire nav on every page.

---

## Active Page Indication

- The currently active nav link must have `aria-current="page"`
- This is in addition to visual active-state styling — not a replacement for it
- Screen readers announce "current" to orient the user

---

## CTA Button

- If the CTA is a `<button>` that opens a modal or drawer, ensure `aria-haspopup` is set correctly
- If the CTA is an `<a>` that navigates to a booking page, no extra aria is needed — the label text is sufficient
- CTA label must be self-descriptive: "Book Now", "Get a Quote", "Schedule a Call" — not "Click Here"

---

## Hamburger Button (Mobile)

```html
<button
  aria-expanded="false"
  aria-controls="mobile-menu"
  aria-label="Open navigation menu"
  type="button"
>
  <!-- Icon (decorative) -->
</button>
```

- `aria-expanded` toggles between `"false"` and `"true"` as menu opens/closes
- `aria-controls` must match the `id` of the menu container
- `aria-label` must update: "Open navigation menu" → "Close navigation menu" when open
  - OR: use a single static `aria-label="Navigation menu"` and rely on `aria-expanded` alone — both patterns are valid; be consistent
- The icon (☰ / ✕) is decorative — give it `aria-hidden="true"`

---

## Mobile Menu Overlay / Drawer

- When the mobile menu opens, **trap focus inside the menu**
  - First Tab from last item wraps to first item (and vice versa)
  - Do not allow Tab to escape to content behind the overlay while it's open
- **Close on Escape key** — required keyboard behavior
- **Return focus to the hamburger button** when the menu closes
- The menu container must have a role — use `role="dialog"` with `aria-modal="true"` if it's a full overlay, or simply use the `<nav>` element if it's an in-page element
- Background content should be `aria-hidden="true"` when the overlay is open (prevents screen readers from reading behind the overlay)

---

## Focus Ring Rules

- **Never** remove the focus ring without a visible replacement
- Use `:focus-visible` (not `:focus`) to show the ring for keyboard navigation without affecting mouse users
- Focus ring specification:
  - Minimum: 2px solid outline
  - Offset: 2px (so ring appears outside the element bounds)
  - Color: primary brand color, or high-contrast fallback (black `#000` or white `#fff`) if primary color doesn't meet 3:1 contrast ratio against the background
- Test focus rings against:
  - Default (non-sticky) header background
  - Sticky header background (may differ if header becomes opaque on scroll)
  - Dark announcement bar background (if present)

---

## Dropdown Menus

If dropdowns are used:

```html
<!-- Parent trigger -->
<button aria-expanded="false" aria-haspopup="true" id="services-btn">
  Services
  <svg aria-hidden="true"><!-- chevron icon --></svg>
</button>

<!-- Dropdown panel -->
<ul role="menu" aria-labelledby="services-btn" hidden>
  <li role="none"><a role="menuitem" href="/services/hvac">HVAC</a></li>
  <li role="none"><a role="menuitem" href="/services/plumbing">Plumbing</a></li>
</ul>
```

- Parent trigger: `<button>` with `aria-expanded` and `aria-haspopup="true"`
- Dropdown panel: `role="menu"` with `aria-labelledby` pointing to the trigger
- Child items: `role="menuitem"`
- Keyboard behavior:
  - Enter / Space: opens dropdown from trigger
  - Arrow keys: navigate between menu items
  - Escape: closes dropdown, returns focus to trigger
  - Tab: closes dropdown, moves to next focusable element in document order

---

## Contrast Requirements

| Element | Minimum contrast ratio | Standard |
|---|---|---|
| Nav link text on header background | 4.5:1 | WCAG AA |
| CTA button text on button background | 4.5:1 | WCAG AA |
| Active/hover link color on header background | 4.5:1 | WCAG AA |
| Focus ring on background | 3:1 | WCAG AA (non-text) |
| Announcement bar text on bar background | 4.5:1 | WCAG AA |
| Mobile menu text on menu background | 4.5:1 | WCAG AA |

- Test contrast in both default (light) and sticky (potentially with shadow/border change) states
- If the header is transparent over a hero image, test contrast against the image content — not just the header color

---

## Motion and Animation

- All nav animations (menu slide-in, dropdown appear, header shrink on scroll) must respect `prefers-reduced-motion`
- Implementation:
  ```css
  @media (prefers-reduced-motion: reduce) {
    /* Remove transitions and animations */
    .nav-header, .mobile-menu, .dropdown-panel {
      transition: none;
      animation: none;
    }
    /* Use instant open/close instead of slide/fade */
  }
  ```
- The functional behavior must still work (menu opens and closes) — only the animation is removed
- Never make important state changes visible ONLY through animation — always pair animation with a structural change (visibility, display, or aria-expanded)

---

## Breadcrumb Accessibility

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li aria-current="page">HVAC Repair</li>
  </ol>
</nav>
```

- `<nav aria-label="Breadcrumb">` — distinct landmark from main nav
- `<ol>` — ordered list (breadcrumbs are ordered by hierarchy)
- Current page: no link, `aria-current="page"`, visually distinct

---

## Checklist (Use Before Finalizing Implementation Notes)

- [ ] `<nav aria-label="Main navigation">` present
- [ ] Skip link is the first focusable element on every page
- [ ] Active link has `aria-current="page"`
- [ ] Hamburger button has `aria-expanded`, `aria-controls`, `aria-label`
- [ ] Mobile menu: focus trapped when open, Escape closes, focus returns to trigger
- [ ] Focus rings visible on all interactive elements (`:focus-visible`)
- [ ] All text contrast meets 4.5:1 minimum
- [ ] Dropdown uses correct `role="menu"`, `role="menuitem"`, keyboard arrow navigation
- [ ] `prefers-reduced-motion` respected for all animations
- [ ] Background content `aria-hidden="true"` when mobile overlay is open
- [ ] Breadcrumbs use `<ol>` and `aria-current="page"` (if breadcrumbs are present)
