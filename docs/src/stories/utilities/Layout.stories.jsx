export default {
  title: 'Utilities/Layout'
}

export const Display = ({}) => (
  <div class="d-inline border">
    .d-inline
    <div class="d-inline-block border">
      .d-inline-block
    </div>
    <span class="d-block border">.d-block</span>
    <div class="d-table border">
      <div class="d-table-cell border">
        .d-table-cell
      </div>
    </div>
    <div class="d-table-cell border">
      .d-table-cell
    </div>
    <div class="d-none">
      .d-none
    </div>
  </div>
)

export const Table = ({}) => (
  <div class="d-table table-fixed width-full">
    <div class="d-table-cell border">
      .d-table-cell
    </div>
    <div class="d-table-cell col-10 border">
      d-table-cell .col-10
    </div>
  </div>
)

export const Responsive = ({}) => (
  <div>
    <h5 class="d-md-inline-block">.d-md-inline-block</h5>
    <ul class="d-md-inline-block border">
      <li class="d-inline border">.d-inline</li>
      <li class="d-inline border">.d-inline</li>
    </ul>
  </div>
)

export const ResponsiveHide = ({}) => (
  <div>
    <h3>Potato update</h3>
    <span class="hide-sm hide-md">Opened by <a href="#url">broccolini</a></span>
    <span class="d-md-none">Updated</span> 3 hours ago
  </div>
)

export const Floats = ({}) => (
  <div class="clearfix border">
    <div class="float-left border">
      .float-left
    </div>
    <div class="float-right border">
      .float-right
    </div>
  </div>
)

export const FloatsResponsive = ({}) => (
  <div class="clearfix border">
    <div class="float-md-left border">
      .float-md-left
    </div>
    <div class="float-md-right border">
      .float-md-right
    </div>
  </div>
)

export const Align = ({}) => (
  <div class="d-table border">
    <div class="d-table-cell"><h1>Potatoes</h1></div>
    <div class="d-table-cell v-align-baseline">.v-align-baseline</div>
    <div class="d-table-cell v-align-top">.v-align-top</div>
    <div class="d-table-cell v-align-middle">.v-align-middle</div>
    <div class="d-table-cell v-align-bottom">.v-align-bottom</div>
  </div>
)

export const AlignText = ({}) => (
  <div class="border">
    <h1 class="mr-1">Potatoes
      <span class="f4 v-align-text-top mr-1">.v-align-text-top</span>
      <span class="f4 v-align-text-bottom mr-1">.v-align-text-bottom</span>
    </h1>
  </div>
)

export const WidthFit = ({}) => (
  <div class="one-fourth column">
    <img class="width-fit color-bg-subtle" src="https://github.com/github.png" alt="width fitted octocat" />
  </div>
)

export const WidthFull = ({}) => (
  <div class="d-table width-full">
    <div class="d-table-cell">
      <input class="form-control width-full" type="text" value="Full width form field" aria-label="Sample full width form field" />
    </div>
  </div>
)

export const WidthAuto = ({}) => (
  <div class="d-table width-full width-md-auto">
    <div class="d-table-cell">
      <input class="form-control width-full" type="text" value="Responsive width form field" aria-label="Sample full responsive width form field" />
    </div>
  </div>
)

export const HeightFit = ({}) => (
  <div class="one-fourth column" style={{height: '100px', overflow: 'auto'}}>
    <div class="p-3 height-fit border">
      Bacon ipsum dolor amet meatball flank beef tail pig boudin ham hock chicken capicola. Shoulder ham spare ribs turducken pork tongue. Bresaola corned beef sausage jowl ribeye kielbasa tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin pig, chuck ground round chicken tongue corned beef biltong.
    </div>
  </div>
)

export const HeightFull = ({}) => (
  <div class="d-table border">
    <div class="d-table-cell height-full v-align-middle pl-3">
      <svg class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
    </div>
    <div class="p-3">
      Bacon ipsum dolor amet meatball flank beef tail pig boudin ham hock chicken capicola. Shoulder ham spare ribs turducken pork tongue. Bresaola corned beef sausage jowl ribeye kielbasa tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin pig, chuck ground round chicken tongue corned beef biltong.
    </div>
  </div>
)

export const Position = ({}) => (
  <div style={{height: '64px'}}>
    <div class="border position-absolute top-0 left-0">
      .top-0 .left-0
    </div>
    <div class="border position-absolute top-0 right-0">
      .top-0 .right-0
    </div>
    <div class="border position-absolute bottom-0 right-0">
      .bottom-0 .right-0
    </div>
    <div class="border position-absolute bottom-0 left-0">
      .bottom-0 .left-0
    </div>
  </div>
)

