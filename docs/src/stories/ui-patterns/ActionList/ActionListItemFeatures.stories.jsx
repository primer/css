import React from 'react'
import {ListItemTemplate} from './ActionListItem.stories'
import {ListTemplate} from './ActionList.stories'

export default {
  title: 'UI Patterns/ActionList/ActionListItem/Features',
  decorators: [
    Story => (
      <ListTemplate>
        <Story />
      </ListTemplate>
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

export const PatternTextOnly = ListItemTemplate.bind({})
PatternTextOnly.storyName = 'Text only'
PatternTextOnly.args = {
  text: 'Basic item label'
}

export const PatternSizeMedium = ListItemTemplate.bind({})
PatternSizeMedium.storyName = '[Size] Medium'
PatternSizeMedium.args = {
  ...ListItemTemplate.args,
  text: 'Medium item',
  size: 'ActionList-content--sizeMedium'
}

export const PatternSizeMediumWithDescription = ListItemTemplate.bind({})
PatternSizeMediumWithDescription.storyName = '[Size] Medium with description'
PatternSizeMediumWithDescription.args = {
  ...ListItemTemplate.args,
  text: 'Medium item',
  description: 'Some descriptive text',
  size: 'ActionList-content--sizeMedium'
}

export const PatternSizeLarge = ListItemTemplate.bind({})
PatternSizeLarge.storyName = '[Size] Large'
PatternSizeLarge.args = {
  ...ListItemTemplate.args,
  text: 'Large item',
  size: 'ActionList-content--sizeLarge'
}

export const PatternSizeLargeWithDescription = ListItemTemplate.bind({})
PatternSizeLargeWithDescription.storyName = '[Size] Large with description'
PatternSizeLargeWithDescription.args = {
  ...ListItemTemplate.args,
  text: 'Large item',
  description: 'Some descriptive text',
  size: 'ActionList-content--sizeLarge'
}

export const PatternVisualLeading = ListItemTemplate.bind({})
PatternVisualLeading.storyName = '[Visuals] Leading'
PatternVisualLeading.args = {
  ...ListItemTemplate.args,
  text: 'Item with leading visual',
  leadingVisual: leadingVisual
}

export const PatternVisualTrailing = ListItemTemplate.bind({})
PatternVisualTrailing.storyName = '[Visuals] Trailing'
PatternVisualTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Item with trailing visual',
  trailingVisual: trailingVisual
}

export const PatternVisualTrailingText = ListItemTemplate.bind({})
PatternVisualTrailingText.storyName = '[Visuals] Trailing text'
PatternVisualTrailingText.args = {
  ...ListItemTemplate.args,
  text: 'Item with trailing text',
  trailingVisual: `⌘N`
}

export const PatternVisualLeadingAndTrailing = ListItemTemplate.bind({})
PatternVisualLeadingAndTrailing.storyName = '[Visuals] Leading & trailing'
PatternVisualLeadingAndTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Item with trailing visual',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const PatternDescriptionBlock = ListItemTemplate.bind({})
PatternDescriptionBlock.storyName = '[Description] block'
PatternDescriptionBlock.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription'
}

export const PatternDescriptionBlockWithLeadingVisual = ListItemTemplate.bind({})
PatternDescriptionBlockWithLeadingVisual.storyName = '[Description] block + leading visual'
PatternDescriptionBlockWithLeadingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription',
  leadingVisual: leadingVisual
}

export const PatternDescriptionBlockWithTrailingVisual = ListItemTemplate.bind({})
PatternDescriptionBlockWithTrailingVisual.storyName = '[Description] block + trailing visual'
PatternDescriptionBlockWithTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription',
  trailingVisual: trailingVisual
}

export const PatternDescriptionBlockWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
PatternDescriptionBlockWithLeadingAndTrailingVisual.storyName = '[Description] block + leading/trailing visual'
PatternDescriptionBlockWithLeadingAndTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-blockDescription',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const PatternDescriptionInline = ListItemTemplate.bind({})
PatternDescriptionInline.storyName = '[Description] inline'
PatternDescriptionInline.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline'
}

export const PatternDescriptionInlineWithLeadingVisual = ListItemTemplate.bind({})
PatternDescriptionInlineWithLeadingVisual.storyName = '[Description] inline + leading visual'
PatternDescriptionInlineWithLeadingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline',
  leadingVisual: leadingVisual
}

export const PatternDescriptionInlineWithTrailingVisual = ListItemTemplate.bind({})
PatternDescriptionInlineWithTrailingVisual.storyName = '[Description] inline + trailing visual'
PatternDescriptionInlineWithTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline',
  trailingVisual: trailingVisual
}

export const PatternDescriptionInlineWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
PatternDescriptionInlineWithLeadingAndTrailingVisual.storyName = '[Description] inline + leading/trailing visual'
PatternDescriptionInlineWithLeadingAndTrailingVisual.args = {
  ...ListItemTemplate.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-descriptionWrap--inline',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const PatternNavActiveAnchor = ListItemTemplate.bind({})
PatternNavActiveAnchor.storyName = '[Nav] Active anchor'
PatternNavActiveAnchor.args = {
  ...ListItemTemplate.args,
  text: 'Im an anchor link',
  href: '#someid',
  ariaCurrent: 'location',
  activeNavItem: true
}

export const PatternNavActivePage = ListItemTemplate.bind({})
PatternNavActivePage.storyName = '[Nav] Active page'
PatternNavActivePage.args = {
  ...ListItemTemplate.args,
  text: 'Im a page level link',
  href: '/',
  ariaCurrent: 'page',
  activeNavItem: true
}

export const PatternVariantDangerItem = ListItemTemplate.bind({})
PatternVariantDangerItem.storyName = '[Variant] Danger'
PatternVariantDangerItem.args = {
  ...ListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger'
}

export const PatternVariantDangerItemLeading = ListItemTemplate.bind({})
PatternVariantDangerItemLeading.storyName = '[Variant] Danger + leading visual'
PatternVariantDangerItemLeading.args = {
  ...ListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger',
  leadingVisual: leadingVisual
}

export const PatternVariantDangerItemTrailing = ListItemTemplate.bind({})
PatternVariantDangerItemTrailing.storyName = '[Variant] Danger + trailing visual'
PatternVariantDangerItemTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger',
  trailingVisual: trailingVisual
}

