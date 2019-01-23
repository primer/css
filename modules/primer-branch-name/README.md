# Primer / Branch Name

[![npm version](https://img.shields.io/npm/v/primer-branch-name.svg)](https://www.npmjs.org/package/primer-branch-name)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> A nice, consistent way to display branch names.

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-branch-name` with this command.

```
$ npm install --save primer-branch-name
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-branch-name/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Documentation

<!-- %docs
title: Branch name
path: components/branch-name
status: Stable
-->

Branch names can be a link name or not:

```html title="Branch name"
<span class="branch-name">a_new_feature_branch</span>
```

```html title="Branch name with link"
<a href="#url" class="branch-name">a_new_feature_branch</a>
```

You may also include an octicon before the branch name text:

```erb title="Branch name with icon"
<span class="branch-name">
  <%= octicon("git-branch", width:16, height:16) %>
  a_new_feature_branch
</span>
```

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
