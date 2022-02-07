import React from 'react'
import clsx from 'clsx'
import {ListTemplate} from './ActionList.stories'
import {ListItemTemplate} from './ActionListItem.stories'

export default {
  title: 'Private/ActionList/ActionList/Features'
}

export const ShowDividers = ListTemplate.bind({})
ShowDividers.args = {
  showDividers: true,
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}

export const InsetPadding = ListTemplate.bind({})
InsetPadding.args = {
  listPadding: null,
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}

export const FullBleed = ListTemplate.bind({})
FullBleed.args = {
  listPadding: 'ActionList--full',
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}

export const NestedGroup = ListTemplate.bind({})
NestedGroup.args = {
  listType: 'nested',
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}
