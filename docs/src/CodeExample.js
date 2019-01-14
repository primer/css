import React from 'react'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import {getIconByName} from '@githubprimer/octicons-react'
import {Absolute, BorderBox, Box, StyledOcticon as Octicon, Relative, Text, theme} from '@primer/components'
import ClipboardCopy from './ClipboardCopy'
import HTMLtoJSX from 'html-2-jsx'

const LANG_PATTERN = /\blanguage-\.?(jsx?|html)\b/

const converter = new HTMLtoJSX({
  indent: '  ',
  createClass: false
})

const defaultTransform = code => `<React.Fragment>${code}</React.Fragment>`

const languageTransforms = {
  erb: erb => sanitizeERB(languageTransforms.html(erb)),
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
          <Box bg="white" p={3} className="clearfix">
            <LivePreview />
          </Box>
          <Relative p={3}>
            <Text
              is={LiveEditor}
              fontFamily="mono"
              lineHeight="normal"
              bg="transparent"
              p="0 !important"
              m="0 !important"
            />
            <Absolute right={theme.space[3]} top={theme.space[3]}>
              <ClipboardCopy value={source} />
            </Absolute>
          </Relative>
          <Text
            is={LiveError}
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
