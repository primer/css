import React from 'react'
import {withRouter} from 'next/router'
import {Box} from '@primer/components'
import PageLink from './PageLink'

const SectionLink = withRouter(({href, router, ...rest}) => (
  <Box {...rest}>
    <PageLink href={href} {...rest} fontSize={2} fontWeight={router.pathname.startsWith(href) ? 'bold' : null} />
  </Box>
))

export default SectionLink
