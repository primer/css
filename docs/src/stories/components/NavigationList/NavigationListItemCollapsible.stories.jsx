import React from 'react'
import clsx from 'clsx'
import useToggle from '../../helpers/useToggle.jsx'
import {NavigationListTemplate} from './NavigationList.stories'
import {ActionListItemCollapsibleTemplate} from '../../ui-patterns/ActionList/ActionListItemCollapsible.stories.jsx'

export default {
  title: 'Components/NavigationList/NavigationListItemCollapsible',
  excludeStories: ['NavigationListItemCollapsibleTemplate'],
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
    containsSubItem: {
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
    containsActiveSubItem: {
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
    },
    id: {
      defaultValue: '',
      type: 'string',
      name: 'id',
      description: 'Pass in ID of nested <ul> NavigationList',
      table: {
        category: 'HTML'
      }
    },
    ariaControlsId: {
      defaultValue: '',
      type: 'string',
      name: 'id',
      description: 'Pass in ID of nested <ul> NavigationList',
      table: {
        category: 'HTML'
      }
    },
    collapsePosition: {
      options: [0, 1], // iterator
      control: {
        type: 'inline-radio',
        labels: ['leading', 'trailing']
      },
      description: 'Handle collapse action visual position',
      table: {
        category: 'HTML'
      }
    }
  }
}

export const NavigationListItemCollapsibleTemplate = ActionListItemCollapsibleTemplate.bind({})

export const Playground = NavigationListItemCollapsibleTemplate.bind({})
Playground.decorators = [
  Story => (
    <NavigationListTemplate>
      <Story />
    </NavigationListTemplate>
  )
]
Playground.args = {
  truncateItem: false,
  size: 0,
  descriptionVariant: 0,
  leadingVisualSize: 0,
  collapsePosition: 0
}
