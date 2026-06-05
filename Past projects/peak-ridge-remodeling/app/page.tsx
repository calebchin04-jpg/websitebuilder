import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { GalleryGrid } from '@/components/sections/GalleryGrid'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaOrg } from '@/components/ui/SchemaOrg'
import { homePage } from '@/data/pages/home'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} | Portland Kitchen, Bathroom & Basement Remodeling`,
  description: `Portland's trusted remodeling contractor since 2012. Kitchen, bathroom, and basement remodeling. ${siteConfig.reviews.count}+ Google reviews, ${siteConfig.reviews.rating}★. Free in-home estimate.`,
  openGraph: {
    title: `${siteConfig.name} | Portland Remodeling`,
    description: `Kitchen, bathroom, and basement remodeling for Portland metro homeowners. Free estimate. ${siteConfig.reviews.rating}★ on Google.`,
    images: [{ url: '/images/og/home-og.jpg', width: 1200, height: 630 }],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.5121,
    longitude: -122.6219,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '15:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: siteConfig.reviews.rating,
    reviewCount: siteConfig.reviews.count,
    bestRating: 5,
  },
  priceRange: siteConfig.schema.priceRange,
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 45.5051,
      longitude: -122.6750,
    },
    geoRadius: '40000',
  },
  sameAs: [
    siteConfig.social.google,
    siteConfig.social.instagram,
  ],
}

export default function HomePage() {
  const { hero, differentiators, portfolio, process } = homePage

  return (
    <>
      <SchemaOrg schema={localBusinessSchema} />

      <Hero
        variant="home"
        headline={hero.headline}
        subheadline={hero.subheadline}
        primaryCTA={hero.primaryCTA}
        secondaryCTA={hero.secondaryCTA}
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
        showReviews
      />

      <TrustBar />

      <ServicesGrid
        heading="What We Build"
        subheading="Kitchen, bathroom, and basement remodeling — start to finish."
        background="surface"
      />

      {/* Differentiators */}
      <section className="py-16 md:py-20 lg:py-24 bg-base" aria-label="Why choose Peak Ridge">
        <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 reveal">
            <h2 className="text-h2 font-bold text-text-primary mb-3 text-balance">
              {differentiators.heading}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {differentiators.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.items.map((item, i) => (
              <div
                key={item.heading}
                className={`bg-surface rounded-xl p-6 reveal ${
                  i === 0 ? 'reveal-delay-1' : i === 1 ? 'reveal-delay-2' : i === 2 ? 'reveal-delay-3' : 'reveal-delay-4'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary text-[1.0625rem] mb-2 leading-snug">
                  {item.heading}
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryGrid
        heading={portfolio.heading}
        subheading={portfolio.subheading}
        images={portfolio.images.map((img) => ({
          ...img,
          category: img.type as 'kitchen' | 'bathroom' | 'basement',
        }))}
        cta={portfolio.cta}
        background="surface"
      />

      <ProcessSteps
        heading={process.heading}
        subheading={process.subheading}
        steps={process.steps}
        background="base"
      />

      <TestimonialsSection
        heading="What Portland Homeowners Say"
        subheading="Real reviews from real clients — not cherry-picked."
        ids={['t1', 't3', 't6']}
      />

      <CTASection
        heading="Ready to Get Started?"
        subheading="Get a free in-home estimate with a detailed, written, fixed-price quote."
        variant="primary"
      />
    </>
  )
}
