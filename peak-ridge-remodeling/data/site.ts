export const siteConfig = {
  name: 'Peak Ridge Remodeling',
  tagline: 'Portland\'s Trusted Kitchen & Bathroom Remodeling Specialists',
  shortTagline: 'Remodeling done right — since 2012.',
  phone: '(503) 847-2291',
  phoneHref: 'tel:+15038472291',
  email: 'hello@peakridgeremodeling.com',
  address: {
    street: '4817 SE Hawthorne Blvd',
    city: 'Portland',
    state: 'OR',
    zip: '97215',
    full: '4817 SE Hawthorne Blvd, Portland, OR 97215',
  },
  url: 'https://www.peakridgeremodeling.com',
  primaryCTA: {
    label: 'Get a Free Estimate',
    href: '/contact',
  },
  hours: 'Mon–Fri 8am–6pm · Sat 9am–3pm',
  hoursShort: 'Mon–Sat',
  serviceArea: 'Portland metro including Beaverton and Lake Oswego',
  social: {
    google: 'https://g.co/kgs/peakridgeremodeling',
    houzz: 'https://www.houzz.com/peakridgeremodeling',
    instagram: 'https://www.instagram.com/peakridgeremodeling',
  },
  reviews: {
    count: 65,
    rating: 4.9,
    platform: 'Google',
    platformUrl: 'https://g.co/kgs/peakridgeremodeling',
  },
  stats: {
    yearsInBusiness: 12,
    projectsCompleted: 300,
    citiesServed: 3,
  },
  schema: {
    businessType: 'HomeAndConstructionBusiness',
    priceRange: '$$$',
  },
  // Guarantee copy — used in hero, CTA sections, near forms
  guarantee: 'Free estimate · No obligation · We respond within 24 hours',
  guaranteeShort: 'Free estimate. No obligation.',
} as const

export type SiteConfig = typeof siteConfig
