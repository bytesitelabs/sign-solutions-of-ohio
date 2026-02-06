/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ed1f24',
          dark: '#c11b27',
          light: '#ff4a4f',
        },
        secondary: {
          DEFAULT: '#2c5282',
          dark: '#1a365d',
          light: '#4a90c7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: { color: '#111827' },
            h2: { color: '#111827' },
            h3: { color: '#111827' },
            h4: { color: '#111827' },
            a: {
              color: '#ed1f24',
              '&:hover': { color: '#c11b27' },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
