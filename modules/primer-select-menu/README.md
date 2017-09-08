# Primer CSS / Select Menu

[![npm version](http://img.shields.io/npm/v/primer-select-menu.svg)](https://www.npmjs.org/package/primer-select-menu)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> The select menu provides advanced support for navigation, filtering, and more. Any popover within a select menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.

This repository is a module of the full [primer-css][primer-css] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-select-menu` with this command.

```
$ npm install --save primer-select-menu
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-select-menu/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Documentation

<!-- %docs
title: Select Menu
status: Experimental
-->

---
title: Select menu
status: Stable
source: /app/assets/stylesheets/primer-product/select-menu.scss
---

The select menu provides advanced support for navigation, filtering, and more. Any popover within a select menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.

{:toc}

## Basic example

Select menus should be trigged by a `&lt;button&gt;`. In the markup below, all classes prefixed with `select-menu` and `.js-` are required.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Choose an item
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a class=&#34;select-menu-item selected js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 1&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 2&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 3&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

## Menu contents

The contents of a select menu are easily customized with support for headers, footers, tabbed lists, and live filtering.

### Headers

Add a header to any select menu&#39;s popover to house a clear title and a dismiss button.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Choose an item
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a class=&#34;select-menu-item selected js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 1&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 2&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 3&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### List items

The list of items is arguably the most important subcomponent within the menu. Build them out of anchors, buttons, or just about any [interactive content](http://w3c.github.io/html/dom.html#interactive-content). [List items are also customizable](#menu-list-items) with options for avatars, additional icons, and multiple lines of text.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Choose an item
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;button type=&#34;button&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 1&lt;/span&gt;
        &lt;/button&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 2&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 3&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### Filter

Enable live filtering of list items within a `.select-menu-list` with a search input. Only a handful of changes to your menu&#39;s markup are required:

- Add the text input, housed in `.select-menu-filters`, before the `.select-menu-list`.
- Add two attritubes, `data-filterable-for` and `data-filterable-type`, to the `.select-menu-list` to scope the filter to the list.

There are no required changes for the `.select-menu-item`s.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    &lt;i&gt;Label:&lt;/i&gt;
    &lt;span class=&#34;js-select-button&#34;&gt;Choose an item&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder js-menu-content js-navigation-container&#34;&gt;
    &lt;div class=&#34;select-menu-modal&#34;&gt;
      &lt;div class=&#34;select-menu-header&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;js-select-menu-deferred-content&#34;&gt;
        &lt;div class=&#34;select-menu-filters&#34;&gt;
          &lt;div class=&#34;select-menu-text-filter&#34;&gt;
            &lt;input type=&#34;text&#34; id=&#34;example-filter-field-1&#34; class=&#34;form-control js-filterable-field js-navigation-enable&#34; placeholder=&#34;Filter this list&#34; aria-label=&#34;Type to filter&#34; autocomplete=&#34;off&#34;&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&#34;select-menu-list&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34;&gt;
          &lt;input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Test element
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Filter to this
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              More content
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Something else
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              One more thing
            &lt;/div&gt;
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### Tabs

Sometimes you need two or more lists of items in your select menu, e.g. branches and tags. Select menu lists can be tabbed with the addition of the tab toggles at the top of the menu and a few changes to the `.select-menu-list`.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    &lt;i&gt;Label:&lt;/i&gt;
    &lt;span class=&#34;js-select-button&#34;&gt;Choose an item&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder js-menu-content js-navigation-container&#34;&gt;
    &lt;div class=&#34;select-menu-modal&#34;&gt;
      &lt;div class=&#34;select-menu-header&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;js-select-menu-deferred-content&#34;&gt;
        &lt;div class=&#34;select-menu-filters&#34;&gt;
          &lt;div class=&#34;select-menu-tabs&#34;&gt;
            &lt;ul&gt;
              &lt;li class=&#34;select-menu-tab&#34;&gt;
                &lt;a href=&#34;#url&#34; data-tab-filter=&#34;branches&#34; data-filter-placeholder=&#34;Filter for &#34; class=&#34;js-select-menu-tab&#34; aria-current=&#34;false&#34;&gt;Branches&lt;/a&gt;
              &lt;/li&gt;
              &lt;li class=&#34;select-menu-tab&#34;&gt;
                &lt;a href=&#34;#url&#34; data-tab-filter=&#34;tags&#34; data-filter-placeholder=&#34;Find a tag…&#34; class=&#34;js-select-menu-tab selected&#34; aria-current=&#34;true&#34;&gt;Tags&lt;/a&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&#34;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34; data-tab-filter=&#34;branches&#34; role=&#34;menu&#34;&gt;
          &lt;input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 1
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 2
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 3
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 4
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 5
            &lt;/div&gt;
          &lt;/a&gt;
        &lt;/div&gt;
        &lt;div class=&#34;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34; data-tab-filter=&#34;tags&#34; role=&#34;menu&#34;&gt;
          &lt;input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 1
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 2
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 3
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 4
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 5
            &lt;/div&gt;
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### Filter and tabs

Show a filter and tabs in a single select menu.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    &lt;i&gt;Label:&lt;/i&gt;
    &lt;span class=&#34;js-select-button&#34;&gt;Choose an item&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder js-menu-content js-navigation-container&#34;&gt;
    &lt;div class=&#34;select-menu-modal&#34;&gt;
      &lt;div class=&#34;select-menu-header&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;js-select-menu-deferred-content&#34;&gt;
        &lt;div class=&#34;select-menu-filters&#34;&gt;
          &lt;div class=&#34;select-menu-text-filter&#34;&gt;
            &lt;input type=&#34;text&#34; id=&#34;example-filter-field-2&#34; class=&#34;form-control js-filterable-field js-navigation-enable&#34; placeholder=&#34;Filter labels&#34; aria-label=&#34;Type or choose a label&#34; autocomplete=&#34;off&#34;&gt;
          &lt;/div&gt;
          &lt;div class=&#34;select-menu-tabs&#34;&gt;
            &lt;ul&gt;
              &lt;li class=&#34;select-menu-tab&#34;&gt;
                &lt;a href=&#34;#url&#34; data-tab-filter=&#34;branches&#34; data-filter-placeholder=&#34;Filter for &#34; class=&#34;js-select-menu-tab&#34; aria-current=&#34;false&#34;&gt;Branches&lt;/a&gt;
              &lt;/li&gt;
              &lt;li class=&#34;select-menu-tab&#34;&gt;
                &lt;a href=&#34;#url&#34; data-tab-filter=&#34;tags&#34; data-filter-placeholder=&#34;Find a tag…&#34; class=&#34;js-select-menu-tab selected&#34; aria-current=&#34;true&#34;&gt;Tags&lt;/a&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&#34;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34; data-tab-filter=&#34;branches&#34; role=&#34;menu&#34;&gt;
          &lt;input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 1
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 2
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 3
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 4
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Branch 5
            &lt;/div&gt;
          &lt;/a&gt;
        &lt;/div&gt;
        &lt;div class=&#34;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34; data-tab-filter=&#34;tags&#34; role=&#34;menu&#34;&gt;
          &lt;input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 1
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 2
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 3
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 4
            &lt;/div&gt;
          &lt;/a&gt;
          &lt;a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;&gt;
            &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
            &lt;div class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
              Tag 5
            &lt;/div&gt;
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### Blankslate

Sometimes a select menu needs to communicate a &#34;blank slate&#34; where there&#39;s no content in the menu&#39;s list. Usually these include a clear call to action to add said content to the list. Swap out the contents of a `.select-menu-list` with the `.select-menu-blankslate` and customize it&#39;s contents as needed.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Choose an item
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;div class=&#34;select-menu-blankslate&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :height =&gt; 32) %&gt;
          &lt;h3&gt;Select menu blankslate&lt;/h3&gt;
          &lt;p&gt;Some text here to describe why you&#39;re seeing a blankslate and how to go about fixing that up.&lt;/p&gt;
          &lt;button type=&#34;button&#34; class=&#34;btn btn-sm btn-primary mt-3 mb-3&#34;&gt;Deal with it&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

## Menu list items

Select menu list items have a few options available to them for more complex information patterns.

### Multi-line text

Sometimes the contents of your select menu list require a heading and a description instead of just a string. Select menus come with some default styles for such situations with the addition of a few classes and wrapping `&lt;span&gt;`s.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    &lt;i&gt;Multi line:&lt;/i&gt;
    &lt;span class=&#34;js-select-button&#34;&gt;Choose an item&lt;/span&gt;
  &lt;/button&gt;

  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal subscription-menu-modal js-menu-content&#34; aria-hidden=&#34;false&#34;&gt;
      &lt;div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Notifications&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container js-active-navigation-container&#34; role=&#34;menu&#34;&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item selected&#34; role=&#34;menuitem&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;div class=&#34;select-menu-item-text&#34;&gt;
            &lt;span class=&#34;select-menu-item-heading&#34;&gt;Not watching&lt;/span&gt;
            &lt;span class=&#34;description&#34;&gt;Be notified when participating or @mentioned.&lt;/span&gt;
            &lt;span class=&#34;js-select-button-text hidden-select-button-text&#34;&gt;
              Watch
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; role=&#34;menuitem&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;div class=&#34;select-menu-item-text&#34;&gt;
            &lt;span class=&#34;select-menu-item-heading&#34;&gt;Watching&lt;/span&gt;
            &lt;span class=&#34;description&#34;&gt;Be notified of all conversations.&lt;/span&gt;
            &lt;span class=&#34;js-select-button-text hidden-select-button-text&#34;&gt;
              Stop watching
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; role=&#34;menuitem&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;div class=&#34;select-menu-item-text&#34;&gt;
            &lt;span class=&#34;select-menu-item-heading&#34;&gt;Ignoring&lt;/span&gt;
            &lt;span class=&#34;description&#34;&gt;Never be notified.&lt;/span&gt;
            &lt;span class=&#34;js-select-button-text hidden-select-button-text&#34;&gt;
              Stop ignoring
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### With avatars

Add avatars to a select menu to help indicate when a menu list item represents a user.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Choose an item
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-gravatar&#34;&gt;
            &lt;%= avatar_for(current_user, 20, :alt =&gt; &#34;&#34;) %&gt;
          &lt;/span&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
            &lt;%= current_user.to_s %&gt;
          &lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-gravatar&#34;&gt;
            &lt;%= avatar_for(current_user, 20, :alt =&gt; &#34;&#34;) %&gt;
          &lt;/span&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
            &lt;%= current_user.to_s %&gt;
          &lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-gravatar&#34;&gt;
            &lt;%= avatar_for(current_user, 20, :alt =&gt; &#34;&#34;) %&gt;
          &lt;/span&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
            &lt;%= current_user.to_s %&gt;
          &lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### With dismiss icon

Indicate how to toggle the selected state on a select menu list item with the addition of a dismiss icon.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Choose an item
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;button type=&#34;button&#34; class=&#34;select-menu-item selected js-navigation-item width-full&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
            &lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Click to remove&#34;) %&gt;
            Item 1
          &lt;/span&gt;
        &lt;/button&gt;
        &lt;button type=&#34;button&#34; class=&#34;select-menu-item js-navigation-item width-full&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
            &lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Click to remove&#34;) %&gt;
            Item 2
          &lt;/span&gt;
        &lt;/button&gt;
        &lt;button type=&#34;button&#34; class=&#34;select-menu-item js-navigation-item width-full&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
            &lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Click to remove&#34;) %&gt;
            Item 3
          &lt;/span&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

## Menu alignment

By default select menus are automatically aligned to the top left corner of an element, but you can also customize that with a few utilities or custom display.

### Right aligned menus

When select menus are right aligned, you can also right-align the select menu&#39;s popover with `.select-menu-modal-right`.

```html
&lt;div class=&#34;select-menu float-right select-menu-modal-right js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Choose an item
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 1&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 2&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 3&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

## Button options

Customize the select menu&#39;s trigger button by changing the button modifier class, enabling stateful text, and more.

### Style options

Since select menus are powered by JavaScript behaviors, the specific display of your select menu button is up to you and your use case.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Default button
  &lt;/button&gt;

  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 1&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 2&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 3&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn btn-primary select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Primary button
  &lt;/button&gt;

  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 1&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 2&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 3&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn btn-outline select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Outline button
  &lt;/button&gt;

  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 1&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 2&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 3&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn-link select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    Link button
  &lt;/button&gt;

  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 1&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 2&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;Item 3&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### Stateful text

Select menu buttons have the option of showing the current selection in the button itself. Wrap the string you intend to update with a `.js-select-button` and the select menu JavaScript will automatically update the contents of that element with the selected item&#39;s text.

Open the select menu below and click different options to see it in action.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    &lt;span class=&#34;js-select-button&#34;&gt;master&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;master&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;feature-branch&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;refactor-component-name&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### Emphasized text

Sometimes you want to spice up your select menu with an emphasized label for the type of content within the menu. For example, you show `Branch:` in front of the current branch on our repository Code page. Within the button, wrap your string in an `&lt;i&gt;` element and you&#39;re good to go.

As shown below, emphasized text works great with the stateful text functionality mentioned above.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    &lt;i&gt;Branch:&lt;/i&gt;
    &lt;span class=&#34;js-select-button&#34;&gt;master&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;master&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;feature-branch&lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;refactor-component-name&lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

### Button avatars

Add an avatar to the button, like we do in our context switcher on the logged in dashboard.

```html
&lt;div class=&#34;select-menu js-menu-container js-select-menu&#34;&gt;
  &lt;button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;&gt;
    &lt;div class=&#34;select-menu-button-gravatar js-select-button-gravatar&#34;&gt;
      &lt;%= avatar_for(current_user, 20, :&#34;aria-label&#34; =&gt; &#34;&#34;) %&gt;
    &lt;/div&gt;
    &lt;span class=&#34;js-select-button css-truncate css-truncate-target&#34;&gt;&lt;%= current_user.to_s %&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&#34;select-menu-modal-holder&#34;&gt;
    &lt;div class=&#34;select-menu-modal js-menu-content&#34;&gt;
      &lt;div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;&gt;
        &lt;button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;&gt;&lt;%= octicon(&#34;x&#34;, :&#34;aria-label&#34; =&gt; &#34;Close menu&#34;) %&gt;&lt;/button&gt;
        &lt;span class=&#34;select-menu-title&#34;&gt;Options&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&#34;select-menu-list js-navigation-container&#34;&gt;
        &lt;a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-gravatar&#34;&gt;
            &lt;%= avatar_for(current_user, 20, :&#34;aria-label&#34; =&gt; &#34;&#34;) %&gt;
          &lt;/span&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
            &lt;%= current_user.to_s %&gt;
          &lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-gravatar&#34;&gt;
            &lt;%= avatar_for(current_user, 20, :&#34;aria-label&#34; =&gt; &#34;&#34;) %&gt;
          &lt;/span&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
            &lt;%= current_user.to_s %&gt;
          &lt;/span&gt;
        &lt;/a&gt;
        &lt;a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;&gt;
          &lt;%= octicon(&#34;check&#34;, :class =&gt; &#34;select-menu-item-icon&#34;) %&gt;
          &lt;span class=&#34;select-menu-item-gravatar&#34;&gt;
            &lt;%= avatar_for(current_user, 20, :&#34;aria-label&#34; =&gt; &#34;&#34;) %&gt;
          &lt;/span&gt;
          &lt;span class=&#34;select-menu-item-text js-select-button-text&#34;&gt;
            &lt;%= current_user.to_s %&gt;
          &lt;/span&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
```


<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer-css]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
