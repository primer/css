---
title: Autocomplete
path: components/autocomplete
status: Stable
source: 'https://github.com/primer/css/tree/main/src/autocomplete'
bundle: autocomplete
---

A list of items used to show autocompleted results. Use the [`<auto-complete>`](https://github.com/github/auto-complete-element) element to add functionality.

## Default (stacked label)

```html live
<div class="position-relative">
  <label for="input-0" class="autocomplete-label-stacked">Search by user</label>
  <span class="autocomplete-body">
    <input id="input-0" class="form-control" type="text" />
    <ul role="listbox" aria-label="Results" class="autocomplete-results">
      <li class="autocomplete-item" aria-selected="true">Option 1</li>
      <li class="autocomplete-item">Option 2</li>
      <li class="autocomplete-item">Option 3</li>
    </ul>
  </span>
</div>

<style>
  .frame-example {
    height: 160px;
  }
</style>
```

## Inline label

**Note**: On smaller screen sizes, the labels will be stacked.

```html live
<div class="position-relative">
  <label for="input-1" class="autocomplete-label-inline">Search by team</label>
  <span class="autocomplete-body">
    <input id="input-1" class="form-control" type="text" />
    <ul role="listbox" aria-label="Results" class="autocomplete-results">
      <li class="autocomplete-item" aria-selected="true">Team 1 (works on Ruby architecture)</li>
      <li class="autocomplete-item">Team 2 (works on frontend JS architecture)</li>
      <li class="autocomplete-item">Team 3 (this team works on design systems)</li>
    </ul>
  </span>
</div>

<style>
  .frame-example {
    height: 160px;
  }
</style>
```

## Embedded icon with visible label

### Stacked label

```html live
<div class="position-relative">
  <label for="input-2" class="autocomplete-label-stacked">Search by org</label>
  <span class="autocomplete-body">
    <div class="form-control autocomplete-embedded-icon-wrap">
      <svg
        class="octicon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fill-rule="evenodd"
          d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
        ></path>
      </svg>
      <input id="input-2" class="form-control" type="text" />
    </div>
    <ul role="listbox" aria-label="Results" class="autocomplete-results">
      <li class="autocomplete-item" aria-selected="true">Option 1</li>
      <li class="autocomplete-item">Option 2</li>
      <li class="autocomplete-item">Option 3</li>
    </ul>
  </span>
</div>

<style>
  .frame-example {
    height: 180px;
  }
</style>
```

### Inline label

```html live
<div class="position-relative">
  <label for="input-3" class="autocomplete-label-inline">Search by org</label>
  <span class="autocomplete-body">
    <div class="form-control autocomplete-embedded-icon-wrap">
      <svg
        class="octicon autocomplete-embedded-icon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fill-rule="evenodd"
          d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
        ></path>
      </svg>
      <input id="input-3" class="form-control" type="text" />
    </div>
    <ul role="listbox" aria-label="Results" class="autocomplete-results">
      <li class="autocomplete-item" aria-selected="true">Option 1</li>
      <li class="autocomplete-item">Option 2</li>
      <li class="autocomplete-item">Option 3</li>
    </ul>
  </span>
</div>

<style>
  .frame-example {
    height: 160px;
  }
</style>
```

## Embedded icon with hidden label

```html live
<div class="position-relative">
  <label for="input-4" class="autocomplete-label-stacked sr-only">Search by org</label>
  <span class="autocomplete-body">
    <div class="form-control autocomplete-embedded-icon-wrap">
      <svg
        aria-hidden="true"
        class="octicon autocomplete-embedded-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fill-rule="evenodd"
          d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
        ></path>
      </svg>
      <input id="input-4" class="form-control" type="text" />
    </div>
    <ul role="listbox" aria-label="Results" class="autocomplete-results">
      <li class="autocomplete-item" aria-selected="true">Option 1</li>
      <li class="autocomplete-item">Option 2</li>
      <li class="autocomplete-item">Option 3</li>
    </ul>
  </span>
</div>

<style>
  .frame-example {
    height: 160px;
  }
</style>
```

## Within form group

```html live
<div class="form-group">
  <div class="form-group-body">
    <div class="position-relative">
      <label for="input-5" class="autocomplete-label-stacked">Search by org</label>
      <span class="autocomplete-body">
        <div class="form-control autocomplete-embedded-icon-wrap">
          <svg
            class="octicon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          ><path
              fill-rule="evenodd"
              d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
            ></path></svg>
          <input id="input-5" class="form-control" type="text" />
        </div>
        <ul role="listbox" aria-label="Results" class="autocomplete-results">
          <li class="autocomplete-item" aria-selected="true">Option 1</li>
          <li class="autocomplete-item">Option 2</li>
          <li class="autocomplete-item">Option 3</li>
        </ul>
      </span>
    </div>
  </div>
</div>

<style>
  .frame-example {
    height: 180px;
  }
</style>
```

## Within input group

When rendering `Autocomplete` with embedded icon within an [input group](https://primer.style/css/components/forms#input-group), add `.input-group-button--autocomplete-embedded-icon` to `.input-group-button`.

### Stacked

```html live
<div class="input-group">
  <div class="position-relative">
    <label for="input-6" class="autocomplete-label-stacked">Search by org</label>
    <span class="autocomplete-body">
      <div class="form-control autocomplete-embedded-icon-wrap">
        <svg
          class="octicon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        ><path
            fill-rule="evenodd"
            d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
          ></path></svg>
        <input id="input-6" class="form-control" type="text" />
      </div>
      <ul role="listbox" aria-label="Results" class="autocomplete-results">
        <li class="autocomplete-item" aria-selected="true">Option 1</li>
        <li class="autocomplete-item">Option 2</li>
        <li class="autocomplete-item">Option 3</li>
      </ul>
    </span>
  </div>
  <span class="input-group-button input-group-button--autocomplete-embedded-icon">
    <button class="btn" type="button" aria-label="Copy to clipboard">
        <svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg>
    </button>
  </span>
</div>

<style>
  .frame-example {
    height: 180px;
  }
</style>
```

### Inline
```html live
<div class="input-group">
  <div class="position-relative">
    <label for="input-7" class="autocomplete-label-inline">Search by org</label>
    <span class="autocomplete-body">
      <div class="form-control autocomplete-embedded-icon-wrap">
        <svg
          class="octicon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        ><path
            fill-rule="evenodd"
            d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
          ></path></svg>
        <input id="input-7" class="form-control" type="text" />
      </div>
      <ul role="listbox" aria-label="Results" class="autocomplete-results">
        <li class="autocomplete-item" aria-selected="true">Option 1</li>
        <li class="autocomplete-item">Option 2</li>
        <li class="autocomplete-item">Option 3</li>
      </ul>
    </span>
  </div>
  <span class="input-group-button input-group-button--autocomplete-embedded-icon">
    <button class="btn" type="button" aria-label="Copy to clipboard">
        <svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg>
    </button>
  </span>
</div>

<style>
  .frame-example {
    height: 160px;
  }
</style>
```

## Container with `max-width`

```html live
<div class="Box" style="max-width: 440px;">
  <div class="Box-body">
    <div class="form-group">
      <div class="form-group-body">
        <div class="position-relative">
          <label for="input-8" class="autocomplete-label-stacked">Search by org</label>
          <span class="autocomplete-body">
            <div class="form-control autocomplete-embedded-icon-wrap">
              <svg
                class="octicon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              ><path
                  fill-rule="evenodd"
                  d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
                ></path></svg>
              <input id="input-8" class="form-control" type="text" />
            </div>
            <ul role="listbox" aria-label="Results" class="autocomplete-results">
              <li class="autocomplete-item" aria-selected="true">Option 1</li>
              <li class="autocomplete-item">Option 2</li>
              <li class="autocomplete-item">Option 3</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .frame-example {
    height: 220px;
  }
</style>
```

## Additional content

Autocomplete items can contain additional content, like an `.avatar`. Or use utility classes to customize the text style.

```html live
<div class="position-relative">
  <input class="form-control" type="text" aria-label="Search by user" placeholder="Search by user" />
  <ul role="listbox" aria-label="Results" class="autocomplete-results">
    <li class="autocomplete-item" aria-selected="true">
      <img src="https://github.com/github.png" width="20" class="avatar mr-1" alt="" />
      <span>GitHub Inc.</span>
      <span class="text-normal">@github</span>
    </li>
    <li class="autocomplete-item">
      <img src="https://github.com/hubot.png" width="20" class="avatar mr-1" alt="" />
      <span>Hubot</span>
      <span class="text-normal">@hubot</span>
    </li>
    <li class="autocomplete-item">
      <img src="https://github.com/octocat.png" width="20" class="avatar mr-1" alt="" />
      <span>Monalisa Octocat</span>
      <span class="text-normal">@octocat</span>
    </li>
  </ul>
</div>

<style>
  .frame-example {
    width: 300px;
    height: 160px;
  }
</style>
```

## Suggester

The `.suggester` component is meant for showing suggestions while typing in a larger text area. Use the [`<text-expander>`](https://github.com/github/text-expander-element) element to add functionality.

```html live
<div class="form-group position-relative">
  <textarea class="form-control width-full" placeholder="Leave a comment" aria-label="Comment body">
This is on top of #</textarea
  >
  <ul aria-label="Results" class="suggester suggester-container" role="listbox" style="top: 4px; left: 125px;">
    <li aria-selected="true">
      <svg
        class="octicon color-fg-subtle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
      </svg>
      <small>#924</small> <span>Markdown tables are inaccessible</span>
    </li>
    <li>
      <svg
        class="octicon color-fg-success"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
      </svg>
      <small>#980</small> <span>Use actual book emoji in Flexbox docs</span>
    </li>
    <li>
      <svg
        class="octicon color-fg-attention"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
      </svg>
      <small>#979</small> <span>Add `.radio-group` component</span>
    </li>
    <li>
      <svg
        class="octicon color-fg-danger"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
      </svg>
      <small>#925</small> <span>Release 14.0.0</span>
    </li>
    <li>
      <svg class="octicon color-fg-done" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
      </svg>
      <small>#978</small> <span>Add `.css-truncate-overflow`</span>
    </li>
  </ul>
</div>

<style>
  .frame-example {
    height: 260px;
  }
</style>
```
