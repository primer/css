import parseCodeBlocks from 'code-blocks/lib/fromString'
import htmlToReact from 'html-to-react'

const htmlParser = new htmlToReact.Parser()

const blockToStory = block => {
  return {
    title: block.title,
    story: () => htmlParser.parse(block.value),
    block,
  }
}

export default function storiesFromMarkdown(req) {
  return req.keys().reduce((stories, file) => {
    const markdown = req(file)
    const path = file.replace(/^\.\//, '')
    const blocks = parseCodeBlocks(markdown, path)
      .filter(block => {
        // read: ```html *
        // skip: ```html * story="false"
        return block.lang === 'html' && block.info.story !== 'false'
      })
      .map(blockToStory)
    return stories.concat(blocks)
  }, [])
}
