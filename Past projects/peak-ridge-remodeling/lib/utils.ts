import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge Tailwind classes safely with clsx + tailwind-merge */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format phone number for tel: href — strip all non-digits */
export function formatPhoneHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, '')}`
}
