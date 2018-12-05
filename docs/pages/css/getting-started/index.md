---
title: Getting started
doc_type: css
category: getting_started
sidebar: {root: true}
---

Our CSS framework, Primer, is [open-sourced on GitHub](https://github.com/primer/primer) and [hosted on npm](https://www.npmjs.com/package/primer). Our modules are grouped into three packages: [primer-core](https://github.com/primer/primer/tree/master/modules/primer-core), [primer-product](https://github.com/primer/primer/tree/master/modules/primer-product), and [primer-marketing](https://github.com/primer/primer/tree/master/modules/primer-marketing). `primer-core` contains packages used in both product (github.com) and marketing (logged out homepage). To install all of primer, you can use [primer](https://github.com/primer/primer) which is a grouping of core, product and marketing.

## Installing via npm

We recommend using npm to install primer because of how easy npm is for managing dependencies.

### Before you start

Primer packages require npm version 3 or above. You can check what version you have by running `npm -v`. If you have a version that's older than 3.0, you can update it by running `npm install npm@latest -g`. For more info, read the [npm install docs](https://docs.npmjs.com/getting-started/installing-node).

### Initialize npm project

Begin by initializing your project with a `package.json` file. You can read more on how to do this [in the npm documentation](https://docs.npmjs.com/getting-started/using-a-package.json#creating-a-packagejson).

### Install primer modules

Install the primer modules you wish to use by running the npm install command. This will install the module and all the dependencies into the `node_modules` directory.

```
npm install primer --save
```

### For a Jekyll site

Make sure you have jekyll >= `3.3.1`

```
❯ jekyll -v
jekyll 3.3.1
```

If you have an older version, jekyllrb.com has some useful [upgrading docs](https://jekyllrb.com/docs/upgrading/).

Once you have jekyll up and running, you will need to add this configuration to your `_config.yml` file. This let's the sass compiler know where your code lives.

```yml
sass:
  # Where you keep your scss files
  sass_dir: assets/css/
  # Where sass should look for other scss
  load_paths:
    - node_modules/
```

It's best practice to import all of this scss into one file, usually named `index.scss`. From this file you'll import your primer code and any other custom code you write.

```css
---
---

@import "primer-core/index.scss";
/* These files live in the same directory as the index file. */
@import "custom-1.scss";
@import "custom-2.scss";
```

Here's an example of how it might look if you installed only a few primer components with some custom variable overrides. The `$blue` uses the default primer blue in the text utilities, then the new blue in `"custom-that-uses-primer-variables.scss"` and `.foo`.

```css
---
---

@import "primer-utilities/index.scss";
@import "primer-buttons/index.scss";

/* Import color variables for custom code */
@import "primer-support/index.scss";

/* Override default blue*/
$blue: #0000ff;

@import "custom-that-uses-primer-variables.scss";

.foo {
  background: $blue;
  font-size: $h2-size;
  color: $text-gray;
}
```

Don't forget to add the compiled CSS to the `<head>` section of your page.

```html
<link href="/assets/css/index.css" rel="stylesheet">
```

## Using primer on a static site

You won't need to install any node modules for a static site, you can use the built CSS. The best thing to do is to [download the built CSS](https://unpkg.com/primer/build/build.css) from the npm module and host it yourself. But if that is not an option you can include the cdn link in your html.

```html
<link href="https://unpkg.com/primer/build/build.css" rel="stylesheet">
```
