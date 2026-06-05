import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Thank You — We\'ll Be in Touch | Peak Ridge Remodeling',
  description: "Thank you for requesting a free estimate. We'll respond within 24 hours.",
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <section
      className="py-24 md:py-32 bg-base min-h-[60vh] flex items-center"
      aria-label="Thank you confirmation"
    >
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          {/* Check icon */}
          <div
            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
            aria-hidden="true"
          >
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-text-primary mb-4 leading-tight">
            We received your request.
          </h1>
          <p className="text-body-lg text-text-secondary leading-relaxed mb-8">
            Someone from Peak Ridge will reach out within 24 hours to schedule your
            free in-home estimate. In the meantime, feel free to call us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-13 px-7 bg-primary text-text-inverse font-semibold text-ui rounded hover:bg-primary-dark transition-colors duration-150 shadow-button active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              style={{ height: '3.25rem' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {siteConfig.phone}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center h-13 px-7 bg-transparent border border-primary text-primary font-semibold text-ui rounded hover:bg-primary/8 transition-colors duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              style={{ height: '3.25rem' }}
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-6 text-fine text-text-muted">
            {siteConfig.hours}
          </p>
        </div>
      </div>
    </section>
  )
}
