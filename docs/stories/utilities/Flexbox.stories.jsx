export default {
  title: 'Utilities/Flexbox'
}

export const Flex = ({}) => (
  <div class="border d-flex">
    <div class="p-5 border color-bg-subtle">flex item 1</div>
    <div class="p-5 border color-bg-subtle">flex item 2</div>
    <div class="p-5 border color-bg-subtle">flex item 3</div>
  </div>
)

export const InlineFlex = ({}) => (
  <div class="border d-inline-flex">
    <div class="p-5 border color-bg-subtle">flex item 1</div>
    <div class="p-5 border color-bg-subtle">flex item 2</div>
    <div class="p-5 border color-bg-subtle">flex item 3</div>
  </div>
)

export const Column = ({}) => (
  <div class="border d-flex flex-column">
    <div class="p-5 border color-bg-subtle">Item 1</div>
    <div class="p-5 border color-bg-subtle">Item 2</div>
    <div class="p-5 border color-bg-subtle">Item 3</div>
  </div>
)

export const ColumnReverse = ({}) => (
  <div class="border d-flex flex-column flex-sm-column-reverse">
    <div class="p-5 border color-bg-subtle">Item 1</div>
    <div class="p-5 border color-bg-subtle">Item 2</div>
    <div class="p-5 border color-bg-subtle">Item 3</div>
  </div>
)

export const Row = ({}) => (
  <div class="border d-flex flex-column flex-sm-row">
    <div class="p-5 border color-bg-subtle">Item 1</div>
    <div class="p-5 border color-bg-subtle">Item 2</div>
    <div class="p-5 border color-bg-subtle">Item 3</div>
  </div>
)

export const RowReverse = ({}) => (
  <div class="border d-flex flex-column flex-sm-row-reverse">
    <div class="p-5 border color-bg-subtle">Item 1</div>
    <div class="p-5 border color-bg-subtle">Item 2</div>
    <div class="p-5 border color-bg-subtle">Item 3</div>
  </div>
)

export const Wrap = ({}) => (
  <div class="border d-flex flex-wrap">
    <div class="p-5 px-6 border color-bg-subtle">1</div>
    <div class="p-5 px-6 border color-bg-subtle">2</div>
    <div class="p-5 px-6 border color-bg-subtle">3</div>
    <div class="p-5 px-6 border color-bg-subtle">4</div>
    <div class="p-5 px-6 border color-bg-subtle">5</div>
    <div class="p-5 px-6 border color-bg-subtle">6</div>
    <div class="p-5 px-6 border color-bg-subtle">7</div>
    <div class="p-5 px-6 border color-bg-subtle">8</div>
    <div class="p-5 px-6 border color-bg-subtle">9</div>
  </div>
)

export const Nowrap = ({}) => (
  <div class="border d-flex flex-nowrap">
    <div class="p-5 px-6 border color-bg-subtle">1</div>
    <div class="p-5 px-6 border color-bg-subtle">2</div>
    <div class="p-5 px-6 border color-bg-subtle">3</div>
    <div class="p-5 px-6 border color-bg-subtle">4</div>
    <div class="p-5 px-6 border color-bg-subtle">5</div>
    <div class="p-5 px-6 border color-bg-subtle">6</div>
    <div class="p-5 px-6 border color-bg-subtle">7</div>
    <div class="p-5 px-6 border color-bg-subtle">8</div>
    <div class="p-5 px-6 border color-bg-subtle">9</div>
  </div>
)

export const WrapReverse = ({}) => (
  <div class="border d-flex flex-wrap-reverse">
    <div class="p-5 px-6 border color-bg-subtle">1</div>
    <div class="p-5 px-6 border color-bg-subtle">2</div>
    <div class="p-5 px-6 border color-bg-subtle">3</div>
    <div class="p-5 px-6 border color-bg-subtle">4</div>
    <div class="p-5 px-6 border color-bg-subtle">5</div>
    <div class="p-5 px-6 border color-bg-subtle">6</div>
    <div class="p-5 px-6 border color-bg-subtle">7</div>
    <div class="p-5 px-6 border color-bg-subtle">8</div>
    <div class="p-5 px-6 border color-bg-subtle">9</div>
  </div>
)

export const JustifyStart = ({}) => (
  <div class="border d-flex flex-justify-start">
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
  </div>
)

export const JustifyEnd = ({}) => (
  <div class="border d-flex flex-justify-end">
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
  </div>
)

export const JustifyCenter = ({}) => (
  <div class="border d-flex flex-justify-center">
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
  </div>
)

export const JustifyBetween = ({}) => (
  <div class="border d-flex flex-justify-between">
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
  </div>
)

