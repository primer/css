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

<div class="d-flex flex-wrap mr-n2">
  {gradientPalettes.map(({name, title, value, ...palette}) => (
    <Link href={`#${name}`} bg={value} key={name} color={overlayColor(value)} p={3} mr={2} mb={2} className="flex-auto">
      {title}
    </Link>
  ))}
  <div class="bg-gray-9 p-3 mb-2 mr-2 flex-auto">
    <Link href="#black" color="white">Black</Link>
  </div>
  <div class="bg-white p-3 mb-2 mr-2 border flex-auto">
    <Link color="black" href="#white">White</Link>
  </div>
</div>

## Color variables

<div class="d-flex flex-wrap mr-n4">
  {gradientHues.map(hue => (
    <ColorVariable minWidth={240} pr={4} mb={4} className="col-12 col-md-6" id={hue} hue={hue} key={hue} />
  ))}
</div>

<div class="d-flex flex-wrap mr-n4">
  <FadeVariables id="black" hue="black" bg="black" color="white" pr={4} width={1/2}>
    <BorderBox border={0} borderRadius={0} borderTop={1} borderColor="gray.5" mt={1}>
      <Text as="div" fontSize={2} pt={3} mb={0}>
        Black fades apply alpha transparency to the <Var>$black</Var> variable. The black color value has a slight
        blue hue to match our grays.
      </Text>
    </BorderBox>
  </FadeVariables>
  <FadeVariables id="white" hue="white" over={black} pr={4} width={1/2}>
    <BorderBox border={0} borderRadius={0} borderTop={1} mt={1}>
      <Text as="div" fontSize={2} pt={3} mb={0}>
        White fades apply alpha transparency to the <Var>$white</Var> variable.
        Below, these are shown overlaid on a <Var>$black</Var> background.
      </Text>
    </BorderBox>
  </FadeVariables>
</div>

## Color utilities

There are [utility classes](/css/utilities/colors) for every color in our system except fades.
