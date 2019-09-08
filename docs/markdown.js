import React from 'react'
import {Link} from '@primer/components'
import {MarkdownHeading} from '@primer/blueprints'
import {CodeExample} from '@primer/blueprints/next-components'

export const H1 = props => <MarkdownHeading {...props} />
export const H2 = props => <MarkdownHeading as="h2" {...props} />
export const H3 = props => <MarkdownHeading as="h3" {...props} />
export const H4 = props => <MarkdownHeading as="h4" {...props} />
export const H5 = props => <MarkdownHeading as="h5" {...props} />

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  // render links with our component
  a: Link,
  // render code blocks with our wrapper around react-live
  code: CodeExample,
  // "unwrap" <pre> elements around <code> blocks
  pre: props => props.children
}

export default components
