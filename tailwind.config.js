/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#AA27DF",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20PX',
        md: "50px"
      }
    }
  },
  plugins: [],
}

