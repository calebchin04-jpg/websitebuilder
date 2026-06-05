import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface-dark':      'var(--color-surface-dark)',
        'surface-dark-alt':  'var(--color-surface-dark-alt)',
        'surface-light':     'var(--color-surface-light)',
        'surface-light-alt': 'var(--color-surface-light-alt)',
        'accent':            'var(--color-accent)',
        'accent-hover':      'var(--color-accent-hover)',
        'text-primary':      'var(--color-text-primary)',
        'text-inverse':      'var(--color-text-inverse)',
        'text-secondary':    'var(--color-text-secondary)',
        'border-warm':       'var(--color-border)',
        'success':           'var(--color-success)',
        'error':             'var(--color-error)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)',  'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '6px',
        sm:      '4px',
        lg:      '8px',
        full:    '9999px',
      },
      boxShadow: {
        card:        '0 1px 4px rgba(0,0,0,0.06)',
        'card-hover':'0 4px 16px rgba(0,0,0,0.08)',
        header:      '0 1px 8px rgba(0,0,0,0.08)',
      },
      maxWidth: {
        content: '1280px',
        prose:   '680px',
      },
    },
  },
  plugins: [],
}

export default config
