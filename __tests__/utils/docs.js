const fs = require('fs')
const frontMatter = require('front-matter')
const yaml = require('js-yaml')
const globby = require('globby')
const {join} = require('path')

const docsPath = join(__dirname, '../../docs')

function collectNavLinks(links) {
  let foundLinks = []
  for (const link of links) {
    foundLinks.push({
      title: link['title'],
      url: link['url']
    })
    if (link['children']) {
      foundLinks = foundLinks.concat(collectNavLinks(link['children']))
    }
  }
  return foundLinks
}

function getNavigationLinks() {
  const nav = yaml.load(fs.readFileSync(join(docsPath, './src/@primer/gatsby-theme-doctocat/nav.yml'), 'utf8'))
  return collectNavLinks(nav)
}

async function getContentFrontmatter() {
  const fm = {}

  const paths = await globby(join(docsPath, './content/**/*.md*'))
  for (const path of paths) {
    const contents = fs.readFileSync(path, 'utf8')
    const fmContents = frontMatter(contents)
    fm[path.replace(join(docsPath, './content'), '').replace(/(\/index)?\.mdx?/, '')] = fmContents['attributes']
  }
  return fm
}

module.exports = {
  getContentFrontmatter,
  getNavigationLinks
}
