module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-custom-radio/'
    : '/',
  outputDir: 'docs'
}