import { cn } from '@/lib/utils'
import type { GreenFeeTier } from '@/data/pricing'

interface Props {
  tier: GreenFeeTier
  className?: string
  animClass?: string
}

export function PricingTierCard({ tier, className, animClass }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1 rounded-lg border bg-surface-light p-5 md:p-6',
        tier.highlight ? 'border-accent border-2' : 'border-border-warm',
        animClass,
        className,
      )}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
        {tier.label}
      </p>
      <p className="font-sans text-3xl font-bold text-text-primary leading-none">
        ${tier.price}
      </p>
      <p className="font-sans text-sm text-text-secondary">{tier.condition}</p>
    </div>
  )
}
