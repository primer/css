import titleCase from 'title-case'
import primerColors from 'primer-colors'

import colorSystemSCSS from '!!raw-loader?module!../src/support/variables/color-system.scss'
import colorVariablesSCSS from '!!raw-loader?module!../src/support/variables/colors.scss'

const variables = {}

parseSCSSVariables(colorSystemSCSS, variables)
parseSCSSVariables(colorVariablesSCSS, variables)

// XXX we don't necessarily define them in this order in primer-colors,
// so we define an array here just to be safe
const gradientHues = ['gray', 'blue', 'green', 'purple', 'yellow', 'orange', 'red', 'pink']

const colors = {
  ...primerColors,
  pink: Object.keys(variables)
    .filter(key => key.startsWith('pink-'))
    .sort()
    .map(key => variables[key])
}

const aliases = {}

const palettes = gradientHues.map(name => {
  return {
    name,
    title: titleCase(name),
    value: variables[name] || colors[name][5],
    values: colors[name].map((value, index) => ({
      value,
      index,
      variable: `${name}-${index}00`,
      slug: `${name}-${index}`,
      aliases: (aliases[value] = {})
    }))
  }
})

for (const key of Object.keys(variables)) {
  const match = key.match(/^(bg|text|border)-(\w+)(-(dark|light))?$/)
  const value = variables[key]
  if (match && aliases[value]) {
    // eslint-disable-next-line no-unused-vars
    const [_, type, name, suffix] = match
    aliases[value][type] = key
  }
}

export {colors, gradientHues, palettes, getPaletteByName, variables}

export const allColors = palettes.reduce((all, {values}) => all.concat(values), [])

export const borders = Object.keys(variables)
  .filter(key => key.startsWith('border-') && !variables[key].includes('$'))
  .sort()
  .map(key => ({
    variable: key,
    value: variables[key],
    slug: key,
    aliases: {border: key}
  }))

function getPaletteByName(name) {
  return palettes.find(palette => palette.name === name)
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
