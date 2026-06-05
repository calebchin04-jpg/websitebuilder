'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { submitInquiryForm } from '@/lib/actions'
import { privateFunctionsContent } from '@/data/pages/private-functions'

type FormFields = {
  name: string
  email: string
  occasion: string
  message: string
  _honey: string
}

const occasionOptions = [
  'Anniversary',
  'Birthday',
  'Corporate Event',
  'Holiday Party',
  'Other',
]

const inputClasses =
  'w-full rounded-input border border-border-default bg-white px-4 py-3 font-sans text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors'

const labelClasses = 'block font-sans text-sm font-semibold text-text-primary mb-1.5'

const errorClasses = 'text-red-600 text-xs mt-1'

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: '',
      email: '',
      occasion: '',
      message: '',
      _honey: '',
    },
  })

  const onSubmit = async (data: FormFields) => {
    setIsSubmitting(true)
    setServerError(null)
    try {
      const result = await submitInquiryForm({
        name: data.name,
        email: data.email,
        occasion: data.occasion,
        message: data.message,
        _honey: data._honey,
      })
      if (result && 'error' in result) {
        setServerError(result.error)
        setIsSubmitting(false)
      }
    } catch (err) {
      // redirect() throws a NEXT_REDIRECT error — let it propagate so navigation completes
      if (err instanceof Error && err.message !== 'NEXT_REDIRECT') {
        setServerError('Something went wrong. Please try again or call us directly.')
        setIsSubmitting(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot — hidden from users and screen readers */}
      <div className="sr-only">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          {...register('_honey')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
            className={inputClasses}
            {...register('name', { required: 'Please enter your name.' })}
          />
          {errors.name && (
            <p id="name-error" className={errorClasses}>{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
            className={inputClasses}
            {...register('email', {
              required: 'Please enter your email address.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address.',
              },
            })}
          />
          {errors.email && (
            <p id="email-error" className={errorClasses}>{errors.email.message}</p>
          )}
        </div>

        {/* Occasion */}
        <div className="sm:col-span-2">
          <label htmlFor="occasion" className={labelClasses}>
            Occasion
          </label>
          <select
            id="occasion"
            aria-describedby={errors.occasion ? 'occasion-error' : undefined}
            aria-invalid={!!errors.occasion}
            className={inputClasses}
            {...register('occasion', { required: 'Please select an occasion type.' })}
          >
            <option value="">Select an occasion…</option>
            {occasionOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.occasion && (
            <p id="occasion-error" className={errorClasses}>{errors.occasion.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Tell us about your event
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your event — date, guest count, any special requirements"
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={!!errors.message}
            className={inputClasses}
            {...register('message', { required: 'Please tell us about your event.' })}
          />
          {errors.message && (
            <p id="message-error" className={errorClasses}>{errors.message.message}</p>
          )}
        </div>
      </div>

      {serverError && (
        <p className="text-red-600 text-sm mt-4">{serverError}</p>
      )}

      <div className="mt-8">
        <Button
          variant="primary"
          size="lg"
          type="submit"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending…' : privateFunctionsContent.form.submitLabel}
        </Button>
      </div>
    </form>
  )
}
