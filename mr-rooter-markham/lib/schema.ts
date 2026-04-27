import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  serviceType: z.enum(
    ['drain-cleaning', 'sewer-line', 'water-heater', 'emergency', 'backwater-valve', 'other'],
    { errorMap: () => ({ message: 'Select a service type' }) }
  ),
  urgency: z.enum(['emergency', 'scheduled'], {
    errorMap: () => ({ message: 'Select urgency' }),
  }),
  message: z.string().optional(),
  _honeypot: z.string().max(0).optional(),
  _source: z.string().optional(),
  _referrer: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
