# Follow-Up Rules

This file defines when to ask a follow-up round, what to ask, and what to do when the answers are still insufficient.

`02-planning` may ask at most **1 round of follow-up questions**. This round is reserved for planning-critical gaps that cannot be resolved by inference. It is not a second discovery session.

---

## When to Ask a Follow-Up Round

Ask a follow-up round if **any** of the following are true after reviewing the brief:

1. The primary CTA is still unclear after the return cycle (or if no return cycle happened and the CTA is ambiguous)
2. The core audience is still too broad to make conversion decisions around
3. The feature list includes items where the necessity is genuinely ambiguous and cannot be inferred from business type or context
4. A major content gap exists that would affect page structure decisions (e.g., "do you have before/after photos" was never answered and it's a visual business)
5. The redesign branch contains an unresolved contradiction (user wants to keep something that is clearly causing the problem)
6. Post-launch ownership is unknown and this affects whether CMS must be included in the plan

Do NOT ask a follow-up round for:
- Visual direction gaps (those are flagged and deferred to `05-design-system`)
- Copy or messaging details (defer to `08-copy-structure`)
- Minor optional feature questions (make a decision and label it)
- SEO keyword specifics (defer to `17-local-seo`)
- Typography and color preferences (defer to `05-design-system`)

---

## How to Format the Follow-Up Round

Keep it tight. Name the specific gaps. Ask only what is needed.

Example format:
> Before I can complete the planning document, I need answers to a few specific gaps:
>
> 1. **Primary CTA:** [State what's unclear and ask a direct question to resolve it.]
> 2. **Audience specificity:** [State what's missing and ask for the one detail that would fix it.]
> 3. **[Any other critical gap]:** [Direct question only.]
>
> These are the only items I need. I'll proceed from whatever you provide.

Maximum 4 questions. If there are more than 4 planning-critical gaps, pick the 4 most important and handle the rest with assumptions.

---

## After the Follow-Up Round

Accept whatever is provided. Do not push for more.

For each question that is:
- **Answered clearly:** Use the answer in the planning PRD.
- **Answered vaguely:** Make a reasonable inference, label it as an `[ASSUMPTION]`, and use it.
- **Not answered at all:** Make a reasonable inference based on business type and context, label it as an `[ASSUMPTION]`, and use it.

Then produce the planning PRD. Do not wait for a better answer. Do not ask again.

---

## Assumption Format

Any assumption made due to incomplete input must be labeled in the Assumptions section of the planning PRD.

Format:
> `[ASSUMPTION]` **Topic:** [What was assumed]. **Why:** [User did not answer / gave a vague answer / hit the question limit]. **Impact:** [What downstream decision this affects, and what the risk is if the assumption is wrong].

The goal is to make every assumption visible so that later skills can flag or override it if the user later provides the missing information.

---

## When to Skip the Follow-Up Round Entirely

Skip the follow-up round if:
- The discovery brief is complete and well-formed (all critique criteria pass or weaknesses are minor)
- All planning-critical inputs exist and are specific enough to use
- The brief was sent back and returned with the required fixes addressed

If you skip the follow-up, note in the planning PRD that no follow-up was needed and proceed directly to the output.
