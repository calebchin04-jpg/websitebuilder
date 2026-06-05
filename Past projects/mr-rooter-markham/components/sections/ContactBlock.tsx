import { Phone, Clock, MapPin } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ContactForm } from './ContactForm'
import { siteConfig } from '@/data/site'

export function ContactBlock() {
  return (
    <SectionWrapper bg="surface-1" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Form — wider col */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-text-primary mb-1">Schedule a Service</h2>
          <p className="text-text-secondary text-sm mb-6">
            Fill out the form and we&rsquo;ll follow up within a few hours. For emergencies, call directly.
          </p>
          <ContactForm />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-surface-2 rounded-card p-6 border border-border-default">
            <p className="font-semibold text-text-primary mb-4">Contact Us Directly</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-brand-red mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-secondary mb-0.5">Phone</p>
                  <a href={siteConfig.phoneHref} className="font-semibold text-text-primary hover:text-brand-red transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-brand-red mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-secondary mb-0.5">Hours</p>
                  <p className="text-sm text-text-primary font-medium">{siteConfig.hours.emergency}</p>
                  <p className="text-xs text-text-secondary">{siteConfig.hours.regular}</p>
                  <p className="text-xs text-text-secondary">{siteConfig.hours.weekend}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-secondary mb-0.5">Service Area</p>
                  <p className="text-sm text-text-primary">Markham, Stouffville, Unionville, Richmond Hill & York Region</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-brand-red pl-4">
            <p className="font-semibold text-text-primary text-sm mb-1">No Overtime Charges</p>
            <p className="text-text-secondary text-sm">
              We don&rsquo;t charge more for evenings, weekends, or holidays. The price quoted is the price you pay.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
