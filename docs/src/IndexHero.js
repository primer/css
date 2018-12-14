import React from 'react'
import {Box, Heading, Link, Text} from '@primer/components'
import {name, version} from 'primer/package.json'
import {CONTENT_MAX_WIDTH} from './constants'

const IndexHero = () => (
  <Box bg="blue.5">
    <Box maxWidth={CONTENT_MAX_WIDTH} px={6} py={6} mx="auto" mb={3}>
      <Box mt={4} mb={4}>
        <Heading color="white" fontSize={7} fontWeight="light">
          Primer CSS
        </Heading>
        <Text is="div" color="blue.2" fontSize={2} fontFamily="mono" mb={4}>
          {name}@{version}
        </Text>
        <Text is="p" color="white" fontSize={4} fontWeight="light">
          Resources for building websites with{' '}
          <Link color="inherit" underline href="https://primer.style">
            Primer
          </Link>{' '}
          in CSS and Sass.
        </Text>
      </Box>
    </Box>
  </Box>
)

export default IndexHero
