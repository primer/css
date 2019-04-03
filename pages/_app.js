import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import Head from 'next/head'
import {BaseStyles, BorderBox, Box, Flex, theme} from '@primer/components'
import {Header, PackageHeader, SideNav, JumpNav} from '@primer/blueprints'
import getComponents from '../docs/markdown'
import {config, requirePage, rootPage} from '../docs/utils'
import {CONTENT_MAX_WIDTH} from '../docs/constants'
import documents from '../searchIndex'

import '../src/index.scss'

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

    const node = rootPage.first(node => node.path === pathname) || {}
    const {file, meta = {}} = node || {}
    const components = getComponents(node)

    const Hero = file ? requirePage(file).Hero : null

    return (
      <BaseStyles fontSize={2} style={{fontFamily: theme.fonts.normal}}>
        <Container>
          <Head>
            <title>Primer CSS{meta.title ? ` / ${meta.title}` : null}</title>
          </Head>
          <SideNav/>
          <Flex
            flexDirection={['column', 'column', 'column', 'row-reverse']}
            alignContent="stretch"
            justifyContent="space-between"
          >
            <Box width={['auto', 'auto', '100%']}>
              {Hero ? <Hero /> : null}
              <Box color="gray.9" maxWidth={['auto', 'auto', 'auto', CONTENT_MAX_WIDTH]} px={6} mx="auto" my={6}>
                <div className="markdown-body">
                  {!meta.hero && meta.title ? <h1>{meta.title}</h1> : null}
                  <PackageHeader {...meta} />
                  <MDXProvider components={components}>
                    <Component {...page} />
                  </MDXProvider>
                  {config.production ? null : (
                    <details>
                      <summary>Metadata</summary>
                      <pre>{JSON.stringify(meta, null, 2)}</pre>
                    </details>
                  )}
                </div>
                {/* TODO: bring back edit link! */}
              </Box>
            </Box>
            <BorderBox
              width={['100%', '100%', 256]}
              minWidth={256}
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
