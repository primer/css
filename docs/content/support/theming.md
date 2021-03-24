---
title: Theming
path: support/theming
status: New
bundle: support
---

Primer CSS offers multiple color themes for components and utilities. The colors change based on the active theme and color mode. Currently there are 3 themes to choose from:

1. `light`
2. `dark`
3. `dark_dimmed`

## Default theme

When nothing is specified, Primer CSS uses the `light` theme.

## Set a theme

To set a theme add a `data-color-mode` and `data-[light/dark]-theme` attribute. It can be any element but when used in an app, typically the data attributes are added to the document root (`<html>`):

```html
<html data-color-mode="dark" data-dark-theme="dark_dimmed">
```

```html live
<div data-color-mode="light" data-light-theme="light" class="p-3">
  <button class="btn">Button</button> in the light theme.
</div>
<div data-color-mode="dark" data-dark-theme="dark" class="p-3">
  <button class="btn">Button</button> in the dark theme.
</div>
<div data-color-mode="dark" data-dark-theme="dark_dimmed" class="p-3">
  <button class="btn">Button</button> in the dark dimmed theme.
</div>
```



## Sync to the system

If the theme should be synced to the OS's color mode, use `data-color-mode="auto"` and set a `data-light-theme` as well as a `data-dark-theme`. It will then switch between the `data-light-theme` and `data-dark-theme` whenever the OS changes color modes.

```html live
<div class="p-3"
  data-color-mode="auto"
  data-light-theme="light"
  data-dark-theme="dark"
>
  <button class="btn">Button</button> synced to the OS's color mode.
</div>
```

## Custom color variables

It's best to use the [functional variables](/support/color-system#functional-variables) as much as possible. But somtimes you might need a custom variable that changes based on the color mode. You can create a custom variable with the `color-variables` mixin.

```css
@include color-variables(
  ("custom-css-variable-1": (
    light: var(--color-scale-gray-3),
    dark: var(--color-scale-gray-5)
  ),
  "custom-css-variable-2": (
    light: var(--color-scale-gray-2),
    dark: var(--color-scale-gray-6)
  ),
  "custom-css-variable-3": (
    light: var(--color-scale-gray-2),
    dark: var(--color-scale-gray-6)
  )
));
```

The custom variables will be prefixed with `--color-` and can be used in the same way as other functional variables.

```css
.my-class {
  color: var(--color-custom-css-variable-1);
  background-color: var(--color-custom-css-variable-2);
  border-color: var(--color-custom-css-variable-2);
}
```

## Auto variables

Sometimes `auto` variables might come in handy. Since the [`scale` color variables](/support/color-system#color-variables) stay light or dark in any color mode, you might find yourself creating lots of custom variables that invert the scale like so:

```css
@include color-variables(
  ("custom-css-variable": (
    light: var(--color-scale-gray-7),
    dark: var(--color-scale-gray-2)
  )
));

.my-class {
  color: var(--color-custom-css-variable);
}
```

For this case, an `auto` variable can be used:

```css
.my-class {
  color: var(--color-auto-gray-7);
}
```


The color is automatically inverted in dark mode. 

```html live
<div data-color-mode="light" data-light-theme="light" class="p-3">
  <code style="color: var(--color-auto-gray-7)">--color-auto-gray-7</code>
  <code style="color: var(--color-scale-gray-7)">--color-scale-gray-7</code><br>
  <code style="color: var(--color-auto-blue-7)">--color-auto-blue-7</code>
  <code style="color: var(--color-scale-blue-7)">--color-scale-blue-7</code><br>
  <code style="color: var(--color-auto-green-7)">--color-auto-green-7</code>
  <code style="color: var(--color-scale-green-7)">--color-scale-green-7</code>
</div>
<div data-color-mode="dark" data-dark-theme="dark" class="p-3">
  <code style="color: var(--color-auto-gray-7)">--color-auto-gray-7</code>
  <code style="color: var(--color-scale-gray-7)">--color-scale-gray-7</code><br>
  <code style="color: var(--color-auto-blue-7)">--color-auto-blue-7</code>
  <code style="color: var(--color-scale-blue-7)">--color-scale-blue-7</code><br>
  <code style="color: var(--color-auto-green-7)">--color-auto-green-7</code>
  <code style="color: var(--color-scale-green-7)">--color-scale-green-7</code>
</div>
<div data-color-mode="dark" data-dark-theme="dark_dimmed" class="p-3">
  <code style="color: var(--color-auto-gray-7)">--color-auto-gray-7</code>
  <code style="color: var(--color-scale-gray-7)">--color-scale-gray-7</code><br>
  <code style="color: var(--color-auto-blue-7)">--color-auto-blue-7</code>
  <code style="color: var(--color-scale-blue-7)">--color-scale-blue-7</code><br>
  <code style="color: var(--color-auto-green-7)">--color-auto-green-7</code>
  <code style="color: var(--color-scale-green-7)">--color-scale-green-7</code>
</div>

<style>code { margin-right: 16px; }</style>
```

In general, use `auto` variables if the results give enough constrast or create custom variables for further fine tuning.
