module.exports = {
    stories: ['../stories/**/Alert.stories.@(js|mdx)'],
    addons: ['@storybook/addon-essentials',  '@storybook/addon-a11y',{
        name: "@storybook/addon-docs",
        options: {
          configureJSX: true,
        },
      }]
  }
  