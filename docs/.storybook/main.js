/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import sass from 'sass'

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
    'storybook-addon-pseudo-states',
    '@storybook/addon-storysource',
    '@geometricpanda/storybook-addon-badges',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', {loader: 'sass-loader', options: {implementation: sass}}],
          },
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../stories/static'],
}
export default config
