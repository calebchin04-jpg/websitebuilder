import { cn } from '@/lib/utils'

type BadgeVariant = 'accent' | 'primary' | 'surface' | 'outline'

type BadgeProps = {
  variant?: BadgeVariant
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  accent:  'bg-accent/10 text-accent border border-accent/20',
  primary: 'bg-primary/10 text-primary border border-primary/20',
  surface: 'bg-surface text-text-secondary border border-border',
  outline: 'bg-transparent text-text-secondary border border-border',
}

export function Badge({ variant = 'surface', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded px-2.5 py-1',
        'text-fine font-semibold uppercase tracking-wide',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
