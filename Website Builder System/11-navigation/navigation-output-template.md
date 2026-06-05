# Navigation Output Template

Use this template to produce the full navigation feature output. Fill every section. Label all assumptions. Do not leave sections blank — if a section is not applicable, write "N/A — [reason]."

---

## NAVIGATION FEATURE PACKAGE
**Project:** [Business Name]
**Stage:** 11-navigation — output complete
**Nav complexity:** [Simple flat / Medium with dropdowns / Complex with mega menu]
**Page count:** [X pages from sitemap]
**Primary CTA:** [CTA label and destination]
**Prior-stage quality:** [Strong / Acceptable with flags / Weak — assumptions made]

---

## Section 1 — Navigation Strategy Summary

**The navigation's primary job on this site:**
[One sentence: "This navigation must make [target audience] immediately understand [site structure] and take action by [CTA]."]

**Primary orientation challenge:**
[One sentence: "The visitor is most likely to get confused or lost because [specific structural challenge or competing paths]."]

**Brand register:** [Approachable / Mid-range / Authoritative — from 05-brand-direction]

**Nav complexity selected:** [Simple flat / Medium with dropdowns / Complex with mega menu]
**Reason:** [1–2 sentences explaining why this complexity level is correct for this sitemap]

**Why this navigation direction is strategically correct:**
[2–3 sentences: how this nav supports trust, conversion, and clarity for the specific audience]

---

## Section 2 — Desktop Navigation Structure

**Header layout:**
```
[ASCII or text representation of desktop header]
Example:
[ Logo ]   Home · Services · About · Testimonials · FAQ     [ Book Now → ]
```

**Logo:**
- Position: [Left / Center]
- Links to: [Homepage URL]
- Treatment: [Business name in brand typeface / Logomark + wordmark / Icon only with accessible text]

**Primary nav links:**
| Label | Destination | Notes |
|---|---|---|
| [Label] | [/url] | [Any grouping or dropdown note] |
| [Label] | [/url] | |
| [Label] | [/url] | |

**CTA button:**
- Label: `[Verb-first label]`
- Destination: `[/url or #anchor or tel:]`
- Style: [Solid filled / Outlined — and why]
- Position: Far right of nav bar

**Utility links (if applicable):**
[N/A — or describe any secondary utility layer]

**Announcement bar (if applicable):**
[N/A — or describe: content type, dismissible, background color, position relative to header]

**What was excluded from desktop nav and why:**
[List any sitemap pages excluded from top-level nav, and where they surface instead (footer, mobile menu, CTA flow)]

---

## Section 3 — Mobile Navigation Structure

**Mobile header bar (always visible):**
```
[ASCII or text representation of mobile header]
Example:
[ Logo ]                                    [ Book Now ]  [ ☰ ]
```

**Menu pattern:** [Full-screen overlay / Slide-in drawer from right]
**Reason:** [1 sentence]

**Open menu structure:**
```
[List the mobile menu item order]
Example:
Home
Services
About
Testimonials
FAQ
Contact
─────────────
[ Book Now → ]
```

**Grouping logic:**
[How items are organized — flat list / accordion for sub-pages / light dividers between sections]

**CTA handling:**
- In header bar: [Always visible / Position details]
- In open menu: [Repeated at bottom / position details]

**Utility link treatment:**
[N/A — or: how utility links appear in the mobile menu]

**Nested menu behavior (if dropdowns exist):**
[N/A — or: describe accordion expand/collapse, chevron behavior, tap target]

**Touch targets:**
[Confirm all interactive elements meet 44×44px minimum / describe any exceptions]

**Announcement bar behavior on mobile:**
[N/A — or: stacks above header, dismissible, wraps to 2 lines, etc.]

---

## Section 4 — Header / Sticky Behavior

**Sticky behavior:** [Yes / No]
**Reason:** [Why sticky is or is not appropriate for this site]

