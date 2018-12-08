import {withMDXLive} from 'mdx-live'
import parseStyle from 'style-parser'

const LiveEditor = withMDXLive('pre')

LiveEditor.defaultProps = {
  // match ```html and ```jsx fenced code blocks
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
  const jsx = htmlToJSX(html)
  return <LiveEditor {...rest}>{jsx}</LiveEditor>
}

/**
 * HACKS AHOY!
 *
 * There are at least a couple of things that we need to do to make our HTML
 * code snippets runnable in the live editor:
 *
 * 1. Comment out ERB.
 * 2. Replace `style` attribute string values with JSX-friendly style object
 *    notation.
 *
 * Time will tell what else we need to do here!
 */
function htmlToJSX(html) {
  return html
    .replace(/<%=([^%]+)%>/g, erb => `{/* ERB: ${erb} */}`)
    .replace(/style="([^"]+)"/g, (_, styleString) => {
      const styles = parseStyle(styleString)
      return `style={${JSON.stringify(styles)}}`
    })
}
