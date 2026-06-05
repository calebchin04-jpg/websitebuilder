'use server'

import { redirect } from 'next/navigation'
import { siteConfig } from '@/data/site'

type InquiryFormData = {
  name: string
  email: string
  occasion: string
  message: string
  _honey?: string
}

export async function submitInquiryForm(data: InquiryFormData) {
  // Honeypot check
  if (data._honey) return { error: 'Invalid submission' }

  const { Resend } = await import('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'La Grotta Website <enquiries@lagrottaonmain.ca>',
      to: 'lagrottaonmain@gmail.com',
      subject: `Private Functions Enquiry — ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Occasion: ${data.occasion}

Message:
${data.message}
      `.trim(),
    })
  } catch {
    return { error: `Failed to send. Please call us directly at ${siteConfig.phone}.` }
  }

  redirect('/thank-you')
}
