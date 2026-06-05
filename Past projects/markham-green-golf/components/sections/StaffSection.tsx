import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { StaffCard } from '@/components/ui/StaffCard'
import { staffFeatured } from '@/data/staff'

export function StaffSection() {
  return (
    <SectionWrapper bg="light" id="team">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              The Team
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
              Professionals who take the game — and the course — seriously.
            </h2>
          </div>
          <Link
            href="/about"
            className="font-sans text-sm font-semibold text-text-secondary hover:text-text-primary underline-offset-4 hover:underline transition-colors duration-200 shrink-0"
          >
            Full team profiles →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {staffFeatured.map((member, i) => (
            <StaffCard
              key={member.id}
              member={member}
              variant="brief"
              animClass={`fade-up-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
