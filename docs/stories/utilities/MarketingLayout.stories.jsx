export default {
  title: 'Utilities/Marketing/Layout',
}

export const Positions = ({}) => (
  <>
    <div class="position-relative p-6 color-bg-subtle">
      <div class="border color-bg-default position-absolute top-2">.top-2</div>
      <div class="border color-bg-default position-absolute position-lg-static right-md-4">.right-md-4</div>
      <div class="border color-bg-default position-lg-absolute left-lg-1">.left-lg-1</div>
    </div>
  </>
)

export const Offset = ({}) => (
  <>
    <div class="mx-auto border" style="width: 300px">
      <div class="offset-n1 col-4 border p-3">.offset-n1</div>
      <div class="offset-n2 col-4 border p-3">.offset-n2</div>
    </div>
  </>
)
