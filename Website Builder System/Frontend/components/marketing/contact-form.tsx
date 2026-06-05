"use client"

import { useState } from "react"
import { FadeIn } from "./fade-in"
import { Section } from "./section"
import { motion, AnimatePresence } from "framer-motion"

const trustLines = [
  "No payment required to start",
  "2 months free for Founding 30 members",
  "In-person demo available in Markham",
]

const timeOptions = [
  "Select a preference…",
  "Morning (9am–12pm)",
  "Afternoon (12pm–5pm)",
  "Evening (5pm–8pm)",
  "Weekends",
  "Flexible — any time works",
]

const categoryOptions = [
  "Select your category…",
  "Restaurant / Café",
  "Retail / Shop",
  "Health & Beauty",
  "Professional Services",
  "Home & Trades",
  "Fitness / Wellness",
  "Other",
]

const tierOptions = [
  "Not sure yet — help me decide",
  "Small — $5/mo",
  "Medium — $25/mo",
  "Large — $37.50/mo",
]

const selectChevron = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%232A1F14' stroke-opacity='0.55' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 16px center",
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      businessName: formData.get("businessName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      category: formData.get("category"),
      address: formData.get("address"),
      links: formData.get("links"),
      tier: formData.get("tier"),
      inPersonDemo: formData.get("inPersonDemo"),
      bestTime: formData.get("bestTime"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // Handle error silently for now
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact" bg="#F4ECD8" divider={false} style={{ paddingTop: 5 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* LEFT — copy + trust lines */}
          <FadeIn>
            <div className="max-w-xl min-w-0">
              <div aria-hidden style={{ height: 31 }} />
              <h2
                className="font-bold leading-tight tracking-[-0.025em] mb-6 text-[#2A1F14]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Let&apos;s talk. We&apos;ll reply within 24 hours.
              </h2>
              <p className="text-sm text-[rgba(42,31,20,0.62)] leading-relaxed mb-10 max-w-md">
                Whether you want to claim your Founding 30 spot, book a live
                demo, or just ask a question — we&apos;ll reach out personally.
              </p>

              {/* Trust lines */}
              <ul className="space-y-3.5">
                {trustLines.map((line) => (
                  <li
                    key={line}
                    className="text-sm text-[rgba(42,31,20,0.65)] flex items-start gap-3 leading-relaxed"
                  >
                    <span className="text-[#1F4E3D] shrink-0 mt-0.5">✓</span>
                    <span className="min-w-0 break-words">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* RIGHT — form card */}
          <FadeIn delay={0.1}>
            <div className="min-w-0 w-full rounded-3xl border border-[rgba(42,31,20,0.12)] bg-[#FBF7EE] px-4 sm:px-5 pt-5 pb-4 shadow-sm">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-[rgba(31,78,61,0.12)] border border-[rgba(31,78,61,0.2)] flex items-center justify-center mx-auto mb-6">
                      <span className="text-[#1F4E3D] text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2A1F14] mb-3">
                      You&apos;re on the list.
                    </h3>
                    <p className="text-sm text-[rgba(42,31,20,0.62)] leading-relaxed">
                      We&apos;ll reach out within 24 hours to lock in your spot.
                      <br />
                      Welcome to the ecosystem.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-2"
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="min-w-0">
                        <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                          Your name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-lg px-3 h-9 text-[14px] min-w-0 text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="min-w-0">
                        <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                          Business name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          required
                          className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-lg px-3 h-9 text-[14px] min-w-0 text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="min-w-0">
                        <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-lg px-3 h-9 text-[14px] min-w-0 text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                          placeholder="(416) 555-0123"
                        />
                      </div>
                      <div className="min-w-0">
                        <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-lg px-3 h-9 text-[14px] min-w-0 text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                          placeholder="john@acme.com"
                        />
                      </div>
                    </div>

                    {/* Row 3 — Category + Tier */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="min-w-0">
                        <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                          Business category *
                        </label>
                        <select
                          name="category"
                          required
                          defaultValue=""
                          className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-lg px-3 h-9 text-[14px] min-w-0 text-[#2A1F14] focus:border-[#1F4E3D] focus:outline-none transition-colors appearance-none cursor-pointer"
                          style={selectChevron}
                        >
                          <option value="" disabled>
                            {categoryOptions[0]}
                          </option>
                          {categoryOptions.slice(1).map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="min-w-0">
                        <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                          Tier you&apos;re interested in
                        </label>
                        <select
                          name="tier"
                          defaultValue={tierOptions[0]}
                          className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-lg px-3 h-9 text-[14px] min-w-0 text-[#2A1F14] focus:border-[#1F4E3D] focus:outline-none transition-colors appearance-none cursor-pointer"
                          style={selectChevron}
                        >
                          {tierOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4 — Business address */}
                    <div className="min-w-0">
                      <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                        Business address
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-lg px-3 h-9 text-[14px] min-w-0 text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                        placeholder="123 Main St, Markham, ON"
                      />
                    </div>

                    {/* Row 5 — Links */}
                    <div className="min-w-0">
                      <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                        Website, Instagram, or Google Maps link
                      </label>
                      <input
                        type="text"
                        name="links"
                        className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-lg px-3 h-9 text-[14px] min-w-0 text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                        placeholder="acme.com  ·  @acme_shop  ·  g.page/acme"
                      />
                    </div>

                    {/* Row 6 — In-person demo Y/N */}
                    <div className="min-w-0">
                      <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                        Do you want an in-person demo in Markham?
                      </label>
                      <div className="flex gap-2">
                        {["Yes, please", "No, virtual is fine"].map((opt) => (
                          <label
                            key={opt}
                            className="flex-1 flex items-center justify-center gap-2 bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-3 py-2 text-[13px] text-[rgba(42,31,20,0.7)] cursor-pointer hover:border-[#1F4E3D] has-[:checked]:border-[#1F4E3D] has-[:checked]:bg-[rgba(31,78,61,0.06)] has-[:checked]:text-[#2A1F14] transition-colors"
                          >
                            <input
                              type="radio"
                              name="inPersonDemo"
                              value={opt}
                              className="accent-[#1F4E3D]"
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Row 7 — Best time */}
                    <div className="min-w-0">
                      <label className="block text-[9px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1">
                        Best time to meet
                      </label>
                      <select
                        name="bestTime"
                        className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-lg px-3 h-9 text-[14px] min-w-0 text-[#2A1F14] focus:border-[#1F4E3D] focus:outline-none transition-colors appearance-none cursor-pointer"
                        style={selectChevron}
                      >
                        {timeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Submit — separated from fields */}
                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#1F4E3D] text-[#FBF6E9] font-bold py-3 rounded-lg text-[13px] sm:text-[14px] tracking-wide hover:bg-[#2A6651] hover:shadow-[0_12px_32px_rgba(31,78,61,0.25)] transition-all disabled:opacity-50"
                      >
                        {loading ? "Sending..." : "Reserve My Free 2-Month Trial →"}
                      </button>
                    </div>

                    {/* Fine print */}
                    <p className="text-[11px] text-center text-[rgba(42,31,20,0.5)] leading-relaxed">
                      No payment required. We confirm your spot before anything
                      is charged.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
    </Section>
  )
}
