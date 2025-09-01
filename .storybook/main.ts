import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.@(mdx|stories.@(ts|tsx|js|jsx))'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite' // 👈 The builder enabled here.
  },
  staticDirs: ['../static', { from: '../assets', to: '/' }],
  docs: {
    defaultName: 'Documentazione',
    docsMode: false
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      build: {
        chunkSizeWarningLimit: 1000,
        minify: false
      }
    });
  }
};
export default config;
