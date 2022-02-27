import React from 'react'
import {NavigationListTemplate} from './NavigationList.stories'
import {
  PatternTrailingCollapsible,
  PatternTrailingCollapsibleLeadingVis,
  PatternTrailingCollapsibleLeadingTrailingVis,
  PatternTrailingCollapsibleTrailingVis,
  PatternLeadingCollapsible,
  PatternLeadingCollapsibleLeadingVis,
  PatternLeadingCollapsibleLeadingTrailingVis,
  PatternLeadingCollapsibleTrailingVis,
  PatternSizeMedium,
  PatternSizeLarge,
  PatternContainsSubItem,
  PatternContainsActiveSubItem,
  PatternTruncateText,
  PatternWrapText
} from '../../ui-patterns/ActionList/ActionListItemCollapsibleFeatures.stories.jsx'

export default {
  title: 'Components/NavigationList/NavigationListItemCollapsible/Features',
  decorators: [
    Story => (
      <NavigationListTemplate>
        <Story />
      </NavigationListTemplate>
    )
  ]
}

export const TrailingCollapsible = ({}) => <PatternTrailingCollapsible {...PatternTrailingCollapsible.args} />

export const TrailingCollapsibleLeadingVis = ({}) => (
  <PatternTrailingCollapsibleLeadingVis {...PatternTrailingCollapsibleLeadingVis.args} />
)

export const TrailingCollapsibleLeadingTrailingVis = ({}) => (
  <PatternTrailingCollapsibleLeadingTrailingVis {...PatternTrailingCollapsibleLeadingTrailingVis.args} />
)

export const TrailingCollapsibleTrailingVis = ({}) => (
  <PatternTrailingCollapsibleTrailingVis {...PatternTrailingCollapsibleTrailingVis.args} />
)

export const LeadingCollapsible = ({}) => <PatternLeadingCollapsible {...PatternLeadingCollapsible.args} />

export const LeadingCollapsibleLeadingVis = ({}) => (
  <PatternLeadingCollapsibleLeadingVis {...PatternLeadingCollapsibleLeadingVis.args} />
)

export const LeadingCollapsibleLeadingTrailingVis = ({}) => (
  <PatternLeadingCollapsibleLeadingTrailingVis {...PatternLeadingCollapsibleLeadingTrailingVis.args} />
)

export const LeadingCollapsibleTrailingVis = ({}) => (
  <PatternLeadingCollapsibleTrailingVis {...PatternLeadingCollapsibleTrailingVis.args} />
)

export const SizeMedium = ({}) => <PatternSizeMedium {...PatternSizeMedium.args} />

export const SizeLarge = ({}) => <PatternSizeLarge {...PatternSizeLarge.args} />

export const ContainsSubItem = ({}) => <PatternContainsSubItem {...PatternContainsSubItem.args} />

export const ContainsActiveSubItem = ({}) => <PatternContainsActiveSubItem {...PatternContainsActiveSubItem.args} />

export const TruncateText = ({}) => <PatternTruncateText {...PatternTruncateText.args} />

export const WrapText = ({}) => <PatternWrapText {...PatternWrapText.args} />
