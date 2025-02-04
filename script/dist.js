#!/usr/bin/env node
import {globby} from 'globby'
import compiler from './primer-css-compiler.js'
import cssstats from 'cssstats'
import {dirname, join} from 'path'

import analyzeVariables from './analyze-variables.js'

import fsExtra from 'fs-extra'
const {copy, remove, mkdirp, readFile, writeFile} = fsExtra

const inDir = 'src'
const outDir = 'dist'
const statsDir = join(outDir, 'stats')
const encoding = 'utf8'

// Bundle paths are normalized in getPathName() using dirname() and then
// replacing any slashes with hyphens, but some bundles need to be
// special-cased. Keys in this object are the path minus the "src/" prefix,
// and values are the bundle file base name. ("primer" produces
// "dist/primer.css", etc.)
const bundleNames = {
  'index.scss': 'primer'
}

async function dist() {
  try {
    const bundles = {}

    await remove(outDir)
    await mkdirp(statsDir)
    const files = await globby([`${inDir}/**/index.scss`])

    const inPattern = new RegExp(`^${inDir}/`)
    const tasks = files.map(async from => {
      const path = from.replace(inPattern, '')
      const name = bundleNames[path] || getPathName(dirname(path))

      const to = join(outDir, `${name}.css`)
      const meta = {
        name,
        source: from,
        sass: `@primer/css/${path}`,
        css: to,
        map: `${to}.map`,
        js: join(outDir, `${name}.js`),
        stats: join(statsDir, `${name}.json`),
        legacy: `primer-${name}/index.scss`
      }

      const scss = await readFile(from, encoding)
      meta.imports = getExternalImports(scss, path).map(getPathName)
      const result = await compiler(scss, {from, to})
      const warnings = result.warnings()

      // We don't want to release changes that cause warnings with postcss. Fail the dist build if any warnings are detected.
      if (warnings.length) {
        for (const warning of warnings) {
          console.warn(warning.toString())
        }
        throw new Error(`Warnings while compiling ${from}.  See output above.`)
      }

      await Promise.all([
        writeFile(to, result.css, encoding),
        writeFile(meta.stats, JSON.stringify(cssstats(result.css)), encoding),
        writeFile(meta.js, `export {cssstats: require('./stats/${name}.json')}`, encoding),
        result.map ? writeFile(meta.map, result.map.toString(), encoding) : null
      ])
      bundles[name] = meta
    })

    await Promise.all(tasks)

    const meta = {bundles}
    await writeFile(join(outDir, 'meta.json'), JSON.stringify(meta, null, 2), encoding)
    await writeVariableData()
    await copy(join(inDir, 'deprecations.json'), join(outDir, 'deprecations.json'))
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  }
}

function getExternalImports(scss, relativeTo) {
  const imports = []
  const dir = dirname(relativeTo)
  // XXX: this might *seem* fragile, but since we enforce double quotes via
  // stylelint, I think it's kosher.
  scss.replace(/@use "(.+)\/index\.scss";/g, (_, dep) => {
    imports.push(join(dir, dep))
  })
  return imports
}

function getPathName(path) {
  return path.replace(/\//g, '-')
}

dist()

async function writeVariableData() {
  const support = await analyzeVariables('src/support/index.scss')
  const marketing = await analyzeVariables('src/marketing/support/index.scss')
  const data = Object.assign({}, support, marketing)
  writeFile(join(outDir, 'variables.json'), JSON.stringify(data, null, 2))
}
