module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: {
          bg: '#F2F2F2',
          blur: 'rgba(255, 204, 204, 0.35)',
        },
        green: {
          bg: '#3EFDDB',
          main: '#5EC3B1',
          text: '#609E93',
          hover: '#D6F9F3',
        },
        purple: {
          bg: '#D660FF',
        },
        black: {
          text: '#474747',
        },
        gray: {
          input: '#DDDDDD',
        },
      },
      spacing: {
        180: '45rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
