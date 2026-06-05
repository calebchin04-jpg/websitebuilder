declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args)
  }
}

export function trackPhoneClick(location: string) {
  gtag('event', 'phone_click', { event_category: 'engagement', event_label: location })
}

export function trackFormSubmit() {
  gtag('event', 'form_submit', { event_category: 'lead', event_label: 'private_functions_enquiry' })
}

export function trackPageView(url: string) {
  gtag('event', 'page_view', { page_path: url })
}
