---
title: Principles
path: principles/index
---

The CSS styleguide enables us to create a consistent user experience across GitHub, manage CSS bloat, and make our CSS easier to maintain. These principles should serve as guidelines for how we write and use CSS.

 


## Styleguide driven design and development

Every time new CSS is added it increases our CSS bloat, CSS maintenance, and can add to inconsistencies in the user experience of our site. If we follow a practice of designing with styles in the styleguide first and try to implement our designs with only styles in the style guide first, we reduce the risk of deviating away from these styles.

_If new styles are needed:_
* Use global variables where appropriate, such as spacing, typography, and color variables.
* Write styles in a way that can be folded back into the global style guide should it become a common pattern, i.e. following our principles for naming conventions, components, objects, and utilities as listed below.


## Obvious and transparent

Many designers and developers will edit and add to our CSS. Write CSS in a way that make it obvious and transparent what the CSS does, and support with comments wherever needed.

**Class names:**

* Use class names that make it easy to understand what styles are being applied.
* Keep naming conventions consistent so that it's easier to internalize and understand class names. For components follow the [BEM-style syntax](#bem-style-naming-and-structure) described below.
* Don't use class names that suggest the styles do one thing, but instead have hidden properties.
* Use presentational or functional class names and avoid tying class names for global styles to as specific page or feature.

```scss
// Do
.bg-white { background-color: #fff; }

.box {
  border-radius: 3px;
  border: 1px solid #ddd;
}

// Don't
.bg-white {
  color: #111;
  background-color: #fff;
  border: #ccc;
}

.teams-side-panel {
  width: 330px;
  border-radius: 3px;
  border: 1px solid #ddd;
}
```


**Sass:**

* Choose verbose over clever. A little duplication is worthwhile if it adds clarity.
* Don't prioritize being DRY if  it means it's hard to read and understand, creates dependencies, or hides what the code is really doing.
*  Avoid overusing pre-processor features that make the code less approachable. Keep it CSS'y and limit the use of Sass features like nesting, variables, functions. For more detail on this check out our [Sass guidelines and lint rules](/principles/scss).


## Components

Components make it easier to mark up a set of elements that are commonly grouped together with similar visual styles. Their base styles are shared and variants are added with modifier classes, so usually components are comprised of multiple classes. Most importantly, components should be highly reusable across the site, rather than built for specific pages or features. To achieve this:

* **Separate structure and skin:** This means to define repeating visual features (like background and border styles) as separate “skins” that you can mix-and-match with your various components to achieve a large amount of visual variety without much code.
* **Separate container and content:** Essentially, this means “rarely use location-dependent styles”. A component should look the same no matter where you put it.

```scss
// structure
.flash {...}

// skin
.flash-error {...}
```

## Objects

Objects help us with common layout patterns but aren't concerned with thematic styles. Examples include the table object, the grid, and the media object. Objects essentially provide some scaffolding for layouts and should be able to be used with other objects, components, and utilities.

Example:

```html
<div class="TableObject">
  <div class="TableObject-item TableObject-item--primary">
    <input class="input-block" type="text" placeholder="Long flexible input form">
  </div>
  <div class="TableObject-item">
    <button class="btn ml-3" type="button">Button</button>
  </div>
</div>
```

## BEM-style naming and structure

Components and objects should follow the [Block Element Modifier](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) (BEM) model in terms of structure. We've chosen to use a modified form of BEM syntax using [uppercase](https://en.wikipedia.org/wiki/Uppercase) for the block name, hyphens and lowercase for elements, and double-hyphens and lowercase for modifiers. When a block class requires two words use [Pascal case](https://en.wikipedia.org/wiki/PascalCase), for example `ProgressBar`. When an element or modifier class requires two words use [camel case](https://en.wikipedia.org/wiki/camelCase), for example `[Component]-closeButton` or `[Component]--extraLarge`.

* **Block**: A block includes all of the base styles you want shared across every variation of a component. Minimal thematic styling should be applied to blocks, particularly when variations of a component include visual variations. Apply additional styles with modifers rather than overriding base styles.
* **Element**: An element is part of a component. Elements should work together with other elements and can have modifiers. Element styles should not override block styles - this often results in applying more styles directly to elements rather than having styles flow down from the parent level.
* **Modifier**: A modifier is a variation that can be applied to the base component or to an element within the component. Modifiers shouldn't override block styles, they should add onto them.

```scss
// block
.Box {...}

// elements
.Box-header {...}
.Box-body {...}
.Box-footer {...}
.Box-closeButton {...}

// modifiers
.Box--blue {...}
.Box--large {...}
.Box--extraLarge {...}
```

