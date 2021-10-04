module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    'storybook-addon-pseudo-states',
    '@storybook/addon-storysource',
    '@whitespace/storybook-addon-html'
  ]
}
