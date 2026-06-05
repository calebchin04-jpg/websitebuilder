export type GreenFeeTier = {
  label:     string
  price:     number
  condition: string
  highlight?: boolean
}

export const greenFees: GreenFeeTier[] = [
  { label: 'Weekday',           price: 44, condition: 'Mon–Fri, excl. holidays', highlight: true },
  { label: 'Weekend & Holidays',price: 48, condition: 'Sat, Sun & holidays' },
  { label: 'Senior',            price: 38, condition: '60+, weekdays excl. holidays' },
  { label: 'Junior — Weekday',  price: 31, condition: 'Under 18, Mon–Fri' },
  { label: 'Junior — Weekend',  price: 35, condition: 'Under 18, Sat & Sun' },
  { label: 'Twilight',          price: 37, condition: 'Any day' },
  { label: 'Replay — Weekday',  price: 26, condition: 'Same-day replay, Mon–Fri' },
  { label: 'Replay — Weekend',  price: 31, condition: 'Same-day replay, Sat & Sun' },
]

export const cartRental = {
  label: 'Power Cart',
  price: 14,
  condition: 'per person',
}

// Preview tiers shown on homepage (condensed — 3 only)
export const greenFeesPreview: GreenFeeTier[] = [
  { label: 'Weekday',  price: 44, condition: 'Mon–Fri', highlight: true },
  { label: 'Weekend',  price: 48, condition: 'Sat & Sun' },
  { label: 'Twilight', price: 37, condition: 'Any day' },
]

// Lesson pricing
export type LessonRate = {
  label: string
  price: number
  note?: string
}

export const privateLessons = {
  individual: [
    { label: '30-Minute Lesson',          price: 90  },
    { label: '1-Hour Lesson',             price: 165 },
    { label: 'Initial Assessment (1 hr)', price: 175 },
  ] as LessonRate[],
  packages: [
    { label: '3 × 30 Minutes',  price: 255   },
    { label: '5 × 30 Minutes',  price: 425   },
    { label: '3 × 1 Hour',      price: 425   },
    { label: '5 × 1 Hour',      price: 700   },
    { label: '10 × 1 Hour',     price: 1350  },
  ] as LessonRate[],
}

export const ladiesLearnToGolf = {
  price:       250,
  perUnit:     'per level',
  description: '5 weekly 1-hour lessons per level, group format',
}

export const juniorCamps = [
  { label: 'Half-Day Camp',  price: 425,  note: '9am–12pm or 1pm–4pm, Mon–Fri' },
  { label: 'Full-Day Camp',  price: 850,  note: '9am–3pm, Mon–Fri' },
] as LessonRate[]
