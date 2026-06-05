import { SectionWrapper } from '@/components/ui/SectionWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — La Grotta On Main',
  description: 'Privacy policy for the La Grotta On Main website.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SectionWrapper bg="surface-1" size="standard">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl font-semibold text-text-primary mb-8">
            Privacy Policy
          </h1>
          <div className="font-sans text-text-secondary leading-relaxed space-y-6 text-base">
            <p>
              This website is operated by La Grotta On Main, located at 205 Main Street,
              Unionville, Ontario.
            </p>

            <h2 className="font-serif text-xl font-semibold text-text-primary mt-8">
              Information We Collect
            </h2>
            <p>
              When you submit an enquiry through our Private Functions form, we collect your
              name, email address, and event details. This information is used solely to
              respond to your enquiry.
            </p>

            <h2 className="font-serif text-xl font-semibold text-text-primary mt-8">
              How We Use Your Information
            </h2>
            <p>
              We use your information only to respond to your enquiry. We do not sell, share,
              or distribute your personal information to third parties.
            </p>

            <h2 className="font-serif text-xl font-semibold text-text-primary mt-8">
              Analytics
            </h2>
            <p>
              This website uses Google Analytics to understand how visitors use the site.
              This data is aggregated and anonymous. You may opt out using your browser
              settings or a Google Analytics opt-out extension.
            </p>

            <h2 className="font-serif text-xl font-semibold text-text-primary mt-8">
              Contact
            </h2>
            <p>
              For any privacy questions, please email us at lagrottaonmain@gmail.com.
            </p>

            <p className="text-sm text-text-secondary/60 mt-12">
              Last updated: April 2026
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
