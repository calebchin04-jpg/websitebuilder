# Caption Rules

## What Captions Are For

Captions are proof labels. They tell the user what they are looking at and why it matters. A caption with no information is decoration.

Captions answer:
- What kind of project is this?
- What scope was involved?
- Where is it? (local relevance)
- Is this relevant to what I'm considering?

A good caption increases trust. A weak caption does nothing. A missing caption on a proof image wastes the proof opportunity.

---

## Caption Formula

### Standard:
`[Scope or key feature] — [City/neighborhood]`

### With trust detail (use when one detail is genuinely strong):
`[Scope or key feature] — [City], [one trust-building detail]`

---

## Strong Caption Examples by Business Type

### Remodeling / renovation
- "Open-concept kitchen with island addition — Portland"
- "Master bath: walk-in shower, heated floors, frameless glass — Lake Oswego"
- "Full gut bathroom — tile, plumbing, vanity, exhaust — Portland"
- "Tub-to-shower conversion with custom tile niche — Beaverton"
- "Galley kitchen: new cabinetry, quartz counters — Portland"
- "Basement finishing: home office, guest suite, full bath — Lake Oswego"
- "Kitchen wall removal and open layout — permits handled — Portland"

### Landscaping / hardscaping
- "Backyard interlock patio with raised planting beds — Markham"
- "Front yard redesign: sod removal, gravel, perennials — North York"
- "Retaining wall and drainage solution — sloped lot — Etobicoke"

### Cleaning
- "Deep clean after tenant turnover — Scarborough"
- "Before and after: hoarder cleanup, living room — Toronto"

### Painting
- "Exterior repaint: siding, trim, shutters — Oakville"
- "Kitchen cabinet respray — white satin finish — Mississauga"

### Roofing
- "Full shingle replacement — 28 squares — Brampton"
- "Flat roof repair with TPO membrane — commercial unit — Toronto"

---

## Weak Captions — Do Not Use

| Weak | Why it fails |
|---|---|
| "Our Work" | Heading, not a caption |
| "Quality Work" | Meaningless, sounds fake |
| "Project 1" | No information |
| "Kitchen" | Too vague to be proof |
| "Open-concept kitchen, Portland" | Scope is missing |
| "Custom cabinetry" | No context, no location |
| "Professional service" | Marketing speak |
| "See our work" | CTA, not a caption |

---

## Alt Text vs. Caption

These serve different purposes and should not be identical.

**Alt text** (for screen readers and SEO):
- Describes what is visually present in the image
- Should be factual and specific
- Format: `[What is visible] — [city, state]`
- Example: `"White shaker cabinetry with quartz countertops and island — Portland, OR"`

**Caption** (for sighted users, proof context):
- Explains the project scope and relevance
- Can be shorter or more conversational
- Example: `"Island addition with custom cabinetry — Portland"`

Both should contain useful information. Neither should be filler.

---

## Caption Visibility Rules

**Never make captions hover-only.** Mobile users do not hover. A hover-only caption is invisible on touch devices — which are frequently the majority of traffic.

Acceptable caption patterns:
1. **Persistent overlay** — always visible at the bottom of the card, gradient background, appropriate on all devices
2. **Below-card text** — caption rendered below the image card, fully visible on all devices (simpler but takes more vertical space)
3. **Hover reveal on desktop, persistent on mobile** — the best UX tradeoff for card-based galleries. Use: `translate-y-0 md:translate-y-full md:group-hover:translate-y-0`

If a caption is present in the data, it must be readable without any interaction on mobile.

---

## Accessibility Rules for Captions

- Never apply `aria-hidden="true"` to captions that contain proof information
- The caption `<div>` or `<p>` should be readable by screen readers
- If the caption overlaps with alt text content, that is acceptable — they serve different contexts
- Captions that are purely visual labels (e.g., a category badge with no text value) may be aria-hidden
- Meaningful proof captions must not be aria-hidden

---

## Caption Copy Quality Check

Before finalizing captions, ask:
1. Does this tell me what the scope of work was?
2. Does this tell me the city or neighborhood (for local businesses)?
3. Is there one detail that increases trust beyond just labeling the image?
4. Is it under ~12 words?
5. Does it sound like a real caption, not a marketing tagline?

If any answer is no, rewrite the caption.
