import React from 'react'
import Link from './Link'
import {rootPage} from './utils'

export default function NodeLink(props) {
  const {href, children: content} = props
  if (content) {
    return <Link {...props} />
  }
  const node = rootPage.first(node => node.path === href)
  const children = (node ? node.meta.title : null) || href
  return <Link {...props}>{children}</Link>
}
