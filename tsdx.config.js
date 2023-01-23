const path = require('path');
const url = require('@rollup/plugin-url');
import replace from '@rollup/plugin-replace';
const svgr = require('@svgr/rollup');
module.exports = {
  rollup(config, options) {
    const { output, plugins, ...restConfig } = config;
    const { file, ...restOutput } = output;
    if (output.format === 'umd') {
      // maybe push popper in globals?
    }
    const isDev = options.env === 'development';
    // Remove file ref and insert dir to support code splitting
    return {
      ...restConfig,
      plugins: [
        url(),
        svgr({
          ref: true,
          memo: true,
          svgoConfig: {
            plugins: [
              { removeViewBox: false },
              { removeAttrs: { attrs: 'g:(stroke|fill):((?!^none$).)*' } }
            ]
          }
        }),
        replace({
          preventAssignment: true
        }),
        ...plugins
      ],
      output: {
        ...restOutput,
        dir: path.join(
          __dirname,
          'dist',
          `${isDev ? 'types' : restOutput.format}`
        )
      }
    };
  }
};
