import Image from 'next/image'
import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { CTABand } from '@/components/sections/CTABand'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { InquiryForm } from '@/components/sections/InquiryForm'
import { privateFunctionsContent } from '@/data/pages/private-functions'
import { privateFunctionsFAQ } from '@/data/faq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Functions — La Grotta On Main',
  description:
    'Host your next private event at La Grotta On Main in Unionville. Anniversary dinners, corporate events, birthdays — we handle every detail.',
}

export default function PrivateFunctionsPage() {
  const { hero, offer } = privateFunctionsContent

  return (
    <>
      {/* Inner hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden flex items-end">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 lg:px-10 pb-14 lg:pb-20">
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white leading-tight whitespace-pre-line">
            {hero.headline}
          </h1>
          <p className="font-sans text-base lg:text-lg text-white/80 mt-4 max-w-2xl">
            {hero.subline}
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href={hero.cta.href}>
              {hero.cta.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Offer section */}
      <SectionWrapper bg="surface-2" size="standard">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-primary">
            {offer.headline}
          </h2>
          <p className="font-sans text-text-secondary leading-relaxed mt-4 text-base lg:text-lg">
            {offer.intro}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {offer.features.map((feature) => (
            <Link
              key={feature.label}
              href={feature.href}
              className="bg-surface-1 rounded-card p-6 shadow-card block transition-shadow hover:shadow-md hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="font-serif text-lg font-semibold text-text-primary mb-2">
                {feature.label}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Inquiry form section */}
      <SectionWrapper bg="surface-1" size="standard" id="enquiry-form">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-primary">
              {privateFunctionsContent.form.headline}
            </h2>
            <p className="font-sans text-text-secondary mt-3">
              {privateFunctionsContent.form.subline}
            </p>
          </div>
          <InquiryForm />
        </div>
      </SectionWrapper>

      {/* FAQ section */}
      <SectionWrapper bg="surface-2" size="standard">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-primary mb-10">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={privateFunctionsFAQ} />
        </div>
      </SectionWrapper>

      <CTABand />
    </>
  )
}
