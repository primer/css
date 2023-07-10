export default {
  title: 'Utilities/Grid'
}

export const Flexbox = ({}) => (
  <div class="d-flex flex-column flex-md-row flex-items-center flex-md-items-center">
    <div class="col-2 d-flex flex-items-center flex-items-center flex-md-items-start">
      <img class="width-full avatar mb-2 mb-md-0" src="https://github.com/github.png" alt="github" />
    </div>
    <div class="col-12 col-md-10 d-flex flex-column flex-justify-center flex-items-center flex-md-items-start pl-md-4">
      <h1 class="text-normal lh-condensed">GitHub</h1>
      <p class="h4 color-fg-muted text-normal mb-2">How people build software.</p>
      <a class="color-fg-muted text-small" href="#url">https://github.com/about</a>
    </div>
  </div>
)

export const Float = ({}) => (
  <div class="container-lg clearfix">
    <div class="col-4 float-left border p-4">
      My column
    </div>
    <div class="col-4 float-left border p-4">
      Looks better
    </div>
    <div class="col-4 float-left border p-4">
      Than your column
    </div>
  </div>
)

export const FloatReversed = ({}) => (
  <div class="container-lg clearfix">
    <div class="col-4 float-right border p-4">
      One
    </div>
    <div class="col-4 float-right border p-4">
      Two
    </div>
    <div class="col-4 float-right border p-4">
      Three
    </div>
  </div>
)

