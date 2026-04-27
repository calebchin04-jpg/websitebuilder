import { cn } from '@/lib/utils'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

type ProcessStep = {
  number: string
  heading: string
  body: string
}

type ProcessStepsProps = {
  heading?: string
  subheading?: string
  steps: ProcessStep[]
  variant?: 'short' | 'full'
  background?: 'base' | 'surface'
}

export function ProcessSteps({
  heading = 'How It Works',
  subheading,
  steps,
  variant = 'short',
  background = 'surface',
}: ProcessStepsProps) {
  const isFull = variant === 'full'

  return (
    <SectionWrapper background={background}>
      <div className="text-center mb-10 md:mb-12 reveal">
        <h2 className="text-h2 font-bold text-text-primary mb-3 text-balance">
          {heading}
        </h2>
        {subheading && (
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
      </div>

      <ol
        role="list"
        className={cn(
          'grid gap-8',
          isFull
            ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
            : 'grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto'
        )}
      >
        {steps.map((step, i) => {
          const delay =
            i === 0
              ? 'reveal-delay-1'
              : i === 1
              ? 'reveal-delay-2'
              : i === 2
              ? 'reveal-delay-3'
              : i === 3
              ? 'reveal-delay-4'
              : 'reveal-delay-5'

          return (
            <li
              key={step.number}
              className={cn('flex gap-5 reveal', delay)}
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <span
                  className={cn(
                    'flex items-center justify-center',
                    'w-11 h-11 rounded-full',
                    'bg-primary text-text-inverse font-bold text-ui',
                    'select-none'
                  )}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
              </div>

              {/* Step content */}
              <div className="pt-1">
                <h3 className="font-bold text-text-primary text-[1.0625rem] mb-1.5 leading-snug">
                  {step.heading}
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  {step.body}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </SectionWrapper>
  )
}
