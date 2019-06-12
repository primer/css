---
title: Pagehead
path: components/pagehead
status: Stable
internal: true
source: 'https://github.com/github/github/tree/master/app/assets/stylesheets/components/pagehead.scss'
symbols: [account-switcher, active, admin, avatar, dropdown-menu-content, experiment-repo-nav, fork, fork-flag, mirror, mirror-flag, octicon, octicon-lock, octicon-mirror, octicon-mute, pagehead, pagehead-actions, pagehead-heading, pagehead-tabs-item, path-divider, png, private, repohead, repohead-details-container, reponav, reponav-dropdown, reponav-item, select-menu, select-menu-modal-holder, selected, underline-nav]
---

Give a page a clear, separated title and optional top nav by adding a `.pagehead`.

{:toc}

## Basic pagehead

In its simplest form, you can build a pagehead with a `pagehead` element with an `h1` child.

```html
<div class="pagehead">
  <h1>Title</h1>
</div>
```

### Avatars

Place an avatar inside the `h1` to have margins applied to it. Don't forget the `avatar` class!

Also be sure to add `aria-hidden="true"` to hide the avatar from screenreaders.

```erb
<div class="pagehead">
  <h1>
    <%= avatar_for("jonrohan", 32, "aria-hidden": "true") %>
    jonrohan
  </h1>
</div>
```

### Path divider

For path or breadcrumb patterns, wrap the `/` with `path-divider` to add some nice horizontal spacing.

```html
<div class="pagehead">
  <h1>
    <span class="author"><a href="#url" class="url fn" rel="author">jonrohan</a></span>
    <span class="path-divider">/</span>
    <strong><a href="#url">primer</a></strong>
  </h1>
</div>
```

## Pagehead actions

To add actions on the right side of the `pagehead`, use the `pagehead-actions` element. Place `pagehead-actions` before the `h1` to ensure proper placement.

```html
<div class="pagehead">
  <ul class="pagehead-actions">
    <li><button class="btn btn-sm" href="#url">Action</button></li>
    <li><button class="btn btn-sm btn-primary" href="#url">Action</button></li>
  </ul>
  <h1>Title</h1>
</div>
```

## Org nav

```html
<div class="pagehead orghead px-3">
  <nav class="orgnav clearfix" role="navigation">
    <a class="pagehead-tabs-item selected" href="#url">
      <%= octicon("repo") %>
      Repositories
    </a>
    <a class="pagehead-tabs-item" href="#url">
      <%= octicon("jersey") %>
      Teams
      <span class="Counter">1</span>
    </a>
    <a class="pagehead-tabs-item" href="#url">
      <%= octicon("project") %>
      Projects
      <span class="Counter">2</span>
    </a>
    <a class="pagehead-tabs-item" href="#url">
      <%= octicon("briefcase") %>
      Jobs
      <span class="Counter">3</span>
    </a>
  </nav>
</div>
```

## Repohead

Use `pagehead` to construct a header and navigation for a repository.

### Base

```html
<div class="pagehead repohead experiment-repo-nav">
  <div class="container-lg repohead-details-container px-3 clearfix">
    <ul class="pagehead-actions">
      <li>
        <div class="clearfix">
          <button class="btn btn-sm btn-with-count" href="#url" role="button">
            <%= octicon("eye")%>
            Watch
          </button>
          <button class="social-count" href="#url">6</button>
        </div>
      </li>
      <li>
        <div class="clearfix">
          <button class="btn btn-sm btn-with-count" href="#url" role="button">
            <%= octicon("repo-forked") %>
            Fork
          </button>
          <button class="social-count" href="#url">0</button>
        </div>
      </li>
    </ul>
    <h1>
      <%= octicon("repo") %>
      <span class="author"><a href="#url" class="url fn" rel="author">cmwinters</a></span>
      <span class="path-divider">/</span>
      <strong><a href="#url">project</a></strong>
    </h1>
  </div>
  <div class="container-lg px-3">
    <nav class="reponav clearfix" role="navigation">
      <a class="reponav-item selected" href="#url">
        <%= octicon("code") %>
        Code
      </a>
      <a class="reponav-item" href="#url">
        <%= octicon("issue-opened") %>
        Issues
        <span class="Counter">1</span>
      </a>
      <a class="reponav-item" href="#url">
        <%= octicon("git-pull-request") %>
        Pull requests
        <span class="Counter">2</span>
      </a>
      <a class="reponav-item" href="#url">
        <%= octicon("project") %>
        Projects
        <span class="Counter">3</span>
      </a>
    </nav>
  </div>
</div>
```

### Private

```html
<div class="pagehead repohead experiment-repo-nav">
  <div class="container-lg repohead-details-container px-3 clearfix">
    <ul class="pagehead-actions">
      <li>
        <div class="clearfix">
          <button class="btn btn-sm btn-with-count" href="#url" role="button">
            <%= octicon("eye") %>
            Watch
          </button>
          <button class="social-count" href="#url">6</button>
        </div>
      </li>
      <li>
        <div class="clearfix">
          <button class="btn btn-sm btn-with-count" href="#url" role="button">
            <%= octicon("repo-forked") %>
            Fork
          </button>
          <button class="social-count" href="#url">0</button>
        </div>
      </li>
    </ul>
    <h1 class="private">
      <%= octicon("lock") %>
      <span class="author"><a href="#url" class="url fn" rel="author">cmwinters</a></span>
      <span class="path-divider">/</span>
      <strong><a href="#url">project</a></strong>
      <span class="Label Label--outline v-align-middle">Private</span>
    </h1>
  </div>
  <div class="container-lg px-3">
    <nav class="reponav clearfix" role="navigation">
      <a class="reponav-item selected" href="#url">
        <%= octicon("code") %>
        Code
      </a>
      <a class="reponav-item" href="#url">
        <%= octicon("issue-opened") %>
        Issues
        <span class="Counter">1</span>
      </a>
      <a class="reponav-item" href="#url">
        <%= octicon("git-pull-request") %>
        Pull requests
        <span class="Counter">2</span>
      </a>
      <a class="reponav-item" href="#url">
        <%= octicon("project") %>
        Projects
        <span class="Counter">3</span>
      </a>
    </nav>
  </div>
</div>
```
