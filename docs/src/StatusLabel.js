import styled from 'styled-components'
import {BorderBox, StyledOcticon as Octicon, Text} from '@primer/components'
import {PrimitiveDot} from '@githubprimer/octicons-react'

const StyledLabel = styled(BorderBox)`
  display: inline-block;
  white-space: nowrap;
`

export const STATUS_COLORS = {
  stable: 'green.6',
  'new release': 'green.6',
  experimental: 'yellow.7',
  'in review': 'yellow.7',
  deprecated: 'red.6'
}

export default function StatusLabel({status, children, ...rest}) {
  return (
    <StyledLabel px={2} py={1} {...rest}>
      <Octicon icon={PrimitiveDot} color={getStatusColor(status)} mr={2} />
      <Text color="black" fontSize={1}>
        {children || status}
      </Text>
    </StyledLabel>
  )
}

export function getStatusColor(status) {
  return STATUS_COLORS[status.toLowerCase()] || 'gray.5'
}
