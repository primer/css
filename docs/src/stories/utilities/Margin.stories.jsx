export default {
  title: 'Utilities/Margin'
}

export const Uniform = ({}) => (
  <div class="d-flex flex-items-baseline flex-justify-around">
    <div class="color-bg-attention"><div class="m-0 p-1 color-bg-subtle">.m-0</div></div>
    <div class="color-bg-attention"><div class="m-1 p-1 color-bg-subtle">.m-1</div></div>
    <div class="color-bg-attention"><div class="m-2 p-1 color-bg-subtle">.m-2</div></div>
    <div class="color-bg-attention"><div class="m-3 p-1 color-bg-subtle">.m-3</div></div>
    <div class="color-bg-attention"><div class="m-4 p-1 color-bg-subtle">.m-4</div></div>
    <div class="color-bg-attention"><div class="m-5 p-1 color-bg-subtle">.m-5</div></div>
    <div class="color-bg-attention"><div class="m-6 p-1 color-bg-subtle">.m-6</div></div>
  </div>
)

export const Directional = ({}) => (
  <div class="d-flex flex-items-baseline flex-justify-around">
    <div class="color-bg-attention"><div class="mt-3 p-1 color-bg-subtle">.mt-3</div></div>
    <div class="color-bg-attention"><div class="mr-3 p-1 color-bg-subtle">.mr-3</div></div>
    <div class="color-bg-attention"><div class="mb-3 p-1 color-bg-subtle">.mb-3</div></div>
    <div class="color-bg-attention"><div class="ml-3 p-1 color-bg-subtle">.ml-3</div></div>
    <div class="color-bg-attention"><div class="mx-3 p-1 color-bg-subtle">.mx-3</div></div>
    <div class="color-bg-attention"><div class="my-3 p-1 color-bg-subtle">.my-3</div></div>
  </div>
)

export const Extended = ({}) => (
  <div>
    <div class="color-bg-attention d-inline-block"><div class="mt-7  p-1 color-bg-subtle">.mt-7</div></div>
    <div class="color-bg-attention d-inline-block"><div class="mt-8  p-1 color-bg-subtle">.mt-8</div></div>
    <div class="color-bg-attention d-inline-block"><div class="mt-9  p-1 color-bg-subtle">.mt-9</div></div>
    <div class="color-bg-attention d-inline-block"><div class="mt-10 p-1 color-bg-subtle">.mt-10</div></div>
    <div class="color-bg-attention d-inline-block"><div class="mt-11 p-1 color-bg-subtle">.mt-11</div></div>
    <div class="color-bg-attention d-inline-block"><div class="mt-12 p-1 color-bg-subtle">.mt-12</div></div>
  </div>
)

export const Auto = ({}) => (
  <div class="color-bg-attention">
    <div class="mx-auto color-bg-subtle text-center" style={{maxWidth: '500px'}}>.mx-auto</div>
  </div>
)

export const AutoDirectional = ({}) => (
  <div>
    <div class="d-flex border mb-4">
      <div style={{height: '100px'}}></div>
      <div class="border mt-auto">`mt-auto` will push this box to the bottom.</div>
      <div class="border mb-auto">`mb-auto` will push this box to the top.</div>
    </div>
    <div class="d-flex flex-column border">
      <div class="border ml-auto">`ml-auto` will push this box to the right.</div>
      <div class="border mr-auto">`mr-auto` will push this box to the left.</div>
    </div>
  </div>
)

export const Reset = ({}) => (
  <div class="color-bg-attention border">
    <p class="mb-0 color-bg-subtle p-1">No bottom margin on this paragraph.</p>
  </div>
)

export const Responsive = ({}) => (
  <div class="color-bg-attention d-inline-block">
    <div class="mx-sm-2 mx-md-4 color-bg-subtle p-1">
      .mx-sm-2 .mx-md-4
    </div>
  </div>
)

export const Negative = ({}) => (
  <div class="d-flex flex-justify-center">
    <div class="color-bg-attention">
      <div class="m-3 ml-n4 ml-md-n6 border-left color-border-danger color-bg-subtle p-2">
        .m-3 .ml-n4 .ml-md-n6
      </div>
    </div>
  </div>
)

export const NegativeExtended = ({}) => (
  <div class="d-flex flex-justify-center">
    <div class="py-6 px-3 color-bg-attention">
      <div class="mt-n8 border-left color-border-danger color-bg-subtle p-2">
        .mt-n8
      </div>
    </div>
  </div>
)
