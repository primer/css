import React from 'react'
import {ListTemplate} from './ActionList.stories'
import {DividerTemplate} from './ActionListDivider.stories'

export default {
  title: 'UI Patterns/ActionList/ActionListDivider/Features',
  decorators: [
    Story => (
      <ListTemplate>
        <Story />
      </ListTemplate>
    )
  ]
}

export const PatternTitle = DividerTemplate.bind({})
PatternTitle.storyName = 'Title'
PatternTitle.args = {
  title: 'List group title'
}

export const PatternFilled = DividerTemplate.bind({})
PatternFilled.storyName = 'Filled'
PatternFilled.args = {
  variant: 'ActionList-sectionDivider--filled'
}

export const PatternWithDescription = DividerTemplate.bind({})
PatternWithDescription.storyName = 'With description'
PatternWithDescription.args = {
  title: 'List group title',
  description: 'Group description'
}

export const PatternSeparator = DividerTemplate.bind({})
PatternSeparator.storyName = 'Separator'
