module.exports = {
  content: ['./src/**/*.{html,js}', './public/index.html'], // Update paths as necessary
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
