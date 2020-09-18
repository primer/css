# 16.0.0
In `v16` we're moving all colors to [primer/primitives](https://github.com/primer/primitives). This lets us use the same Primer colors across different libraries. Primer CSS also switches from using SASS variables for colors to CSS variables. Bellow a migration guide for all the variables:

### Color scale

`v15` | `v16`
--- | ---
`$black` | `var(--color-scale-black)`
`$white` | `var(--color-scale-white)`
`$gray-000` | `var(--color-scale-grey-0)`
`$gray-100` | `var(--color-scale-grey-1)`
... | ...
`$pink-800` | `var(--color-scale-pink-8)`
`$pink-900` | `var(--color-scale-pink-9)`

### Functional colors

`v15` | `v16`
--- | ---
**Text** |
`$text-black` | `var(--color-text-primary)` gray-900
`$text-gray-dark` | `var(--color-text-primary)` gray-900
`$text-gray` | `var(--color-text-secondary)` gray-600
`$text-gray-light` | `var(--color-text-tertiary)` gray-500
`$text-white` | `var(--color-text-inverse)` white
`$text-blue` | `var(--color-text-link-primary)` blue-500
`$text-green` | `var(--color-text-success)` green-600
`$text-red` | `var(--color-text-danger)` red-500
`$text-orange` | n/a
`$text-orange-light` | n/a
`$text-yellow` | n/a
`$text-purple` | n/a
`$text-pink` | n/a
**Border** |
`$border-color` | `var(--color-border-primary)` gray-200
`$border` | `$border-width $border-style var(--color-border-primary)` gray-200
`$border-white` | `var(--color-border-inverse)` white
`$border-black-fade` | n/a
`$border-white-fade` | n/a
`$border-gray` | `var(--color-border-primary)` gray-200
`$border-gray-dark` | `var(--color-border-secondary)` $gray-300
`$border-gray-darker` | n/a
`$border-gray-light` | `var(--color-border-primary-light)` lighten($gray-200, 3%)
`$border-blue` | `var(--color-border-info)` blue-500
`$border-blue-light` | n/a
`$border-green` | `var(--color-border-success)` green-500
`$border-green-light` | n/a
`$border-purple` | n/a
`$border-red` | `var(--color-border-danger)` red-500
`$border-red-light` | `var(--color-border-danger)` red-500
`$border-yellow` | `var(--color-border-warning)` yellow-700
**Background** |
`$bg-black` | n/a
`$bg-black-fade` | n/a
`$bg-white` | `var(--color-bg-primary)` white
`$bg-gray` | `var(--color-bg-secondary)` gray-100
`$bg-gray-light` | `var(--color-bg-tertiary)` gray-000
`$bg-gray-dark` | `var(--color-bg-canvas-inverse)` gray-900
`$bg-red-light` | `var(--color-bg-danger)` red-100
`$bg-red` | `var(--color-bg-danger-inverse)` red-500
`$bg-green-light` | `var(--color-bg-success)` green-100
`$bg-green` | `var(--color-bg-success-inverse)` green-500
`$bg-blue-light` | `var(--color-bg-info)` blue-100
`$bg-blue` | `var(--color-bg-info-inverse)` blue-500
`$bg-orange` | n/a
`$bg-purple` | n/a
`$bg-purple-light` | n/a
`$bg-pink` | n/a
`$bg-yellow` | n/a
`$bg-yellow-light` | n/a
`$bg-yellow-dark` | n/a
**Box Shadow** |
`$box-shadow` | `var(--color-shadow-small)`
`$box-shadow-medium` | `var(--color-shadow-medium)`
`$box-shadow-large` | `var(--color-shadow-large)`
`$box-shadow-extra-large` | `var(--color-shadow-extra-large)`
`$box-shadow-highlight` | `var(--color-shadow-highlight)`
`$box-shadow-inset` | `var(--color-shadow-inset)`
`$box-shadow-focus` | `var(--color-shadow-focus)`
**Buttons** |
`$border-color-button` | `var(--color-btn-border)`
`$btn-active-shadow` | n/a
**Forms** |
`$form-control-shadow` | `var(--color-input-shadow)`
`$btn-input-focus-shadow` | `var(--color-input-shadow-focus)`
**Tooltips** |
`$tooltip-background-color` | n/a
`$tooltip-text-color` | n/a
**Diffstat** |
`$bg-diffstat-added` | `var(--color-diff-addition-bg)`
`$bg-diffstat-deleted` | `var(--color-diff-deletion-bg)`
`$bg-diffstat-neutral` | `var(--color-diff-neutral-bg)`

