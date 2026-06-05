# Hero Strategy Rules

This file defines how to read upstream inputs, classify the hero type, make the clarity-first hierarchy decision, and determine whether and what kind of micro-zone to attach.

---

## Part 1: Reading Upstream Inputs to Set Hero Strategy

Before writing a word of copy or choosing a layout, extract these three things from the upstream package:

**1. The primary conversion job**
What is the single most important thing this hero must make a visitor do or believe?
- Source: `02-planning` (primary website goal) + `01-discovery` (primary CTA, business type)
- Expressed as: "This hero must make a [target audience] immediately understand [key message] and take action by [CTA]."

**2. The primary trust barrier**
What is the most common reason a visitor would leave without converting?
- Source: `01-discovery` (pain points, objections) + `05-brand-direction` (anti-identities, proof hierarchy)
- Expressed as: "The visitor is most likely to distrust this business because [specific fear/doubt]."

**3. The brand register constraint**
What tone and register has been locked for this brand?
- Source: `05-brand-direction` (brand register, personality dimensions, tone rules)
- This constrains every copy and layout decision — do not deviate from it

If any of these three cannot be answered from upstream inputs, flag it in Section 10 and state what you assumed.

---

## Part 2: Hero Type Classification

Every hero fits one of four primary types. Choose the type that best matches the primary conversion job and trust barrier:

**Proof-First Hero**
- Primary message: "Real people hired us and got real results"
- Use when: social proof is the strongest available differentiator, competitors are anonymous or unreviewed, high skepticism from the target audience
- Signals above the fold: review count + star rating, specific testimonial snippet, or before/after visual
- Copy tone: confident, grounded, evidence-led
- Common business types: home services, contractors, cleaners, movers

**Offer-First Hero**
- Primary message: "Here is exactly what you get and why it fits your situation"
- Use when: the offer is specific and differentiated, competitors are vague about scope, the audience compares options actively
- Signals above the fold: specific service description, clear outcome statement, pricing signal if applicable
- Copy tone: direct, outcome-focused, no filler
- Common business types: consultants, legal services, medical/clinical, specialist trades

**Story-First Hero**
- Primary message: "This is who we are — a real local person, not a faceless company"
- Use when: the founder IS the differentiator, the business is competing against chains or franchises, personal trust is the conversion driver
- Signals above the fold: founder name and/or photo, named location, personal story hook
- Copy tone: warm, personal, local — not corporate
- Common business types: solo practitioners, family businesses, owner-operated services

**Authority-First Hero**
- Primary message: "We are the expert — you are in safe hands"
- Use when: the audience is anxious about risk, credentials and expertise are verifiable, the business serves at a premium register
- Signals above the fold: credentials, certifications, years of experience, named results
- Copy tone: calm confidence, minimal enthusiasm, precise language
- Common business types: medical aesthetics, legal, financial, high-end wellness, specialty clinics

---

## Part 3: Clarity-First Hierarchy Rule

**Rule: Clarity beats cleverness. Cleverness beats beauty. Beauty is the last consideration.**

The hero's primary job is to communicate — not to impress. If a headline is clever but takes 3 seconds to parse, it fails. If it is beautiful but ambiguous, it fails. Clarity is the non-negotiable first filter.

Apply this hierarchy in order:
1. **Clarity:** Does a new visitor understand within 3 seconds who this is for and what they offer?
2. **Specificity:** Does the copy use specific language (location, service, outcome, proof) rather than category language ("professional," "quality," "excellence")?
3. **Relevance:** Does the hero speak to the visitor's actual concern, not just describe the business?
4. **Distinctiveness:** Does anything in the hero differentiate this business from a generic category competitor?

If a copywriting choice fails on criteria 1 or 2, it does not matter how well it scores on criteria 3 or 4.

---

## Part 4: Standout vs. Safe Decision Logic

Not every hero should try to be distinctive. Overreaching produces incoherence. Use this logic:

**Default to a safe, clear, well-executed hero when:**
- The business is in a high-trust-barrier category (medical, legal, financial)
- The brand register is authoritative — distinctive copy can feel erratic at that register
- The product of a distinctive hero going wrong is significant (reputation damage, lead loss)
- The upstream inputs are thin or contradictory — do not improvise distinctiveness from ambiguity

**Push toward a more standout execution when:**
- The brand register is approachable and the personality is high energy
- The business has a specific differentiator that is genuinely uncommon (a unique process, a verifiable proof claim, a personality-based story)
- The competitive context is a sea of sameness (every competitor says the same thing)
- The upstream brand direction explicitly calls for distinctiveness or calls out competitor sameness

**Never push distinctiveness for its own sake.** An unusual hero that fails to communicate clearly is worse than a conventional hero that works.

---

## Part 5: Micro-Zone Inclusion Decision Rules

A micro-zone is a single visual row or strip immediately below the hero section. It is not a full section. It has one job: reinforce the hero's primary message with a complementary proof signal.

**Include a micro-zone when:**
- The hero's primary proof signal is copy-based (review count, claim) and a visual reinforcement would strengthen belief
- The brand register allows a compact proof display without cluttering the above-fold impression
- The trust barrier identified in Part 1 requires a second signal to be believable
- The wireframe PRD includes a named zone below the hero (trust strip, logo row, etc.)

**Do not include a micro-zone when:**
- The hero already carries sufficient proof above the fold (before/after image, large star rating block)
- The micro-zone would duplicate the hero's message rather than reinforce it
- The brand register is minimal/editorial — a proof strip would break the visual register
- The next section immediately below is itself a trust/proof section

**Micro-zone types (choose one):**
| Type | Content | Use when |
|---|---|---|
| Review count strip | "★★★★★ 4.9 · 83 Google reviews" | Best for service businesses with volume reviews |
| Logo row | Client or certification logos | Best for B2B, credentialed services, premium consultants |
| Proof statement row | 2–3 short outcome statements or statistics | Best when quantified results are available |
| Credentials row | Named certifications, licenses, affiliations | Best for medical, legal, financial, regulated fields |
| Social proof snippet | Single testimonial pull-quote from a named person | Best for story-first heroes where a human voice adds weight |

Never combine multiple micro-zone types in one strip. One type per micro-zone.

---

## Part 6: How to Apply Brand Register to Hero Decisions

The brand register (from `05-brand-direction`) acts as a constraint on every hero decision. Apply it as follows:

**Approachable register:**
- Headlines may be conversational, direct, even casual
- CTAs can be informal ("Get your free quote" not "Request an estimate")
- Proof signals can include warmth (real name testimonials, founder photo, handwritten-style elements)
- Micro-zone type preference: review count strip, social proof snippet
- Layout preference: split layout with a real human face in the media half

**Authoritative register:**
- Headlines must be precise and declarative — not casual, not enthusiastic
- CTAs must be specific and action-clear ("Book a consultation" not "Let's chat")
- Proof signals must be credential-based or results-based — not volume-based
- Micro-zone type preference: credentials row, logo row
- Layout preference: centered type-forward or editorial split with high-quality photography

**Mid-register (neither extreme):**
- Apply the personality dimensions (confidence/warmth/formality/energy/authority from `05-brand-direction`) to resolve ambiguous decisions
- When in doubt: lean toward clarity and specificity over register performance
