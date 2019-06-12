import React from 'react'
import Link from './Link'

export default function SideNav({data}) {
  return (
    <div>
      {data.allDirectory.edges.map(category => (
        <Link>{category.node.name}</Link>
      ))}
    </div>
  )
}
