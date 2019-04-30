import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import Head from 'next/head'
import {BaseStyles, BorderBox, Box, Flex, theme} from '@primer/components'
import {PackageHeader} from '../docs/components'
import {Header, JumpNav, Section, Router, RouteMatch, SectionLink, SideNav} from '@primer/blueprints'
import {NavList} from '@primer/blueprints/next-components'
import getComponents from '../docs/markdown'
import documents from '../searchIndex'
import {config, requirePage, rootPage} from '../docs/utils'
import {CONTENT_MAX_WIDTH} from '../docs/constants'

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
          <Header
            documents={documents}
            root="https://primer.style"
            subfolder="css"
            title="Primer"
            subtitle="CSS"
          >
            <JumpNav />
          </Header>
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
              <SideNav>
                <NavList currentPath={pathname} path="/css/getting-started" />
                <NavList currentPath={pathname} path="/css/tools" />
                <NavList currentPath={pathname} path="/css/principles" />
                <NavList currentPath={pathname} path="/css/support" />
                <NavList currentPath={pathname} path="/css/utilities" />
                <NavList currentPath={pathname} path="/css/objects" />
                <NavList currentPath={pathname} path="/css/components" />
              </SideNav>
            </BorderBox>
          </Flex>
        </Container>
      </BaseStyles>
    )
  }
}
