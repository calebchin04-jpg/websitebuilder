import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-surface-1">
      <h1 className="font-serif text-4xl text-text-primary mb-4">Page Not Found</h1>
      <p className="font-sans text-text-secondary mb-8">
        We couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="font-sans font-semibold text-gold hover:text-gold-hover transition-colors duration-200"
      >
        Return to Homepage
      </Link>
    </div>
  )
}
