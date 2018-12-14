import React from 'react'
import {BorderBox, theme} from '@primer/components'
import {withMDXLive} from 'mdx-live'
import HTMLtoJSX from 'html-2-jsx'

const LANG_PATTERN = /\blanguage-\.?(erb|jsx|html)\b/

const converter = new HTMLtoJSX({
  indent: '  ',
  createClass: false
})

const defaultTransform = code => `<React.Fragment>${code}</React.Fragment>`

const LiveEditor = withMDXLive('pre')

LiveEditor.defaultProps = {
  // match ```html and ```jsx fenced code blocks, with or without "."
  match: LANG_PATTERN,
  style: {
    padding: 0
  },
  previewStyle: {
    backgroundColor: theme.colors.white,
    padding: theme.space[3]
  },
  editorStyle: {
    fontFamily: theme.fonts.mono,
    fontSize: theme.fontSizes[1],
    padding: theme.space[3]
  }
}

export default function CodeExample(props) {
  const {unsafeInnerHTML, children, ...rest} = props
  const lang = getLanguage(props.className)
  rest.transformCode = getTransformForLanguage(lang)
  const code = unsafeInnerHTML
    ? unsafeInnerHTML.__html
    : React.Children.toArray(children).join('\n')
  rest.children = code
  return (
    <BorderBox bg="gray.1" my={4}>
      <LiveEditor {...rest} />
    </BorderBox>
  )
}

function getLanguage(className) {
  const match = className.match(LANG_PATTERN)
  return match ? match[1] : undefined
}

function getTransformForLanguage(lang) {
  return lang === 'jsx'
    ? defaultTransform
    : html => defaultTransform(converter.convert(html))
}
