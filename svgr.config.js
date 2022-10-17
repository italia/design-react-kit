module.exports = {
  template: require('./scripts/svgTemplate'),
  indexTemplate: require('./scripts/svgIndexTemplate'),
  outDir: 'src/Icon/assets',
  typescript: true,
  dimensions: false,
  prettier: true,
  ignoreExisting: false,
  titleProp: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeTitle: false,
            removeViewBox: false
          }
        }
      }
    ]
  }
};
