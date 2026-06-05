# Stripe Homepage — Technical Breakdown
> Reverse-engineered from stripe.com/en-ca source code, CSS bundles, and JS chunks.
> Every detail below was extracted from live production files.

---

## 1. Framework & Infrastructure

**Framework:** Next.js (SSR)
- Path pattern: `b.stripecdn.com/mkt-ssr-statics/assets/_next/static/`
- Chunks served from a CDN (`b.stripecdn.com`) separate from the main domain
- HTML is server-rendered — full content in initial response, no loading skeletons on first paint
- React 17 confirmed in `js.stripe.com/v3` payload

**CSS Architecture:** CSS Cascade Layers
```css
@layer reset, base, app;
```
Three explicit layers in strict priority order. This means any `app`-layer rule wins over `base` without needing specificity hacks — a major reason their styles are clean and predictable.

**CSS Modules** for component isolation (scoped hashes):
```
Notifications_NotificationCenter__CDRbw
```

**BEM naming** for multi-element components:
```
billing-plan-graphic__background-gradient-1
hero-wave-animation__canvas
case-study-card__mediaLogo
```

---

## 2. Design System — HDS (Stripe's Internal System)

All tokens use the `--hds-` prefix, organized in a three-tier semantic architecture:

```
Core Primitives → Semantic Aliases → Component Tokens
--hds-color-core-brand-600 → --hds-color-action-bg-solid → --hds-color-button-primary-bg
```

### Color Token Architecture
```css
/* Core brand scale */
--hds-color-core-brand-25
--hds-color-core-brand-50
--hds-color-core-brand-75
--hds-color-core-brand-100
--hds-color-core-brand-200
--hds-color-core-brand-400
--hds-color-core-brand-600   /* primary action */
--hds-color-core-brand-700   /* hover state */

/* Semantic aliases — what components actually reference */
--hds-color-action-bg-solid:        var(--hds-color-core-brand-600)
--hds-color-action-bg-solidHover:   var(--hds-color-core-brand-700)
--hds-color-action-text-onSolid:    var(--hds-color-util-white)
--hds-color-button-primary-bg:      var(--hds-color-action-bg-solid)
--hds-color-button-primary-bgHover: var(--hds-color-action-bg-solidHover)

/* Surface system */
--hds-color-surface-bg-quiet
--hds-color-surface-bg-subdued
--hds-color-surface-border-quiet

/* Heading hierarchy */
--hds-color-heading-solid:   var(--hds-color-core-neutral-990)
--hds-color-heading-subdued: var(--hds-color-core-neutral-500)
```

### Accent Color Modes
Each icon/graphic has a named accent mode with a 3-stop gradient:
```css
/* Lemon */
--hds-color-accentColorMode-lemon-icon-gradientStart: #ffd552
--hds-color-accentColorMode-lemon-icon-gradientMiddle: #ffaf2d
--hds-color-accentColorMode-lemon-icon-gradientEnd: #ff9014

/* Magenta */
--hds-color-accentColorMode-magenta-icon-gradientStart: #f98bf9
--hds-color-accentColorMode-magenta-icon-gradientMiddle: #f96bee
--hds-color-accentColorMode-magenta-icon-gradientEnd: #b262f9

/* Orange */
--hds-color-accentColorMode-orange-icon-gradientStart: #fe8c2d
--hds-color-accentColorMode-orange-icon-gradientMiddle: #fd6252
--hds-color-accentColorMode-orange-icon-gradientEnd: #fd5d7c
```

### Spacing Scale
Logical CSS spacing using the HDS core scale:
```css
--hds-space-core-25   → ~2px
--hds-space-core-50   → ~4px
--hds-space-core-75   → ~6px
--hds-space-core-100  → ~8px
--hds-space-core-200  → ~16px
--hds-space-core-300  → ~24px
--hds-space-core-400  → ~32px
--hds-space-core-800  → ~64px
--hds-space-core-900  → ~72px
--hds-space-core-1100 → ~88px

/* Layout-level spacing */
--hds-space-layout-gap
--hds-space-layout-content-margin
--hds-canary-layout-content-maxWidth-borders
```

