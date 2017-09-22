# Primer CSS / Select menu

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
title: Select menu
status: Stable
-->

The select menu provides advanced support for navigation, filtering, and more. Any popover within a select menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.

{:toc}

## Basic example

Select menus should be trigged by a `<button>`. In the markup below, all classes prefixed with `select-menu` and `.js-` are required.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Choose an item
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a class=&#34;select-menu-item selected js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 1</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 2</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

## Menu contents

The contents of a select menu are easily customized with support for headers, footers, tabbed lists, and live filtering.

### Headers

Add a header to any select menu&#39;s popover to house a clear title and a dismiss button.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Choose an item
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a class=&#34;select-menu-item selected js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 1</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 2</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### List items

The list of items is arguably the most important subcomponent within the menu. Build them out of anchors, buttons, or just about any [interactive content](http://w3c.github.io/html/dom.html#interactive-content). [List items are also customizable](#menu-list-items) with options for avatars, additional icons, and multiple lines of text.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Choose an item
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <button type=&#34;button&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 1</span>
        </button>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 2</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### Filter

Enable live filtering of list items within a `.select-menu-list` with a search input. Only a handful of changes to your menu&#39;s markup are required:

- Add the text input, housed in `.select-menu-filters`, before the `.select-menu-list`.
- Add two attritubes, `data-filterable-for` and `data-filterable-type`, to the `.select-menu-list` to scope the filter to the list.

There are no required changes for the `.select-menu-item`s.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    <i>Label:</i>
    <span class=&#34;js-select-button&#34;>Choose an item</span>
  </button>
  <div class=&#34;select-menu-modal-holder js-menu-content js-navigation-container&#34;>
    <div class=&#34;select-menu-modal&#34;>
      <div class=&#34;select-menu-header&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;js-select-menu-deferred-content&#34;>
        <div class=&#34;select-menu-filters&#34;>
          <div class=&#34;select-menu-text-filter&#34;>
            <input type=&#34;text&#34; id=&#34;example-filter-field-1&#34; class=&#34;form-control js-filterable-field js-navigation-enable&#34; placeholder=&#34;Filter this list&#34; aria-label=&#34;Type to filter&#34; autocomplete=&#34;off&#34;>
          </div>
        </div>
        <div class=&#34;select-menu-list&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34;>
          <input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Test element
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Filter to this
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              More content
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Something else
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              One more thing
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Tabs

Sometimes you need two or more lists of items in your select menu, e.g. branches and tags. Select menu lists can be tabbed with the addition of the tab toggles at the top of the menu and a few changes to the `.select-menu-list`.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    <i>Label:</i>
    <span class=&#34;js-select-button&#34;>Choose an item</span>
  </button>
  <div class=&#34;select-menu-modal-holder js-menu-content js-navigation-container&#34;>
    <div class=&#34;select-menu-modal&#34;>
      <div class=&#34;select-menu-header&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;js-select-menu-deferred-content&#34;>
        <div class=&#34;select-menu-filters&#34;>
          <div class=&#34;select-menu-tabs&#34;>
            <ul>
              <li class=&#34;select-menu-tab&#34;>
                <a href=&#34;#url&#34; data-tab-filter=&#34;branches&#34; data-filter-placeholder=&#34;Filter for &#34; class=&#34;js-select-menu-tab&#34; aria-current=&#34;false&#34;>Branches</a>
              </li>
              <li class=&#34;select-menu-tab&#34;>
                <a href=&#34;#url&#34; data-tab-filter=&#34;tags&#34; data-filter-placeholder=&#34;Find a tag…&#34; class=&#34;js-select-menu-tab selected&#34; aria-current=&#34;true&#34;>Tags</a>
              </li>
            </ul>
          </div>
        </div>
        <div class=&#34;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34; data-tab-filter=&#34;branches&#34; role=&#34;menu&#34;>
          <input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 1
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 2
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 3
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 4
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 5
            </div>
          </a>
        </div>
        <div class=&#34;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34; data-tab-filter=&#34;tags&#34; role=&#34;menu&#34;>
          <input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 1
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 2
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 3
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 4
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 5
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Filter and tabs

Show a filter and tabs in a single select menu.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    <i>Label:</i>
    <span class=&#34;js-select-button&#34;>Choose an item</span>
  </button>
  <div class=&#34;select-menu-modal-holder js-menu-content js-navigation-container&#34;>
    <div class=&#34;select-menu-modal&#34;>
      <div class=&#34;select-menu-header&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;js-select-menu-deferred-content&#34;>
        <div class=&#34;select-menu-filters&#34;>
          <div class=&#34;select-menu-text-filter&#34;>
            <input type=&#34;text&#34; id=&#34;example-filter-field-2&#34; class=&#34;form-control js-filterable-field js-navigation-enable&#34; placeholder=&#34;Filter labels&#34; aria-label=&#34;Type or choose a label&#34; autocomplete=&#34;off&#34;>
          </div>
          <div class=&#34;select-menu-tabs&#34;>
            <ul>
              <li class=&#34;select-menu-tab&#34;>
                <a href=&#34;#url&#34; data-tab-filter=&#34;branches&#34; data-filter-placeholder=&#34;Filter for &#34; class=&#34;js-select-menu-tab&#34; aria-current=&#34;false&#34;>Branches</a>
              </li>
              <li class=&#34;select-menu-tab&#34;>
                <a href=&#34;#url&#34; data-tab-filter=&#34;tags&#34; data-filter-placeholder=&#34;Find a tag…&#34; class=&#34;js-select-menu-tab selected&#34; aria-current=&#34;true&#34;>Tags</a>
              </li>
            </ul>
          </div>
        </div>
        <div class=&#34;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34; data-tab-filter=&#34;branches&#34; role=&#34;menu&#34;>
          <input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 1
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 2
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 3
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 4
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Branch 5
            </div>
          </a>
        </div>
        <div class=&#34;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket&#34; data-filterable-for=&#34;example-filter-field&#34; data-filterable-type=&#34;substring&#34; data-tab-filter=&#34;tags&#34; role=&#34;menu&#34;>
          <input hidden=&#34;checkbox&#34; name=&#34;example&#34; value=&#34;&#34;>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 1
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 2
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 3
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 4
            </div>
          </a>
          <a href=&#34;#url&#34; class=&#34;select-menu-item js-navigation-item&#34;>
            <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
            <div class=&#34;select-menu-item-text js-select-button-text&#34;>
              Tag 5
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Blankslate

Sometimes a select menu needs to communicate a &#34;blank slate&#34; where there&#39;s no content in the menu&#39;s list. Usually these include a clear call to action to add said content to the list. Swap out the contents of a `.select-menu-list` with the `.select-menu-blankslate` and customize it&#39;s contents as needed.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Choose an item
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <div class=&#34;select-menu-blankslate&#34;>
          <%= octicon(&#34;check&#34;, :height => 32) %>
          <h3>Select menu blankslate</h3>
          <p>Some text here to describe why you&#39;re seeing a blankslate and how to go about fixing that up.</p>
          <button type=&#34;button&#34; class=&#34;btn btn-sm btn-primary mt-3 mb-3&#34;>Deal with it</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Menu list items

Select menu list items have a few options available to them for more complex information patterns.

### Multi-line text

Sometimes the contents of your select menu list require a heading and a description instead of just a string. Select menus come with some default styles for such situations with the addition of a few classes and wrapping `<span>`s.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    <i>Multi line:</i>
    <span class=&#34;js-select-button&#34;>Choose an item</span>
  </button>

  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal subscription-menu-modal js-menu-content&#34; aria-hidden=&#34;false&#34;>
      <div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Notifications</span>
      </div>
      <div class=&#34;select-menu-list js-navigation-container js-active-navigation-container&#34; role=&#34;menu&#34;>
        <a class=&#34;select-menu-item js-navigation-item selected&#34; role=&#34;menuitem&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <div class=&#34;select-menu-item-text&#34;>
            <span class=&#34;select-menu-item-heading&#34;>Not watching</span>
            <span class=&#34;description&#34;>Be notified when participating or @mentioned.</span>
            <span class=&#34;js-select-button-text hidden-select-button-text&#34;>
              Watch
            </span>
          </div>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; role=&#34;menuitem&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <div class=&#34;select-menu-item-text&#34;>
            <span class=&#34;select-menu-item-heading&#34;>Watching</span>
            <span class=&#34;description&#34;>Be notified of all conversations.</span>
            <span class=&#34;js-select-button-text hidden-select-button-text&#34;>
              Stop watching
            </span>
          </div>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; role=&#34;menuitem&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <div class=&#34;select-menu-item-text&#34;>
            <span class=&#34;select-menu-item-heading&#34;>Ignoring</span>
            <span class=&#34;description&#34;>Never be notified.</span>
            <span class=&#34;js-select-button-text hidden-select-button-text&#34;>
              Stop ignoring
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
```

### With avatars

Add avatars to a select menu to help indicate when a menu list item represents a user.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Choose an item
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-gravatar&#34;>
            <%= avatar_for(current_user, 20, :alt => &#34;&#34;) %>
          </span>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>
            <%= current_user.to_s %>
          </span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-gravatar&#34;>
            <%= avatar_for(current_user, 20, :alt => &#34;&#34;) %>
          </span>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>
            <%= current_user.to_s %>
          </span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-gravatar&#34;>
            <%= avatar_for(current_user, 20, :alt => &#34;&#34;) %>
          </span>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>
            <%= current_user.to_s %>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### With dismiss icon

Indicate how to toggle the selected state on a select menu list item with the addition of a dismiss icon.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Choose an item
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <button type=&#34;button&#34; class=&#34;select-menu-item selected js-navigation-item width-full&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>
            <%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Click to remove&#34;) %>
            Item 1
          </span>
        </button>
        <button type=&#34;button&#34; class=&#34;select-menu-item js-navigation-item width-full&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>
            <%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Click to remove&#34;) %>
            Item 2
          </span>
        </button>
        <button type=&#34;button&#34; class=&#34;select-menu-item js-navigation-item width-full&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>
            <%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Click to remove&#34;) %>
            Item 3
          </span>
        </button>
      </div>
    </div>
  </div>
</div>
```

## Menu alignment

By default select menus are automatically aligned to the top left corner of an element, but you can also customize that with a few utilities or custom display.

### Right aligned menus

When select menus are right aligned, you can also right-align the select menu&#39;s popover with `.select-menu-modal-right`.

```html
<div class=&#34;select-menu float-right select-menu-modal-right js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Choose an item
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 1</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 2</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

## Button options

Customize the select menu&#39;s trigger button by changing the button modifier class, enabling stateful text, and more.

### Style options

Since select menus are powered by JavaScript behaviors, the specific display of your select menu button is up to you and your use case.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Default button
  </button>

  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 1</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 2</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn btn-primary select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Primary button
  </button>

  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 1</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 2</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn btn-outline select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Outline button
  </button>

  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 1</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 2</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn-link select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    Link button
  </button>

  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 1</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 2</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### Stateful text

Select menu buttons have the option of showing the current selection in the button itself. Wrap the string you intend to update with a `.js-select-button` and the select menu JavaScript will automatically update the contents of that element with the selected item&#39;s text.

Open the select menu below and click different options to see it in action.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    <span class=&#34;js-select-button&#34;>master</span>
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>master</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>feature-branch</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>refactor-component-name</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### Emphasized text

Sometimes you want to spice up your select menu with an emphasized label for the type of content within the menu. For example, you show `Branch:` in front of the current branch on our repository Code page. Within the button, wrap your string in an `<i>` element and you&#39;re good to go.

As shown below, emphasized text works great with the stateful text functionality mentioned above.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    <i>Branch:</i>
    <span class=&#34;js-select-button&#34;>master</span>
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>master</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>feature-branch</span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>refactor-component-name</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### Button avatars

Add an avatar to the button, like we do in our context switcher on the logged in dashboard.

```html
<div class=&#34;select-menu js-menu-container js-select-menu&#34;>
  <button class=&#34;btn select-menu-button js-menu-target&#34; type=&#34;button&#34; aria-haspopup=&#34;true&#34; aria-expanded=&#34;false&#34;>
    <div class=&#34;select-menu-button-gravatar js-select-button-gravatar&#34;>
      <%= avatar_for(current_user, 20, :&#34;aria-label&#34; => &#34;&#34;) %>
    </div>
    <span class=&#34;js-select-button css-truncate css-truncate-target&#34;><%= current_user.to_s %></span>
  </button>
  <div class=&#34;select-menu-modal-holder&#34;>
    <div class=&#34;select-menu-modal js-menu-content&#34;>
      <div class=&#34;select-menu-header js-navigation-enable&#34; tabindex=&#34;-1&#34;>
        <button class=&#34;btn-link close-button js-menu-close&#34; type=&#34;button&#34;><%= octicon(&#34;x&#34;, :&#34;aria-label&#34; => &#34;Close menu&#34;) %></button>
        <span class=&#34;select-menu-title&#34;>Options</span>
      </div>
      <div class=&#34;select-menu-list js-navigation-container&#34;>
        <a href=&#34;#url&#34; class=&#34;select-menu-item selected js-navigation-item&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-gravatar&#34;>
            <%= avatar_for(current_user, 20, :&#34;aria-label&#34; => &#34;&#34;) %>
          </span>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>
            <%= current_user.to_s %>
          </span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-gravatar&#34;>
            <%= avatar_for(current_user, 20, :&#34;aria-label&#34; => &#34;&#34;) %>
          </span>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>
            <%= current_user.to_s %>
          </span>
        </a>
        <a class=&#34;select-menu-item js-navigation-item&#34; href=&#34;#url&#34;>
          <%= octicon(&#34;check&#34;, :class => &#34;select-menu-item-icon&#34;) %>
          <span class=&#34;select-menu-item-gravatar&#34;>
            <%= avatar_for(current_user, 20, :&#34;aria-label&#34; => &#34;&#34;) %>
          </span>
          <span class=&#34;select-menu-item-text js-select-button-text&#34;>
            <%= current_user.to_s %>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
```


<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer-css]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
