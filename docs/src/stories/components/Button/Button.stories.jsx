import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    },
    layout: 'padded'
  },

  excludeStories: ['ButtonTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2, 3, 4, 5, 6, 7], // iterator
      mapping: [
        null,
        'btn-primary',
        'btn-outline',
        'btn-danger',
        'btn-link',
        'btn-invisible',
        'btn-with-count',
        'btn-octicon'
      ], // values
      control: {
        type: 'select',
        labels: ['default', 'primary', 'outline', 'danger', 'link', 'invisible', 'close', 'with-count', 'icon-only']
      },
      table: {
        category: 'CSS'
      }
    },
    size: {
      options: [0, 1, 2], // iterator
      mapping: [null, 'btn-sm', 'btn-large'], // values
      control: {
        type: 'select',
        labels: ['default', 'small', 'large']
      },
      table: {
        category: 'CSS'
      }
    },
    label: {
      defaultValue: 'Button',
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    disabled: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    fullWidth: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    closeBtn: {
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    dropdownBtn: {
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    leadingVisual: {
      name: 'leadingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
    icon: {
      name: 'icon',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
    id: {
      name: 'id',
      type: 'string',
      description: 'label id for icon only buttons',
      table: {
        category: 'HTML'
      }
    },
    trailingVisual: {
      name: 'trailingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
    selected: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    }
  }
}

export const ButtonTemplate = ({
  label,
  variant,
  disabled,
  size,
  fullWidth,
  leadingVisual,
  trailingVisual,
  selected,
  closeBtn,
  dropdownBtn,
  icon,
  id
}) => (
  <>
    <button
      disabled={disabled}
      className={clsx(
        'btn',
        variant && `${variant}`,
        size && `${size}`,
        fullWidth && 'btn-block',
        closeBtn && 'close-button'
      )}
      aria-selected={selected && selected}
      aria-labelledby={id}
    >
      {leadingVisual && <span className="" dangerouslySetInnerHTML={{__html: leadingVisual}} />}
      <span hidden={icon} id={id}>
        {label}
      </span>
      {icon && <span className="" dangerouslySetInnerHTML={{__html: icon}} />}
      {trailingVisual && (
        <>
          <span className="" dangerouslySetInnerHTML={{__html: trailingVisual}} />{' '}
          {dropdownBtn && <span class="dropdown-caret"></span>}
        </>
      )}

      {closeBtn && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
          ></path>
        </svg>
      )}
    </button>
  </>
)

export const Playground = ButtonTemplate.bind({})
Playground.args = {
  closeBtn: false
}
