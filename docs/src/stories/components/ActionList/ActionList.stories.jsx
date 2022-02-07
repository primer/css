import React from 'react'
import clsx from 'clsx'
import {ListItemTemplate} from '../../private/ActionList/ActionListItem.stories'
import {ListTemplate} from '../../private/ActionList/ActionList.stories.jsx'

export default {
  title: 'Components/ActionList/ActionList',
  excludeStories: ['ActionListTemplate'],
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

export const ActionListTemplate = ListTemplate.bind({})

export const Playground = ActionListTemplate.bind({})
Playground.args = {
  listType: 0,
  showDividers: false,
  listPadding: 0,
  role: 'list',
  children: (
    <>
      <ListItemTemplate text="Action list item" />
      <ListItemTemplate text="Action list item" />
    </>
  )
}
