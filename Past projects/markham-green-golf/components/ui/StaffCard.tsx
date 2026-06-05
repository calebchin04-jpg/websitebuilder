import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { StaffMember } from '@/data/staff'

interface Props {
  member: StaffMember
  variant?: 'brief' | 'full'
  className?: string
  animClass?: string
}

export function StaffCard({ member, variant = 'full', className, animClass }: Props) {
  const photoSize = variant === 'brief' ? 64 : 80

  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-lg border border-border-warm bg-surface-light p-5 md:p-6',
        animClass,
        className,
      )}
    >
      {/* Photo or initials */}
      <div
        className={cn(
          'flex items-center justify-center rounded-full overflow-hidden flex-shrink-0',
          variant === 'brief' ? 'w-16 h-16' : 'w-20 h-20',
        )}
        style={{ background: 'var(--color-surface-dark)' }}
      >
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            width={photoSize}
            height={photoSize}
            className="object-cover w-full h-full"
          />
        ) : (
          <span
            className="font-sans font-semibold text-accent"
            style={{ fontSize: variant === 'brief' ? '1.125rem' : '1.25rem' }}
          >
            {member.initials}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <p className="font-serif text-lg font-semibold text-text-primary">{member.name}</p>
        <p className="font-sans text-sm text-text-secondary">{member.title}</p>
        {member.credential && (
          <p className="font-sans text-xs font-semibold text-accent uppercase tracking-wide">
            {member.credential}
          </p>
        )}
      </div>

      {/* Bio — full variant only */}
      {variant === 'full' && member.bio && (
        <p className="font-sans text-sm leading-relaxed text-text-secondary">{member.bio}</p>
      )}

      {/* Link — e.g. Greg → /lessons */}
      {member.link && (
        <Link
          href={member.link}
          className="font-sans text-sm font-semibold text-accent hover:underline self-start"
        >
          View lessons →
        </Link>
      )}
    </div>
  )
}
