module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  // publicPath: process.env.NODE_ENV === "production" ? "/free-games/" : "/",
  publicPath: process.env.NODE_ENV === 'production'
  ? '/' + process.env.CI_PROJECT_NAME + '/'
  : '/'
}
