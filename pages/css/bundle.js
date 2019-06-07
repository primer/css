import React from 'react'
import {pageTree} from '@primer/next-pages'

export default class BundleRedirect extends React.Component {
  static getInitialProps({query: {name}, res}) {
    const url = getBundleURL(name)
    if (url) {
      res.writeHead(303, {Location: url})
    } else {
      res.writeHead(404)
    }
    res.end()
  }
}

function getBundleURL(bundle) {
  const node = pageTree ? pageTree.first(node => node.meta.bundle === bundle) : null
  return node ? node.path : `/_error`
}
