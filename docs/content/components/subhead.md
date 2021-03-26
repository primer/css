---
title: Subhead
path: components/subhead
status: Stable
status_issue: 'https://github.com/github/design-systems/issues/101'
source: 'https://github.com/primer/css/tree/main/src/subhead'
bundle: subhead
---


The basic Subhead consists of a `.Subhead` container, which has a light gray bottom border. Use `.Subhead-heading` for the heading itself. It's an `<h2>` sized heading with normal font-weight.

Use a heading element whenever possible as they can be used as navigation for assistive technologies, and avoid skipping levels.

```html live title="Subhead"
<div class="Subhead">
  <div class="Subhead-heading">Plain subhead</div>
</div>
```

To add a top margin to the Subhead, use `.Subhead--spacious`. This is useful for separating sections on a settings page.

```html live title="Spacious Subhead"
<div class="Subhead Subhead--spacious">
  <div class="Subhead-heading">Spacious subhead</div>
</div>
```

You can add a one line description to the subhead with `.Subhead-description`.

```html live title="Subhead with description"
<div class="Subhead">
  <div class="Subhead-heading">Subhead with description</div>
  <div class="Subhead-description">The subhead is a subdued header style with a light bottom border.</div>
</div>
```

For longer descriptions, it is recommended that you use a paragraph below the Subhead.

```html live  title="Subhead with longer description"
<div class="Subhead">
  <div class="Subhead-heading">Plain subhead</div>
</div>
<p>
  This is a longer description that is sitting below the Subheader. It's much longer than a description that could sit comfortably in the Subhead. It might even have <strong>bold</strong> text. <a href="#">Click to learn more.</a>
</p>
```

You can add a button or something to the right of `.Subhead-heading` with the `.Subhead-actions` element.

```html live title="Subhead with actions"
<div class="Subhead">
  <div class="Subhead-heading">Subhead with button</div>
  <div class="Subhead-actions"><a href="#url" class="btn btn-sm btn-primary" role="button">Action</a></div>
</div>

<div class="Subhead Subhead--spacious">
  <div class="Subhead-heading">Subhead with link</div>
  <div class="Subhead-actions"><a href="#url">Learn more</a></div>
</div>
```

Use all the elements together to create a Subhead with actions and a description.

```html live title="Subhead with actions and description"
<div class="Subhead">
  <div class="Subhead-heading">Subhead with actions and description</div>
  <div class="Subhead-actions"><a href="#url" class="btn btn-sm btn-primary" role="button">Action</a></div>
  <div class="Subhead-description">The subhead is a subdued header style with a light bottom border.</div>
</div>
```

Use the `.Subhead-heading--danger` modifier to make the text bold and red. This is useful for warning users.

```html live title="Subhead danger"
<div class="Subhead">
  <div class="Subhead-heading Subhead-heading--danger">Danger zone</div>
</div>
```
