import React from 'react'
import {BorderBox} from '@primer/components'
import {SectionLink, NavLink} from '@primer/blueprints'
import PageLink from './PageLink'

const {pageMap = new Map()} = Pages

export default function NavList({path, currentPath}) {
  // grab the page's node via graphql
  const node = pageMap.get(path)

  // find all child pages of the page?
  const children = node ? node.children.sort(nodeSort) : []
  return (
    <BorderBox p={5} border={0} borderBottom={1} borderRadius={0} width="100%">
      <SectionLink link={PageLink} currentPath={currentPath} color="gray.9" href={path} mb={3} />
      // map through each child node and create a NavLink
      {children.map(child => (
        <NavLink link={PageLink} mt={2} currentPath={currentPath} href={child.path} key={child.path} />
      ))}
    </BorderBox>
  )
}
