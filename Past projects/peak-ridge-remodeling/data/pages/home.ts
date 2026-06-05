export const homePage = {
  hero: {
    headline: "Portland's Remodeling Team You'll Actually Trust",
    subheadline:
      'Kitchen, bathroom, and basement remodeling for Portland metro homeowners — done right, on schedule, and built to last.',
    primaryCTA: { label: 'Get a Free Estimate', href: '/contact' },
    secondaryCTA: { label: 'See Our Work', href: '/portfolio' },
    imageSrc: '/images/hero/home-hero.jpg',
    imageAlt: 'Beautifully remodeled kitchen in Portland home by Peak Ridge Remodeling',
  },
  // Differentiator section — "Why Peak Ridge"
  differentiators: {
    heading: 'Why Portland Homeowners Choose Peak Ridge',
    subheading:
      'There are a lot of contractors out there. Here\'s what actually sets us apart.',
    items: [
      {
        heading: 'One project manager, start to finish',
        body: 'You have a single point of contact who knows your project inside and out. No miscommunications, no surprises, no being passed around.',
      },
      {
        heading: 'Fixed-price estimates — no surprise invoices',
        body: 'We write detailed, fixed-price estimates before work begins. The number you approve is the number you pay.',
      },
      {
        heading: 'We handle all permits',
        body: 'Every permit, every inspection — we manage it. You don\'t have to navigate the city, schedule inspectors, or follow up on paperwork.',
      },
      {
        heading: '12-year workmanship warranty',
        body: 'We stand behind our work. Every project comes with a 12-year warranty on workmanship — longer than most contractors offer.',
      },
    ],
  },
  // Featured portfolio section
  portfolio: {
    heading: 'Our Work',
    subheading: 'A sample of recent projects across Portland.',
    images: [
      {
        src: '/images/portfolio/kitchen-1.jpg',
        alt: 'White shaker kitchen remodel with island — Portland, OR',
        type: 'kitchen',
      },
      {
        src: '/images/portfolio/bathroom-1.jpg',
        alt: 'Master bathroom with walk-in tile shower — Lake Oswego, OR',
        type: 'bathroom',
      },
      {
        src: '/images/portfolio/kitchen-2.jpg',
        alt: 'Open-concept kitchen renovation with quartz countertops',
        type: 'kitchen',
      },
      {
        src: '/images/portfolio/basement-1.jpg',
        alt: 'Finished basement with home office and guest bedroom',
        type: 'basement',
      },
      {
        src: '/images/portfolio/bathroom-2.jpg',
        alt: 'Spa-style bathroom remodel with freestanding tub',
        type: 'bathroom',
      },
      {
        src: '/images/portfolio/kitchen-3.jpg',
        alt: 'Modern kitchen with custom cabinetry and tile backsplash',
        type: 'kitchen',
      },
    ],
    cta: { label: 'View Full Portfolio', href: '/portfolio' },
  },
  // Process steps (short version — 3 steps)
  process: {
    heading: 'How It Works',
    subheading: 'Simple process, clear expectations, no surprises.',
    steps: [
      {
        number: '01',
        heading: 'Free In-Home Estimate',
        body: 'We come to you, assess the project, and provide a detailed, written, fixed-price estimate within a few days.',
      },
      {
        number: '02',
        heading: 'Design & Planning',
        body: 'We finalize materials, layout decisions, and timeline together. We pull all permits and handle scheduling.',
      },
      {
        number: '03',
        heading: 'Build & Deliver',
        body: 'Our crew does the work. You have a project manager on-site and on-call throughout. Final walkthrough before we consider the job done.',
      },
    ],
  },
}
