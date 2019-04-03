import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {MarkGithub, ChevronRight} from '@githubprimer/octicons-react'
import {Text, Flex, Sticky, BorderBox, Box, StyledOcticon} from '@primer/components'
import Link from './Link'
import Search from './Search'

const BoxShadow = styled(Box)`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`

const HeaderText = props => <Text fontFamily="mono" fontSize={2} color="blue.4" {...props} />

const Header = ({title, subtitle, root, subfolder, documents, children}) => (
  <Sticky zIndex={100}>
    <BoxShadow py={3} bg="black" color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Link href={root} color="white" ml={5}>
            <StyledOcticon color="blue.4" icon={MarkGithub} size="medium" />
          </Link>
          <Box display={['none', 'inline-block', 'inline-block', 'inline-block']}>
            <Link href={root} mr={2} ml={3}>
              <HeaderText>{title}</HeaderText>
            </Link>
            {subfolder && <StyledOcticon icon={ChevronRight} mx={1} color="blue.4" />}
          </Box>
          {subfolder && (
            <Link href={`${root}/${subfolder}`} ml={2} mr={4}>
              <HeaderText>{subtitle}</HeaderText>
            </Link>
          )}
          {subfolder && (
            <Box display={['none', 'none', 'none', 'flex']}>
              <Search documents={documents} subfolder={subfolder} />
            </Box>
          )}
        </Flex>
        <Box display={['none', 'none', 'none', 'flex']}>{children}</Box>
        <Box display={['flex', 'flex', 'flex', 'none']}>
          <Link href="#jumpnav">
            <BorderBox
              border={1}
              borderColor="gray.6"
              borderRadius={3}
              color="white"
              display="inline-block"
              px="12px"
              py="6px"
              mr={3}
            >
              <Text fontWeight="bold" color="blue.2" fontSize={1}>
                Menu
              </Text>
            </BorderBox>
          </Link>
          {subfolder && <Search documents={documents} root={root} />}
        </Box>
      </Flex>
    </BoxShadow>
  </Sticky>
)

Header.propTypes = {
  root: PropTypes.string.isRequired,
  subfolder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Header
