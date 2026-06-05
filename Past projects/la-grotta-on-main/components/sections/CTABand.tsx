import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { homePageContent } from '@/data/pages/home'
import { siteConfig } from '@/data/site'

type CTABandProps = {
  variant?: 'standard' | 'slim'
}

export function CTABand({ variant = 'standard' }: CTABandProps) {
  if (variant === 'slim') {
    return (
      <SectionWrapper bg="surface-2" size="slim">
        <div className="flex flex-col items-center text-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="font-serif text-3xl lg:text-4xl font-semibold text-text-primary hover:text-gold transition-colors duration-200"
          >
            {siteConfig.phone}
          </a>
          <p className="font-sans text-sm text-text-secondary uppercase tracking-widest">
            Call to Reserve
          </p>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper bg="dark" size="standard">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-text-inverse leading-snug">
          {homePageContent.ctaBand.headline}
        </h2>
        <div className="mt-8">
          <Button variant="primary" size="lg" href={siteConfig.phoneHref}>
            Reserve Your Table
          </Button>
        </div>
        <a
          href={siteConfig.phoneHref}
          className="font-sans text-sm text-text-inverse/60 hover:text-text-inverse mt-4 transition-colors"
        >
          {siteConfig.phone}
        </a>
      </div>
    </SectionWrapper>
  )
}
