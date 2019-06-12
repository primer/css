import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import {Link as PrimerLink} from '@primer/components'

export default function Link({href, ...rest}) {
  return (
    <GatsbyLink href={href}>
      <PrimerLink href={href} {...rest} />
    </GatsbyLink>
  )
}
