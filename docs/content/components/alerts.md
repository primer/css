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

```html live
<div class="flash">
  <!-- <%= octicon "alert" %> -->
  <svg width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-alert mr-2" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
    />
  </svg>
  Flash message with an icon goes here.
</div>
```

## With dismiss

Add a JavaScript enabled (via Crema) dismiss (close) icon on the right of any flash message.

```html live
<div class="flash">
  <button class="flash-close js-flash-close" type="button">
    <!-- <%= octicon "x", :"aria-label" => "Close" %> -->
    <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-label="Close" role="img">
      <path
        fill-rule="evenodd"
        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
      />
    </svg>
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

## Flash banner

A flash message that is fixed positioned at the top of the page. Use for more global events where the content of the page is unknown.

```html live
<div class="ml-n3" style="min-height: 50px">
  <div class="flash flash-banner">
    Flash banner message.
  </div>
</div>
```
