/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Apiario-do-Reino-main/**/*.{html,js}"],
  theme: { 
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#FDE010',
        secundary: '#000000'
      },
      backgroundImage: {
        home: "url('/assets/abelha 1.png')",
      },
    },
  },
  variants: {
    extend: {
      
    }
  },
  plugins: [],
};