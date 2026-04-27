import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'

type PhoneLinkProps = {
  className?: string
  children?: React.ReactNode
}

export function PhoneLink({ className, children }: PhoneLinkProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      className={cn('hover:underline focus-visible:outline-none', className)}
    >
      {children ?? siteConfig.phone}
    </a>
  )
}
