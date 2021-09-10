---
title: Deprecation data
---

As of version 12.7.0, we publish CSS selector and SCSS variable deprecation data (as of 14.0.0) with `@primer/css`. You can access the data via the [Node API](#node) or as [JSON](#json).

**Keep in mind that this data includes both active and _planned_ deprecations.** The [Node API](#node) is the best way to determine whether a selector or variable is deprecated for the version of `@primer/css` you've installed.

## JSON

The JSON data is available in the unpacked node module's `dist/deprecations.json`, and is an object with the following structure:

```json
{
  "selectors" {...},
  "variables": {...},
  "mixins": {...}
}
```

* `selectors` is an object mapping CSS selectors to their replacements. If the replacement is an Array, then there's multiple options. If the replacement is null then there are no replacements.

    ```json
    {
      "selectors": {
        "deprecated-class": "replacement-class"
      }
    }
    ```

* `variables` is an object mapping SCSS variables to their replacement SCSS variable.

    ```json
    {
      "variables": {
        "$deprecated-variable": "$replacement-variable"
      }
    }
    ```

* `mixins` is an object mapping SCSS mixins to their replacement SCSS mixins.

    ```json
    {
      "mixins": {
        "deprecated-mixin": "replacement-mixin"
      }
    }
    ```


## Node

The Node API for selector deprecations is available at
`@primer/css/deprecations`.

### `versionDeprecations`
This is the object literal form of the [JSON data's](#json) `versions` object.
For instance, to list all of the deprecations:

```js
const {
  deprecatedSelectors,
  deprecatedSassVariables,
  deprecatedSassMixins
} = require('@primer/css/deprecations')
```
