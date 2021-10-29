import React from 'react'
import clsx from 'clsx'
import {ListItemTemplate} from './ActionListItem.stories'
import {DividerTemplate} from './ActionListDivider.stories'

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

export const SizeMedium = ListItemTemplate.bind({})
SizeMedium.args = {
  ...ListItemTemplate.args,
  text: 'Medium item',
  size: 'ActionList-content--sizeMedium'
}

export const SizeMediumWithDescription = ListItemTemplate.bind({})
SizeMediumWithDescription.args = {
  ...ListItemTemplate.args,
  text: 'Medium item',
  description: 'Some descriptive text',
  size: 'ActionList-content--sizeMedium'
}

export const SizeLarge = ListItemTemplate.bind({})
SizeLarge.args = {
  ...ListItemTemplate.args,
  text: 'Large item',
  size: 'ActionList-content--sizeLarge'
}

export const SizeLargeWithDescription = ListItemTemplate.bind({})
SizeLargeWithDescription.args = {
  ...ListItemTemplate.args,
  text: 'Large item',
  description: 'Some descriptive text',
  size: 'ActionList-content--sizeLarge'
}

export const VisualLeading = ListItemTemplate.bind({})
VisualLeading.storyName = '[Visuals] Leading'
VisualLeading.args = {
  ...ListItemTemplate.args,
  text: 'Item with leading visual',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
      <path
        fill-rule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
      ></path>
    </svg>`
}

export const VisualTrailing = ListItemTemplate.bind({})
VisualTrailing.storyName = '[Visuals] Trailing'
VisualTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Item with trailing visual',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
      <path
        fill-rule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
      ></path>
    </svg>`
}

export const VisualTrailingText = ListItemTemplate.bind({})
VisualTrailingText.storyName = '[Visuals] Trailing text'
VisualTrailingText.args = {
  ...ListItemTemplate.args,
  text: 'Item with trailing text',
  trailingVisual: `⌘N`
}

export const VisualLeadingAndTrailing = ListItemTemplate.bind({})
VisualLeadingAndTrailing.storyName = '[Visuals] Leading & trailing'
VisualLeadingAndTrailing.args = {
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

export const DescriptionBlock = ListItemTemplate.bind({})
DescriptionBlock.storyName = '[Description] block'
DescriptionBlock.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription'
}

export const DescriptionBlockWithLeadingVisual = ListItemTemplate.bind({})
DescriptionBlockWithLeadingVisual.storyName = '[Description] block + leading visual'
DescriptionBlockWithLeadingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const DescriptionBlockWithTrailingVisual = ListItemTemplate.bind({})
DescriptionBlockWithTrailingVisual.storyName = '[Description] block + trailing visual'
DescriptionBlockWithTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const DescriptionBlockWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
DescriptionBlockWithLeadingAndTrailingVisual.storyName = '[Description] block + leading/trailing visual'
DescriptionBlockWithLeadingAndTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription',
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

export const DescriptionInline = ListItemTemplate.bind({})
DescriptionInline.storyName = '[Description] inline'
DescriptionInline.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline'
}

export const DescriptionInlineWithLeadingVisual = ListItemTemplate.bind({})
DescriptionInlineWithLeadingVisual.storyName = '[Description] inline + leading visual'
DescriptionInlineWithLeadingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const DescriptionInlineWithTrailingVisual = ListItemTemplate.bind({})
DescriptionInlineWithTrailingVisual.storyName = '[Description] inline + trailing visual'
DescriptionInlineWithTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const DescriptionInlineWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
DescriptionInlineWithLeadingAndTrailingVisual.storyName = '[Description] inline + leading/trailing visual'
DescriptionInlineWithLeadingAndTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline',
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

export const NavActiveAnchor = ListItemTemplate.bind({})
NavActiveAnchor.storyName = '[Nav] Active anchor'
NavActiveAnchor.args = {
  ...ListItemTemplate.args,
  text: 'Im an anchor link',
  href: '#someid',
  ariaCurrent: 'location',
  activeNavItem: true
}

export const NavActivePage = ListItemTemplate.bind({})
NavActivePage.storyName = '[Nav] Active page'
NavActivePage.args = {
  ...ListItemTemplate.args,
  text: 'Im a page level link',
  href: '/',
  ariaCurrent: 'page',
  activeNavItem: true
}

export const VariantDangerItem = ListItemTemplate.bind({})
VariantDangerItem.storyName = '[Variant] Danger'
VariantDangerItem.args = {
  ...ListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger'
}

export const VariantDangerItemLeading = ListItemTemplate.bind({})
VariantDangerItemLeading.storyName = '[Variant] Danger + leading visual'
VariantDangerItemLeading.args = {
  ...ListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}

export const VariantDangerItemTrailing = ListItemTemplate.bind({})
VariantDangerItemTrailing.storyName = '[Variant] Danger + trailing visual'
VariantDangerItemTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const VariantDangerItemLeadingTrailing = ListItemTemplate.bind({})
VariantDangerItemLeadingTrailing.storyName = '[Variant] Danger + leading/trailing visual'
VariantDangerItemLeadingTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger',
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

