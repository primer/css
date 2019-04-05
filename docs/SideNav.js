import React from 'react'
import {Box, Flex, Relative} from '@primer/components'
import Router from './Router'

function SideNav(props) {
  return (
    <Box height="100vh">
      <Relative as="nav">
        <Box {...props}>
          <Flex flexDirection="column" alignItems="start">
            <Router>{props.children}</Router>
          </Flex>
        </Box>
      </Relative>
    </Box>
  )
}

export default SideNav