## Property order
For base styles, components, and objects, follow the following property order.

```scss
.element {
  // 1. Positioning
  // 2. Box model (display, float, width, etc)
  // 3. Typography (font, line-height, text-*)
  // 4. Visuals (background, border, opacity)
  // 5. Misc (CSS3 properties)
}
```


## Utilities
Utilities provide the building blocks for layout and handle a range common use cases that help us avoid writing custom styles. When we need to add some margin or padding, rather than adding a new selector specific to that use case, we can use utilities. This helps us reduce the number of unique property-value pairs, and helps us keep more consistent styles across the site.

* Utilities should do one job well and one job only, are immutable, and on occasion are an acceptable approach to overriding component styles.
* Utility class-names should be transparent and clearly describe the job they do.

Examples:

```scss
.text-white { color: #fff !important; }

.bg-gray-light { background-color: #ddd !important; }

.mr-1 { margin-right: $spacer !important; }

.d-inline-block { display: inline-block !important; }

.rounded { border-radius: 3px !important; }
```



## Feature-specific Sass

It's inevitable that we'll need to write some custom styles for new features on occasion. This should only be done when implementing the design cannot be achieved with utility or component styles. Follow these guidelines when writing custom Sass:

* Don't override global component and utility styles.
* Name-space to the feature at the beginning of the classname and follow with the element description.
* Write custom styles in a way that may be folded back into the styleguide should the pattern become useful across the site, i.e. follow BEM structure for building components.

```scss
// Do
// Custom background for Git Merge ad
.git-merge-box {
  padding: $spacer-6;
  background-color: #222;
  border-radius: 3px;
}

// Don't
.git-merge-box {
  .boxed-group {
    padding: 48px;
    background-color: #222;
  }
}
```


## Inline styles

Inline styles are performant and deal with one off use cases that don't need to live in CSS. Sometimes it will make more sense to add an inline style than write a new line of CSS that will live on in our codebase longer than the markup will.

The most common use case is for applying widths and heights to images. Other use cases might be to apply a custom width to a div to work with it's content.

```html
<!-- Image width and height -->
<img width="20" height="20" src="https://github.com/github.png">

<!-- Custom width for a div that is not a repeated pattern -->
<div class="d-table-cell py-3 pr-3" style="width: 72px">
```

## Further reading

There's a lot happening in the world of front-end web development! To help you understand our principles better, we've put together a list articles that reflect our thinking and influenced our decisions.

**[About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)**<br/>
This article contains a collection of thoughts on HTML semantics, components and approaches to front-end architecture, class naming patterns, and HTTP compression. Many of the concepts covered here have been adopted as best practices in modern front-end development. This is a must read!

**[BEMantic: DRY Like You Mean It](https://medium.com/@stowball/bemantic-dry-like-you-mean-it-133ea3843d98#.snpgwck6f)**<br/>
A case for taking an object oriented approach to writing CSS using Sass and BEM.

**[The media object saves hundreds of lines of code](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)**<br/>
The media object&mdash;a block with an image on the left and content on the right&mdash;is an extremely common pattern on web pages. This article explores ways to write a flexible and versatile media object, and is a great example of how an object oriented CSS approach can help you write more reusable code.

**[OOCSS wiki](https://github.com/stubbornella/oocss/wiki)**<br/>
The Object Oriented CSS framework is a collection of code that’s built using the OOCSS approach. The OOCSS approach is a way of writing CSS that’s fast, maintainable, and standards-based. This framework can help you get started.

**[The Importance of !important: Forcing Immutability in CSS](http://csswizardry.com/2016/05/the-importance-of-important/)**<br/>
This article is a case for using the `!important` flag in CSS, and describes the best ways to use it.

**[The Specificity Graph](http://csswizardry.com/2014/10/the-specificity-graph/)**<br/>
This is a guide to organizing your project's CSS selectors by specificity. Using the specificity graph, you can plot the health of a project's CSS and identify areas with higher-than-ideal specificity.

**[CSS Guidelines](http://cssguidelin.es/)**<br/>
High-level advice and guidelines for writing sane, manageable, scalable CSS.

**[WTF, HTML and CSS?](http://wtfhtmlcss.com/)**<br/>
A curated list of commonly frustrating HTML and CSS quandaries, miscues, and dilemmas.

**[Solved by flexbox](https://philipwalton.github.io/solved-by-flexbox/)**<br/>
A showcase of problems once hard or impossible to solve with CSS alone, now made trivially easy with Flexbox.
