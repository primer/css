import React from 'react'
import {withRouter} from 'next/router'
import Octicon, {MarkGithub} from '@githubprimer/octicons-react'
import BoxShadow from './BoxShadow'
import Link from './Link'
import {Text, Flex, Sticky, BorderBox, Box} from '@primer/components'

const NavLink = withRouter(({href, router, ...rest}) => (
  <Link color="white" href={href} px={4} fontWeight={router.pathname === href ? 'bold' : null} {...rest} />
))

const Header = props => (
  <Sticky zIndex={100}>
    <BoxShadow py={3} bg="gray.9" color="white" {...props}>
      <Flex className="p-responsive" alignItems="center" justifyContent="space-between">
        <Link ml={3} color="white" href="/css">
          <Flex alignItems="center" justifyContent="center">
            <Octicon icon={MarkGithub} size="medium" />
            <Text ml={3}>Primer CSS</Text>
          </Flex>
        </Link>
        <Box display={['none', 'none', 'block']}>
          <NavLink href="/css">Docs</NavLink>
          <NavLink href="/css/getting-started">Getting Started</NavLink>
          <NavLink href="/css/principles">Principles</NavLink>
          <NavLink href="/css/tools">Tools</NavLink>
          <NavLink href="/css/whats-new">What’s New</NavLink>
        </Box>
        <Box display={['block', 'block', 'none']}>
          <Link href="#sidenav">
            <BorderBox
              border={1}
              borderColor="gray.6"
              borderRadius={3}
              color="white"
              display="inline-block"
              px="12px"
              py="6px"
            >
              <Text fontWeight="bold" fontSize={1}>
                Menu
              </Text>
            </BorderBox>
          </Link>
        </Box>
      </Flex>
    </BoxShadow>
  </Sticky>
)

export default Header
