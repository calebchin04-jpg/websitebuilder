import { DollarSign, Clock, ShieldCheck, MapPin } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

const points = [
  {
    icon: DollarSign,
    title: 'Flat-Rate Pricing',
    description:
      'You get a quote before we touch anything. The number we give you is the number on the invoice — no extras, no surprises.',
    delay: 'fade-up-1',
  },
  {
    icon: Clock,
    title: 'No Overtime Charges',
    description:
      "Emergency at 2am? Weekend call? The price is the same. We don't charge extra for when you actually need us.",
    delay: 'fade-up-2',
  },
  {
    icon: ShieldCheck,
    title: 'Done Right Promise®',
    description:
      "Every job is backed by the Neighbourly Done Right Promise®. If something's not right, we come back and make it right.",
    delay: 'fade-up-3',
  },
  {
    icon: MapPin,
    title: 'Local Since 1995',
    description:
      "We've been serving Markham families for 30 years. This isn't a call centre — it's a local shop that knows your neighbourhood.",
    delay: 'fade-up-4',
  },
]

export function WhyUs() {
  return (
    <SectionWrapper bg="surface-1" id="why-us">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-text-primary mb-2">Why Markham Calls Us First</h2>
        <p className="text-text-secondary max-w-xl">
          Not because we say we&rsquo;re the best — because the way we work is different.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {points.map((point) => {
          const Icon = point.icon
          return (
            <div key={point.title} className={`flex flex-col gap-3 ${point.delay}`}>
              <div className="w-9 h-9 rounded flex items-center justify-center bg-red-50 text-brand-red">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-text-primary text-sm">{point.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{point.description}</p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
