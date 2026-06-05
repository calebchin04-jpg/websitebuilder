"use client"

import { useRef, useEffect, useState } from "react"
import type { ReactNode } from "react"

/**
 * Sticky curtain wrapper. Short sections lock at top:0; tall sections lock only
 * after the bottom aligns with the viewport bottom so every pixel is seen first.
 */
export function CurtainSection({
  children,
  zIndex,
  bg = "#FBF6E9",
}: {
  children: ReactNode
  zIndex: number
  bg?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [stickyTop, setStickyTop] = useState(0)

  useEffect(() => {
    function update() {
      if (!ref.current) return
      const h = ref.current.offsetHeight
      const v = window.innerHeight
      setStickyTop(Math.min(0, v - h))
    }

    update()
    const ro = new ResizeObserver(update)
    if (ref.current) ro.observe(ref.current)
    window.addEventListener("resize", update)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top: stickyTop,
        zIndex,
        minHeight: "100vh",
        backgroundColor: bg,
      }}
    >
      {children}
    </div>
  )
}