export const VariantDisabledItem = ListItemTemplate.bind({})
VariantDisabledItem.storyName = '[Variant] Disabled'
VariantDisabledItem.args = {
  ...ListItemTemplate.args,
  text: 'Disabled',
  ariaDisabled: true
}

export const VariantDisabledItemLeading = ListItemTemplate.bind({})
VariantDisabledItemLeading.storyName = '[Variant] Disabled + leading visual'
VariantDisabledItemLeading.args = {
  ...ListItemTemplate.args,
  text: 'Disabled',
  ariaDisabled: true,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}

export const VariantDisabledItemTrailing = ListItemTemplate.bind({})
VariantDisabledItemTrailing.storyName = '[Variant] Disabled + trailing visual'
VariantDisabledItemTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Disabled',
  ariaDisabled: true,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const VariantDisabledItemLeadingTrailing = ListItemTemplate.bind({})
VariantDisabledItemLeadingTrailing.storyName = '[Variant] Disabled + leading/trailing visual'
VariantDisabledItemLeadingTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Disabled',
  ariaDisabled: true,
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

export const ActionSingleSelectItem = ListItemTemplate.bind({})
ActionSingleSelectItem.storyName = '[Actions] Single select'
ActionSingleSelectItem.args = {
  text: 'Single select item',
  singleSelect: true
}

export const ActionSingleSelectItemWithLeadingVisual = ListItemTemplate.bind({})
ActionSingleSelectItemWithLeadingVisual.storyName = '[Actions] Single select + leading visual'
ActionSingleSelectItemWithLeadingVisual.args = {
  text: 'Single select item',
  singleSelect: true,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}

export const ActionSingleSelectItemWithTrailingVisual = ListItemTemplate.bind({})
ActionSingleSelectItemWithTrailingVisual.storyName = '[Actions] Single select + trailing visual'
ActionSingleSelectItemWithTrailingVisual.args = {
  text: 'Single select item',
  singleSelect: true,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const ActionSingleSelectItemWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
ActionSingleSelectItemWithLeadingAndTrailingVisual.storyName = '[Actions] Single select + leading/trailing visual'
ActionSingleSelectItemWithLeadingAndTrailingVisual.args = {
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

export const ActionMultiSelectItem = ListItemTemplate.bind({})
ActionMultiSelectItem.storyName = '[Actions] Multi select'
ActionMultiSelectItem.args = {
  text: 'Multi select item',
  multiSelect: true
}

export const ActionMultiSelectItemWithLeadingVisual = ListItemTemplate.bind({})
ActionMultiSelectItemWithLeadingVisual.storyName = '[Actions] Multi select + leading visual'
ActionMultiSelectItemWithLeadingVisual.args = {
  text: 'Multi select item',
  multiSelect: true,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}

export const ActionMultiSelectItemWithTrailingVisual = ListItemTemplate.bind({})
ActionMultiSelectItemWithTrailingVisual.storyName = '[Actions] Multi select + trailing visual'
ActionMultiSelectItemWithTrailingVisual.args = {
  text: 'Multi select item',
  multiSelect: true,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const ActionMultiSelectItemWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
ActionMultiSelectItemWithLeadingAndTrailingVisual.storyName = '[Actions] Multi select + leading/trailing visual'
ActionMultiSelectItemWithLeadingAndTrailingVisual.args = {
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

export const ActionCollapsible = ListItemTemplate.bind({})
ActionCollapsible.storyName = '[Actions] Collapsible'
ActionCollapsible.args = {
  ...ListItemTemplate.args,
  text: 'Collapsible',
  collapsible: true,
  collapsed: false
}

export const ActionCollapsibleWithLeadingVisual = ListItemTemplate.bind({})
ActionCollapsibleWithLeadingVisual.storyName = '[Actions] Collapsible + leading visual'
ActionCollapsibleWithLeadingVisual.args = {
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

export const ActionCollapsibleWithTrailingVisual = ListItemTemplate.bind({})
ActionCollapsibleWithTrailingVisual.storyName = '[Actions] Collapsible + trailing visual'
ActionCollapsibleWithTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Collapsible',
  collapsible: true,
  collapsed: false,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}

export const ActionCollapsibleWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
ActionCollapsibleWithLeadingAndTrailingVisual.storyName = '[Actions] Collapsible + leading/trailing visual'
ActionCollapsibleWithLeadingAndTrailingVisual.args = {
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

export const DividerEmpty = DividerTemplate.bind({})
DividerEmpty.storyName = '[Divider] Empty default'
DividerEmpty.args = {}

export const DividerFilled = DividerTemplate.bind({})
DividerFilled.storyName = '[Divider] Empty filled'
DividerFilled.args = {
  variant: 'ActionList-sectionDivider--filled'
}

export const DividerText = DividerTemplate.bind({})
DividerText.storyName = '[Divider] Title'
DividerText.args = {
  title: 'Title',
  id: 'some-id'
}

export const DividerTextFilled = DividerTemplate.bind({})
DividerTextFilled.storyName = '[Divider] Title filled'
DividerTextFilled.args = {
  title: 'Title',
  id: 'some-id',
  variant: 'ActionList-sectionDivider--filled'
}
