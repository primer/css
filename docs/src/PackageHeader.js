import React from 'react'
import PropTypes from 'prop-types'
import {Comment, Info, FileCode, Alert} from '@githubprimer/octicons-react'
import {Box, Flex, Link, StyledOcticon as Octicon, Text} from '@primer/components'
import StatusLabel from './StatusLabel'

export default function PackageHeader(props) {
  const {description, internal = false, package: pkg, source = '', status, status_issue: issue, ...rest} = props

  const isPackage = pkg && source.indexOf('/modules/') > -1
  const isInternal = internal || source.indexOf('https://github.com/github/github') === 0

  let info
  if (isInternal) {
    info = (
      <Text fontWeight="bold" color="orange.5">
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
        {status ? <StatusLabel status={status} is="a" href="/css/status-key" mr={2} /> : null}
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
