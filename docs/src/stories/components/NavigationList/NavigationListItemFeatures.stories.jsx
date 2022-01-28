import React from 'react'
import clsx from 'clsx'
import {NavigationListItemTemplate} from './NavigationListItem.stories'
import {NavigationListTemplate} from './NavigationList.stories'

export default {
  title: 'Components/NavigationList/NavigationListItem/Features',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook?node-id=2%3A2'
    }
  },
  decorators: [
    Story => (
      <NavigationListTemplate>
        <Story />
      </NavigationListTemplate>
    )
  ]
}

const leadingVisual = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`

const trailingVisual = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
      <path
        fill-rule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
      ></path>
    </svg>`

export const TextOnly = NavigationListItemTemplate.bind({})
TextOnly.storyName = '[Text] Text only'
TextOnly.args = {
  text: 'Basic item label'
}

export const SizeMedium = NavigationListItemTemplate.bind({})
SizeMedium.storyName = '[Size] Medium'
SizeMedium.args = {
  ...NavigationListItemTemplate.args,
  text: 'Medium item',
  size: 'ActionList-content--sizeMedium'
}

export const SizeMediumWithDescription = NavigationListItemTemplate.bind({})
SizeMediumWithDescription.storyName = '[Size] Medium + description'
SizeMediumWithDescription.args = {
  ...NavigationListItemTemplate.args,
  text: 'Medium item',
  description: 'Some descriptive text',
  size: 'ActionList-content--sizeMedium'
}

export const SizeLarge = NavigationListItemTemplate.bind({})
SizeLarge.storyName = '[Size] Large'
SizeLarge.args = {
  ...NavigationListItemTemplate.args,
  text: 'Large item',
  size: 'ActionList-content--sizeLarge'
}

export const SizeLargeWithDescription = NavigationListItemTemplate.bind({})
SizeLargeWithDescription.storyName = '[Size] Large + description'
SizeLargeWithDescription.args = {
  ...NavigationListItemTemplate.args,
  text: 'Large item',
  description: 'Some descriptive text',
  size: 'ActionList-content--sizeLarge'
}

export const VisualLeading = NavigationListItemTemplate.bind({})
VisualLeading.storyName = '[Visuals] Leading'
VisualLeading.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item with leading visual',
  leadingVisual: leadingVisual
}

export const VisualTrailing = NavigationListItemTemplate.bind({})
VisualTrailing.storyName = '[Visuals] Trailing'
VisualTrailing.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item with trailing visual',
  trailingVisual: trailingVisual
}

export const VisualTrailingText = NavigationListItemTemplate.bind({})
VisualTrailingText.storyName = '[Visuals] Trailing text'
VisualTrailingText.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item with trailing text',
  trailingVisual: `⌘N`
}

export const VisualLeadingAndTrailing = NavigationListItemTemplate.bind({})
VisualLeadingAndTrailing.storyName = '[Visuals] Leading & trailing'
VisualLeadingAndTrailing.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item with trailing visual',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const DescriptionBlock = NavigationListItemTemplate.bind({})
DescriptionBlock.storyName = '[Description] block'
DescriptionBlock.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription'
}

export const DescriptionBlockWithLeadingVisual = NavigationListItemTemplate.bind({})
DescriptionBlockWithLeadingVisual.storyName = '[Description] block + leading visual'
DescriptionBlockWithLeadingVisual.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription',
  leadingVisual: leadingVisual
}

export const DescriptionBlockWithTrailingVisual = NavigationListItemTemplate.bind({})
DescriptionBlockWithTrailingVisual.storyName = '[Description] block + trailing visual'
DescriptionBlockWithTrailingVisual.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription',
  trailingVisual: trailingVisual
}

export const DescriptionBlockWithLeadingAndTrailingVisual = NavigationListItemTemplate.bind({})
DescriptionBlockWithLeadingAndTrailingVisual.storyName = '[Description] block + leading/trailing visual'
DescriptionBlockWithLeadingAndTrailingVisual.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const DescriptionInline = NavigationListItemTemplate.bind({})
DescriptionInline.storyName = '[Description] inline'
DescriptionInline.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline'
}

export const DescriptionInlineWithLeadingVisual = NavigationListItemTemplate.bind({})
DescriptionInlineWithLeadingVisual.storyName = '[Description] inline + leading visual'
DescriptionInlineWithLeadingVisual.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline',
  leadingVisual: leadingVisual
}

export const DescriptionInlineWithTrailingVisual = NavigationListItemTemplate.bind({})
DescriptionInlineWithTrailingVisual.storyName = '[Description] inline + trailing visual'
DescriptionInlineWithTrailingVisual.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline',
  trailingVisual: trailingVisual
}

export const DescriptionInlineWithLeadingAndTrailingVisual = NavigationListItemTemplate.bind({})
DescriptionInlineWithLeadingAndTrailingVisual.storyName = '[Description] inline + leading/trailing visual'
DescriptionInlineWithLeadingAndTrailingVisual.args = {
  ...NavigationListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const NavActiveAnchor = NavigationListItemTemplate.bind({})
NavActiveAnchor.storyName = '[Nav] Active anchor'
NavActiveAnchor.args = {
  ...NavigationListItemTemplate.args,
  text: 'Im an anchor link',
  href: '#someid',
  ariaCurrent: 'location',
  activeNavItem: true
}

export const NavActivePage = NavigationListItemTemplate.bind({})
NavActivePage.storyName = '[Nav] Active page'
NavActivePage.args = {
  ...NavigationListItemTemplate.args,
  text: 'Im a page level link',
  href: '/',
  ariaCurrent: 'page',
  activeNavItem: true
}

export const VariantDangerItem = NavigationListItemTemplate.bind({})
VariantDangerItem.storyName = '[Variant] Danger'
VariantDangerItem.args = {
  ...NavigationListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger'
}

export const VariantDangerItemLeading = NavigationListItemTemplate.bind({})
VariantDangerItemLeading.storyName = '[Variant] Danger + leading visual'
VariantDangerItemLeading.args = {
  ...NavigationListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger',
  leadingVisual: leadingVisual
}

export const VariantDangerItemTrailing = NavigationListItemTemplate.bind({})
VariantDangerItemTrailing.storyName = '[Variant] Danger + trailing visual'
VariantDangerItemTrailing.args = {
  ...NavigationListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger',
  trailingVisual: trailingVisual
}

export const VariantDangerItemLeadingTrailing = NavigationListItemTemplate.bind({})
VariantDangerItemLeadingTrailing.storyName = '[Variant] Danger + leading/trailing visual'
VariantDangerItemLeadingTrailing.args = {
  ...NavigationListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const TruncateText = NavigationListItemTemplate.bind({})
TruncateText.storyName = '[Text] Truncate text'
TruncateText.args = {
  ...NavigationListItemTemplate.args,
  truncateItem: true,
  text: 'This is a very long string of text that will wrap to another line on smaller screens',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const TextWrap = NavigationListItemTemplate.bind({})
TextWrap.storyName = '[Text] Wrap text'
TextWrap.args = {
  ...NavigationListItemTemplate.args,
  text: 'This is a very long string of text that will wrap to another line on smaller screens',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}
