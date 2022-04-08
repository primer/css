---
title: Links
path: components/links
status: Beta
source: 'https://github.com/primer/css/tree/main/src/links'
bundle: links
---

By default `<a>` elements already use the right link color and apply an underline on hover. So in most cases the `.Link` class is not really needed.

```html live
Some text with a <a href="#url">link</a>
Some text with a <a href="#url" class="Link">link</a>
```

If you like to override the default link styles you can do so with the following link utilities. **Bear in mind that link styles are easier for more people to see and interact with when the changes in styles do not rely on color alone.**

## Primary link

Use `.Link--primary` to turn the link color to blue only on hover.

```html live
<p class="color-fg-muted">Some text with a <a class="Link--primary" href="#url">Link--primary</a></p>
```

## Secondary link

Use `.Link--secondary` for a more subtle link color that turns blue on hover.

```html live
Some text with a <a class="Link--secondary" href="#url">Link--secondary</a>
```

## Muted link

Use `.Link--muted` also removes the underline on hover. Tip: You can also use the `.no-underline` utility to do the same for `.Link--primary`.

```html live
<p>Some text with a <a class="Link--secondary no-underline" href="#url">Link--muted</a></p>
<p>Some text with a <a class="Link--primary no-underline" href="#url">Link--primary no-underline</a></p>
```

## On hover link

Use `.Link--onHover` to make any text color used with links to turn blue on hover. This is useful when you want only part of a link to turn blue on hover.

```html live
<a class="color-fg-muted no-underline" href="#url">
  A link with a partial <span class="Link--onHover">Link--onHover</span>
</a>
```

## Nested link

The `.Link` class can be nested inside an `<a>` element if only part of it should be styled like a link.

```html live
<a class="color-fg-default no-underline" href="#url">
  A nested <span class="Link">Link</span>
</a>
```

## Link and color utilities

Link classes in combination with [color utilities](../utilities/colors) lets you colorize information separately inside of a link but have all of the link turn into one color on hover.

```html live
<a class="Link--primary text-bold" href="#url">
  <svg class="octicon octicon-flame color-fg-danger" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>
  Hot
  <span class="color-fg-muted">potato</span>
</a>
```
