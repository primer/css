/* eslint-disable no-console */
const visit = require('unist-util-visit')
const cache = new Map()
const ERB_BLOCK_PATTERN = /<%=[^%]+%>/g

module.exports = options => {
  const convert = converter(options)
  return tree => {
    visit(tree, 'code', node => {
      const match = node.lang ? node.lang.match(/^[a-z]+/) : null
      const lang = match ? match[0] : null
      if (lang === 'erb' || lang === 'html') {
        const erb = node.value
        const html = convert(erb)
        const remaining = html ? html.match(ERB_BLOCK_PATTERN) : null
        if (html && !remaining) {
          node.value = html
          node.lang = node.lang.replace(/^erb/, 'html')
        } else if (remaining) {
          console.warn(`Unable to convert ${remaining.length} ERB blocks:\n  ${remaining.join('  \n')}`)
        } else {
          // console.warn(`No conversions made in: ${erb}`)
        }
      } else {
        console.warn(`Unknown code block lang: ${node.lang}`)
      }
    })
  }
}

function converter({methods = {}}) {
  return erb => {
    const blocks = erb.match(ERB_BLOCK_PATTERN)
    if (blocks && blocks.length) {
      let html = erb
      console.warn(`Replacing ${blocks.length} ERB block(s)...`)
      for (const block of blocks) {
        const output = convert(block)
        if (output !== block) {
          const count = html.split(block).length - 1
          console.warn(`  found ${count} instances of "${block}"`)
          html = replaceAll(html, block, output)
          console.warn(html)
        }
      }
      return html
    }
  }

  function convert(block) {
    if (cache.has(block)) {
      return cache.get(block)
    }

    // eslint-disable-next-line no-unused-vars
    const [_, method, argString] = block.match(/<%= *(\w+)[ (]([^)]+)\)? *%>/)
    const parts = argString.split(/, */)
    const args = []
    const kwargs = {}
    let match
    for (const part of parts) {
      if ((match = part.match(/^:(.+) => (.+)$/))) {
        kwargs[unquote(match[1])] = unquote(match[2])
      } else if ((match = part.match(/^(.+): (.+)$/))) {
        kwargs[unquote(match[1])] = unquote(match[2])
      } else {
        args.push(unquote(part))
      }
    }

    if (typeof methods[method] === 'function') {
      let output = methods[method](args, kwargs)
      console.warn(`converted: ${block} -> ${output}`)
      const escaped = block.replace('<', '').replace('>', '')
      output = `<!--${escaped}-->\n${output}`
      cache.set(block, output)
      return output
    } else {
      console.warn(`No such ERB method implemented: "${method}"`)
      return block
    }
  }
}

function replaceAll(str, input, output) {
  return str.split(input).join(output)
}

function unquote(str) {
  return str.replace(/^\s*"([^"]+)"\s*$/, (_, value) => value)
}
