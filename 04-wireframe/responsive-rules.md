# Responsive Rules

This file defines how desktop and mobile wireframe notes should differ. These are structural rules — not visual rules. Do not specify colors, fonts, sizing units, or breakpoints. Specify what changes in layout structure, stacking order, content grouping, CTA treatment, and interaction priority between desktop and mobile.

---

## Purpose of Responsive Wireframe Notes

The wireframe PRD must include both desktop and mobile notes for every page. These notes exist so that:

- A designer can understand structural intent at both scales before building the visual system
- A developer or AI coder can implement correct layout behavior without guessing
- Decisions made at desktop scale that break on mobile are caught before design begins

The level of detail required is **structural, not pixel-level**. Write at the level of section behavior, stacking order, and interaction priority — not spacing values, breakpoints, or component dimensions.

---

## Core Principle: Mobile Is Not a Shrunk Desktop

Mobile wireframe notes should reflect intentional structural decisions, not just "stack everything vertically." For each page, ask:

- **What is the most important action on mobile?** It should be the easiest to take.
- **What content is cut or reduced on mobile?** Dense sections need thinning — not just stacking.
- **What interaction changes?** Dropdowns, accordions, galleries, and navigation all behave differently on touch.
- **What order changes?** Two-column desktop layouts always require a conscious mobile stacking decision.

---

## What Always Changes Between Desktop and Mobile

### Navigation
- Desktop: Full horizontal nav bar with links visible; CTA button visible in header
- Mobile: Hamburger menu or similar collapsed pattern; CTA button remains visible outside the menu (not hidden behind hamburger) — usually a sticky phone/call button or prominent button in the header
- Do not specify visual design of the mobile nav — specify that it collapses and that the primary CTA is always accessible

### Hero Sections
- Desktop: Often two-column — text on left, image or visual on right
- Mobile: Always stacked — headline first, then supporting text, then CTA, then image (image moves below or becomes a background)
- On mobile, the hero must be usable with only 2–3 lines of headline text and a single CTA button visible without scrolling

### Column Layouts
- Desktop: 2- or 3-column grids (service cards, testimonial cards, process steps, feature blocks)
- Mobile: Always single-column stacked unless explicitly noted otherwise
- Do not leave a 3-column grid as 3 columns on mobile — state the intended mobile stack

### CTA Buttons
- Desktop: CTA button in section, inline with content
- Mobile: If the CTA is the primary action on a high-intent page, specify that it should be sticky or pinned to the bottom of the viewport — this is a structural decision, not a visual one
- Note which pages warrant a sticky CTA on mobile and which do not

### Forms
- Desktop: Form may sit alongside other content (e.g., contact form beside a map or address block)
- Mobile: Form is always full-width, stacked alone — never beside other content
- Form fields stack vertically on mobile — do not try to maintain two-column field layout

### Galleries and Image Grids
- Desktop: 2- or 3-column grid
- Mobile: 2-column grid (not single-column — images are the content, density is fine)
- Note if a gallery should use horizontal scroll on mobile or a tap-to-view fullscreen behavior

### Maps
- Desktop: Full-width or half-width map block
- Mobile: Map may be reduced in height, or replaced with a static image with a "view in maps" link — note which approach is preferred

### Process / Steps
- Desktop: Horizontal numbered steps with connector lines or icons
- Mobile: Vertical stacked numbered steps — horizontal layouts do not stack cleanly

### FAQs
- Desktop: Accordion or two-column Q&A layout
- Mobile: Accordion only — always collapsed by default. Two-column Q&A layouts do not work on mobile.

---

## What Does NOT Change Between Desktop and Mobile

- Section order (sections do not reorder between breakpoints in standard cases — see exceptions below)
- Which sections appear (do not remove sections for mobile; reduce their density instead)
- CTA hierarchy (primary CTA remains primary; secondary remains secondary)
- Proof placement logic (proof that is near the hero on desktop stays near the hero on mobile)

---

## Exceptions: When Section Order Changes on Mobile

These cases justify reordering content on mobile:

