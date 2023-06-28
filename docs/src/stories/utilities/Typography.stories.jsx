export default {
  title: 'Utilities/Typography'
}

export const Heading = ({}) => (
  <div>
    <p class="h1">Pizza 1</p>
    <p class="h2">Pizza 2</p>
    <p class="h3">Pizza 3</p>
    <p class="h4">Pizza 4</p>
    <p class="h5">Pizza 5</p>
    <p class="h6">Pizza 6</p>
  </div>
)

export const HeadingSemantic = ({}) => (
  <h2 class="h1">Looks like a heading 1, semantically a heading 2</h2>
)

export const FontSize = ({}) => (
  <div>
    <p class="f1">Focaccia</p>
    <p class="f2">Focaccia</p>
    <p class="f3">Focaccia</p>
    <p class="f4">Focaccia</p>
    <p class="f5">Focaccia</p>
    <p class="f6">Focaccia</p>
  </div>
)

export const FontSizeLight = ({}) => (
  <div>
    <h1 class="f00-light">Potato chips</h1>
    <h1 class="f0-light">Potato chips</h1>
    <h1 class="f1-light">Potato chips</h1>
    <h1 class="f2-light">Potato chips</h1>
    <h1 class="f3-light">Potato chips</h1>
  </div>
)

export const LineHeight = ({}) => (
  <div>
    <p class="lh-default">
      Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
    </p>
    <p class="lh-condensed">
      Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
    </p>
    <p class="lh-condensed-ultra">
      Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
    </p>
  </div>
)

export const TypographicStyles = ({}) => (
  <div>
    <p class="text-normal">Normal</p>
    <p class="text-italic">Italic</p>
    <p class="text-bold">Bold</p>
    <p class="text-semibold">Semi-bold</p>
    <p class="text-light">Light</p>
    <p class="text-uppercase">Uppercase</p>
    <p class="no-wrap">No wrap</p>
    <p class="ws-normal">Normal whitespace</p>
    <p class="text-underline">Text underline</p>
    <p class="no-underline">No underline</p>
    <p class="text-emphasized">Emphasized</p>
    <p class="text-small">Small</p>
    <p class="lead">Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail.</p>
    <p class="text-mono">Monospace</p>
    <p class="user-select-none">User Select None</p>
    <p class="text-capitalize">capitalize</p>
    <p class="text-tabular-nums">Tabular numbers 111</p>
  </div>
)

export const WordBreak = ({}) => (
  <div>
    <p class="wb-break-word p-2 color-bg-subtle col-3 border-right">.wb-break-word will only break long words that exceed the line length, such as supercalifragilisticexpialidocious. Long words like "exceedingly" will simply break to the next line.</p>
    <p class="wb-break-all p-2 color-bg-subtle col-3 border-right">.wb-break-all will break any word that meets the end its line, and should be used sparingly. As you can see here, it's not particularly nice to read text that breaks in weird places.</p>
  </div>
)

export const TextAlignment = ({}) => (
  <div>
    <p class="text-left">Left align</p>
    <p class="text-center">Center</p>
    <p class="text-right">Right align</p>
  </div>
)

export const TextAlignmentResponsive = ({}) => (
  <p class="text-left text-sm-center text-lg-right">Left in a small viewport, centered in mid-sized viewports, and right aligned in larger viewports</p>
)

export const List = ({}) => (
  <ul class="list-style-none">
    <li>First list item</li>
    <li>Second list item</li>
    <li>Third list item</li>
  </ul>
)
