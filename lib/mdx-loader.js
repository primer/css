const {getOptions} = require('loader-utils')
const mdx = require('@mdx-js/mdx')
const octicons = require('@primer/octicons')

const emoji = require('remark-emoji')
const images = require('remark-images')
const rehypePrism = require('./rehype-prism')
const textr = require('remark-textr')
const toc = require('remark-toc')
const erbToHTML = require('./erb-to-html')

const mdxExportJSONByDefault = require('mdx-constant')
const grayMatter = require('gray-matter')
const typographicBase = require('typographic-base')

module.exports = async function(source) {
  let result
  const {data, content: mdxContent} = grayMatter(source)
  const callback = this.async()

  const options = Object.assign(
    {
      mdPlugins: [
        [toc, {heading: '(table of|section)? contents'}],
        images,
        emoji,
        [textr, {plugins: [typographicBase]}],
        [
          erbToHTML,
          {
            converters: {
              /* eslint-disable camelcase, no-unused-vars */
              octicon: ([icon], attrs) => {
                if (octicons[icon]) {
                  return octicons[icon].toSVG(attrs)
                } else {
                  throw new Error(`No such octicon: "${icon}"`)
                }
              },
              avatar_for: ([username, size], kwargs) => {
                const name = username === 'current_user' ? 'github' : username
                const attrs = Object.entries(kwargs)
                  .map(([key, value]) => ` ${key}="${value}"`)
                  .join(' ')
                const s = size * 2
                return `<img src="https://github.com/${name}.png?s=${s}" width="${size}" height="${size}"${attrs}>`
              }
              /* eslint-enable */
            }
          }
        ]
      ],
      hastPlugins: [rehypePrism],
      compilers: [mdxExportJSONByDefault('frontMatter', data)]
    },
    getOptions(this),
    {filepath: this.resourcePath}
  )

  try {
    result = await mdx(mdxContent, options)
  } catch (err) {
    return callback(err)
  }

  const code = `
import React from 'react'
import {MDXTag} from '@mdx-js/tag'
${result}
`

  return callback(null, code)
}
