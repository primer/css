import sass from 'sass'
import {createRequire} from 'module'
import {fileURLToPath} from 'url'

const require = createRequire(import.meta.url)

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const storybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-docs',
    'storybook-addon-pseudo-states',
    '@geometricpanda/storybook-addon-badges',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../stories/static'],
  async webpackFinal(webpackConfig) {
    // Alias @storybook/blocks to the v10-compatible addon-docs/blocks
    webpackConfig.resolve = webpackConfig.resolve || {}
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      '@storybook/blocks': fileURLToPath(import.meta.resolve('@storybook/addon-docs/blocks')),
    }

    // Add SCSS support using sass-loader
    webpackConfig.module.rules.push({
      test: /\.s[ac]ss$/,
      use: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        {
          loader: require.resolve('sass-loader'),
          options: {
            implementation: sass,
          },
        },
      ],
      sideEffects: true,
    })
    return webpackConfig
  },
}
export default storybookConfig
