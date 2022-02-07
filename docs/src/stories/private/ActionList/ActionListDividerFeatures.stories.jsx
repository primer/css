import React from 'react'
import clsx from 'clsx'
import {ListTemplate} from './ActionList.stories'
import {ListItemTemplate} from './ActionListItem.stories'
import {DividerTemplate} from './ActionListDivider.stories'

export default {
  title: 'Private/ActionList/ActionListDivider/Features',
  decorators: [
    Story => (
      <ListTemplate>
        <Story />
      </ListTemplate>
    )
  ]
}

export const Title = DividerTemplate.bind({})
Title.args = {
  title: 'List group title'
}

export const Filled = DividerTemplate.bind({})
Filled.args = {
  variant: 'ActionList-sectionDivider--filled'
}

export const WithDescription = DividerTemplate.bind({})
WithDescription.args = {
  title: 'List group title',
  description: 'Group description'
}

export const Separator = DividerTemplate.bind({})
