import React from "react"
import PropTypes from "prop-types"
import SideNav from './SideNav'
import Header from './header'
import documents from '../../../searchIndex'
import {MDXProvider} from '@mdx-js/tag'
import Octicon, {Pencil} from '@githubprimer/octicons-react'
import {BaseStyles, Text, BorderBox, Box, Flex, theme} from '@primer/components'
import {MarkdownHeading, JumpNav} from '@primer/blueprints'
import {Link} from 'gatsby'
import getComponents from '../../../docs/markdown'
import {CONTENT_MAX_WIDTH} from '../../../docs/constants'
import {repository} from '../../../package.json'

const DocLink = props => <Link nounderline {...props} />
const editLinkBase = `${repository}/edit/master/pages`

const Layout = ({ children, data, location }) => {
  const pathname = location.pathname
  const isIndex = pathname === '/'
  const components = getComponents()
  return(
    <>
      <Header
        documents={documents}
        root="https://primer.style"
        subfolder="css"
        title="Primer"
        subtitle="CSS"
      />
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
          <SideNav data={data}>hisdfsdf</SideNav>
        </BorderBox>
      </Flex>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
