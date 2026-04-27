import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Peak Ridge Remodeling',
  description: 'Privacy policy for Peak Ridge Remodeling — how we collect, use, and protect your information.',
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Privacy Policy"
        breadcrumb={[{ label: 'Privacy Policy' }]}
      />

      <SectionWrapper background="base">
        <div className="max-w-2xl mx-auto prose prose-neutral">
          <p className="text-fine text-text-muted mb-8">Last updated: January 1, 2025</p>

          <section className="mb-8">
            <h2 className="text-h3 font-bold text-text-primary mb-3">Information We Collect</h2>
            <p className="text-body text-text-secondary leading-relaxed mb-3">
              When you submit a form on our website, we collect the information you provide:
              your name, phone number, email address, the type of project you're interested in,
              and any message you include.
            </p>
            <p className="text-body text-text-secondary leading-relaxed">
              We also collect standard web analytics data such as pages visited and
              browser type via our hosting provider. We do not use cookies for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-bold text-text-primary mb-3">How We Use Your Information</h2>
            <p className="text-body text-text-secondary leading-relaxed mb-3">
              We use the information you submit to respond to your estimate request and to
              follow up with you about your project. We do not sell, rent, or share your
              personal information with third parties for marketing purposes.
            </p>
            <p className="text-body text-text-secondary leading-relaxed">
              Your information is transmitted to our email via Resend, a transactional email service.
              We do not store form submissions in a database.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-bold text-text-primary mb-3">Contact Us</h2>
            <p className="text-body text-text-secondary leading-relaxed">
              If you have questions about this privacy policy, please contact us:
            </p>
            <address className="not-italic mt-3 text-body text-text-secondary space-y-1">
              <p>{siteConfig.name}</p>
              <p>{siteConfig.address.full}</p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.phoneHref}
                  className="text-primary hover:underline underline-offset-4"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </address>
          </section>
        </div>
      </SectionWrapper>
    </>
  )
}
