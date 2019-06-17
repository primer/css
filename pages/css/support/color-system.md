---
title: Color system
description: 'Sass variables, mixins, and functions for use in our components.'
status: Stable
status_issue: 'https://github.com/github/design-systems/issues/301'
---

import {Box, BorderBox, Flex, Link, Heading, Text} from '@primer/components'
import {gradientPalettes, gradientHues, variables} from '../../../docs/color-variables'
import {ColorVariable, FadeVariables, Var, overlayColor} from '../../../docs/color-system'
const {black, white} = variables


# Table of contents

## Color palette

<Flex flexWrap="wrap" className="mr-n2">
  {gradientPalettes.map(({name, title, bg, fg, ...palette}) => (
    <Link href={`#${name}`} bg={bg.value} key={name} color={overlayColor(bg.value)} p={3} mr={2} mb={2} className="flex-auto">
      {title}
    </Link>
  ))}
  <Box bg="black" p={3} mb={2} mr={2} className="flex-auto">
    <Link href="#black" color="white">Black</Link>
  </Box>
  <BorderBox bg="white" p={3} mb={2} mr={2} borderRadius={0} className="flex-auto">
    <Link color="black" href="#white">White</Link>
  </BorderBox>
</Flex>

## Color variables

<Flex flexWrap="wrap">
  {gradientHues.map(hue => (
    <ColorVariable minWidth={240} pr={4} mb={6} className="col-12 col-md-6" id={hue} hue={hue} key={hue} />
  ))}
</Flex>

<Flex flexWrap="wrap">
  <FadeVariables id="black" hue="black" bg="black" color="white" width={1/2}>
    <BorderBox border={0} borderRadius={0} borderTop={1} borderColor="gray.5" mt={1}>
      <Text as="div" fontSize={2} pt={3} mb={0}>
        Black fades apply alpha transparency to the <Var>$black</Var> variable. The black color value has a slight
        blue hue to match our grays.
      </Text>
    </BorderBox>
  </FadeVariables>
  <FadeVariables id="white" hue="white" over={black} width={1/2}>
    <BorderBox border={0} borderRadius={0} borderTop={1} mt={1}>
      <Text as="div" fontSize={2} pt={3} mb={0}>
        White fades apply alpha transparency to the <Var>$white</Var> variable.
        Below, these are shown overlaid on a <Var>$black</Var> background.
      </Text>
    </BorderBox>
  </FadeVariables>
</Flex>

## Color utilities

There are [utility classes](/css/utilities/colors) for every color in our system except fades.
