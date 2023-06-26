/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsextrabold: ['POPPINSEXTRABOLD', 'sans-serif'],
        poppinsbold: ['POPPINSBOLD', 'sans-serif'],
        poppinssemibold: ['POPPINSSEMIBOLD', 'sans-serif'],
        poppinsmedium: ['POPPINSMEDIUM', 'sans-serif'],
        poppinsregular: ['POPPINSREGULAR', 'sans-serif'],
        poppinsthin: ['POPPINSTHIN', 'sans-serif']
      },
    },
  },
  plugins: [],
}