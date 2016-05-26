# Primer CSS

[![NPM version](http://img.shields.io/npm/v/primer-css.svg)](https://www.npmjs.org/package/primer-css)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Primer is the CSS toolkit that powers GitHub's front-end design. It's purposefully limited to common components to provide our developers with the most flexibility, and to keep GitHub uniquely *GitHubby*. It's built with SCSS and available via NPM, so it's easy to include all or part of it within your own project.

This repository is a compilation of [several CSS modules](https://github.com/primer).

## Documentation

You can read more about support in the [docs][docs].

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-css` with this command.

```
$ npm install --save primer-css
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-css/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css`

```
$ npm run build
```

## Primer stats

When compiling the Sass files, we will automatically generate a `.primer-stats.md` file. This is tracked in the Git repository to provide us historical and contextual information on the changes we introduce. For example, we'll know when the number of selectors or declarations rises sharply within a single change.

## Related

* [Primer Documentation][docs]
* [primer][primer-org]

## License

MIT &copy; [GitHub](https://github.com/)

[primer-org]: https://github.com/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
