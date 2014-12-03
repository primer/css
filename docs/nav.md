---
layout: page
title: Navigation
---

Primer comes with several navigation components. Some were designed with singular purposes, while others were design to be more flexible and appear quite frequently.

### Menu

The menu is a vertical list of navigational links. **A menu's width and placement must be set by you.** If you like, just use our grid column. Otherwise, apply a custom `width`.

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

### Tabnav

When you need to toggle between different views, consider using a tabnav. It'll given you a left-aligned horizontal row of... tabs!

{% example html %}
<div class="tabnav">
  <ul class="tabnav-tabs">
    <li><a href="#" class="tabnav-tab selected">Foo tab</a></li>
    <li><a href="#" class="tabnav-tab">Bar tab</a></li>
  </ul>
</div>
{% endexample %}

Add a `.tabnav-widget` to align buttons, text, and more with the tabs. Use `.tabnav-right` to righ-align them.

{% example html %}
<div class="tabnav">
  <div class="tabnav-widget tabnav-right">
    <a class="minibutton btn" href="#">Button</a>
  </div>
  <ul class="tabnav-tabs">
    <li><a href="#" class="tabnav-tab selected">Foo Tab</a></li>
    <li><a href="#" class="tabnav-tab">Bar Tab</a></li>
  </ul>
</div>
{% endexample %}

When you need a form in line with your tabs, mix the `.tabnav-widget` with `.search` like so:

{% example html %}
<div class="tabnav">
  <div class="tabnav-right">
    <div class="tabnav-widget search">
      <a href="#" class="search-link">Search:</a>
      <span class="fieldwrap">
        <input type="text" placeholder="Search…"><button type="submit" class="minibutton"><span class="octicon octicon-search"></span></button>
      </span>
    </div>
  </div>
  <ul class="tabnav-tabs">
    <li><a href="#" class="tabnav-tab selected">Foo Tab</a></li>
    <li><a href="#" class="tabnav-tab">Bar Tab</a></li>
  </ul>
</div>
{% endexample %}

### Filter list

A vertical list of filters. Grey text on white background. Selecting a filter from the list will fill it's background with blue and make the text white.

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

### Breadcrumb

*Coming soon...*

### Sunken menu

The sunken menu is a GitHub.com and Gist specific side navigation. It was originally designed as the "repository next" navigation. It should be used no where but on GitHub and Gist.

{% example html %}
<nav class="sunken-menu">
  <ul class="sunken-menu-group">
    <li>
      <a href="#" class="sunken-menu-item selected">
        <span class="octicon octicon-code"></span>
        <span class="full-word">Selected</span>
      </a>
    </li>
    <li>
      <a href="#" class="sunken-menu-item is-loading">
        <span class="octicon octicon-issue-opened"></span> Loading
        <span class="counter">99</span>
        <img class="mini-loader" src="/images/spinners/octocat-spinner-32.gif" alt="" width="16" height="16">
      </a>
    </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">
    <li>
      <a href="#" class="sunken-menu-item">
        <span class="octicon octicon-pulse"></span>
        <span class="full-word">Separated</span>
      </a>
    </li>
  </ul>
</nav>
{% endexample %}
