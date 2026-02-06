/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ed1f24',
        'primary-dark': '#c11b27',
        secondary: '#2c5282',
      },
    },
  },
  plugins: [],
}
