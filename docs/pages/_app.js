import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import Head from 'next/head'
import {withMDXLive} from 'mdx-live'
import getConfig from 'next/config'
import Octicon, {Pencil} from '@githubprimer/octicons-react'
import {basename, join} from 'path'
import * as primerComponents from '@primer/components'
import * as docComponents from '../src/components'

const {BaseStyles, Box, Flex, Link, Text, theme} = primerComponents
const {SideNav, Header, IndexHero} = docComponents

const ext = /\.mdx?$/
const context = require.context('.', true, /\.mdx?$/)
const pathMap = context.keys().reduce((map, key) => {
  const base = key.replace(ext, '').replace(/\/index$/, '')
  const path = base.substr(1) // strip the leading "."
  map[path] = key
  return map
}, {})

const components = {
  ...docComponents,
  ...primerComponents,
  Octicon,
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
    const {pathname} = this.props.router
    const filename = pathMap[pathname]
    const {Component, page} = this.props
    const hasHero = ['/css', '/css/'].includes(pathname)

    const meta = {}
    if (filename) {
      Object.assign(meta, context(filename).meta)
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
              {hasHero && <IndexHero />}
              <Box color="gray.9" maxWidth={1012} width={'100%'} my={6} mx={'auto'} px={6} className="markdown-body">
                {meta.title ? <h1>{meta.title}</h1> : null}
                <MDXProvider components={components}>
                  <Component {...page} />
                  <pre>meta: {JSON.stringify(meta, null, 2)}</pre>
                </MDXProvider>
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
