import React from 'react'
import {Box} from '@primer/components'

export default function Outline({outline, ...rest}) {
  if (outline && outline.length) {
    return (
      <Box as="details" mb={4}>
        <summary>Table of contents</summary>
        <OutlineList items={outline} {...rest} />
      </Box>
    )
  }
  return null
}

export function OutlineList({items, ...rest}) {
  if (items && items.length) {
    return (
      <ul {...rest}>
        {items.map(item => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.title}</a>
            <OutlineList items={item.children} />
          </li>
        ))}
      </ul>
    )
  }
  return null
}
