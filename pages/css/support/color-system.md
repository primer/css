---
title: Color system
description: 'Sass variables, mixins, and functions for use in our components.'
status: Stable
status_issue: 'https://github.com/github/design-systems/issues/301'
---

import {MarkdownHeading} from '@primer/blueprints'
import {Box, Link} from '@primer/components'
import Table from '../../../docs/Table'
import {palettes} from '../../../docs/color-variables'
import {Var, overlayColor} from '../../../docs/color-system'
const {Cell, Row} = Table


# Table of contents


## Color palette

<div class="d-flex flex-wrap mr-n2">
  {palettes.map(({name, title, value, ...palette}) => (
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

<Table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Value</th>
      <th>Background</th>
      <th>Foreground</th>
      <th>Border</th>
    </tr>
  </thead>
  {palettes.map(({name, title, values}) => (
    <tbody key={name}>
      <tr>
        <Box as="th" colSpan="6" pt={4}>
          <Box bg={values[5]}>
            <MarkdownHeading as="h3">{title}</MarkdownHeading>
          </Box>
        </Box>
      </tr>
      {values.map(({value, aliases, index, variable, slug}) => (
        <tr>
          <Cell bg={value} color={overlayColor(value)}>
            <Var>${variable}</Var>
          </Cell>
          <Cell bg={value} color={overlayColor(value)}>
            <Var>{value}</Var>
          </Cell>
          <Cell bg={value} color={overlayColor(value)}>
            {aliases.bg ? (
              <><Var fontWeight="bold">.{aliases.bg}</Var>, </>
            ) : null}
            <Var>.bg-{slug}</Var>
          </Cell>
          <Cell color={value} bg={overlayColor(value)}>
            {aliases.text ? (
              <><Var fontWeight="bold">.{aliases.text}</Var>, </>
            ) : null}
            <Var>.color-{slug}</Var>
          </Cell>
          {aliases.border ? (
            <td style={{border: `1px solid ${value} !important`}}>
              <Var>.{aliases.border}</Var>
            </td>
          ) : <td />}
        </tr>
      ))}
    </tbody>
  ))}
</Table>

## Color utilities

There are [utility classes](/css/utilities/colors) for every color in our system except fades.
