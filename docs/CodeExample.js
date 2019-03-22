import React from 'react'
import HTMLtoJSX from 'html-2-jsx'
import {Absolute, BorderBox, Box, StyledOcticon as Octicon, Relative, Text} from '@primer/components'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import {getIconByName} from '@githubprimer/octicons-react'
import ClipboardCopy from './ClipboardCopy'
import Frame from './Frame'

import 'prism-github/prism-github.scss'

const LANG_PATTERN = /\blanguage-\.?(jsx|html)\b/

const converter = new HTMLtoJSX({
  indent: '  ',
  createClass: false
})

const defaultTransform = code => `<React.Fragment>${code}</React.Fragment>`

const languageTransforms = {
  html: html => defaultTransform(converter.convert(html)),
  jsx: defaultTransform
}

export default function CodeExample(props) {
  const {children, dangerouslySetInnerHTML, inert, source, ...rest} = props
  const lang = getLanguage(props.className)
  if (lang && !inert) {
    const liveProps = {
      code: source,
      scope: {Octicon, getIconByName},
      transformCode: getTransformForLanguage(lang),
      mountStylesheet: false
    }
    return (
      <LiveProvider {...liveProps}>
        <BorderBox {...rest}>
          <BorderBox bg="white" border={0} borderBottom={1} borderRadius={0}>
            <Frame>
              <LivePreview />
            </Frame>
          </BorderBox>
          <Box is={Relative} bg="gray.1" p={3}>
            <LiveEditor style={{margin: 0, padding: 0}} />
            <Absolute right={0} top={0} m={3}>
              <ClipboardCopy value={source} />
            </Absolute>
            <Text
              is={LiveError}
              fontFamily="mono"
              style={{
                overflow: 'auto',
                whiteSpace: 'pre'
              }}
            />
          </Box>
        </BorderBox>
      </LiveProvider>
    )
  } else {
    const rest = {
      children,
      dangerouslySetInnerHTML
    }
    // eslint-disable-next-line react/no-danger-with-children
    return <BorderBox data-source={source} is="pre" {...rest} />
  }
}

CodeExample.defaultProps = {
  my: 4
}

function getLanguage(className) {
  const match = className && className.match(LANG_PATTERN)
  return match ? match[1] : undefined
}

function getTransformForLanguage(lang) {
  return lang in languageTransforms ? languageTransforms[lang] : null
}
