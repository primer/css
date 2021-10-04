import React from 'react'
import {TextOnly, ActiveNavItem, ActiveSubNavItem} from './ActionListItem.stories'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ActionList',
  //   component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: {control: 'color'}
  },
  decorators: [
    Story => (
      <div style={{margin: '3em', border: 'dashed 1px var(--color-scale-gray-3)'}}>
        <Story />
      </div>
    )
  ]
}

export const Default = args => (
  <>
    <ul class="actionList">
      <TextOnly />
      <TextOnly />
      <TextOnly />
    </ul>
  </>
)

export const Navigation = args => (
  <>
    <nav>
      <ul class="actionList">
        <ActiveNavItem />
        <TextOnly />
        <TextOnly />
      </ul>
    </nav>
  </>
)

export const SubNavigation = args => (
  <>
    <nav>
      <ul class="actionList">
        <ActiveSubNavItem />
        <TextOnly />
        <TextOnly />
      </ul>
    </nav>
  </>
)

export const SimpleDividers = args => (
  <>
    <ul class="actionList actionList--divided">
      <TextOnly />
      <TextOnly />
      <TextOnly />
    </ul>
  </>
)

export const ItemSizes = args => (
  <>
    <ul class="actionList">
      <li class="actionList-item">
        <span class="actionList-item-content">Default item size</span>
      </li>
    </ul>
    <ul class="actionList actionList--sizeMedium">
      <li class="actionList-item actionList-item--sizeMedium">
        <span class="actionList-item-content">Medium item size</span>
      </li>
    </ul>
    <ul class="actionList actionList--sizeLarge">
      <li class="actionList-item actionList-item--sizeLarge">
        <span class="actionList-item-content">Large item size</span>
      </li>
    </ul>
  </>
)
ItemSizes.decorators = [
  Story => (
    <div
      style={{
        margin: '3rem',
        border: 'dashed 1px var(--color-scale-gray-3)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      }}
    >
      <Story />
    </div>
  )
]

export const Selectable = args => (
  <>
    <ul class="actionList actionList--divided">
      <TextOnly />
      <TextOnly />
      <TextOnly />
    </ul>
  </>
)
