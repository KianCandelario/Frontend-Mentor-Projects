/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vdark-desaturated-blue' : 'hsl(238, 29%, 16%)',
        'soft-red' : 'hsl(14, 88%, 65%)',
        'soft-violet-g' : 'hsl(273, 75%, 66%)',
        'soft-blue-g' : 'hsl(240, 73%, 65%)',
        'vdark-grayish-blue' : 'hsl(237, 12%, 33%)',
        'dark-grayish-blue' : 'hsl(240, 6%, 50%)',
        'light-grayish-blue' : 'hsl(240, 5%, 91%)'
      },
      fontFamily: {
        'kumbh-sans' : ['Kumbh Sans', 'sans-serif']
      },
      screens: {
        'xsm': '390px',
        'xlg' : '1095px',
        'axl' : '1170px'
      }
    },
  },
  plugins: [],
}

