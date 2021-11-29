import React from 'react'
import clsx from 'clsx'
import {UnderlineNavTemplate} from './UnderlineNav.stories'
import {UnderlineNavItemTemplate} from './UnderlineNavItem.stories'
import {UnderlineNavActionTemplate} from './UnderlineNavAction.stories'

export default {
  title: 'Components/Navigation/UnderlineNav/Features',
  layout: 'padded'
}

export const LinkItems = UnderlineNavTemplate.bind({})
LinkItems.args = {
  children: (
    <>
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" selected />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
    </>
  )
}

export const ButtonItems = UnderlineNavTemplate.bind({})
ButtonItems.args = {
  children: (
    <>
      <UnderlineNavItemTemplate label="Item" semanticItemType="button" selected />
      <UnderlineNavItemTemplate label="Item" semanticItemType="button" />
      <UnderlineNavItemTemplate label="Item" semanticItemType="button" />
    </>
  )
}

export const NavRight = UnderlineNavTemplate.bind({})
NavRight.args = {
  variant: 'UnderlineNav--right',
  children: (
    <>
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" selected />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
    </>
  )
}

export const NavFullWidth = UnderlineNavTemplate.bind({})
NavFullWidth.args = {
  variant: 'UnderlineNav--full',
  children: (
    <>
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" selected />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
    </>
  )
}

export const ActionRight = UnderlineNavTemplate.bind({})
ActionRight.args = {
  children: (
    <>
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" selected />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
    </>
  ),
  actionEnd: <UnderlineNavActionTemplate label="Action" semanticItemType="button" />
}

export const ActionLeft = UnderlineNavTemplate.bind({})
ActionLeft.args = {
  children: (
    <>
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" selected />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item" semanticItemType="link" />
    </>
  ),
  actionStart: <UnderlineNavActionTemplate label="Action" semanticItemType="button" />
}

export const Overflow = UnderlineNavTemplate.bind({})
Overflow.args = {
  children: (
    <>
      <UnderlineNavItemTemplate label="Item name 1" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item name 2" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item name 3" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item name 4" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item name 5" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item name 6" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item name 7" semanticItemType="link" selected />
      <UnderlineNavItemTemplate label="Item name 8" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item name 9" semanticItemType="link" />
      <UnderlineNavItemTemplate label="Item name 10" semanticItemType="link" />
    </>
  )
}
