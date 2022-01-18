import React from 'react'
import clsx from 'clsx'
import useToggle from '../../helpers/useToggle.jsx'

export default {
  title: 'Components/ActionList/ActionListItem',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook-Docs?node-id=23%3A30843'
    }
  },
  excludeStories: ['ListItemTemplate'],
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
    },
    id: {
      defaultValue: '',
      type: 'string',
      name: 'id',
      description: 'Used for aria-labelledby if nested group within item',
      table: {
        category: 'HTML'
      }
    },
    collapsible: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    collapsibleLeading: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    singleSelect: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    multiSelect: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    listSingleSelect: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    listMultiSelect: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    treeitem: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'HTML'
      }
    },
    ariaDisabled: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    ariaLevel: {
      name: 'ariaLevel',
      type: 'string',
      description: 'number - nested subgroup',
      table: {
        category: 'HTML'
      }
    },
    ariaSetSize: {
      name: 'ariaSetSize',
      type: 'string',
      description:
        'Defines the number of treeitem elements in the set of treeitem elements that are in the same branch and at the same level within the hierarchy',
      table: {
        category: 'HTML'
      }
    },
    ariaPosInset: {
      name: 'ariaPosInset',
      type: 'string',
      description:
        'Defines the position of the element within the set of other treeitem elements that are in the same branch and at the same level within the hierarchy.',
      table: {
        category: 'HTML'
      }
    },
    fontSize: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-content--fontSmall'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'small']
      },
      description: 'Used to adjust font-size for subgroup items',
      table: {
        category: 'CSS'
      }
    }
  }
}

export const ListItemTemplate = ({
  text,
  size,
  leadingVisual,
  leadingVisualSize,
  trailingVisual,
  description,
  descriptionVariant,
  variant,
  href,
  ariaCurrent,
  children,
  subItem,
  containsSubItem,
  id,
  collapsible,
  trailingAction,
  leadingAction,
  singleSelect,
  multiSelect,
  listSingleSelect,
  listMultiSelect,
  listSemantic,
  ariaDisabled,
  containsActiveSubItem,
  collapsibleLeading,
  truncateItem,
  ariaLevel,
  fontSize,
  treeitem,
  ariaSetSize,
  ariaPosInset,
  menuItem
}) => {
  const [isCollapsed, itemIsCollapsed] = useToggle()
  const [isChecked, itemIsChecked] = useToggle()
  const itemStyle = {
    '--ActionList-tree-depth': `${ariaLevel}`
  }
  return (
    <li
      className={clsx(
        'ActionList-item',
        ariaCurrent && 'ActionList-item--navActive',
        subItem && `ActionList-item--subItem`,
        containsSubItem && `ActionList-item--hasSubItem`,
        containsActiveSubItem && `ActionList-item--hasActiveSubItem`,
        variant && `${variant}`
      )}
      aria-level={ariaLevel ? `${ariaLevel}` : undefined}
      aria-setsize={ariaSetSize ? `${ariaSetSize}` : undefined}
      aria-posinset={ariaPosInset ? `${ariaPosInset}` : undefined}
      style={ariaLevel && itemStyle}
      onClick={collapsible || collapsibleLeading ? itemIsCollapsed : itemIsChecked}
      role={
        singleSelect
          ? 'menuitemradio'
          : multiSelect
          ? 'menuitemcheckbox'
          : listSingleSelect || listMultiSelect
          ? 'option'
          : listSemantic
          ? undefined
          : href
          ? 'none'
          : treeitem
          ? 'treeitem'
          : menuItem
          ? 'menuitem'
          : undefined
      }
      id={id}
      aria-haspopup={collapsible || collapsibleLeading ? 'true' : undefined}
      aria-expanded={collapsible || collapsibleLeading ? (isCollapsed ? 'false' : 'true') : undefined}
      aria-checked={singleSelect || multiSelect ? (isChecked ? 'true' : 'false') : undefined}
      aria-selected={listSingleSelect || listMultiSelect ? (isChecked ? 'true' : 'false') : undefined}
      aria-disabled={ariaDisabled ? 'true' : undefined}
    >
      {href ? (
        <>
          <a
            href={href}
            role={
              href && !listSemantic && !treeitem ? 'menuitem' : undefined || (href && treeitem) ? 'treeitem' : undefined
            }
            aria-current={ariaCurrent}
            className={clsx(
              text && 'ActionList-content',
              size && `${size}`,
              fontSize && `${fontSize}`,
              (leadingVisual || trailingVisual) && description && 'ActionList-content--blockDescription',
              leadingVisual && leadingVisualSize && `${leadingVisualSize}`
            )}
          >
            {(leadingAction ||
              singleSelect ||
              multiSelect ||
              listSingleSelect ||
              listMultiSelect ||
              collapsibleLeading) && (
              <span className="ActionList-item-action ActionList-item-action--leading">
                {singleSelect ||
                  (listSingleSelect && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      className="ActionList-item-singleSelectCheckmark"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                      ></path>
                    </svg>
                  ))}
                {multiSelect ||
                  (listMultiSelect && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      className="ActionList-item-multiSelectIcon"
                    >
                      <rect x="2" y="2" width="12" height="12" rx="4" className="ActionList-item-multiSelectIconRect" />
                      <path
                        fill-rule="evenodd"
                        d="M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z"
                        className="ActionList-item-multiSelectCheckmark"
                      />
                    </svg>
                  ))}
                {collapsibleLeading && (
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
                )}
                {leadingAction}
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
                  <span className="ActionList-item-description">{description}</span>
                </span>
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
            {trailingAction ||
              (collapsible && (
                <span className="ActionList-item-action ActionList-item-action--trailing">
                  {collapsible && (
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
                  )}
                  {trailingAction}
                </span>
              ))}
          </a>
          {children}
        </>
      ) : (
        <>
          {text && (
            <span
              className={clsx(
                text && 'ActionList-content',
                size && `${size}`,
                fontSize && `${fontSize}`,
                (leadingVisual || trailingVisual) && description && 'ActionList-content--blockDescription',
                leadingVisual && leadingVisualSize && `${leadingVisualSize}`
              )}
            >
              {(leadingAction ||
                singleSelect ||
                multiSelect ||
                listSingleSelect ||
                listMultiSelect ||
                collapsibleLeading) && (
                <span className="ActionList-item-action ActionList-item-action--leading">
                  {(singleSelect || listSingleSelect) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      className="ActionList-item-singleSelectCheckmark"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                      ></path>
                    </svg>
                  )}
                  {(multiSelect || listMultiSelect) && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      className="ActionList-item-multiSelectIcon"
                    >
                      <rect x="2" y="2" width="12" height="12" rx="4" className="ActionList-item-multiSelectIconRect" />
                      <path
                        fill-rule="evenodd"
                        d="M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z"
                        className="ActionList-item-multiSelectCheckmark"
                      />
                    </svg>
                  )}
                  {collapsibleLeading && (
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
                  )}
                  {leadingAction}
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

                    <span className="ActionList-item-description">{description}</span>
                  </span>
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
              {trailingAction ||
                (collapsible && (
                  <span className="ActionList-item-action ActionList-item-action--trailing">
                    {collapsible && (
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
                    )}
                    {trailingAction}
                  </span>
                ))}
            </span>
          )}
          {children}
        </>
      )}
    </li>
  )
}

export const Playground = ListItemTemplate.bind({})
Playground.decorators = [
  Story => (
    <ul className="ActionList">
      <Story />
    </ul>
  )
]
Playground.args = {
  id: null,
  truncateItem: false
}
