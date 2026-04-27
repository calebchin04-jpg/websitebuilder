import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/data/site'

const secondaryServices = [
  {
    slug: 'drain-cleaning',
    number: '01',
    problems: 'Blocked kitchen sink. Bathroom drain that won\'t clear. Main line backup.',
    name: 'Drain Cleaning',
    trust: 'Usually same-day · Camera inspection if the line needs it',
    cta: 'Book a drain clearing',
  },
  {
    slug: 'sewer-line',
    number: '02',
    problems: 'Sewage smell in the basement. Multiple drains slow at the same time. Wet patch in the yard.',
    name: 'Sewer Line Repair',
    trust: 'Camera diagnosis first, then a quote — no guessing',
    cta: 'Get a sewer inspection',
  },
  {
    slug: 'water-heater',
    number: '03',
    problems: 'No hot water. Tank making noise. Unit that\'s 10+ years old and starting to leak.',
    name: 'Water Heater',
    trust: 'Tank & tankless · Same-day replacement for most calls',
    cta: 'Book water heater service',
  },
  {
    slug: 'backwater-valve',
    number: '04',
    problems: 'Basement flooding after heavy rain. Sewer backing up into floor drain.',
    name: 'Backwater Valve & Sump Pump',
    trust: 'Markham City rebate available — we help with the paperwork',
    cta: 'Ask about flood protection',
  },
]

export function ServicesGrid() {
  return (
    <SectionWrapper bg="surface-2" id="services">

      {/* Header — left-aligned */}
      <div className="mb-7">
        <h2 className="text-3xl font-bold text-text-primary mb-1">
          The Jobs We Get Called For
        </h2>
        <p className="text-text-secondary text-sm">
          Markham and York Region · Flat-rate pricing on every job
        </p>
      </div>

      {/* Zone 1 — Emergency featured card */}
      <div className="bg-surface-dark rounded-card px-6 py-6 mb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-accent-yellow mb-2">
              24 / 7 &nbsp;·&nbsp; No Overtime Charges
            </p>
            <h3 className="text-lg font-bold text-white leading-snug mb-1">
              Something&rsquo;s wrong right now?
            </h3>
            <p className="text-white/55 text-sm leading-relaxed max-w-md">
              Burst pipe, sewage backup, flooding, frozen line — call us. We answer around the clock
              and don&rsquo;t charge more for it.
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 h-11 px-5 bg-brand-red text-white text-sm font-bold rounded-btn hover:bg-brand-red-hover transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <Link
              href="/services/emergency"
              className="text-[11px] text-white/35 hover:text-white/60 transition-colors"
            >
              What counts as a plumbing emergency?
            </Link>
          </div>
        </div>
      </div>

      {/* Zone 2 — Secondary services, 2-col editorial grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border border-border-default rounded-card overflow-hidden bg-surface-1">
        {secondaryServices.map((service, i) => {
          const isLastRow = i >= secondaryServices.length - 2
          const isRightCol = i % 2 !== 0
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={[
                'group block p-6 hover:bg-surface-2 transition-colors duration-150',
                // right column gets a left border on desktop
                isRightCol ? 'sm:border-l border-border-default' : '',
                // bottom border on all except last row
                !isLastRow ? 'border-b border-border-default' : '',
              ].join(' ')}
            >
              {/* Number — subtle wayfinding */}
              <p className="text-[11px] font-bold text-text-secondary/30 mb-3 tracking-widest">
                {service.number}
              </p>

              {/* Problem-first hierarchy */}
              <p className="text-xs text-text-secondary leading-relaxed mb-2">
                {service.problems}
              </p>

              {/* Service name */}
              <p className="font-semibold text-text-primary text-sm mb-1">
                {service.name}
              </p>

              {/* Trust micro-copy */}
              <p className="text-[11px] text-text-secondary/60 mb-4">
                {service.trust}
              </p>

              {/* CTA — always visible */}
              <div className="flex items-center gap-1.5 text-brand-red text-xs font-semibold">
                {service.cta}
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </Link>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[11px] text-text-secondary">
          Upfront pricing on every job. No work starts until you approve the quote.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold hover:underline shrink-0 ml-4"
        >
          All services <ArrowRight size={13} />
        </Link>
      </div>

    </SectionWrapper>
  )
}
