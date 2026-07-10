/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: "#f59e0b",
        accent: "#f59e0b",
        branddark: "#d97706",
        gold: "#fbbf24",
        ink: "#0b1220",
        "ink-light": "#151f33"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
