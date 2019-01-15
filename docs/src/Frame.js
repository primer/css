import React from 'react'
import ReactDOM from 'react-dom'
import {BorderBox} from '@primer/components'

export default class Frame extends React.Component {
  componentDidMount() {
    this.doc = this.node.contentDocument
    this.forceUpdate()
  }

  render() {
    const {children, head: _head, ...rest} = this.props
    const head = this.doc ? ReactDOM.createPortal(_head, this.doc.head) : null
    const body = this.doc ? ReactDOM.createPortal(children, this.doc.body) : null
    return (
      <BorderBox as="iframe" {...rest} ref={node => (this.node = node)}>
        {head}
        {body}
      </BorderBox>
    )
  }
}

Frame.defaultProps = {
  bg: 'white',
  border: 0,
  p: 3,
  width: '100%'
}
