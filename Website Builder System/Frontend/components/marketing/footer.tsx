import { Instagram, Mail } from "lucide-react"

const linkCols: {
  heading: string
  links: { label: string; href: string }[]
}[] = [
  {
    heading: "Company",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "What you get", href: "#what-you-get" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund & Cancellation", href: "/refunds" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#EDE3CB] border-t border-[rgba(42,31,20,0.1)] pt-12 lg:pt-16 pb-10 px-5 lg:px-[75px]">
      <div className="w-full">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 mb-10 lg:mb-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <a href="#" className="flex items-baseline mb-5">
              <span className="text-[14px] font-bold text-[#2A1F14] tracking-[0.18em]">
                CROSSROADS
              </span>
            </a>
            <p className="text-sm text-[rgba(42,31,20,0.6)] leading-relaxed max-w-xs mb-6">
              Helping Markham businesses get discovered by local residents through a
              local directory, in-store voting, giveaways, and monthly exposure.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:caleb.chin04@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[rgba(42,31,20,0.62)] hover:text-[#1F4E3D] transition-colors"
              >
                <Mail size={14} className="opacity-70" />
                caleb.chin04@gmail.com
              </a>
              <a
                href="https://instagram.com/gtamarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[rgba(42,31,20,0.62)] hover:text-[#1F4E3D] transition-colors"
              >
                <Instagram size={14} className="opacity-70" />
                @gtamarketing
              </a>
            </div>
          </div>

          {/* Link columns */}
          {linkCols.map((col) => (
            <div key={col.heading} className="md:col-span-3">
              <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-[rgba(42,31,20,0.5)] mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[rgba(42,31,20,0.62)] hover:text-[#2A1F14] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Service area */}
          <div className="md:col-span-1">
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-[rgba(42,31,20,0.5)] mb-4">
              Service area
            </p>
            <p className="text-sm text-[rgba(42,31,20,0.62)] leading-relaxed">
              Markham, ON<br />
              <span className="text-xs text-[rgba(42,31,20,0.45)]">
                + select GTA neighbourhoods
              </span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(42,31,20,0.1)] pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-[rgba(42,31,20,0.45)]">
            © 2026 Crossroads. All rights reserved.
          </p>
          <p className="text-xs text-[rgba(42,31,20,0.5)] flex items-center gap-2">
            <span className="inline-block w-1 h-1 rounded-full bg-[#1F4E3D]" />
            Built in Markham, Ontario
          </p>
        </div>
      </div>
    </footer>
  )
}
