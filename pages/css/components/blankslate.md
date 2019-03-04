---
title: Blankslate
path: components/blankslate
status: Stable
source: 'https://github.com/primer/css/tree/master/modules/blankslate/README.md'
bundle: blankslate
---


Blankslates are for when there is a lack of content within a page or section. Use them as placeholders to tell users why something isn't there. Be sure to provide an action to add content as well.

#### Basic example

Wrap some content in the outer `.blankslate` wrapper to give it the blankslate appearance.

```html
<div class="blankslate">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

#### With Octicons

When it helps the message, include (relevant) icons in your blank slate. Add `.blankslate-icon` to any `.mega-octicon`s as the first elements in the blankslate, like so.

```erb
<div class="blankslate">
  <%= octicon "git-commit", :height => 32, :class => "blankslate-icon" %>
  <%= octicon "tag", :height => 32, :class => "blankslate-icon" %>
  <%= octicon "git-branch", :height => 32, :class => "blankslate-icon" %>
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

#### Variations

Add an additional optional class to the `.blankslate` to change its appearance.

##### Narrow

Narrows the blankslate container to not occupy the entire available width.

```html
<div class="blankslate blankslate-narrow">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

##### Capped

Removes the `border-radius` on the top corners.

```html
<div class="blankslate blankslate-capped">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

##### Spacious

Significantly increases the vertical padding.

```html
<div class="blankslate blankslate-spacious">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

##### Large

Increases the size of the text in the blankslate

```html
<div class="blankslate blankslate-large">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

##### No background

Removes the `background-color` and `border`.

```html
<div class="blankslate blankslate-clean-background">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```
