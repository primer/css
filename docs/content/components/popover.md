---
title: Popover
path: components/popover
status: Alpha
source: 'https://github.com/primer/css/tree/main/src/popover'
storybook: 'https://primer.style/css/storybook/?path=/story/components-popover--playground'
bundle: popover
---


Popovers are used to bring attention to specific user interface elements, typically to suggest an action or to guide users through a new experience.

| Class | Description |
| :- | :- |
| `Popover` | Block element, position absolute |
| `Popover-message` | Child element, content and caret |

In the examples below, `Popover-message`, in particular, uses a handful of utility classes to style it appropriately. And these are intended to demonstrate the default, go-to presentation for the popover's message. By default, the message's caret is centered on the top edge of the message.

The `Popover-message` element also supports several modifiers. By default, the caret is shown on the top edge of the message, horizontally centered. To change the caret's position, use one of the following modifiers.

### Variants

| Class | Description |
| :- | :- |
| `Popover-message--bottom` | Caret bottom |
| `Popover-message--right` | Caret right |
| `Popover-message--left` | Caret left |
| `Popover-message--bottom-left` | Caret bottom left |
| `Popover-message--bottom-right` | Caret bottom right |
| `Popover-message--left-bottom` | Caret left bottom |
| `Popover-message--left-top` | Caret left top |
| `Popover-message--right-bottom` | Caret right bottom |
| `Popover-message--right-top` | Caret right top |
| `Popover-message--top-left` | Caret top left |
| `Popover-message--top-right` | Caret top right |
| `Popover-message--large` | Larger width on screens wider than 544px |

### Notes

The samples below include optional markup, like:
- An outermost container that establishes stacking context (e.g. `position-relative`).
- A choice piece of user interface (a button, in this case) to relate the popover to.
- Use of the `Details` and `js-details` family of class names, which interact with JavaScript to demonstrate dismissal of the popover by clicking the nested "Got it!" button.

For screen sizes smaller than 767px, `Popover` will appear full-width and without a caret.

## Basic example
Defaults to caret oriented top-center.

```html live title="Default (top-center)"
<div class="position-relative text-center">
  <button class="btn btn-primary">UI</button>
  <div class="Popover right-0 left-0 position-relative">
    <div class="Popover-message text-left p-4 mt-2 mx-auto Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

## Large example

```html live title="Large"
<div class="position-relative text-center">
  <button class="btn btn-primary">UI</button>
  <div class="Popover right-0 left-0 position-relative">
    <div class="Popover-message Popover-message--large text-left p-4 mt-2 Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

## Bottom

```html live title="Bottom"
<div class="position-relative text-center">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--bottom p-4 mx-auto mb-2 text-left Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

## Bottom-right

```html live title="Bottom-right"
<div class="position-relative text-right pr-2">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--bottom-right p-4 mb-2 text-left Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

## Bottom-left

```html live title="Bottom-left"
<div class="Popover position-relative pl-2">
  <div class="Popover-message Popover-message--bottom-left p-4 mb-2 Box color-shadow-large">
    <h4 class="mb-2">Popover heading</h4>
    <p>Message about this particular piece of UI.</p>
    <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

## Left

```html live title="Left"
<div class="d-flex flex-justify-center flex-items-center">
  <button class="btn btn-primary">UI</button>
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--left p-4 ml-2 Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

## Left-bottom

```html live title="Left-bottom"
<div class="d-flex flex-justify-center flex-items-end">
  <button class="btn btn-primary">UI</button>
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--left-bottom p-4 ml-2 Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

## Left-top

```html live title="Left-top"
<div class="d-flex flex-justify-center flex-items-start">
  <button class="btn btn-primary">UI</button>
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--left-top p-4 ml-2 Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

## Right

```html live title="Right"
<div class="d-flex flex-justify-center flex-items-center">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--right p-4 mr-2 Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

## Right-bottom

```html live title="Right-bottom"
<div class="d-flex flex-justify-center flex-items-end">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--right-bottom p-4 mr-2 Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

## Right-top

```html live title="Right-top"
<div class="d-flex flex-justify-center flex-items-start">
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--right-top p-4 mr-2 Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
  <button class="btn btn-primary">UI</button>
</div>
```

## Top-left

```html live title="Top-left"
<div class="position-relative pl-2">
  <button class="btn btn-primary">UI</button>
  <div class="Popover position-relative">
    <div class="Popover-message Popover-message--top-left p-4 mt-2 Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```

## Top-right

```html live title="Top-right"
<div class="position-relative text-right pr-2">
  <button class="btn btn-primary">UI</button>
  <div class="Popover right-0 position-relative">
    <div class="Popover-message Popover-message--top-right text-left p-4 mt-2 Box color-shadow-large">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </div>
  </div>
</div>
```
