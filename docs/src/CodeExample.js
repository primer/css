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

// XXX undo .markdown-body .rule (:facepalm:)
const RuleOverrideStyles = createGlobalStyle`
  .markdown-body .rule.token {
    height: auto;
    margin: 0;
    overflow: visible;
    border-bottom: none;
  }

  .markdown-body .rule.token::before,
  .markdown-body .rule.token::after {
    display: none;
  }
}
`

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
    rest.code = source
    rest.scope = {Octicon, getIconByName}
    rest.transformCode = getTransformForLanguage(lang)
    return (
      <LiveProvider mountStylesheet={false} {...rest}>
        <BorderBox bg="gray.1" my={4}>
          <Frame head={<CommonStyles />}>
            <LivePreview />
            <CommonScripts />
          </Frame>
          <Relative p={3}>
            <Text
              as={LiveEditor}
              fontFamily="mono"
              bg="transparent"
              p="0 !important"
              m="0 !important"
            />
            <Absolute right={theme.space[3]} top={theme.space[3]}>
              <ClipboardCopy value={source} />
            </Absolute>
            <RuleOverrideStyles />
          </Relative>
          <Text
            as={LiveError}
            fontFamily="mono"
            css={{
              overflow: 'auto',
              whiteSpace: 'pre'
            }}
          />
        </BorderBox>
      </LiveProvider>
    )
  } else {
    Object.assign(rest, {children, dangerouslySetInnerHTML})
    return <pre data-source={source} {...rest} />
  }
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
