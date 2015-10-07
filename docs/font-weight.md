---
layout: page
title: font-weight
---

Our primary typeface is [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro), an open-source face designed specifically for UI work. We serve it up via `@font-face` in a number of formats, as required by different browsers. WOFF2 is preferred due to it’s better compression, followed by WOFF.

Settings for browser support, OpenType vs TrueType, and font directory path
can all be found in [_font-settings.scss](https://github.com/fac/fa-origin/blob/master/assets/scss/fonts/_font-settings.scss).

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--x-light">
      Source Sans Pro Extra Light (200)
    </p>
  </div>
{% example scss %}
@include font-weight(x-light);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--x-light--italic">
      Source Sans Pro Extra Light Italic (200)
    </p>
  </div>
{% example scss %}
font-style: italic;
@include font-weight(x-light);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--light">
      Source Sans Pro Light (300)
    </p>
  </div>
{% example scss %}
@include font-weight(light);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--light--italic">
      Source Sans Pro Light Italic (300)
    </p>
  </div>
{% example scss %}
font-style: italic;
@include font-weight(light);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--regular">
      Source Sans Pro Regular (400)
    </p>
  </div>
{% example scss %}
@include font-weight(normal);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--regular--italic">
      Source Sans Pro Regular Italic (400)
    </p>
  </div>
{% example scss %}
font-style: italic;
@include font-weight(normal);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--semi-bold">
      Source Sans Pro Semi-Bold (600)
    </p>
  </div>
{% example scss %}
@include font-weight(semi-bold);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--semi-bold--italic">
      Source Sans Pro Semi-Bold Italic (600)
    </p>
  </div>
{% example scss %}
font-style: italic;
@include font-weight(semi-bold);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--bold">
      Source Sans Pro Bold (700)
    </p>
  </div>
{% example scss %}
@include font-weight(bold);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--bold--italic">
      Source Sans Pro Bold Italic (700)
    </p>
  </div>
{% example scss %}
font-style: italic;
@include font-weight(bold);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--black">
      Source Sans Pro Black (900)
    </p>
  </div>
{% example scss %}
@include font-weight(black);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--black--italic">
      Source Sans Pro Black Italic (900)
    </p>
  </div>
{% example scss %}
font-style: italic;
@include font-weight(black);
{% endexample %}
</div>
