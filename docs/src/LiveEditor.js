import {withMDXLive} from 'mdx-live'

const LiveEditor = withMDXLive('pre')

LiveEditor.defaultProps = {
  // match: /\blanguage-(html|\.jsx)\b/
}

export default withMDXLive('pre')

