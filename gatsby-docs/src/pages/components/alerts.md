---
title: Alerts
path: components/alerts
status: Stable
source: 'https://github.com/primer/css/tree/master/src/alerts'
bundle: alerts
---

Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Default

Flash messages start off looking decently neutral—they're just light blue rounded rectangles.

```html live
<div class="flash">
  Flash message goes here.
</div>
```

You can put multiple paragraphs of text in a flash message—the last paragraph's bottom `margin` will be automatically override.

```html live
<div class="flash">
  <p>
    This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more
    text, it'll eventually wrap to a new line.
  </p>
  <p>And this is another paragraph.</p>
</div>
```

Should the need arise, you can quickly space out your flash message from surrounding content with a `.flash-messages` wrapper. _Note the extra top and bottom margin in the example below._

```html live
<div class="flash-messages">
  <div class="flash">
    Flash message goes here.
  </div>
</div>
```

## Variations

Add `.flash-warn`, `.flash-error`, or `.flash-success` to the flash message to make it yellow, red, or green, respectively.

```html live
<div class="flash flash-warn">
  Flash message goes here.
</div>
```

```html live
<div class="flash flash-error">
  Flash message goes here.
</div>
```

```html live
<div class="flash flash-success">
  Flash message goes here.
</div>
```

## With icon

Add an icon to the left of the flash message to give it some funky fresh attention.

```jsx live
<div class="flash">
  {/* <%= octicon "alert" %> */}
  <StyledOcticon icon={getIconByName('alert')} mr={2} />
  Flash message with an icon goes here.
</div>
```

## With dismiss

Add a JavaScript enabled (via Crema) dismiss (close) icon on the right of any flash message.

```jsx live
<div class="flash">
  <button class="flash-close js-flash-close" type="button">
    {/* <%= octicon "x", :"aria-label" => "Close" %> */}
    <Octicon icon={getIconByName('x')} aria-label="Close" />
  </button>
  Dismissable flash message goes here.
</div>
```

## With action button

A flash message with an action button.

```html live
<div class="flash">
  <button type="submit" class="btn btn-sm primary flash-action">Complete action</button>
  Flash message with action here.
</div>
```

## Full width flash

A flash message that is full width and removes border and border radius.

```html live
<div class="flash flash-full">
  <div class="container">
    Full width flash message.
  </div>
</div>
```
