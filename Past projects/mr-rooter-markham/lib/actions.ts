'use server'

import { redirect } from 'next/navigation'
import { contactFormSchema } from '@/lib/schema'
import { siteConfig } from '@/data/site'

export async function submitContactForm(data: unknown) {
  const parsed = contactFormSchema.safeParse(data)
  if (!parsed.success) return { error: 'Invalid form data.' }

  const { name, phone, email, serviceType, urgency, message, _honeypot, _source, _referrer } = parsed.data

  if (_honeypot) return { error: 'Invalid submission.' }

  const { Resend } = await import('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)

  const urgencyLabel = urgency === 'emergency' ? '🚨 EMERGENCY' : 'Scheduled'
  const subject = `[${urgencyLabel}] New Contact — ${name} (${serviceType})`

  try {
    await resend.emails.send({
      from: 'Mr. Rooter Markham Website <noreply@mrrootermarkham.ca>',
      to: process.env.CONTACT_EMAIL ?? siteConfig.email,
      subject,
      text: `
New contact form submission

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${serviceType}
Urgency: ${urgencyLabel}

Message:
${message ?? '(none)'}

---
Source: ${_source ?? '(direct)'}
Referrer: ${_referrer ?? '(none)'}
      `.trim(),
    })
  } catch {
    return {
      error: `Failed to send. Please call us directly at ${siteConfig.phone}.`,
    }
  }

  redirect('/thank-you')
}
