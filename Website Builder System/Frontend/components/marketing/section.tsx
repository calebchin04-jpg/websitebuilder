import type { CSSProperties, ReactNode } from "react"

type SectionProps = {
  children: ReactNode
  id?: string
  /** Background color — defaults to the cream palette */
  bg?: string
  /** Tone variants: "default" (full rhythm) | "compact" (smaller padding for short content) */
  tone?: "default" | "compact"
  /** Extra className appended to the <section> wrapper */
  className?: string
  /** Override max-width on the inner container. Defaults to max-w-7xl. */
  innerClassName?: string
  /** Show a top border divider. Defaults to true. */
  divider?: boolean
  /** Inline style on the section wrapper */
  style?: CSSProperties
}

/**
 * Standard page section wrapper. Every major marketing section uses this so the
 * page has a single source of truth for vertical rhythm, max-width, and
 * isolation rules.
 *
 * Rules enforced:
 * - relative + isolate → siblings can't bleed into this section via z-index
 * - generous vertical padding (≥80px mobile, ≥96px desktop) per the spec
 * - flat 75px horizontal gutters, full-width inner container
 */
export function Section({
  children,
  id,
  bg = "#FBF6E9",
  tone = "default",
  className = "",
  innerClassName = "",
  divider = false,
  style,
}: SectionProps) {
  const paddingY =
    tone === "compact"
      ? "py-[4px]"
      : "py-[4px]"

  const borderClass = divider
    ? "border-t border-[rgba(42,31,20,0.1)]"
    : ""

  // Match the page-wide convention used by Hero, Nav, Footer, MarkhamLoop,
  // Problems, and Proof: flat 75px horizontal gutters, no max-width cap.
  // Keeps every section visually aligned at the same x-positions.
  return (
    <section
      id={id}
      className={`relative isolate px-5 lg:px-[75px] ${paddingY} ${borderClass} ${className}`}
      style={{ backgroundColor: bg, ...style }}
    >
      <div className={`w-full ${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}
