import { OfferBanner } from '@/components/sections/OfferBanner'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { WhyUs } from '@/components/sections/WhyUs'
import { ReviewStrip } from '@/components/sections/ReviewStrip'
import { ServiceAreas } from '@/components/sections/ServiceAreas'
import { CTABand } from '@/components/sections/CTABand'
import { ContactBlock } from '@/components/sections/ContactBlock'

export default function HomePage() {
  return (
    <>
      <OfferBanner />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <WhyUs />
      <ReviewStrip />
      <ServiceAreas />
      <CTABand />
      <ContactBlock />
    </>
  )
}
