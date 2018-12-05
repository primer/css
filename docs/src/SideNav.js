import React from 'react'
import {join} from 'path'
import {withRouter} from 'next/router'
import {Box, BorderBox, Flex, Relative} from '@primer/components'
import NodeLink from './NodeLink'
import {rootPage} from './utils'

export default function SideNav(props) {
  return (
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
          <Router>
            <RouteMatch path="/css/getting-started">
              <Section path="/css/getting-started" />
            </RouteMatch>
            <RouteMatch path="/css/principles">
              <Section path="/css/principles" />
            </RouteMatch>
            <RouteMatch path="/css/tools">
              <Section path="/css/tools" />
            </RouteMatch>
            <RouteMatch path="/css/whats-new">
              <Section path="/css/whats-new" />
            </RouteMatch>
            <RouteMatch path="/css">
              <Section path="/css/support" />
              <Section path="/css/utilities" />
              <Section path="/css/objects" />
              <Section path="/css/components" />
            </RouteMatch>
          </Router>
        </Flex>
      </BorderBox>
    </Relative>
  )
}

const Section = ({path, children}) => (
  <BorderBox p={4} border={0} borderBottom={1} borderRadius={0} width="100%">
    {children ? (
      React.Children.map(children, child => {
        const href = join(path, child.props.href || '')
        return React.cloneElement(child, {href})
      })
    ) : (
      <NavList path={path} />
    )}
  </BorderBox>
)

function NavList({path}) {
  return (
    <>
      <SectionLink href={path} />
      {rootPage
        .first(node => node.path === path)
        .children.map(child => (
          <NavLink href={child.path} key={child.path} />
        ))}
    </>
  )
}

const SectionLink = withRouter(({href, router, ...rest}) => (
  <Box mb={2}>
    <NodeLink
      href={href}
      color="gray.9"
      fontSize={2}
      fontWeight={router.pathname.startsWith(href) ? 'bold' : null}
      {...rest}
    />
  </Box>
))

const NavLink = withRouter(({href, router, ...rest}) => {
  return (
    <Box mb={2}>
      <NodeLink href={href} color={router.pathname === href ? 'black' : undefined} fontSize={1} {...rest} />
    </Box>
  )
})

const Router = withRouter(({router, children}) => {
  let matched = false
  return React.Children.toArray(children).map(child => {
    if (child.props.path) {
      if (!matched && router.pathname.indexOf(child.props.path) === 0) {
        return (matched = child)
      }
    } else {
      return child
    }
  })
})

function RouteMatch({children}) {
  return children
}
