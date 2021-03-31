const p = require('@primer/css/deprecations')
const {currentVersionDeprecations} = require('./utils/css')

describe('deprications', () => {
  it('g', () => {
    console.log(currentVersionDeprecations())
  })
})
