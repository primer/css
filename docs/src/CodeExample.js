import {withMDXLive} from 'mdx-live'
import HTMLtoJSX from 'html-2-jsx'

const converter = new HTMLtoJSX({
  indent: '  ',
  createClass: false
})

const LiveEditor = withMDXLive('pre')

LiveEditor.defaultProps = {
  // match ```html and ```jsx fenced code blocks, with or without "."
  match: /\blanguage\-\.?(html|jsx)\b/
}

export default function CodeExample(props) {
  // for some reason, some fenced code blocks get unsafeInnerHTML and others
  // get children; we need to handle both and convert them to a single string
  // that we can sanitize
  const {unsafeInnerHTML, children, ...rest} = props
  const html = unsafeInnerHTML
    ? unsafeInnerHTML.__html
    : React.Children.toArray(children).join('\n')
  const jsx = converter.convert(html)
  return <LiveEditor {...rest}>{jsx}</LiveEditor>
}
