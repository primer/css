const {basename, join, resolve} = require('path')
const PromiseQueue = require('p-queue')
const execa = require('execa')
const globby = require('globby')
const rootDir = resolve(__dirname, '../..')
const lernaConfig = require(join(rootDir, 'lerna.json'))
const modulesDir = join(rootDir, 'modules')
require('console.table')

const checks = [
  function hasStories(module) {
    const key = 'has stories'
    return globby(join(module.path, '**/stories.js'))
      .then(files => ({[key]: files.length > 0 ? 'yes' : 'no'}))
  },
  function passesDocTest(module) {
    const key = 'docs test'
    return execa(join(rootDir, 'script/test-docs'), {
      cwd: module.path
    })
    .then(result => {
      return {[key]: '✔'}
    })
    .catch(result => {
      return {[key]: 'FAIL'}
    })
  }
]

const modules = globby(join(modulesDir, 'primer-*'))
  .then(moduleDirs => {
    console.log('Found %d module directories', moduleDirs.length)
    return moduleDirs
      .map(path => ({
        path,
        name: basename(path),
        pkg: require(join(path, 'package.json'))
      }))
      .filter(({pkg}) => pkg.primer.module_type !== 'meta')
  })
  .then(modules => {
    console.log('Filtered to %d modules (excluding meta-packages)', modules.length)
    const queue = new PromiseQueue({concurrency: 5})
    for (const module of modules) {
      module.checks = {}
      for (const check of checks) {
        queue.add(() => {
          console.warn(`? check: ${module.name} ${check.name}`)
          return check(module)
            .then(result => {
              Object.assign(module.checks, result)
            })
        })
      }
    }
    return queue.onIdle().then(() => modules)
  })
  .then(modules => {
    console.warn('ran tests on %d modules', modules.length)
    const rows = modules.map(({name, checks}) => {
      return Object.assign({'package': name}, checks)
    })
    console.table(rows)
  })

