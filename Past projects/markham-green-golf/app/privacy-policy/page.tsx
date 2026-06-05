import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicyPage() {
  const year = new Date().getFullYear()

  return (
    <div className="bg-surface-light py-16 md:py-20">
      <div className="mx-auto max-w-prose px-5 md:px-8">
        <h1 className="font-serif text-3xl font-semibold text-text-primary mb-6">Privacy Policy</h1>
        <p className="font-sans text-sm text-text-secondary mb-8">Last updated: April {year}</p>

        <div className="flex flex-col gap-6 font-sans text-sm text-text-secondary leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-semibold text-text-primary mb-3">Overview</h2>
            <p>
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at markhamgreen.com.
              This page explains how we handle information in connection with your use of our site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-text-primary mb-3">Information We Collect</h2>
            <p>
              This website does not collect personal information through forms or registration.
              If you contact us via phone or email, you may voluntarily provide your name and
              contact details — this information is used solely to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-text-primary mb-3">Third-Party Services</h2>
            <p>
              This site may use Google Analytics to understand aggregate site traffic. Google Maps
              may be embedded on our contact page. These services are subject to their respective
              privacy policies. We do not share any personal data with third parties for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-text-primary mb-3">Cookies</h2>
            <p>
              We may use basic analytics cookies to understand how visitors use this site.
              You can disable cookies in your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-text-primary mb-3">Contact</h2>
            <p>
              If you have questions about this policy, contact us at{' '}
              <a href={`tel:${siteConfig.phoneRaw}`} className="text-text-primary hover:underline">
                {siteConfig.phone}
              </a>
              .
            </p>
          </section>

          <p className="text-text-secondary/60 text-xs pt-4 border-t border-border-warm">
            © {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </div>
  )
}
