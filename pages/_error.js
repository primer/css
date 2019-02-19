import React from 'react'
import {Heading} from '@primer/components'
import {redirectTrailingSlash} from '../docs/redirect'

export default class extends React.Component {
  static getInitialProps = redirectTrailingSlash

  render() {
    const {url, statusCode} = this.props
    return <>
      <Heading>Whoops! That’s a {statusCode}.</Heading>
      <p>
        We couldn’t find anything at <code>{url}</code>.
        Have you tried <a href={`/css/search?q=${encodeURIComponent(url)}`}>searching</a>?
      </p>
    </>
  }
}
