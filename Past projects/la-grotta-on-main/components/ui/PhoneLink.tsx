'use client'

import { trackPhoneClick } from '@/lib/analytics'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'

type PhoneLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string
  children?: React.ReactNode
}

export function PhoneLink({ location, children, onClick, ...rest }: PhoneLinkProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      {...rest}
      onClick={(e) => {
        trackPhoneClick(location)
        onClick?.(e)
      }}
    >
      {children ?? siteConfig.phone}
    </a>
  )
}
