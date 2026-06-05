import type { Metadata } from 'next'
import { PageHero }       from '@/components/sections/PageHero'
import { LessonPrograms } from '@/components/sections/LessonPrograms'

export const metadata: Metadata = {
  title:       'Golf Lessons & Junior Camps — Salazar Golf Academy',
  description:  'Golf lessons and junior camps at Markham Green Golf Club with Greg Salazar of the Salazar Golf Academy. Private lessons from $90. Ladies Learn to Golf. Mon–Fri junior camps.',
}

export default function LessonsPage() {
  return (
    <>
      <PageHero
        headline="Golf Lessons & Camps"
        subheadline="Professional instruction by Greg Salazar of the Salazar Golf Academy — private lessons, ladies programs, and junior camps at Markham Green."
        showCta={false}
      />
      <LessonPrograms />
    </>
  )
}
