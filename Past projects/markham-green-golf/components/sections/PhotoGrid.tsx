import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

// Placeholder images — replace with real drone shots when received
const photos = [
  { src: '/images/course/hole-1.jpg', alt: 'Markham Green Golf Club — hole 1 fairway' },
  { src: '/images/course/hole-4.jpg', alt: 'Markham Green Golf Club — view from the 4th tee' },
  { src: '/images/course/green.jpg',  alt: 'Markham Green Golf Club — putting green' },
]

export function PhotoGrid() {
  return (
    <SectionWrapper bg="dark" id="gallery" className="py-0 overflow-hidden">
      <div className="-mx-5 md:-mx-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden ${i === 2 ? 'hidden md:block' : ''}`}
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className="py-6 text-center">
        <p className="font-sans text-sm text-text-inverse/60 italic">
          Nine holes of real golf — Markham Green Golf Club
        </p>
      </div>
    </SectionWrapper>
  )
}