**State 1 — Initial load:**
- Height: [e.g. 80px]
- Background: [e.g. white / transparent]
- Shadow: [None / 1px bottom border / soft box-shadow]
- All elements visible: [Yes]

**State 2 — Scroll triggered (at ~[X]px scroll depth):**
- Header locks to top: `position: sticky; top: 0`
- Height change: [e.g. 80px → 64px, 200ms ease]
- Logo: [scales proportionally / no change]
- Nav links: [remain visible / behavior]
- CTA button: [remains visible / behavior]
- Background: [gains solid fill + shadow if previously transparent]

**State 3 — Sticky maintained (long scroll):**
- [Any further changes or "no changes from sticky state"]

**Mobile sticky behavior:**
- [Describe: same sticky pattern as desktop / different behavior / always sticky on mobile]
- What remains in mobile sticky header: [Logo + CTA + Hamburger]

**CTA behavior on scroll:**
- Desktop: [Always visible in sticky header]
- Mobile: [Always visible in sticky mobile header bar]

---

## Section 5 — Navigation State Rules

**Active state (current page):**
- Visual treatment: [Underline / bottom border / weight change / color change]
- Color: [Primary brand color from design system]
- `aria-current="page"`: Yes — required on the active link element

**Hover state (desktop):**
- Link color transition: [to primary brand color, Xms ease]
- Underline behavior: [appears on hover, same style as active]
- CTA button hover: [darken X%, optional scale Y]

**Focus state (keyboard):**
- Focus ring: [2px solid, 2px offset, primary color or high-contrast fallback]
- Using `:focus-visible`
- Visible on all backgrounds including sticky state

**Selected state:**
- [Same as active state — or describe difference]

**Dropdown open state (if applicable):**
- [N/A — or describe: parent state change, panel appearance transition, close behavior]

---

## Section 6 — Optional Navigation Mechanics

### Announcement Bar
[Include only if used. Otherwise: "Not included — no time-sensitive content identified in upstream inputs."]

Rules if included:
- Trigger condition: [What type of content goes here]
- Position: [Above main header]
- Dismissible: [Yes — localStorage persistence]
- Max content: [~80 characters]
- Background: [accent color from design system, not CTA color]
- Typography: [13–14px, high contrast, centered]
- Mobile: [Stacks above mobile header, wraps to 2 lines at ≤375px]

### Dropdowns
[Include only if used. Otherwise: "Not included — sitemap is flat, no child pages."]

Rules if included:
- Which nav items have dropdowns: [List parent items]
- Child items per dropdown: [List with labels and destinations]
- Open trigger: [Hover desktop / Tap mobile]
- Close trigger: [Click outside, Escape key, hover away with 200ms delay]
- Animation: [150ms ease, translateY -4px → 0]

### Mega Menu
[Include only if used. Otherwise: "Not included — site complexity does not warrant it."]

### Breadcrumbs
[Include only if sub-pages exist. Otherwise: "Not included — flat sitemap, breadcrumbs add no wayfinding value."]

If included:
- Pages where breadcrumbs appear: [List]
- Format: `Home / Services / HVAC Repair`
- Separator: [/ or ›]
- Current page: [Not linked, visually distinct]
- Position: [Below header, above page hero]

### In-Page Jump Navigation
[Include only if confirmed long-form pages exist. Otherwise: "Not included — defer to page-level agents if long-form content is confirmed."]

If included:
- Pages where jump nav appears: [List]
- Format: [Horizontal anchor strip / Sticky sidebar / Top-of-page index]
- Sections linked: [List anchor names]

---

## Section 7 — Accessibility Notes

*Reference: navigation-accessibility-rules.md for full specification.*

**Skip link:** [Yes — first focusable element on every page, links to `#main-content`]

**Semantic structure:**
- Main nav: `<nav aria-label="Main navigation">`
- Nav links: `<ul>/<li>/<a>` structure
- Active link: `aria-current="page"` on current page item

