import React from 'react'
import PropTypes from 'prop-types'
import chroma from 'chroma-js'
import titleCase from 'title-case'
import styled from 'styled-components'
import {Box, Flex, Heading, Text} from '@primer/components'
import {colors, variables, getBackgroundPalette} from './color-variables'

export {gradientPalettes} from './color-variables'

const {black, white} = colors
export {black, white}

export function ColorVariable({hue, ...rest}) {
  const values = colors[hue]
  return (
    <Flex.Item as={Box} minWidth={240} pr={4} mb={6} className="col-12 col-md-6 markdown-no-margin" {...rest}>
      <Box bg={colors[hue][5]} my={2} p={3} color="white">
        <Heading as="div" pb={3} fontSize={56} fontWeight="light">
          {titleCase(hue)}
        </Heading>
        <Flex justifyContent="space-between">
          <Flex.Item as={Var} fontWeight="bold">
            ${hue}-500
          </Flex.Item>
          <Text justifySelf="end" fontFamily="mono">
            {values[5]}
          </Text>
        </Flex>
      </Box>
      {values.map((value, index) => (
        <Swatch name={hue} index={index} key={value} />
      ))}
    </Flex.Item>
  )
}

ColorVariable.propTypes = {
  hue: PropTypes.oneOf(Object.keys(colors)).isRequired
}

export function FadeVariables({hue, color, bg, over, children, ...rest}) {
  const colorValue = colors[hue]
  const alphas = [15, 30, 50, 70, 85]
  const values = alphas.map(alpha => {
    const value = chroma(colorValue)
      .alpha(alpha / 100)
      .css()
    return {
      variable: `${hue}-fade-${alpha}`,
      textColor: fadeTextColor(value, over),
      value
    }
  })
  const boxProps = {color, bg}
  return (
    <Flex.Item as={Box} pr={4} mb={6} width={1 / 2} className="markdown-no-margin" {...rest}>
      {/* <Heading as="div">{titleCase(hue)}</Heading> */}
      <Box my={2} p={3} {...boxProps}>
        <Heading as="div" pb={3} fontSize={56} fontWeight="light">
          {titleCase(hue)}
        </Heading>
        <Flex justifyContent="space-between">
          <Flex.Item flex="1 1 auto" as={Var} fontWeight="bold">
            ${hue}
          </Flex.Item>
          <Text fontFamily="mono">
            {chroma(colorValue).css()}
            {' / '}
            {colorValue}
          </Text>
        </Flex>
        {children}
      </Box>
      <Box bg={over}>
        {values.map(swatchProps => (
          <Swatch {...swatchProps} key={swatchProps.value} />
        ))}
      </Box>
    </Flex.Item>
  )
}

FadeVariables.propTypes = {
  bg: Box.propTypes.color,
  color: Box.propTypes.color,
  hue: PropTypes.oneOf(['black', 'white']),
  over: PropTypes.string
}

export function Swatch(props) {
  const {
    name,
    index,
    value = colors[name][index],
    textColor = overlayColor(value),
    variable = `${name}-${index}00`,
    children,
    ...rest
  } = props

  return (
    <Flex bg={value} color={textColor} {...rest}>
      {children}
      {variable ? (
        <Box as={Var} pr={4}>
          ${variable}
        </Box>
      ) : null}
      <Box as={Text} fontFamily="mono">
        {value}
      </Box>
    </Flex>
  )
}

Swatch.defaultProps = {
  as: Text,
  flexWrap: 'wrap',
  fontSize: 1,
  justifyContent: 'space-between',
  p: 3
}

Swatch.propTypes = {
  name: PropTypes.string,
  textColor: PropTypes.string,
  value: PropTypes.string.isRequired
}

export function BackgroundHueSwatches({hue, ...rest}) {
  const namedUtilities = Object.keys(variables).filter(name => name.startsWith(`bg-${hue}`))

  const namedUtilitiesByValue = {}
  for (const name of namedUtilities) {
    const value = variables[name]
    namedUtilitiesByValue[value] = name
  }

  const {values} = getBackgroundPalette(hue)
  const rows = values.map(({value, ...rest}) => ({
    value,
    named: namedUtilitiesByValue[value],
    ...rest
  }))

  return (
    <ColorTable {...rest}>
      <thead>
        <tr>
          <th>Alias</th>
          <th>Class</th>
          <th>Hex value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({value, named, slug, variable}) => {
          const overlay = overlayColor(value)
          return (
            <ColorRow key={slug}>
              <ColorCell bg={named ? value : null} color={overlay}>
                {named ? `.${named}` : null}
              </ColorCell>
              <ColorCell bg={value} color={overlay}>
                .bg-{slug}
              </ColorCell>
              <ColorCell bg={value} color={overlay}>
                <Text fontFamily="mono">{value}</Text>
              </ColorCell>
            </ColorRow>
          )
        })}
      </tbody>
    </ColorTable>
  )
}

export function Var(props) {
  return <Text as="var" fontFamily="mono" fontStyle="normal" {...props} />
}

export function overlayColor(bg) {
  return chroma(bg).luminance() > 0.5 ? black : white
}

const ColorTable = styled.table`
  display: table !important;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0 4px;

  tr,
  td,
  th {
    border: 0 !important;
  }

  td,
  th {
    text-align: left;
    width: 25%;
  }

  tr {
    background-color: transparent !important;
  }
`

const ColorRow = styled(Box).attrs({as: 'tr'})`
  border-bottom: 1px solid ${colors.gray[2]} !important;
`

const ColorCell = styled(Box).attrs({as: 'td'})``

function fadeTextColor(fg, bg = white) {
  const rgb = compositeRGB(fg, bg)
  return overlayColor(rgb)
}

/**
 * Composite ("flatten") a foreground RGBA value with an RGB background into an
 * RGB color for the purposes of measuring contrast or luminance.
 */
function compositeRGB(foreground, background) {
  const [fr, fg, fb, fa] = chroma(foreground).rgba()
  const [br, bg, bb] = chroma(background).rgb()
  return chroma([(1 - fa) * br + fa * fr, (1 - fa) * bg + fa * fg, (1 - fa) * bb + fa * fb]).css()
}
