# Primer CSS Breadcrumb Navigation

[![npm version](http://img.shields.io/npm/v/primer-popover.svg)](https://www.npmjs.org/package/primer-popover)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> Popover for suggesting, guiding, and bringing attention to specific UI elements on a page.

This repository is a module of the full [primer-css][primer] repository.

## Documentation

<!-- %docs
title: Popover
status: Unstable
-->

Breadcrumbs are used to show taxonomical context on pages that are many levels deep in a site’s hierarchy. Breadcrumbs show and link to parent, grandparent, and sometimes great-grandparent pages. Breadcrumbs are most appropriate on pages that:

- Are many levels deep on a site
- Do not have a section-level navigation
- May need the ability to quickly go back to the previous (parent) page

#### Usage

```html title="Popover"
<div class="Popover top-right position-absolute right-0 js-notice p-4 Box">
  <h4 class="mb-2">Popover heading</h4>
  <p>Message about this particular piece of UI.</p>
  <button type="submit" class="js-notice-dismiss btn btn-outline mt-2 text-bold">Got it!</button>
</div>
```

<!-- %enddocs -->

## License

MIT &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[primer-support]: https://github.com/primer/primer-support
[support]: https://github.com/primer/primer-support
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
