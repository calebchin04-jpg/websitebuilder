'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useEffect } from 'react'
import { z } from 'zod'
import { contactFormSchema } from '@/lib/schema'
import { submitContactForm } from '@/lib/actions'
import { cn } from '@/lib/utils'

// Compact subset — email + message not required in hero form
const heroFormSchema = contactFormSchema.extend({
  email: z.string().optional(),
  message: z.string().optional(),
})

type HeroFormData = z.infer<typeof heroFormSchema>

const serviceOptions = [
  { value: 'drain-cleaning', label: 'Drain Cleaning' },
  { value: 'sewer-line', label: 'Sewer Line' },
  { value: 'water-heater', label: 'Water Heater' },
  { value: 'emergency', label: 'Emergency' },
  { value: 'backwater-valve', label: 'Backwater Valve' },
  { value: 'other', label: 'Other / Not Sure' },
]

const inputClass =
  'w-full h-10 px-3 border border-gray-200 rounded-input text-text-primary text-sm bg-white focus:outline-none focus:ring-0 focus:border-brand-red transition-colors'

export function HeroForm() {
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utmSource = params.get('utm_source') ?? params.get('source') ?? ''
    const referrer = document.referrer ?? ''
    if (utmSource) setValue('_source', utmSource)
    if (referrer) setValue('_referrer', referrer)
  }, [setValue])

  async function onSubmit(data: HeroFormData) {
    setServerError(null)
    const result = await submitContactForm(data)
    if (result?.error) setServerError(result.error)
  }

  return (
    <div className="bg-white rounded-card shadow-xl p-6 flex flex-col gap-4">
      <div>
        <p className="font-bold text-text-primary text-base">Get a Free Estimate</p>
        <p className="text-text-secondary text-xs mt-0.5">No overtime charges · Quoted before we start</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" noValidate>
        <input type="text" {...register('_honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" {...register('_source')} />
        <input type="hidden" {...register('_referrer')} />

        <div>
          <label htmlFor="hero-name" className="sr-only">Name</label>
          <input
            id="hero-name"
            type="text"
            {...register('name')}
            className={inputClass}
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="hero-phone" className="sr-only">Phone</label>
          <input
            id="hero-phone"
            type="tel"
            {...register('phone')}
            className={inputClass}
            placeholder="Phone number"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="hero-service" className="sr-only">Service Needed</label>
          <select
            id="hero-service"
            {...register('serviceType')}
            className={cn(inputClass, 'cursor-pointer')}
          >
            <option value="">Service needed...</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.serviceType && <p className="text-xs text-red-600 mt-1">{errors.serviceType.message}</p>}
        </div>

        <div className="flex gap-2">
          {(['emergency', 'scheduled'] as const).map((u) => (
            <label
              key={u}
              className="flex-1 flex items-center justify-center h-9 border rounded-input cursor-pointer text-xs font-medium transition-colors has-[:checked]:border-brand-red has-[:checked]:bg-red-50 has-[:checked]:text-brand-red border-gray-200 text-text-secondary"
            >
              <input type="radio" value={u} {...register('urgency')} className="sr-only" />
              {u === 'emergency' ? '🚨 Emergency' : '📅 Scheduled'}
            </label>
          ))}
        </div>
        {errors.urgency && <p className="text-xs text-red-600">{errors.urgency.message}</p>}

        {serverError && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-11 bg-brand-red text-white font-semibold uppercase tracking-wide text-sm rounded-btn hover:bg-brand-red-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get a Free Estimate →'}
        </button>
      </form>

      <p className="text-xs text-text-secondary text-center -mt-1">
        Or call <a href="tel:+19054729100" className="text-brand-red font-semibold">(905) 472-9100</a> now
      </p>
    </div>
  )
}
