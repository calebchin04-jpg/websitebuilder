import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { services } from '@/data/services'
import type { Service } from '@/data/services'

type ServicesGridProps = {
  heading?: string
  subheading?: string
  items?: Service[]
  background?: 'base' | 'surface'
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const delay =
    index === 0 ? 'reveal-delay-1' : index === 1 ? 'reveal-delay-2' : 'reveal-delay-3'

  return (
    <article
      className={cn(
        'group bg-base rounded-xl overflow-hidden shadow-card',
        'flex flex-col',
        'transition-shadow duration-200 hover:shadow-card-hover',
        'reveal',
        delay
      )}
    >
      {/* Card image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={service.cardImage}
          alt={`${service.name} by Peak Ridge Remodeling`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-h3 font-bold text-text-primary mb-2">
          {service.name}
        </h3>
        <p className="text-body text-text-secondary leading-relaxed flex-1 mb-5">
          {service.shortDescription}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className={cn(
            'inline-flex items-center gap-1.5 font-semibold text-primary text-ui',
            'hover:gap-2.5 transition-all duration-150',
            'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm'
          )}
          aria-label={`Learn more about ${service.name}`}
        >
          Learn more
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export function ServicesGrid({
  heading = 'Our Services',
  subheading,
  items = services,
  background = 'base',
}: ServicesGridProps) {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((service, i) => (
          <ServiceCard key={service.slug} service={service} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
