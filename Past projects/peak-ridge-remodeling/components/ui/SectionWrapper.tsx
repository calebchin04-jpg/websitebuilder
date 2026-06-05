import { cn } from '@/lib/utils'

type SectionBackground = 'base' | 'surface' | 'primary' | 'dark'

type SectionWrapperProps = {
  as?: 'section' | 'div' | 'article'
  background?: SectionBackground
  className?: string
  containerClassName?: string
  id?: string
  children: React.ReactNode
}

const bgClasses: Record<SectionBackground, string> = {
  base:    'bg-base',
  surface: 'bg-surface',
  primary: 'bg-primary text-text-inverse',
  dark:    'bg-text-primary text-text-inverse',
}

export function SectionWrapper({
  as: Tag = 'section',
  background = 'base',
  className,
  containerClassName,
  id,
  children,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'py-16 md:py-20 lg:py-28',
        bgClasses[background],
        className
      )}
    >
      <div
        className={cn(
          'mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8',
          containerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  )
}

/** Narrower container for centered text + content blocks */
export function ProseWrapper({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('mx-auto max-w-prose', className)}>
      {children}
    </div>
  )
}
