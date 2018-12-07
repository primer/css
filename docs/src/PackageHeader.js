import React from 'react'
import PropTypes from 'prop-types'
import Octicon, {Comment, FileCode, PrimitiveDot} from '@githubprimer/octicons-react'
import {BorderBox, Box, Flex, Link, Text} from '@primer/components'

export default function PackageHeader(props) {
  const {
    'package': pkg,
    source,
    status,
    status_issue: issue,
    ...rest
  } = props

  return (
    <Flex justifyContent="space-between" mb={4} {...rest} >
      <Box>
        {status ? (
          <BorderBox is="a" href="/css/whats-new/status-key" display="inline-block" px={2} py={1} mr={2}>
            <Text color={getStatusColor(status)} mr={2}>
              <Octicon icon={PrimitiveDot} />
            </Text>
            {status}
          </BorderBox>
        ) : null}
        {pkg ? (
          <>
            <Text fontWeight="bold" mr={2}>Package:</Text>
            <Link href={`https://npm.im/${pkg.name}`}>{pkg.name}</Link>
          </>
        ) : (
          <Text fontWeight="bold">
            Not yet part of Primer CSS
          </Text>
        )}
      </Box>
      <Box textAlign="right">
        {issue ? <Link href={issue} ml={2}><Octicon icon={Comment} /></Link> : null}
        {source ? <Link href={source} ml={2}><Octicon icon={FileCode} /></Link> : null}
      </Box>
    </Flex>
  )
}

PackageHeader.propTypes = {
  package: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  source: PropTypes.string.isRequired,
  status: PropTypes.string
}

function getStatusColor(status) {
  return {
    'stable': 'green.6',
    'new release': 'yellow.7',
    'deprecated': 'red.7',
    'experimental': 'orange.5'
  }[status.toLowerCase()] || 'gray.5'
}
