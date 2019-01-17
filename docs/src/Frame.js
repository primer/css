import React from 'react'
import ReactDOM from 'react-dom'
import {BorderBox} from '@primer/components'
import {assetPrefix} from './utils'

const DEFAULT_IFRAME_HEIGHT = 150

export default class Frame extends React.Component {
  static defaultProps = {
    border: 0,
    borderRadius: 0,
    minHeight: 0,
    width: '100%'
  }

  constructor(props) {
    super(props)
    this.state = {files: [], height: props.height}
  }

  componentDidMount() {
    this.doc = this.node.contentDocument
    const files = JSON.parse(document.body.dataset.files || '[]')
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({files})
    this.node.addEventListener('load', () => this.setState({loaded: true}))
  }

  getCssLinks() {
    const {files} = this.state
    return files
      ? files
          .filter(file => file.endsWith('.css'))
          .map(file => <link rel="stylesheet" href={`${assetPrefix}/_next/${file}`} key={file} />)
      : null
  }

  getHeight() {
    if (!this.node) return null
    this.node.style.height = 'max-content'
    const {body} = this.node.contentDocument
    return body.offsetHeight > DEFAULT_IFRAME_HEIGHT ? body.offsetHeight : body.scrollHeight
  }

  render() {
    const {children, ...rest} = this.props
    const height = this.getHeight()
    const style = height ? {height} : null
    return (
      <BorderBox as="iframe" style={style} {...rest} ref={node => (this.node = node)}>
        {this.doc
          ? [ReactDOM.createPortal(this.getCssLinks(), this.doc.head), ReactDOM.createPortal(children, this.doc.body)]
          : null}
      </BorderBox>
    )
  }
}
