---
title: Pagehead
path: components/pagehead
status: Stable
internal: true
source: 'https://github.com/github/github/tree/master/app/assets/stylesheets/components/pagehead.scss'
symbols: [account-switcher, active, admin, avatar, dropdown-menu-content, experiment-repo-nav, fork, fork-flag, mirror, mirror-flag, octicon, octicon-lock, octicon-mirror, octicon-mute, pagehead, pagehead-actions, pagehead-heading, pagehead-tabs-item, path-divider, png, private, repohead, repohead-details-container, reponav, reponav-dropdown, reponav-item, select-menu, select-menu-modal-holder, selected, underline-nav]
---

Give a page a clear, separated title and optional top nav by adding a `.pagehead`.



## Basic pagehead

In its simplest form, you can build a pagehead with a `pagehead` element with an `h1` child.

```html live
<div class="pagehead">
  <h1>Title</h1>
</div>
```

### Avatars

Place an avatar inside the `h1` to have margins applied to it. Don't forget the `avatar` class!

Also be sure to add `aria-hidden="true"` to hide the avatar from screenreaders.

```html live
<div class="pagehead">
  <h1>
    <!-- <%= avatar_for("jonrohan", 32, "aria-hidden": "true") %> -->
    <img class="avatar" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=64" width="32" height="32" aria-hidden="true" />
    jonrohan
  </h1>
</div>
```

### Path divider

For path or breadcrumb patterns, wrap the `/` with `path-divider` to add some nice horizontal spacing.

```html live
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

```html live
<div class="pagehead">
  <ul class="pagehead-actions">
    <li><button class="btn btn-sm" href="#url">Action</button></li>
    <li><button class="btn btn-sm btn-primary" href="#url">Action</button></li>
  </ul>
  <h1>Title</h1>
</div>
```

## Org nav

```html live
<div class="pagehead orghead px-3">
  <nav class="orgnav clearfix" role="navigation">
    <a class="pagehead-tabs-item selected" href="#url">
      <!-- <%= octicon("repo") %> -->
      <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <span>Repositories</span>
    </a>
    <a class="pagehead-tabs-item" href="#url">
      <!-- <%= octicon("jersey") %> -->
      <svg class="octicon octicon-jersey" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.5 6l-.5.5v5l.5.5h2l.5-.5v-5L6.5 6h-2zM6 11H5V7h1v4zm6.27-7.25C12.05 2.37 11.96 1.12 12 0H9.02c0 .27-.13.48-.39.69-.25.2-.63.3-1.13.3-.5 0-.88-.09-1.13-.3-.23-.2-.36-.42-.36-.69H3c.05 1.13-.03 2.38-.25 3.75C2.55 5.13 1.95 5.88 1 6v9c.02.27.11.48.31.69.2.21.42.3.69.31h11c.27-.02.48-.11.69-.31.21-.2.3-.42.31-.69V6c-.95-.13-1.53-.88-1.75-2.25h.02zM13 15H2V7c.89-.5 1.48-1.25 1.72-2.25S4.03 2.5 4 1h1c-.02.78.16 1.47.52 2.06.36.58 1.02.89 2 .94.98-.02 1.64-.33 2-.94.36-.59.5-1.28.48-2.06h1c.02 1.42.13 2.55.33 3.38.2.81.69 2 1.67 2.63v8V15zM8.5 6l-.5.5v5l.5.5h2l.5-.5v-5l-.5-.5h-2zm1.5 5H9V7h1v4z"></path></svg>
      <span>Teams</span>
      <span class="Counter">1</span>
    </a>
    <a class="pagehead-tabs-item" href="#url">
      <!-- <%= octicon("project") %> -->
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"></path></svg>
      <span>Projects</span>
      <span class="Counter">2</span>
    </a>
    <a class="pagehead-tabs-item" href="#url">
      <!-- <%= octicon("briefcase") %> -->
      <svg class="octicon octicon-briefcase" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H9zM6 3h2v1H6V3zm7 6H8v1H6V9H1V5h1v3h10V5h1v4z"></path></svg>
      <span>Jobs</span>
      <span class="Counter">3</span>
    </a>
  </nav>
