---
title: Box overlay
path: components/box-overlay
status: Alpha
status_issue: 'https://github.com/github/design-systems/issues/374'
source: 'https://github.com/github/github/tree/master/app/assets/stylesheets/components/box-overlay.scss'
symbols: [Box--overlay, Box-header, Box-overlay--narrow, Box-overlay--wide]
keywords: [box, overlay]
---

Use the `Box--overlay` with the `<details>` and [`<details-dialog>`](https://github.com/github/details-dialog), and add the `details-overlay-dark` utility if you wish to apply a dark transparent background.

Box overlays come in three widths. The default `Box--overlay` is 440px wide, `Box-overlay--narrow` is 320px wide, and `Box-overlay--wide` is 640px wide.

```html live

<details class="details-reset details-overlay details-overlay-dark">
  <summary class="btn" aria-haspopup="dialog">Open dialog</summary>
  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <!-- <%= octicon "x" %> -->
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <h3 class="Box-title">Box title</h3>
    </div>
    <div class="overflow-auto">
      <div class="Box-body overflow-auto">
        <p>
          The quick brown fox jumps over the lazy dog and feels as if he were in the seventh heaven of typography together with Hermann Zapf, the most famous artist of the...
        </p>
      </div>
      <ul>
        <li class="Box-row">
          <img class="avatar v-align-middle mr-2" src="https://avatars.githubusercontent.com/broccolini?s=48" alt="broccolini" width="24" height="24">
          @broccolini
        </li>
        <li class="Box-row border-bottom">
          <img class="avatar v-align-middle mr-2" src="https://avatars.githubusercontent.com/jonrohan?s=48" alt="jonrohan" width="24" height="24">
          @jonrohan
        </li>
        <li class="Box-row border-bottom">
          <img class="avatar v-align-middle mr-2" src="https://avatars.githubusercontent.com/shawnbot?s=48" alt="shawnbot" width="24" height="24">
          @shawnbot
        </li>
      </ul>
    </div>
    <div class="Box-footer">
      <button type="button" class="btn btn-block" data-close-dialog>Okidoki</button>
    </div>
  </details-dialog>
</details>

<!-- Temporary overrides (don't use in production) -->
<style> .frame-example { min-height: 500px; } </style>
<link href="https://unpkg.com/@github/details-dialog-element/dist/index.css" rel="stylesheet" />
```

[aria attributes]: https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties
