'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { galleryImages, galleryCategories } from '@/data/gallery'
import type { GalleryCategory } from '@/data/gallery'

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])

  const filtered =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const lastOpenedIndex = useRef<number | null>(null)

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    if (lastOpenedIndex.current !== null) {
      triggerRefs.current[lastOpenedIndex.current]?.focus()
    }
  }, [])

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null
      return prev === 0 ? filtered.length - 1 : prev - 1
    })
  }, [filtered.length])

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null
      return prev === filtered.length - 1 ? 0 : prev + 1
    })
  }, [filtered.length])

  // Focus close button when lightbox opens
  useEffect(() => {
    if (lightboxIndex !== null) {
      closeBtnRef.current?.focus()
    }
  }, [lightboxIndex])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext])

  // Close lightbox when category changes (index may be out of range)
  useEffect(() => {
    setLightboxIndex(null)
  }, [activeCategory])

  return (
    <>
      {/* Tab bar */}
      <div className="flex gap-0 border-b border-border-default mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveCategory('all')}
          aria-pressed={activeCategory === 'all'}
          className={`font-sans text-sm font-medium px-4 py-2 border-b-2 transition-colors whitespace-nowrap ${
            activeCategory === 'all'
              ? 'border-gold text-gold'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          All
        </button>
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            aria-pressed={activeCategory === cat.value}
            className={`font-sans text-sm font-medium px-4 py-2 border-b-2 transition-colors whitespace-nowrap ${
              activeCategory === cat.value
                ? 'border-gold text-gold'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {filtered.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            ref={(el) => { triggerRefs.current[index] = el }}
            className="relative aspect-square overflow-hidden cursor-pointer group block"
            onClick={() => {
              lastOpenedIndex.current = index
              setLightboxIndex(index)
            }}
            aria-label={`View photo: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl w-10 h-10 flex items-center justify-center hover:text-gold transition-colors"
            aria-label="Close lightbox"
          >
            <span aria-hidden="true">×</span>
          </button>

          {/* Prev button */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl w-12 h-12 flex items-center justify-center hover:text-gold transition-colors"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <div className="flex flex-col items-center w-full px-16">
            <div className="relative w-full max-w-4xl aspect-video">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
            {/* Counter */}
            <p className="text-white text-sm mt-4 font-sans">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl w-12 h-12 flex items-center justify-center hover:text-gold transition-colors"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
