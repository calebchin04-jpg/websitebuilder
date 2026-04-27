import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { ContactForm } from '@/components/sections/ContactForm'
import { BusinessMap } from '@/components/sections/BusinessMap'
import { SchemaOrg } from '@/components/ui/SchemaOrg'
import { contactPage } from '@/data/pages/contact'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Get a Free Estimate | Peak Ridge Remodeling Portland OR',
  description: `Request a free in-home estimate for your kitchen, bathroom, or basement project. ${siteConfig.guarantee}. Portland metro.`,
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Get a Free Estimate — Peak Ridge Remodeling',
  url: `${siteConfig.url}/contact`,
  description: 'Request a free in-home estimate for kitchen, bathroom, or basement remodeling.',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.name,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={contactPageSchema} />

      <Hero
        variant="page"
        headline={contactPage.headline}
        subheadline={contactPage.subheadline}
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="py-16 md:py-20 bg-base" aria-label="Contact form and information">
        <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className="reveal">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 reveal reveal-delay-2">
              {/* Trust quote */}
              <div className="bg-surface rounded-xl p-6 border-l-4 border-primary">
                <blockquote>
                  <p className="text-body text-text-secondary leading-relaxed italic mb-4">
                    {contactPage.trustNote.quote}
                  </p>
                  <footer className="text-fine font-semibold text-text-primary">
                    {contactPage.trustNote.attribution}
                  </footer>
                </blockquote>
              </div>

              {/* Alternative contact */}
              <div className="bg-surface rounded-xl p-6">
                <h3 className="font-bold text-text-primary mb-4">
                  {contactPage.alternativeContact.heading}
                </h3>
                <div className="space-y-3">
                  <div>
                    <a
                      href={contactPage.alternativeContact.phoneHref}
                      className="text-[1.25rem] font-bold text-primary hover:underline underline-offset-4 transition-colors"
                    >
                      {contactPage.alternativeContact.phone}
                    </a>
                  </div>
                  <p className="text-fine text-text-secondary">
                    {contactPage.alternativeContact.hours}
                  </p>
                  <div className="pt-1">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-body text-primary hover:underline underline-offset-4 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Service areas */}
              <div className="bg-surface rounded-xl p-6">
                <h3 className="font-bold text-text-primary mb-4">
                  {contactPage.serviceAreaNote.heading}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {contactPage.serviceAreaNote.areas.map((area) => (
                    <li key={area}>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-fine font-medium bg-primary/8 text-primary">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-fine text-text-muted">
                  + surrounding Washington and Clackamas County communities
                </p>
              </div>

              {/* Address */}
              <address className="not-italic text-body text-text-secondary space-y-1">
                <p className="font-semibold text-text-primary">{siteConfig.name}</p>
                <p>{siteConfig.address.street}</p>
                <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
                <p className="pt-1">
                  <Link
                    href="/privacy-policy"
                    className="text-fine text-text-muted hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </address>
            </aside>
          </div>
        </div>
      </section>

      {/* Interactive location map */}
      <section className="py-12 md:py-16 bg-surface" aria-label="Business location map">
        <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <h2 className="text-h3 font-bold text-text-primary mb-2">Find Us</h2>
          <p className="text-body text-text-secondary mb-6">
            {siteConfig.address.full} · <a href={siteConfig.phoneHref} className="text-primary hover:underline">{siteConfig.phone}</a>
          </p>
          <BusinessMap
            location={{
              name: siteConfig.name,
              lat: 45.5133,
              lng: -122.6262,
              address: siteConfig.address.full,
              phone: siteConfig.phone,
              hours: siteConfig.hours,
            }}
            zoom={15}
            height="480px"
          />
        </div>
      </section>
    </>
  )
}
