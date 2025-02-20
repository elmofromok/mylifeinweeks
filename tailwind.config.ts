import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-bg-base)',
        'bg-past': 'var(--color-bg-past)',
        'bg-future': 'var(--color-bg-future)',
        'bg-year': 'var(--color-bg-year)',
        'event-personal': 'var(--color-event-personal)',
        'event-education': 'var(--color-event-education)',
        'event-career': 'var(--color-event-career)',
        'event-travel': 'var(--color-event-travel)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-light': 'var(--color-text-light)',
        'text-dark': 'var(--color-text-dark)',
      },
    },
  },
  plugins: [],
} satisfies Config;
