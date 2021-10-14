import {Box, Heading, Text, ThemeProvider} from '@primer/components'
import {Container} from '@primer/gatsby-theme-doctocat'
import React from 'react'
import {version} from '../../../../../package.json'
import {ReactComponent as HeroIllustration} from '../../../hero-illustration.svg'

function Hero() {
  return (
    <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
      <Box bg="canvas.default" py={6}>
        <Container>
          <Heading color="accent.fg" fontSize={7} m={0}>
            Primer CSS
          </Heading>
          <Text as="p" fontFamily="mono" mt={0} mb={2} color="fg.default" fontSize={2}>
            v{version}
          </Text>
          <HeroIllustration />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Hero
