import { cn } from '@/lib/utils'

type SectionBg = 'surface-1' | 'surface-2' | 'dark'
type SectionSize = 'standard' | 'hero' | 'slim'

type SectionWrapperProps = {
  bg?: SectionBg
  size?: SectionSize
  className?: string
  children: React.ReactNode
  id?: string
}

const bgClasses: Record<SectionBg, string> = {
  'surface-1': 'bg-surface-1',
  'surface-2': 'bg-surface-2',
  dark: 'bg-surface-dark text-text-inverse',
}

const sizeClasses: Record<SectionSize, string> = {
  standard: 'py-20 lg:py-28',
  slim: 'py-10 lg:py-14',
  hero: '',
}

export function SectionWrapper({
  bg = 'surface-1',
  size = 'standard',
  className,
  children,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn(bgClasses[bg], sizeClasses[size], className)}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">{children}</div>
    </section>
  )
}
