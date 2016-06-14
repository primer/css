# Primer Stylelint Config

[![NPM version](http://img.shields.io/npm/v/stylelint-config-primer.svg)](https://www.npmjs.org/package/stylelint-config-primer)
[![Build Status](https://travis-ci.org/primer/stylelint-config-primer.svg?branch=master)](https://travis-ci.org/primer/stylelint-config-primer)

> A sharable stylelint config object that enforces GitHub's css rules

## Install

```
$ npm install --save stylelint-config-primer
```

## Usage

Within your [stylelint config object](http://stylelint.io/user-guide/configuration/#extends) You can extend this configuration. This will serve as a base for your config, then you can make overrides in your own config object.

```json
{
  "extends": "stylelint-config-primer"
}
```

## Documentation

### Plugins

* [stylelint-scss](https://github.com/kristerkari/stylelint-scss): A collection of SCSS specific linting rules for stylelint
  * [scss/selector-no-redundant-nesting-selector](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md): Disallow redundant nesting selectors (`&`).
* [stylelint-selector-no-utility](https://github.com/primer/stylelint-selector-no-utility): Stylelint rule that doesn't allow the styling of utility classes in CSS

### Configured lints

This is a list of the lints turned on in this configuration, and what they do.

#### At-rule

* [at-rule-blacklist](http://stylelint.io/user-guide/rules/at-rule-blacklist/): `["extend"]` should never be used in `@rule`.
* [at-rule-name-case](http://stylelint.io/user-guide/rules/at-rule-name-case/): at rules must be in written lowercase.
* [at-rule-name-space-after](http://stylelint.io/user-guide/rules/at-rule-name-space-after/): There must always be a single space after at-rule names in single-line declaration blocks.
* [at-rule-semicolon-newline-after](http://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/): There must always be a newline after the semicolon.

#### Block

* [block-closing-brace-newline-after](http://stylelint.io/user-guide/rules/block-closing-brace-newline-after/): There must always be a newline after the closing brace.
* [block-closing-brace-newline-before](http://stylelint.io/user-guide/rules/block-closing-brace-newline-before/): There must always be a newline before the closing brace in multi-line blocks.
* [block-closing-brace-space-before](http://stylelint.io/user-guide/rules/block-closing-brace-space-before/): There must always be a single space before the closing brace in single-line blocks.
* [block-no-empty](http://stylelint.io/user-guide/rules/block-no-empty/): Disallow empty blocks.
* [block-opening-brace-newline-after](http://stylelint.io/user-guide/rules/block-opening-brace-newline-after/): There must always be a newline after the opening brace in multi-line blocks.
* [block-opening-brace-space-after](http://stylelint.io/user-guide/rules/block-opening-brace-space-after/): There must always be a single space after the opening brace in single-line blocks.
* [block-opening-brace-space-before](http://stylelint.io/user-guide/rules/block-opening-brace-space-before/): There must always be a single space before the opening brace.

#### Color

* [color-hex-case](http://stylelint.io/user-guide/rules/color-hex-case/): Hex colors must be written in lowercase.
* [color-hex-length](http://stylelint.io/user-guide/rules/color-hex-length/): Always use short hex notation, where available.
* [color-named](http://stylelint.io/user-guide/rules/color-named/): Colors must never be named.
* [color-no-invalid-hex](http://stylelint.io/user-guide/rules/color-no-invalid-hex/): Hex values must be valid.

#### Comment

* [comment-empty-line-before](http://stylelint.io/user-guide/rules/comment-empty-line-before/): There must always be an empty line before comments. _Except_: Comments that are nested and the first child of their parent node. _Ignore_: stylelint commands
* [comment-whitespace-inside](http://stylelint.io/user-guide/rules/comment-whitespace-inside/): There must always be whitespace inside the markers.

#### Declaration

* [declaration-bang-space-after](http://stylelint.io/user-guide/rules/declaration-bang-space-after/): There must never be whitespace after the bang.
* [declaration-bang-space-before](http://stylelint.io/user-guide/rules/declaration-bang-space-before/): There must always be a single space before the bang.

#### Declaration block

* [declaration-block-no-duplicate-properties](http://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/): Disallow duplicate properties within declaration blocks. _Ignore_: consecutive duplicated properties.
* [declaration-block-no-shorthand-property-overrides](http://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/): Disallow shorthand properties that override related longhand properties.
* [declaration-block-properties-order](http://stylelint.io/user-guide/rules/declaration-block-properties-order/): Properties in declaration blocks must be [sorted according to this list]().


## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)
