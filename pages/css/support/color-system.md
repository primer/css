---
title: Color system
description: 'Sass variables, mixins, and functions for use in our components.'
status: Stable
status_issue: 'https://github.com/github/design-systems/issues/301'
---

import {Box, BorderBox, Flex, Text} from '@primer/components'
import {backgroundPalettes, gradientHues, variables} from '../../../docs/color-variables'
import {ColorVariable, FadeVariables, Var, overlayColor, black, white} from '../../../docs/color-system'

# Table of contents

## Color palette

<Flex mb={6} className="markdown-no-margin">
  {backgroundPalettes.map(({name, title, value}) => (
    <Box bg={variables[`bg-${name}`]} p={3} width={200} mr={2} mb={2} key={name}>
      <Text fontWeight="bold" color={overlayColor(value)}>
        {title}
      </Text>
    </Box>
  ))}
  <BorderBox bg="white" p={3} width={200} mb={2} borderRadius={0}>
    <Text fontWeight="bold" color="black">
      White
    </Text>
  </BorderBox>
</Flex>

## Color variables

<Flex flexWrap="wrap" className="gutter">
  {gradientHues.map(hue => (
    <ColorVariable id={hue} hue={hue} key={hue} />
  ))}
</Flex>

<Flex flexWrap="wrap" {...props}>
  <FadeVariables id="black" hue="black" bg="black" color="white">
    <BorderBox border={0} borderRadius={0} borderTop={1} borderColor="gray.5" mt={1}>
      <Text as="div" fontSize={2} pt={3} mb={0}>
        Black fades apply alpha transparency to the <Var>$black</Var> variable. The black color value has a slight
        blue hue to match our grays.
      </Text>
    </BorderBox>
  </FadeVariables>
  <FadeVariables id="white" hue="white" over={black}>
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
