# Review Framework

Every QA review must cover all eight layers. Do not skip a layer. Write "Not applicable" only if the business type genuinely makes a layer irrelevant.

---

## A. Strategic Fidelity

Check whether the built output still reflects:
- Business type and primary offer
- Target audience priorities
- Core CTA logic
- Key trust strategy
- Intended differentiation
- Actual service offering
- Page purpose and hierarchy
- Brand and perception goals
- Feature choices that were actually justified upstream

**Catch drift such as:**
- Generic messaging replacing real positioning
- Weak or missing CTA logic
- Pages without strategic purpose
- Feature bloat
- Homepage not matching the user journey
- Sections that sound fine but don't support the business

---

## B. UX Quality

Check:
- Clarity of what the business does and who it's for
- Page flow and section order
- Scannability
- CTA placement and wording
- Service clarity
- Form clarity
- Navigation clarity
- Friction balance
- Readability
- Mobile tap flow
- Trust cues near decision points
- Whether pages actually help users move forward

**Catch:**
- Overcrowded hero sections
- Confusing next steps
- Weak section sequencing
- Filler sections
- Repetitive content blocks
- Walls of text
- Missing proof near CTAs
- Hidden phone/contact paths
- Mobile friction
- Dead-end pages

---

## C. Accessibility Quality

Check explicitly for:
- Heading hierarchy logic
- Semantic clarity (nav, main, section, article, address, blockquote, cite, etc.)
- Contrast adequacy where inferable
- Readable text sizing
- Button and link label clarity
- Form label and error message clarity
- Keyboard and focus support
- Alt text expectations for meaningful images
- Motion reduction considerations
- Tap target size (minimum 44×44px)
- Not relying only on color to communicate meaning
- Accessible nav, form, modal behavior

If not directly testable, flag as "must verify in implementation."

Do NOT reduce accessibility to one vague sentence.

---

## D. Anti-Template / Anti-AI Review

Aggressively catch patterns that make the site feel generated, cheap, overdesigned, or low-trust:

- Over-glossy gradients everywhere
- Neon tech palettes that don't fit the brand
- Glassmorphism for no reason
- Floating blobs / abstract shapes as filler
- Excessive animation stacking
- Meaningless icon rows
- Giant radius on everything
- Weak typography hierarchy
- Too many cards in every section
- Generic "why choose us" filler
- Fake SaaS/dashboard aesthetics on local business sites
- Overly symmetrical template layouts
- Fake-looking stock-photo dependence
- Vague buzzword-heavy copy
- Trust sections that feel copied
- Empty or placeholder-feeling testimonials
- Decorative sections with no user value
- Everything with the same spacing rhythm
- Shadows on every element
- Components that feel copied from a template library without adaptation

---

## E. Trust and Conversion Review

Check:
- Whether the site feels legitimate
- Whether claims feel believable and verifiable
- Whether proof is real enough
- Whether CTAs match the commitment level
- Whether anxiety is reduced
- Whether contact/booking/request actions feel safe
- Whether the site explains what happens next
- Whether local/service trust is grounded
- Whether forms are reasonable
- Whether pricing/process language is honest
- Whether pages convert without feeling pushy

**Catch:**
- Fake confidence without proof
- Generic testimonials
- Unclear process
- Pushy CTA language
- Contact friction
- Weak reassurance near submission
- Trust gaps on service pages
- Inconsistent business details
- Placeholder links that undermine trust signals

---

## F. Responsive / Mobile-First Review

Mobile-first is non-negotiable.

Check:
- Hero readability on mobile
- Button prominence and size
- Header and navigation usability on small screens
- Spacing density
- Card stacking logic
- Section compression
- Form usability
- Sticky CTA behavior
- Image cropping
- Whether proof sections stay readable on small screens
- Whether the site is organized on mobile, not just less broken

**Catch:**
- Desktop-first layouts squeezed onto mobile
- Excessive scroll friction
- Stacked sections that lose hierarchy
- Hard-to-tap controls
- Long unbroken content blocks
- Hover-dependent interactions on touch screens
- Maps, sliders, or carousels that become unusable on mobile

---

## G. Content and Business Integrity Review

Check whether:
- Business details are consistent (name, phone, email, address, hours)
- Services are described accurately
- No placeholder or unresolved content remains in the build
- Location and service-area language is honest and specific
- No fabricated review details, stats, or guarantees
- Copy sounds human and business-appropriate
- No AI-typical filler phrases remain

**Catch:**
- Content contradictions across pages
- Generic filler
- Obvious AI phrasing
- City stuffing
- Invented stats or ratings
- Placeholder text that will render publicly (CRITICAL)
- URLs or links that point to placeholder/wrong destinations

---

## H. Feature-Specific Sanity Check

When relevant, verify that each activated feature is credible and aligned:

| Feature | Key checks |
|---|---|
| Forms | Fields justified, validation correct, success state clear, trust cues present |
| Gallery | Captions visible on mobile, content real, category balance, CTAs present |
| Social proof | Testimonials specific, review links functional, star counts accurate |
| Services | Cards link correctly, descriptions accurate, scope honest |
| Navigation | All links resolve, mobile nav accessible, hierarchy logical |
| Hero | CTA prominent, subheadline earns its space, mobile layout holds |
| Footer | Contact info accurate, legal info complete, social links valid |
| Service area pages | Cities accurate, neighborhood specifics real, not keyword-stuffed |
| FAQ sections | Questions real, answers honest, not padded |
| Schema markup | Type correct, fields populated, no placeholder values |

Do not re-own each feature. Verify whether the implementation is credible and aligned.
