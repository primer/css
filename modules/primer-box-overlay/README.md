# Primer / Box Overlay

[![npm version](https://img.shields.io/npm/v/primer-box-overlay.svg)](https://www.npmjs.org/package/primer-box-overlay)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Box Overlay is a module  to style content within Overlay objects

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-box-overlay` with this command.

```
$ npm install --save primer-box-overlay
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-box-overlay/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Documentation

<!-- %docs
title: Box overlay
status_issue: 'https://github.com/github/design-systems/issues/374'
status: New release
-->


## Box overlays
Use the `Box--overlay` together with the `Overlay` object to position the overlay, and add the `bg-transparent-dark` utility if you wish to apply a dark transparent background.

Box overlays come in three widths. The default `Box--overlay` is 440px wide, `Box-overlay--narrow` is 320px wide, and `Box-overlay--wide` is 640px wide.

**Note:** `position: fixed` has been disabled in this example

```html
<button type="button" class="btn" data-box-overlay-id="test-box-overlay" aria-expanded="false">Centered box</button>
<div class="Overlay js-box-overlay-container" id="test-box-overlay" role="dialog"
     aria-labelledby="test-box-overlay-title-1" aria-describedby="test-box-overlay-description-1" hidden>
  <div class="Overlay-table-full bg-transparent-dark">
    <div class="Overlay-cell-middle">
      <div class="Box Box--overlay js-box-overlay-content">
        <div class="Box-header clearfix">
          <button type="button" class="Box-btn-octicon btn-octicon float-right js-box-overlay-close"><%= octicon("x", :"aria-label" => "Close") %></button>
          <h3 class="Box-title overflow-hidden pr-3" id="test-box-overlay-title-1">Box title</h3>
        </div>
        <div class="Box-body">
          <p id="test-box-overlay-description-1">
            The quick brown fox jumps over the lazy dog and feels as if he were in the seventh heaven of typography together with Hermann Zapf, the most famous artist of the...
          </p>
          <button type="button" class="btn btn-block mt-2 js-box-overlay-close" autofocus>Okidoki</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

```html
<button type="button" class="btn" data-box-overlay-id="test-box-overlay-top" aria-expanded="false">Aligned-top box</button>
<div class="Overlay js-box-overlay-container" id="test-box-overlay-top" role="dialog"
     aria-labelledby="test-box-overlay-title-2" aria-describedby="test-box-overlay-description-2" hidden>
  <div class="Overlay-table-full bg-transparent-dark">
    <div class="Overlay-cell-top">
      <div class="Box Box--overlay js-box-overlay-content">
        <div class="Box-header clearfix">
          <button type="button" class="Box-btn-octicon btn-octicon float-right js-box-overlay-close"><%= octicon("x", :"aria-label" => "Close") %></button>
          <h3 class="Box-title overflow-hidden pr-3" id="test-box-overlay-title-2">Box title</h3>
        </div>
        <div class="Box-body">
          <p id="test-box-overlay-description-2">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <ul>
          <li class="Box-row">
            <img class="avatar v-align-middle mr-2" src="https://avatars.githubusercontent.com/broccolini?s=48" alt="" width="24" height="24">
            @broccolini
          </li>
          <li class="Box-row border-bottom">
            <img class="avatar v-align-middle mr-2" src="https://avatars.githubusercontent.com/jonrohan?s=48" alt="" width="24" height="24">
            @jonrohan
          </li>
          <li class="Box-row border-bottom">
            <img class="avatar v-align-middle mr-2" src="https://avatars.githubusercontent.com/shawnbot?s=48" alt="" width="24" height="24">
            @shawnbot
          </li>
        </ul>
        <div class="Box-body">
          <button type="button" class="btn btn-block mt-2 js-box-overlay-close" autofocus>Okidoki</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

For github.com we have a shared box overlay layout for the trigger button and the modal. You will only have to pass in the modal content:

```erb
<%= render layout: "shared/box_overlay", locals: {
  button_text: "Delete account",
  title: "Are you sure you want to delete this account?",
  button_class: "btn btn-danger"
} do %>
  <p>
    This action is irreversible.
  </p>
  <button type="button" class="btn btn-block btn-danger mt-2 js-box-overlay-close" autofocus>
    Delete
  </button>
<% end %>
```

It is also possible to use a custom trigger if you need button content that is not just icon plus text. Just bear in mind to always add the appropriate [ARIA attributes].

```erb
<button
  type="button" class="btn"
  data-box-overlay-id="unique_box_id"
  aria-expanded="false"
  aria-label="999 bugs and counting">
  <%= octicon "bug" %>
  <span class="Counter ml-2">999</span>
</button>

<%= render layout: "shared/box_overlay_content", locals: {
  id: "unique_box_id",
  title: "Bugs"
} do %>
  <p>
    List of bugs.
  </p>
  <button type="button" class="btn btn-block btn-danger mt-2 js-box-overlay-close" autofocus>
    Fix all
  </button>
<% end %>
```


[ARIA attributes]: https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties


<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
