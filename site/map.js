const {basename} = require('path')

module.exports = {
  'primer/README.md': 'packages/primer.md',
  'primer-base/README.md': false, // FIXME: 'support/base.md'?
  'primer-core/README.md': 'packages/primer-core.md',
  'primer-layout/README.md': 'objects/layout.md',
  'primer-layout/docs/*.md': path => `objects/${basename(path)}`,
  'primer-marketing-support/README.md': 'support/marketing-variables.md',
  'primer-marketing-type/README.md': 'utilities/marketing-type.md',
  'primer-marketing-utilities/README.md': false,
  'primer-marketing-utilities/docs/*.md': path => `utilities/marketing-${basename(path)}`,
  'primer-marketing/README.md': 'packages/primer-marketing.md',
  'primer-product/README.md': 'packages/primer-product.md',
  'primer-support/README.md': false, // 'support/index.md',
  'primer-support/docs/*.md': path => `support/${basename(path)}`,
  'primer-table-object/README.md': 'objects/table-object.md',
  'primer-utilities/README.md': false, // 'utilities/index.md',
  'primer-utilities/docs/*.md': path => `utilities/${basename(path)}`,
  // this is a catch-all rule that needs to go last so that it doesn't override others
  'primer-*/README.md': path => `components/${shortName(path)}.md`,
}

function shortName(path) {
  return path.match(/primer-([-\w]+)/)[1]
}
