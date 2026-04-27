import Link from 'next/link'
import { cn } from '@/lib/utils'
import { mainNav } from '@/data/navigation'

type NavigationProps = {
  currentPath?: string
}

export function Navigation({ currentPath }: NavigationProps) {
  return (
    <nav aria-label="Main navigation">
      <ul className="hidden lg:flex items-center gap-1" role="list">
        {mainNav.map((item) => {
          if (item.isCTA) return null // CTA rendered separately in Header

          const isActive =
            currentPath === item.href ||
            (item.href !== '/' && currentPath?.startsWith(item.href))

          return (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-1 px-3 py-2 rounded',
                  'text-ui text-[0.875rem] font-medium',
                  'transition-colors duration-150',
                  isActive
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {item.children && (
                  <svg
                    className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && (
                <div
                  className={cn(
                    'absolute top-full left-0 mt-1 z-50',
                    'w-56 bg-base rounded-lg border border-border shadow-card-hover',
                    'opacity-0 invisible translate-y-1',
                    'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0',
                    'transition-all duration-200 ease-out'
                  )}
                  role="menu"
                >
                  <ul className="py-1.5" role="list">
                    {item.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          href={child.href}
                          className={cn(
                            'block px-4 py-2.5 text-body text-[0.875rem]',
                            'text-text-secondary hover:text-text-primary hover:bg-surface',
                            'transition-colors duration-150'
                          )}
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
