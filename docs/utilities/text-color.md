---
layout: page
title: text-color
---

These are the text colors we’re using in production — no more. All colors are managed in [fa-css-utilities](https://github.com/fac/fa-css-utilities).

New colors should be added only when they’re actually being used in a component or other element in production. When adding a new color, justify it by linking to the Sass file where you’re using it in your PR. Then the team can approve the addition.

## Standard palette

<div class="SwatchGroup">

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--default">
      The default color for text
    </div>
{% example scss %}
@include text-color(default);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--dark">
      The dark color for text
    </div>
{% example scss %}
@include text-color(dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--light">
      The light color for text
    </div>
{% example scss %}
@include text-color(light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--x-light">
      The x-light color for text
    </div>
{% example scss %}
@include text-color(x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--xx-light">
      The xx-light color for text
    </div>
{% example scss %}
@include text-color(xx-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--positive">
      The positive color for text
    </div>
{% example scss %}
@include text-color(positive);
{% endexample %}
    <div class="DocsExample-comment">
      The `positive` value maps to `fa-green--text`.
    </div>
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--warning">
      The warning color for text
    </div>
{% example scss %}
@include text-color(warning);
{% endexample %}
    <div class="DocsExample-comment">
      The `warning` value maps to `fa-amber`.
    </div>
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--negative">
      The negative color for text
    </div>
{% example scss %}
@include text-color(negative);
{% endexample %}
    <div class="DocsExample-comment">
      The `negative` value maps to `fa-red--text`.
    </div>
  </div>

</div>


## Full palette

<div class="SwatchGroup">

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--fa-blue">
      The fa-blue color for text
    </div>
  {% example scss %}
@include text-color(fa-blue);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--fa-blue--dark">
      The fa-blue--dark color for text
    </div>
  {% example scss %}
@include text-color(fa-blue--dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--fa-blue--x-dark">
      The fa-blue--x-dark color for text
    </div>
  {% example scss %}
@include text-color(fa-blue--x-dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--fa-green--text">
      The fa-green--text color for text
    </div>
    {% example scss %}
@include text-color(fa-green--text);
    {% endexample %}
    <div class="DocsExample-comment">
      `fa-green--text` is the text equivalent of `fa-green`. It’s slightly darker to compensate for the reduced contrast of letterforms compared to block colors, noticeable when sat side-by-side.
    </div>
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--fa-purple">
      The fa-purple color for text
    </div>
  {% example scss %}
@include text-color(fa-purple);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--fa-red--text">
      The fa-red--text color for text
    </div>
    {% example scss %}
@include text-color(fa-red--text);
    {% endexample %}
    <div class="DocsExample-comment">
      `fa-red--text` is the text equivalent of `fa-red`. It’s slightly darker to compensate for the reduced contrast of letterforms compared to block colors, noticeable when sat side-by-side.
    </div>
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--fa-red--dark">
      The fa-red--dark color for text
    </div>
  {% example scss %}
@include text-color(fa-red--dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--fa-amber">
      The fa-amber color for text
    </div>
  {% example scss %}
@include text-color(fa-amber);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-1">
      The gray-1 color for text
    </div>
  {% example scss %}
@include text-color(gray-1);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-2">
      The gray-2 color for text
    </div>
  {% example scss %}
@include text-color(gray-2);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-3">
      The gray-3 color for text
    </div>
  {% example scss %}
@include text-color(gray-3);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-4">
      The gray-4 color for text
    </div>
  {% example scss %}
@include text-color(gray-4);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-5">
      The gray-5 color for text
    </div>
  {% example scss %}
@include text-color(gray-5);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-6">
      The gray-6 color for text
    </div>
  {% example scss %}
@include text-color(gray-6);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-7">
      The gray-7 color for text
    </div>
  {% example scss %}
@include text-color(gray-7);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-8">
      The gray-8 color for text
    </div>
  {% example scss %}
@include text-color(gray-8);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-9">
      The gray-9 color for text
    </div>
  {% example scss %}
@include text-color(gray-9);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-10">
      The gray-10 color for text
    </div>
  {% example scss %}
@include text-color(gray-10);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--render--hidden">
    <div class="DocsExample-preview DocsExample-preview--text-color--gray-11">
      The gray-11 color for text
    </div>
  {% example scss %}
@include text-color(gray-11);
{% endexample %}
  </div>

</div>

Related: [`background-color`]({{ site.baseurl }}/utilities/background-color/)
