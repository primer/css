const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Primer CSS',
    shortName: 'CSS',
    description: "CSS for GitHub's Primer design system"
  },
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: path.resolve(process.cwd(), '..')
      }
    },
    'gatsby-plugin-sass'
  ]
}
