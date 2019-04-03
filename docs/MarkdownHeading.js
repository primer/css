import React from 'react'
import styled from 'styled-components'
import {StyledOcticon, Heading, Box, Text} from '@primer/components'
import {Link} from '@githubprimer/octicons-react'
import slugify from 'slugify'

const Anchor = ({id}) => (
  <a href={`#${id}`}>
    <StyledOcticon color="black" icon={Link} />
  </a>
)

const StyledHeading = styled(Heading)`
  &:hover .anchorWrapper,
  &:focus .anchorWrapper {
    display: inline-block;
  }
`
const MarkdownHeading = ({children, className, ...rest}) => {
  const id = slugify(children.toString())
  return (
    <StyledHeading id={id} className={className} {...rest}>
      <Box as={Text} lineHeight={1} className="anchorWrapper" pr={1} ml={'-20px'} display={'none'}>
        <Anchor id={id} />
      </Box>
      {children}
    </StyledHeading>
  )
}

export default MarkdownHeading
