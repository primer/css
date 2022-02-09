import React from 'react'
import {ListItemTemplate} from '../../ui-patterns/ActionList/ActionListItem.stories'
import {ListTemplate} from '../../ui-patterns/ActionList/ActionList.stories.jsx'

export default {
  title: 'Components/ActionList/ActionList',
  excludeStories: ['ActionListTemplate'],
  argTypes: {
    showDividers: {
      control: {type: 'boolean'},
      description: 'Show dividers between items',
      table: {
        category: 'CSS'
      }
    },
    role: {
      options: ['list'],
      control: {
        type: 'inline-radio'
      },
      description: 'Semantic list role',
      table: {
        category: 'HTML'
      }
    },
    ariaLabel: {
      name: 'ariaLabel',
      type: 'string',
      description: 'If no list ActionListDivider is provided, include an aria-label',
      table: {
        category: 'HTML'
      }
    },
    ariaLabelledBy: {
      name: 'ariaLabelledBy',
      type: 'string',
      description: 'Reference ID of ActionListDivider',
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
    children: {
      table: {
        disable: true
      }
    }
  }
}

export const ActionListTemplate = ListTemplate.bind({})

export const Playground = ActionListTemplate.bind({})
Playground.args = {
  showDividers: false,
  listPadding: 0,
  role: 'list',
  ariaLabel: '',
  ariaLabelledBy: '',
  children: (
    <>
      <ListItemTemplate text="Action list item" />
      <ListItemTemplate text="Action list item" />
    </>
  )
}
