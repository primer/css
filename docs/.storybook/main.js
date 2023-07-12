module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        controls: false,
        docs: true,
        viewport: true,
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
