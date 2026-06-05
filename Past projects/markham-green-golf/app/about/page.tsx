import type { Metadata } from 'next'
import { PageHero }         from '@/components/sections/PageHero'
import { StaffFull }        from '@/components/sections/StaffFull'
import { CourseBackground } from '@/components/sections/CourseBackground'
import { ContactBlock }     from '@/components/sections/ContactBlock'
import { CTABand }          from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title:       'About / Pro Shop',
  description: 'About Markham Green Golf Club — meet the team, including PGA of Canada Professional Scott Haynes and Greg Salazar of the Salazar Golf Academy. Find our address, hours, and contact information.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="About Markham Green Golf Club"
        subheadline="A community-rooted public course managed by professionals who take the game seriously."
        ctaLabel="Call the Pro Shop"
      />
      <StaffFull />
      <CourseBackground />
      <ContactBlock />
      <CTABand headline="Book your next round at Markham Green." />
    </>
  )
}
