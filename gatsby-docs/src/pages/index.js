import React from 'react'
import {MDXProvider} from '@mdx-js/tag'
import Octicon, {Pencil} from '@githubprimer/octicons-react'
import {BaseStyles, Text, BorderBox, Box, Flex, theme} from '@primer/components'
import {MarkdownHeading, JumpNav} from '@primer/blueprints'
import {Link} from 'gatsby'
import Header from '../components/header'
import SideNav from '../components/SideNav'
import getComponents from '../../../docs/markdown'
import documents from '../../../searchIndex'
import {CONTENT_MAX_WIDTH} from '../../../docs/constants'
import {repository} from '../../../package.json'
import { graphql } from 'gatsby'

export const query = graphql`
  query {
    allDirectory(filter: {relativeDirectory: {regex: "/(docs)/"}}) {
      edges {
        node {
          name
          children {
            id
            children {
              id
            }
          }
        }
      }
    }
  }
`

const DocLink = props => <Link nounderline {...props} />
const editLinkBase = `${repository}/edit/master/pages`

export default class MyApp extends React.Component {
  render() {
    // strip the trailing slash
    const pathname = this.props.location.pathname
    const isIndex = pathname === '/'
    const components = getComponents()

    return (
      <BaseStyles fontSize={2} style={{fontFamily: theme.fonts.normal}}>
        <Header
          documents={documents}
          root="https://primer.style"
          subfolder="css"
          title="Primer"
          subtitle="CSS"
        >

        </Header>
        <Flex
          flexDirection={['column', 'column', 'column', 'row-reverse']}
          alignContent="stretch"
          justifyContent="space-between"
        >
          <Box width={['auto', 'auto', '100%']}>
            <Box color="gray.9" maxWidth={['auto', 'auto', 'auto', CONTENT_MAX_WIDTH]} px={6} mx="auto" my={6}>
              <div className="markdown-body">
                <MDXProvider components={components}>
                  hi
                </MDXProvider>
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
            <SideNav data={this.props.data}>
              hi
            </SideNav>
          </BorderBox>
        </Flex>
      </BaseStyles>
    )
  }
}
