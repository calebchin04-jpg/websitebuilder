export type PortfolioImage = {
  src: string
  alt: string
  category: 'kitchen' | 'bathroom' | 'basement'
  caption?: string
}

export const portfolioPage = {
  headline: 'Our Work',
  subheadline: 'Kitchen, bathroom, and basement remodeling across the Portland metro.',
  images: [
    // Kitchen projects
    { src: '/images/portfolio/kitchen-1.jpg', alt: 'Open-concept kitchen remodel — Portland, OR', category: 'kitchen' as const, caption: 'Open-concept kitchen, Portland' },
    { src: '/images/portfolio/kitchen-2.jpg', alt: 'White shaker cabinets with quartz countertops', category: 'kitchen' as const, caption: 'Custom cabinetry, Lake Oswego' },
    { src: '/images/portfolio/kitchen-3.jpg', alt: 'Modern kitchen with island addition', category: 'kitchen' as const, caption: 'Island addition, Beaverton' },
    { src: '/images/portfolio/kitchen-4.jpg', alt: 'Galley kitchen with tile backsplash', category: 'kitchen' as const, caption: 'Galley kitchen renovation, Portland' },
    { src: '/images/portfolio/kitchen-5.jpg', alt: 'Dark cabinetry kitchen with brass fixtures', category: 'kitchen' as const, caption: 'Transitional kitchen, Portland' },
    { src: '/images/portfolio/kitchen-6.jpg', alt: 'Farmhouse kitchen with butcher block counters', category: 'kitchen' as const, caption: 'Farmhouse style, Portland' },
    // Bathroom projects
    { src: '/images/portfolio/bathroom-1.jpg', alt: 'Master bathroom with walk-in shower', category: 'bathroom' as const, caption: 'Master bath, Lake Oswego' },
    { src: '/images/portfolio/bathroom-2.jpg', alt: 'Spa bathroom with freestanding tub', category: 'bathroom' as const, caption: 'Spa bath, Portland' },
    { src: '/images/portfolio/bathroom-3.jpg', alt: 'Guest bathroom with hex tile floor', category: 'bathroom' as const, caption: 'Guest bath, Beaverton' },
    { src: '/images/portfolio/bathroom-4.jpg', alt: 'Primary bath with double vanity', category: 'bathroom' as const, caption: 'Double vanity, Portland' },
    { src: '/images/portfolio/bathroom-5.jpg', alt: 'Shower niche with zellige tile', category: 'bathroom' as const, caption: 'Custom tile, Portland' },
    { src: '/images/portfolio/bathroom-6.jpg', alt: 'Kids bathroom with subway tile and built-in bench', category: 'bathroom' as const, caption: 'Kids bath, Lake Oswego' },
    // Basement projects
    { src: '/images/portfolio/basement-1.jpg', alt: 'Finished basement with home office', category: 'basement' as const, caption: 'Home office, Portland' },
    { src: '/images/portfolio/basement-2.jpg', alt: 'Basement with wet bar and entertainment space', category: 'basement' as const, caption: 'Entertainment basement, Beaverton' },
    { src: '/images/portfolio/basement-3.jpg', alt: 'Guest suite basement with full bathroom', category: 'basement' as const, caption: 'Guest suite, Lake Oswego' },
  ],
  cta: {
    heading: 'Like what you see?',
    subheading: "Let's build yours.",
    label: 'Get a Free Estimate',
    href: '/contact',
  },
}
