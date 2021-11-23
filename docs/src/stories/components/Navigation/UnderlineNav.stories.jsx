import React from 'react'
import clsx from 'clsx'
import {UnderlineNavItemTemplate} from './UnderlineNavItem.stories'

export default {
  title: 'Components/Navigation/UnderlineNav',
  excludeStories: ['UnderlineNavTemplate'],
  layout: 'padded',
  argTypes: {
    variant: {
      options: [0, 1, 2], // iterator
      mapping: ['', 'UnderlineNav--right', 'UnderlineNav--full'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'align-right', 'fullwidth']
      },
      description: 'nav positioning options',
      table: {
        category: 'CSS'
      }
    },
    children: {
      description: 'creates a slot for children',
      table: {
        category: 'HTML'
      }
    },
    actionStart: {
      description: 'action to left of nav',
      table: {
        category: 'HTML'
      }
    },
    actionEnd: {
      description: 'action to right of nav',
      table: {
        category: 'HTML'
      }
    }
  }
}

export const UnderlineNavTemplate = ({variant, children, actionStart, actionEnd}) => (
  <>
    <nav className={clsx('UnderlineNav', variant && `${variant}`)}>
      {actionStart}
      {variant === 'UnderlineNav--full' ? (
        <div class="container-lg UnderlineNav-container">
          <div class="UnderlineNav-body" role="tablist">
            {children}
          </div>
        </div>
      ) : (
        <div class="UnderlineNav-body" role="tablist">
          {children}
        </div>
      )}
      {actionEnd}
    </nav>
  </>
)

export const Playground = UnderlineNavTemplate.bind({})
Playground.args = {
  variant: 0,
  children: (
    <>
      <UnderlineNavItemTemplate label="Item" semanticItemType="button" selected />
      <UnderlineNavItemTemplate label="Item" semanticItemType="button" />
      <UnderlineNavItemTemplate label="Item" semanticItemType="button" />
    </>
  )
}
