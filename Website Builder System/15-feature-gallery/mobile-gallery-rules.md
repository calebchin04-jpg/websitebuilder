# Mobile Gallery Rules

## Core Principle

Mobile is not a compressed version of desktop. Design the gallery behavior for mobile explicitly. If a feature does not work well with thumbs on a 390px screen, it should not exist on mobile.

---

## Layout Behavior

### Grid layout
| Breakpoint | Columns | Behavior |
|---|---|---|
| Default (< 640px) | 1 | Full-width cards, stacked |
| sm (640px+) | 2 | 2-column grid |
| lg (1024px+) | 3 | 3-column grid |

Single column on mobile is the default for proof-first galleries. It gives each image enough space to convey quality. Two-column is acceptable if images are landscape and captions are short.

Do not use 3 columns on mobile — cards become too small to show quality.

### Service page inline gallery
On mobile, 3–4 images can be presented as:
- **Stacked 1-column**: cleanest, each image gets full width
- **2-column grid**: acceptable for 4 images (2×2 layout)
- **Horizontal scroll strip**: 2 images visible, swipe to see more — more engaging but requires careful touch target sizing

Horizontal scroll strips require:
- `overflow-x: scroll` with `scroll-snap-type: x mandatory`
- Each card with `scroll-snap-align: start`
- No horizontal scrollbar visible (use `scrollbar-hide` utility or `overflow: hidden` on parent with visible overflow on child)
- Visible peek of the next card to signal scrollability

### Before/after slider on mobile
If a B&A slider is present:
- Touch drag must work naturally (use a library that handles touch events — do not build drag from scratch)
- The slider handle must be at least 44×44px touch target
- Do not use hover to reveal the before/after state — it must be drag/swipe only
- Test on actual iOS and Android, not just browser DevTools

---

## Caption Behavior on Mobile

**Never hover-only captions on mobile.** Mobile users cannot hover.

### Required mobile caption behavior:
Captions must be readable without any user interaction on touch devices.

**Option 1 — Persistent overlay (recommended):**
- Caption sits in a gradient overlay at the bottom of the card
- Always rendered, always visible
- On desktop: can remain always visible OR use hover-reveal
- CSS approach: `translate-y-0 md:translate-y-full md:group-hover:translate-y-0`

**Option 2 — Below-card text:**
- Caption rendered as a `<p>` element below the image card
- Always visible, no overlay
- Simpler implementation, takes more vertical space
- Good for inline service page galleries

**Option 3 — Visible on scroll (not recommended):**
- Caption appears when card enters viewport
- Unreliable — user may scroll past before caption renders
- Avoid this pattern for proof captions

### Caption text size on mobile
- Minimum 12px / 0.75rem for overlay captions
- Prefer 13–14px for below-card text
- Contrast: white text against the dark gradient overlay must meet 4.5:1

---

## Touch Target Sizing

All interactive gallery elements must meet 44×44px minimum touch target (WCAG 2.5.5):

| Element | Minimum size |
|---|---|
| Category filter buttons | 44px height |
| B&A slider handle | 44×44px |
| Lightbox trigger (if used) | Full card is the touch target |
| Lightbox close button | 44×44px |
| Lightbox prev/next | 44×44px |

Filter pills that are too small are a common mobile failure. Ensure padding creates adequate touch area even if the visual pill looks smaller.

---

## Image Cropping on Mobile

- Use `object-fit: cover` with `object-position: center` for all gallery images
- Portrait images will be center-cropped in a 4:3 card — ensure the key subject is in the center third of the original
- Test portrait images on mobile specifically — a kitchen where the key counter runs along the bottom will be cropped out at 4:3

---

## Performance on Mobile

- All gallery images below the fold must be lazy-loaded (Next.js `<Image>` default)
- Homepage strip: first 2 images may be above the fold on mobile — use `priority` prop
- Do not load all 15 portfolio images eagerly on mobile
- If the portfolio page has 30+ images, consider pagination or "load more" rather than loading all at once
- Image sizes on mobile: `(max-width: 640px) 100vw` — ensure the `sizes` prop reflects this

---

## Filter Behavior on Mobile

- Filter buttons must be horizontally scrollable if they overflow the viewport
- Use `flex-wrap: wrap` with `overflow: hidden` OR `flex: nowrap` with horizontal scroll
- `flex-wrap: wrap` is simpler and works for 3–4 filter options
- Horizontal scroll is better for 5+ options — rare for local service businesses
- Active filter state must be visually clear at mobile size (not just a subtle color difference)

---

## Lightbox on Mobile

If lightbox is used:
- Full-screen on mobile (not a centered modal)
- Swipe left/right to navigate between images
- Tap anywhere outside the image (or tap a close button) to dismiss
- The lightbox caption must be visible without scrolling on a standard phone screen
- Pinch-to-zoom is acceptable but not required
- Avoid lightboxes on mobile for simple proof galleries — the card grid is sufficient at most image counts

---

## Accessibility on Mobile

- All filter buttons must have visible focus states (keyboard-accessible even on mobile)
- The `role="group"` and `aria-label` on filter controls must be present
- Caption text must not be `aria-hidden` if it contains proof information
- Ensure the image grid does not trap keyboard focus
