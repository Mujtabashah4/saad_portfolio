import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        navy: {
          950: '#040d18',
          900: '#071526',
          800: '#0a1d30',
          700: '#0f2640',
          600: '#163350',
          500: '#1e3f63',
        },
        gold: {
          600: '#9a7528',
          500: '#c4973a',
          400: '#ddb862',
          300: '#f0d080',
          200: '#f8eabf',
        },
        cream: '#eee8dc',
        muted: '#7d94ae',
        border: '#1a3050',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
        '108': '1.08',
        '110': '1.10',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'draw-line': 'drawLine 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drawLine: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
