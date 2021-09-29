---
title: Linting
path: tools/linting
---

We use linters to enforce [coding principles and standards](/principles). On every pull request we run the linters on the code to make sure any changes meet our standards. When a commit contains code that doesn't meet the standards, the build fails which blocks merging into main and deploying to production.

For teams working on `github/github` this configuration is all setup for you. While we do recommend you also [setup a plugin](#plugins) in your editor, this is not required.

For everyone else we encourage you to adopt all or some of these tools in your workflow.

## CSS

We use [stylelint](http://stylelint.io/) to lint our CSS. If you are working on `github/github` you don't need to do any setup because stylelint comes bundled within the repository. If you are working on other properties, you may need to setup stylelint. You can install stylelint via npm:

```
npm install -g stylelint
```

Whether you work on `github/github` or not, it's useful to see lint errors locally. The easiest way to lint your code is to install a [plugin](#plugins) in your workflow. If you prefer to run stylelint manually, pass it a glob pattern of the files you want to lint. If you work on `github/github`, you can run stylelint from the command line:

```
bin/stylelint "app/assets/stylesheets/**/*.scss" --syntax scss
```

For more advanced usage, we recommend reading the [stylelint user guide](http://stylelint.io/user-guide/) and checking out our [primer stylelint configuration](https://github.com/primer/stylelint-config).

### Configuration

Stylelint is [configured by a JSON file](http://stylelint.io/user-guide/configuration/) that specifies which linter rules we enforce. If you are working on `github/github`, you don't need to do any setup because the configuration is included within the repository bundle.

We have extracted out our configuration file into a separate repository [primer/stylelint-config](https://github.com/primer/stylelint-config). This gives us a central source where we can keep the configuration up-to-date and distribute easily across all our projects.

To [use the configuration](https://github.com/primer/stylelint-config#usage) in your project, install the config `npm install --save @primer/stylelint-config` via npm, and extend the config in your `.stylelintrc` file. Put the file in the root directory of your project.

```json
{
  "extends": "@primer/stylelint-config"
}
```

A list of all the specific rules we have enabled are documented in [the package README](https://github.com/primer/stylelint-config#documentation).

### Disabling

We use linters to help ensure our CSS is written according to our principles. On occasion it's necessary to break those principles and disable a linter. This is usually because of one of the following scenarios:

- There is no other way to achieve the desired style due to other code limitations, such as the way the views are rendered or the way the content is output (such as rendered markdown).
- There is no other way to achieve the desired style due to conflicts with existing styles that would require considerable effort to fix.
- Breaking a lint rule offers an improvement to code readability and/or maintainability (this is often the case when writing components and supporting SCSS, such as mixins and functions).

To disable a linter, place a `// stylelint-disable` comment around the specific block of CSS that you need to override. For example:

```scss
// When a branch name is a link
// stylelint-disable selector-no-qualifying-type
a.branch-name {
  color: $brand-blue;
}
// stylelint-enable selector-no-qualifying-type
```

**If you choose to disable a linting rule...**

1. You'll need to specify a reason for disabling the lint.
2. Say what lint you're disabling, this example has `selector-no-qualifying-type`.
3. Make sure to `disable` then `enable` the lint again after your code block. This ensures that the rule is re-enabled for any code after the block in question.

When you disable a linter on GitHub, [Sentinel](https://github.com/github/sentinel) will post a comment on your pull request notifying the Design Systems team of this override. This is because disabled lints act as a signal that there may be issues with Primer and/or the CSS in question.

While linters shouldn't be disabled without consideration, essentially they act as a guide to how we write CSS rather than steadfast rules. For more info on disabling configuration, visit the [stylelint docs](http://stylelint.io/user-guide/configuration/#turning-rules-off-from-within-your-css).

### Plugins

Our linter runs on every commit, but finding you have a lint error after a push can be frustrating and waste time. To avoid this, a [collection of editor plugins](http://stylelint.io/user-guide/complementary-tools/) are available to help you lint while you code..

The Design Systems team recommends using [Atom](https://atom.io/) with the [linter-stylelint](https://github.com/AtomLinter/linter-stylelint) package installed.

![image](https://cloud.githubusercontent.com/assets/54012/21456489/6a10b370-c8f6-11e6-9199-bb3709e79794.png)

We also have a [list of Atom packages](/tools/atom-packages) that we find useful for development.

## HTML

A custom Rails test called `styles_match_markup_test.rb` runs for our `.html.erb` files and checks for unused selectors. The test collects a list of all the class names used in our markup, JavaScript and documentation, then compares that with a list of all our class names in our `.scss` files.

This test isn't smart enough to know about CSS inheritance, but will help you catch any dead CSS in your markup or styles. Run the test locally with this command.

```
bin/testrb test/fast/linting/styles_match_markup_test.rb
```

Sometimes you will have generated class names that the test misses. Adding these class names to the regular expression enabled `selectors_match_markup_whitelist.yml` file will quiet the tests.

## Files

We enforce `.scss` file naming to be lowercase, only use `-` hyphens and no leading `_` underscores. Removing underscores from the files is an anti-pattern for Sass, but we're doing this because we're proactively moving away from Sass to match CSS web standards.

## Octicons

We test for the proper use of the [Octicons helper](https://github.com/primer/octicons/tree/master/lib/octicons_helper#readme) in our templates and make sure that the symbols used are valid octicons.

## IE rule limit

We check that our compiled CSS assets don't contain more selectors than the [IE CSS selector limits](https://blogs.msdn.microsoft.com/ieinternals/2011/05/14/stylesheet-limits-in-internet-explorer/).

## Linting dotcom

There are a few handy scripts to make your life easier when working with CSS on dotcom, especially when doing bigger refactors. Checkout the [Stylelint guide](https://github.com/github/design-systems/blob/main/tools/stylelint.md).
