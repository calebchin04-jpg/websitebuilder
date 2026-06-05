'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  heading?: string
  subheading?: string
  items: FAQItem[]
  background?: 'base' | 'surface'
}

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const id = `faq-answer-${index}`
  const triggerId = `faq-trigger-${index}`

  return (
    <div className="border-b border-border last:border-b-0">
      <h3>
        <button
          id={triggerId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={id}
          className={cn(
            'w-full flex items-center justify-between gap-4',
            'py-5 text-left',
            'font-semibold text-[1rem] text-text-primary',
            'hover:text-primary transition-colors duration-150',
            'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm'
          )}
        >
          <span>{item.question}</span>
          <span
            className={cn(
              'flex-shrink-0 w-5 h-5 text-primary transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
            aria-hidden="true"
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={id}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
      >
        <p className="pb-5 text-body text-text-secondary leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export function FAQAccordion({
  heading = 'Frequently Asked Questions',
  subheading,
  items,
  background = 'base',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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

      <div
        className="max-w-3xl mx-auto bg-base rounded-xl shadow-card px-6 md:px-8 reveal reveal-delay-1"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {items.map((item, i) => (
          <div
            key={i}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <meta itemProp="name" content={item.question} />
            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <meta itemProp="text" content={item.answer} />
            </div>
            <FAQItem
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
