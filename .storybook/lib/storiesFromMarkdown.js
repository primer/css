import remark from 'remark'
import select from 'unist-util-select'
import htmlToReact from 'html-to-react'

export default req => {
  const parser = new htmlToReact.Parser()
  return req.keys()
    .reduce((stories, file) => {
      const content = req(file)
      const ast = remark.parse(content)
      return stories.concat(
        select(ast, 'code[lang^=html]')
          .map(node => parser.parse(node.value))
      )
    }, [])
}
