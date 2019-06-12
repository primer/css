import React from 'react'
import Link from './Link'
import Pages from '@primer/next-pages'

const {pageMap = new Map()} = Pages

export default function PageLink(props) {
  const {href, children: content} = props
  // if there is already content return a regular gatsby link
  if (content) {
    return <Link {...props} />
  }

  // find the current page's front matter via graphql
  const page = pageMap.get(href)
  if (!page) {
    // eslint-disable-next-line no-console
    console.warn(`no page for "${href}"`, pageMap.keys())
  }

  // otherwise pull the title from the meta to set as the child
  const children = (page ? page.meta.title : null) || href
  return <Link {...props}>{children}</Link>
}
