const colors = require('tailwindcss/colors')

module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ],
};
