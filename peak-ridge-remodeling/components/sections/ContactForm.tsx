'use client'

import { useActionState } from 'react'
import { cn } from '@/lib/utils'
import { submitEstimateForm, type EstimateFormState } from '@/lib/actions'
import { contactPage } from '@/data/pages/contact'

const initialState: EstimateFormState = {}

const projectOptions = contactPage.form.fields.projectType.options

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitEstimateForm, initialState)

  const { fields } = contactPage.form

  return (
    <form
      action={formAction}
      noValidate
      className="space-y-5"
      aria-label="Request a free estimate"
    >
      {/* Global error */}
      {state.message && (
        <div
          role="alert"
          className="rounded-lg bg-error/10 border border-error/20 px-4 py-3 text-body text-error"
        >
          {state.message}
        </div>
      )}

      {/* Honeypot — hidden from humans, filled by bots */}
      <div aria-hidden="true" className="hidden" tabIndex={-1}>
        <label htmlFor="website">Website (leave blank)</label>
        <input
          type="text"
          id="website"
          name="website"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-ui font-semibold text-text-primary mb-1.5"
        >
          {fields.name.label}
          <span className="text-error ml-0.5" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder={fields.name.placeholder}
          required
          aria-required="true"
          aria-describedby={state.errors?.name ? 'name-error' : undefined}
          className={cn(
            'w-full rounded border px-4 py-3 text-body text-text-primary',
            'placeholder:text-text-muted bg-base',
            'transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary',
            state.errors?.name
              ? 'border-error focus:ring-error/30 focus:border-error'
              : 'border-border hover:border-border-strong'
          )}
        />
        {state.errors?.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-fine text-error">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      {/* Phone + Email — side by side on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-ui font-semibold text-text-primary mb-1.5"
          >
            {fields.phone.label}
            <span className="text-error ml-0.5" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder={fields.phone.placeholder}
            required
            aria-required="true"
            aria-describedby={state.errors?.phone ? 'phone-error' : undefined}
            className={cn(
              'w-full rounded border px-4 py-3 text-body text-text-primary',
              'placeholder:text-text-muted bg-base',
              'transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary',
              state.errors?.phone
                ? 'border-error focus:ring-error/30 focus:border-error'
                : 'border-border hover:border-border-strong'
            )}
          />
          {state.errors?.phone && (
            <p id="phone-error" role="alert" className="mt-1.5 text-fine text-error">
              {state.errors.phone[0]}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-ui font-semibold text-text-primary mb-1.5"
          >
            {fields.email.label}
            <span className="text-error ml-0.5" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder={fields.email.placeholder}
            required
            aria-required="true"
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
            className={cn(
              'w-full rounded border px-4 py-3 text-body text-text-primary',
              'placeholder:text-text-muted bg-base',
              'transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary',
              state.errors?.email
                ? 'border-error focus:ring-error/30 focus:border-error'
                : 'border-border hover:border-border-strong'
            )}
          />
          {state.errors?.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-fine text-error">
              {state.errors.email[0]}
            </p>
          )}
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="block text-ui font-semibold text-text-primary mb-1.5"
        >
          {fields.projectType.label}
          <span className="text-error ml-0.5" aria-hidden="true">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          aria-required="true"
          aria-describedby={state.errors?.projectType ? 'projectType-error' : undefined}
          defaultValue=""
          className={cn(
            'w-full rounded border px-4 py-3 text-body text-text-primary bg-base',
            'transition-colors duration-150 appearance-none',
            'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary',
            'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20fill%3D\'none\'%20viewBox%3D\'0%200%2020%2020\'%3E%3Cpath%20stroke%3D\'%23A8A29E\'%20stroke-linecap%3D\'round\'%20stroke-linejoin%3D\'round\'%20stroke-width%3D\'1.5\'%20d%3D\'M6%208l4%204%204-4\'%2F%3E%3C%2Fsvg%3E")]',
            'bg-[length:20px_20px] bg-[right_0.75rem_center] bg-no-repeat pr-10',
            state.errors?.projectType
              ? 'border-error focus:ring-error/30 focus:border-error'
              : 'border-border hover:border-border-strong'
          )}
        >
          <option value="" disabled>
            {fields.projectType.placeholder}
          </option>
          {projectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {state.errors?.projectType && (
          <p id="projectType-error" role="alert" className="mt-1.5 text-fine text-error">
            {state.errors.projectType[0]}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-ui font-semibold text-text-primary mb-1.5"
        >
          {fields.message.label}
          <span className="text-text-muted font-normal text-fine ml-1.5">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={fields.message.placeholder}
          className={cn(
            'w-full rounded border px-4 py-3 text-body text-text-primary',
            'placeholder:text-text-muted bg-base',
            'resize-y min-h-[100px]',
            'transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary',
            'border-border hover:border-border-strong'
          )}
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={isPending}
          aria-disabled={isPending}
          className={cn(
            'w-full inline-flex items-center justify-center gap-2',
            'rounded font-semibold text-ui',
            'bg-primary text-text-inverse',
            'transition-colors duration-150 shadow-button active:scale-[0.98]',
            'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
            isPending
              ? 'opacity-70 cursor-not-allowed'
              : 'hover:bg-primary-dark'
          )}
          style={{ height: '3.25rem' }}
        >
          {isPending ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending…
            </>
          ) : (
            contactPage.form.submitLabel
          )}
        </button>

        <p className="mt-3 text-fine text-text-muted text-center">
          {contactPage.form.privacyNote}
        </p>
      </div>
    </form>
  )
}
