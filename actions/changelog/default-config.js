module.exports = {
  // map labels to categories
  labels: {
    'Tag: Breaking Change': 'breaking',
    'Tag: Enhancement':     'enhancement',
    'Tag: Bug Fix':         'fix',
    'Tag: Polish':          'polish',
    'Tag: Documentation':   'docs',
    'Tag: Internal':        'internal'
  },
  categories: {
    breaking: {
      title: ':boom: Breaking Change',
      version: 'major'
    },
    enhancement: {
      title: ':rocket: Enhancement',
      version: 'minor'
    },
    fix: {
      title: ':bug: Bug Fix',
      version: 'patch'
    },
    docs: {
      title: ':memo: Documentation',
      version: 'patch'
    },
    polish: {
      title: ':nail_care: Polish',
      version: null // no version bump
    },
    internal: {
      title: ':house: Internal',
      version: null // no version bump
    }
  },
}
