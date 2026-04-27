import { cn } from '@/lib/utils'

type Bg = 'dark' | 'dark-alt' | 'light' | 'light-alt'

const bgMap: Record<Bg, string> = {
  'dark':      'bg-surface-dark text-text-inverse',
  'dark-alt':  'bg-surface-dark-alt text-text-inverse',
  'light':     'bg-surface-light text-text-primary',
  'light-alt': 'bg-surface-light-alt text-text-primary',
}

interface Props {
  children: React.ReactNode
  bg?: Bg
  id?: string
  className?: string
  narrow?: boolean
}

export function SectionWrapper({ children, bg = 'light', id, className, narrow }: Props) {
  return (
    <section id={id} className={cn(bgMap[bg], 'py-16 md:py-20 lg:py-24', className)}>
      <div className={cn('mx-auto px-5 md:px-8', narrow ? 'max-w-prose' : 'max-w-content')}>
        {children}
      </div>
    </section>
  )
}
