import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CTABand } from '@/components/sections/CTABand'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Plumbing Services',
  description:
    'Drain cleaning, sewer line repair, water heater installation, 24/7 emergency plumbing, and backwater valve installation in Markham and York Region.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Plumbing Services in Markham"
        subtitle="Flat-rate pricing on every job. No overtime charges. Licensed plumbers available 24/7."
        breadcrumb="Services"
      />
      <SectionWrapper bg="surface-1">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </SectionWrapper>
      <CTABand />
    </>
  )
}
