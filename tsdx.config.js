const path = require('path');
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup').default;
module.exports = {
  rollup(config, options) {
    const { output, plugins, ...restConfig } = config;
    const { file, ...restOutput } = output;
    if (output.format === 'umd') {
      // maybe push popper in globals?
    }
    const isDev = /development/.test(file);
    // Remove file ref and insert dir to support code splitting
    return {
      ...restConfig,
      plugins: [
        url(),
        svgr({
          // configure however you like, this is just an example
          ref: true,
          memo: true,
          svgoConfig: {
            plugins: [
              { removeViewBox: false },
              { removeAttrs: { attrs: 'g:(stroke|fill):((?!^none$).)*' } }
            ]
          }
        }),
        ...plugins
      ],
      output: {
        ...restOutput,
        dir: path.join(
          __dirname,
          'dist',
          `${restOutput.format}${isDev ? '-dev' : ''}`
        )
      }
    };
  }
};
