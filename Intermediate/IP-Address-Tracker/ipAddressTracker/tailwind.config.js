/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vdark-gray' : 'hsl(0, 0%, 17%)',
        'dark-gray' : 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        'rubik' : ['Rubik','sans-serif']
      },
      fontSize: {
        'txt-input' : '18px'
      }
    },
  },
  plugins: [],
}

