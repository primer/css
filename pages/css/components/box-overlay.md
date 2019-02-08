---
title: Box overlay
status: Experimental
status_issue: 'https://github.com/github/design-systems/issues/374'
source: 'https://github.com/github/github/tree/master/app/assets/stylesheets/components/box-overlay.scss'
symbols: [Box--overlay, Box-header, Box-overlay--narrow, Box-overlay--wide]
keywords: [box, overlay]
---

import DetailsDialog from '../../../docs/DetailsDialog'

## Box overlays
Use the `Box--overlay` with the `<details>` and [`<details-dialog>`](https://github.com/github/details-dialog), and add the `details-overlay-dark` utility if you wish to apply a dark transparent background.

Box overlays come in three widths. The default `Box--overlay` is 440px wide, `Box-overlay--narrow` is 320px wide, and `Box-overlay--wide` is 640px wide.

**Note:** `position: fixed` has been disabled in this example

```erb
<details class="details-reset details-overlay details-overlay-dark">
  <summary class="btn" aria-haspopup="dialog">Open dialog</summary>
  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <%= octicon "x" %>
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
```

In github.com there is a shared dialog partial. You will only have to pass in the modal content:

```erb
<%= render layout: "shared/details_dialog", locals: {
  button_text: "Delete account",
  title: "Are you sure you want to delete this account?",
  button_class: "btn btn-danger"
} do %>
  <div class="Box-body overflow-auto">
    <p>
      This action is irreversible.
    </p>
    <button type="button" class="btn btn-block btn-danger mt-2" data-close-dialog>
      Delete
    </button>
  </div>
<% end %>
```

[ARIA attributes]: https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties
