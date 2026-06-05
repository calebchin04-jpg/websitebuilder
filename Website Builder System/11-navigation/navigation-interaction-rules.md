# Navigation Interaction Rules

Rules for how navigation behaves: sticky scroll, states, mobile patterns, and accessibility.

---

## Header / Sticky Scroll Rules

### When to use sticky behavior

**Use sticky when:**
- Pages are long enough that the user will scroll significantly before reaching a CTA or anchor
- The primary CTA needs to remain accessible during long-form content (Services pages, FAQ, Testimonials)
- The sticky behavior adds conversion access without feeling intrusive
- Most local service sites — sticky is the correct default

**Do not use sticky when:**
- The site is a single-screen or very short page where sticky adds no value
- The design system specifies a transparent or overlay header that should dissolve on scroll
- The brand register is extremely minimal and a persistent header competes with the content hierarchy

### Sticky behavior specification

When sticky is used, define all four states:

**State 1 — Initial load:**
- Full header height (typically 72–96px)
- Background: defined by design system (white, near-white, or transparent)
- Shadow: none, or 1px bottom border — not a heavy box shadow
- All nav links visible
- CTA button visible

**State 2 — Scrolling (before sticky triggers):**
- Header scrolls with page
- No changes yet

**State 3 — Sticky triggered (~80px scroll depth):**
- `position: sticky; top: 0`
- Height reduces (e.g. 80px → 64px) via CSS transition (200ms ease)
- Logo scales proportionally with height
- Nav links remain visible — do not hide any items on sticky
- CTA button remains visible and fully clickable
- Background: solid white fill (if previously transparent) + soft drop shadow

**State 4 — Long scroll (sticky maintained):**
- Reduced header stays locked
- No further changes
- CTA remains accessible

### What should NOT change on scroll
- Nav item labels — never hide or truncate
- CTA button — never hide or collapse
- Logo — always visible (may scale down proportionally)

---

## Navigation State Rules

### Active state (current page)
- Nav link receives: bottom border or underline in primary brand color
- Font weight increases slightly (e.g. medium → semibold)
- No background highlight on the link (keeps header clean)
- `aria-current="page"` on the active link element
- CTA button: unchanged — always full primary color regardless of active page

### Hover state (desktop)
- Color shift: link text transitions to primary brand color
- Underline appears on hover (same style as active, but only while hovering)
- Transition: 150ms ease — not instant, not slow
- CTA button hover: background darkens ~10%, optional scale (1.01–1.02), cursor pointer

### Focus state (keyboard)
- Visible focus ring: 2px solid outline, 2px offset, primary brand color or high-contrast fallback
- Focus ring must be clearly visible on both light header backgrounds and sticky dark backgrounds
- Use `:focus-visible` to show ring only for keyboard navigation (not on mouse click)
- Never suppress focus ring without a visible replacement

### Selected state
- Same treatment as active state — persistent underline + weight
- Selected is the "you are here" signal — must not be confused with hover

### Dropdown open state (if dropdowns are used)
- Parent item gains: active-style underline OR subtle background to indicate the open state
- Dropdown panel: appears below parent with a brief transition (150ms ease, translateY -4px → 0)
- Rest of nav: unchanged
- Dropdown closes when: click outside, Escape key, Tab past last item, hover away (200ms delay)

---

## Mobile Navigation Rules

### Menu trigger
- **Hamburger button** (☰ / three-line icon): right-most element after CTA
- Must be a `<button>` element with `aria-expanded` and `aria-controls`
- `aria-label="Open navigation menu"` / `aria-label="Close navigation menu"` depending on state
- Minimum 44×44px tap target (48×48px preferred)
- Icon changes to ✕ when menu is open

### Menu patterns

**Full-screen overlay (recommended for simple and medium sites):**
- Menu opens as a full-viewport layer above all content
- Background: matches header color or near-white
- Links fill the vertical space in large, easy-to-tap type (18–20px minimum)
- Close button (✕) top-right corner of overlay
- Tap outside overlay to close (on desktop-like touch devices)

**Slide-in drawer (alternative for more structured menus):**
- Drawer slides in from the right edge
- Width: ~85% of viewport or fixed 320px — whichever is smaller
- Scrim/overlay covers the rest of the viewport
- Tap scrim to close
- Same close button requirement

**Which to use:**
- Full-screen overlay: simpler sites, fewer items, brand wants immersive feel
- Slide-in drawer: sites with more items, optional utility layer, or when the menu has distinct sections

### Mobile menu item order
1. Home (always first in mobile, even if omitted from desktop)
2. All primary nav items in same order as desktop
3. Any utility items (Account, Support) — subdued below a light divider
4. Contact (if excluded from desktop primary nav, include here)
5. CTA button — bottom of menu, full-width, primary color

### Nested menu on mobile (if dropdowns exist)
- Parent items show a chevron (›) indicating expandable children
- Tap parent label to expand/collapse accordion-style
- Children appear indented below parent
- Only one parent expanded at a time (optional — can allow multiple)
- Do not use hover for mobile — tap only

### What must stay in the header bar (always visible, never in drawer)
- Logo
- Primary CTA button ("Book Now", "Get a Quote", etc.)
- Hamburger button

### What goes into the drawer
- All nav links
- Utility links
- Contact (if not in desktop primary nav)
- Secondary CTA or repeat of primary CTA at bottom

---

## Touch Target Rules

| Element | Minimum size | Preferred size |
|---|---|---|
| Nav link (mobile) | 44×44px | 48px height, full-width |
| CTA button (mobile header) | 44×44px | 44px height, minimum 80px width |
| Hamburger button | 44×44px | 48×48px |
| Dropdown child item | 44px height | 48px height |
| Accordion expand toggle | 44×44px | Full row tap target |

---

## Breadcrumb Rules

**Include breadcrumbs when:**
- The site has sub-pages (e.g. Services → HVAC → AC Installation)
- The user may land deep in the hierarchy from search
- The current page's position in the hierarchy is not obvious from the URL alone

**Do not include breadcrumbs when:**
- The sitemap is flat (no sub-pages)
- The site has 6 or fewer pages at a single hierarchy level
- Adding breadcrumbs would look cluttered or unnecessary on a clean, minimal design

**Breadcrumb placement:**
- Below the main header, above the page hero or page title
- Not inside the sticky header
- Small typography (label-size from design system)
- Current page: not a link, visually distinct (color or weight)
- Separator: `/` or `›` — do not use icons as separators

**Breadcrumb accessibility:**
- Wrap in `<nav aria-label="Breadcrumb">`
- Use `<ol>` (ordered list)
- Current page item: `aria-current="page"`

---

## In-Page Jump Navigation Rules

**Include in-page jump navigation when:**
- A single page has 4+ distinct named sections
- Users benefit from knowing the page structure before reading
- The page is long enough that a user could lose their place

**Common candidates:** Long FAQ pages, Services overview pages, About pages with distinct sections (Story / Team / Values / Certifications)

**Formats:**
- **Horizontal anchor strip** (below sticky header): fixed horizontal list of anchor links — best for 3–6 sections
- **Sticky sidebar** (left-rail): floats alongside content — best for documentation-style pages; unusual for local service sites
- **Top of page section index**: in-page list at the top of the page (not sticky) — simpler, best for shorter lists

**Jump nav accessibility:**
- Each anchor target must have a matching `id`
- Smooth scroll on click (CSS `scroll-behavior: smooth` or JS equivalent)
- Respect `prefers-reduced-motion` — instant jump instead of smooth scroll for reduced-motion users
- Current section highlighting: update active anchor link as user scrolls using IntersectionObserver
