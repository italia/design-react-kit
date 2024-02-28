import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/react-webpack5',
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  // Optional
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../static', { from: '../assets', to: '/' }],
  logLevel: 'debug'
};

export default config;
