import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'secondary-inverse' | 'ghost'
type ButtonSize = 'lg' | 'md' | 'sm'

type ButtonBaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-red text-white hover:bg-brand-red-hover border-transparent',
  secondary: 'bg-transparent border border-brand-red text-brand-red hover:bg-red-50',
  'secondary-inverse': 'bg-transparent border border-white text-white hover:bg-white/10',
  ghost: 'bg-transparent border-transparent text-text-primary hover:underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  lg: 'h-[52px] px-7 text-base',
  md: 'h-[48px] px-6 text-sm',
  sm: 'h-[40px] px-4 text-sm',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-btn font-sans font-semibold uppercase tracking-wide',
    'transition-colors duration-200 cursor-pointer',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (href !== undefined) {
    return (
      <a href={href} className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
