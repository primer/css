---
layout: page
title: Utilities
---

Our CSS utilities define all of our global CSS values and provide universal methods of declaring them. They’re managed in the [fa-css-utilities](https://github.com/fac/fa-css-utilities) repo and made available to projects via NPM and Bower.


## Key files

**[`_utility-values.scss`](https://github.com/fac/fa-css-utilities/blob/master/_utility-values.scss)**  
Where we define all of our raw CSS values and assign them to variables.

**[`_utility-aliases.scss`](https://github.com/fac/fa-css-utilities/blob/master/_utility-aliases.scss)**  
Where we map aliases to our variables. Doing so lets us reference those aliases in mixins, and lets us optionally generate utility classes in the output CSS.

**[`_project-aliases.scss`](https://github.com/fac/fa-css-utilities/blob/master/_project-aliases.scss)**  
Where project-specific aliases are defined. Doing so means we aren’t continually declaring things like `@include line-height(x-loose)` when `x-loose` is actually the default `line-height` for a particular project. In this file we can just assign `x-loose` to `default` for that project only.

**[`_utility-settings.scss`](https://github.com/fac/fa-origin/blob/master/assets/scss/_utility-settings.scss)**  
Where we define whether or not to render utility classes in the output CSS. This file is cloned and customised for each project.


## Examples

Where we might have previously written:
{% highlight scss %}
color: #333;
font-family: "Source Sans Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
font-size: 1rem;
line-height: 140%;
{% endhighlight %}

We now write:
{% highlight scss %}
@include font-family(default);
@include font-size(default);
@include line-height(default);
@include text-color(default);
{% endhighlight %}

Components might look like:

{% highlight scss %}
.MyComponent {
  @include background-color(gray-13);
  @include border(thin, gray-11);
  @include font-family(default);
  @include font-size(large);
  @include line-height(tight);
  @include text-color(fa-blue);
}

.MyOtherComponent {
  @include flexbox(flex);
  @include flex-direction(row-reverse);
  @include flex-justify-content(center);
  @include flex-grow(2);
  @include flex-shrink(0);
  @include margin-top(large);
}
{% endhighlight %}

`!important` can optionally be added to any mixin declaration:

{% highlight scss %}
@include padding(large, !important);
{% endhighlight %}

This is especially useful for refactoring; `!important` allows us a way to turn existing UI patterns that rely on the cascade into completely self-contained components — _without_ breaking lots of stuff. Once a component has been created and rolled out, any `!important` arguments can just be removed.



## Benefits

Utilities create a simpler, faster, and more meaningful way to write CSS. Mixins are referenced instead of writing regular property/value declarations. They provide:

* **Universal scales and aliases** for: `font-size`, `font-family`, `line-height`, `color`, and much more.
* **Library of colours** for text and block-level elements.
* **Mixins and utility classes** for 40+ CSS properties.

This functionality provides a range of benefits:

* Technical debt and stylistic deviations are avoided because every declaration always maps back to a pre-defined value.
* Finding things like the right `font-size` or `line-height` is quicker and easier because their values exists in scales. Want a slightly bigger size? Increase the number by one.
* “Human friendly” aliases like `x-small` and `xx-large` communicate styles more effectively to developers
* Switching between different projects and codebases is easier because there’s a universal way of writing CSS across all of them
* Mixins allow us to bake in any vendor prefixing, so they don’t have to be typed manually.



## Utility classes

Utility classes can be generated in your output CSS so they can be applied directly to HTML elements. They will produce the same effect as using the utility mixins, with one very important difference: **utility classes all have `!important` set**. This is deliberate; utility classes should _do one thing no matter what_.

Utility classes should be used sparingly. They’re useful for quickly prototyping ideas or hacking together a quick modification of a component before deciding whether to actually make that modification _part_ of the component. But always aim to use utility mixins; doing so encourages the idea of building self-contained components. Components should define and control their own states and variations.

### How to generate utility classes
Set a utility to `true` in your project’s [`_utility-settings.scss`](https://github.com/fac/fa-origin/blob/master/assets/scss/_utility-settings.scss) and the associated utility classes will appear in your output CSS file. Naturally these will add weight to your file, so keep an eye on the file size.

### Example

You might start with this:

{% highlight html %}
<div class="u-margin--0 u-padding--0 u-text-align--center u-border-radius--default u-border--thin--solid--fa-blue u-line-height--tight u-flexbox u-flex-align-items--stretch u-flex-direction--row">
  <button class="u-background--none u-display--inline-block u-margin--0 u-border-right--thin--solid--blue u-padding--x-small--small u-text-color--x-light u-flex-grow--1 u-text-truncate">Payment</button>
  <button class="u-background--none u-display--inline-block u-margin--0 u-padding--x-small--small u-text-color--x-light u-flex-grow--1 u-text-truncate">Refund</button>
</div>
{% endhighlight %}

But you should end up with:

{% highlight html %}
<div class="SegmentedControl">
  <button class="SegmentedControl-segment">Payment</button>
  <button class="SegmentedControl-segment">Refund</button>
</div>
{% endhighlight %}
