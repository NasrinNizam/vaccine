/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat: ["Montserrat", 'sans-serif']
      },
      colors:{
        'BrandColor' : '#17C2EC'
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT: '35px',
      }
    }
  },
  plugins: [],
}