---

## 3. Typography

### Fonts
```css
/* Display + body — Sohne Variable by Klim Type Foundry */
@font-face {
  font-family: sohne-var;
  src: url(Sohne.cb178166.woff2) format("woff2-variations");
  font-weight: 1 1000;           /* full weight axis */
  font-display: block;           /* desktop: block to prevent FOUT */
}
/* Mobile override: font-display: swap */

/* Code blocks */
@font-face {
  font-family: SourceCodePro;
  src: url(SourceCodePro-Medium.f5ba3e6a.woff2) format("woff2");
  font-weight: 500;
  font-display: swap;
}

/* Stack */
font-family: sohne-var, "Helvetica Neue", Arial, sans-serif;
```

Both fonts are **preloaded** in `<head>`:
```html
<link rel="preload" href="https://b.stripecdn.com/.../Sohne.cb178166.woff2"
      as="font" type="font/woff2" crossorigin="anonymous"/>
```

### Hero Type Scale (responsive via CSS custom properties)
```css
:root {
  --hero-font-lang-large: 2.125rem;  /* mobile */
}
@media (min-width: 640px) {
  --hero-font-lang-large: 2.5rem;    /* tablet */
}
@media (min-width: 940px) {
  --hero-font-lang-large: 3rem;      /* desktop */
}
```

### Font Features
```css
.tabular-nums { font-feature-settings: "tnum"; font-variant-numeric: tabular-nums; }
.tabular-nums--tight { letter-spacing: -0.03em; }
sup { font-feature-settings: "sups" 1; }  /* true superscript, not fake */
```

---

## 4. Hero Wave Animation

The iconic animated gradient background is a **custom Canvas 2D animation** — not CSS, not WebGL, not Three.js.

### HTML Structure
```html
<div class="hero-wave-animation">
  <div class="hero-wave-animation__layout">
    <div class="hero-wave-animation__contents">
      <div class="hero-wave-animation__canvas">
        <!-- JavaScript injects <canvas> here at runtime -->
      </div>
      <div class="hero-wave-animation__static">
        <!-- Fallback PNG shown until canvas is ready -->
        <img src="wave-fallback-desktop.png" />
      </div>
    </div>
  </div>
</div>
```

### Canvas Reveal Strategy
```css
/* Static fallback visible by default */
.hero-wave-animation__static {
  transition: opacity 0.25s linear;
}
/* JS adds --drawn class once canvas first renders */
.hero-wave-animation--drawn .hero-wave-animation__static {
  opacity: 0;
}
```

The fallback PNG is served from Contentful CDN at three sizes:
- Mobile: 624×975px
- Tablet: 1248×975px
- Desktop: 1392×975px

### Canvas Sizing
```css
@media (min-width: 1264px) {
  .hero-wave-animation__contents {
    left: 250px;
    width: 110%;   /* intentionally bleeds right */
  }
}
```

---

## 5. Color Palette (Actual Hex Values)

Extracted from production CSS:

| Role | Hex |
|------|-----|
| Deep navy (page bg) | `#0a2540` |
| Darkest bg | `#061b31` |
| Dark section bg | `#0d1738` |
| Brand purple (primary) | `#7232f1` |
| Purple action | `#533afd` |
| Violet | `#6d2bf0`, `#4304ea` |
| Blue-purple | `#4032c8`, `#1318c1` |
| Gradient magenta | `#fb76fa` |
| Gradient gold | `#ffcf5e` |
| Green success | `#00d66f`, `#15be53` |
| Teal accent | `#02bcf5` |
| Body text (dark bg) | `#fff` |
| Body text (light bg) | `#424770` |
| Subdued text | `#667691` |
| UI border | `#d8dee4`, `#e7ecf1` |
| White surface | `#fff` |

---

## 6. Gradients

