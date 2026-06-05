"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useSwitcherStore } from "@/lib/store"
import { audio } from "@/lib/audio"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { openSwitcher, snapToHub } = useSwitcherStore()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = () => {
    audio.playChirp()
    openSwitcher()
    setTimeout(() => snapToHub(), 700)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(244,236,216,0.92)] backdrop-blur-[12px] border-b border-[rgba(42,31,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center px-5 lg:pl-[56px] lg:pr-[75px] py-5 lg:py-7">
        <button onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer select-none group relative">
          {/* Sonar ring — expands outward from the logo on loop */}
          <motion.div
            aria-hidden
            style={{
              position:      'absolute',
              inset:         '-12px -22px',
              borderRadius:  14,
              border:        '1.5px solid #1F4E3D',
              boxShadow:     '0 0 8px 1px rgba(31,78,61,0.45)',
              pointerEvents: 'none',
            }}
            animate={{ scale: [1, 1.9], opacity: [0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', repeatDelay: 2.0 }}
          />

          {/* Pulsing dot */}
          <span className="relative flex h-[7px] w-[7px] shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
              style={{ background: '#1F4E3D' }} />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full"
              style={{ background: '#1F4E3D' }} />
          </span>

          <span className="text-[17px] lg:text-[22px] font-bold text-[#2A1F14] tracking-[0.18em] group-hover:opacity-70 transition-opacity">
            CROSSROADS
          </span>
        </button>
      </div>
    </nav>
  )
}
