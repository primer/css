import React from 'react'
import {Heading, Link} from '@primer/components'
import {CodeExample} from '@primer/blueprints'
import Outline from './Outline'

export const H1 = props => <Heading fontSize={6} fontWeight="light" {...props} />


export default function getComponents(page = {}) {
  const {outline: getOutline = () => []} = page

  return {
    h1: H1,
    // render links with our component
    a: Link,
    // render code blocks with our wrapper around react-live
    code: (props) => <CodeExample {...props}/>,
    // render the outline for <p> tags with exactly the text "{:toc}"
    p: ({children, ...rest}) => {
      if (children === '{:toc}') {
        return <Outline outline={getOutline()} {...rest} />
      } else {
        return <p {...rest}>{children}</p>
      }
    },
    // "unwrap" <pre> elements around <code> blocks
    pre: props => props.children
  }
}
