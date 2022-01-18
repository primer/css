import React from 'react'
import clsx from 'clsx'
import {ListTemplate} from './ActionList.stories'
import {ListItemTemplate} from './ActionListItem.stories'

export default {
  title: 'Components/ActionList/ActionList/Features'
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
  listPadding: 'inset',
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

export const AsSubGroup = ListTemplate.bind({})
AsSubGroup.args = {
  subGroup: true,
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}

export const RoleMenu = ListTemplate.bind({})
RoleMenu.storyName = '[role="menu"] menu list'
RoleMenu.args = {
  role: 'menu',
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" />
      <ListItemTemplate text="Item 2" href="/" />
      <ListItemTemplate text="Item 3" href="/" />
    </>
  )
}

export const RoleNav = ListTemplate.bind({})
RoleNav.storyName = '[nav] nav wrapper'
RoleNav.args = {
  children: (
    <>
      <ListItemTemplate text="Item 1" href="/" listSemantic />
      <ListItemTemplate text="Item 2" href="/" listSemantic />
      <ListItemTemplate text="Item 3" href="/" listSemantic />
    </>
  )
}
RoleNav.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const RoleTreeView = ListTemplate.bind({})
RoleTreeView.storyName = '[role="tree"] tree view list'
RoleTreeView.args = {
  role: 'tree',
  variant: 'ActionList--tree',
  children: (
    <>
      <ListItemTemplate
        ariaLevel="1"
        ariaSetSize="2"
        ariaPosInset="1"
        treeitem
        containsSubItem
        text="Tree group"
        collapsibleLeading
        children={
          <ListTemplate
            role="group"
            containsSubItem
            subGroup
            ariaLabel="Group description"
            children={
              <>
                <ListItemTemplate
                  ariaLevel="2"
                  ariaSetSize="3"
                  ariaPosInset="1"
                  subItem
                  treeitem
                  text="Tree item 1"
                  href="/"
                />
                <ListItemTemplate
                  treeitem
                  ariaLevel="2"
                  ariaSetSize="3"
                  ariaPosInset="2"
                  subItem
                  text="Tree item 2"
                  href="/"
                />
                <ListItemTemplate
                  treeitem
                  ariaLevel="2"
                  ariaSetSize="3"
                  ariaPosInset="3"
                  truncateItem
                  subItem
                  text="Tree item 3"
                  href="/"
                />
              </>
            }
          />
        }
      />
    </>
  )
}
