import Link from 'next/link'
import { siteConfig } from '@/data/site'

export default function NotFound() {
  return (
    <section
      className="py-24 md:py-32 bg-base min-h-[60vh] flex items-center"
      aria-label="Page not found"
    >
      <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div
            className="text-[5rem] font-extrabold text-border leading-none mb-6 select-none"
            aria-hidden="true"
          >
            404
          </div>
          <h1 className="text-[2rem] font-extrabold text-text-primary mb-4 leading-tight">
            Page not found
          </h1>
          <p className="text-body-lg text-text-secondary leading-relaxed mb-8">
            We couldn't find what you were looking for. It may have moved or the URL
            may be incorrect.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-13 px-7 bg-primary text-text-inverse font-semibold text-ui rounded hover:bg-primary-dark transition-colors duration-150 shadow-button active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              style={{ height: '3.25rem' }}
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-13 px-7 bg-transparent border border-primary text-primary font-semibold text-ui rounded hover:bg-primary/8 transition-colors duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              style={{ height: '3.25rem' }}
            >
              Get a Free Estimate
            </Link>
          </div>

          <p className="mt-8 text-fine text-text-muted">
            Need help?{' '}
            <a
              href={siteConfig.phoneHref}
              className="text-primary hover:underline underline-offset-4"
            >
              Call us at {siteConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
