/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "520px",
        "md": "645px",
        "lmd": "750px",
        "xmd": "900px",
        "lg": "1100px",
      }
    },
  },
  plugins: [],
}

