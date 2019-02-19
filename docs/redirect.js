import Router from 'next/router'
import Error from 'next/error'

/**
 * Export this as your default from a page, and it'll redirect both server-
 * and client-side:
 *
 * ```js
 * import {redirect} from '../docs/utils'
 * export default redirect('/some/path')
 * ```
 */
export default function redirect(uri, status = 303) {
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

export function redirectTrailingSlash(context, status = 301) {
  const {req, res, err} = context
  if (req.url.endsWith('/')) {
    const {url} = req
    const withoutSlash = url.substr(0, url.length - 1)
    res.writeHead(301, {Location: withoutSlash})
    res.end()
    return true
  } else {
    return Error.getInitialProps(context)
  }
}
