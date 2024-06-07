module.exports = {
  content: ['./public/**/*.html', './public/js/**/*.js'], // Include HTML files from public folder and JavaScript files from js folder and its subfolders
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
