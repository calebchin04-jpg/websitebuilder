import Image from 'next/image'
import { cn } from '@/lib/utils'

type DishCardProps = {
  name: string
  description: string
  image: string
  className?: string
}

export function DishCard({ name, description, image, className }: DishCardProps) {
  return (
    <div
      className={cn(
        'group flex flex-col bg-surface-1 rounded-card shadow-card hover:shadow-card-hover overflow-hidden transition-shadow duration-200 h-full',
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif font-semibold text-xl text-text-primary">{name}</h3>
        <p className="font-sans text-sm text-text-secondary leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  )
}
