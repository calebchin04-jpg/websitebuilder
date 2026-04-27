import { RouteStep } from './types'

const maneuverIcon: Record<string, string> = {
  'turn-left': '↰',
  'turn-right': '↱',
  'turn-sharp-left': '↰',
  'turn-sharp-right': '↱',
  'turn-slight-left': '↖',
  'turn-slight-right': '↗',
  'continue': '↑',
  'roundabout': '↻',
  'merge': '⇢',
  'depart': '▶',
  'arrive': '⚑',
}

interface DirectionStepProps {
  step: RouteStep
  index: number
}

export function DirectionStep({ step, index }: DirectionStepProps) {
  const icon = step.maneuver ? (maneuverIcon[step.maneuver] ?? '•') : (index === 0 ? '▶' : '•')

  return (
    <div className={`flex items-start gap-3 px-4 py-2.5 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
      <span className="text-sm shrink-0 w-5 text-center text-gray-500 mt-0.5">{icon}</span>
      <div className="min-w-0">
        <p className="text-xs text-gray-800 leading-snug" dangerouslySetInnerHTML={{ __html: step.instruction }} />
        {step.distance && (
          <p className="text-[11px] text-gray-400 mt-0.5">{step.distance}</p>
        )}
      </div>
    </div>
  )
}
