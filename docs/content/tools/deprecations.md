---
title: Deprecation data
---

As of version 12.7.0, we publish CSS selector deprecation data with
`@primer/css`. You can access the data via the [Node API](#node) or as
[JSON](#json).

Deprecation messages strings may include Markdown so that they can be included
in the [changelog].

**Keep in mind that this data includes both active and _planned_
deprecations.** You can determine whether a CSS selector is deprecated for the
version of `@primer/css` you've installed via the [Node API](#node), or by
comparing the version of a selector deprecation with the installed version in
your own environment.

## JSON

The JSON data is available in the unpacked node module's `dist/deprecations.json`, and is an object with the following structure:

* `versions` is an object whose keys are version numbers (e.g. `13.0.0`) and values are deprecation messages: objects with a `selectors` array and a `message`:

    ```json
    {
      "versions": {
        "13.0.0": [
          {
            "selectors": [".btn-purple"],
            "message": "Please don't make purple buttons."
          }
        ]
      }
    }
    ```

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

[semver]: https://npm.im/semver
[changelog]: https://github.com/primer/css/tree/master/CHANGELOG.md
[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
