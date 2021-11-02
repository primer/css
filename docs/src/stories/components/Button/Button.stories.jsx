import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    },
    layout: 'fullscreen'
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
        'close-button',
        'btn-with-count'
      ], // values
      control: {
        type: 'select',
        labels: ['default', 'primary', 'outline', 'danger', 'link', 'invisible', 'close', 'with-count']
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
    leadingVisual: {
      name: 'leadingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
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
    trailingAction: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
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
  trailingAction,
  selected
}) => (
  <>
    <button
      disabled={disabled}
      className={clsx('btn', variant && `${variant}`, size && `${size}`, fullWidth && 'btn-block')}
      aria-selected={selected}
    >
      {leadingVisual && <span className="" dangerouslySetInnerHTML={{__html: leadingVisual}} />}
      <span>{label}</span>
      {trailingVisual && <span className="" dangerouslySetInnerHTML={{__html: trailingVisual}} />}
      {trailingAction && <span class="dropdown-caret"></span>}
    </button>
  </>
)

export const Playground = ButtonTemplate.bind({})
