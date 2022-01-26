import React from 'react'
import clsx from 'clsx'
import {ListItemTemplate} from './NavigationListItem.stories'

export default {
  title: 'Components/NavigationList/NavigationList',
  excludeStories: ['ListTemplate'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook-Docs?node-id=23%3A30843'
    }
  },
  argTypes: {
    showDividers: {
      control: {type: 'boolean'},
      description: 'Show dividers between items',
      table: {
        category: 'CSS'
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
      description: 'Reference ID of section divider',
      table: {
        category: 'HTML'
      }
    },
    groupId: {
      name: 'groupId',
      type: 'string',
      description: 'Menu group id',
      table: {
        category: 'HTML'
      }
    },
    children: {
      table: {
        category: 'HTML'
      }
    },
    subGroup: {
      control: {type: 'boolean'},
      description: 'If ActionList is nested within an ActionList',
      table: {
        category: 'CSS'
      }
    },
    listPadding: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList--full'], // values
      control: {
        type: 'inline-radio',
        labels: ['inset', 'full-bleed']
      },
      description: 'ActionList includes 8px padding by default, full-bleed removes all padding',
      table: {
        category: 'CSS'
      }
    }
  }
}

export const ListTemplate = ({showDividers, children, ariaLabel, ariaLabelledBy, subGroup, listPadding, variant}) => (
  <ul
    className={clsx(
      'ActionList',
      showDividers && 'ActionList--divided',
      subGroup && 'ActionList--subGroup',
      listPadding && `${listPadding}`,
      variant && `${variant}`
    )}
    role="list"
    aria-label={ariaLabel && ariaLabel}
    aria-labelledby={ariaLabelledBy && ariaLabelledBy}
  >
    <>{children}</>
  </ul>
)

export const Playground = ListTemplate.bind({})
Playground.args = {
  ariaLabel: 'Menu description',
  subGroup: false,
  showDividers: false,
  listPadding: 0,
  ariaLabelledBy: '',
  groupId: '',
  variant: 0,
  children: (
    <>
      <ListItemTemplate text="Action list item" />
      <ListItemTemplate text="Action list item" />
    </>
  )
}
