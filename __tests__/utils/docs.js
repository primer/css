import fs from 'fs'
import frontMatter from 'front-matter'
import yaml from 'js-yaml'
import {globby} from 'globby'
import { fileURLToPath } from 'url'
import {join, dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

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

export function getNavigationLinks() {
  const nav = yaml.load(fs.readFileSync(join(docsPath, './src/@primer/gatsby-theme-doctocat/nav.yml'), 'utf8'))
  return collectNavLinks(nav)
}

export async function getContentFrontmatter() {
  const fm = {}

  const paths = await globby(join(docsPath, './content/**/*.md*'))
  for (const path of paths) {
    const contents = fs.readFileSync(path, 'utf8')
    const fmContents = frontMatter(contents)
    fm[path.replace(join(docsPath, './content'), '').replace(/(\/index)?\.mdx?/, '')] = fmContents['attributes']
  }
  return fm
}
