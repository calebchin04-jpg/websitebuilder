'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

const estimateSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().optional(),
  // Honeypot — must be empty
  website: z.string().max(0).optional(),
})

export type EstimateFormState = {
  errors?: Partial<Record<keyof z.infer<typeof estimateSchema>, string[]>>
  message?: string
  success?: boolean
}

export async function submitEstimateForm(
  _prevState: EstimateFormState,
  formData: FormData
): Promise<EstimateFormState> {
  // Honeypot check — bots fill this; humans don't
  const honeypot = formData.get('website')
  if (honeypot) {
    // Silently succeed to not tip off bots
    redirect('/thank-you')
  }

  const rawData = {
    name: formData.get('name') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
    projectType: formData.get('projectType') as string,
    message: formData.get('message') as string,
  }

  const parsed = estimateSchema.safeParse(rawData)

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors as EstimateFormState['errors'],
    }
  }

  const { name, phone, email, projectType, message } = parsed.data

  // Send email via Resend
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.RESEND_TO_EMAIL || 'hello@peakridgeremodeling.com'
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@peakridgeremodeling.com'

  if (!apiKey) {
    console.error('[actions.ts] RESEND_API_KEY is not set — form submission not sent')
    // Still redirect in development — don't block the UX
    redirect('/thank-you')
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: `Peak Ridge Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Estimate Request — ${projectType} | ${name}`,
      text: [
        `New estimate request from peakridgeremodeling.com`,
        ``,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Project Type: ${projectType}`,
        `Message: ${message || '(none provided)'}`,
        ``,
        `Reply directly to this email to reach ${name} at ${email}.`,
      ].join('\n'),
    })
  } catch (err) {
    console.error('[actions.ts] Failed to send email via Resend:', err)
    return {
      message: 'There was a problem submitting your request. Please call us directly.',
    }
  }

  redirect('/thank-you')
}
