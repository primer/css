const postcss = require('postcss')

module.exports = function generateTheme(themeConfig) {
  const {variables = {}, promotions = []} = themeConfig

  const sheet = postcss.root()
  const root = postcss.rule({selector: ':root'})
  const defs = postcss.root()
  defs.append(postcss.comment({text: 'override global variables to use var()'}))

  sheet.append(postcss.atRule({name: 'import', params: '"../support/index.scss"'}))

  root.append(postcss.comment({text: 'variables defined in the theme'}))
  for (const [name, value] of Object.entries(variables)) {
    declare(name, value)
    promotions.push(name)
  }

  root.append(postcss.comment({text: 'promotions: SCSS -> custom properties'}))
  for (const name of new Set(promotions)) {
    declare(name, `$${name}`)
    define(name, `var(--${name}) !global`)
  }

  root.append(defs)
  sheet.append(root)

  return sheet

  function declare(name, value) {
    return root.append(
      postcss.decl({
        prop: `--${name}`,
        value: /[$(]/.test(value) ? `#{${value}}` : value
      })
    )
  }

  function define(name, value) {
    return defs.append(
      postcss.decl({
        prop: `$${name}`,
        value
      })
    )
  }
}
