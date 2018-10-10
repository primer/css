# Primer / Progress Bar

[![npm version](https://img.shields.io/npm/v/primer-progress-bar.svg)](https://www.npmjs.org/package/primer-progress-bar)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> TODO: fill in this description later

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-progress-bar` with this command.

```
$ npm install --save primer-progress-bar
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-progress-bar/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Default

<!-- %docs
title: Progress Bar
status: Experimental
-->

```html
<div class="progress-bar">
  <div class="progress" style="width: 50%">
  </div>
</div>

<span class="flex-progress-bar mt-3 d-flex bg-gray overflow-hidden">
  <span class="flex-progress-bar__to-do height-full bg-green rounded-1"></span>
  <span class="flex-progress-bar__in-progress height-full bg-purple"></span>
    <span class="flex-progress-bar__done height-full bg-red"></span>
</span>
```

## With Tooltip

<!-- %docs
title: Progress Bar with Tooltip
status: Experimental
-->

```html
<div class="tooltipped tooltipped-n mt-3" aria-label="78 done / 6 in progress / 2 to do">
  <div class="progress-bar">
    <div class="progress" style="width: 50%">
    </div>
  </div>
</div>

```

## Reverse Progress

<!-- %docs
title: Progress Bar Reverse
status: Experimental
-->

```html
<div class="reverse-progress-container">
  <div style="width:50%" class="reverse-progress-bar" ></div>
</div>
```

<!-- %enddocs -->

## Progress Bar Small

<!-- %docs
title: Progress Bar Small
status: Experimental
-->

```html
<div class="progress-bar progress-bar-small mt-3">
  <div class="progress" style="width:50%">
  </div>
</div>
```

<!-- %enddocs -->

## Progress Bar Inline

<!-- %docs
title: Progress Bar Inline
status: Experimental
-->

```html
<div class="progress-bar-inline">
  <span class="progress-bar">
    <span class="progress" style="width:50%"> </span>
  </span>
</div>
```

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
