/* eslint-disable no-console */
const {basename, dirname, join} = require('path')
const parseFromString = require('code-blocks/lib/fromString')

module.exports = function storyLoader(markdown) {
  // resourcePath is the full path ("/Users/probot/primer/css/...") to the file being parsed
  // rootContext is really just dirname(resourcePath)
  const {resourcePath = '', rootContext} = this

  // the sourcePath option provides a way to collapse the
  // navigation hierarchy by trimming even more of the
  // resourcePath's prefix; if it's not provided, use the
  // rootContext
  const {sourcePath = rootContext} = this.query || {}

  // strip the sourcePath from the beginning of the resourcePath
  const file = resourcePath.replace(`${sourcePath}/`, '')
  const path = join(dirname(file), basename(file, '.md'))

  const stories = storiesFromMarkdown(markdown, file)
  if (stories.length) {
    console.warn(`${stories.length} stories found in ${file}!`)
    return `
const {storiesOf} = require('@storybook/react')
const htmlToReact = require('html-to-react')

const chapter = storiesOf(${JSON.stringify(path)}, module)
const stories = ${JSON.stringify(stories)}

const htmlParser = new htmlToReact.Parser()
for (const {title, value} of stories) {
  chapter.add(title, () => htmlParser.parse(value))
}
`
  } else {
    return `module.exports = {markdown: ${JSON.stringify(markdown)}}`
  }
}

function storiesFromMarkdown(markdown, file) {
  const path = file.replace(/^\.\//, '')
  return parseFromString(markdown, path).filter(block => {
    // yes: ```html
    // no:  ```html dead
    // no:  ```html inert
    return block.lang === 'html' && !block.info.dead && !block.info.inert
  })
}
