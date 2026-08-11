/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#000000',
          panel: '#08080a',
          card: '#0f0f12',
          border: 'rgba(255, 255, 255, 0.1)',
          text: '#f5f5f7',
          muted: '#86868b',
          emerald: '#34c759',
          amber: '#f59e0b',
          gold: '#d4af37'
        },
        light: {
          bg: '#FAF8F5',
          panel: '#F4F0EA',
          card: '#FFFFFF',
          border: '#E6E1D8',
          text: '#1C1B18',
          muted: '#5C5850',
          emerald: '#059669',
          amber: '#d97706',
          gold: '#b45309'
        }
      },
      fontFamily: {
        sans: ['SF Pro Display', 'SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'apple-title': '-0.025em',
        'apple-sub': '-0.015em',
        'apple-body': '-0.01em',
      }
    },
  },
  plugins: [],
}
