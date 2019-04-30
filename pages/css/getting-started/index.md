---
title: Getting started
path: getting-started/index
---

Primer CSS is [open-sourced on GitHub](https://github.com/primer/primer) and [available on npm](https://www.npmjs.com/package/primer).

## Installing via npm

We recommend installing Primer CSS with npm: `npm install --save @primer/css`.

### Before you start

Primer CSS requires npm version 3 or above. You can check which version you have by running `npm -v`. If you have a version that's older than 3.0, you can update it with `npm install npm@latest -g`. For more info, read the [npm install docs](https://docs.npmjs.com/getting-started/installing-node).

### Initialize npm project

Begin by initializing your project with a `package.json` file. You can read more on how to do this [in the npm documentation](https://docs.npmjs.com/getting-started/using-a-package.json#creating-a-packagejson).

### Install Primer CSS

Install the Primer CSS npm package modules by running `npm install @primer/css`. This will install all of the SCSS source files into the `node_modules/@primer/css` directory.

```
npm install primer --save
```

### For a Jekyll site

Make sure you have [Jekyll](https://jekyllrb.com/) version `3.3.1` or greater with:

```
jekyll -v
```

If you have an older version, follow the instructions in the [upgrading docs](https://jekyllrb.com/docs/upgrading/).

Once you have Jekyll up and running, you will need to add this configuration to your `_config.yml` file. This let's the sass compiler know where your code lives.

```yml
sass:
  # Where you keep your scss files
  sass_dir: assets/css/
  # Where sass should look for other scss
  load_paths:
    - node_modules/
```

It's best practice to import all of this scss into one file, usually named `index.scss`. From this file you'll import one or more Primer CSS bundles and any other custom code you write.

```scss
@import "@primer/css/core/index.scss";
// These files live in the same directory as the index file.
@import "./custom-1.scss";
@import "./custom-2.scss";
```

Here's an example of how it might look if you installed only a few Primer CSS components with some custom variable overrides. The `$blue` uses the default primer blue in the text utilities, then the new blue in `"custom-that-uses-primer-variables.scss"` and `.foo`.

```scss
@import "@primer/css/utilities/index.scss";
@import "primer-buttons/index.scss";

// Import color variables for custom code
@import "primer-support/index.scss";

// Override default blue
$blue: #0000ff;

@import "./custom-that-uses-primer-variables.scss";

.foo {
  background: $blue;
  font-size: $h2-size;
  color: $text-gray;
}
```

Don't forget to add the compiled CSS to the `<head>` section of your page.

```html inert=true
<link href="path/to/style.css" rel="stylesheet">
```

## Using Primer CSS on a static site

You won't need to install any node modules for a static site, you can use the built CSS. The best thing to do is to [download the built CSS](https://unpkg.com/primer/build/build.css) from the npm module and host it yourself. If that's not an option, you can include a CDN link in your html:

```html inert=true
<link href="https://unpkg.com/primer/build/build.css" rel="stylesheet">
```
