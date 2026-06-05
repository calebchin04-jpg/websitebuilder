import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { PricingTierCard } from '@/components/ui/PricingTierCard'
import { BookingCTA } from '@/components/ui/BookingCTA'
import { greenFeesPreview, cartRental } from '@/data/pricing'

export function CourseOverview() {
  return (
    <SectionWrapper bg="light" id="course-overview">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left — description */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              The Course
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
              Nine holes of real golf in the heart of Markham.
            </h2>
          </div>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Markham Green is a well-maintained public 9-hole golf course managed by PGA of Canada
            Professional Scott Haynes. No membership required, no dress code enforcement — just
            an enjoyable round at a fair price, any day of the week.
          </p>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Power carts available for ${cartRental.price} per person.
            Replay rounds available at a discounted rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <BookingCTA />
            <Link
              href="/course"
              className="font-sans text-sm font-semibold text-text-primary underline-offset-4 hover:underline self-center"
            >
              See full pricing →
            </Link>
          </div>
        </div>

        {/* Right — pricing preview */}
        <div className="flex flex-col gap-4">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
            2025 Green Fees
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {greenFeesPreview.map((tier, i) => (
              <PricingTierCard
                key={tier.label}
                tier={tier}
                animClass={`fade-up-${i + 1}`}
              />
            ))}
          </div>
          <Link
            href="/course"
            className="font-sans text-sm text-text-secondary hover:text-text-primary underline-offset-4 hover:underline transition-colors duration-200"
          >
            Senior, junior & twilight rates →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}
