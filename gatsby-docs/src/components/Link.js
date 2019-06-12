import React from 'react'
import {Link} from 'gatsby'
import {Link as PrimerLink} from '@primer/components'

export default function Link({href, ...rest}) {
  return (
    <Link href={href}>
      <PrimerLink href={href} {...rest} />
    </Link>
  )
}
