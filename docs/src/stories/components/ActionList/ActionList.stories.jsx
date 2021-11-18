import React from 'react'
import clsx from 'clsx'
import {ListItemTemplate} from './ActionListItem.stories'

export default {
  title: 'Components/ActionList',
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
    listboxMultiSelect: {
      name: 'listboxMultiSelect',
      type: 'boolean',
      description: 'If ActionList has listbox role + multiselect children',
      table: {
        category: 'HTML'
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
  subGroup,
  listboxMultiSelect
}) => (
  <ul
    className={clsx('ActionList', showDividers && 'ActionList--divided', subGroup && 'ActionList--subGroup')}
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
  ariaLabel: 'Menu description',
  subGroup: false,
  showDividers: false,
  listboxMultiSelect: false,
  ariaLabelledBy: '',
  groupId: '',
  children: (
    <>
      <ListItemTemplate text="Action list item" />
      <ListItemTemplate text="Action list item" />
    </>
  )
}