export const Nested = ({}) => (
  <div class="clearfix">
    <div class="col-6 float-left px-1">
      <div class="border p-1">Unnested</div>
    </div>
    <div class="col-6 float-left">
      <div class="clearfix">
        <div class="col-6 float-left px-1">
          <div class="border p-1">1 x Nested</div>
        </div>
        <div class="col-6 float-left">
          <div class="col-6 float-left px-1">
            <div class="border p-1">2 x Nested</div>
          </div>
          <div class="col-6 float-left px-1">
            <div class="border p-1">2 x Nested</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Centered = ({}) => (
  <div class="border">
    <div class="col-6 p-2 mx-auto border">
      This column is the center of my world.
    </div>
  </div>
)

export const ColumnWidth = ({}) => (
  <div>
    <div class="col-4 float-right p-2 border color-fg-danger">
      <svg class="octicon octicon-heart" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"></path></svg>
      <span>Don't go bacon my heart.</span>
    </div>
    <p>T-bone drumstick alcatra ribeye. Strip steak chuck andouille tenderloin bacon tri-tip ball tip beef capicola rump. Meatloaf bresaola drumstick ball tip salami. Drumstick ham bacon alcatra pig porchetta, spare ribs leberkas pork belly.</p>
  </div>
)

export const ColumnOffset = ({}) => (
  <div class="clearfix">
    <div class="offset-1 col-3 border p-3">.offset-1</div>
    <div class="offset-2 col-3 border p-3">.offset-2</div>
  </div>
)

export const Gutter = ({}) => (
  <div class="clearfix gutter-md-spacious border">
    <div class="col-3 float-left">
      <div class="border p-3">.col-md-3</div>
    </div>
    <div class="col-3 float-left">
      <div class="border p-3">.col-md-3</div>
    </div>
    <div class="col-3 float-left">
      <div class="border p-3">.col-md-3</div>
    </div>
    <div class="col-3 float-left">
      <div class="border p-3">.col-md-3</div>
    </div>
  </div>
)

export const GutterWithPadding = ({}) => (
  <div>
    <div class="container-lg clearfix">
      <div class="col-3 float-left pr-2 mb-3">
        <div class="border color-bg-attention">.pr-2</div>
      </div>
      <div class="col-3 float-left px-2 mb-3">
        <div class="border color-bg-attention">.px-2</div>
      </div>
      <div class="col-3 float-left px-2 mb-3">
        <div class="border color-bg-attention">.px-2</div>
      </div>
      <div class="col-3 float-left pl-2 mb-3">
        <div class="border color-bg-attention">.pl-2</div>
      </div>
    </div>
    <div class="container-lg clearfix">
      <div class="col-3 float-left pr-2">
        <div class="border color-bg-attention">.pr-2</div>
      </div>
      <div class="col-9 float-left pl-2">
        <div class="border color-bg-attention">.pl-2</div>
      </div>
    </div>
  </div>
)

export const InlineBlock = ({}) => (
  <div>
    <div class="col-4 d-inline-block border">
      .col-4 .d-inline-block
    </div>
    <div class="col-4 d-inline-block border">
      .col-4 .d-inline-block
    </div>
    <div class="col-4 d-inline-block border">
      .col-4 .d-inline-block
    </div>
  </div>
)

export const InlineBlockWithColumnWidth = ({}) => (
  <ul class="list-style-none">
    <li class="d-inline-block col-2 p-2">
      <img class="width-full avatar" src="https://github.com/broccolini.png" alt="broccolini" />
    </li>
    <li class="d-inline-block col-2 p-2">
      <img class="width-full avatar" src="https://github.com/jonrohan.png" alt="jonrohan" />
    </li>
    <li class="d-inline-block col-2 p-2">
      <img class="width-full avatar" src="https://github.com/muan.png" alt="muan" />
    </li>
    <li class="d-inline-block col-2 p-2">
      <img class="width-full avatar" src="https://github.com/pmarsceill.png" alt="pmarsceill" />
    </li>
    <li class="d-inline-block col-2 p-2">
      <img class="width-full avatar" src="https://github.com/sophshep.png" alt="sophshep" />
    </li>
    <li class="d-inline-block col-2 p-2">
      <img class="width-full avatar" src="https://github.com/cmwinters.png" alt="cmwinters" />
    </li>
    <li class="d-inline-block col-2 p-2">
      <img class="width-full avatar" src="https://github.com/jeejkang.png" alt="jeejkang" />
    </li>
    <li class="d-inline-block col-2 p-2"><img class="width-full avatar" src="https://github.com/mdo.png" alt="mdo" /></li>
  </ul>
)

export const Table = ({}) => (
  <div class="d-table col-12">
    <div class="col-4 d-table-cell border p-2">
      Bacon ipsum dolor amet leberkas pork pig kielbasa shankle ribeye meatball, salami alcatra venison.
    </div>
    <div class="col-4 d-table-cell border p-2">
      Pork chop cupim cow turkey frankfurter, landjaeger fatback hamburger meatball salami spare ribs. Rump tenderloin
      salami, hamburger frankfurter landjaeger andouille.
    </div>
    <div class="col-4 d-table-cell border p-2">
      Brisket tongue frankfurter cupim strip steak rump picanha pancetta pork pig kevin pastrami biltong. Shankle venison
      meatball swine sausage ground round. Tail pork loin ribeye kielbasa short ribs pork chop.
    </div>
  </div>
)

export const TableCell = ({}) => (
  <div class="d-table col-12">
    <div class="col-4 d-table-cell border">
      .col-4 .d-table-cell
    </div>
    <div class="col-4 d-table-cell border">
      .col-4 .d-table-cell
    </div>
    <div class="col-2 d-table-cell border">
      .col-2 .d-table-cell
    </div>
  </div>
)

export const Responsive = ({}) => (
  <div class="container-lg clearfix">
    <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
      .col-sm-6 .col-md-3 .col-lg-2
    </div>
    <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
      .col-sm-6 .col-md-3 .col-lg-2
    </div>
    <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
      .col-sm-6 .col-md-3 .col-lg-2
    </div>
    <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
      .col-sm-6 .col-md-3 .col-lg-2
    </div>
    <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
      .col-sm-6 .col-md-3 .col-lg-2
    </div>
    <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
      .col-sm-6 .col-md-3 .col-lg-2
    </div>
  </div>
)

export const ResponsiveSmall = ({}) => (
  <div class="container-lg clearfix">
    <div class="col-sm-6 float-left p-2 border">
      .col-sm-6
    </div>
    <div class="col-sm-6 float-left p-2 border">
      .col-sm-6
    </div>
    <div class="col-sm-6 float-left p-2 border">
      .col-sm-6
    </div>
    <div class="col-sm-6 float-left p-2 border">
      .col-sm-6
    </div>
    <div class="col-sm-6 float-left p-2 border">
      .col-sm-6
    </div>
    <div class="col-sm-6 float-left p-2 border">
      .col-sm-6
    </div>
  </div>
)

export const ResponsiveMedium = ({}) => (
  <div class="container-lg clearfix">
    <div class="col-md-3 float-left p-2 border">
      .col-md-3
    </div>
    <div class="col-md-3 float-left p-2 border">
      .col-md-3
    </div>
    <div class="col-md-3 float-left p-2 border">
      .col-md-3
    </div>
    <div class="col-md-3 float-left p-2 border">
      .col-md-3
    </div>
    <div class="col-md-3 float-left p-2 border">
      .col-md-3
    </div>
    <div class="col-md-3 float-left p-2 border">
      .col-md-3
    </div>
  </div>
)

export const ResponsiveLarge = ({}) => (
  <div class="container-lg clearfix">
    <div class="col-lg-2 float-left p-2 border">
      .col-lg-2
    </div>
    <div class="col-lg-2 float-left p-2 border">
      .col-lg-2
    </div>
    <div class="col-lg-2 float-left p-2 border">
      .col-lg-2
    </div>
    <div class="col-lg-2 float-left p-2 border">
      .col-lg-2
    </div>
    <div class="col-lg-2 float-left p-2 border">
      .col-lg-2
    </div>
    <div class="col-lg-2 float-left p-2 border">
      .col-lg-2
    </div>
  </div>
)

export const Container = ({}) => (
  <div>
    <div class="container-sm border">
      .container-sm, max-width 544px
    </div>

    <div class="container-md border">
      .container-md, max-width 768px
    </div>

    <div class="container-lg border">
      .container-lg, max-width 1012px
    </div>

    <div class="container-xl border">
      .container-xl, max-width 1280px
    </div>
  </div>
)
