import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import Head from 'next/head'
import {withMDXLive} from 'mdx-live'
import getConfig from 'next/config'
import Octicon, {Pencil} from '@githubprimer/octicons-react'
import * as docComponents from './doc-components'
import * as primerComponents from '@primer/components'
import {repository} from 'primer/package.json'

const {pageMap} = getConfig().publicRuntimeConfig
const {BaseStyles, Box, Flex, Link, Text, theme} = primerComponents
const {SideNav, Header, IndexHero} = docComponents

const DocLink = props => <Link nounderline {...props} />
const editLinkBase = `https://github.com/${repository}/edit/master/pages`

const components = {
  ...docComponents,
  ...primerComponents,
  Octicon,
  // render links with our component
  a: DocLink,
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
    const {pathname} = this.props.router
    const filename = pageMap[pathname]
    if (!filename) {
      // eslint-disable-next-line no-console
      console.warn(`pathname "${pathname}" doesn't exist in pageMap:`, pageMap)
    }
    const {Component, page} = this.props
    const hasHero = ['/css', '/css/'].includes(pathname)

    return (
      <BaseStyles style={{fontFamily: theme.fonts.normal}}>
        <Container>
          <Head>
            <title>Primer CSS</title>
          </Head>
          <Header />
          <Flex display={['block', 'block', 'flex', 'flex']} flexDirection="row-reverse">
            <Box width="100%">
              {hasHero && <IndexHero />}
              <Box color="gray.9" maxWidth={1012} width={'100%'} my={6} mx={'auto'} px={6} className="markdown-body">
                <MDXProvider components={components}>
                  <Component {...page} />
                </MDXProvider>
                {filename && (
                  <Box color="gray.5" borderColor="gray.2" borderTop={1} my={6} pt={2}>
                    <Text mr={2}>
                      <Octicon icon={Pencil} />
                    </Text>
                    <DocLink muted href={`${editLinkBase}${filename}`}>
                      Edit this page
                    </DocLink>{' '}
                    on GitHub
                  </Box>
                )}
              </Box>
            </Box>
            <SideNav />
          </Flex>
        </Container>
      </BaseStyles>
    )
  }
}
