import Link from 'next/link'
import { BookingCTA } from '@/components/ui/BookingCTA'

export default function NotFound() {
  return (
    <div className="bg-surface-light min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-content px-5 md:px-8 py-20 flex flex-col gap-6">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">404</p>
        <h1 className="font-serif text-4xl font-semibold text-text-primary">Page not found.</h1>
        <p className="font-sans text-base text-text-secondary max-w-md">
          We couldn&apos;t find that page. Head back to the homepage or book a tee time directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="font-sans text-sm font-semibold text-text-primary underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
          <BookingCTA />
        </div>
      </div>
    </div>
  )
}
