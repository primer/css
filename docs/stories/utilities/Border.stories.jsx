export default {
  title: 'Utilities/Border'
}

export const Default = ({}) => <span class="color-bg-subtle p-2 border">.border</span>

export const Direction = ({}) => (
  <div style={{display: 'inline-flex', flexDirection: 'column', gap: '1rem'}}>
    <div class="color-bg-subtle p-2 border-left">.border-left</div>
    <div class="color-bg-subtle p-2 border-top">.border-top</div>
    <div class="color-bg-subtle p-2 border-bottom">.border-bottom</div>
    <div class="color-bg-subtle p-2 border-right">.border-right</div>
    <div class="color-bg-subtle p-2 border-x">.border-x</div>
    <div class="color-bg-subtle p-2 border-y">.border-y</div>
  </div>
)

export const Hide = ({}) => <span class="color-bg-subtle p-2 border border-top-0">.border-top-0</span>

export const Style = ({}) => <span class="color-bg-subtle p-2 border border-dashed">.border-dashed</span>

export const Rounded = ({}) => (
  <div style={{display: 'inline-flex', flexDirection: 'column', gap: '1rem'}}>
    <div class="color-bg-subtle p-2 border rounded-0">.rounded-0</div>
    <div class="color-bg-subtle p-2 border rounded-1">.rounded-1</div>
    <div class="color-bg-subtle p-2 border rounded-2">.rounded-2</div>
    <div class="color-bg-subtle p-2 border rounded-3">.rounded-3</div>
    <div
      class="color-bg-subtle border circle"
      style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '100px'}}
    >
      .circle
    </div>
  </div>
)

export const RoundedDirection = ({}) => (
  <div style={{display: 'inline-flex', flexDirection: 'column', gap: '1rem'}}>
    <div class="color-bg-subtle p-2 border rounded-top-2">.rounded-top-2</div>
    <div class="color-bg-subtle p-2 border rounded-right-2">.rounded-right-2</div>
    <div class="color-bg-subtle p-2 border rounded-bottom-2">.rounded-bottom-2</div>
    <div class="color-bg-subtle p-2 border rounded-left-2">.rounded-left-2</div>
  </div>
)

export const RoundedResponsive = ({}) => (
  <div
    class="color-bg-subtle p-2 border rounded-sm-1 rounded-md-2 rounded-lg-3"
    style={{display: 'inline-flex', flexDirection: 'column', gap: '1rem'}}
  >
    <div>.border-left</div>
    <div class="d-none d-sm-block">.rounded-sm-1</div>
    <div class="d-none d-md-block">.rounded-md-2</div>
    <div class="d-none d-lg-block">.rounded-lg-3</div>
  </div>
)

export const Responsive = ({}) => (
  <div
    class="color-bg-subtle p-2 border-left border-sm-top border-md-right border-lg-bottom"
    style={{display: 'inline-flex', flexDirection: 'column', gap: '1rem'}}
  >
    <div>.border-left</div>
    <div class="d-none d-sm-block">.border-sm-top</div>
    <div class="d-none d-md-block">.border-md-right</div>
    <div class="d-none d-lg-block">.border-lg-bottom</div>
  </div>
)
