import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { galleryImages } from '@/data/gallery'

export function PrivateFunctionsCallout() {
  const eventImage = galleryImages.find((img) => img.category === 'events')

  return (
    <SectionWrapper bg="surface-1" size="standard" id="private-functions">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left col: text */}
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-4">
            Private Functions
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-primary leading-snug mb-5">
            Host Your Next Event With Us
          </h2>
          <div className="font-sans text-base lg:text-lg text-text-secondary leading-relaxed space-y-3 mb-8">
            <p>
              From intimate anniversary dinners to corporate events, our dining room becomes your private space.
            </p>
            <p>
              Our team handles every detail so you can focus on your guests.
            </p>
            <p>
              Contact us to discuss your event.
            </p>
          </div>
          <Button variant="secondary" href="/private-functions">
            Enquire About Private Events
          </Button>
        </div>

        {/* Right col: image — hidden on mobile */}
        {eventImage && (
          <div className="hidden lg:block relative aspect-[4/3] overflow-hidden rounded-card">
            <Image
              src={eventImage.src}
              alt={eventImage.alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        )}

      </div>
    </SectionWrapper>
  )
}
