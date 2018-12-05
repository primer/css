---
title: Color system
description: 'Sass variables, mixins, and functions for use in our components.'
permalink: /primer/support/color-system/
doc_type: css
primer: {category: core, module_type: support}
source: 'https://github.com/primer/primer/blob/master/modules/primer-support/lib/variables/color-system.scss'
code_layout: default
keywords: [design-system, mixins, functions, variables]
symbols: []
status_issue: 'https://github.com/github/design-systems/issues/301'
status: New release
---

import {BorderBox, Box, Flex, Heading, Text} from '@primer/components'
import colors from 'primer-colors'

{:toc}

## Color palette

<Flex mb={6}>
  {['gray', 'blue', 'green', 'purple', 'yellow', 'orange', 'red'].map(hue => (
    <Box bg={`${hue}.5`} p={3} width={1/7} mr={2} key={hue}>
      <Text color="white">{hue}</Text>
    </Box>
  ))}
  <BorderBox bg="white" width={1/7} borderRadius={0} mr={4} p={3}>
    <Text color="black">white</Text>
  </BorderBox>
</Flex>

## Color variables

<Flex flexWrap="wrap">
  {[...Object.entries(colors)]
    .filter(([key, value]) => Array.isArray(value))
    .map(([key, value]) => (
      <Flex.Item is={Box} pr={4} mb={6} width={1/2} className="markdown-no-margin" key={key}>
        {false ? <Heading is="h3">{key}</Heading> : null}
        <Box bg={`${key}.5`} my={2} p={3} color="white">
          <Heading pb={3} fontSize={56} fontWeight="light">{key}</Heading>
          <Flex justifyContent="space-between">
            <Flex.Item flex="1 1 auto" is={Text} fontFamily="mono">${key}-500</Flex.Item>
            <Text fontFamily="mono">{value[5]}</Text>
          </Flex>
        </Box>
        {value.map((color, i) => (
          <Box bg={`${key}.${i}`} key={color}>
            <Flex justifyContent="space-between" is={Text} fontFamily="mono">
              <Box p={3}>${key}-{i}00</Box>
              <Box p={3}>{color}</Box>
            </Flex>
          </Box>
        ))}
      </Flex.Item>
    ))}
</Flex>

<Flex>
  <Flex mb={6} flexDirection="column" width={1/2}>
    <Flex mb={3} flexDirection="column">
      <h3>Black fades</h3>
      <Box bg="black" color="white" my={2} p={3}>
        <Heading fontWeight="light" pb={3}>Black</Heading>
        <Flex pb={1}>
          <p className="h4 flex-auto">$black</p>
          <p className="text-right text-mono flex-auto"><code>rgb(27,31,35)</code> {colors.black}</p>
        </Flex>
        <BorderBox border={0} borderTop={1} borderRadius={0} borderColor="white">
          <Text fontSize={5} pt={3}>Black fades apply alpha transparency to the <strong>$black</strong> variable. The black color value has a slight blue hue to match our grays.</Text>
        </BorderBox>
      </Box>
    </Flex>
    <Box bg="white">
      <div className="black-fade-15">
        <p className="h4 p-3">$black-fade-15</p>
      </div>
      <div className="black-fade-30">
        <p className="h4 p-3">$black-fade-30</p>
      </div>
      <div className="black-fade-50">
        <p className="h4 p-3">$black-fade-50</p>
      </div>
      <div className="black-fade-70">
        <p className="h4 p-3 text-white">$black-fade-70</p>
      </div>
      <div className="black-fade-85">
        <p className="h4 p-3 text-white">$black-fade-85</p>
      </div>
    </Box>
  </Flex>

  <div className="mb-3 flex-column col-6 markdown-no-margin">
    <h3>White fades</h3>
    <div className="bg-white border text-gray-dark my-2 p-3">
      <p className="f00-light pb-3">White</p>
      <div className="d-flex pb-1">
        <p className="h4 flex-auto">$white</p>
        <p className="text-right text-mono flex-auto"><code>rgb(255, 255, 255)</code> {colors.white}</p>
      </div>
      <p className="f5 pt-3 border-top border-white">White fades apply alpha transparency to the <strong>$white</strong> variable, below these are shown overlaid on a dark gray background.</p>
    </div>
    <div className="bg-gray-dark">
      <div className="white-fade-15">
        <p className="h4 p-3 text-white">$white-fade-15</p>
      </div>
      <div className="white-fade-30">
        <p className="h4 p-3 text-white">$white-fade-30</p>
      </div>
      <div className="white-fade-50">
        <p className="h4 p-3">$white-fade-50</p>
      </div>
      <div className="white-fade-70">
        <p className="h4 p-3">$white-fade-70</p>
      </div>
      <div className="white-fade-85">
        <p className="h4 p-3">$white-fade-85</p>
      </div>
    </div>
  </div>
</Flex>
