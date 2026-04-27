import { cn } from '@/lib/utils'

type SectionBg = 'surface-1' | 'surface-2' | 'dark' | 'dark-alt' | 'brand-red'
type SectionSize = 'standard' | 'slim' | 'hero' | 'none'

type SectionWrapperProps = {
  bg?: SectionBg
  size?: SectionSize
  className?: string
  innerClassName?: string
  children: React.ReactNode
  id?: string
}

const bgClasses: Record<SectionBg, string> = {
  'surface-1': 'bg-surface-1',
  'surface-2': 'bg-surface-2',
  dark: 'bg-surface-dark text-text-inverse',
  'dark-alt': 'bg-surface-dark-alt text-text-inverse',
  'brand-red': 'bg-brand-red text-white',
}

const sizeClasses: Record<SectionSize, string> = {
  standard: 'py-16 lg:py-24',
  slim: 'py-8 lg:py-12',
  hero: '',
  none: '',
}

export function SectionWrapper({
  bg = 'surface-1',
  size = 'standard',
  className,
  innerClassName,
  children,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn(bgClasses[bg], sizeClasses[size], className)}>
      <div className={cn('max-w-[1200px] mx-auto px-5 lg:px-10', innerClassName)}>
        {children}
      </div>
    </section>
  )
}
