import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SchemaOrg } from '@/components/ui/SchemaOrg'
import { serviceAreas } from '@/data/service-areas'
import { siteConfig } from '@/data/site'

type PageProps = {
  params: Promise<{ 'city-slug': string }>
}

export async function generateStaticParams() {
  return serviceAreas.map((a) => ({ 'city-slug': a.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { 'city-slug': slug } = await params
  const area = serviceAreas.find((a) => a.slug === slug)
  if (!area) return {}
  return {
    title: area.seo.title,
    description: area.seo.description,
  }
}

const citySchema = (area: (typeof serviceAreas)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteConfig.name,
  url: `${siteConfig.url}/service-areas/${area.slug}`,
  telephone: siteConfig.phone,
  areaServed: {
    '@type': 'City',
    name: area.name,
    containedInPlace: {
      '@type': 'State',
      name: 'Oregon',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: siteConfig.reviews.rating,
    reviewCount: siteConfig.reviews.count,
    bestRating: 5,
  },
})

export default async function CityPage({ params }: PageProps) {
  const { 'city-slug': slug } = await params
  const area = serviceAreas.find((a) => a.slug === slug)

  if (!area) notFound()

  return (
    <>
      <SchemaOrg schema={citySchema(area)} />

      <Hero
        variant="city"
        headline={area.heroHeadline}
        subheadline={area.heroSubheadline}
        primaryCTA={{ label: 'Get a Free Estimate', href: '/contact' }}
        secondaryCTA={{ label: 'See Our Work', href: '/portfolio' }}
        showReviews={false}
        breadcrumb={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: area.name },
        ]}
      />

      <TrustBar />

      {/* Local intro */}
      <SectionWrapper background="base">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-h2 font-bold text-text-primary mb-4 text-balance">
            Remodeling in {area.fullName}
          </h2>
          <p className="text-body-lg text-text-secondary leading-relaxed mb-8">
            {area.introText}
          </p>

          {/* Neighborhoods */}
          <div>
            <h3 className="text-ui font-semibold uppercase tracking-wider text-text-muted mb-4">
              Neighborhoods We Serve in {area.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {area.neighborhoods.map((hood) => (
                <li key={hood}>
                  <span className="inline-flex px-3 py-1 rounded-full text-fine font-medium bg-surface border border-border text-text-secondary">
                    {hood}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <ServicesGrid
        heading={`Remodeling Services in ${area.name}`}
        subheading="Kitchen, bathroom, and basement remodeling — backed by a 12-year workmanship warranty."
        background="surface"
      />

      <TestimonialsSection
        heading={`What ${area.name} Homeowners Say`}
        ids={area.testimonialIds}
        columns={area.testimonialIds.length === 2 ? 2 : 3}
        background="base"
      />

      <CTASection
        heading={`Ready to Remodel Your ${area.name} Home?`}
        subheading="Free in-home estimate, fixed-price quote, no obligation."
        variant="primary"
      />
    </>
  )
}
