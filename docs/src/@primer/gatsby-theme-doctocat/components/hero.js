import loadable from '@loadable/component'
import {Box, Heading, Text} from '@primer/components'
import {Container} from '@primer/gatsby-theme-doctocat'
import React from 'react'
import {version} from '../../../../../package.json'
import {ReactComponent as HeroIllustration} from '../../../hero-illustration.svg'

const HeroAnimation = loadable(() => import('../../../hero-animation'), {fallback: <HeroIllustration />})

function Hero() {
  return (
    <Box bg="black" py={6}>
      <Container>
        <Heading color="blue.4" fontSize={7} m={0}>
          Primer CSS
        </Heading>
        <Text as="p" fontFamily="mono" mt={0} mb={2} color="blue.3" fontSize={2}>
          v{version}
        </Text>
        <HeroAnimation />
      </Container>
    </Box>
  )
}

export default Hero
