import type { Metadata } from 'next'
import { PageHero }     from '@/components/sections/PageHero'
import { PricingTable } from '@/components/sections/PricingTable'
import { CourseInfo }   from '@/components/sections/CourseInfo'
import { CTABand }      from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title:       'Course & Green Fees',
  description: 'Green fees and course information for Markham Green Golf Club. 9-hole public course in Markham, ON. Weekdays from $44, weekends from $48. Book a tee time today.',
}

export default function CoursePage() {
  return (
    <>
      <PageHero
        headline="Course & Green Fees"
        subheadline="A well-maintained public 9-hole course in Markham — affordable green fees, no membership required."
      />
      <PricingTable />
      <CourseInfo />
      <CTABand headline="Ready to book your round?" />
    </>
  )
}
