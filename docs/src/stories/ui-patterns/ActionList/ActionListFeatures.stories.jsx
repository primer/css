import React from 'react'
import clsx from 'clsx'
import {ListTemplate} from './ActionList.stories'
import {ListItemTemplate} from './ActionListItem.stories'

export default {
  title: 'UI Patterns/ActionList/ActionList/Features'
}

export const PatternShowDividers = ListTemplate.bind({})
PatternShowDividers.storyName = 'Show dividers'
PatternShowDividers.args = {
  showDividers: true,
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}

export const PatternInsetPadding = ListTemplate.bind({})
PatternInsetPadding.storyName = 'Inset padding'
PatternInsetPadding.args = {
  listPadding: null,
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}

export const PatternFullBleed = ListTemplate.bind({})
PatternFullBleed.storyName = 'Full bleed'
PatternFullBleed.args = {
  listPadding: 'ActionList--full',
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}

export const PatternNestedGroup = ListTemplate.bind({})
PatternNestedGroup.storyName = 'Nested group'
PatternNestedGroup.args = {
  listType: 'nested',
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}