export const PatternVariantDangerItemLeadingTrailing = ListItemTemplate.bind({})
PatternVariantDangerItemLeadingTrailing.storyName = '[Variant] Danger + leading/trailing visual'
PatternVariantDangerItemLeadingTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Danger danger',
  variant: 'ActionList-item--danger',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const PatternVariantDisabledItem = ListItemTemplate.bind({})
PatternVariantDisabledItem.storyName = '[Variant] Disabled'
PatternVariantDisabledItem.args = {
  ...ListItemTemplate.args,
  text: 'Disabled',
  ariaDisabled: true
}

export const PatternVariantDisabledItemLeading = ListItemTemplate.bind({})
PatternVariantDisabledItemLeading.storyName = '[Variant] Disabled + leading visual'
PatternVariantDisabledItemLeading.args = {
  ...ListItemTemplate.args,
  text: 'Disabled',
  ariaDisabled: true,
  leadingVisual: leadingVisual
}

export const PatternVariantDisabledItemTrailing = ListItemTemplate.bind({})
PatternVariantDisabledItemTrailing.storyName = '[Variant] Disabled + trailing visual'
PatternVariantDisabledItemTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Disabled',
  ariaDisabled: true,
  trailingVisual: trailingVisual
}

export const PatternVariantDisabledItemLeadingTrailing = ListItemTemplate.bind({})
PatternVariantDisabledItemLeadingTrailing.storyName = '[Variant] Disabled + leading/trailing visual'
PatternVariantDisabledItemLeadingTrailing.args = {
  ...ListItemTemplate.args,
  text: 'Disabled',
  ariaDisabled: true,
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const PatternSingleSelectItem = ListItemTemplate.bind({})
PatternSingleSelectItem.storyName = '[Actions] Single select'
PatternSingleSelectItem.args = {
  text: 'Single select item',
  singleSelect: true
}

export const PatternSingleSelectItemWithLeadingVisual = ListItemTemplate.bind({})
PatternSingleSelectItemWithLeadingVisual.storyName = '[Actions] Single select + leading visual'
PatternSingleSelectItemWithLeadingVisual.args = {
  text: 'Single select item',
  singleSelect: true,
  leadingVisual: leadingVisual
}

export const PatternSingleSelectItemWithTrailingVisual = ListItemTemplate.bind({})
PatternSingleSelectItemWithTrailingVisual.storyName = '[Actions] Single select + trailing visual'
PatternSingleSelectItemWithTrailingVisual.args = {
  text: 'Single select item',
  singleSelect: true,
  trailingVisual: trailingVisual
}

export const PatternSingleSelectItemWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
PatternSingleSelectItemWithLeadingAndTrailingVisual.storyName = '[Actions] Single select + leading/trailing visual'
PatternSingleSelectItemWithLeadingAndTrailingVisual.args = {
  text: 'Single select item',
  singleSelect: true,
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const PatternMultiSelectItem = ListItemTemplate.bind({})
PatternMultiSelectItem.storyName = '[Actions] Multi select'
PatternMultiSelectItem.args = {
  text: 'Multi select item',
  multiSelect: true
}

export const PatternMultiSelectItemWithLeadingVisual = ListItemTemplate.bind({})
PatternMultiSelectItemWithLeadingVisual.storyName = '[Actions] Multi select + leading visual'
PatternMultiSelectItemWithLeadingVisual.args = {
  text: 'Multi select item',
  multiSelect: true,
  leadingVisual: leadingVisual
}

export const PatternMultiSelectItemWithTrailingVisual = ListItemTemplate.bind({})
PatternMultiSelectItemWithTrailingVisual.storyName = '[Actions] Multi select + trailing visual'
PatternMultiSelectItemWithTrailingVisual.args = {
  text: 'Multi select item',
  multiSelect: true,
  trailingVisual: trailingVisual
}

export const PatternMultiSelectItemWithLeadingAndTrailingVisual = ListItemTemplate.bind({})
PatternMultiSelectItemWithLeadingAndTrailingVisual.storyName = '[Actions] Multi select + leading/trailing visual'
PatternMultiSelectItemWithLeadingAndTrailingVisual.args = {
  text: 'Multi select item',
  multiSelect: true,
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const PatternTruncateText = ListItemTemplate.bind({})
PatternTruncateText.storyName = 'Truncate text'
PatternTruncateText.args = {
  ...ListItemTemplate.args,
  truncateItem: true,
  text: 'This is a very long string of text that will wrap to another line on smaller screens',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}

export const PatternWrapText = ListItemTemplate.bind({})
PatternWrapText.storyName = 'Wrap text'
PatternWrapText.args = {
  ...ListItemTemplate.args,
  text: 'This is a very long string of text that will wrap to another line on smaller screens',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual
}
