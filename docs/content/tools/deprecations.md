---
title: Deprecation data
---

As of version 12.7.0, we publish CSS selector and SCSS variable deprecation data (as of 14.0.0) with `@primer/css`. You can access the data via the [Node API](#node) or as [JSON](#json).

To deprecate a class, variable, or mixin, add the element to the [deprecations.js](https://github.com/primer/css/blob/main/deprecations.js) file with it's replacement value.

The replacement can be:

* A `String` for a direct replacement.
* An `Array` for multiple replacement options.
* `null` to indicate there is no replacement.

This could look something like this:

```js
const deprecations = {
  "deprecated-1": "replacement",
  "deprecated-2": ["replacement-1", "replacement-2"],
  "deprecated-3": null
}
```

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

### Example:

```js
const {
  deprecatedSelectors,
  deprecatedSassVariables,
  deprecatedSassMixins
} = require('@primer/css/deprecations')

```
