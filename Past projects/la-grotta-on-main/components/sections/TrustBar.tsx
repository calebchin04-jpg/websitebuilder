import { StarRating } from '@/components/ui/StarRating'
import { siteConfig } from '@/data/site'

export function TrustBar() {
  return (
    <div className="bg-surface-dark text-text-inverse py-5">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Mobile: 2×2 grid. Desktop: single row with dividers */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:items-center gap-6 lg:gap-0">

          {/* Stat 1: Google Rating */}
          <div className="flex flex-col items-center text-center lg:px-10">
            <div className="flex items-center gap-2">
              <StarRating rating={siteConfig.googleRating} size="sm" />
              <span className="font-sans font-semibold text-base text-text-inverse">
                {siteConfig.googleRating}
              </span>
            </div>
            <span className="font-sans text-xs text-text-inverse/60 uppercase tracking-widest mt-1">
              on Google
            </span>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:block w-px h-8 bg-text-inverse/20 flex-shrink-0" />

          {/* Stat 2: Years in Unionville */}
          <div className="flex flex-col items-center text-center lg:px-10">
            <span className="font-sans font-semibold text-base text-gold">
              {siteConfig.yearsInBusiness} Years
            </span>
            <span className="font-sans text-xs text-text-inverse/60 uppercase tracking-widest mt-1">
              In Unionville
            </span>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:block w-px h-8 bg-text-inverse/20 flex-shrink-0" />

          {/* Stat 3: Family Owned */}
          <div className="flex flex-col items-center text-center lg:px-10">
            <span className="font-sans font-semibold text-base text-text-inverse">
              Family Owned
            </span>
            <span className="font-sans text-xs text-text-inverse/60 uppercase tracking-widest mt-1">
              &amp; Operated
            </span>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:block w-px h-8 bg-text-inverse/20 flex-shrink-0" />

          {/* Stat 4: Est. year */}
          <div className="flex flex-col items-center text-center lg:px-10">
            <span className="font-sans font-semibold text-base text-gold">
              Est. {siteConfig.foundedYear}
            </span>
            <span className="font-sans text-xs text-text-inverse/60 uppercase tracking-widest mt-1">
              Unionville, ON
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
