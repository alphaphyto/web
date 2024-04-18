/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      centre: true,
      padding: '2rem',
      maxWidth: {
        default: '800px'
      }
    },
  },
  plugins: [],
}

