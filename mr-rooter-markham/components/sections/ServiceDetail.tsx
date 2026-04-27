import Link from 'next/link'
import { CheckCircle2, Phone } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { PageHero } from './PageHero'
import { CTABand } from './CTABand'
import { services } from '@/data/services'
import { siteConfig } from '@/data/site'
import type { Service } from '@/data/services'

type ServiceDetailProps = {
  service: Service
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon
  const isEmergency = service.slug === 'emergency'

  const related = service.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[]

  return (
    <>
      <PageHero
        title={service.name}
        subtitle={service.shortDescription}
        variant={isEmergency ? 'emergency' : 'standard'}
        breadcrumb="Services"
      />

      {isEmergency && (
        <div className="bg-surface-dark border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-white font-semibold">Plumbing emergency right now?</p>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 h-12 px-6 bg-brand-red text-white font-bold text-lg rounded-btn hover:bg-brand-red-hover transition-colors"
            >
              <Phone size={18} />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      )}

      <SectionWrapper bg="surface-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-red-50 flex items-center justify-center text-brand-red">
                <Icon size={20} />
              </div>
              <h2 className="text-xl font-bold text-text-primary">About This Service</h2>
            </div>

            <p className="text-text-secondary leading-relaxed">{service.fullDescription}</p>

            <div>
              <h3 className="font-semibold text-text-primary mb-4">What&rsquo;s Included</h3>
              <ul className="flex flex-col gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-red mt-0.5 shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <div>
                <h3 className="font-semibold text-text-primary mb-4">Common Questions</h3>
                <div className="flex flex-col gap-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.q} className="border-b border-border-default pb-4 last:border-0">
                      <p className="font-medium text-text-primary text-sm mb-2">{faq.q}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="bg-surface-dark text-text-inverse rounded-card p-6 flex flex-col gap-4">
              <p className="font-bold text-base">Ready to book?</p>
              <p className="text-white/70 text-sm">Call for an immediate quote or schedule online.</p>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 h-12 bg-brand-red text-white font-semibold rounded-btn hover:bg-brand-red-hover transition-colors uppercase tracking-wide text-sm"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center h-11 border border-white/30 text-white text-sm font-medium rounded-btn hover:bg-white/10 transition-colors"
              >
                Schedule Service
              </Link>
              <p className="text-white/40 text-xs">No overtime charges · Flat-rate pricing</p>
            </div>

            {related.length > 0 && (
              <div className="bg-surface-2 rounded-card p-5 border border-border-default">
                <p className="font-semibold text-text-primary text-sm mb-3">Related Services</p>
                <div className="flex flex-col gap-2">
                  {related.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="text-sm text-brand-red hover:underline"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      <CTABand />
    </>
  )
}
