import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site'

interface Props {
  label?: string
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

export function BookingCTA({ label = 'Book a Tee Time', size = 'default', className }: Props) {
  const href   = siteConfig.bookingUrl ?? `tel:${siteConfig.phoneRaw}`
  const target = siteConfig.bookingUrl ? '_blank' : undefined
  const rel    = siteConfig.bookingUrl ? 'noopener noreferrer' : undefined

  return (
    <Button href={href} target={target} rel={rel} size={size} className={className}>
      {label}
    </Button>
  )
}
