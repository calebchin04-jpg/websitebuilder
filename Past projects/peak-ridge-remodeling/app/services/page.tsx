import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Services | Kitchen, Bathroom & Basement Remodeling Portland OR',
  description: `Kitchen, bathroom, and basement remodeling services in Portland, OR. ${siteConfig.reviews.count}+ Google reviews, ${siteConfig.reviews.rating}★. Free in-home estimate — no obligation.`,
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Remodeling Services"
        subheadline="Kitchen, bathroom, and basement remodeling done right — on schedule and backed by a 12-year workmanship warranty."
        primaryCTA={{ label: 'Get a Free Estimate', href: '/contact' }}
        breadcrumb={[{ label: 'Services' }]}
      />

      <ServicesGrid
        heading="What We Build"
        subheading="Every project has a dedicated project manager and is backed by our 12-year workmanship warranty."
        background="surface"
      />

      <CTASection
        heading="Not sure where to start?"
        subheading="Tell us about your project — we'll come to you and provide a free, detailed estimate."
        variant="primary"
      />
    </>
  )
}
