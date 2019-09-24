
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass')
module.exports = withCSS(withSASS({
  exportPathMap: (() => {
    return {
      '/': {
        page: '/',
      },
    };
  }),
  distDir: 'build',
}));