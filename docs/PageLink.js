import React from 'react'
import Link from './Link'
import Pages from '@primer/next-pages'

const {pageMap = new Map()} = Pages

/**
 * The PageLink component takes an `href` and optional `children`.
 * If no `children` are provided, we look up the "node" of the corresponding
 * page in the tree (the one whose `path` matches the given `href`) and use
 * that page's `meta.title` if it's set. In other words, given the following
 * pages/foo/bar.md:
 *
 * ```md
 * ---
 * title: Foo Bar
 * ---
 * ```
 *
 * The following instance of PageLink should render a link to "/foo/bar" with
 * "Foo Bar" as its text:
 *
 * ```jsx
 * <PageLink href="/foo/bar" />
 * ```
 */
export default function PageLink(props) {
  const {href, children: content} = props
  if (content) {
    return <Link {...props} />
  }
  const page = pageMap.get(href)
  if (!page) {
    // eslint-disable-next-line no-console
    console.warn(`no page for "${href}"`, pageMap.keys())
  }
  const children = (page ? page.meta.title : null) || href
  return <Link {...props}>{children}</Link>
}
