# Routing Rules

This document defines when to activate optional feature folders, how to adjust defaults per business type, and how to scope revisions without touching unaffected areas.

---

## 1. Default Feature State

### DEFAULT ON (always activated unless explicitly removed)

These folders are active on every project unless the user says otherwise:

| Folder | Feature |
|--------|---------|
| `10-hero` | Hero section |
| `11-navigation` | Header and navigation |
| `12-forms` | Contact form |
| `13-social-proof` | Testimonials / reviews |
| `14-services` | Services section or page |
| `17-local-seo` | Local SEO basics |

### DEFAULT OFF (only activate when explicitly requested or triggered by business type)

| Folder | Feature | Trigger to activate |
|--------|---------|---------------------|
| `15-gallery` | Gallery / portfolio | User requests it OR business type is visual (salon, remodeler, fitness, photographer) |
| `16-booking-payments` | Booking and/or payments | User requests online booking or deposit collection |
| `18-blog-resources` | Blog / resources section | User explicitly requests a blog or content hub |
| `19-cms` | CMS integration | User explicitly requests client-editable content |
| `20-ecommerce` | Ecommerce / cart / checkout | User explicitly requests product sales or checkout |
| `21-lead-capture` | Lead popups / secondary capture | User requests aggressive lead gen OR business type is high-volume service |
| `22-live-chat` | Live chat or chatbot | User explicitly requests it |
| `23-membership` | Gated content / client portal | User explicitly requests a members area |
| `24-multilingual` | Multilingual support | User confirms multiple languages are needed |
| `20-backend-architecture` | Backend beyond basic forms | Any feature requiring persistent data, auth, payments, or APIs beyond simple form submission |

### Activation rule

When a feature is activated, confirm it with the user before routing to that folder:
> Feature activated: [feature name] → routing to `[folder]`

---

## 2. Business-Type Routing

Use business type (confirmed in Stage 1) to set the default feature set and recommended page structure hint. These are defaults — the user can override any of them.

### Home Services
(plumbers, electricians, HVAC, landscapers, cleaners, painters, remodelers)

**Default ON in addition to base defaults:**
- `15-gallery` (before/after work photos are expected)
- `21-lead-capture` (quote request is a primary CTA)

**Recommended page structure hint:**
Home → Services → About → Service Areas → Gallery → Contact

**Primary CTA default:** Quote request or phone call

---

### Clinic / Medical / Wellness
(doctors, dentists, physio, chiropractors, therapists)

**Default ON in addition to base defaults:**
- `16-booking-payments` (appointment booking is standard)

**Recommended page structure hint:**
Home → Services → About → Team → FAQ → Contact

**Primary CTA default:** Book appointment

**Additional note:** Trust signals are critical. Social proof folder must include credentials, certifications, and patient review sources. Avoid flashy design — lean clinical and warm simultaneously.

---

### Salon / Beauty / Spa

**Default ON in addition to base defaults:**
- `15-gallery` (portfolio of work is essential)
- `16-booking-payments` (online booking is expected)

**Recommended page structure hint:**
Home → Services + Pricing → Gallery → About → Book → Contact

**Primary CTA default:** Book now

**Additional note:** Visual quality of the site must reflect the quality of the service. Design system must be applied with extra care. Image treatment rules are especially important here.

---

### Consultant / Professional Services
(lawyers, accountants, financial advisors, coaches, HR consultants)

**Default ON in addition to base defaults:**
None by default. Keep the build minimal.

**Recommended page structure hint:**
Home → Services → About → Case Studies or Testimonials → Contact

**Primary CTA default:** Book a call or send inquiry

**Additional note:** Trust and credibility are the primary conversion drivers. Avoid hype. Avoid aggressive CTA language. Social proof folder must emphasize results and credentials.

---

### Fitness / Personal Training / Studio

**Default ON in addition to base defaults:**
- `15-gallery` (studio environment and results)
- `16-booking-payments` (class booking or session purchase)

**Recommended page structure hint:**
Home → Programs → About / Coaches → Pricing → Gallery → Contact

**Primary CTA default:** Book first session or view pricing

**Additional note:** Energy and motivation matter here more than other categories. Design system may lean slightly more expressive, but must still be structured and avoid generic "fitness template" patterns.

---

### Agency / Creative / Marketing
(design agencies, marketing firms, dev shops, content studios)

