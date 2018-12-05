import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import Head from 'next/head'
import {withMDXLive} from 'mdx-live'
import getConfig from 'next/config'
import Octicon, {Pencil} from '@githubprimer/octicons-react'
import {basename, join} from 'path'
import {BaseStyles, Box, Flex, Link, Text, theme} from '@primer/components'
import {SideNav, Header, IndexHero} from '../src/components'
import {rootPage} from '../src/utils'

import 'primer/index.scss'

const components = {
  // render links with our component
  a: Link,
  code: withMDXLive('pre'),
  pre: props => props.children
}

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
    const meta = node ? node.meta : {}

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
