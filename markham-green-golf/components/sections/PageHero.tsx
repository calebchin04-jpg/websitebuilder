import { BookingCTA } from '@/components/ui/BookingCTA'

interface Props {
  headline:    string
  subheadline?: string
  showCta?:    boolean
  ctaLabel?:   string
}

export function PageHero({ headline, subheadline, showCta = true, ctaLabel }: Props) {
  return (
    <div className="bg-surface-dark py-12 md:py-16">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="max-w-2xl flex flex-col gap-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-text-inverse leading-tight">
            {headline}
          </h1>
          {subheadline && (
            <p className="font-sans text-base md:text-lg text-text-inverse/70 leading-relaxed">
              {subheadline}
            </p>
          )}
          {showCta && (
            <div className="pt-2">
              <BookingCTA label={ctaLabel ?? 'Book a Tee Time'} size="default" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
