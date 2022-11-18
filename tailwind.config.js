/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 3px 10px rgb(0 0 0 / 20%);',
      },
      fontFamily: {
        lato: ['lato', 'sans-serif'],
        roboto: ['roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

// 0 3rem 3rem rgba(0, 0, 0, 0.3);



// (0 25px 25px rgb(0 0 0 / 0.15));
