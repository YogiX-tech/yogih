/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      screen:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

