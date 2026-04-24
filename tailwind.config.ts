import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f9f9f9',
        surface: '#f9f9f9',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f3f3',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        'surface-dim': '#dadada',
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#4c4546',
        outline: '#7e7576',
        'outline-variant': '#cfc4c5',
        primary: '#000000',
        'on-primary': '#ffffff',
        'primary-container': '#1b1b1b',
        secondary: '#536253',
        'secondary-container': '#d3e4d1',
        'on-secondary-container': '#576757',
        'inverse-surface': '#2f3131',
        'inverse-on-surface': '#f1f1f1',
        'inverse-primary': '#c6c6c6',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config
