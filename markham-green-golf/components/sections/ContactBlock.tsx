import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { PhoneLink } from '@/components/ui/PhoneLink'
import { siteConfig } from '@/data/site'
import { MapPin, Phone, Clock } from 'lucide-react'

export function ContactBlock() {
  return (
    <SectionWrapper bg="light" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Left — contact details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Find Us
            </p>
            <h2 className="font-serif text-3xl font-semibold text-text-primary leading-tight">
              Pro Shop &amp; Course Information
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {/* Phone */}
            <div className="flex gap-3 items-start">
              <Phone size={18} className="text-accent mt-0.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  Pro Shop
                </p>
                <PhoneLink className="font-sans text-base font-semibold text-text-primary" />
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-3 items-start">
              <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  Address
                </p>
                {siteConfig.address ? (
                  <p className="font-sans text-base text-text-primary">{siteConfig.address}</p>
                ) : (
                  <p className="font-sans text-sm text-text-secondary italic">
                    Address coming soon — contact us for directions
                  </p>
                )}
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-3 items-start">
              <Clock size={18} className="text-accent mt-0.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  Hours
                </p>
                {siteConfig.hours.weekday || siteConfig.hours.weekend ? (
                  <div className="flex flex-col gap-1">
                    {siteConfig.hours.weekday && (
                      <p className="font-sans text-sm text-text-primary">{siteConfig.hours.weekday}</p>
                    )}
                    {siteConfig.hours.weekend && (
                      <p className="font-sans text-sm text-text-primary">{siteConfig.hours.weekend}</p>
                    )}
                  </div>
                ) : (
                  <p className="font-sans text-sm text-text-secondary italic">
                    {siteConfig.hours.note} — call for current hours
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right — Google Maps embed or placeholder */}
        <div className="w-full rounded-lg overflow-hidden border border-border-warm" style={{ aspectRatio: '4/3', minHeight: '280px' }}>
          {siteConfig.mapsUrl ? (
            <iframe
              src={siteConfig.mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Markham Green Golf Club location map"
            />
          ) : (
            <div className="w-full h-full bg-surface-light-alt flex flex-col items-center justify-center gap-2 p-6 text-center">
              <MapPin size={28} className="text-accent" />
              <p className="font-sans text-sm text-text-secondary">
                Map coming soon
              </p>
              <p className="font-sans text-xs text-text-secondary/60">
                Address confirmation pending
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}
