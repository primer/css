import Router from 'next/router'
import getConfig from 'next/config'

export const config = getConfig().publicRuntimeConfig || {}

export const assetPrefix = config.assetPrefix || ''
export const assetPath = `${assetPrefix}/static/assets/`
export const getAssetPath = path => `${assetPath}${path}`

/**
 * Export this as your default from a page, and it'll redirect both server-
 * and client-side:
 *
 * ```js
 * import {redirect} from '../src/utils'
 * export default redirect('/some/path')
 * ```
 */
export function redirect(uri, status = 303) {
  // XXX this doesn't need to extend React.Component because
  // it doesn't "do" anything React-y
  return class {
    static getInitialProps({res}) {
      // the "context" object passed to getInitialProps() will
      // have a "res" (response) object if we're server-side
      if (res) {
        res.writeHead(status, {Location: uri})
        res.end()
      }
    }

    render() {
      Router.replace(uri)
      return null
    }
  }
}
