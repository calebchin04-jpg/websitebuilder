"use client"

import { useState } from "react"
import { FadeIn } from "./fade-in"
import { Section } from "./section"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Is there really no long-term contract?",
    answer:
      "Correct — month-to-month. Cancel any time with no penalty and no questions asked.",
  },
  {
    question: "Do I get exclusivity over my competitors?",
    answer:
      "On the physical flyer: yes — one business per industry category. On the Digital Hub: no exclusivity.",
  },
  {
    question: "How does the NFC card work?",
    answer:
      "After sign-up and the one-time $20 setup fee, we design and install a custom NFC card. Customers tap once — no app required.",
  },
  {
    question: "How does the leaderboard ranking work?",
    answer:
      "Ranks by community votes, resets every night at midnight. No paid ranking — real community support moves the needle.",
  },
  {
    question: "How does the gift card giveaway work?",
    answer:
      "Each month, Crossroads uses 30% of subscription revenue to purchase gift cards directly from partner businesses. Those cards go to voters as monthly prizes. (Total community reinvestment is 40% — gift cards plus youth-entrepreneur grants.)",
  },
  {
    question: "Can I be in both the Digital Hub and the flyer program?",
    answer:
      "Yes — they're separate products. Most businesses start with the Digital Hub ($5–$75/mo) and add the flyer program ($500/mo) later.",
  },
  {
    question: "What happens after my 2-month free trial?",
    answer:
      "Your Founding 30 rate activates automatically — 50% off your tier, locked in for life.",
  },
  {
    question: "How will I know it's actually working?",
    answer:
      "Medium and Large tiers receive a Monthly Impact Report. Crossroads also publishes a monthly public transparency report with all reinvestment totals and receipts.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section bg="#FBF6E9">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-28">
          {/* Left col */}
          <FadeIn>
            <div>
              <div aria-hidden style={{ height: 31 }} />
              <h2
                className="font-bold leading-[1.18] tracking-[-0.025em] mb-6 text-[#2A1F14]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Questions? We&apos;ve heard them all.
              </h2>
              <p className="text-sm text-[rgba(42,31,20,0.62)] leading-relaxed">
                Email us at{" "}
                <a
                  href="mailto:caleb.chin04@gmail.com"
                  className="text-[#1F4E3D] hover:text-[#2A6651] transition-colors underline-offset-2 hover:underline"
                >
                  caleb.chin04@gmail.com
                </a>{" "}
                or message us on{" "}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F4E3D] hover:text-[#2A6651] transition-colors underline-offset-2 hover:underline"
                >
                  Instagram
                </a>
                .
              </p>
            </div>
          </FadeIn>

          {/* Right col - Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <div className="border-b border-[rgba(42,31,20,0.1)]">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-5 lg:py-8 flex items-center justify-between text-left"
                  >
                    <span className="text-base font-semibold text-[#2A1F14] pr-8">
                      {faq.question}
                    </span>
                    <span className="text-[rgba(42,31,20,0.55)] text-2xl flex-shrink-0">
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-[rgba(42,31,20,0.62)] leading-relaxed pb-7">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
    </Section>
  )
}
