import React from 'react'
import PropTypes from 'prop-types'
import chroma from 'chroma-js'
import colors from 'primer-colors'
import {BorderBox, Box, Flex, Heading, Text} from '@primer/components'

const gradientHues = ['gray', 'blue', 'green', 'purple', 'yellow', 'orange', 'red']

const OPPOSITE_COLORS = {
  black: colors.white,
  white: colors.black,
  [colors.black]: colors.white,
  [colors.white]: colors.black
}

export function ColorPalette(props) {
  return (
    <Flex mb={6} {...props}>
      {gradientHues.map(hue => (
        <Box bg={`${hue}.5`} p={3} width={1 / 7} mr={2} key={hue}>
          <Text color="white">{hue}</Text>
        </Box>
      ))}
      <BorderBox bg="white" width={1 / 7} borderRadius={0} mr={4} p={3}>
        <Text color="black">white</Text>
      </BorderBox>
    </Flex>
  )
}

export function ColorVariables(props) {
  return (
    <>
      <Flex flexWrap="wrap" {...props}>
        {gradientHues.map(hue => (
          <ColorVariable hue={hue} key={hue} />
        ))}
      </Flex>
      <Flex flexWrap="wrap" {...props}>
        <FadeVariables hue="black" bg="black" color="white">
          <BorderBox border={0} borderRadius={0} borderTop={1} borderColor="gray.5" mt={2}>
            <Text is="div" fontSize={2} pt={2} mb={0}>
              Black fades apply alpha transparency to the <Var>$black</Var> variable. The black color value has a slight
              blue hue to match our grays.
            </Text>
          </BorderBox>
        </FadeVariables>
        <FadeVariables hue="white" over="black">
          <BorderBox border={0} borderRadius={0} borderTop={1} mt={2}>
            <Text is="div" fontSize={2} pt={2} mb={0}>
              White fades apply alpha transparency to the <Var>$white</Var> variable, below these are shown overlaid on
              a dark gray background.
            </Text>
          </BorderBox>
        </FadeVariables>
      </Flex>
    </>
  )
}

export function ColorVariable({hue, ...rest}) {
  const values = colors[hue]
  return (
    <Flex.Item is={Box} pr={4} mb={6} width={1 / 2} className="markdown-no-margin" {...rest}>
      {false ? <Heading is="div">{hue}</Heading> : null}
      <Box bg={`${hue}.5`} my={2} p={3} color="white">
        <Heading is="div" pb={3} fontSize={56} fontWeight="light">
          {hue}
        </Heading>
        <Flex justifyContent="space-between">
          <Flex.Item flex="1 1 auto" is={Var}>
            ${hue}-500
          </Flex.Item>
          <Text fontFamily="mono">{values[5]}</Text>
        </Flex>
      </Box>
      {values.map((value, i) => (
        <Swatch name={`${hue}-${i}00`} value={value} key={value} />
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
    return {
      name: `${hue}-fade-${alpha}`,
      textColor: fadeTextColor(colorValue, alpha, over),
      value: chroma(colorValue).alpha(alpha / 100).css()
    }
  })
  const boxProps = {color, bg}
  return (
    <Flex.Item is={Box} pr={4} mb={6} width={1 / 2} className="markdown-no-margin" {...rest}>
      {false ? <Heading is="div">{hue}</Heading> : null}
      <Box my={2} p={3} {...boxProps}>
        <Heading is="div" pb={3} fontSize={56} fontWeight="light">
          {hue}
        </Heading>
        <Flex justifyContent="space-between">
          <Flex.Item flex="1 1 auto" is={Var}>
            ${hue}
          </Flex.Item>
          <Text fontFamily="mono">
            {colorValue}
            {' / '}
            {chroma(colorValue).css()}
          </Text>
        </Flex>
        {children}
      </Box>
      <Box bg={over}>
        {values.map(swatchProps => (
          <Swatch {...swatchProps} key={swatchProps.name} />
        ))}
      </Box>
    </Flex.Item>
  )
}

FadeVariables.propTypes = {
  bg: Box.propTypes.color,
  color: Box.propTypes.color,
  hue: PropTypes.oneOf(['black', 'white']),
  over: PropTypes.oneOf(['black', 'white'])
}

function Swatch(props) {
  const {name, value, textColor = overlayColor(value), ...rest} = props
  return (
    <Box bg={value} {...rest}>
      <Text is={Flex} fontSize={1} justifyContent="space-between">
        <Box p={3}>
          <Var color={textColor}>${name}</Var>
        </Box>
        <Box p={3}>
          <Text color={textColor} fontFamily="mono">{value}</Text>
        </Box>
      </Text>
    </Box>
  )
}

Swatch.propTypes = {
  name: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  value: PropTypes.string.isRequired
}

function Var(props) {
  // FIXME: fontStyle should be a prop, right?
  return <Text is="var" fontWeight="bold" fontFamily="mono" css={{fontStyle: 'normal'}} {...props} />
}

function overlayColor(bg, fg = 'black') {
  if (chroma.contrast(bg, fg) < 4.5) {
    return oppositeColor(fg)
  }
  return fg
}

function fadeTextColor(color, alpha, over) {
  return alpha >= 50 ? oppositeColor(color) : color
}

function oppositeColor(color) {
  return OPPOSITE_COLORS[color] || color
}
