import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { PhoneLink } from '@/components/ui/PhoneLink'
import { lessonContact } from '@/data/site'
import { privateLessons, ladiesLearnToGolf, juniorCamps } from '@/data/pricing'

function InlineCTA({ label }: { label: string }) {
  const href = lessonContact.cta === 'email'
    ? `mailto:${lessonContact.email}?subject=${encodeURIComponent('Golf Lesson Inquiry — Markham Green')}`
    : `tel:+19052946156`

  return (
    <a
      href={href}
      className="font-sans text-sm font-semibold text-accent hover:underline underline-offset-4 inline-flex items-center gap-1"
    >
      {label} →
    </a>
  )
}

export function LessonPrograms() {
  return (
    <div className="flex flex-col">

      {/* ── Private Lessons ── */}
      <SectionWrapper bg="light" id="private-lessons">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                01
              </p>
              <h2 className="font-serif text-3xl font-semibold text-text-primary leading-tight">
                Private Lessons
              </h2>
            </div>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              One-on-one instruction with Greg Salazar tailored to your game. Available in
              30-minute and 1-hour formats, with package options for ongoing improvement.
            </p>
            <InlineCTA label="Book a private lesson" />
          </div>

          <div className="flex flex-col gap-4">
            {/* Individual */}
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Individual Sessions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {privateLessons.individual.map((r) => (
                <div key={r.label} className="flex flex-col gap-1 rounded-lg border border-border-warm bg-surface-light p-4">
                  <p className="font-sans text-xs text-text-secondary leading-snug">{r.label}</p>
                  <p className="font-sans text-2xl font-bold text-text-primary">${r.price}</p>
                </div>
              ))}
            </div>

            {/* Packages */}
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mt-2">
              Packages
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {privateLessons.packages.map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-4 rounded-lg border border-border-warm bg-surface-light px-4 py-3">
                  <p className="font-sans text-sm text-text-secondary">{r.label}</p>
                  <p className="font-sans text-lg font-bold text-text-primary shrink-0">${r.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Ladies Learn to Golf ── */}
      <SectionWrapper bg="light-alt" id="ladies-program">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                02
              </p>
              <h2 className="font-serif text-3xl font-semibold text-text-primary leading-tight">
                Ladies Learn to Golf
              </h2>
            </div>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              A structured group program designed for women new to the game. Five weekly 1-hour
              lessons per level — welcoming, non-intimidating, and paced for beginners.
              No prior experience required.
            </p>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Contact Greg to ask about upcoming session dates.
            </p>
            <InlineCTA label="Register for the next session" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-lg border-2 border-accent bg-surface-light p-6 flex flex-col gap-2">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                Per Level
              </p>
              <p className="font-sans text-4xl font-bold text-text-primary">
                ${ladiesLearnToGolf.price}
              </p>
              <p className="font-sans text-sm text-text-secondary">
                {ladiesLearnToGolf.description}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Junior Camps ── */}
      <SectionWrapper bg="light" id="junior-camps">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                03
              </p>
              <h2 className="font-serif text-3xl font-semibold text-text-primary leading-tight">
                Junior Golf Camps
              </h2>
            </div>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Monday–Friday golf camps for junior players. Half-day and full-day formats available.
              Contact Greg for 2025 camp schedule and age requirements.
            </p>
            <InlineCTA label="Enrol your child" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {juniorCamps.map((camp) => (
              <div key={camp.label} className="flex flex-col gap-2 rounded-lg border border-border-warm bg-surface-light p-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  {camp.label}
                </p>
                <p className="font-sans text-3xl font-bold text-text-primary">${camp.price}</p>
                {camp.note && (
                  <p className="font-sans text-sm text-text-secondary">{camp.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Contact CTA ── */}
      <SectionWrapper bg="dark" id="lesson-contact">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-inverse mb-2">
              Questions? Contact Greg directly.
            </h2>
            <p className="font-sans text-sm text-text-inverse/60">
              Greg Salazar — Salazar Golf Academy at Markham Green
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              href={`mailto:${lessonContact.email}?subject=${encodeURIComponent('Golf Lesson Inquiry — Markham Green')}`}
              size="default"
            >
              Email Greg
            </Button>
            <Button href="tel:+19052946156" variant="secondary" size="default" className="text-text-inverse border-text-inverse/40">
              Call the Pro Shop
            </Button>
          </div>
        </div>
        <p className="font-sans text-xs text-text-inverse/40 mt-4">
          <PhoneLink className="text-text-inverse/50" /> — (905) 294-6156
        </p>
      </SectionWrapper>
    </div>
  )
}
