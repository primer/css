export default {
  title: 'Utilities/Typography'
}

export const Heading = ({}) => (
  <div>
    <p class="h1">Pizza .h1</p>
    <p class="h2">Pizza .h2</p>
    <p class="h3">Pizza .h3</p>
    <p class="h4">Pizza .h4</p>
    <p class="h5">Pizza .h5</p>
    <p class="h6">Pizza .h6</p>
  </div>
)

export const HeadingSemantic = ({}) => (
  <h2 class="h1">Looks like a heading 1, semantically a heading 2</h2>
)

export const FontSize = ({}) => (
  <div>
    <p class="f1">Focaccia .f1</p>
    <p class="f2">Focaccia .f2</p>
    <p class="f3">Focaccia .f3</p>
    <p class="f4">Focaccia .f4</p>
    <p class="f5">Focaccia .f5</p>
    <p class="f6">Focaccia .f6</p>
  </div>
)

export const FontSizeLight = ({}) => (
  <div>
    <h1 class="f00-light">Potato chips .f00-light</h1>
    <h1 class="f0-light">Potato chips .f0-light</h1>
    <h1 class="f1-light">Potato chips .f1-light</h1>
    <h1 class="f2-light">Potato chips .f2-light</h1>
    <h1 class="f3-light">Potato chips .f3-light</h1>
  </div>
)

export const LineHeight = ({}) => (
  <div>
    <p class="lh-default">
      .lh-default Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
    </p>
    <p class="lh-condensed">
      .lh-condensed Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
    </p>
    <p class="lh-condensed-ultra">
      .lh-condensed-ultra Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
    </p>
  </div>
)

export const TypographicStyles = ({}) => (
  <div>
    <p class="text-normal">.text-normal</p>
    <p class="text-italic">.text-italic</p>
    <p class="text-bold">.text-bold</p>
    <p class="text-semibold">.text-semibold</p>
    <p class="text-light">.text-light</p>
    <p class="text-uppercase">.text-uppercase</p>
    <p class="no-wrap">.no-wrap</p>
    <p class="ws-normal">.ws-normal</p>
    <p class="text-underline">.text-underline</p>
    <p class="no-underline">.no-underline</p>
    <p class="text-emphasized">.text-emphasized</p>
    <p class="text-small">.text-small</p>
    <p class="lead">.lead Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail.</p>
    <p class="text-mono">.text-mono</p>
    <p class="user-select-none">.user-select-none</p>
    <p class="text-capitalize">.text-capitalize</p>
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
    <p class="text-left">.text-left</p>
    <p class="text-center">.text-center</p>
    <p class="text-right">.text-right</p>
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
