import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ChevronDown} from '@githubprimer/octicons-react'
import {Text, Flex, Relative, StyledOcticon, Absolute, Box} from '@primer/components'
import getDirectionStyles from './getDirectionStyles'
import Details from './Details'

const DropdownMenu = styled.div`
  box-shadow: 0px 4px 12px rgba(27, 31, 35, 0.15);
  border: 1px solid rgba(219, 237, 255, 0.3);
  border-radius: 4px;
  max-width: 215px;
  overflow: hidden;
  ${props => (props.direction ? getDirectionStyles(props.theme, props.direction) : '')};
`
function NavDropdown({children, title, color, direction = 'se', ...rest}) {
  return (
    <Box {...rest}>
      <Details
        overlay
        mx={3}
        render={({toggle}) => (
          <>
            <Text color={color} as="summary" onClick={toggle}>
              {title} <StyledOcticon icon={ChevronDown} />
            </Text>
            <Relative>
              <DropdownMenu as={Absolute} py={2} zIndex={90} bg="black" direction={direction}>
                {children}
              </DropdownMenu>
            </Relative>
          </>
        )}
      />
    </Box>
  )
}

const Responsive = ({children, title, color}) => {
  return (
    <Details
      render={({toggle}) => (
        <>
          <Flex as="summary" alignItems="center" justifyContent="space-between" onClick={toggle}>
            <Text fontWeight="bold" color={color}>
              {title}
            </Text>
            <StyledOcticon icon={ChevronDown} />
          </Flex>

          <Relative>{children}</Relative>
        </>
      )}
    />
  )
}

NavDropdown.Responsive = Responsive

NavDropdown.defaultProps = {
  color: 'blue.2'
}

NavDropdown.propTypes = {
  color: PropTypes.string
}

export default NavDropdown
