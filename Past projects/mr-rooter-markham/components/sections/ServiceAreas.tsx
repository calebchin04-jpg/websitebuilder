import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { serviceAreas } from '@/data/service-areas'

export function ServiceAreas() {
  const primary = serviceAreas.filter((a) => a.isPrimary)
  const secondary = serviceAreas.filter((a) => !a.isPrimary)
  return (
    <SectionWrapper bg="surface-1" id="service-areas">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-3">Where We Work</h2>
          <p className="text-text-secondary mb-8">
            Based in Markham. Serving all of York Region — same-day for most of our coverage area.
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {primary.map((area) => (
              <div key={area.slug} className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-text-primary text-sm">{area.name}</p>
                  <p className="text-text-secondary text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {secondary.map((area) => (
              <span
                key={area.slug}
                className="px-3 py-1 bg-surface-2 border border-border-default rounded-full text-xs text-text-secondary font-medium"
              >
                {area.name}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-surface-2 rounded-card p-8 flex flex-col gap-4 border border-border-default">
          <p className="font-semibold text-text-primary">Not sure if we cover your area?</p>
          <p className="text-text-secondary text-sm leading-relaxed">
            Call us at (905) 472-9100 and we&rsquo;ll let you know in 30 seconds. We service most of York Region and can usually accommodate same-day for emergency calls.
          </p>
          <a
            href="tel:+19054729100"
            className="inline-flex items-center gap-1.5 text-brand-red font-semibold text-sm hover:underline"
          >
            Call (905) 472-9100 <ArrowRight size={14} />
          </a>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-1.5 text-text-secondary text-sm hover:underline"
          >
            See full coverage map <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}
