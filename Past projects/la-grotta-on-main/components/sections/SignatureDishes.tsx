import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { DishCard } from '@/components/ui/DishCard'
import { signatureDishes } from '@/data/dishes'

export function SignatureDishes() {
  return (
    <SectionWrapper bg="surface-2" size="standard" id="dishes">

      {/* Section header */}
      <div className="text-center mb-12">
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-4">
          From Our Kitchen
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-text-primary">
          Signature Dishes
        </h2>
      </div>

      {/* Dish grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {signatureDishes.map((dish, index) => (
          <ScrollReveal key={dish.name} delay={index * 100}>
            <DishCard
              name={dish.name}
              description={dish.description}
              image={dish.image}
            />
          </ScrollReveal>
        ))}
      </div>

      {/* Link to full menu */}
      <div className="flex justify-center mt-10">
        <Link
          href="/menu"
          className="font-sans text-sm font-semibold text-text-secondary hover:text-gold transition-colors duration-200 inline-flex items-center gap-1"
        >
          Explore Our Full Menu
          <span aria-hidden="true">→</span>
        </Link>
      </div>

    </SectionWrapper>
  )
}
