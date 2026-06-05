import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone } from 'lucide-react'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle2 size={28} className="text-color-success" />
        </div>
        <h1 className="text-2xl font-bold text-text-primary">We&rsquo;ll be in touch shortly.</h1>
        <p className="text-text-secondary leading-relaxed">
          Your message was received. We typically follow up within a few hours. For anything urgent, call us directly.
        </p>
        <a
          href={siteConfig.phoneHref}
          className="flex items-center gap-2 h-12 px-6 bg-brand-red text-white font-semibold rounded-btn hover:bg-brand-red-hover transition-colors uppercase tracking-wide text-sm"
        >
          <Phone size={16} />
          {siteConfig.phone}
        </a>
        <Link href="/" className="text-sm text-text-secondary hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  )
}
