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
        gold: 'var(--color-gold)',
        'gold-hover': 'var(--color-gold-hover)',
        'surface-1': 'var(--color-surface-1)',
        'surface-2': 'var(--color-surface-2)',
        'surface-dark': 'var(--color-surface-dark)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-inverse': 'var(--color-text-inverse)',
        'border-default': 'var(--color-border)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.10)',
        'header-scroll': '0 1px 8px rgba(0,0,0,0.08)',
        modal: '0 8px 40px rgba(0,0,0,0.20)',
      },
      borderRadius: {
        btn: '5px',
        card: '9px',
        input: '5px',
        pill: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
