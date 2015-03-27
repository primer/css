---
layout: page
title: Avatars
---

Avatars are images that users can set as their profile picture. On GitHub, they're always going to be rounded squares. They can be custom photos, uploaded by users, or generated as Identicons as a placeholder.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example

Add `.avatar` to any `<img>` element to make it an avatar. This resets some key styles for alignment, address a Firefox image placeholder bug, and rounds the corners.

Be sure to set `width` and `height` attributes for maximum browser performance.

{% example html %}
<img class="avatar" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=72" width="72" height="72">
{% endexample %}

## Small avatars

We occasionally use smaller avatars. Anything less than `48px` wide should include the `.avatar-small` modifier class to reset the `border-radius` to a more appropriate level.

{% example html %}
<img class="avatar avatar-small" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=32" width="32" height="32">
{% endexample %}

## Parent-child avatars

When you need a larger parent avatar, and a smaller child one, overlaid slightly, use the parent-child classes.

{% example html %}
<div class="avatar-parent-child left">
  <img class="avatar" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=48" width="48" height="48">
  <img class="avatar avatar-child" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=20" width="20" height="20">
</div>
{% endexample %}
