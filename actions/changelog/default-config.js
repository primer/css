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
      version: 'major',
      order: 0
    },
    enhancement: {
      title: ':rocket: Enhancement',
      version: 'minor',
      order: 1
    },
    fix: {
      title: ':bug: Bug Fix',
      version: 'patch',
      order: 2
    },
    docs: {
      title: ':memo: Documentation',
      version: 'patch',
      order: 3
    },
    polish: {
      title: ':nail_care: Polish',
      version: null, // no version bump
      order: 4
    },
    internal: {
      title: ':house: Internal',
      version: null, // no version bump
      order: 5
    }
  },
}
