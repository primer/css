---
title: Autocomplete
path: components/autocomplete
status: Stable
source: 'https://github.com/primer/css/tree/main/src/autocomplete'
bundle: autocomplete
---

## Autocomplete

A list of items used to show autocompleted results. Use the [`<auto-complete>`](https://github.com/github/auto-complete-element) element to add functionality.

```html live
<div class="position-relative">
  <input class="form-control input-block" type="text" aria-label="Search" placeholder="Search">
  <ul class="autocomplete-results">
    <li class="autocomplete-item" aria-selected="true">Option 1</li>
    <li class="autocomplete-item">Option 2</li>
    <li class="autocomplete-item">Option 3</li>
  </ul>
</div>

<style>.frame-example {width:300px;height:160px;}</style>
```

Autocomplete items can contain additional content, like an `.avatar`. Or use utility classes to customize the text style.

```html live
<div class="position-relative">
  <input class="form-control input-block" type="text" aria-label="Search by user" placeholder="Search by user">
  <ul class="autocomplete-results">
    <li class="autocomplete-item" aria-selected="true">
      <img src="https://github.com/github.png" width="20" class="avatar mr-1" alt="">
      <span>GitHub Inc.</span>
      <span class="text-normal">@github</span>
    </li>
    <li class="autocomplete-item">
      <img src="https://github.com/hubot.png" width="20" class="avatar mr-1" alt="">
      <span>Hubot</span>
      <span class="text-normal">@hubot</span>
    </li>
    <li class="autocomplete-item">
      <img src="https://github.com/octocat.png" width="20" class="avatar mr-1" alt="">
      <span>Monalisa Octocat</span>
      <span class="text-normal">@octocat</span>
    </li>
  </ul>
</div>

<style>.frame-example {width:300px;height:160px;}</style>
```

## Suggester

The `.suggester` component is meant for showing suggestions while typing in a larger text area. Use the [`<text-expander>`](https://github.com/github/text-expander-element) element to add functionality.

```html live
<div class="form-group position-relative">
  <textarea class="form-control width-full" placeholder="Leave a comment" aria-label="Comment body">This is on top of #</textarea>
  <ul class="suggester suggester-container" role="listbox" style="top: 4px; left: 125px;">
    <li aria-selected="true">
      <svg class="octicon color-fg-subtle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
      <small>#924</small> <span>Markdown tables are inaccessible</span>
    </li>
    <li>
      <svg class="octicon color-fg-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
      <small>#980</small> <span>Use actual book emoji in Flexbox docs</span>
    </li>
    <li>
      <svg class="octicon color-fg-attention" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
      <small>#979</small> <span>Add `.radio-group` component</span>
    </li>
    <li>
      <svg class="octicon color-fg-danger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
      <small>#925</small> <span>Release 14.0.0</span>
    </li>
    <li>
      <svg class="octicon color-fg-done" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
      <small>#978</small> <span>Add `.css-truncate-overflow`</span>
    </li>
  </ul>
</div>

<style>.frame-example {height:260px;}</style>
```
