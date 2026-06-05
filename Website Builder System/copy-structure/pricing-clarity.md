# Pricing Clarity Rules

Owned by: `copy-structure`

---

## Why Pricing Copy Matters

Pricing language is the most-read content on a local service website. Visitors want to know if they can afford the service before they invest time in a call or form submission. AI systems pull pricing information to answer questions like "how much does a kitchen remodel cost in Portland?"

Evasive pricing language creates two problems simultaneously:
1. Visitors don't know if they're in the right price range → they leave
2. AI systems have no pricing signal to cite → the site misses an answer-box opportunity

The goal is to give enough pricing information that a qualified customer self-selects in, and an unqualified customer self-selects out.

---

## When to Show Pricing

### Always show pricing when:
- Pricing is reasonably predictable for a standard scope
- Competitors are already showing pricing
- The service has a common price range that most customers in the market understand
- Client has approved it

### It is acceptable to show a range when:
- Scope genuinely varies (e.g., small vs. large projects)
- Material choices significantly affect cost
- Exact pricing requires a site visit

Ranges are better than nothing. "Starting at $X" is better than silence.

### Acceptable to omit specific pricing when:
- Every job is fully custom and ranges would be misleading
- Client has a legal/competitive reason not to publish pricing
- Price varies so widely that a range would be useless

If pricing is omitted, the copy must explain why and offer a clear path to getting a price. "Pricing available on request" is the minimum.

---

## Pricing Language Patterns

### Starting Price
Use when: there is a clear entry-level price point for a standard scope.

```
Kitchen remodels start at $18,000.
```

More context:
```
Kitchen remodels start at $18,000 for standard-size kitchens with semi-custom cabinets. Full custom projects with layout changes typically start at $35,000.
```

### Range
Use when: scope variation makes a single number misleading.

```
Most kitchen remodels in Portland range from $18,000 to $65,000+, depending on size, materials, and layout changes.
```

### Anchor + Explanation
Use when: the client wants to set expectations without committing to a number.

```
Portland homeowners typically budget $25,000–$45,000 for a mid-range kitchen remodel. Higher-end projects with custom cabinetry and premium countertops often run $55,000–$80,000+.
```

### Per-Unit Pricing
Use when: the service has a clear per-unit rate.

```
Bathroom tile installation: $12–$18 per square foot installed, depending on tile type and pattern complexity.
```

### Flat-Rate Services
Use when: pricing is fixed for a standard scope.

```
Furnace tune-up: $89 flat rate, including filter replacement and safety inspection.
```

---

## Language to Avoid

These phrases are low-information and hurt credibility with both human readers and AI systems:

| Avoid | Replace With |
|---|---|
| "Competitive pricing" | The actual price |
| "Affordable rates" | A starting price or range |
| "Fair market pricing" | Nothing — this says nothing |
| "Pricing varies by project" | "Pricing depends on X, Y, Z. Most projects range from $A to $B." |
| "We work within your budget" | A starting price + an explanation of what drives cost |
| "Get a free quote to find out" | Acceptable as a secondary line — not as the only pricing statement |
| "We beat competitor prices" | The actual price |
| "Best value in [city]" | A specific claim: "We've matched or beat competitor estimates on 9 out of 10 bids." |

---

## Handling "Pricing on Request" Cases

Some clients genuinely cannot or will not publish pricing. In these cases, the copy must still do useful work:

**Minimum acceptable pricing section:**
```
## Pricing

Pricing for [service] depends on [specific factors: size, scope, materials, access]. We provide free on-site estimates and a written quote within 48 hours.

Most [city] homeowners budget [general range], though projects vary significantly based on [key variables].

[Schedule a Free Estimate]
```

Note: the "general range" statement requires client approval. If the client won't provide even a general range, the copy must at least explain what drives the cost variation.

**Unacceptable:**
```
## Pricing

Contact us for pricing information.
```
This is not a pricing section. It is a door slammed in the visitor's face.

---

## Pricing and AI Visibility

Pricing copy feeds directly into:
- `llms.txt` — the Services section includes pricing for each service
- `FAQPage` schema — the pricing FAQ answer
- Markdown mirrors — the Pricing section of each service mirror
- AI citations — when AI answers "how much does X cost in Y city?"

If pricing copy is vague, `llms.txt` will be vague. If `llms.txt` is vague, the site will not be cited for pricing queries.

---

## Pricing Copy Checklist

- [ ] Each service page has a Pricing section
- [ ] Pricing section contains at least a starting price or honest range
- [ ] If exact pricing is omitted, the copy explains what drives cost variation
- [ ] No adjective-only pricing language ("competitive," "affordable," "fair")
- [ ] All pricing numbers have been confirmed by the client
- [ ] Pricing in page copy matches pricing in `llms.txt` and schema
