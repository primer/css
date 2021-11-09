---
title: Layout
path: components/layout
status: Alpha
source: 'https://github.com/primer/css/tree/main/src/layout/layout.scss'
bundle: layout
---


Build responsive-friendly page layouts with 2 columns.

Use with .container-xx classes to limit the overall layout structure size.

## Elements

- `Layout-main`
- `Layout-sidebar`
- `Layout-divider`
- `Layout-main-centered-md`
- `Layout-main-centered-lg`
- `Layout-main-centered-xl`

Use `Layout-main-centered-xx` to wrap `container-xx` elements inside
`Layout-main` so the content remains centered on the screen regardless
of the sidebar position.

## Default

```html live
<div class="Layout">
  <div class="Layout-main border">
    .Layout-main
  </div>

  <div class="Layout-sidebar border">
    .Layout-sidebar
  </div>
</div>
```

### Dividers

Use `Layout--divided` in conjunction with a `Layout-divider` to show a divider between the main content and the sidebar.
Flowing as row:
- default: shows a `1px` line between main and sidebar
- `Layout-divider--flowRow-shallow`: shows a filled `8px` divider.
- `Layout-divider--flowRow-hidden`: hides the divider


```html live
<div class="Layout Layout--divided">
  <div class="Layout-main border">main content</div>
  <div class="Layout-divider"></div>
  <div class="Layout-sidebar border">divider shown</div>
</div>
<div class="Layout">
  <div class="Layout-main border">main content</div>
  <div class="Layout-divider"></div>
  <div class="Layout-sidebar border">divider hidden</div>
</div>
<div class="Layout Layout--divided">
  <div class="Layout-main border">main content</div>
  <div class="Layout-divider Layout-divider--flowRow-shallow"></div>
  <div class="Layout-sidebar border">flowRow shallow divider</div>
</div>
<div class="Layout Layout--divided">
  <div class="Layout-main border">main content</div>
  <div class="Layout-divider Layout-divider--flowRow-hidden"></div>
  <div class="Layout-sidebar border">flowRow hidden divider</div>
</div>
```

### Centered content

```html live
<div class="Layout">
  <div class="Layout-main border">
    <div class="Layout-main-centered-md">
      <div class="container-md border color-border-accent">
        centered md
      </div>
    </div>
  </div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
<div class="Layout">
  <div class="Layout-main border">
    <div class="Layout-main-centered-lg">
      <div class="container-lg border color-border-accent">
        centered lg
      </div>
    </div>
  </div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
<div class="Layout">
  <div class="Layout-main border">
    <div class="Layout-main-centered-xl">
      <div class="container-xl border color-border-accent">
        centered xl
      </div>
    </div>
  </div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
```

## Modifiers

### Sidebar sizing

- Default: [md: 256px, lg: 296px]
- `Layout--sidebar-narrow` [md: 240px, lg: 256px]
- `Layout--sidebar-wide` [md: 296px, lg: 320px, xl: 344px]

```html live
<div class="Layout Layout--sidebar-narrow">
  <div class="Layout-main border">
    Layout--sidebar-narrow
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
<div class="Layout Layout--sidebar-wide">
  <div class="Layout-main border">
    Layout--sidebar-wide
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
```

### Column gutter

- Default: [md: 16px, lg: 24px]
- `Layout--gutter-none`: 0px
- `Layout--gutter-condensed` 16px
- `Layout--gutter-spacious` [md: 16px, lg: 32px, xl: 40px]

```html live
<div class="Layout Layout--gutter-none">
  <div class="Layout-main border">
    Layout--gutter-none
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
<div class="Layout Layout--gutter-condensed">
  <div class="Layout-main border">
    Layout--gutter-condensed
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
<div class="Layout">
  <div class="Layout-main border">
    Default
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
<div class="Layout Layout--gutter-spacious">
  <div class="Layout-main border">
    Layout--gutter-spacious
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
```

### Sidebar positioning

- `Layout--sidebarPosition-start` (default): sidebar to the left
- `Layout--sidebarPosition-end`: sidebar to the right

```html live
<div class="Layout Layout--sidebarPosition-start">
  <div class="Layout-main border">main</div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
<div class="Layout Layout--sidebarPosition-end">
  <div class="Layout-main border">main</div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
```

### Sidebar positioning as rows

- `Layout--sidebarPosition-flowRow-start` (default): when stacked, render the sidebar first
- `Layout--sidebarPosition-flowRow-end`: when stacked, render the sidebar last
- `Layout--sidebarPosition-flowRow-none`: when stacked, hide the sidebar

```html live
<div class="Layout Layout--sidebarPosition-flowRow-start">
  <div class="Layout-main border">main</div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
<div class="Layout Layout--sidebarPosition-flowRow-end">
  <div class="Layout-main border">main</div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
<div class="Layout Layout--sidebarPosition-flowRow-none">
  <div class="Layout-main border">main</div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
```

### Layout stacking

- Default: stacks when container is `sm`.
- `Layout--flowRow-until-md`: stacks when container is `md`.
- `Layout--flowRow-until-lg`: stacks when container is `lg`.

```html live
<div class="Layout Layout--flowRow-until-md">
  <div class="Layout-main border">main</div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
<div class="Layout Layout--flowRow-until-lg">
  <div class="Layout-main border">main</div>
  <div class="Layout-sidebar border">sidebar</div>
</div>
```

### Nesting Layouts

It is possible to nest `Layout` components to generate 3-column layouts.

```html live
<div class="Layout">
  <div class="Layout-main ">
    <div class="Layout Layout--sidebarPosition-end Layout--sidebar-narrow">
      <div class="Layout-main border">main content</div>
      <div class="Layout-sidebar border">metadata sidebar</div>
    </div>
  </div>
  <div class="Layout-sidebar border">default sidebar</div>
</div>
<div class="Layout">
  <div class="Layout-main ">
    <div class="Layout Layout--sidebarPosition-end Layout--flowRow-until-lg Layout--sidebar-narrow">
      <div class="Layout-main border">main content</div>
      <div class="Layout-sidebar border">metadata sidebar</div>
    </div>
  </div>
  <div class="Layout-sidebar border">default sidebar</div>
</div>
```

## Accessibility and keyboard navigation

Keyboard navigation follows the markup order. Decide carefully how the
focus order should be be by deciding whether `Layout-main` or `Layout-sidebar`
comes first in code. The code order won’t affect the visual position.
