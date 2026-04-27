import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type ButtonAsLink = BaseProps & { href: string; target?: string; rel?: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-text-inverse hover:bg-primary-dark active:scale-[0.98] shadow-button',
  secondary:
    'bg-transparent border border-primary text-primary hover:bg-primary/8 active:scale-[0.98]',
  ghost:
    'bg-transparent text-primary hover:underline active:scale-[0.98]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm:  'h-10 px-5 text-ui text-sm',
  md:  'h-12 px-6 text-ui',
  lg:  'h-14 px-8 text-ui text-[0.9375rem]',
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const classes = cn(
    // Base
    'inline-flex items-center justify-center gap-2',
    'rounded font-semibold',
    'transition-colors duration-200',
    'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100',
    // Variant + size
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if ('href' in props && props.href) {
    const { href, target, rel, ...rest } = props
    return (
      <Link href={href} target={target} rel={rel} className={classes} {...(rest as object)}>
        {children}
      </Link>
    )
  }

  const { ...rest } = props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
