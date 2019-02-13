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
Generally speaking, all of your Sass `@import` statements can be migrated with three search-and-replace operations, in this order:

| find | replace |
| :--- | :--- |
| `primer/index.scss` | `@primer/css/index.scss` |
| `primer-marketing-<package>/index.scss` | `@primer/css/marketing/<package>/index.scss` |
| `primer-<package>/index.scss` | `@primer/css/<package>/index.scss` |

Here's the full list of path changes, if you'd like to check your work:

**:rotating_light: TODO :rotating_light:**

### Sass include paths
If you've installed Primer CSS with npm, you very likely already have `node_modules` listed in your Sass `includePaths` option, and you won't need to change anything. :tada:

If you've installed Primer CSS with something _other than_ npm, or you don't know how it was installed, consult the documentation for your setup first, then [let us know][help] if you still can't figure it out.

## Fonts
The marketing-specific font files published in the [`fonts` directory](https://unpkg.com/primer-marketing-support@2.0.0/fonts/) of `primer-marketing-support@2.0.0` are published in the `fonts` directory of `@primer/css`. If you use these fonts, you'll need to do two things to migrate:

1. Update any scripts that copy the `.woff` font files from `node_modules/primer-marketing-support/fonts` into your application to look for them in `node_modules/@primer/css/fonts`.
1. Update any webpack (or other bundler) resolution rules that look for fonts in `primer-marketing-support/fonts` to look for them in `@primer/css/fonts`.
1. Customize the [`$marketing-font-path` variable](https://github.com/primer/css/blob/645f5f8/modules/primer-marketing-support/lib/variables.scss#L1) (**TODO**: update link to new path in master) to match where they're hosted.

[help]: https://github.com/primer/css/issues/new?title=Help!
