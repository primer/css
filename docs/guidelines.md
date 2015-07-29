---
layout: page
title: Guidelines
---

Best practices and guidelines for writing HTML and CSS with approachable formatting, syntax, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## HTML

### General formatting

* Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
* Paragraphs of text should always be placed in a `<p>` tag. Never use multiple `<br>` tags.
* Items in list form should always be in `<ul>`, `<ol>`, or `<dl>`. Never use a set of `<div>` or `<p>`.
* Every form input that has text attached should utilize a `<label>` tag. **Especially radio or checkbox elements.**
* Even though quotes around attributes is optional, always put quotes around attributes for readability.
* Avoid writing closing tag comments, like `<!-- /.element -->`. This just adds to page load time. Plus, most editors have indentation guides and open-close tag highlighting.
* Avoid trailing slashes in self-closing elements. For example, `<br>`, `<hr>`, `<img>`, and `<input>`.
* Don't set `tabindex` manually—rely on the browser to set the order.

{% highlight html %}
<p class="line-note" data-attribute="106">
  This is my paragraph of special text.
</p>
{% endhighlight %}

### Boolean attributes

Many attributes don't require a value to be set, like `disabled` or `checked`, so don't set them.

{% highlight html %}
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
{% endhighlight %}

For more information, [read the WhatWG section](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes).

### Lean markup

Whenever possible, avoid superfluous parent elements when writing HTML. Many times this requires iteration and refactoring, but produces less HTML. For example:

{% highlight html %}
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
{% endhighlight %}

### Forms

* Lean towards radio or checkbox lists instead of select menus.
* Wrap radio and checkbox inputs and their text in `<label>`s. No need for `for` attributes here—the wrapping automatically associates the two.
* Form buttons should always include an explicit `type`. Use primary buttons for the `type="submit"` button and regular buttons for `type="button"`.
* The primary form button must come first in the DOM, especially for forms with multiple submit buttons. The visual order should be preserved with `float: right;` on each button.

### Tables

Make use of `<thead>`, `<tfoot>`, `<tbody>`, and `<th>` tags (and `scope` attribute) when appropriate. (Note: `<tfoot>` goes above `<tbody>` for speed reasons. You want the browser to load the footer before a table full of data.)

{% highlight html %}
<table summary="This is a chart of invoices for 2011.">
  <thead>
    <tr>
      <th scope="col">Table header 1</th>
      <th scope="col">Table header 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Table footer 1</td>
      <td>Table footer 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Table data 1</td>
      <td>Table data 2</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}



## SCSS

### Spacing

* Use soft-tabs with a two space indent. Spaces are the only way to guarantee code renders the same in any person's environment.
* Put spaces after `:` in property declarations.
* Put spaces before `{` in rule declarations.
* Put line breaks between rulesets.
* When grouping selectors, keep individual selectors to a single line.
* Place closing braces of declaration blocks on a new line.
* Each declaration should appear on its own line for more accurate error reporting.

### Formatting

* Use hex color codes `#000` unless using `rgba()` in raw CSS (SCSS' `rgba()` function is overloaded to accept hex colors as a param, e.g., `rgba(#000, .5)`).
* Use `//` for comment blocks (instead of `/* */`).
* Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.
* Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values.

### Misc

As a rule of thumb, avoid unnecessary nesting in SCSS. At most, aim for three levels. If you cannot help it, step back and rethink your overall strategy (either the specificity needed, or the layout of the nesting).

### Examples

Here are some good examples that apply the above guidelines:

{% highlight scss %}
// Example of good basic formatting practices
.styleguide-format {
  color: #000;
  background-color: rgba(0, 0, 0, .5);
  border: 1px solid #0f0;
}

// Example of individual selectors getting their own lines (for error reporting)
.multiple,
.classes,
.get-new-lines {
  display: block;
}

// Avoid unnecessary shorthand declarations
.not-so-good {
  margin: 0 0 20px;
}
.good {
  margin-bottom: 20px;
}
{% endhighlight %}

## File organization

In general, a flat directory of files works best, but at GitHub we break things down by bundles (separate compiled CSS files) and sections (directories of related content).

### Bundles

GitHub.com uses a handful of bundles. Here's a simplified representation of our two desktop bundles (split to support IE9's maximum selector limit per CSS file) and a dedicated mobile bundle for our separate mobile views.

{% highlight bash %}
stylesheets
├── github
│   ├── base.scss
│   ├── layout.scss
│   └── buttons.scss
├── github2
│   ├── about.scss
│   └── blog.scss
└── mobile
    ├── base.scss
    └── files.scss
{% endhighlight %}

### Including (S)CSS files

Previously we used [Sprockets](https://github.com/sstephenson/sprockets) to **require** files in Primer and at GitHub. Nowadays, we use explicit lists of **imports** to control the cascade, specificity, and more.

{% highlight scss %}
// Imports
@import "primer";
@import "component";
@import "another_component";

// Rules
.rule { ... }
{% endhighlight %}

This is also how Primer's styles are to be included, should you need them.

## Pixels vs. ems

Use `px` for `font-size`, because it offers absolute control over text. Additionally, unit-less `line-height` is preferred because it does not inherit a percentage value of its parent element, but instead is based on a multiplier of the `font-size`.

## Class naming conventions

Never reference `js-` prefixed class names from CSS files. `js-` are used exclusively from JS files.

Use the `is-` prefix for state rules that are shared between CSS and JS.

## Specificity (classes vs. ids)

Elements that occur **exactly once** inside a page should use IDs, otherwise, use classes. When in doubt, use a class name.

* **Good** candidates for ids: header, footer, modal popups.
* **Bad** candidates for ids: navigation, item listings, item view pages (ex: issue view).

When styling a component, start with an element + class namespace (prefer class names over ids),  prefer direct descendant selectors by default, and use as little specificity as possible. Here is a good example:

{% highlight html %}
<ul class="category-list">
  <li class="item">Category 1</li>
  <li class="item">Category 2</li>
  <li class="item">Category 3</li>
</ul>
{% endhighlight %}

{% highlight scss %}
.category-list { // element + class namespace

  // Direct descendant selector > for list items
  > li {
    list-style-type: disc;
  }

  // Minimal specificity for all links
  a {
    color: #f00;
  }
}
{% endhighlight %}

### CSS Specificity guidelines

* If you must use an id selector (`#selector`) make sure that you have no more than *one* in your rule declaration. A rule like `#header .search #quicksearch { ... }` is considered harmful.
* When modifying an existing element for a specific use, try to use specific class names. Instead of `.listings-layout.bigger` use rules like `.listings-layout.listings-bigger`. Think about `ack/grep`ing your code in the future.
* The class names `disabled`, `mousedown`, `danger`, `hover`, `selected`, and `active` should *always* be namespaced by a class (`button.selected` is a good example).
