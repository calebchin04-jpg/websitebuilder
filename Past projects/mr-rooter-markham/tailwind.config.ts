import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': 'var(--color-brand-red)',
        'brand-red-hover': 'var(--color-brand-red-hover)',
        'surface-1': 'var(--color-surface-1)',
        'surface-2': 'var(--color-surface-2)',
        'surface-dark': 'var(--color-surface-dark)',
        'surface-dark-alt': 'var(--color-surface-dark-alt)',
        'accent-yellow': 'var(--color-accent-yellow)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-inverse': 'var(--color-text-inverse)',
        'border-default': 'var(--color-border)',
        'color-success': 'var(--color-success)',
        'color-error': 'var(--color-error)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.10)',
        'header-scroll': '0 1px 8px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        btn: '4px',
        card: '8px',
        input: '4px',
      },
    },
  },
  plugins: [],
}

export default config
