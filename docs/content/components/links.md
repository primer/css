---
title: Links
path: components/links
status: New
source: 'https://github.com/primer/css/tree/master/src/links'
bundle: links
---

By default `<a>` elements already use the right link color and apply an underline on hover.

```html live
Some text with a default <a href="#url">link</a>
```

If you need to make other elements behave like a link and perhaps use JS to trigger navigating to another page, use the `.Link` class.

```html live
Some text with a <span class="Link">span that behaves like a link</span>
```

If you like to override the default link styles you can do so with the following link utilities. **Bear in mind that link styles are easier for more people to see and interact with when the changes in styles do not rely on color alone.**

Use `.Link--primary` to turn the link color to blue only on hover.

```html live
<p class="color-text-secondary">Some text with a <a class="Link--primary" href="#url">Link--primary</a></p>
```

Use `.Link--secondary` for a more subtle link color that turns blue on hover.

```html live
Some text with a <a class="Link--secondary" href="#url">Link--secondary</a>
```

Use `.Link--muted` also removes the underline on hover. Tip: You can also use the `.no-underline` utility to do the same for `.Link--primary`.

```html live
<p>Some text with a <a class="Link--secondary no-underline" href="#url">Link--muted</a></p>
<p>Some text with a <a class="Link--primary no-underline" href="#url">Link--primary no-underline</a></p>
```

Use `.Link--onHover` to make any text color used with links to turn blue on hover. This is useful when you want only part of a link to turn blue on hover.

```html live
<a class="color-text-secondary no-underline" href="#url">
  A link with a partial <span class="Link--onHover">Link--onHover</span>
</a>
```
