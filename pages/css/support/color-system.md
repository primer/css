---
title: Color system
description: 'Sass variables, mixins, and functions for use in our components.'
status: Stable
status_issue: 'https://github.com/github/design-systems/issues/301'
---

import colors from 'primer-colors'
import {Box, Flex, Heading, Link, StyledOcticon} from '@primer/components'
import {Link as LinkIcon} from '@githubprimer/octicons-react'
import {palettes, variables} from '../../../docs/color-variables'
import {PaletteTable, PaletteCell, overlayColor} from '../../../docs/color-system'


# Table of contents


## Color palette

<Flex flexWrap="wrap" mr={-2}>
  {palettes.concat(
    {title: 'Black', name: 'black', value: colors.gray[9]},
    {title: 'White', name: 'white', value: colors.white, props: {className: 'border'}}
  ).map(({name, title, value, props = {}}) => (
    <Flex.Item as={Link} href={`#${name}`} color={overlayColor(value)} flex="1 1 auto" bg={value} p={3} mr={2} mb={2} fontWeight="bold" key={name} {...props}>
      {title}
    </Flex.Item>
  ))}
</Flex>

## Color variables

<Flex flexWrap="wrap" mr={[0, 0, -4]}>{
  palettes.map(({name, title, value, values}) => (
    <Box id={name} width={[1, 1, 1/2]} pr={[0, 0, 4]} mb={4}>
      <Flex as={Link} href={`#${name}`} bg={value} color={overlayColor(value)} px={3} pt={4} style={{borderBottom: `1px solid ${overlayColor(value)}`}} alignItems="center">
        <Flex.Item color="inherit !important" flex="1 1 auto">
          <Heading as="div" fontSize={4} pb={1}>
            {title}
          </Heading>
        </Flex.Item>
        <StyledOcticon icon={LinkIcon} color="inherit !important" height={20} />
      </Flex>
      <PaletteTable
        columns={['variable', 'value' /*, 'className' */]}
        values={[{variable: name, value, slug: name}].concat(values)}
        hasHeader={false}
        borderSpacing={0}
        cellPadding="8px 16px" />
    </Box>
  ))
}</Flex>

## Color utilities

There are [utility classes](/css/utilities/colors) for every color in our system except fades.
