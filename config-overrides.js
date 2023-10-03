const {
  override,
  addWebpackAlias,
  addPostcssPlugins,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@Components']: path.resolve(__dirname, './src/components'),
    ['@Constants']: path.resolve(__dirname, './src/constants'),
    ['@Helpers']: path.resolve(__dirname, './src/helpers'),
    ['@Images']: path.resolve(__dirname, './src/assets/images'),
    ['@Pages']: path.resolve(__dirname, './src/pages'),
    ['@Styles']: path.resolve(__dirname, './src/assets/styles'),
  }),
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')])
);
