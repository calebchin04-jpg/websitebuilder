import Image from 'next/image'
import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { galleryImages } from '@/data/gallery'

export function GalleryTeaser() {
  // Curated selection: 2 food, 2 interior, 1 patio, 1 events
  const food = galleryImages.filter((img) => img.category === 'food').slice(0, 2)
  const interior = galleryImages.filter((img) => img.category === 'interior').slice(0, 2)
  const patio = galleryImages.filter((img) => img.category === 'patio').slice(0, 1)
  const events = galleryImages.filter((img) => img.category === 'events').slice(0, 1)
  const featuredImages = [...food, ...interior, ...patio, ...events]

  return (
    <SectionWrapper bg="surface-1" size="standard" id="gallery">

      {/* Section header */}
      <div className="mb-8">
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-3">The Experience</p>
        <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-text-primary">
          From Our Table
        </h2>
      </div>

      {/* 3×2 grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-0.5">
        {featuredImages.map((img) => (
          <div
            key={img.src}
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* View all link */}
      <div className="flex justify-end mt-4">
        <Link
          href="/gallery"
          className="font-sans text-sm font-medium text-text-secondary hover:text-gold transition-colors duration-200 inline-flex items-center gap-1"
        >
          View All Photos
          <span aria-hidden="true">→</span>
        </Link>
      </div>

    </SectionWrapper>
  )
}
