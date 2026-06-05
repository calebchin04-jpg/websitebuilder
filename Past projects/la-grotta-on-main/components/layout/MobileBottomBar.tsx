import { PhoneLink } from '@/components/ui/PhoneLink'

export function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-dark"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <PhoneLink
        location="mobile_bottom_bar"
        className="flex items-center justify-center gap-2 h-14 text-text-inverse font-sans font-semibold text-sm active:text-gold transition-colors duration-150 w-full"
        aria-label="Call us to reserve a table"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.26.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
            fill="currentColor"
          />
        </svg>
        Call to Reserve
      </PhoneLink>
    </div>
  )
}
