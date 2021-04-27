---
title: Breakpoints
path: support/breakpoints
status: Stable
source: 'https://github.com/primer/css/blob/main/src/support/variables/layout.scss'
bundle: support
---

Our breakpoints are based on screen widths where our content starts to break. **Our breakpoints may change as we move more of the product into responsive layouts.**

We use abbreviations for each breakpoint to keep the class names concise. This abbreviated syntax is used consistently across responsive styles. Responsive styles allow you to change the styles properties at each breakpoint. For example, when using column widths for grid layouts, you can specify that the width is 12 columns wide by default, 8 columns from the medium breakpoint, and 4 columns wide from the extra large breakpoint: `<div class="col-12 col-md-8 col-xl-4">...</div>`.

| Breakpoint  | Syntax | Breaks at |
| ----------- | ------ | ----------|
| Small       | sm     | `544px`   |
| Medium      | md     | `768px`   |
| Large       | lg     | `1012px`  |
| Extra-large | xl     | `1280px`  |

Responsive styles are available for [margin](/utilities/margin#responsive-margins), [padding](/utilities/padding#responsive-padding), [layout](/utilities/layout), [flexbox](/utilities/flexbox#responsive-flex-utilities), the [grid](/objects/grid#responsive-grids) system, and many more.

## Breakpoint and up... 🛫

In most cases, breakpoints get used with the `min-width` media query. This means that when using a responsive utility class, the class becomes "enabled" from the breakpoint on upwards. Or from the browser's perspective, when the browser's width **is** the breakpoint or **wider**.

| Breakpoint  | Syntax | Is enabled...            |
| ----------- | ------ | -------------------------|
| None        |        | from `0px` upwards ->    |
| Small       | sm     | from `544px` upwards ->  |
| Medium      | md     | from `768px` upwards ->  |
| Large       | lg     | from `1012px` upwards -> |
| Extra-large | xl     | from `1280px` upwards -> |

A responsive utility class stays enabled **unless** it gets overridden with another responsive utility class that has a higher breakpoint. Here the example from above `<div class="col-12 col-md-8 col-xl-4">...</div>` visualized:

```
| 0px ->
         | 544px ->
         | sm
                    | 768px ->
                    | md
                               | 1012px ->
                               | lg
                                           | 1280px ->
                                           | xl

| col-12 ---------> | col-md-8 ----------> | col-xl-4 ->
```

Using breakpoints with the `min-width` media query works great for "mobile first". Design for mobile devices as a default, then if needed, tweak it for wider desktop screens using responsive utility classes.

Note: The [responsive hide](/utilities/layout#responsive-hide) utilities are an exception and use a range between two breakpoints. They also go the other direction "breakpoint and down... 🛬". For example `.hide-md` hides an element if the browser's width is between `sm <-> md` (`544px - 767px`).

## Breakpoint variables

The above values are defined as variables, and then put into a Sass map that generates the media query mixin.

```scss
// breakpoints
$width-xs: 0;
$width-sm: 544px;
$width-md: 768px;
$width-lg: 1012px;
$width-xl: 1280px;

$breakpoints: (
  // Small screen / phone
    sm: $width-sm,
  // Medium screen / tablet
    md: $width-md,
  // Large screen / desktop (980 + (12 * 2)) <= container + gutters
    lg: $width-lg,
  // Extra large screen / wide desktop
    xl: $width-xl
) !default;
```

## Media query mixins

Use media query mixins when you want to change CSS properties at a particular breakpoint. The media query mixin works by passing in a breakpoint value, such as `breakpoint(md)`.

Media queries are scoped from each breakpoint and upwards. In the example below, the font size is `28px` until the viewport size meets the `md` breakpoint, from there upwards—including through the `xl` breakpoint—the font size will be `32px`.

```scss
.styles {
  font-size: 28px;
  @include breakpoint(md) {
    font-size: 32px;
  }
}
```

## Responsive variants

The `$responsive-variants` variable is a mapping of breakpoints to classname variants, and should be used like so:

```scss
@each $breakpoint, $variant in $responsive-variants {
  @include breakpoint($breakpoint) {
    // Note: the first iteration gets `$variant == ""`
    .overflow#{$variant}-auto {
      overflow: auto;
    }
  }
}
```

The resulting CSS would be:

```css
.overflow-auto {
  overflow: auto;
}
@media (min-width: 544px) {
  .overflow-sm-auto {
    overflow: auto;
  }
}
@media (min-width: 768px) {
  .overflow-md-auto {
    overflow: auto;
  }
}
@media (min-width: 1012px) {
  .overflow-lg-auto {
    overflow: auto;
  }
}
@media (min-width: 1280px) {
  .overflow-xl-auto {
    overflow: auto;
  }
}
```

**Caution!**

1. Don't precede the `#{$variation}` interpolation with a hyphen because the first value of `$variant` will be an empty string.
1. For consistency, please put the `@include breakpoint($breakpoint)` call directly inside the `$responsive-variants` loop. This will help keep file sizes small by "batching" selectors in shared `@media` queries.
