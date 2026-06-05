import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { BookingCTA } from '@/components/ui/BookingCTA'
import { PhoneLink } from '@/components/ui/PhoneLink'

interface Props {
  headline?: string
}

export function CTABand({ headline = 'Ready to play? Book your round.' }: Props) {
  return (
    <SectionWrapper bg="dark-alt" className="py-14 md:py-16">
      <div className="flex flex-col items-center text-center gap-5">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-inverse">
          {headline}
        </h2>
        <BookingCTA size="lg" />
        <p className="font-sans text-sm text-text-inverse/60">
          Or call us directly:{' '}
          <PhoneLink className="text-text-inverse/80 font-medium" />
        </p>
      </div>
    </SectionWrapper>
  )
}
