import React from 'react'
import Link from './Link'
import {Box} from '@primer/components'

export default function SideNav({data}) {
  return (
    <div>
      {data.allDirectory.edges.map(category => (
        <Box><Link>{category.node.name}</Link></Box>
      ))}
    </div>
  )
}
