import React from 'react'
import {BorderBox} from '@primer/components'
import NavList from './NavList'
import {addPath} from './utils'

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
const Section = ({path, children}) => {
  return (
    <BorderBox p={5} border={0} borderBottom={1} borderRadius={0} width="100%">
      {children && path ? React.Children.map(children, child => addPath(child, path)) : <NavList path={path} />}
    </BorderBox>
  )
}

export default Section
