const visit = require('unist-util-visit')
const nodeToString = require('hast-util-to-string')
const nodeToHTML = require('hast-util-to-html')
const refractor = require('refractor')

const aliases = {
  js: 'jsx',
  html: 'markup'
}

module.exports = options => {
  options = options || {}

  return tree => visit(tree, 'element', visitor)

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return
    }

    const lang = getLanguage(node, options.aliases || aliases)

    if (lang === null) {
      return
    }

    let result = node
    const source = nodeToString(node)
    try {
      parent.properties.className = (parent.properties.className || []).concat('language-' + lang)
      result = refractor.highlight(source, lang)
    } catch (err) {
      if (/Unknown language/.test(err.message)) {
        return
      }
      throw err
    }

    node.children = []
    node.properties.source = source
    node.properties.dangerouslySetInnerHTML = {
      __html: nodeToHTML({
        type: 'root',
        children: result
      })
    }
  }
}

function getLanguage(node, aliases) {
  const className = node.properties.className || []

  for (const classListItem of className) {
    if (classListItem.slice(0, 9) === 'language-') {
      let language = classListItem.slice(9).replace(/{.*/, '')
      let alias = aliases[language]
      return alias || language
    }
  }

  return null
}
