/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#EE6C4D",
       

        secondary:{
          100:"#050505",
          900:"#ffff",
          // 900:"#9B9B9B"
          

        }
      },
      flexBasis:{
        20:"20%",
        80:"80%"
      }
    },
  },
  plugins: [],
}