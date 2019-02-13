import {rootPage} from '../../docs/utils'

export default class {
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
  const node = rootPage.first(node => node.meta.bundle === bundle)
  return node ? node.path : `/_error`
}
