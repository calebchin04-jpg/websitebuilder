import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size    = 'sm' | 'default' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
}

interface ButtonProps extends BaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined
  children?: React.ReactNode
}

interface LinkProps extends BaseProps {
  href: string
  target?: string
  rel?: string
  children?: React.ReactNode
}

type Props = ButtonProps | LinkProps

const variantClasses: Record<Variant, string> = {
  primary:   'bg-accent text-surface-dark-alt font-semibold hover:bg-accent-hover transition-colors duration-200',
  secondary: 'border border-current bg-transparent font-semibold hover:bg-white/10 transition-colors duration-200',
  ghost:     'bg-transparent font-semibold underline-offset-2 hover:underline',
}

const sizeClasses: Record<Size, string> = {
  sm:      'px-4 py-2 text-sm',
  default: 'px-6 py-3 text-sm',
  lg:      'px-8 py-4 text-base',
}

export function Button({ variant = 'primary', size = 'default', className, children, ...props }: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded leading-none tracking-wide',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if ('href' in props && props.href !== undefined) {
    const { href, target, rel, ...rest } = props as LinkProps
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    )
  }

  const { ...rest } = props as ButtonProps
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
