/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        workday: {
          blue: '#0073e6',
          lightblue: '#e6f3ff',
          gray: '#f5f5f5',
          darkgray: '#333333',
        }
      },
      fontFamily: {
        'workday': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
