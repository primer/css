import React from 'react'
import clsx from 'clsx'
import useToggle from '../../helpers/useToggle.jsx'
import {ListTemplate} from './ActionList.stories'

export default {
  title: 'UI Patterns/ActionList/ActionListItemCollapsible',
  excludeStories: ['ActionListItemCollapsibleTemplate'],
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
    },
    ariaLevel: {
      name: 'ariaLevel',
      type: 'string',
      description: 'number - nested subgroup',
      table: {
        category: 'HTML'
      }
    }
  }
}

export const ActionListItemCollapsibleTemplate = ({
  text,
  size,
  leadingVisual,
  leadingVisualSize,
  trailingVisual,
  description,
  descriptionVariant,
  children,
  containsSubItem,
  id,
  containsActiveSubItem,
  truncateItem,
  collapsePosition,
  ariaControlsId,
  ariaLevel
}) => {
  const [isCollapsed, itemIsCollapsed] = useToggle()
  const itemStyle = {
    '--ActionList-tree-depth': `${ariaLevel}`
  }
  return (
    <li
      className={clsx('ActionList-item', containsSubItem && `ActionList-item--hasSubItem`)}
      style={ariaLevel && itemStyle}
      aria-level={ariaLevel ? `${ariaLevel}` : undefined}
      role={ariaLevel ? 'treeitem' : undefined}
    >
      <button
        onClick={itemIsCollapsed}
        aria-expanded={isCollapsed ? 'false' : 'true'}
        aria-controls={ariaControlsId}
        id={id}
        className={clsx(
          'ActionList-content',
          size && `${size}`,
          (leadingVisual || trailingVisual) && description && 'ActionList-content--blockDescription',
          leadingVisual && leadingVisualSize && `${leadingVisualSize}`,
          containsActiveSubItem && `ActionList-content--hasActiveSubItem`
        )}
      >
        {collapsePosition === 0 && (
          <span className="ActionList-item-action ActionList-item-action--leading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="ActionList-item-collapseIcon"
            >
              <path
                fill-rule="evenodd"
                d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
              ></path>
            </svg>
          </span>
        )}
        {leadingVisual && (
          <span
            className="ActionList-item-visual ActionList-item-visual--leading"
            dangerouslySetInnerHTML={{__html: leadingVisual}}
          />
        )}
        {description && (
          <span className={clsx('ActionList-item-descriptionWrap', `${descriptionVariant}`)}>
            <span className={clsx('ActionList-item-label', truncateItem && 'ActionList-item-label--truncate')}>
              {text}
            </span>
            <span className="ActionList-item-description">{description}</span>
          </span>
        )}
        {!description && text && (
          <span className={clsx('ActionList-item-label', truncateItem && 'ActionList-item-label--truncate')}>
            {text}
          </span>
        )}
        {trailingVisual && (
          <span
            className="ActionList-item-visual ActionList-item-visual--trailing"
            dangerouslySetInnerHTML={{__html: trailingVisual}}
          />
        )}
        {collapsePosition === 1 && (
          <span className="ActionList-item-action ActionList-item-action--trailing">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="ActionList-item-collapseIcon"
            >
              <path
                fill-rule="evenodd"
                d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
              ></path>
            </svg>
          </span>
        )}
      </button>
      {children}
    </li>
  )
}

export const Playground = ActionListItemCollapsibleTemplate.bind({})
Playground.decorators = [
  Story => (
    <ListTemplate>
      <Story />
    </ListTemplate>
  )
]
Playground.args = {
  id: null,
  truncateItem: false
}
