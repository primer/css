---
title: Color system
status_issue: https://github.com/github/design-systems/issues/301
status: New release
source: https://github.com/primer/primer/blob/master/modules/primer-support/lib/variables/color-system.scss
---

{:toc}

## Color palette

<div class="markdown-no-margin mb-6 d-flex h5">
  <div class="gray-500 d-flex color-square mr-2">
    <p class="p-3 flex-self-end text-white">Gray</p>
  </div>
  <div class="blue-500 d-flex color-square mr-2">
    <p class="p-3 flex-self-end text-white">Blue</p>
  </div>
  <div class="green-500 d-flex color-square mr-2">
    <p class="p-3 flex-self-end text-white">Green</p>
  </div>
  <div class="purple-500 d-flex color-square mr-2">
    <p class="p-3 flex-self-end text-white">Purple</p>
  </div>
  <div class="yellow-500 d-flex color-square mr-2">
    <p class="p-3 flex-self-end">Yellow</p>
  </div>
  <div class="orange-500 d-flex color-square mr-2">
    <p class="p-3 flex-self-end">Orange</p>
  </div>
  <div class="red-500 d-flex color-square mr-2">
    <p class="p-3 flex-self-end text-white">Red</p>
  </div>
  <div class="bg-white d-flex color-square border border-gray-dark">
    <p class="p-3 flex-self-end">White</p>
  </div>
</div>

## Color variables

<div class="d-flex flex-wrap gutter">
{% for color in site.data.primitives.colors %}
{% if color[0] != "black" and color[0] != "white" %}
<div class="mb-6 flex-column col-6 markdown-no-margin">
  <h3>{{ color[0] | capitalize }}</h3>
  <div class="{{ color[0] }}-500 my-2 p-3 text-{{ color[1][5] | foreground_color }}">
    <p class="f00-light pb-3">{{ color[0] | capitalize }}</p>
    <div class="d-flex">
      <p class="h4 flex-auto">${{ color[0] }}-500</p>
      <p class="text-right text-mono flex-auto">{{ color[1][5] }}</p>
    </div>
  </div>
  {% for shade in color[1] %}
  <div class="{{ color[0] }}-{{ forloop.index0 }}00 h4 text-{{ shade | foreground_color }}">
  <span class="float-right p-3 text-mono">{{ shade }}</span>
  <p class="p-3">${{ color[0] }}-{{ forloop.index0 }}00</p>
  </div>
  {% endfor %}
</div>
{% endif %}
{% endfor %}



<div class="mb-6 flex-column col-6">
</div>
  <!-- Gray and fades (headings inside the markup) -->

  <div class="mb-3 flex-column col-6 markdown-no-margin">
    <h3>Black fades</h3>
    <div class="black text-white my-2 p-3">
      <p class="f00-light pb-3">Black</p>
      <div class="d-flex pb-1">
        <p class="h4 flex-auto">$black</p>
        <p class="text-right text-mono flex-auto"><code>rgb(27,31,35)</code> {{ site.data.primitives.colors.black }}</p>
      </div>
      <p class="f5 pt-3 border-top border-white">Black fades apply alpha transparency to the <strong>$black</strong> variable. The black color value has a slight blue hue to match our grays.</p>
    </div>
    <div class="black-fade-15">
      <p class="h4 p-3">$black-fade-15</p>
    </div>
    <div class="black-fade-30">
      <p class="h4 p-3">$black-fade-30</p>
    </div>
    <div class="black-fade-50">
      <p class="h4 p-3">$black-fade-50</p>
    </div>
    <div class="black-fade-70">
      <p class="h4 p-3 text-white">$black-fade-70</p>
    </div>
    <div class="black-fade-85">
      <p class="h4 p-3 text-white">$black-fade-85</p>
    </div>
  </div>

  <div class="mb-3 flex-column col-6 markdown-no-margin">
    <h3>White fades</h3>
    <div class="bg-white border text-gray-dark my-2 p-3">
      <p class="f00-light pb-3">White</p>
      <div class="d-flex pb-1">
        <p class="h4 flex-auto">$white</p>
        <p class="text-right text-mono flex-auto"><code>rgb(255, 255, 255)</code> {{ site.data.primitives.colors.white }}</p>
      </div>
      <p class="f5 pt-3 border-top border-white">White fades apply alpha transparency to the <strong>$white</strong> variable, below these are shown overlaid on a dark gray background.</p>
    </div>
    <div class="bg-gray-dark pr-4">
      <div class="white-fade-15">
        <p class="h4 p-3 text-white">$white-fade-15</p>
      </div>
      <div class="white-fade-30">
        <p class="h4 p-3 text-white">$white-fade-30</p>
      </div>
      <div class="white-fade-50">
        <p class="h4 p-3">$white-fade-50</p>
      </div>
      <div class="white-fade-70">
        <p class="h4 p-3">$white-fade-70</p>
      </div>
      <div class="white-fade-85">
        <p class="h4 p-3">$white-fade-85</p>
      </div>
    </div>


</div>

</div>
