import titleCase from 'title-case'
import primerColors from 'primer-colors'

export const variables = {}

import colorSystemSCSS from '!!raw-loader?module!../src/support/variables/color-system.scss'
import colorVariablesSCSS from '!!raw-loader?module!../src/support/variables/colors.scss'

parseSCSSVariables(colorSystemSCSS, variables)
parseSCSSVariables(colorVariablesSCSS, variables)

// XXX we don't necessarily define them in this order in primer-colors,
// so we define an array here just to be safe
export const gradientHues = ['gray', 'blue', 'green', 'purple', 'yellow', 'orange', 'red', 'pink']

export const colors = {
  ...primerColors,
  pink: Object.keys(variables)
    .filter(key => key.startsWith('pink-'))
    .sort()
    .map(key => variables[key])
}

export const gradientPalettes = gradientHues.map(name => {
  const bgClass = `bg-${name}`
  const textClass = `text-${name}`
  return {
    name,
    title: titleCase(name),
    bg: variables[bgClass] ? {className: bgClass, value: variables[bgClass]} : null,
    fg: variables[textClass] ? {className: textClass, value: variables[textClass]} : null,
    values: colors[name].map((value, index) => ({
      value,
      index,
      variable: `${name}-${index}00`,
      slug: `${name}-${index}`
    }))
  }
})

export const backgroundPalettes = gradientPalettes
  .filter(palette => palette.bg)
  .map(({name, values, bg, ...paletteRest}) => ({
    name,
    ...paletteRest,
    className: bg.className,
    value: bg.value,
    values: values.map(value => ({...value, className: `bg-${value.slug}`}))
  }))

export const foregroundPalettes = gradientPalettes
  .filter(palette => palette.fg)
  .map(({name, values, fg, ...paletteRest}) => ({
    name,
    ...paletteRest,
    className: fg.className,
    value: fg.value,
    values: values.map(value => ({...value, className: `color-${value.slug}`}))
  }))

export function getBackgroundPalette(name) {
  return backgroundPalettes.find(palette => palette.name === name)
}

export function getForegroundPalette(name) {
  return foregroundPalettes.find(palette => palette.name === name)
}

function parseSCSSVariables(scssString, variables = {}) {
  const variablePattern = /\$([-\w]+):\s*(.+)( !default);/g
  let match
  do {
    match = variablePattern.exec(scssString)
    if (match) {
      // eslint-disable-next-line no-unused-vars
      const [_, name, value] = match
      variables[name] = value.startsWith('$') ? variables[value.substr(1)] : value
    }
  } while (match)
  return variables
}
