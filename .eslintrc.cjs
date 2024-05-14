module.exports = {
  extends: ['react-app', 'plugin:storybook/recommended'],
  ignorePatterns: ['stories/**/*.mdx'],
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
        // example of disabling a rule
        'storybook/default-exports': 'off'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
