import React from 'react'
import {withRouter} from 'next/router'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import NextLink from 'next/link'
import BoxShadow from './BoxShadow'
import {Text, Flex, Link, Sticky, Box} from '@primer/components'

const NavLink = withRouter(({href, router, ...rest}) => (
  <NextLink href={href}>
    <Link color="white" href={href} px={4} fontWeight={router.pathname === href ? 'bold' : null} {...rest} />
  </NextLink>
))

const Header = props => (
  <Sticky zIndex={100}>
    <BoxShadow py={3} bg="gray.9" color="white" {...props}>
      <Flex className="p-responsive" alignItems="center" justifyContent="space-between">
        <NextLink href="/css">
          <Link ml={3} color="white" href="/css">
            <Flex alignItems="center" justifyContent="center">
              <Octicon icon={MarkGithub} size="medium" />
              <Text ml={3}>Primer CSS</Text>
            </Flex>
          </Link>
        </NextLink>
        <Box display={['none', 'none', 'block']}>
          <NavLink href="/css">Docs</NavLink>
          <NavLink href="/getting-started">Getting Started</NavLink>
          <NavLink href="/principles">Principles</NavLink>
          <NavLink href="/tools">Tools</NavLink>
          <NavLink href="/news">What’s New</NavLink>
        </Box>
        <Box display={['block', 'block', 'none']}>
          <Link nounderline href="#sidenav">
            <Box
              border={1}
              py="6px"
              px="12px"
              borderRadius={3}
              color="white"
              borderColor="gray.6"
              display="inline-block"
            >
              <Text fontWeight="bold" fontSize={1}>
                Menu
              </Text>
            </Box>
          </Link>
        </Box>
      </Flex>
    </BoxShadow>
  </Sticky>
)

export default Header