### Bento Section Blob Gradients
These are the soft glowing colored orbs behind product screenshots:
```css
/* Left blob */
background: radial-gradient(50% 50% at 50% 50%,
  var(--bento-left-blob) 23.56%,
  transparent 100%
);

/* Right blob */
background: radial-gradient(50% 50% at 50% 50%,
  var(--bento-right-blob) 27.4%,
  transparent 100%
);
```
The blob color is a CSS variable set per-section, so each section gets a different color theme without duplicating gradient code.

### Agentic Commerce Border Spin
The animated rainbow border on the agentic commerce card:
```css
/* Conic gradient spinning border */
background: conic-gradient(from 0deg, #7232f1 0, #fb76fa 33%, #ffcf5e 66%, #7232f1 100%);

@keyframes agentic-commerce-graphic-border-spin {
  to { transform: rotate(360deg); }
}
```
Implemented as a pseudo-element behind the card, spinning continuously.

### Stripe's Brand Gradient (icons/logos)
```css
background: linear-gradient(90deg, #7232f1 3.13%, #fb76fa 50%, #ffcf5e);
```

### Interactive Cursor Gradient
Used on hover interactions — the gradient follows the mouse via CSS variables set by JS:
```css
background: radial-gradient(
  circle at var(--gradient-x, 50%) var(--gradient-y, 50%),
  rgba(255, 46, 222, 0.3),
  transparent 70%
);
```

### Overlay Fade (mask carousels and sections)
```css
background: linear-gradient(90deg, #fff, hsla(0,0%,100%,0));   /* left fade */
background: linear-gradient(90deg, hsla(0,0%,100%,0), #fff);   /* right fade */
background: linear-gradient(180deg, hsla(0,0%,100%,0), #fff);  /* bottom fade */
```

### Sessions Event Gradient
```css
background: linear-gradient(203deg, #ffa319 9.93%, #fd6252 82.88%, #fd5b86 131.32%);
```

---

## 7. Animations

### Universal Easing
Stripe uses one easing function for almost everything:
```css
cubic-bezier(0.25, 1, 0.5, 1)   /* fast in, slow out — feels snappy but not harsh */
```
Applied to buttons, links, nav arrows, logo fills, and hover states at `0.3s` duration.

### Button Transitions
```css
.hds-button {
  transition:
    background-color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    color            0.3s cubic-bezier(0.25, 1, 0.5, 1),
    border           0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
```

### Nav Hover Arrow (the `→` that slides in on link hover)
```css
@keyframes nav-hover-arrow-in {
  0%   { opacity: 0; transform: translateX(-3px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes nav-hover-arrow-out {
  0%   { opacity: 1; }
  100% { opacity: 0; }
}

.navigation-hover-arrow svg {
  visibility: hidden;
  transition: visibility 0ms linear 0.3s;
  animation-name: nav-hover-arrow-out;
  animation-duration: 0.15s;
  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  animation-fill-mode: forwards;
}

:not([disabled]):where(:hover) > .navigation-hover-arrow svg {
  animation-name: nav-hover-arrow-in;
  animation-duration: 0.3s;
  visibility: visible;
  transition-delay: 0ms;
}
```
Note: only fires inside `@media (hover: hover)` — touch devices get no animation.

### Carousel Card Hover Scale (Case Study carousel)
Physics-based — card squishes and the image counter-scales to stay full-bleed:
```css
.case-study-card__media {
  transform: translate3d(var(--carousel-item-hover-shift, 0), 0, 0)
             scaleX(var(--carousel-item-hover-scale, 1));
  transition: transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1);  /* ease-out-quart */
  will-change: transform;
}

/* Image counter-scales to stay full size inside the shrinking container */
.case-study-card__image {
  transform: translate3d(-50%, 0, 0) scaleX(calc(1 / var(--carousel-item-hover-scale, 1)));
  transition: transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
```
The `--carousel-item-hover-scale` variable is driven by JavaScript tracking scroll position.

