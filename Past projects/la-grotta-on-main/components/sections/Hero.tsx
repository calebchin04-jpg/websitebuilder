import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { homePageContent } from '@/data/pages/home'
import { siteConfig } from '@/data/site'

export function Hero() {
  const { hero } = homePageContent

  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: '100dvh' } as React.CSSProperties}
    >
      {/* Background image */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Content — bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 pb-28 sm:pb-24 px-5 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-text-inverse leading-tight whitespace-pre-line"
          >
            {hero.headline}
          </h1>

          <p className="font-sans text-lg text-text-inverse/80 mt-3 mb-8">
            {hero.subline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              href={siteConfig.phoneHref}
            >
              {hero.primaryCTA.label}
            </Button>

            <a
              href={hero.secondaryCTA.href}
              className="inline-flex items-center justify-center font-sans font-semibold text-base text-text-inverse underline-offset-4 hover:underline transition-colors duration-200 h-[52px] px-2"
            >
              {hero.secondaryCTA.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
