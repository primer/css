import React from 'react'
import {Heading, Link} from '@primer/components'
import {CodeExample} from '@primer/blueprints'

export const H1 = props => <Heading fontSize={6} fontWeight="light" {...props} />

export default function getComponents() {
  return {
    h1: H1,
    // render links with our component
    a: Link,
    // render code blocks with our wrapper around react-live
    code: CodeExample,
    // "unwrap" <pre> elements around <code> blocks
    pre: props => props.children
  }
}
