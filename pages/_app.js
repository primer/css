import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import Head from 'next/head'
import Octicon, {Pencil} from '@githubprimer/octicons-react'
import {BaseStyles, Link, Text, BorderBox, Box, Flex, theme} from '@primer/components'
import {PackageHeader} from '../docs/components'
import {Header, MarkdownHeading, JumpNav, SideNav} from '@primer/blueprints'
import {NavList} from '@primer/blueprints/next-components'
import components from '../docs/markdown'
import documents from '../searchIndex'
import {config, requirePage, rootPage} from '../docs/utils'
import {CONTENT_MAX_WIDTH} from '../docs/constants'
import {repository} from '../package.json'

import '../src/index.scss'

const DocLink = props => <Link nounderline {...props} />
const editLinkBase = `${repository}/edit/master/pages`

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
    const isIndex = file.includes('index')
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
                  {!meta.hero && meta.title ? <MarkdownHeading>{meta.title}</MarkdownHeading> : null}
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
                  {pathname && (
                    <Box color="gray.5" borderColor="gray.2" borderTop={1} my={6} pt={2}>
                      <Text mr={2}>
                        <Octicon icon={Pencil} />
                      </Text>
                      <DocLink muted href={`${editLinkBase}${pathname}${isIndex ? '/index' : ''}.md`}>
                        Edit this page
                      </DocLink>{' '}
                      on GitHub
                    </Box>
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
                <NavList currentPath={pathname} path="/css/support" />
                <NavList currentPath={pathname} path="/css/utilities" />
                <NavList currentPath={pathname} path="/css/objects" />
                <NavList currentPath={pathname} path="/css/components" />
                <NavList currentPath={pathname} path="/css/tools" />
                <NavList currentPath={pathname} path="/css/principles" />
              </SideNav>
            </BorderBox>
          </Flex>
        </Container>
      </BaseStyles>
    )
  }
}
