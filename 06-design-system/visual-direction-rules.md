# Visual Direction Rules

This file defines how to convert vague style language into concrete, implementable visual rules. Run this process before any design system decisions are made.

---

## Rule: No Adjective Without a Translation

Every style adjective used in discovery or planning must be converted into at least one specific visual rule before it is used to guide design decisions.

Adjectives like "premium," "clean," "modern," "trustworthy," "warm," "minimal," "local," "professional," "luxury," and "high-converting" are inputs, not outputs.

Each one must produce statements like: "buttons use a conservative 6px radius, not pill-shaped," or "type hierarchy uses weight contrast rather than size extremes," or "background uses an off-white surface, not pure white."

---

## Translation Reference

Use the following as starting-point translations. Adapt based on audience and business type.

### "Premium"
May mean:
- Palette is restrained (2–3 colors max, no competing accents)
- Typography uses weight contrast over size excess — no comically large headings
- Surfaces are clean but not sterile — minimal shadow, subtle dividers
- Spacing is generous and intentional — no cramped sections
- Components feel confident, not decorative — no unnecessary borders, badges, or gimmicks
- Photography communicates quality — no obvious stock, no overlit fake-professional shots

Does NOT automatically mean:
- Dark mode
- Heavy serif fonts
- All-black aesthetic
- Glassmorphism

### "Trustworthy"
May mean:
- Contrast ratios are high — text is clearly readable without strain
- Proof content is prominently placed, not buried
- Contact information is visible without hunting
- Forms are clean and non-intimidating — clear labels, obvious fields
- Color palette is grounded (no neon, no jarring accent colors)
- No visual noise competing with the message
- Realistic photography — real people, real results

Does NOT automatically mean:
- Blue is required
- Conservative = boring

### "Modern"
May mean:
- Spacing rhythm is clean and consistent — not cramped or randomly uneven
- Typography hierarchy is clear and intentional
- Navigation is lightweight — no heavy chrome, no thick borders
- Motion is subtle and purposeful — not absent, not excessive
- Layout is flexible and responsive-first
- Color is controlled — not flat or outdated, not trend-chasing

Does NOT automatically mean:
- Dark backgrounds
- Large hero typography
- Animations everywhere
- Trendy startup visual language

### "Clean" / "Minimal"
May mean:
- High text-to-element ratio — not a lot of decorative components
- Section backgrounds vary subtly, not dramatically
- Icon usage is restrained — only where they genuinely add clarity
- Whitespace is intentional — padding and margin are consistent
- No visual clutter competing for attention

Does NOT automatically mean:
- No color
- All white
- Brutalism
- Apple-clone aesthetic

### "Local" / "Family-run" / "Community-focused"
May mean:
- Photography should feel approachable — real people, real places, real work
- Typography leans warm — either a humanist sans-serif or an approachable serif
- Color palette draws from warm neutrals, earth tones, or grounded primaries
- Contact information is front and center — phone number visible without scrolling
- No corporate polish that makes the business feel inaccessible
- Proof should feel real and personal — real names on testimonials

Does NOT automatically mean:
- Outdated
- Low budget
- Low contrast

### "Luxury" / "High-end"
May mean:
- Spacing is very generous — dense content feels cheap at this register
- Type is refined — likely a considered serif headline with clean sans body, or a very high-quality sans with strong weight variation
- Photography must be exceptional — this fails completely if imagery is mediocre
- Color palette is curated and extremely restrained — likely monochromatic with one accent
- Animation, if any, is extremely slow and deliberate
- Components have minimal decoration — no gradient fills, no heavy shadows, no bubbly rounding

Does NOT automatically mean:
- Black and gold
- Script fonts
- Extravagant layouts

### "High-converting"
Note: This is a goal, not a visual style. It cannot be translated into design rules directly. Instead:
- Ask what removes friction (simpler forms, clearer CTA, visible phone number)
- Ask what builds confidence (proof placement, guarantee visibility, clear pricing)
- Ask what creates urgency without pressure (availability cues, direct language)
- Translate those into specific design decisions about CTA prominence, form simplicity, trust block placement

---

## Visual Register Spectrum

Place the site on this spectrum, then use it to calibrate ALL design decisions:

```
← APPROACHABLE ─────────────────────────────────── PREMIUM →
Local/personal    Friendly professional    Polished expert    Luxury/editorial
   ↕                       ↕                      ↕                ↕
Warm imagery        Real photography          Clean type       Exceptional imagery
Earth tones         Controlled palette        Restrained        Mono/curated
Phone-first         Form + call               Both CTAs         Calendar/inquiry
Dense info          Balanced                  Breathing room    Very spacious
```

The register should match the audience's expectations. If there is a mismatch between the stated visual direction and the target audience, flag it.

---

## How to Handle References

When visual references are provided, extract principles — not aesthetics.

For each reference:
1. Identify what specifically works about it (is it the spacing? the type hierarchy? the restrained color? the quality of photography?)
2. Convert that observation into a transferable rule
3. Note what context-specific elements do NOT transfer (their industry, budget, brand recognition, or unique visual assets)

**Example:**
- Reference: Stripe.com
- What works: Disciplined spacing rhythm, strong typographic hierarchy, minimal color (primarily one accent on neutral), confident section structure, no decorative noise
- Transferable rules: "Section spacing should be generous and consistent," "One primary accent color, used sparingly," "Type hierarchy communicates hierarchy through weight and scale contrast, not decorative elements"
- Does not transfer: Abstract product UI visuals, gradient hero (Stripe can afford this; a local plumber cannot — it looks fake)

---

## How to Handle Conflicting Style Preferences

When discovery or planning produces conflicting style directions (e.g., "premium and minimal" + "show everything we do and be warm"):

1. Name the conflict explicitly
2. Ask which priority takes precedence in the planning context (audience trust vs. owner preference)
3. Default rule: audience trust and conversion win over owner aesthetic preference
4. Propose a resolution that honors both where possible, and flags what was deprioritized

---

## How to Handle No Visual Direction

If no references, no vibe, no banned styles, and no color preferences were provided:

1. Derive visual direction from: business type + audience + positioning + CTA type
2. Use the Visual Register Spectrum to determine placement
3. Apply business-type defaults (see `design-system-rules.md`)
4. Label the entire visual direction section as `[ASSUMED — no visual input provided]`
5. Note the revision risk: visual direction derived from context may not match the client's expectations

Business-type visual default directions:
- Home services: approachable-professional, warm photography, strong CTA visibility, grounded palette
- Medical/clinic: clean, calm, trustworthy, muted cool tones, clear hierarchy, no clutter
- Salon/beauty: 25–75% on the approachable-to-premium spectrum depending on positioning, photography-forward
- Consultant/professional services: polished-professional, restrained, typography-first, trust-forward
- Fitness: bold but structured, energy without chaos, photography-forward, strong CTA
- Agency/creative: positioned by their own work quality — must look like they can do what they're selling
