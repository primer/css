import React from 'react'
import getConfig from 'next/config'
import TreeModel from 'tree-model'

export const CommonStyles = () => {
  const sheets = [getAssetPath('github/styleguide.css')]
  return sheets.map(href => <link href={href} rel="stylesheet" key={href} />)
}

export const CommonScripts = () => <script src={getAssetPath('github/styleguide.js')} />

const INDEX_PATTERN = /\/index(\.[a-z]+)?$/

export const config = getConfig().publicRuntimeConfig || {}

export const assetPrefix = config.assetPrefix || ''
export const assetPath = `${assetPrefix}/static/`
export const getAssetPath = path => `${assetPath}${path}`

const ext = /\.mdx?$/
export const requirePage = require.context('../pages', true, /\.mdx?$/)
export const pathMap = requirePage.keys().reduce((map, key) => {
  const base = key.replace(ext, '').replace(/\/index$/, '')
  const path = base.substr(1) // strip the leading "."
  map[path] = key
  return map
}, {})

const nested = nest(pathMap)
export const pageTree = new TreeModel()
export const rootPage = pageTree.parse(nested)

rootPage.walk(node => {
  const {model} = node
  Object.assign(node, model)
  if (node.file) {
    const component = requirePage(node.file)
    node.meta = component.frontMatter || {}
    node.outline = component.tableOfContents
  } else {
    // eslint-disable-next-line no-console
    console.warn('no file for page node:', node.path)
  }
})

function nest(map) {
  const nodeMap = {}
  const nodes = Object.keys(map)
    .sort()
    .map(path => {
      const file = map[path]
      const keys = path.substr(1).split('/')
      return (nodeMap[path] = {
        path,
        file,
        isIndex: INDEX_PATTERN.test(file),
        parent: `/${keys.slice(0, keys.length - 1).join('/')}`,
        children: []
      })
    })

  let root = nodeMap['/']
  if (!root) {
    const sorted = nodes.sort((a, b) => a.path.localeCompare(b.path))
    root = sorted[0]
  }

  // remove root from the list of nodes
  nodes.splice(nodes.indexOf(root), 1)

  const rest = []
  for (const node of nodes) {
    const parent = nodeMap[node.parent]
    if (parent) {
      parent.children.push(node)
    } else {
      rest.push(node)
    }
  }

  if (rest.length) {
    // eslint-disable-next-line no-console
    console.warn('unable to nest some pages:', rest)
  }

  return root
}
