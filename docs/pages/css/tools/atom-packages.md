---
title: Atom packages
---

[Atom editor](https://atom.io/) is a _"A hackable text editor for the 21st Century"_ built by GitHub. If you use it as your editor of choice, the design systems team has a list of packages that we find useful for CSS development.

We keep a list of suggested packages in our [atom-packages repository](https://github.com/primer/atom-packages). To install all packages, run this command in your terminal.

```sh
apm install $(curl -L https://raw.githubusercontent.com/primer/atom-packages/master/packages)
```

{:toc}

## Autocomplete Primer

The [Autocomplete Primer package](https://atom.io/packages/autocomplete-primer) is a custom [Primer](https://github.com/primer) package that autocompletes class names for [utilities](https://github.com/primer/primer/tree/master/modules/primer-utilities) and rails helper tags for [octicons](https://github.com/primer/octicons/tree/master/lib/octicons_helper).

Install [autocomplete-primer](https://atom.io/packages/autocomplete-primer) using Atom's package manager or enter this into your terminal:

```sh
apm install autocomplete-primer
```

## Color picker

[Color picker](https://atom.io/packages/color-picker) adds a color picking overlay with sliders and color wheels.

Install [color-picker](https://atom.io/packages/color-picker) using Atom's package manager or enter this into your terminal:

```sh
apm install color-picker
```

## Pigments

[Pigments](https://atom.io/packages/pigments) adds corresponding backgrounds to CSS color values in the editor for higher visibility. It also scans the source files for color variables and displays the true value.

Install [pigments](https://atom.io/packages/pigments) using Atom's package manager or enter this into your terminal:

```sh
apm install pigments
```

## Stylelint linter

We use [Stylelint](./linting/) for linting our CSS, which is an extension to the [Atom linter](https://atom.io/packages/linter) package. To prevent linting errors during the build we recommend you install [linter-stylelint](https://atom.io/packages/linter-stylelint) which will alert you of any errors locally while you work.

Install [linter-stylelint](https://atom.io/packages/linter-stylelint) using Atom's package manager or enter this into your terminal:

```sh
apm install linter linter-stylelint
```
