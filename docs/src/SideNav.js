import React from 'react'
import NextLink from 'next/link'
import {withRouter} from 'next/router'
import {join} from 'path'
import {Box, BorderBox, Link, Flex, Relative} from '@primer/components'
import {rootPage, requirePage} from './utils'

export default props => (
  <Relative is="nav">
    <BorderBox
      bg="gray.0"
      borderColor="gray.2"
      borderRight={1}
      borderTop={[1, 1, 0, 0]}
      display="inline-block"
      height="100%"
      id="sidenav"
      width={['100%', '100%', 256, 256]}
      {...props}
    >
      <Flex flexDirection="column" alignItems="start">
        <Section path="/css/support" />
        <Section path="/css/utilities" />
        <Section path="/css/objects" />
        <Section path="/css/components" />
      </Flex>
    </BorderBox>
  </Relative>
)

const Section = ({path, children, ...rest}) => (
  <BorderBox p={4} border={0} borderBottom={1} borderRadius={0} width="100%">
    {children ? React.Children.map(children, child => {
      const href = join(path, child.props.href || '')
      return React.cloneElement(child, {href})
    }) : <NavList path={path} />}
  </BorderBox>
)

const NavList = ({path, router}) => (
  <>
    <SectionLink href={path} />
    {rootPage.first(node => node.path === path).children
      .map(child => <NavLink href={child.path} />)}
  </>
)

const SectionLink = withRouter(({href, router, ...rest}) => (
  <Box mb={2}>
    <NextLink href={href}>
      <NodeLink
        href={href}
        color="gray.9"
        fontSize={2}
        fontWeight={router.pathname.startsWith(href) ? 'bold' : null}
        {...rest}
      />
    </NextLink>
  </Box>
))

const NavLink = withRouter(({href, router, ...rest}) => {
  return (
    <Box mb={2}>
      <NextLink href={href}>
        <NodeLink
          href={href}
          color={router.pathname === href ? 'black' : undefined}
          fontSize={1}
          {...rest}
        />
      </NextLink>
    </Box>
  )
})

function NodeLink(props) {
  const {href, children: content} = props
  if (content) {
    return <Link {...props} />
  }
  const node = rootPage.first(node => node.path === href)
  const children = (node ? requirePage(node.file).meta.title : null) || href
  return <Link {...props}>{children}</Link>
}
