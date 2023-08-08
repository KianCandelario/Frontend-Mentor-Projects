/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-green': 'hsl(150, 100%, 66%)',
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        'manrope' : ['manrope','sans-serif']
      },
      fontSize: {
        'desk-quote' : '28px',
        'mobile-quote' : '23px'
      },
      dropShadow: {
        'green-glow': '0 10px 20px rgba(82, 255, 168, 0.80 )'
      },
      screens: {
        'xmd' : '885px'
      }
    },
  },
  plugins: [],
}

