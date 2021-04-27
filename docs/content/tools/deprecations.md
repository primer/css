---
title: Deprecation data
---

As of version 12.7.0, we publish CSS selector and SCSS variable deprecation data (as of 14.0.0) with `@primer/css`. You can access the data via the [Node API](#node) or as [JSON](#json).

**Keep in mind that this data includes both active and _planned_ deprecations.** The [Node API](#node) is the best way to determine whether a selector or variable is deprecated for the version of `@primer/css` you've installed.

## JSON

The JSON data is available in the unpacked node module's `dist/deprecations.json`, and is an object with the following structure:

* `versions` is an object whose keys are version numbers (e.g. `13.0.0`) and values are deprecation messages, each of which has a `message` string and a `selectors` and/or `variables` array:

    ```json
    {
      "versions": {
        "14.0.0": [
          {
            "variables": ["$min_tab_size", "$max_tab_size"],
            "message": "These variables have been deprecated."
          }
        ],
        "13.0.0": [
          {
            "selectors": [".btn-purple"],
            "message": "Please don't make purple buttons."
          }
        ]
      }
    }
    ```

    Deprecation messages strings may include Markdown so that they can be included in the [changelog].

* `selectors` is an object mapping CSS selectors (e.g. `.btn-purple`) to the version in which they are _or will be_ deprecated:

    ```json
    {
      "selectors": {
        ".btn-purple": {
          "version": "13.0.0",
          "message": "Please don't make purple buttons."
        }
      }
    }
    ```

* `variables` is an object mapping SCSS variables (including the leading `$`, e.g. `$status-pending`) to the version in which they are or will be deprecated:

    ```json
    {
      "variables": {
        "$status-pending": {
          "version": "14.0.0",
          "message": "This variable is unused in Primer, and is deprecated."
        }
      }
    }
    ```


## Node

The Node API for selector deprecations is available at
`@primer/css/deprecations`.

**Note:** Because we have chosen not to bundle any runtime dependencies with
`@primer/css`, you will need to install the [semver] dependency yourself:

```shell
npm install semver
```

### `versionDeprecations`
This is the object literal form of the [JSON data's](#json) `versions` object.
For instance, to list all of the deprecations:

```js
const {versionDeprecations} = require('@primer/css/deprecations')
for (const [version, deprecations] of Object.entries(versionDeprecations)) {
  console.log(`${version}: ${deprecations.length} deprecations`)
}
```

### `selectorDeprecations`
This is a [Map] object with keys for each CSS selector mapped to the deprecation info:

```js
const {selectorDeprecations} = require('@primer/css/deprecations')
console.log(`Purple buttons are going away? ${selectorDeprecations.has('.btn-purple')}`)
// "Purple buttons are going away? true"
```

### `isSelectorDeprecated(selector[, version])`
Returns `true` if the CSS `selector` will have been deprecated (removed) _by_ the specified [semver] version.

```js
const {isSelectorDeprecated} = require('@primer/css/deprecations')
console.log(`Purple buttons are bad? ${isSelectorDeprecated('.btn-purple')}`)
// "Purple buttons are bad? true"
console.log(`Primary buttons are bad? ${isSelectorDeprecated('.btn-primary')}`)
// "Primary buttons are bad? false"
```

### `variableDeprecations`
This is a [Map] object with keys for each SCSS variable mapped to the deprecation info:

```js
const {selectorDeprecations} = require('@primer/css/deprecations')
console.log(`Will $status-pending be deprecated? ${variableDeprecations.has('$status-pending')}`)
// "Will $status-pending be deprecated? true"
```

### `isVariableDeprecated(variable[, version])`
Returns `true` if the named SCSS variable (including the leading `$`) will have been deprecated (removed) _by_ the specified [semver] version.

```js
const {isVariableDeprecated} = require('@primer/css/deprecations')
console.log(`$status-pending deprecated? ${isVariableDeprecated('$status-pending')}`)
// "$status-pending deprecated? true"
console.log(`$yellow-700 deprecated? ${isVariableDeprecated('$yellow-700')}`)
// "$yellow-700 deprecated false"
```


[semver]: https://npm.im/semver
[changelog]: https://github.com/primer/css/tree/main/CHANGELOG.md
[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
