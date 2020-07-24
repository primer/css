---
title: Blankslate
path: components/blankslate
status: Stable
source: 'https://github.com/primer/css/tree/master/src/blankslate'
bundle: blankslate
---

Blankslates are for when there is a lack of content within a page or section. Use them as placeholders to tell users why something isn't there. Be sure to provide an action to add content as well.

## Basic example

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

## With Octicons

When it helps the message, include (relevant) icons in your blank slate. Add `.blankslate-icon` to any `.mega-octicon`s as the first elements in the blankslate, like so.

```html live
<div class="blankslate">
  <!-- <%= octicon "rocket", :height = 24, :class => "blankslate-icon" %> -->
  <svg class="blankslate-icon octicon octicon-rocket" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M20.322.75a10.75 10.75 0 00-7.373 2.926l-1.304 1.23A23.743 23.743 0 0010.103 6.5H5.066a1.75 1.75 0 00-1.5.85l-2.71 4.514a.75.75 0 00.49 1.12l4.571.963c.039.049.082.096.129.14L8.04 15.96l1.872 1.994c.044.047.091.09.14.129l.963 4.572a.75.75 0 001.12.488l4.514-2.709a1.75 1.75 0 00.85-1.5v-5.038a23.741 23.741 0 001.596-1.542l1.228-1.304a10.75 10.75 0 002.925-7.374V2.499A1.75 1.75 0 0021.498.75h-1.177zM16 15.112c-.333.248-.672.487-1.018.718l-3.393 2.262.678 3.223 3.612-2.167a.25.25 0 00.121-.214v-3.822zm-10.092-2.7L8.17 9.017c.23-.346.47-.685.717-1.017H5.066a.25.25 0 00-.214.121l-2.167 3.612 3.223.679zm8.07-7.644a9.25 9.25 0 016.344-2.518h1.177a.25.25 0 01.25.25v1.176a9.25 9.25 0 01-2.517 6.346l-1.228 1.303a22.248 22.248 0 01-3.854 3.257l-3.288 2.192-1.743-1.858a.764.764 0 00-.034-.034l-1.859-1.744 2.193-3.29a22.248 22.248 0 013.255-3.851l1.304-1.23zM17.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-11 13c.9-.9.9-2.6 0-3.5-.9-.9-2.6-.9-3.5 0-1.209 1.209-1.445 3.901-1.49 4.743a.232.232 0 00.247.247c.842-.045 3.534-.281 4.743-1.49z"></path></svg>
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

## Variations

Add an additional optional class to the `.blankslate` to change its appearance.

### Narrow

Narrows the blankslate container to not occupy the entire available width.

```html live
<div class="blankslate blankslate-narrow">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

### Spacious

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

### Large

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

### Add border

To add a border, wrap the blankstate component with the [Box component](/components/box).

```html live
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

### Capped

Removes the `border-radius` on the top corners.

```html live
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
