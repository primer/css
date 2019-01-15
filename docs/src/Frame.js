import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Document, {Head} from 'next/document'
import {BorderBox} from '@primer/components'
import {assetPrefix} from './utils'

export default class Frame extends React.Component {
  static defaultProps = {
    bg: 'white',
    border: 0,
    p: 3,
    width: '100%'
  }

  componentDidMount() {
    this.doc = this.node.contentDocument
    this.forceUpdate()
  }

  getCssLinks() {
    const context = JSON.parse(document.body.dataset.context || '{}')
    const {files = []} = context
    return files.filter(file => file.endsWith('.css'))
      .map(file => <link rel="stylesheet" href={`${assetPrefix}/_next/${file}`} />)
  }

  render() {
    const {children, ...rest} = this.props
    return (
      <BorderBox as="iframe" {...rest} ref={node => (this.node = node)}>
        {this.doc ? [
          ReactDOM.createPortal(this.getCssLinks(), this.doc.head),
          ReactDOM.createPortal(children, this.doc.body)
        ] : null}
      </BorderBox>
    )
  }
}