export const PositionRelative = ({}) => (
  <div style={{height: '150px'}}>
    <div class="d-inline-block float-left color-bg-accent-emphasis color-fg-on-emphasis m-3" style={{width: '100px', height: '100px'}}>
      One
    </div>
    <div class="d-inline-block float-left position-relative color-bg-accent-emphasis color-fg-on-emphasis m-3" style={{width: '100px', height: '100px', top: '12px', left: '12px'}}>
      Two
    </div>
    <div class="d-inline-block float-left color-bg-accent-emphasis color-fg-on-emphasis m-3" style={{width: '100px', height: '100px'}}>
      Three
    </div>
    <div class="d-inline-block float-left color-bg-accent-emphasis color-fg-on-emphasis m-3" style={{width: '100px', height: '100px'}}>
      Four
    </div>
  </div>
)

export const PositionAbsolute = ({}) => (
  <div class="position-relative" style={{height: '116px'}}>
    <button type="button" class="btn mb-1">Button</button>
    <div class="position-absolute border p-2">
      <a href="#url" class="d-block p-1">Mashed potatoes</a>
      <a href="#url" class="d-block p-1">Fries</a>
    </div>
  </div>
)

export const PositionFixed = ({}) => (
  <div style={{height: '64px'}}>
    <div class="position-fixed right-0 bottom-0 color-bg-subtle border p-2">
      .position-fixed
    </div>
  </div>
)

export const PositionFixedFilled = ({}) => (
  <div class="position-fixed left-0 right-0 p-3 color-bg-accent-emphasis color-fg-on-emphasis">
    .position-fixed .left-0 .right-0
  </div>
)

export const PositionStickyTop = ({}) => (
  <div style={{maxWidth: '300px', height: '300px'}}>
    <section class="mb-3">
      <header class="border position-sticky top-0 color-bg-subtle p-3" style={{zIndex: 1}}>Sticky header 1</header>
      <main class="border border-top-0 p-3">
        <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”</p>
      </main>
    </section>

    <section class="mb-3">
      <header class="border position-sticky top-0 color-bg-subtle p-3">Sticky header 2</header>
      <main class="border border-top-0 p-3">
        <p>As Cicero would put it, “Um, not so fast.”</p>

        <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.</p>
      </main>
    </section>

    <section class="mb-3">
      <header class="border position-sticky top-0 color-bg-subtle p-3">Sticky header 3</header>
      <main class="border border-top-0 p-3">
        <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.</p>
      </main>
    </section>
  </div>
)

export const PositionStickyBottom = ({}) => (
  <div style={{maxWidth: '300px', height: '300px'}}>
    <section class="mb-3">
      <main class="border border-bottom-0 p-3">
        <h3>Title</h3>
        <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”</p>
      </main>
      <footer class="border position-sticky bottom-0 color-bg-subtle p-3">Sticky footer 1</footer>
    </section>

    <section class="mb-3">
      <main class="border border-bottom-0 p-3">
        <h3>Title</h3>
        <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.</p>
      </main>
      <footer class="border position-sticky bottom-0 color-bg-subtle p-3">Sticky footer 2</footer>
    </section>
  </div>
)

export const PositionStickyLeftRight = ({}) => (
  <div class="d-flex border overflow-x-auto">
    <section class="d-flex">
      <span class="border position-sticky left-0 color-bg-subtle p-4">A</span>
      <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
    </section>
    <section class="d-flex">
      <span class="border position-sticky left-0 color-bg-subtle p-4">B</span>
      <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
    </section>
    <section class="d-flex">
      <span class="border position-sticky left-0 color-bg-subtle p-4">C</span>
      <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
    </section>
    <section class="d-flex">
      <span class="border position-sticky left-0 color-bg-subtle p-4">D</span>
      <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
    </section>
    <section class="d-flex">
      <span class="border position-sticky left-0 color-bg-subtle p-4">E</span>
      <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
      <span class="border position-sticky right-0 color-bg-subtle p-4">...</span>
    </section>
  </div>
)

export const PositionResponsive = ({}) => (
  <div style={{height: '64px'}}>
    <div class="border position-md-absolute top-0 right-0">
      .position-md-absolute .top-0 .right-0
    </div>
  </div>
)

export const ScreenReaderOnly = ({}) => (
  <div class="js-details-container Details">
    <button type="button" class="btn">Tab once from this button, and press enter</button>
    <button type="button" class="sr-only js-details-target">
      Screen reader only button
    </button>
    <div class="Details-content--hidden">
      Button activated!
    </div>
  </div>
)

export const MediaObject = ({}) => (
  <div class="clearfix p-3 border">
    <div class="float-left p-3 mr-3 color-bg-subtle">
      Image
    </div>
    <div class="overflow-hidden">
      <p><b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork chop meatball strip steak bresaola doner sirloin capicola biltong shank pig. Alcatra frankfurter ham hock, ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.</p>
    </div>
  </div>
)

export const MediaObjectDouble = ({}) => (
  <div class="clearfix p-3 border">
    <div class="float-left p-3 mr-3 color-bg-subtle">
      Image
    </div>
    <div class="float-right p-3 ml-3 color-bg-subtle">
      Image
    </div>
    <div class="overflow-hidden">
      <p><b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork chop meatball strip steak bresaola doner sirloin capicola biltong shank pig. Alcatra frankfurter ham hock, ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.</p>
    </div>
  </div>
)


