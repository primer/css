import React from 'react'
import Link from './Link'
import {Box} from '@primer/components'
import {groupBy} from 'lodash'
import sentenceCase from 'sentence-case'

export default function SideNav({data}) {
  const tree = groupBy(data.allFile.edges, 'node.relativeDirectory')
  console.log(tree)
  return (
    <div>
        {Object.entries(tree).map(([name, children]) => (
          <>
            <Box><Link href={name}>{name}</Link></Box>
            {children.map(child => (
              <Box><Link href={`${name}/${child.node.name}`} ml={4}>{child.node.name}</Link></Box>
            ))}
          </>
        ))}
    </div>
  )
}
