---
title: Spacing
path: support/spacing
status: Stable
source: 'https://github.com/primer/css/blob/main/src/support/variables/layout.scss'
bundle: support
---

import {Text} from '@primer/components'

## Spacing scale

The spacing scale is a **base-8** scale. We chose a base-8 scale because eight is a highly composable number (it can be divided and multiplied many times and result in whole numbers), yet allows spacing dense enough for GitHub's UI. The scale's exception is that it begins at 4px to allow smaller padding and margin for denser parts of the site, from there on it steps up consistently in equal values of `8px`.

| Variable    | Scale | Value |
| ----------- | ----- | ----- |
| `$spacer-0` | 0     | 0     |
| `$spacer-1` | 1     | 4px   |
| `$spacer-2` | 2     | 8px   |
| `$spacer-3` | 3     | 16px  |
| `$spacer-4` | 4     | 24px  |
| `$spacer-5` | 5     | 32px  |
| `$spacer-6` | 6     | 40px  |

These variables are encouraged to be used within components and custom CSS. The spacing scale is also used for [margin](/utilities/margin) and [padding](/utilities/padding) utilities.

### Extended spacing scale

These are primarily useful for achieving bigger vertical spacing between sections. This scale first steps up with `8px` for spacer 7, then steps in increments of `16px` from spacer 8 up to 12.

| Variable     | Scale | Value |
| ------------ |-------|-------|
| `$spacer-7`  | 7     | 48px  |
| `$spacer-8`  | 8     | 64px  |
| `$spacer-9`  | 9     | 80px  |
| `$spacer-10` | 10    | 96px  |
| `$spacer-11` | 11    | 112px |
| `$spacer-12` | 12    | 128px |

The extended spacing scale is used for [margin](/utilities/margin) and [padding](/utilities/padding) utilities along the Y-axis, as well as for single side spacing utilities (top, right, bottom, left).

## Em-based spacing

Ems are used for spacing within components such as buttons and form elements. We stick to common fractions for em values (and powers of 2 where possible) so that , in combination with typography and line-height, the total height lands on sensible numbers.

We aim for whole numbers, however, GitHub's body font-size is 14px which is difficult to work with, so we sometimes can't achieve a whole number. Less desirable values are highlighted in <Text color="red.5">red</Text> below.

| Variable       | Fraction | Y Padding (em) | Total height at 14px             | Total height at 16px |
| -------------- | -------- | -------------- | -------------------------------- | -------------------- |
| `$em-spacer-1` | 1/16     | .0625          | <Text color="red.5">22.75</Text> | 26                   |
| `$em-spacer-2` | 1/8      | .125           | <Text color="red.5">24.5</Text>  | 28                   |
| `$em-spacer-3` | 1/4      | .25            | 28                               | 32                   |
| `$em-spacer-4` | 3/8      | .375           | <Text color="red.5">31.5</Text>  | 36                   |
| `$em-spacer-5` | 1/2      | .5             | 35                               | 40                   |
| `$em-spacer-6` | 3/4      | .75            | 42                               | 48                   |

The variables listed above are preferred for use within components and custom CSS. To calculate values with other font-sizes or em values, we suggest using [Formula](https://jxnblk.github.io/formula/).
