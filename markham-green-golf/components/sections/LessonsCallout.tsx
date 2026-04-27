import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export function LessonsCallout() {
  const programs = [
    { name: 'Private Lessons',     desc: 'One-on-one instruction, 30 or 60 minutes. Packages available.' },
    { name: 'Ladies Learn to Golf',desc: 'Structured 5-week program for women new to the game.' },
    { name: 'Junior Camps',        desc: 'Mon–Fri half-day or full-day camps for young golfers.' },
  ]

  return (
    <SectionWrapper bg="light-alt" id="lessons-callout">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left — intro */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Instruction
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
              Professional golf instruction on site.
            </h2>
          </div>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Greg Salazar of the{' '}
            <span className="text-text-primary font-medium">Salazar Golf Academy</span> runs a
            full instruction program at Markham Green — private lessons, a ladies learning series,
            and structured junior camps.
          </p>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Whether you&apos;re a complete beginner, looking to sharpen your game, or enrolling a
            junior, there&apos;s a program for you.
          </p>
          <Link
            href="/lessons"
            className="font-sans text-sm font-semibold text-text-primary underline-offset-4 hover:underline self-start"
          >
            Explore lessons & pricing →
          </Link>
        </div>

        {/* Right — programs */}
        <div className="flex flex-col gap-4">
          {programs.map((p, i) => (
            <div
              key={p.name}
              className={`flex flex-col gap-1 border-l-2 border-accent pl-4 fade-up-${i + 1}`}
            >
              <p className="font-serif text-lg font-semibold text-text-primary">{p.name}</p>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