**Mobile menu button:**
- Element: `<button aria-expanded aria-controls aria-label>`
- Focus returns to hamburger on close: Yes
- Focus trapped inside open menu: Yes
- Closes on Escape: Yes

**Focus rings:**
- All nav elements: `:focus-visible` ring, 2px solid, 2px offset
- Tested against: [list backgrounds — light header, sticky header, announcement bar]

**Contrast:**
- [Note any contrast values confirmed or needing verification from design system tokens]

**Motion:**
- `prefers-reduced-motion` respected: [Yes — all animations disabled, functional behavior preserved]

**Additional notes:**
[Any site-specific accessibility considerations]

---

## Section 8 — Implementation Notes

**Component structure:**
```
<Header>
  <SkipLink />                   ← first focusable element
  [<AnnouncementBar />]          ← conditional
  <nav aria-label="Main navigation">
    <Logo />
    <NavLinks />                 ← desktop: inline | mobile: hidden
    <CTAButton />
    <HamburgerButton />          ← mobile only
  </nav>
  <MobileMenuDrawer />           ← controlled by HamburgerButton state
</Header>
```

**Component names:**
- Header wrapper: `components/layout/Header.tsx`
- Navigation links: `components/layout/NavLinks.tsx`
- CTA button: `components/ui/CTAButton.tsx` (or reuse from design system)
- Mobile drawer: `components/layout/MobileMenuDrawer.tsx`
- Skip link: `components/layout/SkipLink.tsx`
- Announcement bar (if used): `components/layout/AnnouncementBar.tsx`

**Component type:** [Server / Client]
- Header wrapper: [Server if static, Client if scroll-driven sticky shrink is JS-based]
- Mobile drawer: Client — requires `isMenuOpen` state
- Announcement bar: Client — requires `isDismissed` state (localStorage)

**State management:**
```typescript
// Header component (Client if scroll-driven)
const [isScrolled, setIsScrolled] = useState(false)
const [isMenuOpen, setIsMenuOpen] = useState(false)

// Announcement bar (Client)
const [isDismissed, setIsDismissed] = useState(
  () => localStorage.getItem('announcement-dismissed') === 'true'
)
```

**Sticky implementation:**
- Option A (CSS only): `position: sticky; top: 0;` — height reduction via CSS class toggled by scroll listener
- Option B (CSS scroll-driven): `animation-timeline: scroll()` — progressive enhancement, fallback to Option A
- Scroll listener approach: `window.addEventListener('scroll', handler, { passive: true })`
- Trigger: `window.scrollY > 80`

**Mobile menu animation:**
```css
/* Slide-in drawer */
.mobile-menu {
  transform: translateX(100%);
  transition: transform 200ms ease;
}
.mobile-menu[data-open="true"] {
  transform: translateX(0);
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .mobile-menu { transition: none; }
}
```

**Data file:**
- Nav items sourced from: `data/site.ts` → `siteConfig.navigation.links[]`
- CTA sourced from: `data/site.ts` → `siteConfig.navigation.cta`
- This allows nav updates without touching component code

**CTA button:**
- Label: `[From siteConfig.navigation.cta.label]`
- Destination: `[From siteConfig.navigation.cta.href]`
- Mobile header: Always visible
- Mobile menu bottom: Repeat of same CTA

**Active page detection:**
- Framework-specific: use router current path (e.g. Next.js `usePathname()`)
- Match against `link.href` to determine active state
- Apply `aria-current="page"` and active CSS class

---

## Section 9 — Escalation Flags

*(List any items requiring a decision or input outside this agent's authority. If none, write "None.")*

| Flag | Type | Reason | Who resolves | When needed |
|---|---|---|---|---|
| [Issue] | [Missing input / Contradiction / Client decision / Scope boundary] | [Specific description] | [Client / 00 / Prior stage agent] | [Before Phase 1 / Phase 3 / Launch] |

---

## Assumptions Made

*(Document assumptions clearly so 00 and the client can verify or correct them)*

- [Assumption 1]
- [Assumption 2]
- [Assumption 3]
