---
title: Colors
description: 'Immutable, atomic CSS classes to rapidly build product'
status: Stable
package:
  name: primer-utilities
source: 'https://github.com/primer/primer/tree/master/modules/primer-utilities/lib/colors.scss'
status_issue: 'https://github.com/github/design-systems/issues/97'
---

import colors from 'primer-colors'
import {Box} from '@primer/components'
const Swatch = props => <Box mt={2} height={60} {...props} />

Use color utilities to apply color to the background of elements, text, and borders.

* [Background colors](#background-colors)
* [Text colors](#text-colors)
* [Link colors](#link-colors)
* [Border colors](#border-colors)

## Background colors

Background colors are most commonly used for filling large blocks of content or areas with a color. When selecting a background color, make sure the foreground color contrast passes a minimum WCAG accessibility rating of [level AA](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). Meeting these standards ensures that content is accessible by everyone, regardless of disability or user device. You can [check your color combination with this demo site](http://jxnblk.com/colorable/demos/text/). For more information, read our [accessibility standards](/primer/principles/accessibility).

### Gray

<div class="container-lg clearfix mb-4">
  <div class="col-3 float-left pr-4">
    <div class="h4">.bg-gray</div>
    <code>{colors.gray[1]}, $bg-gray</code>
    <Swatch className="bg-gray" />
  </div>
  <div class="col-9 float-left">
    <div class="container-lg clearfix">
      <div class="col-6 float-left">
        <div class="h4">.bg-gray-dark</div>
        <code>{colors.gray[9]}, $bg-gray-dark</code>
        <Swatch className="bg-gray-dark border-right-0" />
      </div>
      <div class="col-6 float-left">
        <div class="h4">.bg-gray-light</div>
        <code>{colors.gray[0]}, $bg-gray-light</code>
        <Swatch className="bg-gray-light" />
      </div>
    </div>
  </div>
</div>

### Blue

<div class="container-lg clearfix mb-4">
  <div class="col-3 float-left pr-4">
    <div class="h4">.bg-blue</div>
    <code>{colors.blue[5]}, $bg-blue</code>
    <Swatch className="bg-blue" />
  </div>
  <div class="col-9 float-left">
    <div class="container-lg clearfix">
      <div class="h4">.bg-blue-light</div>
      <code>{colors.blue[0]}, $bg-blue-light</code>
      <Swatch className="bg-blue-light" />
    </div>
  </div>
</div>

### Yellow

<div class="container-lg clearfix mb-4">
  <div class="col-3 float-left pr-4">
    <div class="h4">.bg-yellow</div>
    <code>{colors.yellow[5]}, $bg-yellow</code>
    <Swatch className="bg-yellow" />
  </div>
  <div class="col-9 float-left">
    <div class="container-lg clearfix">
      <div class="h4">.bg-yellow-light</div>
      <code>{colors.yellow[2]}, $bg-yellow-light</code>
      <Swatch className="bg-yellow-light" />
    </div>
  </div>
</div>

### Red

<div class="container-lg clearfix mb-4">
  <div class="col-3 float-left pr-4">
    <div class="h4">.bg-red</div>
    <code>{colors.red[5]}, $bg-red</code>
    <Swatch className="bg-red" />
  </div>
  <div class="col-9 float-left">
    <div class="container-lg clearfix">
      <div class="h4">.bg-red-light</div>
      <code>{colors.red[1]}, $bg-red-light</code>
      <Swatch className="bg-red-light" />
    </div>
  </div>
</div>

### Green

<div class="container-lg clearfix mb-4">
  <div class="col-3 float-left pr-4">
    <div class="h4">.bg-green</div>
    <code>{colors.green[5]}, $bg-green</code>
    <Swatch className="bg-green" />
  </div>
  <div class="col-9 float-left">
    <div class="container-lg clearfix">
      <div class="h4">.bg-green-light</div>
      <code>{colors.green[1]}, $bg-green-light</code>
      <Swatch className="bg-green-light" />
    </div>
  </div>
</div>


### Purple

<div class="container-lg clearfix mb-4">
  <div class="col-3 float-left pr-4">
    <div class="h4">.bg-purple</div>
    <code>{colors.purple[5]}, $bg-purple</code>
    <Swatch className="bg-purple" />
  </div>
  <div class="col-9 float-left">
    <div class="container-lg clearfix">
      <div class="h4">.bg-purple-light</div>
      <code>{colors.purple[0]}, $bg-purple-light</code>
      <Swatch className="bg-purple-light" />
    </div>
  </div>
</div>

## Text colors

Use text color utilities to set text or [octicons](/styleguide/css/styles/core/components/octicons) to a specific color. Color contrast must pass a minimum WCAG accessibility rating of [level AA](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). This ensures that viewers who cannot see the full color spectrum are able to read the text. To customize outside of the suggested combinations below, we recommend using this [color contrast testing tool](http://jxnblk.com/colorable/demos/text/). For more information, read our [accessibility standards](/primer/principles/accessibility).

These are our most common text with background color combinations. They don't all pass accessibility standards currently, but will be updated in the future. **Any of the combinations with a warning icon must be used with caution**.

### Text color inheritance

You can set the color inheritance on an element by using the `text-inherit` class.

```html
<div class="text-purple">
  This text is purple, <a href="#" class="text-inherit">including the link</a>
</div>
```

### Text on white background

```html
<div class="text-blue mb-2">
  .text-blue on white
</div>
<div class="text-gray-dark mb-2">
  .text-gray-dark on white
</div>
<div class="text-gray mb-2">
  .text-gray on white
</div>
<div class="text-red mb-2">
  .text-red on white
</div>
<div class="text-orange mb-2">
  .text-orange on white
</div>
<span class="float-left text-red tooltipped tooltipped-n" aria-label="Does not meet accessibility standards"><%= octicon("alert") %></span>
<div class="text-orange-light mb-2">
  .text-orange-light on white
</div>
<span class="float-left text-red tooltipped tooltipped-n" aria-label="Does not meet accessibility standards"><%= octicon("alert") %></span>
<div class="text-green mb-2 ml-4">
  .text-green on white
</div>
<div class="text-purple mb-2">
  .text-purple on white
</div>
```

### Text on colored backgrounds

```html
<div class="text-white bg-blue mb-2">
  .text-white on .bg-blue
</div>
<div class="bg-blue-light mb-2">
  .text-gray-dark on .bg-blue-light
</div>
<div class="text-white bg-red mb-2">
  .text-white on .bg-red
</div>
<div class="text-red bg-red-light mb-2">
  .text-red on .bg-red-light
</div>
<div class="bg-green-light mb-2">
  .text-gray-dark on .bg-green-light
</div>
<div class="bg-yellow mb-2">
  .text-gray-dark on .bg-yellow
</div>
<div class="bg-yellow-light mb-2">
  .text-gray-dark on .bg-yellow-light
</div>
<div class="text-white bg-purple mb-2">
  .text-white on .bg-purple
</div>
<div class="text-white bg-gray-dark mb-2">
  .text-white on .bg-gray-dark
</div>
<div class="bg-gray">
  .text-gray-dark on .bg-gray
</div>
```

## Link colors

Base link styles turn links blue and apply an underline on hover. You can override the base link styles with text color utilities and the following link utilities. **Bear in mind that link styles are easier for more people to see and interact with when the changes in styles do not rely on color alone.**

Use `link-gray` to turn the link color to `$text-gray` and remain hover on blue.

```html
<a class="link-gray" href="#url">link-gray</a>
```

Use `link-gray-dark` to turn the link color to `$text-gray-dark` and remain hover on blue.

```html
<a class="link-gray-dark"  href="#url">link-gray-dark</a>
```

Use `.muted-link` to turn the link light gray in color, and blue on hover or focus with no underline.

```html
<a class="muted-link" href="#url">muted-link</a>
```

Use `link-hover-blue` to make any text color used with links to turn blue on hover. This is useful when you want only part of a link to turn blue on hover.

```html
<a class="text-gray-dark no-underline" href="#url">
  A link with only part of it is <span class="link-hover-blue">blue on hover</span>.
</a>
```

## Border colors

Border colors are documented on the [border utilities page](../../utilities/borders#border-width-style-and-color-utilities).
