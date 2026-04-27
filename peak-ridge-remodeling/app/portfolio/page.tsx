import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { GalleryGrid } from '@/components/sections/GalleryGrid'
import { CTASection } from '@/components/sections/CTASection'
import { portfolioPage } from '@/data/pages/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio | Kitchen, Bathroom & Basement Remodeling in Portland',
  description:
    'Browse our portfolio of kitchen, bathroom, and basement remodeling projects across the Portland metro area. See what we can build for your home.',
}

export default function PortfolioPage() {
  return (
    <>
      <Hero
        variant="page"
        headline={portfolioPage.headline}
        subheadline={portfolioPage.subheadline}
        breadcrumb={[{ label: 'Portfolio' }]}
      />

      <GalleryGrid
        images={portfolioPage.images}
        showFilters
        background="base"
      />

      <CTASection
        heading={portfolioPage.cta.heading}
        subheading={portfolioPage.cta.subheading}
        primaryLabel={portfolioPage.cta.label}
        primaryHref={portfolioPage.cta.href}
        variant="primary"
      />
    </>
  )
}
