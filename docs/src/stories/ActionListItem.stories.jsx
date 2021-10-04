import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ActionList/Item',
  //   component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: {control: 'color'}
  }
  //   decorators: [
  //     Story => (
  //       <div style={{margin: '3em', border: 'dashed 1px var(--color-scale-gray-3)'}}>
  //         <ul class="actionList">
  //           <Story />
  //         </ul>
  //       </div>
  //     )
  //   ]
}

export const TextOnly = args => (
  <li class="actionList-item">
    <span class="actionList-item-content">Action list item</span>
  </li>
)
TextOnly.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const ItemSizes = args => (
  <>
    <ul class="actionList">
      <li class="actionList-item">
        <span class="actionList-item-content">Default item size</span>
      </li>
    </ul>
    <ul class="actionList actionList--sizeMedium">
      <li class="actionList-item actionList-item--sizeMedium">
        <span class="actionList-item-content">Medium item size</span>
      </li>
    </ul>
    <ul class="actionList actionList--sizeLarge">
      <li class="actionList-item actionList-item--sizeLarge">
        <span class="actionList-item-content">Large item size</span>
      </li>
    </ul>
  </>
)
ItemSizes.decorators = [
  Story => (
    <div
      style={{
        margin: '3rem',
        border: 'dashed 1px var(--color-scale-gray-3)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      }}
    >
      <Story />
    </div>
  )
]

// export const SimpleDividers = args => (
//   <>
//     <li class="actionList-item">
//       <span class="actionList-item-content">Action list item</span>
//     </li>
//     <li class="actionList-item">
//       <span class="actionList-item-content">Action list item</span>
//     </li>
//     <li class="actionList-item">
//       <span class="actionList-item-content actionList-item--divided">Action list item</span>
//     </li>
//   </>
// )
// SimpleDividers.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul class="actionList actionList--divided">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

export const SectionDivider = args => (
  <>
    <li class="actionList-sectionDivider"></li>
  </>
)
SectionDivider.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const SectionDividerFilled = args => (
  <>
    <h4 class="actionList-sectionHeader actionList-sectionHeader--filled">Section title</h4>
  </>
)
SectionDividerFilled.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const SectionDividerSimple = args => (
  <>
    <li class="actionList-sectionHeader">Section title (subtle)</li>
  </>
)
SectionDividerSimple.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const LeadingVisual = args => (
  <>
    <li class="actionList-item">
      <div class="actionList-item-content">
        <span class="actionList-item-leadingVisual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>
        </span>
        <span class="actionList-item-label">Item with leading visual</span>
      </div>
    </li>
    <li class="actionList-item">
      <div class="actionList-item-content">
        <span class="actionList-item-leadingVisual-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>
        </span>
        <span class="actionList-item-label">Item with leading visual 16px width</span>
      </div>
    </li>
    <li class="actionList-item">
      <div class="actionList-item-content">
        <span class="actionList-item-leadingVisual-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12.75 7.75a.75.75 0 00-1.5 0v3.5h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5z"></path>
            <path
              fill-rule="evenodd"
              d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
            ></path>
          </svg>
        </span>
        <span class="actionList-item-label">Item with leading visual 20px width</span>
      </div>
    </li>
  </>
)
LeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const TrailingVisual = args => (
  <>
    <li class="actionList-item">
      <div class="actionList-item-content">
        <span class="actionList-item-label">Item with trailing visual</span>
        <span class="actionList-item-trailingVisual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>
        </span>
      </div>
    </li>
  </>
)
TrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const LeadingAndTrailingVisual = args => (
  <>
    <li class="actionList-item">
      <div class="actionList-item-content">
        <span class="actionList-item-leadingVisual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>
        </span>
        <span class="actionList-item-label">Item with leading + trailing visual</span>
        <span class="actionList-item-trailingVisual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>
        </span>
      </div>
    </li>
    <li class="actionList-item">
      <div class="actionList-item-content">
        <span class="actionList-item-leadingVisual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>
        </span>
        <span class="actionList-item-label">Item with leading icon + trailing text</span>
        <span class="actionList-item-trailingText">Copy</span>
      </div>
    </li>
  </>
)
LeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const BlockDescription = args => (
  <li class="actionList-item">
    <div class="actionList-item-content">
      <span class="actionList-item-label">
        <span>Item</span>
        <span class="actionList-item-blockDescription">Block item description</span>
      </span>
    </div>
  </li>
)
BlockDescription.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const SelectedItem = args => (
  <li class="actionList-item actionList-item--selected">
    <div class="actionList-item-content">
      <span class="actionList-item-label">Selected item</span>
    </div>
  </li>
)
SelectedItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const DangerItem = args => (
  <>
    <li class="actionList-item actionList-item--danger">
      <div class="actionList-item-content">
        <span class="actionList-item-label">Danger item</span>
      </div>
    </li>
    <li class="actionList-item actionList-item--danger">
      <div class="actionList-item-content">
        <span class="actionList-item-leadingVisual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>
        </span>
        <span class="actionList-item-label">Danger item with leading visual</span>
      </div>
    </li>
  </>
)
DangerItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const CheckboxItem = args => (
  <li class="actionList-item">
    <label class="actionList-item-content">
      <span class="actionList-item-check">
        <input class="form-checkbox" type="checkbox" checked="" />
      </span>
      <span class="actionList-item-label">Checkbox item</span>
    </label>
  </li>
)
CheckboxItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList actionList--multi-selection">
        <Story />
      </ul>
    </div>
  )
]

export const SimpleSelection = args => (
  <li class="actionList-item">
    <span class="actionList-item-content">
      <span class="actionList-item-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
      <span class="actionList-item-label">Simple selected item</span>
    </span>
  </li>
)
SimpleSelection.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList actionList--single-selection actionList--divided">
        <Story />
      </ul>
    </div>
  )
]

export const InlineDescription = args => (
  <span class="actionList-item-label">
    <strong>Label</strong>
    <span class="actionList-item-inlineDescription">Inline description</span>
  </span>
)
InlineDescription.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul class="actionList actionList--single-selection actionList--divided">
        <Story />
      </ul>
    </div>
  )
]

// export const Primary = Playground.bind({})
// Primary.args = {
//   primary: true,
//   label: 'Button'
// }
