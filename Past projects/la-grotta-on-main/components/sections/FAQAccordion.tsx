'use client'

import { useState } from 'react'
import type { FAQItem } from '@/data/faq'

type FAQAccordionProps = {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="space-y-0 divide-y divide-border-default">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const btnId = `faq-btn-${index}`
        return (
          <div key={index}>
            <button
              id={btnId}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex justify-between items-center py-5 text-left w-full"
            >
              <span className="font-sans font-semibold text-text-primary text-base">
                {item.question}
              </span>
              <span
                className="text-gold text-xl font-light ml-4 flex-shrink-0 leading-none"
                aria-hidden="true"
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="pb-5"
              >
                <p className="font-sans text-text-secondary leading-relaxed text-base">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
