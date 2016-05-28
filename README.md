# selector-no-utility

[![NPM version](http://img.shields.io/npm/v/stylelint-selector-no-utility.svg)](https://www.npmjs.org/package/stylelint-function-url-no-domain)
[![Build Status](https://travis-ci.org/primer/stylelint-selector-no-utility.svg?branch=master)](https://travis-ci.org/primer/stylelint-selector-no-utility)

**This plugin is extra specific to [primer-utilities](https://github.com/primer/utilities)** I will accept PRs to make it more generic, or feel free to fork and use it for your own classes.

You should not be able to style a utility classes. Utility classes are single purpose, reusing them to add extra style violates their single purpose.

```css
    .m-0, #bar .float-left, #hoo { border: 1px solid pink; }
/** ↑          ↑
 * Each of these selectors */
```

The following patterns are considered warnings:

```css
#bar .float-left { border: 1px solid pink; }
```

```scss
#bar {
  .float-left { border: 1px solid pink; }
}
```

The following patterns are *not* considered warnings:

```css
#bar { color: pink; }
```

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `stylelint-function-url-no-domain` with this command.

```
$ npm install --save-dev stylelint-function-url-no-domain
```

## Usage

In your [stylelint config](http://stylelint.io/user-guide/configuration/) add this.

```json
{
  "plugins": [
    "stylelint-selector-no-utility"
  ],
  "rules": {
    "primer/selector-no-utility": true
  }
}
```

## Related

* [Stylelint](http://stylelint.io/)
* [primer-css][primer]

## License

MIT &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
