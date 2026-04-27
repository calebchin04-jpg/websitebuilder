import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/data/site'

export function CourseBackground() {
  return (
    <SectionWrapper bg="light-alt" id="about-course">
      <div className="max-w-prose flex flex-col gap-5">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            About the Course
          </p>
          <h2 className="font-serif text-3xl font-semibold text-text-primary leading-tight">
            Markham&apos;s neighbourhood golf course.
          </h2>
        </div>

        <p className="font-sans text-base text-text-secondary leading-relaxed">
          Markham Green Golf Club has been part of the local golfing community{' '}
          {siteConfig.yearEstablished
            ? `since ${siteConfig.yearEstablished}`
            : 'for years'}.
          It&apos;s the kind of place where regulars know each other by name and the staff
          knows their members — a neighbourhood course in the truest sense.
        </p>

        <p className="font-sans text-base text-text-secondary leading-relaxed">
          Unlike corporate golf operations, Markham Green is managed by PGA of Canada Professional
          Scott Haynes — a professional who takes the quality of the course and the experience
          of its players seriously. When you play here, you&apos;re playing at a properly run club
          that happens to be open to everyone.
        </p>

        <p className="font-sans text-base text-text-secondary leading-relaxed">
          On-site food and beverage is managed by Zac Spain, making the 19th hole as welcoming
          as the first tee.
        </p>
      </div>
    </SectionWrapper>
  )
}
