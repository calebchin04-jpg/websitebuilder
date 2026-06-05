import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { CTABand } from '@/components/sections/CTABand'
import { serviceAreas } from '@/data/service-areas'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas',
  description:
    'Mr. Rooter Plumbing of Markham serves Markham, Stouffville, Unionville, Richmond Hill, and all of York Region. 24/7 emergency service.',
}

export default function ServiceAreasPage() {
  const primary = serviceAreas.filter((a) => a.isPrimary)
  const secondary = serviceAreas.filter((a) => !a.isPrimary)

  return (
    <>
      <PageHero
        title="Where We Serve"
        subtitle="Based in Markham. Covering all of York Region for residential and emergency plumbing."
        breadcrumb="Service Areas"
      />
      <SectionWrapper bg="surface-1">
        <h2 className="text-xl font-bold text-text-primary mb-6">Primary Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {primary.map((area) => (
            <div key={area.slug} className="flex items-start gap-4 bg-surface-2 rounded-card p-5 border border-border-default">
              <MapPin size={18} className="text-brand-red mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-text-primary mb-1">{area.name}</p>
                <p className="text-text-secondary text-sm">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-text-primary mb-6">Extended Coverage</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {secondary.map((area) => (
            <div key={area.slug} className="flex items-center gap-2 px-4 py-2.5 bg-surface-2 border border-border-default rounded-card">
              <MapPin size={13} className="text-brand-red" />
              <span className="text-text-primary text-sm font-medium">{area.name}</span>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-brand-red pl-5 py-1">
          <p className="font-semibold text-text-primary mb-1">Not sure if we cover your area?</p>
          <p className="text-text-secondary text-sm">
            Call <a href="tel:+19054729100" className="text-brand-red font-semibold">(905) 472-9100</a> — we&rsquo;ll let you know in 30 seconds and dispatch a plumber if we can.
          </p>
        </div>
      </SectionWrapper>
      <CTABand />
    </>
  )
}
