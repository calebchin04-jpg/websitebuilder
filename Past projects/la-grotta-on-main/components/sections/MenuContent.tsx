import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { menuCategories, dietaryOptions } from '@/data/menu'

export function MenuContent() {
  return (
    <SectionWrapper bg="surface-1" size="standard">
      {/* Page header */}
      <div className="text-center mb-16">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-3">
          Our Menu
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-text-primary">
          What We Serve
        </h1>
        <p className="font-sans text-sm italic text-text-secondary mt-4">
          Please ask your server about today&apos;s specials and seasonal additions.
        </p>
      </div>

      {/* Menu categories */}
      <div>
        {menuCategories.map((category, categoryIndex) => (
          <div key={category.name}>
            <h2
              className={`font-serif text-2xl font-semibold text-text-primary border-b border-border-default pb-3 mb-6 ${
                categoryIndex === 0 ? 'mt-0' : 'mt-14'
              }`}
            >
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {category.items.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-sans font-semibold text-text-primary">
                      {item.name}
                    </span>
                    {item.price && (
                      <span className="font-sans text-sm text-gold font-medium flex-shrink-0">
                        {item.price}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="font-sans text-sm text-text-secondary mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dietary note */}
      <div className="border-t border-border-default mt-14 pt-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {dietaryOptions.map((option) => (
            <li key={option} className="font-sans text-sm text-text-secondary flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold inline-block flex-shrink-0" />
              {option}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
