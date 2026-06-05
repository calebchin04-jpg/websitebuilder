"use client"

import { FadeIn } from "./fade-in"
import { Section } from "./section"

export function FinalCTA() {
  return (
    <Section bg="#F4ECD8" tone="compact">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            {/* Left */}
            <div>
              <h2
                className="font-bold leading-[1.18] tracking-[-0.025em] mb-4 text-[#2A1F14]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                Your competitors are already looking at this.
              </h2>
              <p className="text-sm text-[rgba(42,31,20,0.62)]">
                Don&apos;t let someone else claim your industry spot. The first 15 are
                first-come-first-served.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start lg:items-end gap-3">
              <a
                href="#contact"
                className="bg-[#1F4E3D] text-[#FBF6E9] font-bold px-10 py-5 rounded-md text-[15px] hover:bg-[#2A6651] hover:shadow-[0_12px_32px_rgba(31,78,61,0.25)] transition-all"
              >
                Book a 10-Minute Demo →
              </a>
              <a
                href="#contact"
                className="text-sm text-[rgba(42,31,20,0.6)] hover:text-[#2A1F14] underline-offset-4 hover:underline transition-colors"
              >
                or claim my Markham business listing →
              </a>
              <p className="text-xs text-[rgba(42,31,20,0.4)] mt-1">
                No payment required · No contracts
              </p>
            </div>
          </div>
        </FadeIn>
    </Section>
  )
}
