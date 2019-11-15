const {theme} = require('@primer/primitives')
const postcss = require('postcss')

module.exports = function generateTheme(transform) {
  const {variables} = transform(theme)
  const entries = Object.entries(variables).filter(([, value]) => typeof value !== 'undefined')

  const sheet = postcss.root()
  const root = postcss.rule({selector: ':root'})
  for (const [name, value] of entries) {
    const prop = postcss.decl({
      prop: `--${name}`,
      value: `#{${value}}`
    })
    root.append(prop)
  }
  sheet.append(root)

  for (const [name, value] of entries) {
    const prop = postcss.decl({
      prop: `$${name}`,
      value: `var(--${name}, #{${value}})`
    })
    sheet.append(prop)
  }

  return sheet
}
