module.exports = {
  siteMetadata: {
    title: 'Primer CSS',
    shortName: 'CSS',
    description: "CSS for GitHub's Primer design system"
  },
  pathPrefix: '/css',
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..'
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false
      }
    }
  ]
}
