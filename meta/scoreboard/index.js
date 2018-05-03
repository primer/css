const {basename, join, resolve} = require('path')
const PromiseQueue = require('p-queue')
const execa = require('execa')
const globby = require('globby')
const rootDir = resolve(__dirname, '../..')
const lernaConfig = require(join(rootDir, 'lerna.json'))
const modulesDir = join(rootDir, 'modules')
require('console.table')

const unique = list => Array.from(new Set(list)).sort()

const matchAll = (pattern, text) => {
  const matches = []
  let match
  while (match = pattern.exec(text)) {
    matches.push(match)
  }
  return matches
}

const checks = {
  'has stories': (module, key) => {
    return globby(join(module.path, '**/stories.js'))
      .then(files => ({
        [key]: files.length > 0 ? 'yes' : 'no'
      }))
  },
  'docs test': (module, key) => {
    return execa(join(rootDir, 'script/test-docs'), {
      cwd: module.path
    })
    .then(result => ({[key]: 'pass'}))
    .catch(({stderr}) => {
      const pattern = /("\.[-\w]+") is not documented/g
      const matches = matchAll(pattern, stderr)
        .map(match => match[1])
      let missing = matches ? Array.from(matches) : []
      const max = 5
      if (missing.length > max) {
        const more = missing.length - max
        missing = missing.slice(0, max).concat(`and ${more} more...`)
      }
      return {
        [key]: 'FAIL',
        'missing docs': unique(missing).join(', ')
      }
    })
  }
}

const args = process.argv.slice(2)

const modules = args.length
  ? Promise.resolve(args)
  : globby(join(modulesDir, 'primer-*'))

modules
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

    const queue = new PromiseQueue({concurrency: 3})

    for (const module of modules) {
      module.checks = {}
      for (const [name, check] of Object.entries(checks)) {
        queue.add(() => {
          // console.warn(`? check: ${module.name} ${name}`)
          return check(module, name)
            .then(result => {
              Object.assign(module.checks, result)
            })
        })
      }
    }

    console.warn(`Running ${queue.size} checks...`)
    return queue.onIdle().then(() => modules)
  })
  .then(modules => {
    console.warn('ran tests on %d modules', modules.length)
    const rows = modules.map(({name, checks}) => {
      return Object.assign({'package': name}, checks)
    })
    console.table(rows)
  })

