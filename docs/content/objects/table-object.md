---
title: Table object
path: objects/table-object
status: Deprecated
source: 'https://github.com/primer/css/tree/main/src/table-object'
bundle: table-object
---

The table object is a module for creating dynamically resizable elements that always sit on the same horizontal line (e.g., they never break to a new line). Using table styles in our CSS means it's cross browser friendly back to at least IE9.

Additional `margin` or `padding` may be required to properly space content.

```html live title="Table object"
<div class="TableObject">
  <div class="TableObject-item TableObject-item--primary">
    <input
      class="input-block form-control"
      type="text"
      placeholder="Long elastic input form"
      aria-label="Long elastic input form"
    />
  </div>
  <div class="TableObject-item">
    <button class="btn ml-2" type="button">Button</button>
  </div>
</div>
```
