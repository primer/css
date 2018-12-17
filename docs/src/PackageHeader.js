import React from 'react'
import PropTypes from 'prop-types'
import {Comment, Info, FileCode, Alert, PrimitiveDot} from '@githubprimer/octicons-react'
import {BorderBox, Box, Flex, Link, StyledOcticon as Octicon, Text} from '@primer/components'

export default function PackageHeader(props) {
  const {description, internal = false, package: pkg, source = '', status, status_issue: issue, ...rest} = props

  const isPackage = pkg && source.indexOf('/modules/') > -1
  const isInternal = internal || source.indexOf('https://github.com/github/github') === 0

  let info
  if (isInternal) {
    info = (
      <Text fontWeight="bold" color="red.5">
        <Octicon icon={Alert} mr={1} />
        For GitHub internal use only
      </Text>
    )
  } else if (isPackage) {
    info = (
      <>
        <Text fontWeight="bold" mr={2}>
          Package:
        </Text>
        <Link href={`https://npm.im/${pkg.name}`}>{pkg.name}</Link>
      </>
    )
  } else if (description) {
    info = (
      <Text color="gray.5">
        <Octicon icon={Info} mr={2} />
        {description}
      </Text>
    )
  }

  return (
    <Flex justifyContent="space-between" mb={4} {...rest}>
      <Text is="div" fontSize={1}>
        {status ? (
          <BorderBox is="a" href="/css/whats-new/status-key" display="inline-block" px={2} py={1} mr={2}>
            <Octicon icon={PrimitiveDot} color={getStatusColor(status)} mr={2} />
            {status}
          </BorderBox>
        ) : null}
        {info}
      </Text>
      <Box>
        {issue ? (
          <Link href={issue} ml={2}>
            <Octicon icon={Comment} />
          </Link>
        ) : null}
        {source ? (
          <Link href={source} ml={2}>
            <Octicon icon={FileCode} />
          </Link>
        ) : null}
      </Box>
    </Flex>
  )
}

PackageHeader.propTypes = {
  package: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  source: PropTypes.string,
  status: PropTypes.string
}

function getStatusColor(status) {
  return (
    {
      stable: 'green.6',
      'new release': 'yellow.7',
      deprecated: 'red.7',
      experimental: 'orange.5'
    }[status.toLowerCase()] || 'gray.5'
  )
}
