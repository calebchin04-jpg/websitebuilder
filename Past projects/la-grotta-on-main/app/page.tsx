import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { FamilyStory } from '@/components/sections/FamilyStory'
import { SignatureDishes } from '@/components/sections/SignatureDishes'
import { GalleryTeaser } from '@/components/sections/GalleryTeaser'
import { ReviewStrip } from '@/components/sections/ReviewStrip'
import { PrivateFunctionsCallout } from '@/components/sections/PrivateFunctionsCallout'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'La Grotta On Main — Italian Restaurant in Unionville',
  description:
    '29 years of family-owned Italian and Mediterranean dining in historic Unionville, Ontario. Reserve your table: (905) 940-0235.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FamilyStory />
      <SignatureDishes />
      <GalleryTeaser />
      <ReviewStrip />
      <PrivateFunctionsCallout />
      <CTABand />
    </>
  )
}
