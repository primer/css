import React from 'react'
import clsx from 'clsx'
import {NavigationListTemplate} from './NavigationList.stories'
import {NavigationListItemTemplate} from './NavigationListItem.stories'
import {NavigationListDividerTemplate} from './NavigationListDivider.stories'

export default {
  title: 'Components/NavigationList/NavigationListDivider/Features',
  decorators: [
    Story => (
      <NavigationListTemplate>
        <Story />
      </NavigationListTemplate>
    )
  ]
}

export const Title = NavigationListDividerTemplate.bind({})
Title.args = {
  title: 'List group title',
  id: 'group-id'
}

export const Filled = NavigationListDividerTemplate.bind({})
Filled.args = {
  variant: 'ActionList-sectionDivider--filled'
}

export const WithDescription = NavigationListDividerTemplate.bind({})
WithDescription.args = {
  title: 'List group title',
  description: 'Group description',
  id: 'group-id'
}

export const Separator = NavigationListDividerTemplate.bind({})
