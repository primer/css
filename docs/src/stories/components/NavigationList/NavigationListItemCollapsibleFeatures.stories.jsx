import React from 'react'
import clsx from 'clsx'
import {NavigationListItemCollapsibleTemplate} from './NavigationListItemCollapsible.stories'
import {NavigationListDividerTemplate} from './NavigationListDivider.stories'
import {NavigationListTemplate} from './NavigationList.stories'

export default {
  title: 'Components/NavigationList/NavigationListItemCollapsible/Features',
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

export const TrailingCollapsible = NavigationListItemCollapsibleTemplate.bind({})
TrailingCollapsible.storyName = '[Trailing] Text only'
TrailingCollapsible.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 1
}

export const TrailingCollapsibleLeadingVis = NavigationListItemCollapsibleTemplate.bind({})
TrailingCollapsibleLeadingVis.storyName = '[Trailing] Leading visual'
TrailingCollapsibleLeadingVis.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 1,
  leadingVisual: leadingVisual
}

export const TrailingCollapsibleLeadingTrailingVis = NavigationListItemCollapsibleTemplate.bind({})
TrailingCollapsibleLeadingTrailingVis.storyName = '[Trailing] Leading + trailing visual'
TrailingCollapsibleLeadingTrailingVis.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 1,
  leadingVisual: leadingVisual,
  trailingVisual: trailingVisual
}

export const TrailingCollapsibleTrailingVis = NavigationListItemCollapsibleTemplate.bind({})
TrailingCollapsibleTrailingVis.storyName = '[Trailing] Trailing visual'
TrailingCollapsibleTrailingVis.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 1,
  trailingVisual: trailingVisual
}

export const LeadingCollapsible = NavigationListItemCollapsibleTemplate.bind({})
LeadingCollapsible.storyName = '[Leading] Text only'
LeadingCollapsible.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 0
}

export const LeadingCollapsibleLeadingVis = NavigationListItemCollapsibleTemplate.bind({})
LeadingCollapsibleLeadingVis.storyName = '[Leading] Leading visual'
LeadingCollapsibleLeadingVis.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 0,
  leadingVisual: leadingVisual
}

export const LeadingCollapsibleLeadingTrailingVis = NavigationListItemCollapsibleTemplate.bind({})
LeadingCollapsibleLeadingTrailingVis.storyName = '[Leading] Leading + trailing visual'
LeadingCollapsibleLeadingTrailingVis.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 0,
  leadingVisual: leadingVisual,
  trailingVisual: trailingVisual
}

export const LeadingCollapsibleTrailingVis = NavigationListItemCollapsibleTemplate.bind({})
LeadingCollapsibleTrailingVis.storyName = '[Leading] Trailing visual'
LeadingCollapsibleTrailingVis.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 0,
  trailingVisual: trailingVisual
}

export const SizeMedium = NavigationListItemCollapsibleTemplate.bind({})
SizeMedium.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Medium item',
  size: 'ActionList-content--sizeMedium',
  collapsePosition: 1
}

export const SizeLarge = NavigationListItemCollapsibleTemplate.bind({})
SizeLarge.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'Large item',
  size: 'ActionList-content--sizeLarge',
  collapsePosition: 1
}

export const ConstainsSubItem = NavigationListItemCollapsibleTemplate.bind({})
ConstainsSubItem.storyName = 'Has sub item (render css class)'
ConstainsSubItem.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'I am collapsible',
  collapsePosition: 1,
  containsSubItem: true
}

export const ConstainsActiveSubItem = NavigationListItemCollapsibleTemplate.bind({})
ConstainsActiveSubItem.storyName = 'Has active sub item'
ConstainsActiveSubItem.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'I have an active child',
  collapsePosition: 1,
  containsActiveSubItem: true
}

export const TruncateText = NavigationListItemCollapsibleTemplate.bind({})
TruncateText.storyName = 'Truncate text'
TruncateText.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  truncateItem: true,
  text: 'This is a very long string of text that will wrap to another line on smaller screens',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual,
  collapsePosition: 1
}

export const WrapText = NavigationListItemCollapsibleTemplate.bind({})
WrapText.storyName = 'Wrap text'
WrapText.args = {
  ...NavigationListItemCollapsibleTemplate.args,
  text: 'This is a very long string of text that will wrap to another line on smaller screens',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual,
  collapsePosition: 1
}
