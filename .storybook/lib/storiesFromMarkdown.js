import remark from 'remark'
import visit from 'unist-util-visit'
import select from 'unist-util-select'
import htmlToReact from 'html-to-react'
import {createParser} from 'parse-pairs'

const htmlParser = new htmlToReact.Parser()

const parsePairs = (parse => {
  return str => {
    try {
      return parse(str)
    } catch (error) {
      return {}
    }
  }
})(createParser())

const nodeToStory = (node, heading, file, index) => {
  const html = node.value
  const pairs = node.lang.replace(/^html\s+/, '')
  const data = pairs ? parsePairs(pairs) : {}
  const title = data.title || heading || `story #${index} (${file})`
  return {
    story: htmlParser.parse(html),
    title,
    html,
    file,
    node,
  }
}

export default req => {
  return req.keys()
    .reduce((stories, file) => {
      const content = req(file)
      const ast = remark.parse(content)
      let heading

      visit(ast, node => {
        switch (node.type) {
          case 'heading':
            heading = node.children
              .map(child => child.value)
              .join('')
            break
          case 'code':
            if (node.lang && node.lang.match(/^html\b/)) {
              stories.push(
                nodeToStory(node, heading, file, stories.length + 1)
              )
              heading = undefined
            }
            break
        }
      })

      return stories
    }, [])
}
