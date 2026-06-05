# Examples

Two examples in document-comparison format. Example 1 is Peak Ridge Remodeling (approachable brand register, simple flat nav, local service site). Example 2 is Meridian Legal Group (authoritative brand register, medium nav with dropdown, professional services site). Both show upstream input summary → full 9-section navigation package.

---

## Example 1 — Peak Ridge Remodeling: Approachable · Simple Flat · Local Service

### Upstream input summary
- **Business:** Full-service home remodeling — kitchens, bathrooms, basements — Denver metro area
- **Primary CTA:** Get a Free Estimate → /contact
- **Sitemap:** Home, Services, Portfolio, About, Reviews, FAQ, Contact (7 pages, flat)
- **Primary audience:** Denver homeowners planning a significant remodel, comparing contractors
- **Trust barrier:** "Every remodeler promises quality — how do I know this company won't leave my kitchen torn apart for months?"
- **Brand register:** Approachable, confidence: high, warmth: high, formality: low-medium
- **Design system:** Warm white header, forest green primary color, serif display + sans body
- **Wireframe:** Simple header, logo left, nav center, CTA right

---

### NAVIGATION FEATURE PACKAGE
**Project:** Peak Ridge Remodeling
**Stage:** 11-navigation — output complete
**Nav complexity:** Simple flat
**Page count:** 7 pages
**Primary CTA:** Get a Free Estimate → /contact
**Prior-stage quality:** Strong

---

#### Section 1 — Navigation Strategy Summary

**The navigation's primary job on this site:**
This navigation must make Denver homeowners immediately understand what Peak Ridge does, where to see proof of their work, and how to take the next step — getting a free estimate.

**Primary orientation challenge:**
The visitor may not distinguish Peak Ridge from a dozen other remodeling competitors; the navigation must surface trust signals (Reviews) and proof (Portfolio) as top-level items — not buried in dropdowns.

**Brand register:** Approachable

**Nav complexity selected:** Simple flat
**Reason:** 7 pages, all at the same hierarchy level — no sub-pages confirmed. A flat nav with 5 visible links and one CTA button is clean, scannable, and complete.

**Why this navigation direction is strategically correct:**
Homeowners comparing remodelers scan quickly and make decisions on trust, not complexity. A clean header that says "we do remodeling, here's our work, here's what others say, get an estimate" does the job in under 3 seconds without requiring the user to dig.

---

#### Section 2 — Desktop Navigation Structure

**Header layout:**
```
[ Peak Ridge Remodeling ]   Services · Portfolio · Reviews · About · FAQ     [ Get a Free Estimate → ]
```

**Logo:**
- Position: Left
- Links to: /
- Treatment: Business name in brand serif typeface

**Primary nav links:**
| Label | Destination | Notes |
|---|---|---|
| Services | /services | Top-level, all services on one page |
| Portfolio | /portfolio | Replaces "Work" or "Gallery" — more specific |
| Reviews | /reviews | Explicit social proof link — not "Testimonials" (slightly less scannable) |
| About | /about | Standard, familiar |
| FAQ | /faq | Earns its top-level slot — high-anxiety buyer category |

**CTA button:**
- Label: `Get a Free Estimate`
- Destination: `/contact`
- Style: Solid filled, forest green (primary brand color)
- Position: Far right of nav bar

**Utility links:** N/A — single audience, single purpose

**Announcement bar:** N/A — no time-sensitive promotion identified in upstream inputs

**What was excluded from desktop nav and why:**
- Contact: excluded from primary nav — the CTA button ("Get a Free Estimate") already drives directly to the contact form, making a separate "Contact" label redundant. Contact page linked from footer and from CTA flow.
- Home: excluded from desktop nav — logo links to homepage; omitting "Home" reduces nav items without losing any path.

---

#### Section 3 — Mobile Navigation Structure

