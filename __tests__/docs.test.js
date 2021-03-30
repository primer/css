const fs   = require('fs')
const yaml = require('js-yaml')

let nav

beforeAll(() => {
  nav = yaml.load(fs.readFileSync('./docs/src/@primer/gatsby-theme-doctocat/nav.yml', 'utf8'))
})

describe('frontmatter', () => {

})

describe('navigation', () => {
  it('has a file for each nav item', () => {

  })
})
