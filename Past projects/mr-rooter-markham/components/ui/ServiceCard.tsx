import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/data/services'

type ServiceCardProps = {
  service: Pick<Service, 'slug' | 'name' | 'shortDescription' | 'icon'>
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-4 bg-surface-1 border border-border-default rounded-card p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="w-10 h-10 rounded-md bg-red-50 flex items-center justify-center text-brand-red">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-semibold text-text-primary mb-1">{service.name}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{service.shortDescription}</p>
      </div>
      <div className="flex items-center gap-1 text-brand-red text-sm font-semibold mt-auto">
        Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  )
}