**Mobile header bar (always visible):**
```
[ Peak Ridge ]                        [ Free Estimate ]  [ ☰ ]
```
*(Logo shortened to wordmark only on mobile if full name doesn't fit)*

**Menu pattern:** Full-screen overlay
**Reason:** Flat 5-item structure — full-screen overlay is cleaner and more immersive than a narrow drawer for a site of this simplicity.

**Open menu structure:**
```
Home
Services
Portfolio
Reviews
About
FAQ
Contact
──────────────────
[ Get a Free Estimate → ]
```

**Grouping logic:** Flat vertical list, no dividers needed — simple enough that dividers add visual noise

**CTA handling:**
- In header bar: "Free Estimate" — shortened label to fit mobile header (≤12 characters)
- In open menu: Full label "Get a Free Estimate" — full-width button, forest green, at bottom of menu

**Utility link treatment:** N/A

**Nested menu behavior:** N/A — flat sitemap

**Touch targets:** All nav links 48px height, full viewport width tap target. CTA button in header: 44px height minimum.

**Announcement bar behavior on mobile:** N/A

---

#### Section 4 — Header / Sticky Behavior

**Sticky behavior:** Yes
**Reason:** Services, FAQ, and Portfolio are all long-scroll pages. Persistent header access to "Get a Free Estimate" is a meaningful conversion mechanic for a high-consideration purchase like remodeling.

**State 1 — Initial load:**
- Height: 80px
- Background: warm white (#FAFAF8 or design system neutral-base)
- Shadow: none (1px bottom border in light gray if design system specifies)
- All elements visible

**State 2 — Scroll triggered (at ~80px scroll depth):**
- Header locks to top: `position: sticky; top: 0`
- Height change: 80px → 64px, 200ms ease
- Logo: scales proportionally
- Nav links: remain fully visible
- CTA button: remains fully visible
- Background: gains soft box-shadow (0 2px 8px rgba(0,0,0,0.08))

**State 3 — Sticky maintained (long scroll):**
- No further changes

**Mobile sticky behavior:**
- Same sticky trigger (~80px)
- Mobile header: Logo + "Free Estimate" button + Hamburger — all remain visible
- Height: 60px mobile sticky (reduced from 72px)

**CTA behavior on scroll:**
- Desktop: Always visible in sticky header
- Mobile: Always visible in sticky mobile header bar

---

#### Section 5 — Navigation State Rules

**Active state (current page):**
- Visual treatment: 2px bottom border in forest green, font weight increases to semibold
- Color: Forest green (primary)
- `aria-current="page"`: Yes — required on active link

**Hover state (desktop):**
- Link color: transitions to forest green, 150ms ease
- Underline: appears on hover, same 2px style as active
- CTA button hover: darken forest green by 10%, subtle scale (1.01)

**Focus state (keyboard):**
- Focus ring: 2px solid forest green, 2px offset, `:focus-visible`
- Visible on warm white header background — confirm 3:1 contrast ratio

**Selected state:** Same as active state

**Dropdown open state:** N/A — no dropdowns

---

#### Section 6 — Optional Navigation Mechanics

**Announcement bar:** Not included — no time-sensitive content identified in upstream inputs.

**Dropdowns:** Not included — sitemap is flat, no child pages confirmed.

**Mega menu:** Not included — site complexity does not warrant it.

**Breadcrumbs:** Not included — flat sitemap, breadcrumbs add no wayfinding value on a 7-page flat structure.

**In-page jump navigation:**
- FAQ page: Recommend a simple horizontal anchor strip for FAQ category sections (e.g. "Jump to: Timelines · Pricing · Process · Materials") if FAQ content is confirmed to be long-form.
- Assign to page-level agents — this is a page-level decision. Flag as optional enhancement.

---

#### Section 7 — Accessibility Notes

**Skip link:** Yes — first focusable element, `<a href="#main-content">Skip to main content</a>`, visible on focus only.

**Semantic structure:**
- `<nav aria-label="Main navigation">` wrapping the header nav
- `<ul>/<li>/<a>` for all nav links
- Active link: `aria-current="page"`

**Mobile menu button:**
- `<button aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation menu">`
- `aria-expanded` toggles true/false
- Focus returns to hamburger button on menu close
- Focus trapped inside open overlay
- Escape key closes menu

**Focus rings:**
- All nav elements: `:focus-visible`, 2px solid forest green, 2px offset
- Test against: warm white header background, sticky header with shadow, mobile overlay background

**Contrast:**
- Nav links on warm white: design system must confirm forest green meets 4.5:1 — flag if unconfirmed
- CTA button text (white) on forest green: confirm 4.5:1

**Motion:**
- `prefers-reduced-motion: reduce` — overlay appears instantly (no fade), header height change instant, menu items appear without transition

**Additional notes:** None — standard local service nav, no unusual interaction patterns.

---

#### Section 8 — Implementation Notes

**Component structure:**
```
<Header>
  <SkipLink />
  <nav aria-label="Main navigation">
    <Logo />
    <NavLinks />
    <CTAButton label="Get a Free Estimate" href="/contact" />
    <HamburgerButton />
  </nav>
  <MobileMenuOverlay />
</Header>
```

**Component names:**
- `components/layout/Header.tsx` — Client (scroll listener for sticky)
- `components/layout/NavLinks.tsx` — Server (static list from data file)
- `components/layout/MobileMenuOverlay.tsx` — Client (isMenuOpen state)
- `components/layout/SkipLink.tsx` — Server
- `components/ui/CTAButton.tsx` — reuse from design system

**Component type:** Header = Client (scroll-driven sticky); NavLinks = Server

**State:**
```typescript
const [isScrolled, setIsScrolled] = useState(false)
const [isMenuOpen, setIsMenuOpen] = useState(false)
```

**Sticky CSS:**
```css
.header { position: sticky; top: 0; z-index: 100; transition: height 200ms ease, box-shadow 200ms ease; }
.header { height: 80px; }
.header.scrolled { height: 64px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
```

**Mobile overlay animation:**
```css
.mobile-overlay { opacity: 0; pointer-events: none; transition: opacity 200ms ease; }
.mobile-overlay[data-open="true"] { opacity: 1; pointer-events: all; }
@media (prefers-reduced-motion: reduce) { .mobile-overlay { transition: none; } }
```

**Data file:** `data/site.ts` → `siteConfig.navigation`
```typescript
navigation: {
  links: [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ],
  cta: { label: 'Get a Free Estimate', mobileLabel: 'Free Estimate', href: '/contact' }
}
```

**Active page:** Next.js `usePathname()` — match against `link.href`, apply `aria-current="page"` and `active` CSS class.

---

#### Section 9 — Escalation Flags

| Flag | Type | Reason | Who resolves | When needed |
|---|---|---|---|---|
| Contact page placement | Client decision | Contact excluded from desktop primary nav — CTA button handles this path. If client wants a visible "Contact" link in desktop nav, add as 6th item (minor impact). | Client / 00 | Before Phase 2 |
| Forest green contrast ratio | Missing input | Forest green meets 4.5:1 assumed — needs confirmation against warm white background from design system token definitions | 06-design-system output | Before Phase 3 |
| FAQ jump navigation | Scope boundary | In-page anchor navigation on FAQ page deferred to page-level agent — confirm if FAQ content warrants it | Page-level agent (12–17) | Before Phase 3 FAQ page |

**Assumptions made:**
- "Home" omitted from desktop nav — logo links to homepage
- "Contact" omitted from desktop nav — CTA button handles this action
- Logo label shortened to "Peak Ridge" on mobile — confirm with client/brand agent
- "Free Estimate" used as shortened CTA label in mobile header — functionally equivalent to full label

---
---

## Example 2 — Meridian Legal Group: Authoritative · Medium with Dropdown · Professional Services

### Upstream input summary
- **Business:** Mid-size law firm — family law, estate planning, civil litigation — Chicago metro
- **Primary CTA:** Schedule a Consultation → /schedule
- **Sitemap:** Home, Practice Areas (Family Law, Estate Planning, Civil Litigation — 3 sub-pages), Our Team, Results, FAQ, Contact (10 pages: 1 parent + 3 children + 5 top-level)
- **Primary audience:** Chicago-area adults facing a legal situation — some urgent (divorce, custody), some planned (estate planning)
- **Trust barrier:** "Legal fees are high and outcomes uncertain — I need to trust this firm before I even pick up the phone."
- **Brand register:** Authoritative, confidence: very high, warmth: low-medium, formality: high
- **Design system:** White header, deep navy primary, gold accent, serif display + sans body
- **Wireframe:** Clean header, logo left, nav center-right, CTA far right

---

### NAVIGATION FEATURE PACKAGE
**Project:** Meridian Legal Group
**Stage:** 11-navigation — output complete
**Nav complexity:** Medium with dropdown
**Page count:** 10 pages (1 parent with 3 children)
**Primary CTA:** Schedule a Consultation → /schedule
**Prior-stage quality:** Strong

---

#### Section 1 — Navigation Strategy Summary

**The navigation's primary job on this site:**
This navigation must make Chicago-area adults facing a legal situation quickly identify that Meridian handles their specific type of case — and make scheduling a consultation feel like the clear, natural next step.

**Primary orientation challenge:**
Practice areas vary significantly in audience intent (urgent divorce vs. planned estate work); the navigation must group these under Practice Areas without forcing the user to guess which page to visit first.

**Brand register:** Authoritative

**Nav complexity selected:** Medium with dropdown
**Reason:** 3 practice area sub-pages exist in the confirmed sitemap — grouping them under "Practice Areas" with a dropdown is cleaner than listing all three at the top level (which would bloat the nav to 7+ items and create visual competition).

**Why this navigation direction is strategically correct:**
A law firm's navigation must project confidence and clarity. A clean header with a single dropdown for practice areas + four other top-level items signals organized, professional competence. Hiding practice areas behind the dropdown does not reduce access — it reduces clutter and forces clear labeling.

---

#### Section 2 — Desktop Navigation Structure

**Header layout:**
```
[ Meridian Legal Group ]   Practice Areas ▾ · Our Team · Results · FAQ     [ Schedule a Consultation → ]
```

**Logo:**
- Position: Left
- Links to: /
- Treatment: Business name in brand serif typeface — no icon/mark needed at this register

**Primary nav links:**
| Label | Destination | Notes |
|---|---|---|
| Practice Areas | /practice-areas | Dropdown trigger — parent page + 3 children |
| Our Team | /team | Not "Attorneys" or "Lawyers" — "Our Team" is warmer and includes any support staff highlighted |
| Results | /results | Not "Case Results" or "Track Record" — "Results" is confident and specific |
| FAQ | /faq | Earns top-level slot — high-anxiety audience has many questions |

**Practice Areas dropdown children:**
| Label | Destination |
|---|---|
| Family Law | /practice-areas/family-law |
| Estate Planning | /practice-areas/estate-planning |
| Civil Litigation | /practice-areas/civil-litigation |

**CTA button:**
- Label: `Schedule a Consultation`
- Destination: `/schedule`
- Style: Solid filled, deep navy (primary brand color)
- Position: Far right of nav bar

**Utility links:** N/A — single audience

**Announcement bar:** N/A — law firm register; an announcement bar risks looking promotional, which undermines trust at this brand level.

**What was excluded from desktop nav and why:**
- Contact: excluded — CTA button ("Schedule a Consultation") drives to the scheduling flow. Contact page linked from footer and from CTA destination page.
- Home: excluded — logo links to homepage; omitting "Home" from a professional services nav is standard.

---

#### Section 3 — Mobile Navigation Structure

**Mobile header bar (always visible):**
```
[ Meridian ]                              [ Consult ]  [ ☰ ]
```
*(Logo: firm name shortened to "Meridian" on mobile; CTA shortened to "Consult" for header fit)*

**Menu pattern:** Slide-in drawer from right
**Reason:** Authoritative brand register — a full-screen overlay feels less formal and more disruptive; a composed drawer is more professional and contained.

**Open menu structure:**
```
Home
Practice Areas
  Family Law
  Estate Planning
  Civil Litigation
Our Team
Results
FAQ
Contact
──────────────────────────
[ Schedule a Consultation → ]
```

**Grouping logic:** Practice Areas expanded via accordion on mobile — chevron on right side of "Practice Areas" row, children indent on tap

**CTA handling:**
- In header bar: "Consult" — abbreviated label (5 characters, fits 44px button width)
- In open menu: Full label "Schedule a Consultation" — full-width, deep navy, bottom of drawer

**Utility link treatment:** N/A

**Nested menu behavior:**
- "Practice Areas" shows a right-pointing chevron (›)
- Tap to expand accordion — children appear indented below parent with 200ms ease
- Collapse on second tap
- Only one parent expanded at a time

**Touch targets:** All items 48px height minimum. Accordion expand/collapse: full-row tap target (not just the chevron).

**Announcement bar behavior on mobile:** N/A

---

#### Section 4 — Header / Sticky Behavior

**Sticky behavior:** Yes
**Reason:** Legal clients research extensively — FAQ, Results, and team pages are all long-scroll. "Schedule a Consultation" must remain accessible without the user scrolling back to top.

**State 1 — Initial load:**
- Height: 88px (slightly taller — authoritative register, more breathing room)
- Background: white
- Shadow: 1px bottom border in light gray
- All elements visible

**State 2 — Scroll triggered (at ~80px):**
- Header locks: `position: sticky; top: 0`
- Height: 88px → 68px, 200ms ease
- Logo: proportional scale
- All nav links and CTA: remain visible
- Shadow: soft box-shadow replaces border (0 2px 12px rgba(0,0,0,0.06))

**State 3 — Sticky maintained:**
- No further changes

**Mobile sticky behavior:**
- Same ~80px trigger
- Mobile header: "Meridian" logo + "Consult" CTA + Hamburger
- Height: 64px sticky

**CTA on scroll:** Always visible, both desktop and mobile.

---

#### Section 5 — Navigation State Rules

**Active state:**
- 2px bottom border in gold (accent color) — not navy — distinguishes active from hover which uses navy
- Font weight: semibold
- `aria-current="page"` on active link

**Hover state (desktop):**
- Link: transitions to deep navy, 150ms ease — underline appears in navy
- "Practice Areas" parent: same hover treatment; chevron rotates 180° when dropdown opens
- CTA button hover: navy darkens ~10%

**Focus state:**
- 2px solid navy, 2px offset, `:focus-visible`
- Test against white header background

**Selected state:** Same as active (gold bottom border)

**Dropdown open state:**
- "Practice Areas" parent: gains gold bottom border (same as active) while dropdown is open
- Dropdown panel: appears 200ms ease, translateY(-4px → 0), white background, navy border top
- Chevron: rotates 90° to point down while open

---

#### Section 6 — Optional Navigation Mechanics

**Announcement bar:** Not included — law firm register; promotional bar tone is misaligned with brand trust model.

**Dropdowns:**
- Practice Areas: yes
- Trigger: hover (desktop), tap (mobile/keyboard)
- Children: Family Law · Estate Planning · Civil Litigation
- Dropdown panel: white background, 1px navy left border (authority signal), items in nav typography
- Open: 150ms ease fadeIn + translateY(-4px → 0)
- Close: click outside, Escape, hover away (150ms delay), Tab past last item

**Mega menu:** Not included — 3 children is below the threshold, a standard dropdown is appropriate.

**Breadcrumbs:** Include on practice area sub-pages only.
- Format: `Home / Practice Areas / Family Law`
- Separator: `/`
- Position: Below header, above page hero section
- Current page not linked, visually subdued (label-size type, gray)

**In-page jump navigation:** Not included at this stage — defer to page-level agents for FAQ and Results pages if long-form content is confirmed.

---

#### Section 7 — Accessibility Notes

**Skip link:** Yes — `<a href="#main-content">Skip to main content</a>`, first focusable element.

**Semantic structure:**
- `<nav aria-label="Main navigation">`
- `<ul>/<li>/<a>` for all nav links
- `aria-current="page"` on active link

**Mobile menu button:**
- `<button aria-expanded aria-controls="mobile-drawer" aria-label="Open navigation menu">`
- Focus trapped in drawer when open; Escape closes; focus returns to trigger on close

**Dropdown:**
- "Practice Areas" trigger: `<button aria-expanded aria-haspopup="true">`
- Dropdown panel: `role="menu"` with `aria-labelledby`
- Items: `role="menuitem"`
- Keyboard: Enter opens, Arrow keys navigate, Escape closes, Tab exits

**Focus rings:** `:focus-visible`, 2px solid navy, 2px offset. Tested against white header background.

**Contrast:**
- Deep navy on white: typically 16.75:1 — comfortably exceeds AA
- Gold accent on white: must verify — gold may not reach 4.5:1 for text. Use gold only for decorative border, not for text. Confirm with design system.

**Motion:** `prefers-reduced-motion` — all transitions disabled; dropdown and drawer appear/disappear instantly.

**Breadcrumb accessibility:**
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/practice-areas">Practice Areas</a></li>
    <li aria-current="page">Family Law</li>
  </ol>
</nav>
```

---

#### Section 8 — Implementation Notes

**Component structure:**
```
<Header>
  <SkipLink />
  <nav aria-label="Main navigation">
    <Logo />
    <NavLinks />              ← includes Practice Areas dropdown trigger
    <DropdownMenu />          ← absolutely positioned, controlled by NavLinks
    <CTAButton />
    <HamburgerButton />
  </nav>
  <MobileMenuDrawer />
</Header>
```

**Data file:**
```typescript
// data/site.ts
navigation: {
  links: [
    {
      label: 'Practice Areas',
      href: '/practice-areas',
      children: [
        { label: 'Family Law', href: '/practice-areas/family-law' },
        { label: 'Estate Planning', href: '/practice-areas/estate-planning' },
        { label: 'Civil Litigation', href: '/practice-areas/civil-litigation' },
      ]
    },
    { label: 'Our Team', href: '/team' },
    { label: 'Results', href: '/results' },
    { label: 'FAQ', href: '/faq' },
  ],
  cta: { label: 'Schedule a Consultation', mobileLabel: 'Consult', href: '/schedule' }
}
```

**Active page:** `usePathname()` — match against both parent and child hrefs. Practice Areas parent is "active" if any child path matches.

**Dropdown state:** `const [openDropdown, setOpenDropdown] = useState<string | null>(null)`

---

#### Section 9 — Escalation Flags

| Flag | Type | Reason | Who resolves | When needed |
|---|---|---|---|---|
| Gold accent contrast for text use | Design system issue | Gold may fail 4.5:1 on white — do not use as text color; restrict to decorative borders and non-text elements | 06-design-system | Before Phase 2 |
| CTA label on mobile | Client decision | Full "Schedule a Consultation" shortened to "Consult" in mobile header. If client requires full label, reduce font size or use icon-only + label in drawer. | Client | Before Phase 2 |
| Contact page structure | Scope boundary | Contact page content and form structure deferred to page-level agent. This navigation package only confirms Contact is footer-primary + mobile-menu present. | Page-level agent | Before Phase 3 |

**Assumptions made:**
- Contact is footer-primary — CTA handles the primary consultation path
- "Results" chosen over "Case Results" — cleaner, more confident label at authoritative register
- "Our Team" chosen over "Attorneys" — warmer without being informal
- Announcement bar excluded — risk to brand trust register outweighs any promotional benefit
- Breadcrumbs on practice area sub-pages only — top-level pages do not need them
