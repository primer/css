---
title: Blankslate
path: components/blankslate
status: Stable
source: 'https://github.com/primer/css/tree/master/src/blankslate'
bundle: blankslate
---


Blankslates are for when there is a lack of content within a page or section. Use them as placeholders to tell users why something isn't there. Be sure to provide an action to add content as well.

#### Basic example

Wrap some content in the outer `.blankslate` wrapper to give it the blankslate appearance.

```html
<div class="blankslate">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3">
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before your changes are merged into the base branch.</p>
  <button class="btn btn-primary my-3">New pull request</button>
  <p><button class="btn-link">Learn more</button></p>
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
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3">
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before your changes are merged into the base branch.</p>
  <button class="btn btn-primary my-3">New pull request</button>
  <p><button class="btn-link">Learn more</button></p>
</div>
```

##### Capped

Removes the `border-radius` on the top corners.

```html
<div class="blankslate blankslate-capped">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3">
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before your changes are merged into the base branch.</p>
  <button class="btn btn-primary my-3">New pull request</button>
  <p><button class="btn-link">Learn more</button></p>
</div>
```

##### Spacious

Significantly increases the vertical padding.

```html
<div class="blankslate blankslate-spacious">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3">
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before your changes are merged into the base branch.</p>
  <button class="btn btn-primary my-3">New pull request</button>
  <p><button class="btn-link">Learn more</button></p>
</div>
```

##### Large

Increases the size of the text in the blankslate

```html
<div class="blankslate blankslate-large">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3">
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before your changes are merged into the base branch.</p>
  <button class="btn btn-primary my-3">New pull request</button>
  <p><button class="btn-link">Learn more</button></p>
</div>
```

##### No border

To remove the border, use the [border utliity](/css/utilities/borders) `.border-0`.

```html
<div class="blankslate border-0">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3">
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before your changes are merged into the base branch.</p>
  <button class="btn btn-primary my-3">New pull request</button>
  <p><button class="btn-link">Learn more</button></p>
</div>
```

Due to a design refresh of the blank slate component, we will be deprecating the use of `.blankslate-clean-background` which removes the `background-color` and `border`.

```html
<div class="blankslate blankslate-clean-background">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3">
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before your changes are merged into the base branch.</p>
  <button class="btn btn-primary my-3">New pull request</button>
  <p><button class="btn-link">Learn more</button></p>
</div>
```
