# HEAD

# 9.1.1
This release updates primer modules to use variables for spacing units instead of pixel values.

## Changes

- primer-alerts: 1.2.0 => 1.2.1
- primer-avatars: 1.1.0 => 1.1.1
- primer-base: 1.2.0 => 1.2.1
- primer-blankslate: 1.1.0 => 1.1.1
- primer-box: 2.2.0 => 2.2.1
- primer-breadcrumb: 1.1.0 => 1.1.1
- primer-buttons: 2.1.0 => 2.1.1
- primer-cards: 0.2.0 => 0.2.1
- primer-core: 6.1.0 => 6.1.1
- primer-css: 9.1.0 => 9.1.1
- primer-forms: 1.1.0 => 1.1.1
- primer-labels: 1.2.0 => 1.2.1
- primer-layout: 1.1.0 => 1.1.1
- primer-markdown: 3.4.0 => 3.4.1
- primer-marketing-type: 1.1.0 => 1.1.1
- primer-marketing-utilities: 1.1.0 => 1.1.1
- primer-marketing: 5.1.0 => 5.1.1
- primer-navigation: 1.1.0 => 1.1.1
- primer-page-headers: 1.1.0 => 1.1.1
- primer-page-sections: 1.1.0 => 1.1.1
- primer-product: 5.1.0 => 5.1.1
- primer-support: 4.1.0 => 4.1.1
- primer-table-object: 1.1.0 => 1.1.1
- primer-tables: 1.1.0 => 1.1.1
- primer-tooltips: 1.1.0 => 1.1.1
- primer-truncate: 1.1.0 => 1.1.1
- primer-utilities: 4.4.0 => 4.4.1

# 9.1.0

This release updates our [stylelint config](/primer/stylelint-config-primer) to [v2.0.0](https://github.com/primer/stylelint-config-primer/releases/tag/v2.0.0), and to stylelint v7.13.0. Each module also now has a `lint` npm script, and there are top-level `test` and `lint` scripts that you can use to lint and test all modules in one go.

This release also includes major improvements to our Travis build scripts to automatically publish PR builds, release candidates, and the "final" versions to npm.

# 9.0.0

# 8.0.0

# 7.0.0

# 6.0.0

# 5.0.0

# 4.4.0

- Adding primer-marketing module to primer

# 4.3.0

- Using primer-core and primer-product modules

# 4.1.0

- Added: [primer-markdown](https://github.com/primer/markdown) to the build
- Fixes: Pointing "style" package.json to `build/build.css` file.

# 4.0.2

- Added npm build scripts to add `build/build.css` to the npm package

# 4.0.1

- Fixed: missing primer-layout from build

# 4.0.0

- Whole new npm build system, pulling in the code from separate component repos
