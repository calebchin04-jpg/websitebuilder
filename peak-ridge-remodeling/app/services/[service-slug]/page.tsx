import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaOrg } from '@/components/ui/SchemaOrg'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { services } from '@/data/services'
import { siteConfig } from '@/data/site'

type PageProps = {
  params: Promise<{ 'service-slug': string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ 'service-slug': s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { 'service-slug': slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.seo.title,
    description: service.seo.description,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [{ url: service.heroImage }],
    },
  }
}

const serviceSchema = (service: (typeof services)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: {
    '@type': 'City',
    name: 'Portland',
    containedInPlace: {
      '@type': 'State',
      name: 'Oregon',
    },
  },
  description: service.description,
  url: `${siteConfig.url}/services/${service.slug}`,
})

export default async function ServicePage({ params }: PageProps) {
  const { 'service-slug': slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) notFound()

  return (
    <>
      <SchemaOrg schema={serviceSchema(service)} />

      <Hero
        variant="service"
        headline={service.heroHeadline}
        subheadline={service.heroSubheadline}
        primaryCTA={{ label: 'Get a Free Estimate', href: '/contact' }}
        secondaryCTA={{ label: 'See Our Work', href: '/portfolio' }}
        imageSrc={service.heroImage}
        imageAlt={`${service.name} by Peak Ridge Remodeling in Portland, OR`}
        showReviews={false}
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
      />

      <TrustBar />

      {/* Service description + scope */}
      <SectionWrapper background="base">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Description */}
          <div className="reveal">
            <h2 className="text-h2 font-bold text-text-primary mb-4 text-balance">
              {service.name} in Portland
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
              {service.description}
            </p>
            <ul className="space-y-2.5">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body text-text-secondary">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scope */}
          <div className="reveal reveal-delay-2">
            <div className="bg-surface rounded-xl p-6 md:p-8">
              <h3 className="font-bold text-text-primary text-[1.0625rem] mb-5">
                {service.scope.heading}
              </h3>
              <ul className="space-y-3">
                {service.scope.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-body text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <TestimonialsSection
        heading={`What Clients Say About Our ${service.shortName}`}
        ids={service.testimonialIds}
        columns={3}
        background="surface"
      />

      <ProcessSteps
        heading="How the Project Works"
        subheading="Clear expectations from first call to final walkthrough."
        steps={[
          {
            number: '01',
            heading: 'Free In-Home Estimate',
            body: 'We come to you, assess the project, and provide a detailed fixed-price estimate within a few days.',
          },
          {
            number: '02',
            heading: 'Design & Planning',
            body: 'Materials, layout decisions, and timeline finalized together. We handle permits.',
          },
          {
            number: '03',
            heading: 'Build & Deliver',
            body: 'Our crew does the work with a dedicated project manager on-site throughout. Final walkthrough before we consider the job done.',
          },
        ]}
        background="base"
      />

      <FAQAccordion
        heading={`${service.name} FAQs`}
        items={service.faqs}
        background="surface"
      />

      <CTASection
        heading={`Ready to Start Your ${service.shortName} Project?`}
        subheading="Get a free in-home estimate — detailed, written, and fixed-price. No obligation."
        variant="primary"
      />
    </>
  )
}
