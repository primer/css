import NextLink from 'next/link'
import {Link as PrimerLink} from '@primer/components'

export default ({href, ...rest}) => (
  <NextLink href={href}>
    <PrimerLink href={href} {...rest} />
  </NextLink>
)
