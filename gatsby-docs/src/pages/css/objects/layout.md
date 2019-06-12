---
title: Layout
path: objects/layout
status: Deprecated
status_issue: 'https://github.com/github/design-systems/issues/59'
source: 'https://github.com/primer/css/tree/master/src/layout'
bundle: layout
---


Primer CSS's layout includes basic page containers and a single-tiered, fraction-based grid system. That sounds more complicated than it really is though—it's just containers, rows, and columns.

You can find all the below styles in `_layout.scss`.

#### Container

Center your page's contents with a `.container`.

```html title="Container"
<div class="container border">
  Container
</div>
```

The container applies `width: 980px;` and uses horizontal `margin`s to center it.

#### Grid

##### How it works

The grid is pretty standard—you create rows with `.columns` and individual columns with a column class and fraction class. Here's how it works:

- Add a `.container` to encapsulate everything and provide ample horizontal gutter space.
- Create your outer row to clear the floated columns with `<div class="columns">`.
- Add your columns with individual `<div class="column">`s.
- Add your fractional width classes to set the width of the columns (e.g., `.one-fourth`).

##### Demo

In practice, your columns will look like the example below.

```html title="Grid columns"
<div class="container">
  <div class="columns mb-1">
    <div class="one-fifth column block-blue p-3 border">
      .one-fifth
    </div>
    <div class="four-fifths column block-blue p-3 border">
      .four-fifths
    </div>
  </div>

  <div class="columns mb-1">
    <div class="one-fourth column block-blue p-3 border">
      .one-fourth
    </div>
    <div class="three-fourths column block-blue p-3 border">
      .three-fourths
    </div>
  </div>

  <div class="columns mb-1">
    <div class="one-third column block-blue p-3 border">
      .one-third
    </div>
    <div class="two-thirds column block-blue p-3 border">
      .two-thirds
    </div>
  </div>

  <div class="columns">
    <div class="one-half column block-blue p-3 border">
      .one-half
    </div>
    <div class="one-half column block-blue p-3 border">
      .one-half
    </div>
  </div>
</div>
```

##### Centered

Columns can be centered by adding `.centered` to the `.column` class.

```html title="Grid centered"
<div class="columns">
  <div class="one-half column centered block-blue border p-3">
    .one-half
  </div>
</div>
```
