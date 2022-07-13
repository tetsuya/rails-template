module.exports = {
  darkMode: 'media',
  content: [
    'app/helpers/**/*.rb',
    'app/views/**/*'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
