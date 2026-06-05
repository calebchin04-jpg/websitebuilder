import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { PricingTierCard } from '@/components/ui/PricingTierCard'
import { BookingCTA } from '@/components/ui/BookingCTA'
import { greenFees, cartRental } from '@/data/pricing'

export function PricingTable() {
  return (
    <SectionWrapper bg="light" id="pricing">
      <div className="flex flex-col gap-8">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            2025 Green Fees
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
            Straightforward pricing — nothing hidden.
          </h2>
        </div>

        {/* Mobile: stacked tier cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:hidden-desktop">
          {greenFees.map((tier, i) => (
            <PricingTierCard
              key={tier.label}
              tier={tier}
              animClass={`fade-up-${Math.min(i + 1, 4)}`}
            />
          ))}
          {/* Cart */}
          <div className="flex flex-col gap-1 rounded-lg border border-border-warm bg-surface-light p-5 md:p-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
              {cartRental.label}
            </p>
            <p className="font-sans text-3xl font-bold text-text-primary leading-none">
              ${cartRental.price}
            </p>
            <p className="font-sans text-sm text-text-secondary">{cartRental.condition}</p>
          </div>
        </div>

        {/* Desktop: table (hidden on sm, shown lg) */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-border-warm">
                <th className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary pb-3 pr-8">
                  Rate Type
                </th>
                <th className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary pb-3 pr-8">
                  Price
                </th>
                <th className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary pb-3">
                  Conditions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-warm">
              {greenFees.map((tier) => (
                <tr key={tier.label} className={tier.highlight ? 'bg-surface-light-alt' : ''}>
                  <td className="py-4 pr-8 font-sans text-sm font-semibold text-text-primary">
                    {tier.label}
                    {tier.highlight && (
                      <span className="ml-2 font-sans text-xs font-semibold text-accent uppercase tracking-wide">
                        Most popular
                      </span>
                    )}
                  </td>
                  <td className="py-4 pr-8 font-sans text-xl font-bold text-text-primary">
                    ${tier.price}
                  </td>
                  <td className="py-4 font-sans text-sm text-text-secondary">
                    {tier.condition}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-border-warm">
                <td className="py-4 pr-8 font-sans text-sm font-semibold text-text-primary">
                  {cartRental.label}
                </td>
                <td className="py-4 pr-8 font-sans text-xl font-bold text-text-primary">
                  ${cartRental.price}
                </td>
                <td className="py-4 font-sans text-sm text-text-secondary">
                  {cartRental.condition}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-sans text-xs text-text-secondary">
          Rates reflect the 2025 season. Prices subject to change.
        </p>

        <div>
          <BookingCTA size="lg" />
        </div>
      </div>
    </SectionWrapper>
  )
}
