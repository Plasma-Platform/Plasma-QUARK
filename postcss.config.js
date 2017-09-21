module.exports = () => ({
  plugins: {
    'postcss-svg': {
      dirs: ['static/images'],
    },
    'postcss-import': true,
    'postcss-partial-import': true,
    'postcss-mixins': true,
    'postcss-simple-vars': true,
    'postcss-conditionals': true,
    'postcss-custom-media': true,
    'postcss-media-minmax': true,
    'postcss-color-function': true,
    'postcss-nested': true,
    'postcss-property-lookup': true,
    'postcss-extend': true,
    'postcss-discard-empty': true,
    'postcss-inline-svg': true,
    autoprefixer: true,
  },
});