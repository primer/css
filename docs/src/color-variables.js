import titleCase from 'title-case'
import lightModeColors from '@primer/primitives/dist/js/colors/light'

// XXX we don't necessarily define them in this order in primer-colors,
// so we define an array here just to be safe
const gradientHues = ['gray', 'blue', 'green', 'purple', 'yellow', 'orange', 'red', 'pink']

const colors = lightModeColors.scale

const palettes = gradientHues.map(name => {
  return {
    name,
    title: titleCase(name),
    value: colors[name][5],
    values: colors[name].map((value, index) => ({
      value,
      index,
      variable: `--color-scale-${name}-${index}`,
      slug: `color-scale-${name}-${index}`,
      aliases: {}
    }))
  }
})

export {colors, gradientHues, palettes, getPaletteByName}

export const allColors = palettes.reduce((all, {values}) => all.concat(values), [])

// TODO: fix the borders code
//
// export const borders = Object.keys(variables)
//   .filter(key => key.startsWith('border-') && !variables[key].includes('$'))
//   .sort()
//   .map(key => ({
//     variable: key,
//     value: variables[key],
//     slug: key,
//     aliases: {border: key}
//   }))

function getPaletteByName(name) {
  return palettes.find(palette => palette.name === name)
}
