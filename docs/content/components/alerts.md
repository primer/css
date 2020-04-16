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

## Colors

Add `.flash-warn`, `.flash-error`, or `.flash-success` to the flash message to make it yellow, red, or green, respectively.

```html live
<div class="flash">
  Flash message goes here.
</div>

<div class="flash mt-3 flash-warn">
  Flash message goes here.
</div>

<div class="flash mt-3 flash-error">
  Flash message goes here.
</div>

<div class="flash mt-3 flash-success">
  Flash message goes here.
</div>
```

## With icon

Add an icon to the left of the flash message to give it some funky fresh attention.

```html live
<div class="flash">
  <!-- <%= octicon "info" %> -->
  <svg class="octicon octicon-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM6.5 7.75C6.5 7.33579 6.83579 7 7.25 7H8.25C8.66421 7 9 7.33579 9 7.75V10.5H9.25C9.66421 10.5 10 10.8358 10 11.25C10 11.6642 9.66421 12 9.25 12H7.25C6.83579 12 6.5 11.6642 6.5 11.25C6.5 10.8358 6.83579 10.5 7.25 10.5H7.5V8.5H7.25C6.83579 8.5 6.5 8.16421 6.5 7.75ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"></path></svg>
  Flash message with an icon
</div>

<div class="flash mt-3 flash-warn">
  <!-- <%= octicon "shield" %> -->
  <svg class="octicon octicon-shield" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46664 0.133062C7.81355 0.0220518 8.18645 0.0220524 8.53336 0.133063L13.7834 1.81306C14.5082 2.045 15 2.71878 15 3.4798V6.99985C15 8.5659 14.6808 10.1823 13.6968 11.682C12.7137 13.1805 11.1116 14.4946 8.66493 15.5367C8.24091 15.7173 7.75909 15.7173 7.33508 15.5367C4.88836 14.4946 3.28631 13.1805 2.3032 11.682C1.31923 10.1823 1 8.5659 1 6.99985V3.4798C1 2.71878 1.49183 2.045 2.21664 1.81306L7.46664 0.133062ZM8.07619 1.5617C8.02664 1.54584 7.97336 1.54584 7.92381 1.5617L2.67381 3.2417C2.57026 3.27483 2.5 3.37109 2.5 3.4798V6.99985C2.5 8.35818 2.77465 9.66618 3.55737 10.8592C4.34094 12.0535 5.67838 13.2007 7.92287 14.1567C7.97134 14.1773 8.02866 14.1773 8.07713 14.1567C10.3216 13.2007 11.6591 12.0535 12.4426 10.8592C13.2253 9.66618 13.5 8.35818 13.5 6.99985V3.4798C13.5 3.37109 13.4297 3.27483 13.3262 3.2417L8.07619 1.5617ZM9 10.4999C9 11.0522 8.55228 11.4999 8 11.4999C7.44772 11.4999 7 11.0522 7 10.4999C7 9.94759 7.44772 9.49988 8 9.49988C8.55228 9.49988 9 9.94759 9 10.4999ZM8.75 4.74988C8.75 4.33566 8.41421 3.99988 8 3.99988C7.58579 3.99988 7.25 4.33566 7.25 4.74988V7.74988C7.25 8.16409 7.58579 8.49988 8 8.49988C8.41421 8.49988 8.75 8.16409 8.75 7.74988V4.74988Z"></path></svg>
  Flash message with an icon
</div>

<div class="flash mt-3 flash-error">
  <!-- <%= octicon "flame" %> -->
  <svg class="octicon octicon-flame" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99789 14.5001C10.8304 14.5001 12.9971 12.5193 12.9971 10C12.9971 8.53654 12.3174 7.80948 11.1193 6.61667C11.1071 6.60453 11.0949 6.59236 11.0826 6.58014C10.0696 5.57183 8.7824 4.29061 8.24911 2.14559C7.92718 2.40211 7.61813 2.72476 7.38529 3.09924C6.95273 3.79496 6.7637 4.67919 7.33879 5.82934C7.81231 6.77637 8.00841 8.11294 7.06066 9.06069C6.45006 9.67129 5.51641 9.90115 4.65812 9.69385C4.1002 9.55909 3.61121 9.25672 3.22215 8.81981C3.08407 9.16747 3.00001 9.57013 3 10.0001C2.99994 12.5298 5.1636 14.5001 7.99789 14.5001ZM9.5332 0.752514C9.49562 0.340008 9.16001 0.00931669 8.76889 0.145686C7.03463 0.750359 4.34051 3.18696 5.99715 6.50017C6.34142 7.1887 6.28164 7.71839 6 8.00003C5.58104 8.41899 4.45998 8.4869 3.95925 7.16847C3.78678 6.71435 3.30098 6.40593 2.92501 6.71353C2.03625 7.44067 1.50003 8.70216 1.5 10C1.49992 13.5121 4.49789 16.0001 7.99789 16.0001C11.4979 16.0001 14.4971 13.5 14.4971 10C14.4971 7.86282 13.3699 6.74064 12.1862 5.56222C10.9968 4.37809 9.7504 3.13717 9.5332 0.752514Z"></path></svg>
  Flash message with an icon
</div>

<div class="flash mt-3 flash-success">
  <!-- <%= octicon "check-circle" %> -->
  <svg class="octicon octicon-check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM11.7803 6.28033C12.0732 5.98744 12.0732 5.51256 11.7803 5.21967C11.4874 4.92678 11.0126 4.92678 10.7197 5.21967L6.75 9.18934L5.28033 7.71967C4.98744 7.42678 4.51256 7.42678 4.21967 7.71967C3.92678 8.01256 3.92678 8.48744 4.21967 8.78033L6.21967 10.7803C6.51256 11.0732 6.98744 11.0732 7.28033 10.7803L11.7803 6.28033Z"></path></svg>
  Flash message with an icon
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
