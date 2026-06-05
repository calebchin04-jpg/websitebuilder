import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#274720',
          dark: '#1B3116',
          light: '#3A6630',
        },
        accent: {
          DEFAULT: '#B45309',
          light: '#FEF3C7',
        },
        base: '#FAFAF8',
        surface: '#F2EDE7',
        border: {
          DEFAULT: '#D6CEC4',
          strong: '#A89F95',
        },
        'text-primary': '#1C1917',
        'text-secondary': '#78716C',
        'text-muted': '#A8A29E',
        'text-inverse': '#FAFAF8',
        success: '#166534',
        error: '#991B1B',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Desktop sizes with tight line-heights for headings
        'display': ['3.25rem', { lineHeight: '1.08', fontWeight: '800', letterSpacing: '-0.02em' }],
        'h1':      ['2.75rem', { lineHeight: '1.12', fontWeight: '700', letterSpacing: '-0.015em' }],
        'h2':      ['2rem',    { lineHeight: '1.2',  fontWeight: '700', letterSpacing: '-0.01em' }],
        'h3':      ['1.375rem',{ lineHeight: '1.35', fontWeight: '600' }],
        'h4':      ['1.125rem',{ lineHeight: '1.4',  fontWeight: '600' }],
        'body-lg': ['1.0625rem',{ lineHeight: '1.65', fontWeight: '400' }],
        'body':    ['1rem',    { lineHeight: '1.65', fontWeight: '400' }],
        'ui':      ['0.875rem',{ lineHeight: '1.5',  fontWeight: '600' }],
        'fine':    ['0.8125rem',{ lineHeight: '1.5', fontWeight: '400' }],
      },
      maxWidth: {
        'container': '80rem',   // 1280px
        'prose':     '44rem',   // 704px — readable body text
        'form':      '36rem',   // 576px — form width
      },
      borderRadius: {
        // Override defaults with consistent system
        'sm':   '0.25rem',  // 4px
        'DEFAULT': '0.375rem', // 6px — buttons, inputs
        'md':   '0.375rem', // 6px
        'lg':   '0.5rem',   // 8px — cards
        'xl':   '0.75rem',  // 12px — larger cards
        '2xl':  '1rem',     // 16px — rarely used
      },
      boxShadow: {
        'card':       '0 1px 2px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
        'nav':        '0 1px 0 rgba(0,0,0,0.07)',
        'button':     '0 1px 2px rgba(0,0,0,0.12)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
