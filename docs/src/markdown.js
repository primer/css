import {Heading, Link} from '@primer/components'
import CodeExample from './CodeExample'
import Outline from './Outline'

export const H1 = props => <Heading fontSize={6} fontWeight="light" {...props} />

export default function getComponents(page = {}) {
  const {outline: getOutline = () => []} = page

  return {
    h1: H1,
    // render links with our component
    a: Link,
    // render the outline for <p> tags with exactly the text "{:toc}"
    p: ({children, ...rest}) => {
      if (children === '{:toc}') {
        return <Outline outline={getOutline()} {...rest} />
      } else {
        return <p {...rest}>{children}</p>
      }
    },
    // render code blocks with our wrapper around mdx-live
    code: CodeExample,
    pre: props => props.children
  }
}
