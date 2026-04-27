import type { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <SectionWrapper bg="surface-1">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-text-primary mb-6">Privacy Policy</h1>
        <div className="prose prose-sm text-text-secondary leading-relaxed flex flex-col gap-4">
          <p>
            Mr. Rooter Plumbing of Markham (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy of visitors to this website.
          </p>
          <h2 className="text-base font-semibold text-text-primary mt-4">Information We Collect</h2>
          <p>
            We collect information you voluntarily submit through our contact form: your name, phone number, email address, and the nature of your plumbing inquiry. We do not collect any information automatically beyond standard web server logs.
          </p>
          <h2 className="text-base font-semibold text-text-primary mt-4">How We Use Your Information</h2>
          <p>
            Contact form submissions are used solely to respond to your inquiry. We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>
          <h2 className="text-base font-semibold text-text-primary mt-4">Contact</h2>
          <p>
            Questions about this policy? Call us at (905) 472-9100 or email us through the contact form.
          </p>
          <p className="text-xs text-text-secondary mt-6">Last updated: April 2026</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
