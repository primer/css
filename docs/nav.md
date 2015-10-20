---
layout: page
title: Navigation
---

Primer comes with several navigation components. Some were designed with singular purposes, while others were design to be more flexible and appear quite frequently.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Menu

The menu is a vertical list of navigational links. **A menu's width and placement must be set by you.** If you like, just use our grid columns as a parent. Otherwise, apply a custom `width`.

{% example html %}
<nav class="menu">
  <a class="menu-item selected" href="#">Account</a>
  <a class="menu-item" href="#">Profile</a>
  <a class="menu-item" href="#">Emails</a>
  <a class="menu-item" href="#">Notifications</a>
</nav>
{% endexample %}

There are a few subcomponents and add-ons that work well with the menu, including avatars, counters, and Octicons.

{% example html %}
<nav class="menu">
  <a class="menu-item selected" href="#">
    <span class="octicon octicon-tools"></span>
    Account
  </a>
  <a class="menu-item" href="#">
    <span class="octicon octicon-person"></span>
    Profile
  </a>
  <a class="menu-item" href="#">
    <span class="octicon octicon-mail"></span>
    Emails
  </a>
  <a class="menu-item" href="#">
    <span class="octicon octicon-radio-tower"></span>
    <span class="counter">3</span>
    Notifications
  </a>
</nav>
{% endexample %}

You can also add optional headings to a menu. Feel free to use nearly any semantic element with the `.menu-heading` class, including inline elements, headings, and more.

{% example html %}
<nav class="menu">
  <span class="menu-heading">Menu heading</span>
  <a class="menu-item selected" href="#">Account</a>
  <a class="menu-item" href="#">Profile</a>
  <a class="menu-item" href="#">Emails</a>
  <a class="menu-item" href="#">Notifications</a>
</nav>
{% endexample %}


## Tabnav

When you need to toggle between different views, consider using a tabnav. It'll given you a left-aligned horizontal row of... tabs!

{% example html %}
<div class="tabnav">
  <nav class="tabnav-tabs">
    <a href="#" class="tabnav-tab selected">Foo tab</a>
    <a href="#" class="tabnav-tab">Bar tab</a>
  </nav>
</div>
{% endexample %}

Use `.right` to align additional elements in the `.tabnav`:

{% example html %}
<div class="tabnav">
  <a class="btn btn-sm right" href="#">Button</a>
  <nav class="tabnav-tabs">
    <a href="#" class="tabnav-tab selected">Foo Tab</a>
    <a href="#" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>
{% endexample %}

Additional bits of text and links can be styled for optimal placement with `.tabnav-extra`:

{% example html %}
<div class="tabnav">
  <div class="tabnav-extra right">
    Tabnav widget text here.
  </div>
  <nav class="tabnav-tabs">
    <a href="#" class="tabnav-tab selected">Foo Tab</a>
    <a href="#" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>
{% endexample %}

{% example html %}
<div class="tabnav">
  <div class="right">
    <a class="tabnav-extra" href="#">
      Tabnav extra link
    </a>
    <a class="tabnav-extra" href="#">
      Tabnav extra link
    </a>
  </div>
  <nav class="tabnav-tabs">
    <a href="#" class="tabnav-tab selected">Foo Tab</a>
    <a href="#" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>
{% endexample %}

## Filter list

A vertical list of filters. Grey text on white background. Selecting a filter from the list will fill its background with blue and make the text white.

{% example html %}
<ul class="filter-list">
  <li>
    <a href="#" class="filter-item selected">
      <span class="count">21</span>
      First filter
    </a>
  </li>
  <li>
    <a href="#" class="filter-item">
      <span class="count">3</span>
      Second filter
    </a>
  </li>
  <li>
    <a href="#" class="filter-item">
      Third filter
    </a>
  </li>
</ul>
{% endexample %}

## Breadcrumb

*Coming soon...*
