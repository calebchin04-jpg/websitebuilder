import Image from 'next/image'
import { BookingCTA } from '@/components/ui/BookingCTA'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site'

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '88vh', backgroundColor: 'var(--color-surface-dark)' }}
    >
      {/* Background image — swap src for real photo when available */}
      <Image
        src="/images/hero/course-hero.jpg"
        alt="Markham Green Golf Club — view of the fairway"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark green overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(15,31,23,0.55) 0%, rgba(15,31,23,0.7) 100%)' }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-content px-5 md:px-8 flex flex-col justify-center h-full py-24 md:py-32" style={{ minHeight: '88vh' }}>
        <div className="max-w-2xl flex flex-col gap-6">

          {/* Season badge */}
          <p className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-accent">
            <span className="w-6 h-px bg-accent inline-block" aria-hidden />
            Season opens {siteConfig.seasonOpen}
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-text-inverse leading-tight">
            Markham&apos;s public golf course — real golf, no pretension.
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-base md:text-lg text-text-inverse/75 leading-relaxed max-w-xl">
            Affordable green fees, PGA professional management, and a genuine community feel.
            No membership required. Book a round today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <BookingCTA size="lg" />
            <Button href="/course" variant="secondary" size="lg" className="text-text-inverse border-text-inverse/40 hover:border-text-inverse/70">
              See Green Fees
            </Button>
          </div>

          {/* Trust micro-stats */}
          <div className="flex flex-wrap gap-6 pt-4 border-t border-white/15">
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-2xl font-semibold text-accent">$44</span>
              <span className="font-sans text-xs text-text-inverse/60">Weekday green fee</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-2xl font-semibold text-accent">9</span>
              <span className="font-sans text-xs text-text-inverse/60">Holes of real golf</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-2xl font-semibold text-accent">PGA</span>
              <span className="font-sans text-xs text-text-inverse/60">Professionally managed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