### Mobile Carousel Parallax
```css
@media (max-width: 639px) and (prefers-reduced-motion: no-preference) {
  .case-study-card__image {
    --parallax-offset: calc(-32px * var(--carousel-item-progress, 0));
    transform: translate3d(calc(-50% + var(--parallax-offset)), 0, 0);
  }
  .case-study-card__title {
    transform: translate3d(calc(40px * var(--carousel-item-progress, 0)), 0, 0);
  }
  .case-study-card__link {
    transform: translate3d(calc(60px * var(--carousel-item-progress, 0)), 0, 0);
    opacity: calc(1 - max(var(--carousel-item-progress), -1 * var(--carousel-item-progress)));
  }
}
```
Each carousel item receives a `--carousel-item-progress` CSS variable (set by JS) — a number from -1 to 1 representing how far off-center it is. CSS alone handles all visual effects from there.

### Bento Section Overlay Gradient Animation
```css
@keyframes bento-overlay-gradient-opacity-animation { /* fade in/out */ }
```

### Reduced Motion
Every animation is wrapped:
```css
@media (prefers-reduced-motion: no-preference) {
  /* all transitions and animations here */
}
```

---

## 8. Layout System

### Responsive Grid (CSS Custom Properties-driven)
```css
.columns {
  display: grid;
  column-gap: var(--hds-space-layout-gap);
  grid-template-columns: repeat(var(--columns-count-mb, 1), minmax(0, 1fr));
}

@media (min-width: 640px) {
  .columns { grid-template-columns: repeat(var(--columns-count-tb, 2), minmax(0, 1fr)); }
}

@media (min-width: 940px) {
  .columns { grid-template-columns: repeat(var(--columns-count-dt, var(--columns-count-tb, 2)), minmax(0, 1fr)); }
}
```
Column count is set inline per-instance: `style="--columns-count-dt: 3"`. No Tailwind, no utility classes — pure custom properties.

### Breakpoints
| Name | Value | Purpose |
|------|-------|---------|
| `mb` | max 639px | Mobile |
| `tb` | min 640px | Tablet |
| `dt` | min 940px | Desktop |
| `lg` | min 1264px | Large desktop |

### Container Queries
```css
.sessions-banner {
  container-type: inline-size;
  container-name: sessions-banner;
}

@container sessions-banner (min-width: 400px) {
  .sessions-banner__card { flex-direction: row; }
}
```
Components reflow based on their own width, not the viewport.

### CSS Logical Properties Throughout
```css
margin-block-start, margin-inline, padding-block, padding-inline-end
/* Never margin-top/left/bottom/right */
```

### Hero Layout
```css
.hero-section__layout {
  min-height: min(68svh, 826px);   /* svh = small viewport height — accounts for mobile browser chrome */
}
```

---

## 9. Components

### `dom-graphic` — Scaled Product UI System
All product screenshots/illustrations are scaled from a fixed source size to fill their container:
```css
.dom-graphic {
  --graphic-source-width: 0;
  --graphic-source-height: 0;
  --graphic-aspect-ratio: 1/1;
  --graphic-scale: 1;
  position: relative;
  aspect-ratio: var(--graphic-aspect-ratio);
}
.dom-graphic__content {
  position: absolute;
  width: var(--graphic-source-width);
  height: var(--graphic-source-height);
  transform: scale(var(--graphic-scale));
  transform-origin: top left;
}
```
JS calculates `--graphic-scale` by dividing rendered width by source width. This lets the UI stay pixel-perfect at the design size and scale up/down mathematically.

### `squeezy-carousel` — Canvas Carousel
The "What's happening" news carousel uses a `<canvas>` element for its animated transitions — not CSS transforms. Likely draws the transition curves directly to canvas for the "squeezy" physics effect.

### `case-study-carousel` — Physics Hover Carousel
```css
--case-study-carousel-hover-duration: 800ms;
--case-study-carousel-hover-easing: cubic-bezier(0.165, 0.84, 0.44, 1);
--carousel-card-width: clamp(240px, var(--case-study-carousel-card-fluid-width, 30.38cqi), 384px);
```
Card width uses `cqi` units (container query inline size) for fluid sizing.

