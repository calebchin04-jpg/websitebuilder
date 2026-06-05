import { SectionWrapper } from '@/components/ui/SectionWrapper'

// PLACEHOLDER — update when client provides course specs
const courseSpecs = [
  { label: 'Format',  value: '9 holes, public access' },
  { label: 'Par',     value: 'TBC — client to confirm' },
  { label: 'Yards',   value: 'TBC — client to confirm' },
  { label: 'Season',  value: 'April – November' },
  { label: 'Location','value': 'Markham, Ontario' },
]

export function CourseInfo() {
  return (
    <SectionWrapper bg="light-alt" id="course-info">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left — description */}
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              About the Course
            </p>
            <h2 className="font-serif text-3xl font-semibold text-text-primary leading-tight">
              A proper course — built for the community.
            </h2>
          </div>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            Markham Green is a well-maintained 9-hole public course managed by PGA of Canada
            Professional Scott Haynes. Designed for recreational golfers of all skill levels —
            from seasoned players looking for a quick round to beginners stepping onto a real
            course for the first time.
          </p>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            No membership required. No formal dress code. No intimidating atmosphere. Just nine
            holes of real golf in the heart of Markham.
          </p>
          <p className="font-sans text-sm text-text-secondary italic">
            Course superintendent: Dennis Gilchrist
          </p>
        </div>

        {/* Right — specs */}
        <div className="flex flex-col gap-0 divide-y divide-border-warm border border-border-warm rounded-lg overflow-hidden">
          {courseSpecs.map((spec) => (
            <div key={spec.label} className="flex items-center justify-between gap-4 px-5 py-4 bg-surface-light">
              <span className="font-sans text-sm font-semibold text-text-secondary">{spec.label}</span>
              <span className={`font-sans text-sm text-right ${spec.value.startsWith('TBC') ? 'text-text-secondary/50 italic' : 'text-text-primary font-medium'}`}>
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
