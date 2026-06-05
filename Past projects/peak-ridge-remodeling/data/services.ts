export type Service = {
  slug: string
  name: string
  shortName: string
  shortDescription: string
  heroHeadline: string
  heroSubheadline: string
  description: string
  scope: {
    heading: string
    items: string[]
  }
  benefits: string[]
  heroImage: string    // path from /public/
  cardImage: string    // path from /public/
  faqs: { question: string; answer: string }[]
  testimonialIds: string[]  // references testimonials.ts ids
  seo: {
    title: string
    description: string
  }
}

export const services: Service[] = [
  {
    slug: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    shortName: 'Kitchens',
    shortDescription:
      'Complete kitchen transformations — custom cabinetry, countertops, appliances, and layout changes done to last.',
    heroHeadline: 'Portland Kitchen Remodeling',
    heroSubheadline:
      'Custom kitchen renovations built around how you actually live. We handle design, permits, and everything in between.',
    description:
      'We\'ve remodeled 100+ kitchens across the Portland metro — from thoughtful galley upgrades to full open-concept transformations. Our process is hands-on from first visit to final walkthrough.',
    scope: {
      heading: 'What Kitchen Remodeling Includes',
      items: [
        'Cabinet design, fabrication, or replacement',
        'Countertop installation (quartz, granite, butcher block)',
        'Appliance integration and electrical updates',
        'Flooring installation — tile, hardwood, LVP',
        'Plumbing relocation and fixture upgrades',
        'Island additions and layout changes',
        'Lighting design and installation',
        'Permit management — we handle it all',
      ],
    },
    benefits: [
      'Free in-home estimate with detailed written quote',
      'One dedicated project manager start to finish',
      'Licensed, bonded, and insured',
      '12-year workmanship warranty',
      'No subcontractor surprises — our crew does the work',
    ],
    heroImage: '/images/services/kitchen-hero.jpg',
    cardImage: '/images/services/kitchen-card.jpg',
    faqs: [
      {
        question: 'How long does a kitchen remodel take?',
        answer:
          'Most kitchen remodels take 4–8 weeks from demo to final walkthrough. Larger projects with custom cabinetry or structural changes may run 8–12 weeks. We give you a detailed timeline before we start and communicate weekly throughout.',
      },
      {
        question: 'How much does a kitchen remodel cost?',
        answer:
          'Portland kitchen remodels typically run $30,000–$80,000+ depending on scope, materials, and layout changes. We provide a fixed-price written estimate after the in-home visit — no surprise invoices.',
      },
      {
        question: 'Do you handle permits?',
        answer:
          'Yes. We pull all required permits and manage the inspection process. You don\'t need to do anything — we handle it from start to approved.',
      },
      {
        question: 'Do I need to leave my home during the remodel?',
        answer:
          'Most homeowners stay in place. We seal off the work area, protect flooring and surfaces, and clean up daily. We\'ll let you know if any phase requires temporary kitchen access to be shut off, and we schedule those periods to minimize disruption.',
      },
      {
        question: 'Can you move walls or change the kitchen layout?',
        answer:
          'Yes. Structural changes including wall removal (load-bearing and non-load-bearing), island additions, and complete layout redesigns are within our scope. All structural work includes engineering review and permits.',
      },
    ],
    testimonialIds: ['t1', 't2', 't5'],
    seo: {
      title: 'Kitchen Remodeling Portland OR | Peak Ridge Remodeling',
      description:
        'Custom kitchen remodeling in Portland, OR. Cabinetry, countertops, appliances, layout changes, permits included. 65+ Google reviews, 4.9★. Free estimate.',
    },
  },
  {
    slug: 'bathroom-remodeling',
    name: 'Bathroom Remodeling',
    shortName: 'Bathrooms',
    shortDescription:
      'Spa-quality bathroom renovations — tile work, vanities, walk-in showers, and complete gut-to-finish rebuilds.',
    heroHeadline: 'Portland Bathroom Remodeling',
    heroSubheadline:
      'From master bath overhauls to guest bath refreshes — precise tile work, proper waterproofing, and finishes that last.',
    description:
      'Bathrooms are unforgiving rooms — bad waterproofing and rushed tile work fail fast. We\'ve completed 150+ bathroom remodels in Portland and do the work right the first time.',
    scope: {
      heading: 'What Bathroom Remodeling Includes',
      items: [
        'Full demo and waterproof substrate installation',
        'Custom tile work — floors, walls, shower enclosures',
        'Vanity installation and custom built-ins',
        'Freestanding tubs, alcoves, and walk-in shower conversions',
        'Plumbing fixture upgrades',
        'Exhaust fan installation and electrical updates',
        'Heated floor installation',
        'Glass shower enclosures and frameless doors',
        'Permit management',
      ],
    },
    benefits: [
      'Proper waterproofing — every time, no shortcuts',
      'Free in-home estimate with detailed written quote',
      'One dedicated project manager start to finish',
      'Licensed, bonded, and insured',
      '12-year workmanship warranty',
    ],
    heroImage: '/images/services/bathroom-hero.jpg',
    cardImage: '/images/services/bathroom-card.jpg',
    faqs: [
      {
        question: 'How long does a bathroom remodel take?',
        answer:
          'A standard full bathroom remodel takes 2–4 weeks. Master bath projects with custom tile work, heated floors, or specialty fixtures run 4–6 weeks. We give you a day-by-day schedule before demo starts.',
      },
      {
        question: 'What does bathroom remodeling cost in Portland?',
        answer:
          'Guest bath remodels typically run $12,000–$25,000. Master bath projects with walk-in showers, freestanding tubs, or custom tile work range from $25,000–$60,000+. We provide a fixed written quote after the estimate visit.',
      },
      {
        question: 'Can you convert a tub to a walk-in shower?',
        answer:
          'Yes. Tub-to-shower conversions are one of our most requested projects. We handle the plumbing relocation, niche installation, waterproofing, tile, and glass enclosure.',
      },
      {
        question: 'Do you do heated floors?',
        answer:
          'Yes. Radiant floor heating is available for any tile project. We install the heating elements before the tile goes down and wire to a programmable thermostat.',
      },
    ],
    testimonialIds: ['t3', 't4', 't6'],
    seo: {
      title: 'Bathroom Remodeling Portland OR | Peak Ridge Remodeling',
      description:
        'Expert bathroom remodeling in Portland, OR. Custom tile, walk-in showers, vanities, full gut remodels. 65+ Google reviews, 4.9★. Free in-home estimate.',
    },
  },
  {
    slug: 'basement-finishing',
    name: 'Basement Finishing',
    shortName: 'Basements',
    shortDescription:
      'Turn unfinished basement square footage into livable space — home offices, guest suites, home theaters, and more.',
    heroHeadline: 'Portland Basement Finishing',
    heroSubheadline:
      'Add livable square footage without adding on. We design and build finished basements that look like the rest of your home.',
    description:
      'A finished basement can add 20–30% more usable square footage to your home. We\'ve finished 60+ Portland basements — from simple open-plan spaces to multi-room suites with full baths.',
    scope: {
      heading: 'What Basement Finishing Includes',
      items: [
        'Framing, insulation, and vapor barrier installation',
        'Drywall, taping, and finishing',
        'Electrical — outlets, recessed lighting, sub-panel if needed',
        'HVAC extension or supplemental heating/cooling',
        'Plumbing rough-in for wet bars or bathrooms',
        'Flooring — LVP, carpet, tile',
        'Egress window installation for bedroom compliance',
        'Permit management and inspections',
      ],
    },
    benefits: [
      'Free in-home estimate with detailed written quote',
      'Full-service — we handle every trade in-house',
      'Licensed, bonded, and insured',
      '12-year workmanship warranty',
      'Designs that match the rest of your home',
    ],
    heroImage: '/images/services/basement-hero.jpg',
    cardImage: '/images/services/basement-card.jpg',
    faqs: [
      {
        question: 'How long does basement finishing take?',
        answer:
          'A standard open-plan basement finish runs 4–8 weeks. Multi-room projects with bathrooms, egress windows, or complex electrical take 8–14 weeks. We provide a full project schedule before work begins.',
      },
      {
        question: 'What does finishing a basement cost in Portland?',
        answer:
          'Basic open-plan finishes start around $35–$55 per square foot. Full-featured basements with bathrooms, wet bars, and custom finishes run $65–$95+ per square foot. We provide a written fixed-price quote after the estimate visit.',
      },
      {
        question: 'Do you handle permits for basement finishing?',
        answer:
          'Yes. Basement finishing almost always requires permits and inspections. We manage the entire permitting process — you don\'t have to do anything.',
      },
      {
        question: 'Can you add a bathroom to a basement?',
        answer:
          'Yes. Adding a half bath, full bath, or wet bar to a basement is within our scope. We do the plumbing rough-in, waterproofing, tile, and fixture installation.',
      },
    ],
    testimonialIds: ['t1', 't4', 't6'],
    seo: {
      title: 'Basement Finishing Portland OR | Peak Ridge Remodeling',
      description:
        'Professional basement finishing in Portland, OR. Home offices, guest suites, home theaters. Full-service remodel with permits. Free estimate, 4.9★ Google reviews.',
    },
  },
]

export type ServiceSlug = (typeof services)[number]['slug']