export const JustifyAround = ({}) => (
  <div class="border d-flex flex-justify-around">
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
  </div>
)

export const AlignItemsStart = ({}) => (
  <div class="border d-flex flex-items-start" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
  </div>
)

export const AlignItemsEnd = ({}) => (
  <div class="border d-flex flex-items-end" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
  </div>
)

export const AlignItemsCenter = ({}) => (
  <div class="border d-flex flex-items-center" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
  </div>
)

export const AlignItemsBaseline = ({}) => (
  <div class="border d-flex flex-items-baseline" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle f1">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle f3">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
  </div>
)

export const AlignItemsStretch = ({}) => (
  <div class="border d-flex flex-items-stretch" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
  </div>
)

export const AlignContentStart = ({}) => (
  <div class="border d-flex flex-wrap flex-content-start" style={{minHeight: '300px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
    <div class="p-5 border color-bg-subtle">5</div>
    <div class="p-5 border color-bg-subtle">6</div>
    <div class="p-5 border color-bg-subtle">7</div>
    <div class="p-5 border color-bg-subtle">8</div>
    <div class="p-5 border color-bg-subtle">9</div>
    <div class="p-5 border color-bg-subtle">10</div>
    <div class="p-5 border color-bg-subtle">11</div>
    <div class="p-5 border color-bg-subtle">12</div>
  </div>
)

export const AlignContentEnd = ({}) => (
  <div class="border d-flex flex-wrap flex-content-end" style={{minHeight: '300px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
    <div class="p-5 border color-bg-subtle">5</div>
    <div class="p-5 border color-bg-subtle">6</div>
    <div class="p-5 border color-bg-subtle">7</div>
    <div class="p-5 border color-bg-subtle">8</div>
    <div class="p-5 border color-bg-subtle">9</div>
    <div class="p-5 border color-bg-subtle">10</div>
    <div class="p-5 border color-bg-subtle">11</div>
    <div class="p-5 border color-bg-subtle">12</div>
  </div>
)

export const AlignContentCenter = ({}) => (
  <div class="border d-flex flex-wrap flex-content-center" style={{minHeight: '300px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
    <div class="p-5 border color-bg-subtle">5</div>
    <div class="p-5 border color-bg-subtle">6</div>
    <div class="p-5 border color-bg-subtle">7</div>
    <div class="p-5 border color-bg-subtle">8</div>
    <div class="p-5 border color-bg-subtle">9</div>
    <div class="p-5 border color-bg-subtle">10</div>
    <div class="p-5 border color-bg-subtle">11</div>
    <div class="p-5 border color-bg-subtle">12</div>
  </div>
)

export const AlignContentBetween = ({}) => (
  <div class="border d-flex flex-wrap flex-content-between" style={{minHeight: '300px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
    <div class="p-5 border color-bg-subtle">5</div>
    <div class="p-5 border color-bg-subtle">6</div>
    <div class="p-5 border color-bg-subtle">7</div>
    <div class="p-5 border color-bg-subtle">8</div>
    <div class="p-5 border color-bg-subtle">9</div>
    <div class="p-5 border color-bg-subtle">10</div>
    <div class="p-5 border color-bg-subtle">11</div>
    <div class="p-5 border color-bg-subtle">12</div>
  </div>
)

export const AlignContentAround = ({}) => (
  <div class="border d-flex flex-wrap flex-content-around" style={{minHeight: '300px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
    <div class="p-5 border color-bg-subtle">5</div>
    <div class="p-5 border color-bg-subtle">6</div>
    <div class="p-5 border color-bg-subtle">7</div>
    <div class="p-5 border color-bg-subtle">8</div>
    <div class="p-5 border color-bg-subtle">9</div>
    <div class="p-5 border color-bg-subtle">10</div>
    <div class="p-5 border color-bg-subtle">11</div>
    <div class="p-5 border color-bg-subtle">12</div>
  </div>
)

export const AlignContentStretch = ({}) => (
  <div class="border d-flex flex-wrap flex-content-stretch" style={{minHeight: '300px'}}>
    <div class="p-5 border color-bg-subtle">1</div>
    <div class="p-5 border color-bg-subtle">2</div>
    <div class="p-5 border color-bg-subtle">3</div>
    <div class="p-5 border color-bg-subtle">4</div>
    <div class="p-5 border color-bg-subtle">5</div>
    <div class="p-5 border color-bg-subtle">6</div>
    <div class="p-5 border color-bg-subtle">7</div>
    <div class="p-5 border color-bg-subtle">8</div>
    <div class="p-5 border color-bg-subtle">9</div>
    <div class="p-5 border color-bg-subtle">10</div>
    <div class="p-5 border color-bg-subtle">11</div>
    <div class="p-5 border color-bg-subtle">12</div>
  </div>
)

export const Flex1 = ({}) => (
  <div class="border d-flex">
    <div class="p-5 border color-bg-subtle">flex item</div>
    <div class="p-5 border color-bg-subtle flex-1">.flex-1</div>
    <div class="p-5 border color-bg-subtle">flex item</div>
  </div>
)

export const Flex1All = ({}) => (
  <div class="border d-flex">
    <div class="p-5 border color-bg-subtle flex-1">.flex-1</div>
    <div class="p-5 border color-bg-subtle flex-1">.flex-1</div>
    <div class="p-5 border color-bg-subtle flex-1">.flex-1</div>
  </div>
)

export const FlexAuto = ({}) => (
  <div class="border d-flex">
    <div class="p-5 border color-bg-subtle flex-1">.flex-1</div>
    <div class="p-5 border color-bg-subtle flex-auto">.flex-auto with a bit more text</div>
    <div class="p-5 border color-bg-subtle flex-1">.flex-1</div>
  </div>
)

export const FlexGrow0 = ({}) => (
  <div class="border d-flex">
    <div class="p-5 border color-bg-subtle">flex item</div>
    <div class="p-5 border color-bg-subtle flex-auto flex-sm-grow-0">.flex-auto .flex-sm-grow-0</div>
    <div class="p-5 border color-bg-subtle">flex item</div>
  </div>
)

export const FlexShrink0 = ({}) => (
  <div class="p-2 border d-flex" style={{maxWidth: '340px'}}>
    <div class="p-5 border color-bg-subtle">flex item</div>
    <div class="p-5 border color-bg-subtle flex-shrink-0">.flex-shrink-0</div>
    <div class="p-5 border color-bg-subtle">flex item</div>
  </div>
)

export const AlignSelfAuto = ({}) => (
  <div class="border d-flex" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle flex-self-auto">.flex-self-auto</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
  </div>
)

export const AlignSelfStart = ({}) => (
  <div class="border d-flex" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle flex-self-start">.flex-self-start</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
  </div>
)

export const AlignSelfEnd = ({}) => (
  <div class="border d-flex" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle flex-self-end">.flex-self-end</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
  </div>
)

export const AlignSelfCenter = ({}) => (
  <div class="border d-flex" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle flex-self-center">.flex-self-center</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
  </div>
)

export const AlignSelfBaseline = ({}) => (
  <div class="border d-flex flex-items-end" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle flex-self-baseline f4">.flex-self-baseline</div>
    <div class="p-5 border color-bg-subtle f1">item</div>
    <div class="p-5 border color-bg-subtle f00">item</div>
  </div>
)

export const AlignSelfStretch = ({}) => (
  <div class="border d-flex flex-items-start" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle flex-self-stretch">.flex-self-stretch</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
  </div>
)

export const Order = ({}) => (
  <div class="border d-flex">
    <div class="p-5 border color-bg-subtle flex-order-2">1. .flex-order-2</div>
    <div class="p-5 border color-bg-subtle">2.</div>
    <div class="p-5 border color-bg-subtle flex-order-1">3. .flex-order-1</div>
  </div>
)

export const OrderNone = ({}) => (
  <div class="border d-flex">
    <div class="p-5 border color-bg-subtle flex-order-1 flex-sm-order-none">1. .flex-order-1 .flex-sm-order-none</div>
    <div class="p-5 border color-bg-subtle">2.</div>
    <div class="p-5 border color-bg-subtle">3.</div>
  </div>
)

export const Responsive = ({}) => (
  <div class="border d-flex flex-items-start flex-sm-items-center flex-justify-start flex-lg-justify-between" style={{minHeight: '150px'}}>
    <div class="p-5 border color-bg-subtle flex-sm-self-stretch">.flex-self-stretch</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
    <div class="p-5 border color-bg-subtle">&nbsp;</div>
  </div>
)

export const MediaObject = ({}) => (
  <div class="border d-flex flex-items-center p-4">
    <div class="p-5 border color-bg-subtle">image</div>
    <p class="pl-4 m-0"><b>Body</b> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p>
  </div>
)

export const MediaObjectResponsive = ({}) => (
  <div class="border p-3 d-flex flex-column flex-sm-row flex-sm-items-center">
    <div class="pr-0 pr-sm-3 mb-3 mb-sm-0 d-flex flex-justify-center flex-sm-justify-start">
      <img style={{maxWidth: '100px', maxHeight: '100px'}} src="https://github.com/github.png" />
    </div>
    <div class="d-flex text-center text-sm-left">
      <p><b>Body</b> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p>
    </div>
    <div class="ml-sm-3 d-flex flex-justify-center">
      <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
    </div>
  </div>
)

