---
title: Box
path: components/box
status_issue: 'https://github.com/github/design-systems/issues/198'
status: Stable
source: 'https://github.com/primer/css/tree/main/src/box'
bundle: box
---

The `.Box` component can be used for something as simple as a rounded corner box, or more complex lists and forms. It includes optional modifiers for padding density and color themes.

## Box

A `.Box` is a container with a white background, a light gray border, and rounded corners. By default there are no additional styles such as padding, these can be added as needed with utility classes. Other styles and layouts can be achieved with box elements and modifiers shown in the documentation below.

```html live
<div class="Box">
  This is a box.
</div>
```

## Box elements

Box elements include `Box-header`, `Box-body`, and `Box-footer`. These elements include borders and consistent padding. Optionally, you can include use `Box-title` which applies a bold font-weight the heading.

```html live
<div class="Box">
  <div class="Box-header">
    <h3 class="Box-title">
      Box title
    </h3>
  </div>
  <div class="Box-body">
    Box body
  </div>
  <div class="Box-footer">
    Box footer
  </div>
</div>
```

### Box row

Use `Box-row` to add rows with borders and maintain the same padding. Box rows have a lighter border to give contrast between the header and footer.

**Note:** Box rows have some reliance on markup structure in order to target the first and last rows, therefore using an unordered list is recommended. See [box row markup structure](#box-row-markup-structure) for more information.

```html live
<div class="Box">
  <ul>
    <li class="Box-row">
      Box row one
    </li>
    <li class="Box-row">
      Box row two
    </li>
    <li class="Box-row">
      Box row three
    </li>
    <li class="Box-row">
      Box row four
    </li>
  </ul>
</div>
```

Rows can be used with or without `Box-header`, `Box-footer`, or `Box-body`.

```html live
<div class="Box">
  <div class="Box-header">
    Box header
  </div>
  <div class="Box-body">
    <strong>Box body</strong>
  </div>
  <ul>
    <li class="Box-row">
      Box row one
    </li>
    <li class="Box-row">
      Box row two
    </li>
    <li class="Box-row">
      Box row three
    </li>
    <li class="Box-row">
      Box row four
    </li>
  </ul>
  <div class="Box-footer">
    Box footer
  </div>
</div>
```

### Box row markup structure

Box rows have some reliance on markup structure in order to target the first and last rows. Box rows are given a top border that is lighter in color than other box elements so the first row is targeted to apply a darker border color. An inner border-radius is applied to the first and last rows that row corners don't poke outside the `Box`, this can be particularly noticeable when using a highlight on box rows.

Using an unordered list is recommended in order to target the first and last rows, however, if you need to use a `<div>` for your rows, you may want to place your rows inside a parent `<div>` so that the first and last rows are styled appropriately.

```html live
<div class="Box">
  <div class="Box-header">
    Box header
  </div>
  <!-- This wrapping div ensures the first and last rows can be targeted for styling. -->
  <div>
    <div class="Box-row">Box row using a div</div>
    <div class="Box-row">Box row using a div</div>
  </div>
</div>
```

## Box padding density

You can changed the padding density of the box component.

Use `Box--condensed` to apply a more condensed line-height and reduce the padding on the Y axis.

```html live
<div class="Box Box--condensed">
  <div class="Box-header">
    <h3 class="Box-title">
      Box title
    </h3>
  </div>
  <div class="Box-body">
    Box body
  </div>
  <ul>
    <li class="Box-row">
      Box row one
    </li>
    <li class="Box-row">
      Box row two
    </li>
  </ul>
  <div class="Box-footer">
    Box footer
  </div>
</div>
```

Use `Box--spacious` to increase padding and increase the title font size.

You may want to increase the overall font size to work with the larger padding, in this example the default body font size is increased to 16px using the `f4` typography utility.

```html live
<div class="Box Box--spacious f4">
  <div class="Box-header">
    <h3 class="Box-title">
      Box title
    </h3>
  </div>
  <div class="Box-body">
    Box body
  </div>
  <ul>
    <li class="Box-row">
      Box row one
    </li>
    <li class="Box-row">
      Box row two
    </li>
  </ul>
  <div class="Box-footer">
    Box footer
  </div>
</div>
```

## Blue box theme

Use `Box--blue` to style the box borders and box header in blue.

```html live
<div class="Box Box--blue">
  <div class="Box-header">
    Box header
  </div>
  <ul>
    <li class="Box-row">
      Box row one
    </li>
    <li class="Box-row">
      Box row two
    </li>
  </ul>
  <div class="Box-footer">
    Box footer
  </div>
</div>
```

## Blue box header theme

Use `Box-header--blue` to add to change the header border and background to blue.

```html live
<div class="Box">
  <div class="Box-header Box-header--blue">
    <h3 class="Box-title">Box with blue header</h3>
  </div>
  <div class="Box-body">
    Box body
  </div>
</div>
```

## Box danger theme

Use `Box--danger` to apply a red border to the outside of the box. This theme is helpful for communicating destructive actions.

**Note:** `Box-danger` only works with either `Box-row`'s or `Box-body`.

```html live
<div class="Box Box--danger">
  <div class="Box-row">
    Row one
  </div>
  <div class="Box-row">
    Row two
  </div>
</div>
```

`Box-danger` is often paired with a red heading. See the [subhead](./subhead) docs for more information.

```html live
<div>
  <div class="Subhead border-bottom-0">
    <h2 class="Subhead-heading Subhead-heading--danger">Danger zone</h2>
  </div>

  <div class="Box Box--danger">
    <div class="Box-body">
      Box body
    </div>
  </div>
</div>
```

## Row themes

You can change the background color for individual rows, or change the color on hover or navigation focus.

```html live
<div class="Box">
  <div class="Box-row Box-row--gray">
    .Box-row--gray
  </div>
  <div class="Box-row Box-row--hover-gray">
    .Box-row--hover-gray
  </div>
  <div class="Box-row Box-row--yellow">
    .Box-row--yellow
  </div>
  <div class="Box-row Box-row--hover-blue">
    .Box-row--hover-blue
  </div>
  <div class="Box-row Box-row--blue">
    .Box-row--blue
  </div>
</div>
```

Use `Box-row--focus-gray` or `Box-row--focus-blue` when using along-side `navigation-focus` if you want to highlight rows when using keyboard commands.

```html live
<div class="Box">
  <div class="Box-row Box-row--focus-gray navigation-focus">
    .Box-row--focus-gray and .navigation-focus
  </div>
  <div class="Box-row Box-row--focus-gray">
    .Box-row--focus-gray
  </div>
  <div class="Box-row Box-row--focus-blue navigation-focus">
    .Box-row--focus-blue and .navigation-focus
  </div>
  <div class="Box-row Box-row--focus-blue">
    .Box-row--focus-blue
  </div>
</div>
```

### Box row unread

Use `.Box-row--unread` to apply a blue vertical line highlight for indicating a row contains unread items.

```html live
<div class="Box">
  <div class="Box-row">
    Box row
  </div>
  <div class="Box-row Box-row--unread">
    Box row unread
  </div>
  <div class="Box-row">
    Box row
  </div>
</div>
```

### Box row link

Use .`Box-row-link` when you want a link to appear dark gray and blue on hover on desktop, and remain a blue link on mobile. This is useful to indicate links on mobile without having hover styles.

```html live
<div class="Box">
  <div class="Box-row">
    <a class="Box-row-link" href="#box-row-link">Box row link</a>
  </div>
</div>
```

## Dashed border

Use the `border-dashed` utility to apply a dashed border to a box.

```html live
<div class="Box border-dashed p-2">
  A box with a dashed border
</div>
```

## Boxes with flash alerts

Use `flash-full` for flash alert inside a box to remove the rounded corners. Place the flash alert above the `Box-body` and underneath the `Box-header`.

Flash alerts come in three different colors and can be used with icons and buttons, see the [alert documentation](./alerts) for more information.

```html live
<div class="Box">
  <div class="Box-header">
    Box header
  </div>
  <div class="flash flash-full">
    <button class="flash-close js-flash-close">
      <!-- <%= octicon "x" %> -->
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    <span>Flash message with close button.</span>
  </div>
  <div class="flash flash-full flash-success">
    <!-- <%= octicon("check") %> -->
    <svg class="octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
    <span>Flash success with an icon.</span>
  </div>
  <div class="flash flash-full flash-warn">
    <!-- <%= octicon("alert") %> -->
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <span>Flash warning with an icon.</span>
  </div>
  <div class="flash flash-full flash-error">
    Flash error inside a Box.
  </div>
  <div class="Box-body">
    Box body
  </div>
</div>
```

## Boxes with icons

Use `Box-btn-octicon` with `btn-octicon` when you want the icon to maintain the same padding as other box elements. This selector offsets margin to ensure it lines up on the left and right sides of the box so you may need to add padding neighboring elements.

```html live
<div class="Box">
  <div class="Box-body">
    <span class="pr-2">Box body</span>
    <button href="#" class="Box-btn-octicon btn-octicon">
      <!-- <%= octicon "pencil" %> -->
      <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
    </button>
  </div>
</div>
```

It's common to want to float icons to the far left or right and stop the `Box-title`from wrapping underneath. To do this you'll need to create a media object with utilities. Add `clearfix` to the surrounding div (this could be the header, body, or rows), add `overflow-hidden` to the title (or other text element), and float the icons as desired.

```html live
<div class="Box">
  <div class="Box-header clearfix">
    <button href="#" class="Box-btn-octicon btn-octicon float-right">
      <!-- <%= octicon "x" %> -->
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    <h3 class="Box-title overflow-hidden pr-3">A very long title that wraps onto multiple lines without overlapping or wrapping underneath the icon to it's right</h3>
  </div>
  <div class="Box-body">
    Box body
  </div>
</div>
```

```html live
<div class="Box">
  <div class="Box-row clearfix">
    <button href="#" class="Box-btn-octicon btn-octicon float-left">
      <!-- <%= octicon "check" %> -->
      <svg class="octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
    </button>
    <p class="overflow-hidden pl-3">A very long paragraph that wraps onto multiple lines without overlapping or wrapping underneath the icon to it's left</p>
  </div>
</div>
```

## Box headers with counters

Use a counter with a background that works against the contrast of the box header. The default counter colors do not stand out well against the header background so we suggest using one of the following styles:

Use `Counter--gray` for a counter with a gray background and dark gray text.

```html live
<div class="Box">
  <div class="Box-header">
    <h3 class="Box-title">
      Box title
      <span class="Counter Counter--gray">12</span>
    </h3>
  </div>
  <div class="Box-body">
    Box body
  </div>
</div>
```

Use `Counter--gray-dark` for a counter with a dark gray background and white text.

```html live
<div class="Box">
  <div class="Box-header">
    <h3 class="Box-title">
      Box title
      <span class="Counter Counter--gray-dark">12</span>
    </h3>
  </div>
  <div class="Box-body">
    Box body
  </div>
</div>
```

## Form elements and buttons in boxes

To achieve different layouts when adding buttons or form elements to boxes we suggest you use utilities to achieve the layout you want. Here's some common examples:

Use [flexbox utilities](/utilities/flexbox) to center align items, and avoid using floats by using `flex-auto` to have the text fill the remaining space so that the button rests on the far right.

```html live
<div class="Box Box--condensed">
  <div class="Box-header d-flex flex-items-center">
    <h3 class="Box-title overflow-hidden flex-auto">
      Box title
    </h3>
    <button class="btn btn-primary btn-sm">
      Button
    </button>
  </div>
  <div class="Box-body">
    Box body
  </div>
</div>
```

A similar approach can be used for buttons with multiple lines of text within a row.

```html live
<div class="Box">
  <div class="Box-row d-flex flex-items-center">
    <div class="flex-auto">
      <strong>Row title</strong>
      <div class="text-small color-fg-subtle">
        Description
      </div>
    </div>
    <button type="button" class="btn btn-primary" name="button">View</button>
  </div>
  <div class="Box-row d-flex flex-items-center">
    <div class="flex-auto">
      <strong>Row title</strong>
      <div class="text-small color-fg-subtle">
        Description
      </div>
    </div>
    <button type="button" class="btn btn-primary" name="button">View</button>
  </div>
  <div class="Box-row d-flex flex-items-center">
    <div class="flex-auto">
      <strong>Row title</strong>
      <div class="text-small color-fg-subtle">
        Description
      </div>
    </div>
    <button type="button" class="btn btn-primary" name="button">View</button>
  </div>
</div>
```

Using flexbox along with form, button, and link styles, you can create more complex box headers for things like bulk actions and sorting.

```html live
<div class="Box">
  <div class="Box-header d-flex flex-items-center">
    <form class="flex-auto">
      <label>
        <input class="mr-1" type="checkbox" />
        Check it
      </label>
    </form>
    <button class="btn-link select-menu-button Link--muted">
      Select menu
    </button>
  </div>
  <div class="Box-body">
    Box body
  </div>
</div>
```

You can put forms in boxes. Often form submission buttons are aligned to the bottom right of the form which you can do with `text-right` instead of using floats.

```html live
<div class="Box">
  <div class="Box-header">
    <h3 class="Box-title">
      Example form title
    </h3>
  </div>
  <form>
    <div class="Box-body">
      <div class="form-group">
        <div class="form-group-header"><label>Example label</label></div>
        <div class="form-group-body"><input class="form-control" type="text"></div>
      </div>
      <div class="form-checkbox">
        <label>
          <input type="checkbox" checked="checked" />
          Yes please
        </label>
      </div>
    </div>
    <div class="Box-footer text-right">
      <button class="btn btn-secondary mr-1">
        Cancel
      </button>
      <button class="btn btn-primary">
        Submit
      </button>
    </div>
  </form>
</div>
```

When a box is all by itself centered on a page you can use [column widths](/utilities/grid) to control the width of the box. If needed, break the mold a little and use [typography utilities](/utilities/typography) instead of the built in box title styles.

```html live
<div class="Box Box--spacious col-6 mx-auto text-center">
  <form>
    <div class="Box-body">
      <h3 class="f1-light">
        Example form
      </h3>
      <div class="form-group mb-4">
        <div class="form-group-header"><label>Example label</label></div>
        <div class="form-group-body"><input class="form-control" type="text" /></div>
      </div>
      <button class="btn btn-primary btn-block">
        Submit
      </button>
    </div>
  </form>
</div>
```

Box patterns can also be made with, and modified with [border utilities](/utilities/borders).
