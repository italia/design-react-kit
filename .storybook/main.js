const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
    // allow react-select types to be imported for docgen
    // allow also explicit types from other modules within the repo
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if(prop.parent){
          return /src/.test(prop.parent.fileName) || (/node_modules/.test(prop.parent.fileName) && /react-select/.test(prop.parent.fileName));
        }
        return true;
      }
    },
    reactDocgen: "react-docgen-typescript",
  },
  webpackFinal: async (config, { configType }) => {
    const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));
    // exclude svg from the default storybook file-loader
    assetRule.exclude = /\.svg$/;

    // add svgr loader to handle svgs
    config.module.rules.push({
      test: /\.svg$/,
      use: ['url-loader'],
    });

    config.plugins.push(new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
    }));

    return config;
  },
};
