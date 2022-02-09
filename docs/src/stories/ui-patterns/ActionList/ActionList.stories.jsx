import React from 'react'
import clsx from 'clsx'
import {ListItemTemplate} from './ActionListItem.stories'

export default {
  title: 'UI Patterns/ActionList/ActionList',
  excludeStories: ['ListTemplate'],
  argTypes: {
    showDividers: {
      control: {type: 'boolean'},
      description: 'Show dividers between items',
      table: {
        category: 'CSS'
      }
    },
    role: {
      options: [null, 'menu', 'group', 'listbox', 'menubar', 'none', 'radiogroup', 'list'],
      control: {
        type: 'inline-radio'
      },
      description: 'Semantic list role',
      table: {
        category: 'HTML'
      }
    },
    variant: {
      options: [0, 1], // iterator
      mapping: [null, 'ActionList--tree'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'tree-view']
      },
      description: 'Specifies variants for different types of lists',
      table: {
        category: 'CSS'
      }
    },
    ariaLabel: {
      name: 'ariaLabel',
      type: 'string',
      description: 'Descriptive label for menu contents',
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
    listboxMultiSelect: {
      name: 'listboxMultiSelect',
      type: 'boolean',
      description: 'If ActionList has listbox role + multiselect children',
      table: {
        category: 'HTML'
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
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}

export const ListTemplate = ({
  showDividers,
  children,
  role,
  ariaLabel,
  ariaLabelledBy,
  listboxMultiSelect,
  listPadding,
  variant,
  listType
}) => (
  <ul
    className={clsx(
      'ActionList',
      showDividers && 'ActionList--divided',
      listType === 'nested' && 'ActionList--subGroup',
      listPadding && `${listPadding}`,
      variant && `${variant}`
    )}
    role={role}
    aria-label={ariaLabel && ariaLabel}
    aria-labelledby={ariaLabelledBy && ariaLabelledBy}
    aria-multiselectable={listboxMultiSelect ? 'true' : undefined}
  >
    <>{children}</>
  </ul>
)

export const Playground = ListTemplate.bind({})
Playground.args = {
  listType: 'parent',
  showDividers: false,
  listboxMultiSelect: false,
  listPadding: 0,
  variant: 0,
  role: 'list',
  children: (
    <>
      <ListItemTemplate text="Action list item" />
      <ListItemTemplate text="Action list item" />
    </>
  )
}
