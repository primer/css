import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Experimental/Forms/Select',
  parameters: {
    layout: 'padded'
  },
  decorators: [
    Story => (
      <form>
        <Story />
      </form>
    )
  ],
  excludeStories: ['InputTemplate'],
  argTypes: {
    size: {
      options: [0, 1, 2], // iterator
      mapping: ['FormControl--small', 'FormControl--medium', 'FormControl--large'], // values
      control: {
        type: 'inline-radio',
        labels: ['small', 'medium', 'large']
      },
      table: {
        category: 'CSS'
      }
    },
    fullWidth: {
      description: 'full width',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    monospace: {
      description: 'monospace text',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    inset: {
      description: 'change input background to light gray',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    disabled: {
      description: 'disabled field',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    invalid: {
      description: 'invalid field',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    visuallyHideLabel: {
      description: 'visually hide label',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    placeholder: {
      type: 'string',
      name: 'placeholder',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    label: {
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    type: {
      name: 'type',
      type: 'string',
      description: 'type',
      table: {
        category: 'HTML'
      }
    },
    id: {
      name: 'id',
      type: 'string',
      description: 'id',
      table: {
        category: 'HTML'
      }
    },
    caption: {
      name: 'caption',
      type: 'string',
      description: 'caption',
      table: {
        category: 'HTML'
      }
    },
    focusElement: {
      control: {type: 'boolean'},
      description: 'set focus on element',
      table: {
        category: 'Interactive'
      }
    }
  }
}

const focusMethod = function getFocus() {
  // find the focusable element
  var input = document.getElementsByTagName('input')[0]
  // set focus on element
  input.focus()
}

export const InputTemplate = ({
  label,
  id,
  size,
  fullWidth,
  placeholder,
  inset,
  disabled,
  visuallyHideLabel,
  monospace,
  focusElement,
  invalid,
  caption
}) => (
  <>
    <div className={clsx('FormGroup', fullWidth && 'FormGroup--fullWidth')}>
      <label htmlFor={id} className={clsx('FormControl-label', visuallyHideLabel && 'sr-only')}>
        {label}
      </label>
      <div className={clsx('FormControl-fieldWrap', 'FormControl-fieldWrap--select', size && `${size}`)}>
        <select
          placeholder={placeholder}
          id={id}
          name="input-id"
          className={clsx(
            'FormControl',
            'FormControl--select',
            size && `${size}`,
            inset && 'FormControl--inset',
            monospace && 'FormControl--monospace'
          )}
          disabled={disabled}
          invalid={invalid ? 'true' : undefined}
        >
          <option label="First item" data-view-component="true"></option>
        </select>
      </div>
      {invalid && (
        <span className="FormControl-validation">
          <svg
            aria-hidden="true"
            height="12"
            viewBox="0 0 12 12"
            version="1.1"
            width="12"
            className="octicon octicon-alert-fill"
          >
            <path
              fillRule="evenodd"
              d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 01-1.146 1.954H1.33A1.312 1.312 0 01.183 9.058L4.855.708zM7 7V3H5v4h2zm-1 3a1 1 0 100-2 1 1 0 000 2z"
            ></path>
          </svg>
          <p id="validation-5e6e1c8a">Something went wrong</p>
        </span>
      )}
      {caption && (
        <p className="FormControl-caption" id="caption-ebb67985">
          Hint text
        </p>
      )}
    </div>
    {focusElement && focusMethod()}
  </>
)

export const Playground = InputTemplate.bind({})
Playground.args = {
  type: 'email',
  id: 'some-id',
  placeholder: 'Email address',
  label: 'Enter email address',
  fullWidth: false,
  monospace: false,
  inset: false,
  disabled: false,
  focusElement: false,
  size: 1,
  caption: 'Caption',
  invalid: false,
  visuallyHideLabel: false
}
