module.exports = {
  content: ['./src/**/*.{html,js}', './src/index.html'], // Update paths as necessary
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
