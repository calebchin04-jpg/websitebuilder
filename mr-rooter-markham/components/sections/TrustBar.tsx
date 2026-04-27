import { siteConfig } from '@/data/site'

export function TrustBar() {
  return (
    <div className="bg-surface-dark text-text-inverse">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {siteConfig.trustPoints.map((point) => (
          <div key={point.label} className="flex flex-col items-center text-center gap-0.5">
            <p className="font-bold text-sm lg:text-base">{point.label}</p>
            <p className="text-white/60 text-xs">{point.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
