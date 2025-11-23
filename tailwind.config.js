/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        navy: { 900: '#0F172A', 800: '#1E293B', 700: '#334155' },
        action: { 500: '#16A34A', 600: '#15803D', 100: '#DCFCE7' },
        alert: { 500: '#F97316' }
      }
    },
  },
  plugins: [],
}