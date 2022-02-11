import React from 'react'
import clsx from 'clsx'
import {NavigationListItemTemplate} from './NavigationListItem.stories'
import ConditionalWrapper from '../../helpers/ConditionalWrapper'

export default {
  title: 'Components/NavigationList/NavigationList',
  excludeStories: ['NavigationListTemplate'],
  argTypes: {
    showDividers: {
      control: {type: 'boolean'},
      description: 'Show dividers between items',
      table: {
        category: 'CSS'
      }
    },
    ariaLabel: {
      name: 'ariaLabel',
      type: 'string',
      description: 'Required if no visible group title provided by NavigationListDivider',
      table: {
        category: 'HTML'
      }
    },
    ariaLabelledBy: {
      name: 'ariaLabelledBy',
      type: 'string',
      description: 'Reference ID of NavigationListDivider',
      table: {
        category: 'HTML'
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    listPadding: {
      options: [0, 1], // iterator
      mapping: [null, 'ActionList--full'], // values
      control: {
        type: 'inline-radio',
        labels: ['inset', 'full-bleed']
      },
      description: 'ActionList includes 8px padding by default, full-bleed removes all padding',
      table: {
        category: 'CSS'
      }
    },
    listType: {
      options: [0, 1], // iterator
      mapping: ['parent', 'nested'], // values
      control: {
        type: 'inline-radio',
        labels: ['parent', 'nested']
      },
      description: 'NavigationList can be a parent list with a <nav> or a nested list with just <ul>',
      table: {
        category: 'CSS'
      }
    }
  }
}

export const NavigationListTemplate = ({showDividers, children, ariaLabel, ariaLabelledBy, listPadding, listType}) => (
  // wrap ul in <nav> if parent list
  <ConditionalWrapper condition={listType === 'parent'} wrap={children => <nav>{children}</nav>}>
    <ul
      className={clsx(
        'ActionList',
        showDividers && 'ActionList--divided',
        listType === 'nested' && 'ActionList--subGroup',
        listPadding && `${listPadding}`
      )}
      role="list"
      aria-label={ariaLabel && ariaLabel}
      aria-labelledby={ariaLabelledBy && ariaLabelledBy}
    >
      <>{children}</>
    </ul>
  </ConditionalWrapper>
)

export const Playground = NavigationListTemplate.bind({})
Playground.args = {
  listType: 'parent',
  ariaLabel: '',
  showDividers: false,
  listPadding: 0,
  ariaLabelledBy: '',
  children: (
    <>
      <NavigationListItemTemplate text="Nav list item" />
      <NavigationListItemTemplate text="Nav list item" />
    </>
  )
}
