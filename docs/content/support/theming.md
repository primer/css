---
title: Theming
path: getting-started/theming
---

Primer CSS offers multiple color themes for components and utilities. The colors change based on the active theme and color mode. When nothing is specified, Primer CSS uses the `light` theme.

## Set a theme

Configure Primer CSS to use a certain theme by setting HTML attributes.

Theme | data attributes
--- | ---
Light | `data-color-mode="light" data-light-theme="light"`
Dark | `data-color-mode="dark" data-dark-theme="dark"`
Dark Dimmed | `data-color-mode="dark" data-dark-theme="dark_dimmed"`
Dark High Contrast | `data-color-mode="dark" data-dark-theme="dark_high_contrast"`

Typically these attributes are added to the document root (`<html>`) to use on the entire page:

```html
<html data-color-mode="dark" data-dark-theme="dark_dimmed">
```

Below an example of all themes to compare:

```html live
<div data-color-mode="light" data-light-theme="light" class="p-3">
  <h4>Light</h4>
  <code class="d-block mt-1 mb-3 color-fg-muted">
    data-color-mode="light" data-light-theme="light"
  </code>
  <button class="btn">Button</button>
  <span class="Label ml-2">Label</span>
  <span class="Counter ml-2">123</span>
</div>
<div data-color-mode="dark" data-dark-theme="dark" class="p-3">
  <h4>Dark</h4>
  <code class="d-block mt-1 mb-3 color-fg-muted">
    data-color-mode="dark" data-dark-theme="dark"
  </code>
  <button class="btn">Button</button>
  <span class="Label ml-2">Label</span>
  <span class="Counter ml-2">123</span>
</div>
<div data-color-mode="dark" data-dark-theme="dark_dimmed" class="p-3">
  <h4>Dark Dimmed</h4>
  <code class="d-block mt-1 mb-3 color-fg-muted">
    data-color-mode="dark" data-dark-theme="dark_dimmed"
  </code>
  <button class="btn">Button</button>
  <span class="Label ml-2">Label</span>
  <span class="Counter ml-2">123</span>
</div>
<div data-color-mode="dark" data-dark-theme="dark_high_contrast" class="p-3">
  <h4>Dark High Contrast</h4>
  <code class="d-block mt-1 mb-3 color-fg-muted">
    data-color-mode="dark" data-dark-theme="dark_high_contrast"
  </code>
  <button class="btn">Button</button>
  <span class="Label ml-2">Label</span>
  <span class="Counter ml-2">123</span>
</div>
```



## Sync to the system

If the theme should be synced to the OS's color mode, use `data-color-mode="auto"` and set a `data-light-theme` as well as a `data-dark-theme`.

```html live
<div data-color-mode="auto" data-light-theme="light" data-dark-theme="dark_dimmed" class="p-3">
  <h4>Synced to system</h4>
  <code class="d-block mt-1 mb-3 color-fg-muted">
    data-color-mode="auto" data-light-theme="light" data-dark-theme="dark_dimmed"
  </code>
  <button class="btn">Button</button>
  <span class="Label ml-2">Label</span>
  <span class="Counter ml-2">123</span>
</div>
```

Change the color mode of your OS to see the switch between the `data-light-theme="light"` and `data-dark-theme="dark_dimmed"`.

## Custom color variables

It's recommended to use the [functional variables](https://primer.style/primitives/colors#functional-variables) as much as possible. It will guarantee that the variables will work as expected with any new theme that might get added in the future. Sometimes you might still need a custom variable that changes based on the color mode. You can create a custom variable with the `color-variables` mixin.

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