</div>
```

## Repohead

Use `pagehead` to construct a header and navigation for a repository.

### Base

```html live
<div class="pagehead repohead experiment-repo-nav">
  <div class="container-lg repohead-details-container px-3 clearfix">
    <ul class="pagehead-actions">
      <li>
        <div class="clearfix">
          <button class="btn btn-sm btn-with-count" href="#url" role="button">
            <!-- <%= octicon("eye")%> -->
            <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
            <span>Watch</span>
          </button>
          <button class="social-count" href="#url">6</button>
        </div>
      </li>
      <li>
        <div class="clearfix">
          <button class="btn btn-sm btn-with-count" href="#url" role="button">
            <!-- <%= octicon("repo-forked") %> -->
            <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
            <span>Fork</span>
          </button>
          <button class="social-count" href="#url">0</button>
        </div>
      </li>
    </ul>
    <h1>
      <!-- <%= octicon("repo") %> -->
      <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <span class="author"><a href="#url" class="url fn" rel="author">cmwinters</a></span>
      <span class="path-divider">/</span>
      <strong><a href="#url">project</a></strong>
    </h1>
  </div>
  <div class="container-lg px-3">
    <nav class="reponav clearfix" role="navigation">
      <a class="reponav-item selected" href="#url">
        <!-- <%= octicon("code") %> -->
        <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
        <span>Code</span>
      </a>
      <a class="reponav-item" href="#url">
        <!-- <%= octicon("issue-opened") %> -->
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span>Issues</span>
        <span class="Counter">1</span>
      </a>
      <a class="reponav-item" href="#url">
        <!-- <%= octicon("git-pull-request") %> -->
        <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        <span>Pull requests</span>
        <span class="Counter">2</span>
      </a>
      <a class="reponav-item" href="#url">
        <!-- <%= octicon("project") %> -->
        <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"></path></svg>
        <span>Projects</span>
        <span class="Counter">3</span>
      </a>
    </nav>
  </div>
</div>
```

### Private

```html live
<div class="pagehead repohead experiment-repo-nav">
  <div class="container-lg repohead-details-container px-3 clearfix">
    <ul class="pagehead-actions">
      <li>
        <div class="clearfix">
          <button class="btn btn-sm btn-with-count" href="#url" role="button">
            <!-- <%= octicon("eye") %> -->
            <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
            <span>Watch</span>
          </button>
          <button class="social-count" href="#url">6</button>
        </div>
      </li>
      <li>
        <div class="clearfix">
          <button class="btn btn-sm btn-with-count" href="#url" role="button">
            <!-- <%= octicon("repo-forked") %> -->
            <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
            <span>Fork</span>
          </button>
          <button class="social-count" href="#url">0</button>
        </div>
      </li>
    </ul>
    <h1 class="private">
      <!-- <%= octicon("lock") %> -->
      <svg class="octicon octicon-lock" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"></path></svg>
      <span class="author"><a href="#url" class="url fn" rel="author">cmwinters</a></span>
      <span class="path-divider">/</span>
      <strong><a href="#url">project</a></strong>
      <span class="Label Label--outline v-align-middle">Private</span>
    </h1>
  </div>
  <div class="container-lg px-3">
    <nav class="reponav clearfix" role="navigation">
      <a class="reponav-item selected" href="#url">
        <!-- <%= octicon("code") %> -->
        <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
        <span>Code</span>
      </a>
      <a class="reponav-item" href="#url">
        <!-- <%= octicon("issue-opened") %> -->
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span>Issues</span>
        <span class="Counter">1</span>
      </a>
      <a class="reponav-item" href="#url">
        <!-- <%= octicon("git-pull-request") %> -->
        <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        <span>Pull requests</span>
        <span class="Counter">2</span>
      </a>
      <a class="reponav-item" href="#url">
        <!-- <%= octicon("project") %> -->
        <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"></path></svg>
        <span>Projects</span>
        <span class="Counter">3</span>
      </a>
    </nav>
  </div>
</div>
```
