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

* [at-rule-blacklist](http://stylelint.io/user-guide/rules/at-rule-blacklist/): Specify a blacklist of disallowed at-rules.
  * `"extend"` Disallow the use of `@extend`.
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
* [declaration-colon-newline-after](http://stylelint.io/user-guide/rules/declaration-colon-newline-after/): There must always be a newline after the colon if the declaration's value is multi-line.
* [declaration-colon-space-after](http://stylelint.io/user-guide/rules/declaration-colon-space-after/): There must always be a single space after the colon if the declaration's value is single-line.
* [declaration-colon-space-before](http://stylelint.io/user-guide/rules/declaration-colon-space-before/): There must never be whitespace before the colon.

#### Declaration block

* [declaration-block-no-duplicate-properties](http://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/): Disallow duplicate properties within declaration blocks. _Ignore_: consecutive duplicated properties.
* [declaration-block-no-shorthand-property-overrides](http://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/): Disallow shorthand properties that override related longhand properties.
* [declaration-block-properties-order](http://stylelint.io/user-guide/rules/declaration-block-properties-order/): Properties in declaration blocks must be [sorted according to this list](https://github.com/primer/stylelint-config-primer/blob/1ac303e9a633ee38d168a014dcea10eaf5a95aab/index.js#L45-L215).
* [declaration-block-semicolon-newline-after](http://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/): There must always be a newline after the semicolon.
* [declaration-block-semicolon-space-before](http://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/): There must never be whitespace before the semicolons.
* [declaration-block-single-line-max-declarations](http://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): There should never be more than `1` declaration per line.
* [declaration-block-trailing-semicolon](http://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/): There must always be a trailing semicolon.

#### Declaration Property

* [declaration-property-value-blacklist](http://stylelint.io/user-guide/rules/declaration-property-value-blacklist/): Specify a blacklist of disallowed property and value pairs within declarations.
  * `^transition`: Disallow the use of `all` within transitions.
  * `^background`: Disallow the use of `http:` protocols within background image urls.
  * `^border`: Disallow the use of the word `none` for borders, use `0` instead.
  * `.+`: For everything ban the use of the word `initial`.

#### Font Family

* [font-family-name-quotes](http://stylelint.io/user-guide/rules/font-family-name-quotes/): Expect quotes only when quotes are required according [to the criteria](http://stylelint.io/user-guide/rules/font-family-name-quotes/#options), and disallow quotes in all other cases.

#### Function

* [function-calc-no-unspaced-operator](http://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/): Disallow an unspaced operator within `calc` functions.
* [function-comma-newline-after](http://stylelint.io/user-guide/rules/function-comma-newline-after/): There must never be a whitespace after the commas in multi-line functions.
* [function-comma-space-after](http://stylelint.io/user-guide/rules/function-comma-space-after/): There must always be a single space after the commas in single-line functions.
* [function-comma-space-before](http://stylelint.io/user-guide/rules/function-comma-space-before/): There must never be whitespace before the commas.
* [function-linear-gradient-no-nonstandard-direction](http://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/): Disallow direction values in `linear-gradient()` calls that are not valid according to the [standard syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax).
* [function-max-empty-lines](http://stylelint.io/user-guide/rules/function-max-empty-lines/): There must never be empty lines within a function.
* [function-name-case](http://stylelint.io/user-guide/rules/function-name-case/): Function names must be written in lowercase.
* [function-parentheses-newline-inside](http://stylelint.io/user-guide/rules/function-parentheses-newline-inside/): There must always be a newline inside the parentheses of multi-line functions.
* [function-parentheses-space-inside](http://stylelint.io/user-guide/rules/function-parentheses-space-inside/): There must always be a single space inside the parentheses of single-line functions.
* [function-url-quotes](http://stylelint.io/user-guide/rules/function-url-quotes/): Urls must always be quoted.
* [function-whitespace-after](http://stylelint.io/user-guide/rules/function-whitespace-after/): There must always be whitespace after the function.

#### General

* [indentation](http://stylelint.io/user-guide/rules/indentation/): Indentation should always be `2` spaces.
* [max-empty-lines](http://stylelint.io/user-guide/rules/max-empty-lines/): Limit the number of adjacent empty lines to `1`.
* [max-nesting-depth](http://stylelint.io/user-guide/rules/max-nesting-depth/): Limit the allowed nesting depth `3`.
* [no-duplicate-selectors](http://stylelint.io/user-guide/rules/no-duplicate-selectors/): Disallow duplicate selectors within a stylesheet.
* [no-eol-whitespace](http://stylelint.io/user-guide/rules/no-eol-whitespace/): Disallow end-of-line whitespace.
* [no-extra-semicolons](http://stylelint.io/user-guide/rules/no-extra-semicolons/): Disallow extra semicolons.
* [no-missing-end-of-source-newline](http://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/): Disallow missing end-of-file newlines in non-empty files.
* [no-unsupported-browser-features](http://stylelint.io/user-guide/rules/no-unsupported-browser-features/): Disallow features that are unsupported by the browsers that [we are targeting in the config](https://github.com/primer/stylelint-config-primer/blob/70866772c3b916be5c62b95cfd94b37dfc6e5b04/index.js#L267)

#### Media Feature

* [media-feature-colon-space-after](http://stylelint.io/user-guide/rules/media-feature-colon-space-after/): There must always be a single space after the colon.
* [media-feature-colon-space-before](http://stylelint.io/user-guide/rules/media-feature-colon-space-before/): There must never be whitespace before the colon.
* [media-feature-no-missing-punctuation](http://stylelint.io/user-guide/rules/media-feature-no-missing-punctuation/): Disallow missing punctuation for non-boolean media features.
* [media-feature-range-operator-space-after](http://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/): There must always be a single space after the range operator.
* [media-feature-range-operator-space-before](http://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/): There must always be a single space before the range operator.

#### Media Query

* [media-feature-parentheses-space-inside](http://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/): There must never be whitespace on the inside the parentheses.

#### Media Query List

* [media-query-list-comma-newline-after](http://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/): There must always be a newline after the commas in multi-line media query lists.
* [media-query-list-comma-space-after](http://stylelint.io/user-guide/rules/media-query-list-comma-space-after/): There must always be a single space after the commas in single-line media query lists.
* [media-query-list-comma-space-before](http://stylelint.io/user-guide/rules/media-query-list-comma-space-before/): There must never be whitepace before the commas.

#### Number

* [number-leading-zero](http://stylelint.io/user-guide/rules/number-leading-zero/): There must always be a leading zero.
* [number-no-trailing-zeros](http://stylelint.io/user-guide/rules/number-no-trailing-zeros/): Disallow trailing zeros in numbers.

#### Length

* [length-zero-no-unit](http://stylelint.io/user-guide/rules/length-zero-no-unit/): Disallow units for zero lengths.

#### Property

* [property-case](http://stylelint.io/user-guide/rules/property-case/): Properties must be written in lowercase.
* [property-no-vendor-prefix](http://stylelint.io/user-guide/rules/property-no-vendor-prefix/): Disallow vendor prefixes for properties.
* [shorthand-property-no-redundant-values](http://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/): Disallow redundant values in shorthand properties.

#### Rule

* [rule-nested-empty-line-before](http://stylelint.io/user-guide/rules/rule-nested-empty-line-before/): There must always be an empty line before multi-line rules. _Except_: Nested rules that are the first of their parent rule. _Ignore_: Rules that come after a comment.
* [rule-non-nested-empty-line-before](http://stylelint.io/user-guide/rules/rule-non-nested-empty-line-before/): There must always be an empty line before multi-line rules. _Ignore_: Rules that come after a comment.

#### Selector

* [selector-attribute-brackets-space-inside](http://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/): There must never be whitespace on the inside the brackets.
* [selector-attribute-operator-space-after](http://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/): There must never be a single after after the operator.
* [selector-attribute-operator-space-before](http://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/): There must never be a single before after the operator.
* [selector-combinator-space-after](http://stylelint.io/user-guide/rules/selector-combinator-space-after/): There must always be a single space after the combinators.
* [selector-combinator-space-before](http://stylelint.io/user-guide/rules/selector-combinator-space-before/): There must always be a single space before the combinators.
* [selector-max-compound-selectors](http://stylelint.io/user-guide/rules/selector-max-compound-selectors/): Limit the number of compound selectors in a selector to `3`.
* [selector-max-empty-lines](http://stylelint.io/user-guide/rules/selector-max-empty-lines/): Limit the number of adjacent empty lines within selectors to `0`.
* [selector-max-specificity](http://stylelint.io/user-guide/rules/selector-max-specificity/): Limit the specificity of selectors to `"0,4,0"`.
* [selector-no-id](http://stylelint.io/user-guide/rules/selector-no-id/): Disallow id selectors.
* [selector-no-qualifying-type](http://stylelint.io/user-guide/rules/selector-no-qualifying-type/): Disallow qualifying a selector by type.
* [selector-no-type](http://stylelint.io/user-guide/rules/selector-no-type/): Disallow type selectors.
* [selector-pseudo-class-case](http://stylelint.io/user-guide/rules/selector-pseudo-class-case/): pseudo-class selectors should always be lowercase.
* [selector-pseudo-class-parentheses-space-inside](http://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/): There must never be whitespace on the inside the parentheses.
* [selector-pseudo-element-case](http://stylelint.io/user-guide/rules/selector-pseudo-element-case/): pseudo-element selectors should always be lowercase.
* [selector-pseudo-element-colon-notation](http://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): Applicable pseudo-elements must always use the double colon notation.
* [selector-pseudo-element-no-unknown](http://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/): Disallow unknown pseudo-element selectors.
* [selector-type-case](http://stylelint.io/user-guide/rules/selector-type-case/): Type selectors must always be written in lowercase.

#### Selector List
* [selector-list-comma-newline-after](http://stylelint.io/user-guide/rules/selector-list-comma-newline-after/): There must always be a newline after the commas.
* [selector-list-comma-space-before](http://stylelint.io/user-guide/rules/selector-list-comma-space-before/): There must never be whitespace before the commas.

#### String

* [string-no-newline](http://stylelint.io/user-guide/rules/string-no-newline/): Disallow (unescaped) newlines in strings.
* [string-quotes](http://stylelint.io/user-guide/rules/string-quotes/): Strings must always be wrapped with double quotes.

#### Unit

* [unit-case](http://stylelint.io/user-guide/rules/unit-case/): Units must be written in lowercase.
* [unit-no-unknown](http://stylelint.io/user-guide/rules/unit-no-unknown/): Disallow unknown units.

#### Value

* [value-no-vendor-prefix](http://stylelint.io/user-guide/rules/value-no-vendor-prefix/): Disallow vendor prefixes for values.

#### Value list

* [value-list-comma-newline-after](http://stylelint.io/user-guide/rules/value-list-comma-newline-after/): There must always be a newline after the commas in multi-line value lists.
* [value-list-comma-space-after](http://stylelint.io/user-guide/rules/value-list-comma-space-after/): There must always be a single space after the commas in single-line value lists.
* [value-list-comma-space-before](http://stylelint.io/user-guide/rules/value-list-comma-space-before/): There must never be whitespace before the commas.

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)
