# Primer Popover

[![npm version](https://img.shields.io/npm/v/primer-popover.svg)](https://www.npmjs.org/package/primer-popover)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Popover for suggesting, guiding, and bringing attention to specific UI elements on a page.

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-popover` with this command.

```
$ npm install --save primer-popover
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-popover/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Documentation

<!-- %docs
title: Popover
path: components/popover
status: Experimental
-->

Popovers are used to bring attention to specific user interface elements, typically to suggest an action or to guide users through a new experience.

{:toc}

A popover consist of:

- The block element, `.Popover`, which simply positions its content absolutely atop other body content.
- The child element, `.Popover-message`, which contains the markup for the intended messaging and the visual "caret."

In the examples below, `Popover-message`, in particular, uses a handful of utility classes to style it appropriately. And these are intended to demonstrate the default, go-to presentation for the popover's message. By default, the message's caret is centered on the top edge of the message.

The `Popover-message` element also supports several modifiers, most of which position the caret differently:

- [`.Popover-message--top`](#default-top-center) (default): Places the caret on the top edge of the message, horizontally centered.
- [`.Popover-message--bottom`](#bottom) Places the caret on the bottom edge of the message, horizontally centered.
- [`.Popover-message--right`](#right): Places the caret on the right edge of the message, vertically centered.
- [`.Popover-message--left`](#left): Places the caret on the left edge of the message, vertically centered.

Each of these modifiers also support a syntax for adjusting the positioning the caret to the right, left, top, or bottom of its respective edge. That syntax looks like:

- [`.Popover-message--bottom-left`](#bottom-left)
- [`.Popover-message--bottom-right`](#bottom-right)
- [`.Popover-message--left-bottom`](#left-bottom)
- [`.Popover-message--left-top`](#left-top)
- [`.Popover-message--right-bottom`](#right-bottom)
- [`.Popover-message--right-top`](#right-top)
- [`.Popover-message--top-left`](#top-left)
- [`.Popover-message--top-right`](#top-right)

Lastly, there is an added [`.Popover-message--large`](#large) modifier, which assumes a slightly wider popover message on screens wider than 544px.

### Notes

The samples below include optional markup, like:
- An outermost container that establishes stacking context (e.g. `position-relative`).
- A choice piece of user interface (a button, in this case) to relate the popover to.
- Use of the `Details` and `js-details` family of class names, which interact with JavaScript to demonstrate dismissal of the popover by clicking the nested "Got it!" button.

### Basic example
Defaults to caret oriented top-center.

```html title="Default (top-center)"
<div class="position-relative text-center">
  <button class="btn btn-primary">UI</button>
  <div class="Popover right-0 left-0">
    <div class="Popover-message text-left p-4 mt-2 mx-auto Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

### Large example

```html title="Large"
<div class="position-relative text-center">
  <button class="btn btn-primary">UI</button>
  <div class="Popover right-0 left-0">
    <div class="Popover-message Popover-message--large text-left p-4 mt-2 Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

### Bottom

```html title="Bottom"
<div class="position-relative text-center">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--bottom p-4 mx-auto mb-2 text-left Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

### Bottom-right

```html title="Bottom-right"
<div class="position-relative text-right">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--bottom-right p-4 mb-2 text-left Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

### Bottom-left

```html title="Bottom-left"
<div class="Popover position-relative">
  <div class="Popover-message Popover-message--bottom-left p-4 mb-2 Box box-shadow-large">
    <h4 class="mb-2">Popover heading</h4>
    <p>Message about this particular piece of UI.</p>
    <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
  </div>
</div>
<button class="btn btn-primary">UI</button>
```

### Left

```html title="Left"
<div class="d-flex flex-justify-center flex-items-center">
  <button class="btn btn-primary">UI</button>
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--left p-4 ml-2 Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

### Left-bottom

```html title="Left-bottom"
<div class="d-flex flex-justify-center flex-items-end">
  <button class="btn btn-primary">UI</button>
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--left-bottom p-4 ml-2 Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

### Left-top

```html title="Left-top"
<div class="d-flex flex-justify-center flex-items-start">
  <button class="btn btn-primary">UI</button>
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--left-top p-4 ml-2 Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

### Right

```html title="Right"
<div class="d-flex flex-justify-center flex-items-center">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--right p-4 mr-2 Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

### Right-bottom

```html title="Right-bottom"
<div class="d-flex flex-justify-center flex-items-end">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--right-bottom p-4 mr-2 Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

### Right-top

```html title="Right-top"
<div class="d-flex flex-justify-center flex-items-start">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--right-top p-4 mr-2 Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

### Top-left

```html title="Top-left"
<div class="position-relative">
  <button class="btn btn-primary">UI</button>
  <div class="Popover">
    <div class="Popover-message Popover-message--top-left p-4 mt-2 Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

### Top-right

```html title="Top-right"
<div class="position-relative text-right">
  <button class="btn btn-primary">UI</button>
  <div class="Popover right-0">
    <div class="Popover-message Popover-message--top-right text-left p-4 mt-2 Box box-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
