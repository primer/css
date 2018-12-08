import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import Head from 'next/head'
import {BaseStyles, Box, Flex, Link, theme} from '@primer/components'
import {Header, CodeExample, PackageHeader, SideNav, IndexHero} from '../src/components'
import {rootPage} from '../src/utils'
import {CONTENT_MAX_WIDTH} from '../src/constants'

import 'primer/index.scss'

export default class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let page = {}

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx)
    }

    return {page}
  }

  render() {
    // strip the trailing slash
    const pathname = this.props.router.pathname.replace(/\/$/, '')
    const {Component, page} = this.props

    const node = rootPage.first(node => node.path === pathname)
    const {meta = {}, outline: getOutline = () => []} = node || {}

    const components = {
      // render links with our component
      a: Link,
      // render the outline for <p> tags with exactly the text "{:toc}"
      p: ({children, ...rest}) => {
        if (children === '{:toc}') {
          return <TableOfContents outline={getOutline()} {...rest} />
        } else {
          return <p {...rest}>{children}</p>
        }
      },
      // render code blocks with our wrapper around mdx-live
      code: CodeExample,
      pre: props => props.children
    }

    return (
      <BaseStyles style={{fontFamily: theme.fonts.normal}}>
        <Container>
          <Head>
            <title>Primer CSS{meta.title ? ` / ${meta.title}` : null}</title>
          </Head>
          <Header />
          <Flex
            flexDirection={['column', 'column', 'column', 'row-reverse']}
            justifyContent="space-between">
            <Box width={['auto', 'auto', 'auto', '80%']}>
              {meta.hero ? <IndexHero /> : null}
              <Box color="gray.9" maxWidth={['auto', 'auto', 'auto', CONTENT_MAX_WIDTH]} px={6} mx="auto" my={6}>
                <div className="markdown-body">
                  {!meta.hero && meta.title ? <h1>{meta.title}</h1> : null}
                  <PackageHeader {...meta} />
                  <MDXProvider components={components}>
                    <Component {...page} />
                  </MDXProvider>
                  <details>
                    <summary>Metadata</summary>
                    <pre>meta: {JSON.stringify(meta, null, 2)}</pre>
                  </details>
                </div>
                {/* TODO: bring back edit link! */}
              </Box>
            </Box>
            <Box width="20%" minWidth={240}>
              <SideNav />
            </Box>
          </Flex>
        </Container>
      </BaseStyles>
    )
  }
}

function TableOfContents({outline, ...rest}) {
  if (outline && outline.length) {
    return (
      <Box is="details" mb={4}>
        <summary>Table of contents</summary>
        <List items={outline} {...rest} />
      </Box>
    )
  }
  return null
}

function List({items, ...rest}) {
  if (items && items.length) {
    return (
      <ul {...rest}>
        {items.map(item => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.title}</a>
            <List items={item.children} />
          </li>
        ))}
      </ul>
    )
  }
  return null
}
