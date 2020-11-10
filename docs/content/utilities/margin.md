---
title: Margin
path: utilities/margin
status: Stable
source: 'https://github.com/primer/css/blob/master/src/utilities/margin.scss'
bundle: utilities
---

Margin utilities are based on a global [spacing scale](/support/spacing) which helps keep horizontal and vertical spacing consistent. These utilities help us reduce the amount of custom CSS that share the same properties, and allows to achieve many different page layouts using the same styles.



## Naming convention

Since margin utilities have many variations and will be used in many places, we use a shorthand naming convention to help keep class names succinct.


| Shorthand | Description |
| --- | --- |
| m | margin |
| t | top |
| r | right |
| b | bottom |
| l | left |
| x | horizontal, left & right |
| y | vertical, top & bottom |
| 0 | 0 |
| 1 | 4px |
| 2 | 8px |
| 3 | 16px |
| 4 | 24px |
| 5 | 32px |
| 6 | 40px |


## Uniform margins

Use uniform spacing utilities to apply equal margin to all sides of an element. These utilities can change or override default margins, and can be used with a spacing scale from 0-6.

```html live
<div class="d-flex flex-items-baseline flex-justify-around">
  <div class="bg-yellow"><div class="m-0 p-1 bg-gray">.m-0</div></div>
  <div class="bg-yellow"><div class="m-1 p-1 bg-gray">.m-1</div></div>
  <div class="bg-yellow"><div class="m-2 p-1 bg-gray">.m-2</div></div>
  <div class="bg-yellow"><div class="m-3 p-1 bg-gray">.m-3</div></div>
  <div class="bg-yellow"><div class="m-4 p-1 bg-gray">.m-4</div></div>
  <div class="bg-yellow"><div class="m-5 p-1 bg-gray">.m-5</div></div>
  <div class="bg-yellow"><div class="m-6 p-1 bg-gray">.m-6</div></div>
</div>
```

## Directional margins

Use directional utilities to apply margin to an individual side, or the X and Y axis of an element. Directional utilities can change or override default margins, and can be used with a spacing scale of 0-6.

```html live
<div class="d-flex flex-items-baseline flex-justify-around">
  <div class="bg-yellow"><div class="mt-3 p-1 bg-gray">.mt-3</div></div>
  <div class="bg-yellow"><div class="mr-3 p-1 bg-gray">.mr-3</div></div>
  <div class="bg-yellow"><div class="mb-3 p-1 bg-gray">.mb-3</div></div>
  <div class="bg-yellow"><div class="ml-3 p-1 bg-gray">.ml-3</div></div>
  <div class="bg-yellow"><div class="mx-3 p-1 bg-gray">.mx-3</div></div>
  <div class="bg-yellow"><div class="my-3 p-1 bg-gray">.my-3</div></div>
</div>
```

## Center elements

Use `mx-auto`to center block elements with a set width.

```html live
<div class="bg-yellow">
  <div class="mx-auto bg-gray text-center" style="max-width: 500px;">.mx-auto</div>
</div>
```

## Reset margins
Reset margins built into typography elements or other components with `m-0`, `mt-0`, `mr-0`, `mb-0`, `ml-0`, `mx-0`, and `my-0`.

```html live
<div class="bg-yellow border">
  <p class="mb-0 bg-gray p-1">No bottom margin on this paragraph.</p>
</div>
```

## Responsive margins

All margin utilities can be adjusted per [breakpoint](/objects/grid#breakpoints) using the following formula: `m[direction]-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.

```html live
<div class="bg-yellow d-inline-block">
  <div class="mx-sm-2 mx-md-4 bg-gray p-1">
    .mx-sm-2 .mx-md-4
  </div>
</div>
```

## Negative margins

You can add negative margins to the top, right, bottom, or left of an item by adding a negative margin utility. The formula for this is: `m[direction]-n[spacer]`. This also works responsively, with the following formula: `m[direction]-[breakpoint]-n[spacer]`.

```html live
<div class="d-flex flex-justify-center">
  <div class="bg-yellow">
    <div class="m-3 ml-n4 ml-md-n6 border-left border-red bg-gray p-2">
      .m-3 .ml-n4 .ml-md-n6
    </div>
  </div>
</div>
```
