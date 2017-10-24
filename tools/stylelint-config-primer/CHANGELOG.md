# HEAD

# 2.0.0

:boom: **The following updates are breaking changes**, since code that disables the deprecated rule will now produce linting errors. Please update your `stylelint-disable` statements accordingly.

- Replaced `selector-no-id: true` with `selector-max-id: 0`
- Replaced `selector-no-type: true` with `selector-max-type: 0`

The rest of the changes should not introduce new linting errors:

- Updated: moved [browserslist](https://github.com/ai/browserslist) spec to `package.json`
- Updated: using the [`no-unsupported-browser-features` plugin](https://github.com/ismay/stylelint-no-unsupported-browser-features) instead of the deprecated `no-unsupported-browser-features` rule
- Removed: `media-feature-no-missing-punctuation`
- Updated: replaced `rule-nested-empty-line-before` and `rule-non-nested-empty-line-before` with `rule-empty-line-before`

# 1.4.0

- Updated: Development dependencies are any version `*`
- Removed: `selector-class-pattern` from config. https://github.com/primer/stylelint-config-primer/pull/11

# 1.3.0

- Added: `length-zero-no-unit` to disallow zero values with units eg `0px`

# 1.2.0

- Removed: We don't need `scss/at-extend-no-missing-placeholder` anymore taken care of by `at-rule-blacklist`
- Added: Adding `selector-no-type` to the rules

# 1.0.0

- Creating a sharable config object
