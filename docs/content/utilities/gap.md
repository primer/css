---
title: Gap
path: utilities/gap
status: Stable
source: 'https://github.com/primer/css/blob/main/src/utilities/gap.scss'
bundle: utilities
---

Gap utilities can be used on elements with a display type of `flex` or `grid` to create consistent gaps between child elements. This can replace the need for using margins in many cases.

Gap utilities are based on a global [spacing scale](/support/spacing) which helps keep spacing consistent. These utilities help us reduce the amount of custom CSS that share the same properties, and allows to achieve many different page layouts using the same styles.


## Naming convention

Since gap utilities have many variations and will be used in many places, we use a shorthand naming convention to help keep class names succinct.

| Shorthand | Description |
| --- | --- |
| 0   | 0     |
| 1   | 4px   |
| 2   | 8px   |
| 3   | 16px  |
| 4   | 24px  |
| 5   | 32px  |
| 6   | 40px  |


## Reset gap
Reset gap values built into components with `gap-0`.


## Responsive gaps

All gap utilities can be adjusted per [breakpoint](/utilities/grid#breakpoints) using the following formula: `gap-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.
