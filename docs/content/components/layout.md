---
title: Layout
path: components/layout
status: Experimental
source: 'https://github.com/primer/css/tree/main/src/layout/layout.scss'
bundle: layout
---

<!--

  Layout
  ======

  Build responsive-friendly page layouts with 2 columns.

  Use with .container-xx classes to limit the overall layout structure size.

  ## Elements:

  - `Layout-main`
  - `Layout-sidebar`

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


  ### Column gutter

  - Default: [md: 16px, lg: 24px, xl: 32px]
  - `Layout--gutter-condensed` [md: 16px, lg: 16px, xl: 24px]
  - `Layout--gutter-spacious` [md: 24px, lg: 32px, xl: 40px]

  ## Accessibility and keyboard navigation

  Keyboard navigation follows the markup order. Decide carefully how the
  focus order should be be by deciding whether `Layout-main` or `Layout-sidebar`
  comes first in code. The code order won’t affect the visual position.

-->

<h4>Default</h4>

<div class="Layout">
  <div class="Layout-main">
    main
  </div>

  <div class="Layout-sidebar">
    sidebar
  </div>
</div>

<hr>

<h4>Condensed gutter</h4>

<div class="Layout Layout--gutter-condensed">
  <div class="Layout-main">
    main
  </div>

  <div class="Layout-sidebar">
    sidebar
  </div>
</div>

<hr>

<h4>Spacious gutter</h4>

<div class="Layout Layout--gutter-spacious">
  <div class="Layout-main">
    main
  </div>

  <div class="Layout-sidebar">
    sidebar
  </div>
</div>

<hr>

<h4>Narrow sidebar</h4>

<div class="Layout Layout--sidebar-narrow">
  <div class="Layout-main">
    main
  </div>

  <div class="Layout-sidebar">
    sidebar
  </div>
</div>

<hr>

<h4>Wide sidebar</h4>

<div class="Layout Layout--sidebar-wide">
  <div class="Layout-main">
    main
  </div>

  <div class="Layout-sidebar">
    sidebar
  </div>
</div>

<hr>

<h4>Layout within container</h4>

<div class="Layout container-xl">
  <div class="Layout-main">
    main
  </div>

  <div class="Layout-sidebar">
    sidebar
  </div>
</div>

<hr>

<h4>Left-sidebar</h4>

<div class="Layout Layout--left-sidebar">
  <div class="Layout-main">
    main
  </div>

  <div class="Layout-sidebar">
    sidebar
  </div>
</div>

<hr>

<h4>Container-md centered on viewport</h4>

<div class="Layout Layout--left-sidebar">
  <div class="Layout-main">
    <div class="Layout-center-container-md">
      <div class="container-md">
        main
      </div>
    </div>
  </div>

  <div class="Layout-sidebar">
    sidebar
  </div>
</div>

<hr>

<h4>Container-lg centered on viewport</h4>

<div class="Layout Layout--left-sidebar">
  <div class="Layout-main">
    <div class="Layout-center-container-lg">
      <div class="container-lg">
        main
      </div>
    </div>
  </div>

  <div class="Layout-sidebar">
    sidebar
  </div>
</div>
