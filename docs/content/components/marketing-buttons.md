---
title: Marketing buttons
path: components/marketing-buttons
status: Beta
source: 'https://github.com/primer/css/tree/main/src/marketing/buttons'
bundle: marketing-buttons
---

Marketing buttons come in a few different colors and sizes that can be produced by combining the base class `btn-mktg` with a set of modifier classes.

## Button types

Marketing buttons can be solid (default), outlined (`muted`), borderless (`subtle`), or green (`signup`, only used for signing up).

```html live
<button class="btn-mktg mr-3" type="button">Get started</button>
<button class="btn-mktg btn-muted-mktg mr-3" type="button">Learn more</button>
<button class="btn-mktg btn-subtle-mktg mr-3" type="button">Contact us</button>
<button class="btn-mktg btn-signup-mktg" type="button">Sign up</button>
```

## Sizes

Marketing buttons can be set to three different sizes:

- Small: `btn-small-mktg`
- Medium (default)
- Large: `btn-large-mktg`

```html live
<button class="btn-mktg btn-small-mktg mr-3" type="button">Get started</button>
<button class="btn-mktg btn-muted-mktg btn-small-mktg mr-3" type="button">Learn more</button>
<button class="btn-mktg btn-subtle-mktg btn-small-mktg mr-3" type="button">Contact us</button>
<button class="btn-mktg btn-signup-mktg btn-small-mktg" type="button">Sign up</button>
<hr>
<button class="btn-mktg mr-3" type="button">Get started</button>
<button class="btn-mktg btn-muted-mktg mr-3" type="button">Learn more</button>
<button class="btn-mktg btn-subtle-mktg mr-3" type="button">Contact us</button>
<button class="btn-mktg btn-signup-mktg" type="button">Sign up</button>
<hr>
<button class="btn-mktg btn-large-mktg mr-3" type="button">Get started</button>
<button class="btn-mktg btn-muted-mktg btn-large-mktg mr-3" type="button">Learn more</button>
<button class="btn-mktg btn-subtle-mktg btn-large-mktg mr-3" type="button">Contact us</button>
<button class="btn-mktg btn-signup-mktg btn-large-mktg" type="button">Sign up</button>
```
