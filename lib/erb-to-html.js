const visit = require('unist-util-visit')
const cache = new Map()

module.exports = options => {
  const convert = converter(options)
  return tree => {
    visit(tree, 'code', (node, parent, index) => {
      const match = node.lang ? node.lang.match(/^[a-z]+/) : null
      const lang = match ? match[0] : null
      if (lang === 'erb' || lang === 'html') {
        const erb = node.value
        const html = convert(node.value)

        if (html && !html.includes('<%')) {
          node.value = html
          node.lang = node.lang.replace(/^erb/, 'html')
        }
      } else {
        // console.warn(`Unknown code block lang: ${node.lang}`)
      }
    })
  }
}

function converter({converters = {}}) {
  return erb => {
    const blocks = erb.match(/<%=[^%]+%>/g)
    if (blocks && blocks.length) {
      let html = erb
      console.warn(`Replacing ${blocks.length} ERB block(s)...`)
      for (const input of blocks) {
        const output = convert(input)
        if (output !== input) {
          html = replaceAll(html, input, output)
        }
      }
      return html
    }
  }

  function convert(block) {
    if (cache.has(block)) {
      return cache.get(block)
    }

    const [_, method, argString] = block.match(/<%= *(\w+)[ \(]([^\)]+)\)? *%>/)
    const parts = argString.split(/, */)
    const args = []
    const kwargs = {}
    for (const part of parts) {
      let match
      if (match = part.match(/^:(.+) => (.+)$/)) {
        kwargs[unquote(match[1])] = unquote(match[2])
      } else if (match = part.match(/^(.+): (.+)$/)) {
        kwargs[unquote(match[1])] = unquote(match[2])
      } else {
        args.push(unquote(part))
      }
    }

    if (typeof converters[method] === 'function') {
      let output = converters[method](args, kwargs)
      output = `<!-- ${block} -->\n${output}`
      cache.set(block, output)
      return output
    } else {
      console.warn(`Unable to convert: ${block}`)
      return block
    }
  }
}

function replaceAll(str, input, output) {
  let result = str
  while (result.includes(input)) {
    result = result.replace(input, output)
  }
  return result
}


function unquote(str) {
  return str.replace(/^\s*"([^"]+)"\s*$/, (_, value) => value)
}
