---
title: Layout
path: components/layout
status: Experimental
source: 'https://github.com/primer/css/tree/main/src/layout/layout.scss'
bundle: layout
---


Build responsive-friendly page layouts with 2 columns.

Use with .container-xx classes to limit the overall layout structure size.

## Elements:

- `Layout-main`
- `Layout-sidebar`

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

- `Layout-center-container-md`
- `Layout-center-container-lg`
- `Layout-center-container-xl`

Use `Layout-center-container-xx` to wrap `container-xx` elements inside
`Layout-main` so the content remains centered on the screen regardless
of the sidebar position.


## Modifiers:

### Sidebar position on desktop/large screens

- `Layout--right-sidebar` (default)
- `Layout--left-sidebar`


### Sidebar position on mobile/small screens

- `Layout--main-priority` (default)
- `Layout--sidebar-priority`


### Sidebar sizing

- Default: [md: 256px, lg: 296px, xl: 320px]
- `Layout--sidebar-narrow` [md: 240px, lg: 256px, xl: 296px]
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

- Default: [md: 16px, lg: 24px, xl: 32px]
- `Layout--gutter-condensed` [md: 16px, lg: 16px, xl: 24px]
- `Layout--gutter-spacious` [md: 24px, lg: 32px, xl: 40px]

```html live
<div class="Layout Layout--gutter-condensed">
  <div class="Layout-main border">
    Layout--gutter-condensed
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
<div class="Layout container-xl">
  <div class="Layout-main border">
    main
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
<div class="Layout Layout--left-sidebar">
  <div class="Layout-main border">
    main
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
```

### Centered content

```html live
<div class="Layout Layout--left-sidebar">
  <div class="Layout-main">
    <div class="Layout-center-container-md">
      <div class="container-md border">
        main
      </div>
    </div>
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
<div class="Layout Layout--left-sidebar">
  <div class="Layout-main">
    <div class="Layout-center-container-lg">
      <div class="container-lg border">
        main
      </div>
    </div>
  </div>

  <div class="Layout-sidebar border">
    sidebar
  </div>
</div>
```

## Accessibility and keyboard navigation

Keyboard navigation follows the markup order. Decide carefully how the
focus order should be be by deciding whether `Layout-main` or `Layout-sidebar`
comes first in code. The code order won’t affect the visual position.
