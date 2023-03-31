/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#f6f8fa',
        secondary: '#1a2647',
        secondary1: '#2a3343',
        hover: '#ff7a00',
        stats: '#6f4e7c',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        shapes: "url('/bg.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
