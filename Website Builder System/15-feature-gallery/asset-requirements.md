# Asset Requirements

## Core Requirements

### Resolution and dimensions
- Minimum: 1200×900px for a 4:3 landscape image
- Target: 1600×1200px or larger (Next.js Image will optimize down)
- For before/after pairs: both images must be the same resolution and shot from the same angle

### Format
- JPEG at 80–85% quality OR WebP (preferred)
- Next.js `<Image>` converts to WebP automatically — raw JPEGs from the client are acceptable
- PNG should not be used for photographic images (unnecessary file size)

### Orientation
- Landscape (4:3) strongly preferred — matches the standard grid card aspect ratio
- Portrait images will be center-cropped in a 4:3 card — verify the key subject is in the center third
- Mixed orientations in the same grid look inconsistent — avoid unless the layout accommodates it

### Lighting and staging
- Natural light preferred; good artificial light acceptable
- No harsh flash shadows, no underexposed dark corners
- Space should be clean and finished — no construction debris, tools, or packaging
- If the space has personal items (family photos, etc.) confirm the client is comfortable with them being on the website

### Authenticity requirements
- Images must be of real completed projects, not renders, CGI, or staged demos
- Stock photography must never appear in a proof gallery
- If the client provides images that look like stock, flag them and ask for confirmation

---

## What Should Never Be Used

| Asset type | Reason |
|---|---|
| Stock photography (Unsplash, Pexels, Shutterstock, etc.) | If recognized, destroys all trust instantly |
| 3D renders or CGI | Not proof of real completed work |
| Manufacturer/supplier marketing images | Generic, not the business's own work |
| Blurry or low-resolution images | Signals low-quality work regardless of the actual quality |
| Dark, poorly-lit images | Hard to assess quality; damages credibility |
| Images of work in progress | Only acceptable in a "process" section, not a portfolio |
| Before images without matching after images | Do not include in a portfolio grid (save for B&A section only) |

---

## Placeholder Rules

**The hardest rule: do not use stock photos as placeholders.**

If real assets are not available for a category:
- Reduce the image count in that category rather than padding with stock
- Do not show a category filter tab if fewer than 3 real images exist for that category
- Reduce the homepage strip from 6 to 4 if 6 equal-quality real images are not available
- Launch with fewer images rather than launch with fake-looking proof

**Acceptable placeholder behavior:**
- A `bg-surface` card with a subtle loading shimmer (for client portals where the client will upload)
- A "Photos coming soon" state only if the page is not public-facing
- Never show placeholder cards in a live public portfolio

---

## Filename Guidance

Good filenames help maintainability and give context when reviewing assets:

| Good | Bad |
|---|---|
| `kitchen-white-shaker-portland.jpg` | `IMG_4591.jpg` |
| `bathroom-master-walkin-shower-lake-oswego.jpg` | `photo (1).jpg` |
| `basement-home-office-beaverton.jpg` | `untitled.jpg` |

Filename format: `[service]-[feature or style]-[city].jpg`

This is not required for the site to function, but it helps the agency maintain the asset library across client builds.

---

## Minimum Viable Asset Set by Business Type

### Home remodeling (kitchen / bathroom / basement)
| Category | Minimum | Target |
|---|---|---|
| Kitchen | 4 | 6 |
| Bathroom | 4 | 6 |
| Basement | 3 | 6 |
| Service page heroes | 1 per service | 1 per service |
| Homepage hero | 1 | 1 |
| OG image | 1 | 1 |

### Landscaping / hardscaping
| Category | Minimum | Target |
|---|---|---|
| Patio / hardscape | 4 | 6 |
| Planting / softscape | 3 | 5 |
| Drainage / grading | 2 | 4 |

### Painting
| Category | Minimum | Target |
|---|---|---|
| Interior | 4 | 6 |
| Exterior | 3 | 5 |
| Cabinets / specialty | 2 | 4 |

---

## Before-and-After Asset Requirements

Only applicable when matched B&A pairs exist.

### What makes a valid before/after pair:
- Same physical space, shot from the same angle
- Comparable framing and distance
- Both images are finished-quality shots (the "before" can look rough, but the photo itself should be properly exposed)
- The difference is meaningful and visible — subtle changes do not justify a slider

### What makes a weak or invalid before/after pair:
- Different angles between before and after shots
- Before photo is a blurry phone snapshot, after is a professional photo
- The change is minor (new fixtures only, paint touch-up)
- The before state is embarrassing rather than informative (hoarding, severe damage — may be appropriate for some businesses, use judgment)

### Minimum B&A set:
- At least 3 pairs to justify a before/after section
- At least 1 pair per primary service category if the B&A section is category-based

---

## Image Optimization Notes

- Next.js `<Image>` handles format conversion, resizing, and lazy loading automatically
- Always provide `sizes` prop on fill-mode images: `"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"` for 3-column grids
- Above-the-fold homepage images (first 2–3 in the strip) should use `priority` prop to prevent LCP impact
- Do not use `unoptimized` unless there is a specific reason
