import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { homePageContent } from '@/data/pages/home'

export function FamilyStory() {
  const { story } = homePageContent

  return (
    <SectionWrapper bg="surface-1" size="standard" id="story">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left col: text */}
        <ScrollReveal>
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-text-primary leading-snug mb-6">
            {story.headline}
          </h2>
          <div className="font-sans text-base lg:text-lg text-text-secondary leading-relaxed space-y-4">
            {story.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        {/* Right col: image — below text on mobile */}
        <ScrollReveal delay={150} className="order-last lg:order-none">
          <div className="relative aspect-[16/9] lg:aspect-[3/4] overflow-hidden rounded-card">
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-surface-dark/5" />
          </div>
        </ScrollReveal>

      </div>
    </SectionWrapper>
  )
}
