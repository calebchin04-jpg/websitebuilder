"use client"

import { useState } from "react"
import { FadeIn } from "./fade-in"
import { Section } from "./section"
import { AnimatePresence, motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./ui/dialog"

const tiers = [
  {
    name: "Small",
    foundingPrice: "$5",
    regularPrice: "$10",
    description:
      "Perfect for small storefronts and solo businesses looking to establish a digital presence in the Markham ecosystem.",
    features: [
      {
        name: "Digital Hub listing",
        detail:
          "Your business appears in the GTA Hub directory with full search visibility.",
      },
      {
        name: "Name / address / phone / 1 link",
        detail: "Core contact info displayed prominently on your listing.",
      },
      {
        name: "NFC card + QR",
        detail:
          "Physical card designed and installed — customers tap to reach your profile instantly.",
      },
      {
        name: "Unlockable Deal",
        detail:
          "Post an exclusive offer that Hub visitors can unlock, driving real foot traffic.",
      },
      {
        name: "Gift card giveaway",
        detail:
          "Participate in our monthly gift card pool to attract new customers.",
      },
      {
        name: "Free marketing video",
        detail:
          "A professional 30–60 second promo video created for your business.",
      },
    ],
    popular: false,
  },
  {
    name: "Medium",
    foundingPrice: "$25",
    regularPrice: "$50",
    description:
      "Ideal for growing businesses that want featured visibility and a richer profile to stand out.",
    features: [
      {
        name: "Everything in Small",
        detail: "All features from the Small tier included.",
      },
      {
        name: "1 featured photo",
        detail:
          "A hero image on your listing — the first thing visitors see.",
      },
      {
        name: "2 links",
        detail:
          "Link to your website, menu, booking page, or social media.",
      },
      {
        name: "Monthly Impact Report",
        detail:
          "See how many views, taps, and deal unlocks your listing gets each month.",
      },
    ],
    popular: true,
  },
  {
    name: "Large",
    foundingPrice: "$37.50",
    regularPrice: "$75",
    description:
      "For established businesses that want maximum exposure, a premium profile, and priority placement.",
    features: [
      {
        name: "Everything in Medium",
        detail: "All features from the Medium tier included.",
      },
      {
        name: "Full photo gallery",
        detail:
          "Showcase your space, menu, or products with multiple photos.",
      },
      {
        name: "Unlimited links",
        detail:
          "Add as many links as you need — website, socials, ordering, booking, and more.",
      },
      {
        name: "Detailed Impact Report",
        detail:
          "Deep analytics: traffic sources, peak hours, and conversion rates.",
      },
      {
        name: "Priority placement",
        detail:
          "Your listing appears above non-priority businesses in search and browse results.",
      },
    ],
    popular: false,
  },
]

type Tier = (typeof tiers)[0]

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

const selectChevron = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%232A1F14' stroke-opacity='0.55' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 12px center",
}

