import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/sections/Hero'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { aboutPage } from '@/data/pages/about'

export const metadata: Metadata = {
  title: 'About Peak Ridge Remodeling | Portland OR Remodeling Contractor',
  description:
    'Learn about Peak Ridge Remodeling — Portland-based, owner-operated remodeling contractor since 2012. Meet the team and see how we work.',
}

export default function AboutPage() {
  const { hero, credentials, story, team, process, commitment } = aboutPage

  return (
    <>
      <Hero
        variant="page"
        headline={hero.headline}
        subheadline={hero.subheadline}
        breadcrumb={[{ label: 'About' }]}
      />

      {/* Credentials bar */}
      <div className="bg-primary py-10 md:py-12">
        <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <ul
            role="list"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
          >
            {credentials.items.map((item) => (
              <li key={item.label}>
                <div className="text-[2rem] font-extrabold text-text-inverse leading-tight mb-1">
                  {item.value}
                </div>
                <div className="text-fine text-text-inverse/70 font-medium uppercase tracking-wider">
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Story */}
      <SectionWrapper background="base">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="reveal">
            <h2 className="text-h2 font-bold text-text-primary mb-6 text-balance">
              {story.heading}
            </h2>
            <div className="space-y-4">
              {story.paragraphs.map((para, i) => (
                <p key={i} className="text-body text-text-secondary leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[3/4] lg:aspect-[4/3] bg-surface reveal reveal-delay-2">
            <Image
              src={story.imageSrc}
              alt={story.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper background="surface">
        <div className="text-center mb-10 reveal">
          <h2 className="text-h2 font-bold text-text-primary text-balance">
            {team.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {team.members.map((member, i) => (
            <div
              key={member.name}
              className={`bg-base rounded-xl overflow-hidden shadow-card reveal ${i === 0 ? 'reveal-delay-1' : 'reveal-delay-2'}`}
            >
              <div className="relative aspect-square bg-surface">
                <Image
                  src={member.photoSrc}
                  alt={member.photoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <div className="font-bold text-text-primary text-[1.0625rem] mb-0.5">
                  {member.name}
                </div>
                <div className="text-fine text-primary font-medium mb-3 uppercase tracking-wide">
                  {member.role}
                </div>
                <p className="text-body text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <ProcessSteps
        heading={process.heading}
        subheading={process.subheading}
        steps={process.steps}
        variant="full"
        background="base"
      />

      {/* Commitment callout */}
      <SectionWrapper background="surface">
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="inline-block bg-accent/10 text-accent font-semibold text-ui px-4 py-1.5 rounded-full mb-5">
            {commitment.accentText}
          </div>
          <h2 className="text-h2 font-bold text-text-primary mb-4 text-balance">
            {commitment.heading}
          </h2>
          <p className="text-body-lg text-text-secondary leading-relaxed">
            {commitment.body}
          </p>
        </div>
      </SectionWrapper>

      <TestimonialsSection
        heading="What Our Clients Say"
        ids={['t1', 't2', 't5']}
      />

      <CTASection
        heading="Let's Talk About Your Project"
        subheading="Free in-home estimate, fixed-price quote, no obligation."
        variant="primary"
      />
    </>
  )
}