# 12.0.0
The v12 release marks a major transition from small, single-purpose npm packages (`primer-core`, `primer-marketing`, `primer-utilities`, etc.) to a single package — `@primer/css` — which contains all of the SCSS source files in subdirectories. Here's what you need to do to migrate different parts of your app:

## npm
First, install the new package.

```sh
npm install --save @primer/css
```

If you use the `primer` package, all you'll need to do is:

```sh
npm uninstall --save primer
```

If you use other packages, such as `primer-utilities`, you will need to uninstall each one by name or use a command line tool like [jq](https://stedolan.github.io/jq/) to list them:

```sh
jq -r '.dependencies | keys[] | select(.|startswith("primer"))' package.json
```

And, if you're feeling saucy, uninstall them all by piping that to `xargs npm uninstall`. :sparkles:

## Sass
There are a couple of things you'll need to change in your Sass setup when migrating to v12. This section is intentionally vague because environments vary wildly between text editors, Sass implementations, and application frameworks. When in doubt, consult the relevant documentation, and feel free to [file an issue][help] if you think that we can help.

### Sass imports
Generally speaking, all of your Sass `@import` statements can be migrated with the following search-and-replace operations, **in the following order**:

* If you import `primer/index.scss` or `primer`, just replace `primer` with `@primer/css` and you're done!
* Otherwise...
    1. Replace `primer-marketing-` with `@primer/css/marketing/`, e.g.
        * `primer-marketing-buttons/index.scss` becomes `@primer/css/marketing/buttons/index.scss`
        * `primer-marketing-utilities/index.scss` becomes `@primer/css/marketing/utilities/index.scss`
    1. Replace `primer-` with `@primer/css/`, e.g.
        * `primer-markdown/index.scss` becomes `@primer/css/markdown/index.scss`
        * `primer-utilities/index.scss` becomes `@primer/css/utilities/index.scss`
    1. Delete `lib/` from every Primer CSS path, e.g.
        * `primer-forms/lib/form-control.scss` becomes `@primer/css/forms/form-control.scss`
        * `primer-navigation/lib/subnav.scss` becomes `@primer/css/navigation/subnav.scss`

If your text editor supports search and replace regular expressions, the following patterns should work:

| find | replace |
| :--- | :--- |
| `primer-marketing-(\w+)(\/lib)?` | `@primer/css/marketing/$1` |
| `primer-(\w+)(\/lib)?` | `@primer/css/$1` |
| `primer\b` | `@primer/css`

#### `primer-migrate`
You can also use the included [`primer-migrate` script](bin/primer-migrate):

```sh
npx -p @primer/css primer-migrate path/to/**/*.scss
```

### Sass include paths
If you've installed Primer CSS with npm, you very likely already have `node_modules` listed in your Sass `includePaths` option, and you won't need to change anything. :tada:

If you've installed Primer CSS with something _other than_ npm, or you don't know how it was installed, consult the documentation for your setup first, then [let us know][help] if you still can't figure it out.

## Compiled CSS files

The compiled CSS files can be found under `/dist` in case you want to directly link to them.

## Fonts
The marketing-specific font files published in the [`fonts` directory](https://unpkg.com/primer-marketing-support@2.0.0/fonts/) of `primer-marketing-support@2.0.0` are published in the `fonts` directory of `@primer/css`. If you use these fonts, you'll need to do the following:

1. Update any scripts that copy the `.woff` font files from `node_modules/primer-marketing-support/fonts` into your application to look for them in `node_modules/@primer/css/fonts`.
1. Update any webpack (or other bundler) resolution rules that look for fonts in `primer-marketing-support/fonts` to look for them in `@primer/css/fonts`.
1. Customize the [`$marketing-font-path` variable](src/marketing/support/variables.scss#L1) to match the path from which they're served.

[help]: https://github.com/primer/css/issues/new?title=Help!&labels=v12,migration
