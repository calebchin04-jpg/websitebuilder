export const aboutPage = {
  hero: {
    headline: 'About Peak Ridge Remodeling',
    subheadline: 'Portland-based, owner-operated, and built on repeat clients and referrals.',
  },
  // Credentials displayed first — proof before story
  credentials: {
    items: [
      { value: '12+', label: 'Years in Portland' },
      { value: '300+', label: 'Projects Completed' },
      { value: '65+', label: 'Google Reviews' },
      { value: '4.9★', label: 'Average Rating' },
    ],
  },
  // Founder story
  story: {
    heading: 'The Story',
    paragraphs: [
      "Peak Ridge was founded in 2012 by Ryan Callahan, a Portland native who spent a decade as a finish carpenter and project manager before starting his own remodeling company. The name comes from the ridge behind the house where Ryan grew up in Southeast Portland.",
      "The business started with one crew doing bathroom tile and kitchen backsplashes. Over twelve years, it grew into a full-service remodeling company completing 30–40 projects a year — but the philosophy hasn't changed: do the work right, stand behind it, and don't take on more than you can manage well.",
      "Today Peak Ridge employs eight people — all W-2 employees, not subcontractors. Every project has a dedicated project manager. We work across Portland, Beaverton, and Lake Oswego.",
    ],
    imageSrc: '/images/team/ryan-on-site.jpg',
    imageAlt: 'Ryan Callahan, founder of Peak Ridge Remodeling, on a project site',
  },
  // Team
  team: {
    heading: 'The Team',
    members: [
      {
        name: 'Ryan Callahan',
        role: 'Founder & Lead Project Manager',
        bio: '12 years running Peak Ridge. Background in finish carpentry and project management. Licensed Oregon CCB contractor.',
        photoSrc: '/images/team/ryan.jpg',
        photoAlt: 'Ryan Callahan, founder',
      },
      {
        name: 'Dana Morales',
        role: 'Project Manager',
        bio: '6 years with Peak Ridge. Manages kitchen and bathroom projects across Portland. Client-facing from estimate to walkthrough.',
        photoSrc: '/images/team/dana.jpg',
        photoAlt: 'Dana Morales, project manager',
      },
    ],
  },
  // Full process steps (5-step version)
  process: {
    heading: 'How We Work',
    subheading: "From first call to finished project — here's exactly what to expect.",
    steps: [
      {
        number: '01',
        heading: 'Free In-Home Estimate',
        body: "We come to you. Ryan or Dana walks the space, asks about your goals, and takes measurements. Within a few days, you'll receive a detailed written estimate — fixed-price, no hidden fees.",
      },
      {
        number: '02',
        heading: 'Design & Material Selection',
        body: "We work through layout decisions, material choices, and finishes together. We guide the process — you don't need to know what you want before the first meeting.",
      },
      {
        number: '03',
        heading: 'Permits & Scheduling',
        body: "We pull every permit and manage every inspection. You get a day-by-day project schedule so you always know what's happening and when.",
      },
      {
        number: '04',
        heading: 'Build',
        body: "Our crew does the work. Your project manager is on-site daily during active phases and available by phone or text throughout. We clean up at the end of every workday.",
      },
      {
        number: '05',
        heading: 'Final Walkthrough & Warranty',
        body: "We walk through the finished project together. Every item is addressed before we consider the job complete. Your 12-year workmanship warranty starts on this day.",
      },
    ],
  },
  // Guarantee / commitment statement
  commitment: {
    heading: 'Our Commitment',
    body: "Every project comes with a 12-year workmanship warranty and a single point of contact from estimate to final walkthrough. We're not done until you're satisfied.",
    accentText: '12-year workmanship warranty',
  },
}
