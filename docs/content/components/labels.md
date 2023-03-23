---
title: Labels
path: components/labels
status_issue: 'https://github.com/github/design-systems/issues/332'
status: Stable
source: 'https://github.com/primer/css/tree/main/src/labels'
rails: 'https://primer.style/view-components/components/beta/label'
bundle: labels
---

Labels add metadata or indicate status of items and navigational elements.

## Labels

The base label component styles the text, adds padding and rounded corners, and a border. Labels come in various themes which apply different colors.

GitHub also programmatically generates and applies a background color for labels on items such as issues and pull requests. Users are able to select any background color and the text color will adjust to work with light and dark background colors.

The base `Label` style does not apply a background color and only uses the default border:

```html live
<span class="Label">design</span>
```

### Label contrast

Use `Label--primary` to create a label with a stronger border. This label is also neutral in color, however, since its border is stronger it can stand out more compared to the default `Label`.

Use `Label--secondary` to create a label with a subtler text color. This label is neutral in color and can be used in contexts where all you need to communicate is metadata, or where you want a label to feel less prominent compared with labels with stronger colors.

```html live
<span class="Label">Default</span>
<span class="Label Label--primary ml-1">Primary</span>
<span class="Label Label--secondary ml-1">Secondary</span>
```

### Colored labels

Labels come in a few different functional classes. Use to communicate the content of the label, and ensure it's used consistently.

- `Label--accent`
- `Label--success`
- `Label--attention`
- `Label--severe`
- `Label--danger`
- `Label--open`
- `Label--closed`
- `Label--done`
- `Label--sponsors`

```html live
<span class="Label mr-1 Label--accent">Accent</span>
<span class="Label mr-1 Label--success">Success</span>
<span class="Label mr-1 Label--attention">Attention</span>
<span class="Label mr-1 Label--severe">Severe</span>
<span class="Label mr-1 Label--danger">Danger</span>
<span class="Label mr-1 Label--open">Open</span>
<span class="Label mr-1 Label--closed">Closed</span>
<span class="Label mr-1 Label--done">Done</span>
<span class="Label mr-1 Label--sponsors">Sponsors</span>
```

### Label sizes

If space allows, add the `Label--large` modifier to add a bit more padding to labels.

```html live
<span class="Label Label--gray-darker mr-1">Default</span>
<span class="Label Label--large Label--gray-darker mr-1">Large</span>
```

### Inline labels

Sometimes when adding a label the line-height can be increased. Or the parent element increases in height. If that is not desired, use the `Label--inline` modifier change to the `display` property to `inline`. The font-size also adapts.

```html live
<p class="col-4">
  Lorem Ipsum is simply <span class="Label Label--inline">dummy text</span> of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text.
</p>
```

## Issue labels

Issue labels are used for adding labels to issues and pull requests. They also come with emoji support.

```html live
<span class="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis mr-1">Primer</span>
<span class="IssueLabel color-bg-danger-emphasis color-fg-on-emphasis mr-1">bug 🐛</span>
<span class="IssueLabel color-bg-success-emphasis color-fg-on-emphasis mr-1">help wanted</span>
<span class="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis mr-1">🚂 deploy: train</span>
```

If an issue label needs to be bigger, add the `.IssueLabel--big` modifier.

```html live
<span class="IssueLabel IssueLabel--big color-bg-accent-emphasis color-fg-on-emphasis mr-1">Primer</span>
<span class="IssueLabel IssueLabel--big color-bg-danger-emphasis color-fg-on-emphasis mr-1">bug 🐛</span>
<span class="IssueLabel IssueLabel--big color-bg-success-emphasis color-fg-on-emphasis mr-1">help wanted</span>
<span class="IssueLabel IssueLabel--big color-bg-attention-emphasis color-fg-on-emphasis mr-1">🚂 deploy: train</span>
```