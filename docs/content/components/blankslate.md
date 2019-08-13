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

```html live
<div class="blankslate">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

#### With Octicons

When it helps the message, include (relevant) icons in your blank slate. Add `.blankslate-icon` to any `.mega-octicon`s as the first elements in the blankslate, like so.

```jsx live
<div class="blankslate">
  {/* <%= octicon "git-commit", :height => 32, :class => "blankslate-icon" %> */}
  <StyledOcticon icon={getIconByName('git-commit')} size={32} class="blankslate-icon" />
  {/* <%= octicon "tag", :height => 32, :class => "blankslate-icon" %> */}
  <StyledOcticon icon={getIconByName('tag')} size={32} class="blankslate-icon" />
  {/* <%= octicon "git-branch", :height => 32, :class => "blankslate-icon" %> */}
  <StyledOcticon icon={getIconByName('git-branch')} size={32} class="blankslate-icon" />
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

#### Variations

Add an additional optional class to the `.blankslate` to change its appearance.

##### Narrow

Narrows the blankslate container to not occupy the entire available width.

```html live
<div class="blankslate blankslate-narrow">
  <<<<<<< HEAD:docs/content/components/blankslate.md
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

##### Capped

Removes the `border-radius` on the top corners.

```html live
<div class="blankslate blankslate-capped">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

##### Spacious

Significantly increases the vertical padding.

```html live
<div class="blankslate blankslate-spacious">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

##### Large

Increases the size of the text in the blankslate

```html live
<div class="blankslate blankslate-large">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

##### Add border

To add a border, wrap the blankstate component with the [Box component](/css/components/box).

```html
<div class="Box">
  <div class="blankslate">
    <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
    <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
    <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
    <button class="btn btn-primary my-3" type="button">New pull request</button>
    <p><button class="btn-link" type="button">Learn more</button></p>
  </div>
</div>
```

##### Capped

Removes the `border-radius` on the top corners.

```html
<div class="Box rounded-top-0">
  <div class="blankslate">
    <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
    <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
    <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
    <button class="btn btn-primary my-3" type="button">New pull request</button>
    <p><button class="btn-link" type="button">Learn more</button></p>
  </div>
</div>
```
