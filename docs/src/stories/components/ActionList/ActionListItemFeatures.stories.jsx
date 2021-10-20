import React from 'react'
import clsx from 'clsx'
import {ListItemTemplate} from './ActionListItem.stories'

export default {
  title: 'Components/ActionList/ActionListItem/Features',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook?node-id=2%3A2'
    }
  },
  decorators: [
    Story => (
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    )
  ]
}

export const TextOnly = ListItemTemplate.bind({})
TextOnly.args = {
  text: 'Basic item label'
}
TextOnly.argTypes = {
  variant: {
    control: false
  }
}

export const SizeMedium = ListItemTemplate.bind({})
SizeMedium.args = {
  ...ListItemTemplate.args,
  text: 'Medium item',
  size: 'ActionList-item-content--sizeMedium'
}
SizeMedium.argTypes = {
  size: {
    control: false
  }
}

export const SizeLarge = ListItemTemplate.bind({})
SizeLarge.args = {
  ...ListItemTemplate.args,
  text: 'Large item',
  size: 'ActionList-item-content--sizeLarge'
}
SizeLarge.argTypes = {
  size: {
    control: false
  }
}

export const LeadingVisual = ListItemTemplate.bind({})
LeadingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item with leading visual',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
      <path
        fill-rule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
      ></path>
    </svg>`
}
LeadingVisual.argTypes = {
  size: {
    control: false
  }
}

export const TrailingVisual = ListItemTemplate.bind({})
TrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item with trailing visual',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
      <path
        fill-rule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
      ></path>
    </svg>`
}
TrailingVisual.argTypes = {
  size: {
    control: false
  }
}

export const TrailingText = ListItemTemplate.bind({})
TrailingText.args = {
  ...ListItemTemplate.args,
  text: 'Item with trailing text',
  trailingVisual: `⌘N`
}
TrailingText.argTypes = {
  size: {
    control: false
  }
}

export const LeadingAndTrailingVisual = ListItemTemplate.bind({})
LeadingAndTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item with trailing visual',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>`,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
LeadingAndTrailingVisual.argTypes = {
  size: {
    control: false
  }
}

export const BlockDescription = ListItemTemplate.bind({})
BlockDescription.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-content--label-blockDescription'
}
BlockDescription.argTypes = {
  size: {
    control: false
  }
}

export const BlockDescriptionWithLeadingVisual = ListItemTemplate.bind({})
BlockDescriptionWithLeadingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-content--label-blockDescription',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
BlockDescriptionWithLeadingVisual.argTypes = {
  size: {
    control: false
  }
}

export const BlockDescriptionWithTrailingVisual = ListItemTemplate.bind({})
BlockDescriptionWithTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-content--label-blockDescription',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
BlockDescriptionWithTrailingVisual.argTypes = {
  size: {
    control: false
  }
}

export const BlockDescriptionWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
BlockDescriptionWithLeadingAndTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-content--label-blockDescription',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>`
}
BlockDescriptionWithLeadingAndTrailingVisual.argTypes = {
  size: {
    control: false
  }
}

export const InlineDescription = ListItemTemplate.bind({})
InlineDescription.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-content--label-inlineDescription'
}
InlineDescription.argTypes = {
  size: {
    control: false
  }
}

export const InlineDescriptionWithLeadingVisual = ListItemTemplate.bind({})
InlineDescriptionWithLeadingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-content--label-inlineDescription',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
InlineDescriptionWithLeadingVisual.argTypes = {
  size: {
    control: false
  }
}

export const InlineDescriptionWithTrailingVisual = ListItemTemplate.bind({})
InlineDescriptionWithTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-content--label-inlineDescription',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
InlineDescriptionWithTrailingVisual.argTypes = {
  size: {
    control: false
  }
}

export const InlineDescriptionWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
InlineDescriptionWithLeadingAndTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-content--label-inlineDescription',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}
InlineDescriptionWithLeadingAndTrailingVisual.argTypes = {
  size: {
    control: false
  }
}

export const ActiveNavItem = ListItemTemplate.bind({})
ActiveNavItem.args = {
  ...ListItemTemplate.args,
  text: 'Im an anchor link',
  href: '#someid',
  ariaCurrent: 'page',
  activeNavItem: true
}
ActiveNavItem.argTypes = {
  size: {
    control: false
  }
}

export const ActiveSubNavItem = ListItemTemplate.bind({})
ActiveSubNavItem.args = {
  ...ListItemTemplate.args,
  text: 'Im a page level link',
  href: '#someid',
  ariaCurrent: 'location',
  activeNavItem: true
}
ActiveSubNavItem.argTypes = {
  size: {
    control: false
  }
}

export const DangerItem = ListItemTemplate.bind({})
DangerItem.args = {
  ...ListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger'
}
DangerItem.argTypes = {
  size: {
    control: false
  }
}

export const SingleSelectItem = ListItemTemplate.bind({})
SingleSelectItem.args = {
  text: 'Single select item',
  singleSelect: true
}

export const SingleSelectItemWithLeadingVisual = ListItemTemplate.bind({})
SingleSelectItemWithLeadingVisual.args = {
  text: 'Single select item',
  singleSelect: true,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}

export const SingleSelectItemWithTrailingVisual = ListItemTemplate.bind({})
SingleSelectItemWithTrailingVisual.args = {
  text: 'Single select item',
  singleSelect: true,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const SingleSelectItemWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
SingleSelectItemWithLeadingAndTrailingVisual.args = {
  text: 'Single select item',
  singleSelect: true,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const MultiSelectItem = ListItemTemplate.bind({})
MultiSelectItem.args = {
  text: 'Multi select item',
  multiSelect: true
}

export const MultiSelectItemWithLeadingVisual = ListItemTemplate.bind({})
MultiSelectItemWithLeadingVisual.args = {
  text: 'Multi select item',
  multiSelect: true,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}

export const MultiSelectItemWithTrailingVisual = ListItemTemplate.bind({})
MultiSelectItemWithTrailingVisual.args = {
  text: 'Multi select item',
  multiSelect: true,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const MultiSelectItemWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
MultiSelectItemWithLeadingAndTrailingVisual.args = {
  text: 'Multi select item',
  multiSelect: true,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}

export const Collapsible = ListItemTemplate.bind({})
Collapsible.args = {
  ...ListItemTemplate.args,
  text: 'Collapsible',
  collapsible: true,
  collapsed: false
}
Collapsible.argTypes = {
  size: {
    control: false
  }
}
Collapsible.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const CollapsibleWithLeadingVisual = ListItemTemplate.bind({})
CollapsibleWithLeadingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Collapsible',
  collapsible: true,
  collapsed: false,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}
CollapsibleWithLeadingVisual.argTypes = {
  size: {
    control: false
  }
}
CollapsibleWithLeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const CollapsibleWithTrailingVisual = ListItemTemplate.bind({})
CollapsibleWithTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Collapsible',
  collapsible: true,
  collapsed: false,
  //   leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
  //           <path
  //             fill-rule="evenodd"
  //             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
  //           ></path>
  //         </svg>`,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
CollapsibleWithTrailingVisual.argTypes = {
  size: {
    control: false
  }
}
CollapsibleWithTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const CollapsibleWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
CollapsibleWithLeadingAndTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Collapsible',
  collapsible: true,
  collapsed: false,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>`,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
CollapsibleWithLeadingAndTrailingVisual.argTypes = {
  size: {
    control: false
  }
}
CollapsibleWithLeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]
