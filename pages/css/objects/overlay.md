---
title: Overlay
path: objects/overlay
status: New Release
source: 'https://github.com/primer/css/tree/master/src/layout/overlay'
bundle: layout
---

The Overlay object provides a responsive container that can be used in a various ways.

{:toc}


## Default Overlay

A common way to show Overlays is by wrapping them in a `<details>` element. Overlays come with an `.Overlay-header` and `.Overlay-footer`, but both are optional. `.Overlay-content` is a container, ready to be filled. If the content overflows, for example on mobile phones, `.Overlay-content` starts to vertically scroll.

```html
<div class="p-5">

<details class="details-reset details-overlay" open>
  <summary class="btn">
    Choose an item
  </summary>
  <div class="Overlay">
    <div class="Overlay-box">
      <header class="Overlay-header">
        <h3 class="Overlay-title">Title</h3>
        <button class="Overlay-closeButton" type="button"><svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
      </header>
      <main class="Overlay-content text-center px-6 py-3">
        <h4 class="mb-2">Content goes here</h4>
        <p>Fill me with anything you like. ✨ 🙌 🎉 </p>
      </main>
      <footer class="Overlay-footer">
        Footer
      </footer>
    </div>
  </div>
</details>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

</div>
```

## Overlay as a Menu

Use an Overlay as a wrapper for Menus. Add the `border-0` utility to remove the Menu's default border.

```html
<div class="p-5">

<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="menu">
    File
  </summary>
  <div class="Overlay Overlay--dropdown">
    <div class="Overlay-box">
      <main class="Overlay-content">
        <menu class="Menu Menu--simple">
          <a class="Menu-item selected">
            <span class="Menu-text">Show comments</span>
          </a>
          <hr class="Menu-divider">
          <a class="Menu-item" href="#">
            <span class="Menu-text">View file</span>
          </a>
          <a class="Menu-item" href="#">
            <span class="Menu-text">Edit file</span>
          </a>
          <a class="Menu-item text-red" href="#">
            <span class="Menu-text">Delete file</span>
          </a>
          <hr class="Menu-divider">
          <a class="Menu-item" href="#">
            <span class="Menu-text">Open in desktop</span>
          </a>
        </menu>
      </main>
    </div>
  </div>
</details>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

</div>
```

## Overlay as a Select Menu

Select Menus are more advanced menus with extra functionality. Such as allowing multiple selections and filtering the list. To give SelectMenus a bit more space on mobile, use the `.Overlay--full` modifier. It's also recomended whenever a filter/search is present. That way, the Overlay box stays in place and doesn't jump in position.

```html
<div class="p-5" style="min-height: 450px;">

<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="menu">
    Choose an item
  </summary>
  <div class="Overlay Overlay--selectMenu">
    <div class="Overlay-box">
      <header class="Overlay-header">
        <h3 class="Overlay-title">Title</h3>
        <button class="Overlay-closeButton" type="button"><svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
      </header>
      <form class="border-bottom bg-gray m-0 p-3 p-sm-2">
        <input class="form-control input-block" type="text" placeholder="Filter" aria-label="Filter">
      </form>
      <main class="Overlay-content">
        <menu class="Menu">
          <a class="Menu-item selected">
            <span class="Menu-text">Item 1</span>
          </a>
          <a class="Menu-item">
            <span class="Menu-text">Item 2</span>
          </a>
          <a class="Menu-item">
            <span class="Menu-text">Item 3</span>
          </a>
          <a class="Menu-item selected">
            <span class="Menu-text">Item 4</span>
          </a>
          <a class="Menu-item">
            <span class="Menu-text">Item 5</span>
          </a>
          <a class="Menu-item">
            <span class="Menu-text">Item 6</span>
          </a>
          <a class="Menu-item selected">
            <span class="Menu-text">Item 7</span>
          </a>
          <a class="Menu-item">
            <span class="Menu-text">Item 8</span>
          </a>
          <a class="Menu-item">
            <span class="Menu-text">Item 9</span>
          </a>
        </menu>
      </main>
      <footer class="Overlay-footer">
        Footer
      </footer>
    </div>
  </div>
</details>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

</div>
```


## Overlay as a Dialog (Box-overlay)

Dialogs ususally ask the user to make a choice. You can use the `.Box` component to further style the content. Use `.Overlay--blocking` to disable the dismissal of the dialog when clicking outside of the box.

```html
<div class="p-5">

<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="menu">
    Choose an item
  </summary>
  <div class="Overlay Overlay--blocking">
    <div class="Overlay-box">
      <header class="Overlay-header">
        <h3 class="Overlay-title">Title</h3>
        <button class="Overlay-closeButton" type="button"><svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
      </header>
      <main class="Overlay-content">
        <p class="border-bottom m-0 p-3">
          The quick brown fox jumps over the lazy dog and feels as if he were in the seventh heaven of typography together with Hermann Zapf, the most famous artist of the...
        </p>
        <ul>
          <li class="Box-row">
            <img class="avatar v-align-middle mr-2" src="https://avatars.githubusercontent.com/broccolini?s=48" alt="broccolini" width="24" height="24">
            @broccolini
          </li>
          <li class="Box-row">
            <img class="avatar v-align-middle mr-2" src="https://avatars.githubusercontent.com/jonrohan?s=48" alt="jonrohan" width="24" height="24">
            @jonrohan
          </li>
          <li class="Box-row">
            <img class="avatar v-align-middle mr-2" src="https://avatars.githubusercontent.com/shawnbot?s=48" alt="shawnbot" width="24" height="24">
            @shawnbot
          </li>
        </ul>
      </main>
      <footer class="Overlay-footer d-flex flex-justify-between">
        <button type="button" class="btn">Cancel</button>
        <button type="button" class="btn btn-primary">Submit</button>
      </footer>
    </div>
  </div>
</details>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

</div>
```

## Overlay as a Popover

Popovers can be used to inform users about new product features. They stick around until dissmissed.

```html
<div class="p-5">

<p class="mb-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<div class="Overlay Overlay--popover Overlay--caretTop">
  <div class="Overlay-box mb-0">
    <button class="Overlay-closeButton" type="button">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    <main class="Overlay-content p-4">
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button>
    </main>
  </div>
</div>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

</div>
```