function PricingModal({
  tier,
  open,
  onClose,
  initialStep = "info",
}: {
  tier: Tier
  open: boolean
  onClose: () => void
  initialStep?: "info" | "form"
}) {
  const [step, setStep] = useState<"info" | "form" | "success">(initialStep)
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
      inPersonDemo: formData.get("inPersonDemo"),
      bestTime: formData.get("bestTime"),
      tier: tier.name,
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) setStep("success")
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }

  const handleOpenChange = (v: boolean) => {
    if (!v) {
      onClose()
      setTimeout(() => setStep(initialStep), 300)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="bg-[#FBF6E9] border-[rgba(42,31,20,0.15)] text-[#2A1F14] max-w-lg p-0 overflow-hidden"
        showCloseButton
      >
        <DialogTitle className="sr-only">{tier.name} Plan Details</DialogTitle>

        <AnimatePresence mode="wait">
          {step === "info" && (
            <motion.div
              key="info"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.18 }}
              className="p-[37px] max-h-[85vh] overflow-y-auto"
            >
              {/* Tier header */}
              <div className="mb-8 text-center">
                {tier.popular && (
                  <p className="text-[9px] tracking-[0.45em] uppercase font-bold text-[#B8782E] mb-3">
                    Most popular
                  </p>
                )}
                <h3 className="text-2xl font-bold text-[#2A1F14] mb-2">
                  {tier.name} Plan
                </h3>
                <p className="text-sm text-[rgba(42,31,20,0.62)] leading-relaxed mb-5">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline justify-center gap-1.5 mb-1">
                  <span className="text-4xl font-bold text-[#1F4E3D]">{tier.foundingPrice}</span>
                  <span className="text-sm text-[rgba(42,31,20,0.5)]">/mo</span>
                  <span className="text-xs line-through text-[rgba(42,31,20,0.4)] ml-2">
                    {tier.regularPrice}
                  </span>
                  <span className="text-xs text-[#B8782E]">Founding 30</span>
                </div>
                <p className="text-xs text-[rgba(42,31,20,0.45)]">
                  First 2 months free · $20 setup fee only if you continue
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((f) => (
                  <div key={f.name} className="flex gap-3">
                    <span className="text-[#1F4E3D] mt-0.5 shrink-0">✓</span>
                    <div>
                      <p className="text-sm font-medium text-[#2A1F14]">{f.name}</p>
                      <p className="text-xs text-[rgba(42,31,20,0.6)] leading-relaxed mt-0.5">
                        {f.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep("form")}
                className="w-full py-4 rounded-md text-[15px] font-bold tracking-wide transition-colors bg-[#1F4E3D] text-[#FBF6E9] hover:bg-[#2A6651]"
              >
                Claim My Markham Business Listing
              </button>
            </motion.div>
          )}

          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.18 }}
              className="p-[37px] max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setStep("info")}
                className="flex items-center gap-1.5 text-sm text-[rgba(42,31,20,0.55)] hover:text-[#2A1F14] mb-5 py-1.5 transition-colors"
              >
                ← Back to {tier.name} plan details
              </button>

              <h3 className="text-xl font-bold text-[#2A1F14] mb-1">
                Claim your spot
              </h3>
              <p className="text-sm text-[rgba(42,31,20,0.62)] mb-6">
                Securing{" "}
                <span className="text-[#B8782E] font-medium">{tier.name}</span>{" "}
                plan · {tier.foundingPrice}/mo founding rate
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1.5">
                      Your name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-4 py-3 text-[15px] text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1.5">
                      Business name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-4 py-3 text-[15px] text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-4 py-3 text-[15px] text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                      placeholder="(416) 555-0123"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-4 py-3 text-[15px] text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                      placeholder="john@acme.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1.5">
                    Business category *
                  </label>
                  <select
                    name="category"
                    required
                    defaultValue=""
                    className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-4 py-3 text-[15px] text-[#2A1F14] focus:border-[#1F4E3D] focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={selectChevron}
                  >
                    <option value="" disabled>
                      {categoryOptions[0]}
                    </option>
                    {categoryOptions.slice(1).map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1.5">
                    Business address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-4 py-3 text-[15px] text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                    placeholder="123 Main St, Markham, ON"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1.5">
                    Website / Instagram / Google Maps link
                  </label>
                  <input
                    type="text"
                    name="links"
                    className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-4 py-3 text-[15px] text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:border-[#1F4E3D] focus:outline-none transition-colors"
                    placeholder="acme.com  ·  @acme_shop  ·  g.page/acme"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-2">
                    Do you want an in-person demo in Markham?
                  </label>
                  <div className="flex gap-3">
                    {["Yes, please", "No, virtual is fine"].map((opt) => (
                      <label
                        key={opt}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-3 py-2.5 text-sm text-[rgba(42,31,20,0.7)] cursor-pointer hover:border-[#1F4E3D] has-[:checked]:border-[#1F4E3D] has-[:checked]:bg-[rgba(31,78,61,0.06)] has-[:checked]:text-[#2A1F14] transition-colors"
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

                <div>
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-[rgba(42,31,20,0.55)] mb-1.5">
                    Best time to meet
                  </label>
                  <select
                    name="bestTime"
                    className="w-full bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-md px-4 py-3 text-[15px] text-[#2A1F14] focus:border-[#1F4E3D] focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={selectChevron}
                  >
                    {timeOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1F4E3D] text-[#FBF6E9] font-bold py-4 rounded-md text-[15px] tracking-wide hover:bg-[#2A6651] hover:shadow-[0_12px_32px_rgba(31,78,61,0.25)] transition-all disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Reserve My Free 2-Month Trial →"}
                </button>

                <p className="text-xs text-center text-[rgba(42,31,20,0.45)]">
                  No payment required. We confirm your spot before anything is
                  charged.
                </p>
              </form>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="p-[37px] text-center py-16"
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
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

export function Pricing() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null)
  const [initialStep, setInitialStep] = useState<"info" | "form">("info")

  return (
    <Section bg="#2A1F14">

      <FadeIn>

        {/* Heading */}
        <div className="max-w-2xl" style={{ marginTop: 8, marginBottom: 11 }}>
          <h2
            className="font-bold leading-[1.15] tracking-[-0.025em] text-[#FBF6E9]"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
          >
            Straightforward pricing. No surprises.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              onClick={() => { setInitialStep("info"); setSelectedTier(tier) }}
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 0 1px rgba(31,78,61,0.28), 0 12px 40px rgba(31,78,61,0.12), 0 24px 60px rgba(31,78,61,0.07)",
              }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group flex flex-col min-w-0 cursor-pointer rounded-2xl overflow-hidden border border-[rgba(42,31,20,0.1)] bg-[#FBF7EE] hover:border-[rgba(31,78,61,0.3)] focus:outline-none"
            >
              <div className="flex flex-col flex-1 pb-8" style={{ paddingTop: 16, paddingLeft: 24, paddingRight: 24 }}>

                {/* Founding 30 badge */}
                <span className="self-start inline-flex items-center gap-1 text-[11px] font-bold text-[#B8782E] bg-[rgba(184,120,46,0.12)] border border-[rgba(184,120,46,0.22)] px-2.5 py-1 rounded-full mb-4 tracking-wider uppercase">
                  ★ Founding 30
                </span>

                {/* Header row: tier info left, button right */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-4xl font-bold text-[#2A1F14] mb-3">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold text-[#2A1F14]">$0</span>
                      <span className="text-base text-[rgba(42,31,20,0.55)] font-medium">for 2 months</span>
                    </div>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-sm text-[rgba(42,31,20,0.45)]">then</span>
                      <span className="text-2xl font-bold text-[#1F4E3D]">{tier.foundingPrice}</span>
                      <span className="text-sm text-[rgba(42,31,20,0.5)]">/mo forever</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm line-through text-[rgba(42,31,20,0.35)]">was {tier.regularPrice}/mo</span>
                      <span className="text-xs font-bold text-[#B8782E] bg-[rgba(184,120,46,0.1)] border border-[rgba(184,120,46,0.18)] px-2 py-0.5 rounded-full">
                        50% off forever
                      </span>
                    </div>
                  </div>

                  {/* Get Started button — top right */}
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setInitialStep("form"); setSelectedTier(tier) }}
                    className="shrink-0 px-5 py-3 rounded-full text-sm font-bold tracking-wide transition-all bg-[#1F4E3D] text-[#FBF6E9] hover:bg-[#2A6651] hover:shadow-[0_6px_20px_rgba(31,78,61,0.25)] active:scale-[0.98]"
                  >
                    Get Started
                  </button>
                </div>

                <hr className="border-[rgba(42,31,20,0.1)] mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-start gap-2 text-base leading-snug text-[rgba(42,31,20,0.72)]"
                    >
                      <span className="shrink-0 mt-0.5 text-[#1F4E3D] font-bold">•</span>
                      {feature.name}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <p className="mt-8 text-center text-xs leading-relaxed text-[rgba(251,246,233,0.45)]">
          $20 setup fee charged only after the 2-month free trial, if you continue &nbsp;·&nbsp;
          NFC card designed and installed &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; Cancel anytime
        </p>

      </FadeIn>

      {selectedTier && (
        <PricingModal
          key={`${selectedTier.name}-${initialStep}`}
          tier={selectedTier}
          open={!!selectedTier}
          initialStep={initialStep}
          onClose={() => setSelectedTier(null)}
        />
      )}
    </Section>
  )
}
