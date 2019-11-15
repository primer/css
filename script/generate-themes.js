#!/usr/bin/env node
/* eslint-disable no-console */
const globby = require('globby')
const postcss = require('postcss')
const stylelint = require('stylelint')
const loadConfig = require('postcss-load-config')
const {mkdirp, writeFile} = require('fs-extra')
const {dirname, join} = require('path')
const generateTheme = require('../lib/generate-theme')

const encoding = 'utf8'

async function generateThemes(generateOptions = {}) {
  const {inDir = 'src/theme', outDir = 'dist/themes'} = generateOptions
  const themes = {}

  const {plugins, options} = await loadConfig()
  const processor = postcss(plugins)

  await mkdirp(outDir)

  const themeFiles = await globby(`${inDir}/*.js`)
  for (const themeFile of themeFiles) {
    const name = themeFile
      .split('/')
      .pop()
      .replace('.js', '')

    const themeConfig = require(`../${themeFile}`)
    const theme = generateTheme(themeConfig)

    const root = postcss.root()
    root.append(theme)

    const scss = root.toString()
    const from = join(inDir, `${name}.scss`)
    await writeFile(from, scss, encoding)

    const to = join(outDir, `${name}.css`)
    const map = `${to}.map`
    const result = await processor.process(scss, Object.assign({from, to}, options))
    await Promise.all([writeFile(to, result.css, encoding), result.map ? writeFile(map, result.map, encoding) : null])
    themes[name] = {from, to, map}
  }

  await stylelint.lint({files: `${inDir}/*.scss`, fix: true})

  return themes
}

if (require.main === module) {
  generateThemes().then(themes => {
    for (const [name, {from, to, map}] of Object.entries(themes)) {
      console.log(`theme "${name}":`)
      console.log(`  source: ${from}`)
      console.log(`  dist: ${to}`)
      if (map) {
        console.log(`  sourcemap: ${map}`)
      }
    }
  })
} else {
  module.exports = generateThemes
}
