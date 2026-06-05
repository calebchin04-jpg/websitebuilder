'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import type { PortfolioImage } from '@/data/pages/portfolio'

type GalleryGridProps = {
  heading?: string
  subheading?: string
  images: PortfolioImage[]
  showFilters?: boolean
  cta?: { label: string; href: string }
  background?: 'base' | 'surface'
}

type FilterCategory = 'all' | 'kitchen' | 'bathroom' | 'basement'

const filterLabels: Record<FilterCategory, string> = {
  all: 'All Projects',
  kitchen: 'Kitchens',
  bathroom: 'Bathrooms',
  basement: 'Basements',
}

export function GalleryGrid({
  heading,
  subheading,
  images,
  showFilters = false,
  cta,
  background = 'base',
}: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')

  const filtered =
    activeFilter === 'all' ? images : images.filter((img) => img.category === activeFilter)

  return (
    <SectionWrapper background={background}>
      {(heading || subheading) && (
        <div className="text-center mb-8 md:mb-10 reveal">
          {heading && (
            <h2 className="text-h2 font-bold text-text-primary mb-3 text-balance">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </div>
      )}

      {showFilters && (
        <div
          className="flex items-center justify-center gap-2 flex-wrap mb-8 reveal"
          role="group"
          aria-label="Filter portfolio by category"
        >
          {(Object.keys(filterLabels) as FilterCategory[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={cn(
                'px-4 py-2 rounded-full text-ui font-medium',
                'transition-colors duration-150',
                'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
                activeFilter === cat
                  ? 'bg-primary text-text-inverse'
                  : 'bg-surface text-text-secondary border border-border hover:border-primary/40 hover:text-text-primary'
              )}
            >
              {filterLabels[cat]}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {filtered.map((image, i) => (
          <div
            key={image.src}
            className={cn(
              'group relative rounded-xl overflow-hidden bg-surface',
              'aspect-[4/3]',
              'reveal',
              i % 3 === 0 ? 'reveal-delay-1' : i % 3 === 1 ? 'reveal-delay-2' : 'reveal-delay-3'
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Caption overlay */}
            {image.caption && (
              <div
                className={cn(
                  'absolute inset-x-0 bottom-0',
                  'bg-gradient-to-t from-text-primary/80 to-transparent',
                  'px-4 py-3',
                  'translate-y-full group-hover:translate-y-0',
                  'transition-transform duration-200'
                )}
                aria-hidden="true"
              >
                <p className="text-fine text-text-inverse font-medium">
                  {image.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {cta && (
        <div className="text-center mt-10 reveal">
          <Link
            href={cta.href}
            className={cn(
              'inline-flex items-center justify-center',
              'h-13 px-8 rounded font-semibold text-ui',
              'bg-primary text-text-inverse hover:bg-primary-dark',
              'transition-colors duration-150 shadow-button active:scale-[0.98]',
              'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2'
            )}
            style={{ height: '3.25rem' }}
          >
            {cta.label}
          </Link>
        </div>
      )}
    </SectionWrapper>
  )
}
