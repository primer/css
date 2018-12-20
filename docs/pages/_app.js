import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import Head from 'next/head'
import {BaseStyles, BorderBox, Box, Flex, theme} from '@primer/components'
import {injectGlobal} from 'emotion'
import {Header, PackageHeader, SideNav, IndexHero} from '../src/components'
import getComponents from '../src/markdown'
import {rootPage} from '../src/utils'
import {CONTENT_MAX_WIDTH} from '../src/constants'

import 'primer/index.scss'
import 'prism-github'

// XXX undo .markdown-body .rule (:facepalm:)
injectGlobal`
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

  .language-html .token {
    color: ${theme.colors.gray[8]} !important;
  }
}
`

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
    const {meta = {}} = node || {}
    const components = getComponents(node)

    return (
      <BaseStyles style={{fontFamily: theme.fonts.normal}}>
        <Container>
          <Head>
            <title>Primer CSS{meta.title ? ` / ${meta.title}` : null}</title>
          </Head>
          <Header />
          <Flex
            flexDirection={['column', 'column', 'column', 'row-reverse']}
            alignContent="stretch"
            justifyContent="space-between"
          >
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
            <BorderBox
              width="20%"
              minWidth={240}
              bg="gray.0"
              borderColor="gray.2"
              borderRadius={0}
              border={0}
              borderRight={1}
              borderTop={[1, 1, 0, 0]}
            >
              <SideNav />
            </BorderBox>
          </Flex>
        </Container>
      </BaseStyles>
    )
  }
}
