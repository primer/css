import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import Head from 'next/head'
import {withMDXLive} from 'mdx-live'
import {BaseStyles, Box, Flex, Link, theme} from '@primer/components'
import {Header, PackageHeader, SideNav, IndexHero} from '../src/components'
import {rootPage} from '../src/utils'

import 'primer/index.scss'
import 'prism-github/prism-github.css'

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
      p: ({children, ...rest}) => {
        if (children === '{:toc}') {
          return <TableOfContents outline={getOutline()} {...rest} />
        } else {
          return <p {...rest}>{children}</p>
        }
      },
      code: withMDXLive('pre'),
      pre: props => props.children
    }

    return (
      <BaseStyles style={{fontFamily: theme.fonts.normal}}>
        <Container>
          <Head>
            <title>Primer CSS{meta.title ? ` / ${meta.title}` : null}</title>
          </Head>
          <Header />
          <Flex display={['block', 'block', 'flex', 'flex']} flexDirection="row-reverse">
            <Box width="100%">
              {meta.hero ? <IndexHero /> : null}
              <Box color="gray.9" maxWidth={1012} width="100%" my={6} mx="auto" px={6}>
                <div className="markdown-body">
                  {meta.title ? <h1>{meta.title}</h1> : null}
                  <PackageHeader {...meta} />
                  <MDXProvider components={components}>
                    <Component {...page} />
                  </MDXProvider>
                  <pre>meta: {JSON.stringify(meta, null, 2)}</pre>
                </div>
                {/* TODO: bring back edit link! */}
              </Box>
            </Box>
            <SideNav />
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
