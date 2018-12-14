const {getOptions} = require('loader-utils')
const mdx = require('@mdx-js/mdx')

const emoji = require('remark-emoji')
const images = require('remark-images')
const textr = require('remark-textr')
const toc = require('remark-toc')

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
        // remark-toc uses remark-slug, so we don't need it
        [toc, {heading: '(table of|section)? contents'}],
        images,
        emoji,
        [textr, {plugins: [typographicBase]}]
      ],
      hastPlugins: [],
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

  let code = `
import React from 'react'
import {MDXTag} from '@mdx-js/tag'
${result}
`

  return callback(null, code)
}
