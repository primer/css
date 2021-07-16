---
title: Theming
path: getting-started/theming
---

Primer CSS offers multiple color themes for components and utilities. The colors change based on the active theme and color mode.

Currently there are 3 themes (`light`, `dark`, `dark_dimmed`) to choose from. When nothing is specified, Primer CSS uses the `light` theme.

## Set a theme

Configure Primer CSS to use a certain theme by setting HTML attributes.

- **Light** theme: `data-color-mode="light" data-dark-theme="light"`
- **Dark** theme: `data-color-mode="dark" data-dark-theme="dark"`
- **Dark Dimmed** theme: `data-color-mode="dark" data-dark-theme="dark_dimmed"`

Typically these attributes are added to the document root (`<html>`) to use on the entire page:

```html
<html data-color-mode="dark" data-dark-theme="dark_dimmed">
```

Below an example of all themes to compare:

```html live
<div data-color-mode="light" data-light-theme="light" class="p-3">
  <h4>Light</h4>
  <code class="d-block mt-1 mb-3 color-text-secondary">
    data-color-mode="light" data-light-theme="light"
  </code>
  <button class="btn">Button</button>
  <span class="Label ml-2">Label</span>
  <span class="Counter ml-2">123</span>
</div>
<div data-color-mode="dark" data-dark-theme="dark" class="p-3">
  <h4>Dark</h4>
  <code class="d-block mt-1 mb-3 color-text-secondary">
    data-color-mode="dark" data-dark-theme="dark"
  </code>
  <button class="btn">Button</button>
  <span class="Label ml-2">Label</span>
  <span class="Counter ml-2">123</span>
</div>
<div data-color-mode="dark" data-dark-theme="dark_dimmed" class="p-3">
  <h4>Dark Dimmed</h4>
  <code class="d-block mt-1 mb-3 color-text-secondary">
    data-color-mode="dark" data-dark-theme="dark_dimmed"
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
  <code class="d-block mt-1 mb-3 color-text-secondary">
    data-color-mode="auto" data-light-theme="light" data-dark-theme="dark_dimmed"
  </code>
  <button class="btn">Button</button>
  <span class="Label ml-2">Label</span>
  <span class="Counter ml-2">123</span>
</div>
```

Change the color mode of your OS to see the switch between the `data-light-theme="light"` and `data-dark-theme="dark_dimmed"`.

## Custom color variables

It's recommended to use the [functional variables](/support/color-system#functional-variables) as much as possible. It will guarantee that the variables will work as expected with any new theme that might get added in the future. Somtimes you might still need a custom variable that changes based on the color mode. You can create a custom variable with the `color-variables` mixin.

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

If you tried using the [`scale` color variables](/support/color-system#color-variables) you might have noticed that they are not that useful with multiple color modes. That's because they stay light or dark in any color mode. As seen above, you could create custom variables that invert the scale like so:

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

In this case, the `auto` variables might come in handy.

```css
.my-class {
  color: var(--color-auto-gray-7);
}
```

The benefit of `auto` over the `scale` variables is that `auto` variables automatically get inverted in dark mode.

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

**Note**: If you use `stylelint`, the [`primer/no-scale-colors`](https://github.com/primer/stylelint-config-primer/tree/main/plugins#primerno-scale-colors) will fail with "[variable] is a non-functional scale color and cannot be used without being wrapped in the color-variables mixin". You can disable stylelint for this case by adding `// stylelint-disable-line`:

```css
.my-class {
  color: var(--color-auto-gray-7); // stylelint-disable-line
}
```

---

In general, 

1. use [functional variables](/support/color-system) as much as possible.
2. create new [custom color variables](/getting-started/theming#custom-color-variables) if there is no functional variable that fits the use case.
3. as an alternative to custom color variables, use [`auto` variables](/getting-started/theming#auto-variables) if the results give enough contrast.
