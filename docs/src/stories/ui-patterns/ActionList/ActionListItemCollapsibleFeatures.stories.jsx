import React from 'react'
import clsx from 'clsx'
import {ActionListItemCollapsibleTemplate} from './ActionListItemCollapsible.stories'
import {ListTemplate} from './ActionList.stories'

export default {
  title: 'UI Patterns/ActionList/ActionListItemCollapsible/Features',
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

export const PatternTrailingCollapsible = ActionListItemCollapsibleTemplate.bind({})
PatternTrailingCollapsible.storyName = '[Trailing] Text only'
PatternTrailingCollapsible.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 1
}

export const PatternTrailingCollapsibleLeadingVis = ActionListItemCollapsibleTemplate.bind({})
PatternTrailingCollapsibleLeadingVis.storyName = '[Trailing] Leading visual'
PatternTrailingCollapsibleLeadingVis.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 1,
  leadingVisual: leadingVisual
}

export const PatternTrailingCollapsibleLeadingTrailingVis = ActionListItemCollapsibleTemplate.bind({})
PatternTrailingCollapsibleLeadingTrailingVis.storyName = '[Trailing] Leading + trailing visual'
PatternTrailingCollapsibleLeadingTrailingVis.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 1,
  leadingVisual: leadingVisual,
  trailingVisual: trailingVisual
}

export const PatternTrailingCollapsibleTrailingVis = ActionListItemCollapsibleTemplate.bind({})
PatternTrailingCollapsibleTrailingVis.storyName = '[Trailing] Trailing visual'
PatternTrailingCollapsibleTrailingVis.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 1,
  trailingVisual: trailingVisual
}

export const PatternLeadingCollapsible = ActionListItemCollapsibleTemplate.bind({})
PatternLeadingCollapsible.storyName = '[Leading] Text only'
PatternLeadingCollapsible.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 0
}

export const PatternLeadingCollapsibleLeadingVis = ActionListItemCollapsibleTemplate.bind({})
PatternLeadingCollapsibleLeadingVis.storyName = '[Leading] Leading visual'
PatternLeadingCollapsibleLeadingVis.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 0,
  leadingVisual: leadingVisual
}

export const PatternLeadingCollapsibleLeadingTrailingVis = ActionListItemCollapsibleTemplate.bind({})
PatternLeadingCollapsibleLeadingTrailingVis.storyName = '[Leading] Leading + trailing visual'
PatternLeadingCollapsibleLeadingTrailingVis.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 0,
  leadingVisual: leadingVisual,
  trailingVisual: trailingVisual
}

export const PatternLeadingCollapsibleTrailingVis = ActionListItemCollapsibleTemplate.bind({})
PatternLeadingCollapsibleTrailingVis.storyName = '[Leading] Trailing visual'
PatternLeadingCollapsibleTrailingVis.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Collapsible',
  collapsePosition: 0,
  trailingVisual: trailingVisual
}

export const PatternSizeMedium = ActionListItemCollapsibleTemplate.bind({})
PatternSizeMedium.storyName = '[Size] Medium'
PatternSizeMedium.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Medium item',
  size: 'ActionList-content--sizeMedium',
  collapsePosition: 1
}

export const PatternSizeLarge = ActionListItemCollapsibleTemplate.bind({})
PatternSizeLarge.storyName = '[Size] Large'
PatternSizeLarge.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'Large item',
  size: 'ActionList-content--sizeLarge',
  collapsePosition: 1
}

export const PatternContainsSubItem = ActionListItemCollapsibleTemplate.bind({})
PatternContainsSubItem.storyName = 'Has sub item (render css class)'
PatternContainsSubItem.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'I am collapsible',
  collapsePosition: 1,
  containsSubItem: true
}

export const PatternContainsActiveSubItem = ActionListItemCollapsibleTemplate.bind({})
PatternContainsActiveSubItem.storyName = 'Has active sub item'
PatternContainsActiveSubItem.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'I have an active child',
  collapsePosition: 1,
  containsActiveSubItem: true
}

export const PatternTruncateText = ActionListItemCollapsibleTemplate.bind({})
PatternTruncateText.storyName = 'Truncate text'
PatternTruncateText.args = {
  ...ActionListItemCollapsibleTemplate.args,
  truncateItem: true,
  text: 'This is a very long string of text that will wrap to another line on smaller screens',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual,
  collapsePosition: 1
}

export const PatternWrapText = ActionListItemCollapsibleTemplate.bind({})
PatternWrapText.storyName = 'Wrap text'
PatternWrapText.args = {
  ...ActionListItemCollapsibleTemplate.args,
  text: 'This is a very long string of text that will wrap to another line on smaller screens',
  trailingVisual: trailingVisual,
  leadingVisual: leadingVisual,
  collapsePosition: 1
}
