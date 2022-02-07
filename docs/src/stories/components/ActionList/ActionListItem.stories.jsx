import React from 'react'
import clsx from 'clsx'
import useToggle from '../../helpers/useToggle.jsx'
import {ListTemplate} from '../../private/ActionList/ActionList.stories.jsx'
import {ListItemTemplate} from '../../private/ActionList/ActionListItem.stories.jsx'

export default {
  title: 'Components/ActionList/ActionListItem',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook-Docs?node-id=23%3A30843'
    }
  },
  excludeStories: ['ActionListItemTemplate'],
  argTypes: {
    size: {
      options: [0, 1, 2], // iterator
      mapping: ['', 'ActionList-content--sizeMedium', 'ActionList-content--sizeLarge'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'medium', 'large']
      },
      description: 'small (default), medium, large',
      defaultValue: '',
      table: {
        category: 'CSS'
      }
    },
    variant: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-item--danger'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'danger']
      },
      defaultValue: '',
      table: {
        category: 'CSS'
      }
    },
    subItem: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    truncateItem: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    leadingVisual: {
      defaultValue: '',
      name: 'leadingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
    leadingVisualSize: {
      options: [0, 1, 2], // iterator
      mapping: ['ActionList-content--visual16', 'ActionList-content--visual20', 'ActionList-content--visual24'], // values
      control: {
        type: 'inline-radio',
        labels: ['16px', '20px', '24px']
      },
      description: 'leading visual width',
      defaultValue: 'ActionList-content--visual16',
      table: {
        category: 'CSS'
      }
    },
    trailingVisual: {
      defaultValue: '',
      name: 'trailingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
    text: {
      defaultValue: 'Item label',
      type: 'string',
      name: 'text',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    href: {
      defaultValue: '',
      type: 'string',
      name: 'href',
      description: 'Item link (href)',
      table: {
        category: 'HTML'
      }
    },
    ariaCurrent: {
      options: ['location', 'page'],
      control: {type: 'inline-radio'},
      description: 'location for anchor links, page for global page navigation',
      table: {
        category: 'HTML'
      }
    },
    description: {
      defaultValue: '',
      type: 'string',
      name: 'description',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    descriptionVariant: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-item-descriptionWrap--inline'], // values
      control: {
        type: 'inline-radio',
        labels: ['block', 'inline']
      },
      description: 'block (default), inline',
      defaultValue: 'ActionList-item-blockDescription',
      table: {
        category: 'CSS'
      }
    }
  }
}

export const ActionListItemTemplate = ListItemTemplate.bind({})

export const Playground = ActionListItemTemplate.bind({})
Playground.decorators = [
  Story => (
    <ListTemplate>
      <Story />
    </ListTemplate>
  )
]
Playground.args = {
  truncateItem: false,
  size: 0,
  variant: 0,
  subItem: false
}
