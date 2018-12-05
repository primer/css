---
title: Colors
description: 'Immutable, atomic CSS classes to rapidly build product'
package: {type: npm, name: primer-utilities, version: 4.11.1, dependencies: [primer-support]}
primer: {category: core, module_type: utilities}
source: 'https://github.com/primer/primer/tree/master/modules/primer-utilities/'
code_layout: default
keywords: [design-system]
symbols: [bg-blue, bg-blue-light, bg-gray, bg-gray-dark, bg-gray-light, bg-green, bg-green-light, bg-pending, bg-purple, bg-purple-light, bg-red, bg-red-light, bg-shade-gradient, bg-white, bg-yellow, bg-yellow-light, link-gray, link-gray-dark, link-hover-blue, muted-link, text-blue, text-gray, text-gray-dark, text-gray-light, text-green, text-inherit, text-orange, text-orange-light, text-pending, text-purple, text-red, text-white]
status: New release
status_issue: 'https://github.com/github/design-systems/issues/97'
---

import {Box, Flex, Heading} from '@primer/components'
import colors from 'primer-colors'

Use color utilities to apply color to the background of elements, text, and borders.

* [Background colors](#background-colors)
* [Text colors](#text-colors)
* [Link colors](#link-colors)
* [Border colors](#border-colors)

## Background colors

Background colors are most commonly used for filling large blocks of content or areas with a color. When selecting a background color, make sure the foreground color contrast passes a minimum WCAG accessibility rating of [level AA](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). Meeting these standards ensures that content is accessible by everyone, regardless of disability or user device. You can [check your color combination with this demo site](http://jxnblk.com/colorable/demos/text/). For more information, read our [accessibility standards](/primer/principles/accessibility).

### Gray

<Box mb={4}>
  <Flex>
    <Box width={3/12} pr={4}>
      <Heading fontSize={4} fontFamily="mono">.bg-gray</Heading>
      <code>{colors.gray[1]}, <var>$bg-gray</var></code>
      <Box bg="gray.1" height={60} />
    </Box>
  </Flex>
</Box>
