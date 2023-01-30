export default {
  title: 'Utilities/Details'
}

export const Overlay = ({}) => (
  <details class="details-overlay">
    <summary class="btn">More</summary>
    <div class="border p-3 mt-2">Hidden text</div>
  </details>
)

export const OverlayDark = ({}) => (
  <details class="details-overlay details-overlay-dark">
    <summary class="btn">More</summary>
    <div class="position-relative color-bg-default rounded p-3 mt-2" style={{zIndex: '112'}}>
      Hidden text
    </div>
  </details>
)

export const Caret = ({}) => (
  <details class="details-reset">
    <summary class="btn">More <span class="dropdown-caret"></span></summary>
    <div class="border p-3 mt-2">Hidden text</div>
  </details>
)

export const Summary = ({}) => (
  <div>
    <details>
      <summary class="btn btn-primary">More</summary>
      <div class="border p-3 mt-2">Hidden text</div>
    </details>

    <details class="details-reset mt-3">
      <summary class="btn-link">More <span class="dropdown-caret"></span></summary>
      <div class="border p-3 mt-2">Hidden text</div>
    </details>
  </div>
)
