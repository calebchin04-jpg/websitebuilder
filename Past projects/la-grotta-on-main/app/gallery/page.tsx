import { GalleryGrid } from '@/components/sections/GalleryGrid'
import { CTABand } from '@/components/sections/CTABand'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery — La Grotta On Main',
  description:
    'Browse photos of our food, dining room, heated patio, and private events at La Grotta On Main in Unionville, Ontario.',
}

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="mb-12">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-3">Photos</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-text-primary">
              A Taste of La Grotta
            </h1>
            <p className="font-sans text-text-secondary mt-3 text-base">
              From our kitchen to our dining room — browse the atmosphere, the food, and the space.
            </p>
          </div>
          <GalleryGrid />
        </div>
      </section>
      <CTABand />
    </>
  )
}
