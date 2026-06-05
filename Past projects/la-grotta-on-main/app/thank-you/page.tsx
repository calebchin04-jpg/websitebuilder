import { Button } from '@/components/ui/Button'
import { thankYouContent } from '@/data/pages/thank-you'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You — La Grotta On Main',
  description: 'Your enquiry has been received. We will be in touch shortly.',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-surface-1">
      <div className="max-w-lg mx-auto px-5 text-center py-24">
        <div className="text-gold text-5xl mb-6" aria-hidden="true">✓</div>
        <h1 className="font-serif text-4xl font-semibold text-text-primary mb-4">
          {thankYouContent.headline}
        </h1>
        <p className="font-sans text-text-secondary leading-relaxed mb-3">
          {thankYouContent.message}
        </p>
        <p className="font-sans text-text-secondary text-sm">
          {thankYouContent.subMessage}
        </p>
        <div className="mt-10">
          <Button variant="secondary" href={thankYouContent.cta.href}>
            {thankYouContent.cta.label}
          </Button>
        </div>
      </div>
    </div>
  )
}
