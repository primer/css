# 16.0.0
In `v16` we're moving all colors to [primer/primitives](https://github.com/primer/primitives). This lets us use the same Primer colors across different libraries. Primer CSS also switches from using SASS variables for colors to CSS variables. Bellow a migration guide for all the variables:

### Color scale

`v15` | `v16`
--- | ---
`$black` | `var(--color-scale-black)`
`$white` | `var(--color-scale-white)`
`$gray-000` | `var(--color-scale-gray-0)`
`$gray-100` | `var(--color-scale-gray-1)`
... | ...
`$pink-800` | `var(--color-scale-pink-8)`
`$pink-900` | `var(--color-scale-pink-9)`

### Functional colors

For variables that don't have a replacement, for now you can use a CSS variable from the color scale. Eventually we would like to remove these though.

`v15` | `v16`
--- | ---
**Text** |
`$text-gray-dark` (`$gray-900`)         | `var(--color-text-primary)`
`$text-gray` (`$gray-600`)              | `var(--color-text-secondary)`
`$text-gray-light` (`$gray-500`)        | `var(--color-text-tertiary)`
`$text-white` (`$white`)                | `var(--color-text-inverse)`
`$text-blue` (`$blue-500`)              | `var(--color-text-link-primary)`
`$text-green` (`$green-600`)            | `var(--color-text-success)`
`$text-red` (`$red-600`)                | `var(--color-text-danger)`
`$text-yellow` (`$yellow-800`)          | `var(--color-text-warning)`
n/a                                     | `var(--color-text-placeholder)` (`$gray-300`)
n/a                                     | `var(--color-text-disabled)` (`$gray-300`)
n/a                                     | `var(--color-text-link-secondary)` (`$gray-900`)
n/a                                     | `var(--color-text-link-tertiary)` (`$gray-600`)
`$text-black` (`$black`)                | n/a
`$text-orange` (`$orange-900`)          | n/a
`$text-orange-light` (`$orange-600`)    | n/a
`$text-purple` (`$purple-500`)          | n/a
`$text-pink` (`$pink-500`)              | n/a
**Icon** |
n/a                                     | `var(--color-icon-primary)` (`$gray-900`)
n/a                                     | `var(--color-icon-secondary)` (`$gray-600`)
n/a                                     | `var(--color-icon-tertiary)` (`$gray-400`)
n/a                                     | `var(--color-icon-info)` (`$blue-500`)
n/a                                     | `var(--color-icon-danger)` (`$red-500`)
n/a                                     | `var(--color-icon-success)` (`$green-600`)
n/a                                     | `var(--color-icon-warning)` (`$yellow-800`)
**Border** |
`$border-color` (`$gray-200`)                   | `var(--color-border-primary)`
`$border-gray` (`$gray-200`)                    | `var(--color-border-primary)`
`$border-gray-light` (`lighten($gray-200, 3%)`) | `var(--color-border-primary-light)`
`$border-gray-dark` (`$gray-300`)               | `var(--color-border-secondary)`
`$border-white` (`$white`)                      | `var(--color-border-inverse)`
`$border-blue` (`$blue-500`)                    | `var(--color-border-info)`
`$border-green` (`$green-400`)                  | `var(--color-border-success)`
`$border-red` (`$red-500`)                      | `var(--color-border-danger)`
`$border-yellow` (`$yellow-600`)                | `var(--color-border-warning)`
`$border-gray-darker` (`$gray-700`)     | n/a
`$border-blue-light` (`$blue-200`)      | n/a
`$border-red-light` (`$red-300`)        | n/a
`$border-purple` (`$purple-500`)        | n/a
`$border-black-fade` (`$black-fade-15`) | n/a
`$border-white-fade` (`$white-fade-15`) | n/a
`$border-green-light` (`desaturate($green-300, 40%)`) | n/a
**Background** |
`$bg-white`        (`$white`)       | `var(--color-bg-primary)` or `var(--color-bg-canvas-inverse)`
`$bg-gray`         (`$gray-100`)    | `var(--color-bg-secondary)`
`$bg-gray-light`   (`$gray-000`)    | `var(--color-bg-tertiary)`
`$bg-gray-dark`    (`$gray-900`)    | `var(--color-bg-canvas-inverse)`
`$bg-red`          (`$red-500`)     | `var(--color-bg-danger-inverse)`
`$bg-red-light`    (`$red-000`)     | `var(--color-bg-danger)`
`$bg-green`        (`$green-500`)   | `var(--color-bg-success-inverse)`
`$bg-green-light`  (`$green-100`)   | `var(--color-bg-success)`
`$bg-blue`         (`$blue-500`)    | `var(--color-bg-info-inverse)`
`$bg-blue-light`   (`$blue-000`)    | `var(--color-bg-info)`
`$bg-yellow`       (`$yellow-500`)  | `var(--color-bg-warning-inverse)`
`$bg-yellow-light` (`$yellow-200`)  | `var(--color-bg-warning)`
n/a                                 | `var(--color-bg-canvas)` (`$white`)
`$bg-black` (`$black`)              | n/a
`$bg-black-fade` (`$black-fade-50`) | n/a
`$bg-orange` (`$orange-700`)        | n/a
`$bg-purple` (`$purple-500`)        | n/a
`$bg-purple-light` (`$purple-000`)  | n/a
`$bg-pink` (`$pink-500`)            | n/a
`$bg-yellow-dark` (`$yellow-700`)   | n/a
**Box Shadow** |
`$box-shadow`               | `var(--color-shadow-small)`
`$box-shadow-medium`        | `var(--color-shadow-medium)`
`$box-shadow-large`         | `var(--color-shadow-large)`
`$box-shadow-extra-large`   | `var(--color-shadow-extra-large)`
`$box-shadow-highlight`     | `var(--color-shadow-highlight)`
`$box-shadow-inset`         | `var(--color-shadow-inset)`
`$box-shadow-focus`         | `var(--color-shadow-focus)`

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
