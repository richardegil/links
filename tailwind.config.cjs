/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      copy: ['overpass mono', 'monospace']
    },
  },
  plugins: [],
}
