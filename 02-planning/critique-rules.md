# Critique Rules

This file defines how to evaluate the discovery brief from `01-discovery` before planning begins. Every criterion must be checked. Weaknesses must be named directly in the critique section of the planning PRD.

---

## How to Run the Critique

Read the full discovery brief. Check each criterion below. For each weakness found, record it in the critique section with:
- Category name
- Specific problem found
- Why it matters for planning
- What a good version would look like

After the full check, apply the send-back threshold to decide whether to return the brief or proceed.

---

## Critique Criteria

### A. Audience

**What to check:**
- Is there one clearly defined primary audience?
- Is it specific enough to make design and conversion decisions?
- Does it describe a real person's situation, not just a demographic?

**Weak audience signals:**
- "Everyone," "anyone," "local customers," "homeowners," "small businesses" without further qualification
- Multiple audiences treated as equally important
- Audience described only by age/gender/income without a situation or need
- No indication of what the audience cares about when making a decision

**What to do if weak:**
Flag it. If there is no usable audience at all, this is a send-back item. If there is a partial audience with missing specificity, flag it and infer what you can for planning, labeling the inference as an assumption.

---

### B. Primary CTA

**What to check:**
- Is there exactly one primary CTA named?
- Is it a specific action (call, book, quote request, form fill) or a vague directive (contact us, learn more)?
- Is the CTA appropriate for the audience and offer?
- Is placement intent noted?

**Weak CTA signals:**
- "Contact us" or "get in touch" without specifying the mechanism
- Two or more CTAs listed at equal importance with no ranking
- CTA that doesn't match the business model (e.g., "call us" for a business that only accepts online bookings)
- No CTA at all

**What to do if weak:**
If there is no CTA or two are listed without a ranking, this is a send-back item. If the CTA is vague but inferable, flag it and define a specific version in the planning PRD with the inference labeled.

---

### C. Differentiation

**What to check:**
- Is there a clear, specific differentiator stated?
- Is it provable or at least claimable?
- Is it something a competitor could also say?

**Weak differentiation signals:**
- "Quality work," "we care more," "years of experience," "great customer service"
- No differentiation stated at all
- Differentiation is a list of generic values, not a specific reason to choose this business

**What to do if weak:**
Flag it in the critique. If there is genuinely no differentiation, note this as a trust and positioning risk in the planning PRD. Do not invent a differentiator — but do flag the gap and note that the site will need to lean harder on proof assets and structural trust signals instead.

---

### D. Trust Strategy

**What to check:**
- Are there enough proof assets to support a credible trust strategy?
- Is there a plan for how the site will establish trust if proof is thin?
- Are trust signals appropriate for the audience?

**Weak trust signals:**
- No reviews, testimonials, or results
- Trust section left empty in the brief
- Generic "we've been around for X years" without any supporting proof
- Proof assets listed but too thin to be convincing (e.g., 2 reviews with no star count)

**What to do if weak:**
Flag it. A site with no social proof is a known conversion risk. Note it explicitly in the planning PRD and include a trust gap mitigation instruction for later skills.

---

### E. Offer Clarity

**What to check:**
- Is it clear what the business sells?
- Is the primary offer distinct from secondary offerings?
- Is there enough offer specificity to determine what pages and sections are needed?

**Weak offer signals:**
- "Everything," "whatever you need," or long flat lists of services with no hierarchy
- No indication of which offer is most important or most profitable
- The offer is described only in the business name with no further detail

**What to do if weak:**
If offer is completely undefined, this is a send-back item. If offer is partially defined, infer the primary from context and label the inference.

---

### F. Business and Website Goals

**What to check:**
- Are measurable website goals stated or clearly inferable?
- Are business goals separated from website goals?
- Are the goals realistic for the scope of the site?

**Weak goal signals:**
- "Get more clients" or "grow the business" — these are business goals, not website goals
- No website goals stated at all
- Goals that are too many or contradictory (e.g., "rank #1, get 100 leads, look premium, and appeal to everyone")

**What to do if weak:**
Infer website goals from the CTA, business type, and audience. Label them as inferred. Flag the gap.

---

### G. Feature List

**What to check:**
- Is the feature list realistic for the site's stage and budget context?
- Are any features listed that clearly contradict other constraints (e.g., "minimal build" + "full ecommerce")?
- Are any features listed that sound like scope creep or wishlist items with no strategic rationale?

**Weak feature list signals:**
- Features listed with no prioritization
- Ambitious features for an early-stage local business (blog, loyalty program, chatbot, portal) not tied to a clear need
- Feature list that is blank or missing

**What to do if weak:**
Flag it in the critique. Apply `feature-decision-rules.md` during planning to force a prioritized decision.

---

### H. Visual Direction

**What to check:**
- Are there at least 2 visual references or a described vibe with concrete rules?
- Have vague adjectives been translated into at least 3 concrete design rules?
- Are there banned styles listed?

**Weak visual direction signals:**
- Only adjectives, no concrete rules ("premium, modern, clean" without any translation)
- No references and no described vibe
- No banned styles (especially a risk for AI-generated look)

**What to do if weak:**
Flag it. Note that `05-design-system` will need to do extra directional work and may require a question round before producing the design system. This is not a send-back item on its own unless the rest of the brief is also weak.

---

### I. Constraints and Scope

**What to check:**
- Are technical constraints documented?
- Is budget tier noted (even loosely)?
- Is timeline noted?
- Is post-launch ownership clear?

**Weak constraint signals:**
- No constraints listed at all
- No indication of whether CMS is needed (especially if client may edit the site)
- No timeline when one seems likely to exist

**What to do if weak:**
Flag it. Note the planning implications. If CMS ownership is truly unknown, flag it as a decision to resolve before build plan.

---

## Send-Back Threshold

Send the brief back to `01-discovery` if **two or more** of the following are true:

1. Primary audience is completely undefined or too broad to plan around
2. Primary CTA is missing or genuinely ambiguous
3. Primary offer is unclear
4. No differentiation is stated and no inferenceable differentiation exists in the brief
5. Business type is not confirmed
6. The brief is marked "Partial" in its status field

A single weakness on its own is usually not enough to send back — handle it with flags and assumptions in the planning PRD. But if two or more planning-critical foundations are missing, it is not possible to produce a reliable planning document. Send it back.

**Note:** Visual direction alone is never a send-back trigger.

---

## After the Critique

If you do not send back: include the critique section in the planning PRD. For each weakness found, note how it was handled — either inferred with assumption label, flagged as a risk, or deferred to a specific skill to resolve.

If you do send back: produce the formatted correction request from `SKILL.md`. List the blocking items with required fixes. List non-blocking weaknesses separately. Pause.
