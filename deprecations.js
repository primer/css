/**
    Deprecated Selectors
    -------------------------
    These are deprecated selectors and should not be used. They include a replacement value,
    which can be an array or null.

      * 'deprecated-selector': 'replacement-selector'               <-- Replace with this selector.
      * 'deprecated-selector': ['replacement-1', 'replacement-2']   <-- Replace with one of these selectors.
      * 'deprecated-selector': null                                 <-- No option available, remove selector.
*/

import fs from 'fs'

const deprecations = JSON.parse(fs.readFileSync('./dist/deprecations.json'))

const deprecatedSelectors = deprecations['selectors']
const deprecatedSassVariables = deprecations['variables']
const deprecatedSassMixins = deprecations['mixins']

export {
  deprecatedSelectors,
  deprecatedSassVariables,
  deprecatedSassMixins
}
