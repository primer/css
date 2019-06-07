import React from 'react'
import {Heading} from '@primer/components'
import {redirectTrailingSlash} from '@primer/blueprints/next-components'

export default class ErrorPage extends React.Component {
  static getInitialProps(context) {
    // redirect trailing slash URLs to "clean" ones without
    return redirectTrailingSlash(context) || getErrorProps(context)
  }

  render() {
    const {url, statusCode = 500} = this.props
    return (
      <>
        <Heading>Whoops! That’s a {statusCode}.</Heading>
        <p>
          We couldn’t find anything at <code>{url}</code>.
          {null && (
            <>
              Have you tried <a href={`/css/search?q=${encodeURIComponent(url)}`}>searching</a>?
            </>
          )}
        </p>
      </>
    )
  }
}

function getErrorProps({req, res, err}) {
  const {statusCode} = err || res
  return {statusCode, url: req.url}
}
