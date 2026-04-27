import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { StaffCard } from '@/components/ui/StaffCard'
import { staff } from '@/data/staff'

export function StaffFull() {
  return (
    <SectionWrapper bg="light" id="team">
      <div className="flex flex-col gap-8">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            The Team
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
            Real people. Real expertise.
          </h2>
          <p className="font-sans text-base text-text-secondary mt-3 max-w-xl leading-relaxed">
            Markham Green is run by professionals who care about the course and the community
            it serves — not an anonymous chain operation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {staff.map((member, i) => (
            <StaffCard
              key={member.id}
              member={member}
              variant="full"
              animClass={`fade-up-${Math.min(i + 1, 4)}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
