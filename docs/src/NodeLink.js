import React from 'react'
import Link from './Link'
import {rootPage} from './utils'

/**
 * The NodeLink component takes an `href` and optional `children`.
 * If no `children` are provided, we look up the "node" of the corresponding
 * page in the tree (the one whose `path` matches the given `href`) and use
 * that node's `meta.title` if it's set. In other words, given the following
 * pages/foo/bar.md:
 *
 * ```md
 * ---
 * title: Foo Bar
 * ---
 * ```
 *
 * The following instance of NodeLink should render a link to "/foo/bar" with
 * "Foo Bar" as its text:
 *
 * ```jsx
 * <NodeLink href="/foo/bar" />
 * ```
 */
export default function NodeLink(props) {
  const {href, children: content} = props
  if (content) {
    return <Link {...props} />
  }
  const node = rootPage.first(node => node.path === href)
  const children = (node ? node.meta.title : null) || href
  return <Link {...props}>{children}</Link>
}
