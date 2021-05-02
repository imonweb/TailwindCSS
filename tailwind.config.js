module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#EFF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#E88883',
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}