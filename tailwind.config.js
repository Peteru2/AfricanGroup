/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'public':'#2d4000',
      'private':'#8AB863',
      'private2':'rgba(253, 151, 45, .8)',
      'white': '#ffffff',
      'black':'#000000',
      'gray':'#c7c6c1',
      'red':'#FF0000',
      'vintage':'black',    
      'grayLight':'#ececec',
      'transparent':'#00000000',
      'yellow':'#e4ed5c'
    },
    fontFamily:{
      roboto:["Roboto", "sans-serif"],
      lora:["Lora", "serif"],
      playfair:['Playfair Display', 'sans-serif'],
      DMsans:["DM Sans", 'sans-serif']

    },
    extend: {
      
    },
    
  },
  plugins: [],
}

