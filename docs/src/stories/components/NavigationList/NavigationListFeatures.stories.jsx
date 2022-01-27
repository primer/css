import React from 'react'
import clsx from 'clsx'
import {NavigationListTemplate} from './NavigationList.stories'
import {NavigationListItemTemplate} from './NavigationListItem.stories'

export default {
  title: 'Components/NavigationList/NavigationList/Features'
}

export const ShowDividers = NavigationListTemplate.bind({})
ShowDividers.args = {
  showDividers: true,
  children: (
    <>
      <NavigationListItemTemplate text="Item 1" href="/" />
      <NavigationListItemTemplate text="Item 2" href="/" />
      <NavigationListItemTemplate text="Item 3" href="/" />
    </>
  )
}

export const InsetPadding = NavigationListTemplate.bind({})
InsetPadding.args = {
  listPadding: null,
  children: (
    <>
      <NavigationListItemTemplate text="Item 1" href="/" />
      <NavigationListItemTemplate text="Item 2" href="/" />
      <NavigationListItemTemplate text="Item 3" href="/" />
    </>
  )
}

export const FullBleed = NavigationListTemplate.bind({})
FullBleed.args = {
  listPadding: 'ActionList--full',
  children: (
    <>
      <NavigationListItemTemplate text="Item 1" href="/" />
      <NavigationListItemTemplate text="Item 2" href="/" />
      <NavigationListItemTemplate text="Item 3" href="/" />
    </>
  )
}

export const NestedGroup = NavigationListTemplate.bind({})
NestedGroup.args = {
  listType: 'nested',
  children: (
    <>
      <NavigationListItemTemplate text="Item 1" href="/" />
      <NavigationListItemTemplate text="Item 2" href="/" />
      <NavigationListItemTemplate text="Item 3" href="/" />
    </>
  )
}
