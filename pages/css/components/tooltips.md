---
title: Tooltips
path: components/tooltips
status: Stable
source: 'https://github.com/primer/css/tree/master/src/tooltips'
bundle: tooltips
---


Add tooltips built entirely in CSS to nearly any element.

{:toc}

## Implementation and accessibility

Tooltips as a UI pattern should be our last resort for conveying information because it is hidden by default and often with zero or little visual indicator of its existence.

Before adding a tooltip, please consider: Is this information essential and necessary* Can the UI be made clearer? Can the information be shown on the page by default?

**Attention**: we use `aria-label` for tooltip contents, because it is crucial that they are accessible to screen reader users. However, `aria-label` **replaces** the text content of an element in screen readers, so only use `.tooltipped` on elements with no existing text content, or consider using `title` for supplemental information.

**Note:** Tooltip classes will conflict with Octicon styles, and as such, must be applied to the parent element instead of the icon.

## Tooltip direction
Specify the direction of a tooltip with north, south, east, and west directions:

- `.tooltipped-n`
- `.tooltipped-ne`
- `.tooltipped-e`
- `.tooltipped-se`
- `.tooltipped-s`
- `.tooltipped-sw`
- `.tooltipped-w`
- `.tooltipped-nw`


```html
<span class="tooltipped tooltipped-n border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the North side.">
  Tooltip North
</span>
<span class="tooltipped tooltipped-ne border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the North East side.">
  Tooltip North East
</span>
<span class="tooltipped tooltipped-e border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the East side.">
  Tooltip East
</span>
<span class="tooltipped tooltipped-se border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the South East side.">
  Tooltip South East
</span>
<span class="tooltipped tooltipped-s border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the South side.">
  Tooltip South
</span>
<span class="tooltipped tooltipped-sw border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the South West side.">
  Tooltip South West
</span>
<span class="tooltipped tooltipped-w border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the West side.">
  Tooltip West
</span>
<span class="tooltipped tooltipped-nw border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the North West side.">
  Tooltip North West
</span>
```

## Tooltip alignment
Align tooltips to the left or right of an element, combined with a directional class to specify north or south.

```html
<span class="tooltipped tooltipped-ne tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped NE and aligned left.">
  Tooltip North East align left 1
</span>
<span class="tooltipped tooltipped-ne tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped NE and aligned left.">
  Tooltip North East align left 2
</span>
<span class="tooltipped tooltipped-se tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped SW and aigned left.">
  Tooltip South East align left 1
</span>
<span class="tooltipped tooltipped-se tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped SW and aigned left.">
  Tooltip South East align left 2
</span>
<span class="tooltipped tooltipped-nw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped NW and aligned right.">
  Tooltip North West align right 1
</span>
<span class="tooltipped tooltipped-nw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped NW and aligned right.">
  Tooltip North West align right 2
</span>
<span class="tooltipped tooltipped-sw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped SE and aligned right.">
  Tooltip South West align right 1
</span>
<span class="tooltipped tooltipped-sw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left" aria-label="Tooltipped SE and aligned right.">
  Tooltip South West align right 2
</span>
```

## Tooltips with multiple lines
Use `.tooltipped-multiline` when you have long content. This style has some limitations: you cannot pre-format the text with newlines, and tooltips are limited to a max-width of `250px`.


```html
<span class="tooltipped tooltipped-multiline tooltipped-n border p-2" aria-label="This is the tooltip with multiple lines. This is the tooltip with multiple lines.">
  Tooltip with multiple lines
</span>
```

## Tooltips No Delay

By default the tooltips have a slight delay before appearing. This is to keep multiple tooltips in the UI from being distracting. There is a modifier class you can use to override this. `.tooltipped-no-delay`

```html
<span class="tooltipped tooltipped-n tooltipped-no-delay border p-2" aria-label="This is the tooltip on the no delay side.">
  Tooltip no delay
</span>
```