**Default ON in addition to base defaults:**
- `15-gallery` (work portfolio is required)

**Recommended page structure hint:**
Home → Work / Case Studies → Services → About → Contact

**Primary CTA default:** Contact or schedule a call

**Additional note:** The site itself must demonstrate quality. This is the category where design standards must be held to the highest bar. Generic layouts will immediately undermine the client's positioning.

---

### Other / Unclassified

If the business type does not map to the above categories:
1. Ask the user to describe their primary customer action (what they want visitors to do)
2. Ask whether portfolio/visual content is part of the service
3. Use that to determine which additional defaults to activate
4. Document the decision before proceeding

---

## 3. Revision Routing

When a revision request comes in, confirm the scope before routing anything.

### Scope confirmation protocol

Before routing a revision, ask:
> Is this revision limited to [inferred scope], or does it affect other areas?

Only route to the folders that are explicitly in scope. Preserve everything else.

### Revision scope → folder routing

| Revision type | Route to | Do NOT touch |
|--------------|----------|--------------|
| Visual style change (colors, fonts, spacing) | `05-design-system` | All feature folders — update only after design system is updated |
| Layout or section order change | `04-wireframes` + affected component folder | Other pages, design system |
| Copy change | `copy-structure/` | Layout, design system, other pages |
| Feature add | Activate the relevant feature folder + update `06-build-plan` | All existing features |
| Feature remove | Deactivate folder, update `06-build-plan` | All existing features |
| New page add | `03-sitemap` update → `04-wireframes` for new page → relevant component folders | Existing pages |
| SEO update | `17-local-seo` | Everything else |
| Performance or code quality | `06-build-plan` update + affected component folder | Design system, layout |
| QA fix | `18-qa-review` + specific component | Everything else |

---

## 4. Copy Strategy Routing

Copy and content strategy is handled by the `copy-structure/` folder (no number prefix). Route here when:
- Writing or revising hero headlines, subheads, or CTAs
- Writing or reviewing service page copy structure
- Writing FAQ content (question selection + answer quality)
- Writing pricing language
- Reviewing local specificity of any copy

`copy-structure/` activates after `05-brand-direction` and before `07-implementation-planning`. It requires discovery answers from `01-discovery/ai-visibility-questions.md` to produce real copy (not placeholders).

Reference files within `copy-structure/`:

| File | Covers |
|---|---|
| `SKILL.md` | Role, inputs required, output format, hard constraints |
| `hero-format.md` | H1 formula, subhead structure, CTA copy rules |
| `service-page-format.md` | Service page required sections, length, structure |
| `faq-format.md` | Question selection, answer quality rules, required FAQ categories |
| `pricing-clarity.md` | When to show pricing, how to frame ranges, language to avoid |
| `local-specificity-rules.md` | Named cities, local trust signals, what not to write |

---

## 5. AI Visibility Hook Chain

The AI visibility layer runs through a specific chain of agents in sequence. When AI visibility is in scope, route through this chain before `17-feature-local-seo` begins implementation:

1. **`01-discovery/ai-visibility-questions.md`** — capture services, pricing, FAQs, service area, credentials, content restrictions
2. **`02-planning/ai-visibility-decision-rules.md`** — assign AI visibility tier (FULL / STANDARD / MINIMAL) based on discovery data quality and client approval
3. **`03-sitemap/ai-readable-page-selection.md`** — determine which pages are AI-readable (sitemap, llms.txt, mirrors)
4. **`17-feature-local-seo/`** — implement all AI visibility components for the assigned tier
5. **`18-qa-review/ai-seo-checklist.md`** — QA all AI visibility components pre-launch

Do not skip steps 1–3. `17-feature-local-seo` cannot populate `llms.txt`, schema, or mirrors without the data captured in discovery and the tier decision from planning.

If discovery data is too vague to support the intended AI visibility tier, flag this and return to `01-discovery` before proceeding.

---

### Cascade rule

If a design system change is made, confirm with the user whether to propagate it across all pages or apply it only to a specific component. Do not auto-cascade without confirmation.

If a layout change on one page implies a similar change on other pages, flag it and ask before making it.

### Revision gate

Before executing any revision:
- [ ] Scope is confirmed (which folder, which page, which component)
- [ ] User has confirmed that adjacent areas should be preserved
- [ ] No stage earlier than the revision's scope needs to be re-run (if it does, flag this and get confirmation)
