import React from 'react'
import {withRouter} from 'next/router'
import {Box} from '@primer/components'
import PageLink from './PageLink'

const NavLink = withRouter(({href, router, ...rest}) => {
  return (
    <Box {...rest}>
      <PageLink href={href} color={router.pathname === href ? 'black' : undefined} fontSize={1} {...rest} />
    </Box>
  )
})

export default NavLink
