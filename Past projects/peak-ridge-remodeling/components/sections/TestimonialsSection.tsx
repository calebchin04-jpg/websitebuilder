import { cn } from '@/lib/utils'
import { StarRating } from '@/components/ui/StarRating'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { testimonials as allTestimonials } from '@/data/testimonials'
import type { Testimonial } from '@/data/testimonials'
import { siteConfig } from '@/data/site'

type TestimonialsSectionProps = {
  heading?: string
  subheading?: string
  items?: Testimonial[]
  ids?: string[]
  columns?: 2 | 3
  background?: 'base' | 'surface'
  showReviewLink?: boolean
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <article
      className={cn(
        'bg-base rounded-xl p-6 shadow-card',
        'flex flex-col gap-4',
        'reveal',
        index === 0 ? 'reveal-delay-1' : index === 1 ? 'reveal-delay-2' : 'reveal-delay-3'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <StarRating rating={item.rating} size="sm" />
        {/* Google "G" mark */}
        <svg
          className="w-5 h-5 flex-shrink-0 text-text-muted"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-label="Google review"
        >
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      </div>

      <blockquote>
        <p className="text-body text-text-secondary leading-relaxed">
          "{item.quote}"
        </p>
      </blockquote>

      <footer className="mt-auto pt-2 border-t border-border">
        <cite className="not-italic">
          <span className="block font-semibold text-[0.9rem] text-text-primary">{item.name}</span>
          <span className="block text-fine text-text-secondary">
            {item.projectType} · {item.location}
          </span>
        </cite>
      </footer>
    </article>
  )
}

export function TestimonialsSection({
  heading = 'What Portland Homeowners Say',
  subheading,
  items,
  ids,
  columns = 3,
  background = 'surface',
  showReviewLink = true,
}: TestimonialsSectionProps) {
  // Resolve testimonials by ids if provided, otherwise use items, otherwise use all
  const resolvedItems: Testimonial[] = ids
    ? ids.map((id) => allTestimonials.find((t) => t.id === id)).filter(Boolean) as Testimonial[]
    : items ?? allTestimonials.slice(0, columns === 3 ? 3 : 2)

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
        className={cn(
          'grid gap-5',
          columns === 3
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 md:grid-cols-2'
        )}
      >
        {resolvedItems.map((item, i) => (
          <TestimonialCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {showReviewLink && (
        <div className="text-center mt-8 reveal">
          <a
            href={siteConfig.reviews.platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-body text-primary font-medium hover:underline underline-offset-4 transition-colors"
          >
            Read all {siteConfig.reviews.count}+ reviews on {siteConfig.reviews.platform}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </a>
        </div>
      )}
    </SectionWrapper>
  )
}
