/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfaf7',
          100: '#fdf7ed',
          200: '#fcf3e5',
        },
        charcoal: {
          900: '#0f172a',
          700: '#344054',
          500: '#64748b',
        }
      }
    },
  },
  plugins: [],
}
