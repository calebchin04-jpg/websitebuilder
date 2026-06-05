import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'

interface Props {
  className?: string
  label?: string
}

export function PhoneLink({ className, label }: Props) {
  return (
    <a
      href={`tel:${siteConfig.phoneRaw}`}
      aria-label={`Call Markham Green Golf Club at ${siteConfig.phone}`}
      className={cn('hover:underline', className)}
    >
      {label ?? siteConfig.phone}
    </a>
  )
}
