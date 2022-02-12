import React from 'react'
import {ListTemplate} from '../../ui-patterns/ActionList/ActionList.stories.jsx'
import {
  PatternTextOnly,
  PatternSizeMedium,
  PatternSizeMediumWithDescription,
  PatternSizeLarge,
  PatternSizeLargeWithDescription,
  PatternVisualLeading,
  PatternVisualTrailing,
  PatternVisualTrailingText,
  PatternVisualLeadingAndTrailing,
  PatternDescriptionBlock,
  PatternDescriptionBlockWithLeadingVisual,
  PatternDescriptionBlockWithTrailingVisual,
  PatternDescriptionBlockWithLeadingAndTrailingVisual,
  PatternDescriptionInline,
  PatternDescriptionInlineWithLeadingVisual,
  PatternDescriptionInlineWithTrailingVisual,
  PatternDescriptionInlineWithLeadingAndTrailingVisual,
  PatternNavActiveAnchor,
  PatternNavActivePage,
  PatternVariantDangerItem,
  PatternVariantDangerItemLeading,
  PatternVariantDangerItemTrailing,
  PatternVariantDangerItemLeadingTrailing,
  PatternTruncateText,
  PatternWrapText
} from '../../ui-patterns/ActionList/ActionListItemFeatures.stories.jsx'

export default {
  title: 'Components/ActionList/ActionListItem/Features',
  decorators: [
    Story => (
      <ListTemplate>
        <Story />
      </ListTemplate>
    )
  ]
}

export const TextOnly = ({}) => <PatternTextOnly {...PatternTextOnly.args} />

export const SizeMedium = ({}) => <PatternSizeMedium {...PatternSizeMedium.args} />

export const SizeMediumWithDescription = ({}) => (
  <PatternSizeMediumWithDescription {...PatternSizeMediumWithDescription.args} />
)

export const SizeLarge = ({}) => <PatternSizeLarge {...PatternSizeLarge.args} />

export const SizeLargeWithDescription = ({}) => (
  <PatternSizeLargeWithDescription {...PatternSizeLargeWithDescription.args} />
)

export const VisualLeading = ({}) => <PatternVisualLeading {...PatternVisualLeading.args} />

export const VisualTrailing = ({}) => <PatternVisualTrailing {...PatternVisualTrailing.args} />

export const VisualTrailingText = ({}) => <PatternVisualTrailingText {...PatternVisualTrailingText.args} />

export const VisualLeadingAndTrailing = ({}) => (
  <PatternVisualLeadingAndTrailing {...PatternVisualLeadingAndTrailing.args} />
)

export const DescriptionBlock = ({}) => <PatternDescriptionBlock {...PatternDescriptionBlock.args} />

export const DescriptionBlockWithLeadingVisual = ({}) => (
  <PatternDescriptionBlockWithLeadingVisual {...PatternDescriptionBlockWithLeadingVisual.args} />
)

export const DescriptionBlockWithTrailingVisual = ({}) => (
  <PatternDescriptionBlockWithTrailingVisual {...PatternDescriptionBlockWithTrailingVisual.args} />
)

export const DescriptionBlockWithLeadingAndTrailingVisual = ({}) => (
  <PatternDescriptionBlockWithLeadingAndTrailingVisual {...PatternDescriptionBlockWithLeadingAndTrailingVisual.args} />
)

export const DescriptionInline = ({}) => <PatternDescriptionInline {...PatternDescriptionInline.args} />

export const DescriptionInlineWithLeadingVisual = ({}) => (
  <PatternDescriptionInlineWithLeadingVisual {...PatternDescriptionInlineWithLeadingVisual.args} />
)

export const DescriptionInlineWithTrailingVisual = ({}) => (
  <PatternDescriptionInlineWithTrailingVisual {...PatternDescriptionInlineWithTrailingVisual.args} />
)

export const DescriptionInlineWithLeadingAndTrailingVisual = ({}) => (
  <PatternDescriptionInlineWithLeadingAndTrailingVisual
    {...PatternDescriptionInlineWithLeadingAndTrailingVisual.args}
  />
)

export const NavActiveAnchor = ({}) => <PatternNavActiveAnchor {...PatternNavActiveAnchor.args} />

export const NavActivePage = ({}) => <PatternNavActivePage {...PatternNavActivePage.args} />

export const VariantDangerItem = ({}) => <PatternVariantDangerItem {...PatternVariantDangerItem.args} />

export const VariantDangerItemLeading = ({}) => (
  <PatternVariantDangerItemLeading {...PatternVariantDangerItemLeading.args} />
)

export const VariantDangerItemTrailing = ({}) => (
  <PatternVariantDangerItemTrailing {...PatternVariantDangerItemTrailing.args} />
)

export const VariantDangerItemLeadingTrailing = ({}) => (
  <PatternVariantDangerItemLeadingTrailing {...PatternVariantDangerItemLeadingTrailing.args} />
)

export const VariantDisabledItem = ({}) => <PatternVariantDisabledItem {...PatternVariantDisabledItem.args} />

export const VariantDisabledItemLeading = ({}) => (
  <PatternVariantDisabledItemLeading {...PatternVariantDisabledItemLeading.args} />
)

export const VariantDisabledItemTrailing = ({}) => (
  <PatternVariantDisabledItemTrailing {...PatternVariantDisabledItemTrailing.args} />
)

export const VariantDisabledItemLeadingTrailing = ({}) => (
  <PatternVariantDisabledItemLeadingTrailing {...PatternVariantDisabledItemLeadingTrailing.args} />
)

export const TruncateText = ({}) => <PatternTruncateText {...PatternTruncateText.args} />

export const WrapText = ({}) => <PatternWrapText {...PatternWrapText.args} />
