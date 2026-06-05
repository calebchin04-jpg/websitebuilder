import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { CTABand } from '@/components/sections/CTABand'
import { TrustBar } from '@/components/sections/TrustBar'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Mr. Rooter Plumbing of Markham — licensed plumbers serving the Markham community since 1995. Local, honest, flat-rate pricing.',
}

const commitments = [
  'Upfront flat-rate pricing — quoted before any work begins',
  'No overtime charges, ever — same price at 2am as 2pm',
  'Licensed and insured plumbers on every job',
  'Backed by the Neighbourly Done Right Promise®',
  'Locally operated in Markham since 1995',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Mr. Rooter Plumbing of Markham"
        subtitle="Serving Markham families and businesses since 1995."
        breadcrumb="About"
      />
      <TrustBar />
      <SectionWrapper bg="surface-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-text-primary">30 Years in Markham</h2>
            <p className="text-text-secondary leading-relaxed">
              Mr. Rooter Plumbing of Markham has been serving homeowners and businesses across Markham and York Region since 1995. We&rsquo;re not a corporate call centre — we&rsquo;re a locally operated franchise with real technicians who know the area.
            </p>
            <p className="text-text-secondary leading-relaxed">
              In 30 years, the most common complaint we hear about other plumbers is the same: they showed up, the price wasn&rsquo;t what was quoted, and they charged extra for being called after hours. We built our business around fixing exactly that.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Flat-rate pricing means you get a number before we start. No overtime means the price is the same at midnight as it is at noon. That&rsquo;s not a marketing line — it&rsquo;s how we run every job.
            </p>
          </div>
          <div className="bg-surface-2 rounded-card p-7 border border-border-default">
            <h3 className="font-bold text-text-primary mb-5">Our Commitments</h3>
            <ul className="flex flex-col gap-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-brand-red mt-0.5 shrink-0" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
      <CTABand heading="Have a plumbing question?" subtext="Call us — we'll tell you upfront whether it's something we need to fix." />
    </>
  )
}
