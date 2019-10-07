---
title: Labels
path: components/labels
status_issue: 'https://github.com/github/design-systems/issues/332'
status: Stable
source: 'https://github.com/primer/css/tree/master/src/labels'
bundle: labels
---

Labels add metatdata or indicate status of items and navigational elements. Three different types of labels are available: [Labels](#default-label-styles) for adding metadata, [States](#states) for indicating status, and [Counters](#counters) for showing the count for a number of items.

## Labels

The base label component styles the text, adds padding and rounded corners, and an inset box shadow. Labels come in various themes which apply colors and different border styles.

GitHub also programmatically generates and applies a background color for labels on items such as issues and pull requests. Users are able to select any background color and the text color will adjust to work with light and dark background colors.

The base `Label` style does not apply a background color, here's an example using the `bg-blue` utility to apply a blue background:

```html live title="Label"
<span title="Label: default label" class="Label bg-blue">default label</span>
```

**Note:** Be sure to include a title attribute on labels, it's helpful for people using screen-readers to differentiate a label from other text. I.e. without the title attribute, the following example would read as _"New select component design"_, rather than identifying `design` as a label.

```html live title="Label without title"
<!-- Don't do this -->
<a href="#url">New select component</a><span class="Label bg-blue ml-1">design</span>
```

### Label themes

Labels come in a few different themes. Use a theme that helps communicate the content of the label, and ensure it's used consistently.

Use `Label--gray` to create a label with a light gray background and gray text. This label is neutral in color and can be used in contexts where all you need to communicate is metadata, or whe you want a label to feel less prominent compared with labels with stronger colors.

```html live title="Label theme gray"
<span title="Label: gray label" class="Label Label--gray">gray label</span>
```

Use `Label--gray-darker` to create a label with a dark-gray background color. This label is also neutral in color, however, since it's background is darker it can stand out more compared to `Label--gray`.

```html live title="Label theme dark gray"
<span title="Label: dark gray label" class="Label Label--gray-darker">dark gray label</span>
```

Use `Label--orange` to communicate "warning". The orange background color is very close to red, so avoid using next to labels with a red background color since most people will find it hard to tell the difference.

```html live title="Label theme orange"
<span title="Label: orange label" class="Label Label--orange">orange label</span>
```

Use `Label--outline` to create a label with gray text, a gray border, and a transparent background. The outline reduces the contrast of this label in combination with filled labels. Use this in contexts where you need it to stand out less than other labels and communicate a neutral message.

```html live title="Label outline"
<span title="Label: outline label" class="Label Label--outline">outlined label</span>
```

Use `Label--outline-green` in combination with `Label--outline` to communicate a positive message.

```html live title="Label outline green"
<span title="Label: green outline label" class="Label Label--outline Label--outline-green">green outlined label</span>
```

## States

Use state labels to inform users of an items status. States are large labels with bolded text. The default state has a gray background.

```html live title="State"
<span class="State">Default</span>
```

### State themes

States come in a few variations that apply different colors. Use the state that best communicates the status or function.

```html live
<span title="Status: open" class="State State--green mr-2">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
  Open
</span>
<span title="Status: closed" class="State State--red mr-2">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
  Closed
</span>
<span title="Status: merged" class="State State--purple">
  <!-- <%= octicon "git-merge" %> -->
  <svg class="octicon octicon-git-merge" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
  Merged
</span>
```

**Note:** Similar to [labels](#labels), you should include the title attribute on states to differentiate them from other content.

### Small states

Use `State--small` for a state label with reduced padding a smaller font size. This is useful in denser areas of content.

```html live
<span title="Status: open" class="State State--green State--small mr-2">
  <!-- <%= octicon "issue-opened" %> -->
  <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
  Open
</span>
<span title="Status: closed" class="State State--red State--small">
  <!-- <%= octicon "issue-closed" %> -->
  <svg class="octicon octicon-issue-closed" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"></path></svg>
  Closed
</span>
```

## Counters

Use the `Counter` component to add a count to navigational elements and buttons. Counters come in 3 variations: the default `Counter` with a light gray background, `Counter--gray` with a dark-gray background and inverse white text, and `Counter--gray-light` with a light-gray background and dark gray text. When a counter is empty, it's visibility will be hidden.

```html live title="Counter"
<span class="Counter">16</span>
<span class="Counter Counter--gray">32</span>
<span class="Counter Counter--gray-light">64</span>
```

Use the `Counter` in navigation to indicate the number of items without the user having to click through or count the items, such as open issues in a GitHub repo. See more options in [navigation](./navigation).

```html live title="Counter in tabs"
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab selected" aria-current="page">Foo tab <span class="Counter">23</a>
    <a href="#url" class="tabnav-tab">Bar tab</a>
  </nav>
</div>
```

Counters can also be used in `Box` headers to indicate the number of items in a list. See more on the [box component](./box).

```html live title="Counter in Box headers"
<div class="Box">
  <div class="Box-header">
    <h3 class="Box-title">
      Box title
      <span class="Counter Counter--gray">3</span>
    </h3>
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
  </ul>
</div>
```
