# Primer CSS / Subhead

[![npm version](http://img.shields.io/npm/v/primer-subhead.svg)](https://www.npmjs.org/package/primer-subhead)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> The Subhead is a simple header with a bottom border. It&#39;s designed to be used on settings and configuration pages.

This repository is a module of the full [primer-css][primer-css] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-subhead` with this command.

```
$ npm install --save primer-subhead
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-subhead/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Documentation

<!-- %docs
title: Subhead
status: New release
status_issue: https://github.com/github/design-systems/issues/101
-->

The basic Subhead consists of a `.Subhead` container, which has a light gray bottom border. Use `.Subhead-heading` for the heading itself. It's an `<h2>` sized heading with normal font-weight.

Use a heading element whenever possible as they can be used as navigation for assistive technologies, and avoid skipping levels.

```html
<div class="Subhead">
  <div class="Subhead-heading">Plain subhead</div>
</div>
```

To add a top margin to the Subhead, use `.Subhead--spacious`. This is useful for separating sections on a settings page.

```html
<div class="Subhead Subhead--spacious">
  <div class="Subhead-heading">Spacious subhead</div>
</div>
```

You can add a one line description to the subhead with `.Subhead-description`.

```html
<div class="Subhead">
  <div class="Subhead-heading">Subhead with description</div>
  <div class="Subhead-description">The subhead is a subdued header style with a light bottom border.</div>
</div>
```

For longer descriptions, it is recommended that you use a paragraph below the Subhead.

```html
<div class="Subhead">
  <div class="Subhead-heading">Plain subhead</div>
</div>
<p>
  This is a longer description that is sitting below the Subheader. It's much longer than a description that could sit comfortably in the Subhead. It might even have <strong>bold</strong> text. <a href="#">Click to learn more.</a>
</p>
```

You can add a button or something to the right of `.Subhead-heading` with the `.Subhead-actions` element.

```html
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

```html
<div class="Subhead">
  <div class="Subhead-heading">Subhead with actions and description</div>
  <div class="Subhead-actions"><a href="#url" class="btn btn-sm btn-primary" role="button">Action</a></div>
  <div class="Subhead-description">The subhead is a subdued header style with a light bottom border.</div>
</div>
```

Use the `.Subhead-heading--danger` modifier to make the text bold and red. This is useful for warning users.

```html
<div class="Subhead">
  <div class="Subhead-heading Subhead-heading--danger">Danger zone</div>
</div>
```

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer-css]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
