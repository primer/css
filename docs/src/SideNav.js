import React from 'react'
import {join} from 'path'
import {withRouter} from 'next/router'
import {Box, BorderBox, Flex, Relative} from '@primer/components'
import NodeLink from './NodeLink'
import {rootPage} from './utils'

export default function SideNav(props) {
  return (
    <Relative is="nav">
      <Box id="sidenav" {...props}>
        <Flex flexDirection="column" alignItems="start">
          <Router>
            <Section path="/css/getting-started" />
            <Section path="/css/principles" />
            <Section path="/css/tools" />
            <Section path="/css/whats-new" />
            <RouteMatch path="/css">
              <Section path="/css/support" />
              <Section path="/css/utilities" />
              <Section path="/css/objects" />
              <Section path="/css/components" />
            </RouteMatch>
          </Router>
        </Flex>
      </Box>
    </Relative>
  )
}

/**
 * A <Section> gets a `path` and optional children. If it has children it will
 * render those and prepend each child's `href` prop with the provided `path`.
 * This means that you can do:
 *
 * ```jsx
 * <Section path="/section">
 *   <Link href="foo">Links to /section/foo</Link>
 * </Section>
 * ```
 *
 * If no children are provided, it renders a <NavList> with the provided
 * `path`.
 */
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

/**
 * A <NavList> renders a <SectionLink> for the given `path` and looks up the
 * path in the page tree. If a node is found, it renders a <NavLink> for each
 * of the node's children.
 */
function NavList({path}) {
  const node = rootPage.first(node => node.path === path)
  const children = node ? node.children.sort(nodeSort) : []
  return (
    <>
      <SectionLink href={path} />
      {children.map(child => (
        <NavLink href={child.path} key={child.path} />
      ))}
    </>
  )
}

/**
 * A <SectionLink> is really just a <NodeLink> that's bold when its `href`
 * matches the current path, wrapped in a <Box> for whitespace.
 */
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

/**
 * A <NavLink> is a <NodeLink> that turns black when its `href` matches the
 * current path, wrapped in a <Box> for whitespace.
 */
const NavLink = withRouter(({href, router, ...rest}) => {
  return (
    <Box mb={2}>
      <NodeLink href={href} color={router.pathname === href ? 'black' : undefined} fontSize={1} {...rest} />
    </Box>
  )
})

/**
 * This inspired React Router's <Router> component, in that it looks for
 * children with the `path` prop and only renders the _first_ one that matches
 * the beginning of the current path. Children without a `path` prop are always
 * rendered.
 */
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

/**
 * <RouteMatch> is just a way to conditonally render content without a wrapper
 * element when contained directly in a <Router>:
 *
 * ```jsx
 * <Router>
 *   <RouteMatch path="/some/dir">
 *     this will only show up on pages whose path begins with "/some/dir"
 *   </RouteMatch>
 * </Router>
 * ```
 */
function RouteMatch({children}) {
  return children
}

function sortCompare(a, b, get) {
  const aa = get(a)
  const bb = get(b)
  return typeof aa === 'string' && typeof bb === 'string' ? aa.localeCompare(bb) : undefined
}

function nodeSort(a, b) {
  return sortCompare(a, b, node => node.meta.sort_title || node.meta.title)
}
