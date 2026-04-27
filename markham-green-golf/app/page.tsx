import { Hero }           from '@/components/sections/Hero'
import { TrustBar }        from '@/components/sections/TrustBar'
import { FrameSequence }   from '@/components/sections/FrameSequence'
import { CourseOverview }  from '@/components/sections/CourseOverview'
import { LessonsCallout }  from '@/components/sections/LessonsCallout'
import { StaffSection }    from '@/components/sections/StaffSection'
import { PhotoGrid }       from '@/components/sections/PhotoGrid'
import { CTABand }         from '@/components/sections/CTABand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FrameSequence />
      <CourseOverview />
      <LessonsCallout />
      <StaffSection />
      <PhotoGrid />
      <CTABand />
    </>
  )
}
