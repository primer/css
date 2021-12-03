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

## Animated arrow symbol

Marketing buttons can include an animated arrow symbol, by adding a class `arrow-target-mktg` and including the SVG symbol:

```html live
<button class="btn-mktg arrow-target-mktg mr-3" type="button">
    Get started
    <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
        <path stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>
</button>

<button class="btn-mktg arrow-target-mktg btn-muted-mktg mr-3" type="button">
    Learn more
    <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
        <path stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>
</button>

<button class="btn-mktg arrow-target-mktg btn-subtle-mktg mr-3" type="button">
    Contact us
    <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
        <path stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>
</button>

<button class="btn-mktg arrow-target-mktg btn-signup-mktg" type="button">
    Sign up
    <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
        <path stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>
</button>
```