### `logo-carousel` — Marquee Drag
```css
.logo-carousel__marquee-container {
  cursor: var(--logo-carousel-cursor, grab);
  -webkit-user-select: none;
  user-select: none;
}
.logo-carousel__item path {
  transition: fill 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
```
Logo fills animate on hover — the SVG `path` fill transitions smoothly.

### `hds-button` — Button System
```css
.hds-button {
  font-size: 1rem;
  font-weight: var(--hds-font-weight-bold);
  border-radius: var(--hds-space-core-radius-sm);
  padding-block: 15.5px 16.5px;         /* asymmetric for optical centering */
  padding-inline: var(--hds-space-core-300);
  text-box: trim-both cap alphabetic;    /* CSS text-box trimming */
  gap: var(--hds-space-core-100);
}
```
`text-box: trim-both cap alphabetic` is a cutting-edge CSS property that trims whitespace above capitals and below baseline — gives buttons optically perfect vertical centering without padding hacks.

---

## 10. Performance Optimizations

### Resource Hints
```html
<!-- Fonts preloaded before any CSS parses -->
<link rel="preload" href="Sohne.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>

<!-- Analytics domains warmed up -->
<link rel="preconnect" href="https://q.stripe.com" crossorigin=""/>
<link rel="dns-prefetch" href="https://q.stripe.com"/>
<link rel="preconnect" href="https://r.stripe.com" crossorigin=""/>

<!-- Image CDN warmed up -->
<link rel="preconnect" href="https://images.stripeassets.com" crossorigin=""/>
```

### Image Delivery
All images served through Contentful Image API with on-demand optimization:
```
https://images.stripeassets.com/{spaceId}/{assetId}/{hash}/{filename}.jpg?w=860&q=80
```
- `w=` for width-based resizing
- `q=80` for quality
- Responsive `srcset` patterns with `?w=296&q=80` for small viewports

### CDN Split
- Static assets: `b.stripecdn.com`
- Images (Contentful): `images.stripeassets.com`
- Analytics: `q.stripe.com`, `r.stripe.com`
- Payments SDK: `js.stripe.com`

### CSS Cascade Layers for Zero-Specificity-War
By declaring `@layer reset, base, app` upfront, any `app` rule wins over `base` regardless of specificity. No `!important`, no specificity arms race.

---

## 11. Analytics Instrumentation

Every interactive element has structured tracking attributes:
```html
<a data-analytics-category="Carousels"
   data-analytics-label="build_a_foundation__supabase"
   href="/en-ca/customers/supabase">
```
Categories: `Carousels`, `global_footer__*`, `whats_happening__*`, etc.
Labels use `section__item` double-underscore convention.

---

## 12. Accessibility

- `prefers-reduced-motion` respected on all animations
- `aria-hidden="true"` on canvas elements
- `aria-hidden="false/true"` on carousel slides (managed dynamically)
- Focus styles: `outline: 2px solid var(--hds-color-action-border-solid); outline-offset: 3px`
- `.sr-only` utility class for screen-reader-only text
- `scroll-margin-top` on anchor targets accounting for sticky nav height
- `tabindex` managed on hidden carousel slides

---

## 13. What Makes It Feel "Premium" — The Technical Reasons

| Visual Effect | Technical Mechanism |
|--------------|---------------------|
| Hero gradient feels alive | Custom Canvas 2D animation, not CSS |
| Type feels unusually crisp | Sohne variable font + `text-box: trim-both cap alphabetic` |
| Hover animations feel physical | `cubic-bezier(0.165, 0.84, 0.44, 1)` at 800ms = genuine weight |
| Glowing orb blobs | `radial-gradient` with CSS variable blob colors per section |
| Rainbow spinning border | Pseudo-element with spinning `conic-gradient` |
| Product UIs scale perfectly | `transform: scale()` calculated from source dimensions |
| Logo color shifts smoothly | SVG `path` fill with 0.3s transition |
| Cursor follows gradients | CSS `var(--gradient-x/y)` set by JS mousemove |
| Nothing janks on scroll | `will-change: transform` + `backface-visibility: hidden` on all scroll-animated elements |
| Fast initial load | SSR + preloaded fonts + CDN split |