- **Contact page:** On mobile, the form should appear first — before any map or address block. Desktop may show them side-by-side, but mobile should prioritize the form.
- **Two-column sections with image + text:** On mobile, the decision of which comes first (image or text) matters. In most cases, text should come first on mobile. For proof-forward pages (gallery, portfolio), image can come first.
- **Trust bars:** On desktop, a trust bar may sit immediately below the hero as a horizontal element. On mobile, it may be reduced or collapsed — a single most-important trust item is sufficient if the full bar is too dense.

---

## How to Write Mobile Notes in Wireframe PRDs

Write mobile notes at the section level. For each page, describe what changes — do not repeat what stays the same. Use concise structural statements.

**Good mobile note:**
> "Mobile: Hero stacks — headline → supporting text → CTA → image. Sticky call-to-action bar (phone number + button) pinned to bottom of viewport throughout the page. Service card grid collapses to single-column. Testimonial cards scroll horizontally."

**Weak mobile note:**
> "Mobile: Responsive layout. Cards stack vertically."

**What to include in mobile notes:**
- Stacking order for all multi-column desktop layouts (explicitly state the order)
- Whether a sticky CTA is warranted and what it contains
- How forms are handled (full-width, stacked fields)
- How galleries or image grids are handled
- How navigation collapses and whether the primary CTA remains accessible
- Any section that should be reduced in content density on mobile (not removed — reduced)

**What NOT to include in mobile notes:**
- Spacing values or breakpoints
- Font sizes
- Colors or visual treatment
- Pixel dimensions
- Specific component library choices

---

## Sticky CTA Rules for Mobile

A sticky CTA bar on mobile is warranted when:
- The page's primary goal is conversion (contact page, service pages, city pages, homepage)
- The primary CTA mechanism is a phone call — click-to-call deserves persistent accessibility on mobile
- The page is long enough that the hero CTA scrolls out of view

A sticky CTA bar is NOT warranted on:
- Thank-you pages
- Privacy policy / terms
- Blog posts (if applicable)
- Gallery page (the CTA at the bottom is sufficient)

The sticky CTA bar contains: primary CTA button (call or form) + optionally a phone number. Keep it minimal.

---

## Mobile Content Density Guidelines

Dense content sections on desktop should be thinned for mobile — not by removing sections, but by reducing the amount of content shown initially:

- **Testimonial blocks:** Show 2 testimonials on mobile instead of 3. Use "read more" or horizontal scroll for additional ones.
- **Service grids:** Single-column stack. 6 service cards become 6 stacked blocks — acceptable on mobile because users scroll intentionally.
- **Process steps:** 4–6 steps on mobile stack well. More than 6 may warrant a "see full process" expand/collapse.
- **FAQ:** Always accordion on mobile. Default collapsed.
- **Stats or trust bar:** Reduce to the 2–3 most important items. A full 5-item trust bar in a single row does not work on mobile.

---

## Desktop Layout Conventions to Specify

For desktop wireframe notes, explicitly state the layout convention where it matters:

| Convention | When to specify |
|---|---|
| Two-column (text + image) | Hero sections, feature blocks |
| Three-column card grid | Service grids, testimonial blocks, team grids |
| Full-width section | Trust bars, CTA bands, gallery blocks |
| Split layout (form + info) | Contact page |
| Sticky header behavior | Nav with CTA button |

You do not need to specify layout for sections that are clearly single-column by nature (process steps, FAQ, single-column content sections).

---

## Desktop Notes vs. Mobile Notes — Format Guidance

For each page in the wireframe PRD, write desktop and mobile notes as separate paragraphs, not interleaved. Keep each note focused on what is structurally distinct at that scale.

**Desktop note structure:**
> "Desktop: [Layout convention for multi-column sections]. [Any sticky or fixed-position behavior]. [Content density notes]. [Any section-specific layout decision that a designer must know]."

**Mobile note structure:**
> "Mobile: [Stacking order for key sections]. [Sticky CTA — yes/no and content]. [Any content reductions]. [Navigation collapse behavior]. [Any section-specific mobile behavior — gallery, forms, accordion, etc.]."

Keep both notes to 3–6 sentences per page. If the page is structurally simple, 1–2 sentences is fine. If the page has multiple complex sections, be more explicit.
