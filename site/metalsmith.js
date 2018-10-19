const Metalsmith = require('metalsmith')
const filter = require('metalsmith-filter')
const frontmatter = require('metalsmith-matters')
const titleCase = require('title-case')
const {basename, join, resolve} = require('path')

const each = require('./lib/each')
const parseDocComments = require('./lib/parse-doc-comments')
const rename = require('./lib/rename')
const addPackageMeta = require('./lib/add-package-meta')
const fileMap = require('./map')

const args = process.argv.slice(2)
const has = opt => args.indexOf(opt) > -1

Metalsmith(__dirname)
  .source('../modules')
  .destination('pages')
  // disable Metalsmith's built-in frontmatter parser
  .frontmatter(false)
  .clean(has('clean'))
  // only match these patterns
  .use(filter([
    '*/README.md',
    '*/docs/*.md'
  ]))
  // strip content before <!-- %docs {meta} --> and after <!-- %enddocs -->,
  // then rewrite the file contents with the {meta} bit as YAML frontmatter
  .use(parseDocComments())
  // then parse frontmatter into each file's .page
  .use(frontmatter({
    namespace: 'page'
  }))
  // find the closest package.json and set its contents as the 'package'
  // key on each file
  .use(addPackageMeta())
  .use(each((path, file) => {
    const pkg = file.package
    const module = pkg.name
    const shortName = module.replace(/^primer-/, '')
    file.page = Object.assign({
      title: titleCase(shortName),
      name: shortName,
      description: pkg.description,
      source: `https://github.com/primer/primer/tree/master/${path}`
    }, file.page)
  }))
  .use(rename(fileMap))
  .build(error => {
    if (error) {
      throw error
    }
  })
