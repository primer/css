import React from 'react'
import NextLink from 'next/link'
import {Link as PrimerLink} from '@primer/components'

export default function Link({href, ...rest}) {
  return (
    <NextLink href={href}>
      <PrimerLink href={href} {...rest} />
    </NextLink>
  )
}
