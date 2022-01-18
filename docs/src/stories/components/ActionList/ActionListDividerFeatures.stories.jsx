import React from 'react'
import clsx from 'clsx'
import {ListTemplate} from './ActionList.stories'
import {ListItemTemplate} from './ActionListItem.stories'
import {DividerTemplate} from './ActionListDivider.stories'

export default {
  title: 'Components/ActionList/ActionListDivider/Features',
  decorators: [
    Story => (
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    )
  ]
}

export const WithTitle = DividerTemplate.bind({})
WithTitle.args = {
  title: 'List group title'
}

export const Subtle = DividerTemplate.bind({})
Subtle.args = {
  variant: 'subtle',
  title: 'List group title'
}

export const Filled = DividerTemplate.bind({})
Filled.args = {
  variant: 'ActionList-sectionDivider--filled',
  title: 'List group title'
}

export const WithDescription = DividerTemplate.bind({})
WithDescription.args = {
  title: 'List group title',
  description: 'Group description'
}

export const RolePresentation = DividerTemplate.bind({})
RolePresentation.storyName = '[role="presentation"]'
RolePresentation.args = {
  title: 'List group title'
}

export const RoleSeparator = DividerTemplate.bind({})
RoleSeparator.storyName = '[role="separator"]'
RoleSeparator.args = {}

export const Empty = DividerTemplate.bind({})
