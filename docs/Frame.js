import React from 'react'
import ReactDOM from 'react-dom'
import Measure from 'react-measure'
import {BorderBox} from '@primer/components'
import {assetPrefix} from './utils'

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
    this.doc = this.iframe.contentDocument
    const files = JSON.parse(document.body.dataset.files || '[]')
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({loaded: false, files})
    this.iframe.addEventListener('load', () => {
      this.setState({loaded: true})
    })
  }

  getHead() {
    const {files} = this.state
    return files
      ? files
          .filter(file => file.endsWith('.css'))
          .map(file => <link rel="stylesheet" href={`${assetPrefix}/_next/${file}`} key={file} />)
      : null
  }

  getBody(children) {
    return (
      <Measure bounds onResize={rect => this.setHeight(rect.bounds.height)}>
        {({measureRef}) => (
          <div ref={measureRef} style={{overflow: 'auto'}}>
            {children}
          </div>
        )}
      </Measure>
    )
  }

  setHeight(height) {
    // console.warn('height:', height)
    this.setState({height})
  }

  render() {
    const {children, ...rest} = this.props
    const {height = 'auto'} = this.state
    return (
      <BorderBox as="iframe" style={{height}} {...rest} ref={node => (this.iframe = node)}>
        {this.doc
          ? [
              ReactDOM.createPortal(this.getHead(), this.doc.head),
              ReactDOM.createPortal(this.getBody(children), this.doc.body)
            ]
          : null}
      </BorderBox>
    )
  }
}
