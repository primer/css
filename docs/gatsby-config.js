const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Primer CSS',
    shortName: 'CSS',
    description: "CSS for GitHub's Primer design system",
    imageUrl: 'https://user-images.githubusercontent.com/586552/47590375-121cad80-d93a-11e8-89f2-a1cf108e0548.png'
  },
  pathPrefix: '/css',
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        defaultBranch: 'main',
        repoRootPath: '..'
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
          react: path.resolve(__dirname, 'node_modules', 'react')
        }
      }
    }
  ]
}
