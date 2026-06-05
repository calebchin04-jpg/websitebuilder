import { SectionWrapper } from '@/components/ui/SectionWrapper'

const steps = [
  {
    number: '01',
    title: 'Call or Schedule Online',
    description:
      'We answer 24 hours a day. Call (905) 472-9100 or fill out the form — we respond the same day for scheduled work, same hour for emergencies.',
    delay: 'fade-up-1',
  },
  {
    number: '02',
    title: 'Get a Quote Before We Start',
    description:
      'A licensed plumber assesses the job and gives you a flat-rate price upfront. You approve it before anything happens. No pressure, no surprises.',
    delay: 'fade-up-2',
  },
  {
    number: '03',
    title: 'Work Done, Billed as Quoted',
    description:
      'The number on your quote is the number on your invoice. Always. Evenings, weekends, holidays — same price, no overtime.',
    delay: 'fade-up-3',
  },
]

export function HowItWorks() {
  return (
    <SectionWrapper bg="surface-2" id="how-it-works">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-text-primary mb-2">How It Works</h2>
        <p className="text-text-secondary max-w-xl">
          Three steps. No guesswork. The price you hear is the price you pay.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step) => (
          <div key={step.number} className={`flex flex-col gap-3 ${step.delay}`}>
            <span className="text-5xl font-extrabold text-brand-red/20 leading-none select-none">
              {step.number}
            </span>
            <h3 className="font-bold text-text-primary text-lg -mt-1">{step.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
