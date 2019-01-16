import React from 'react'
import HTMLtoJSX from 'html-2-jsx'
import {Absolute, BorderBox, Box, StyledOcticon as Octicon, Relative, Text, theme} from '@primer/components'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import {createGlobalStyle} from 'styled-components'
import {getIconByName} from '@githubprimer/octicons-react'
import ClipboardCopy from './ClipboardCopy'
import Frame from './Frame'
import {CommonStyles, CommonScripts} from './utils'

import 'prism-github/prism-github.scss'

const LANG_PATTERN = /\blanguage-\.?(jsx?|html)\b/

const converter = new HTMLtoJSX({
  indent: '  ',
  createClass: false
})

const defaultTransform = code => `<React.Fragment>${code}</React.Fragment>`

const languageTransforms = {
  // erb: erb => sanitizeERB(languageTransforms.html(erb)),
  html: html => defaultTransform(converter.convert(html)),
  jsx: defaultTransform
}

export default function CodeExample(props) {
  const {children, dangerouslySetInnerHTML, dead, source, ...rest} = props
  const lang = getLanguage(props.className)
  if (lang && !dead) {
    const liveProps = {
      code: source,
      scope: {Octicon, getIconByName},
      transformCode: getTransformForLanguage(lang),
      mountStylesheet: false
    }
    return (
      <LiveProvider {...liveProps}>
        <BorderBox {...rest}>
          <BorderBox bg="white" p={3} border={0} borderBottom={1} borderRadius={0}>
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
              as={LiveError}
              fontFamily="mono"
              css={{
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
    return (
      <BorderBox data-source={source} is="pre" {...rest} />
    )
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

function sanitizeERB(html) {
  return html
    .replace(/&lt;%= octicon\("([-\w]+)"([^%]+)\)\s*%&gt;/g, erbOcticon)
    .replace(/&lt;%([^%]+)%gt;/g, '{/* ERB: `$1` */}')
}

const RUBY_ARG_PATTERNS = [/^:(\w+) ?=&gt; ?(.+)$/, /^(\w+): ?(.+)$/]

function erbOcticon(substr, name, argString) {
  let args = ''
  if (argString) {
    args = argString
      .split(/,\s*/)
      .slice(1)
      .map(arg => {
        for (const pattern of RUBY_ARG_PATTERNS) {
          const match = arg.match(pattern)
          if (match) {
            const attr = match[1]
            const value = match[2].charAt(0) === '"' ? match[2] : `{${match[2]}}`
            return `${attr}=${value}`
          }
        }
        return ''
      })
      .join(' ')
  }
  return `<Octicon icon={getIconByName("${name}")} ${args} />`
}
