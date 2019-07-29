const path = require('path')

module.exports = {
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
