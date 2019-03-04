---
title: Alerts
path: components/alerts
status: Stable
source: 'https://github.com/primer/css/tree/master/modules/alerts/README.md'
bundle: alerts
---


Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Default

Flash messages start off looking decently neutral—they're just light blue rounded rectangles.

```html
<div class="flash">
  Flash message goes here.
</div>
```

You can put multiple paragraphs of text in a flash message—the last paragraph's bottom `margin` will be automatically override.

```html
<div class="flash">
  <p>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</p>
  <p>And this is another paragraph.</p>
</div>
```

Should the need arise, you can quickly space out your flash message from surrounding content with a `.flash-messages` wrapper. *Note the extra top and bottom margin in the example below.*

```html
<div class="flash-messages">
  <div class="flash">
    Flash message goes here.
  </div>
</div>
```

## Variations

Add `.flash-warn`, `.flash-error`, or `.flash-success` to the flash message to make it yellow, red, or green, respectively.

```html
<div class="flash flash-warn">
  Flash message goes here.
</div>
```

```html
<div class="flash flash-error">
  Flash message goes here.
</div>
```

```html
<div class="flash flash-success">
  Flash message goes here.
</div>
```

## With icon

Add an icon to the left of the flash message to give it some funky fresh attention.

```erb
<div class="flash">
  <%= octicon "alert" %>
  Flash message with an icon goes here.
</div>
```

## With dismiss

Add a JavaScript enabled (via Crema) dismiss (close) icon on the right of any flash message.

```erb
<div class="flash">
  <button class="flash-close js-flash-close" type="button"><%= octicon "x", :"aria-label" => "Close" %></button>
  Dismissable flash message goes here.
</div>
```

## With action button

A flash message with an action button.

```html
<div class="flash">
  <button type="submit" class="btn btn-sm primary flash-action">Complete action</button>
  Flash message with action here.
</div>
```

## Full width flash

A flash message that is full width and removes border and border radius.

```html
<div class="flash flash-full">
  <div class="container">
    Full width flash message.
  </div>
</div>
```

