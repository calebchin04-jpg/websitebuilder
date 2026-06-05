'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useEffect } from 'react'
import { contactFormSchema, type ContactFormData } from '@/lib/schema'
import { submitContactForm } from '@/lib/actions'
import { cn } from '@/lib/utils'

const serviceOptions = [
  { value: 'drain-cleaning', label: 'Drain Cleaning' },
  { value: 'sewer-line', label: 'Sewer Line' },
  { value: 'water-heater', label: 'Water Heater' },
  { value: 'emergency', label: 'Emergency' },
  { value: 'backwater-valve', label: 'Backwater Valve / Sump Pump' },
  { value: 'other', label: 'Other / Not Sure' },
]

const inputClass =
  'w-full h-11 px-3 border border-border-default rounded-input text-text-primary text-sm bg-surface-1 focus:outline-none focus:ring-0 focus:border-brand-red transition-colors'

const errorClass = 'text-xs text-color-error mt-1'

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utmSource = params.get('utm_source') ?? params.get('source') ?? ''
    const referrer = document.referrer ?? ''
    if (utmSource) setValue('_source', utmSource)
    if (referrer) setValue('_referrer', referrer)
  }, [setValue])

  async function onSubmit(data: ContactFormData) {
    setServerError(null)
    const result = await submitContactForm(data)
    if (result?.error) setServerError(result.error)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      {/* Spam + attribution hidden fields */}
      <input type="text" {...register('_honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" {...register('_source')} />
      <input type="hidden" {...register('_referrer')} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Name</label>
          <input id="name" type="text" {...register('name')} className={inputClass} placeholder="Your name" />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">Phone</label>
          <input id="phone" type="tel" {...register('phone')} className={inputClass} placeholder="(905) 555-0100" />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email</label>
        <input id="email" type="email" {...register('email')} className={inputClass} placeholder="you@example.com" />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-text-primary mb-1">Service Needed</label>
        <select id="serviceType" {...register('serviceType')} className={cn(inputClass, 'cursor-pointer')}>
          <option value="">Select a service...</option>
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        {errors.serviceType && <p className={errorClass}>{errors.serviceType.message}</p>}
      </div>

      <div>
        <p className="text-sm font-medium text-text-primary mb-2">Urgency</p>
        <div className="flex gap-3">
          {(['emergency', 'scheduled'] as const).map((u) => (
            <label
              key={u}
              className="flex-1 flex items-center justify-center gap-2 h-11 border rounded-input cursor-pointer text-sm font-medium transition-colors has-[:checked]:border-brand-red has-[:checked]:bg-red-50 has-[:checked]:text-brand-red border-border-default text-text-secondary"
            >
              <input type="radio" value={u} {...register('urgency')} className="sr-only" />
              {u === 'emergency' ? '🚨 Emergency' : '📅 Scheduled'}
            </label>
          ))}
        </div>
        {errors.urgency && <p className={errorClass}>{errors.urgency.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">
          Message <span className="text-text-secondary font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={3}
          className={cn(inputClass, 'h-auto py-2.5 resize-none')}
          placeholder="Describe the issue..."
        />
      </div>

      {serverError && (
        <p className="text-sm text-color-error bg-red-50 border border-red-200 rounded-input px-3 py-2">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 bg-brand-red text-white font-semibold uppercase tracking-wide text-sm rounded-btn hover:bg-brand-red-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Get a Free Estimate'}
      </button>

      <p className="text-xs text-text-secondary text-center">
        For emergencies, call <a href="tel:+19054729100" className="text-brand-red font-semibold">(905) 472-9100</a> directly.
      </p>
    </form>
  )
}
