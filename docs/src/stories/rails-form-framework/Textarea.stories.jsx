import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Rails Forms/Textarea',
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
    validationStatus: {
      options: [0, 1, 2, 3], // iterator
      mapping: ['', 'FormControl-error', 'FormControl-success', 'FormControl-warning'], // values
      control: {
        type: 'inline-radio',
        labels: ['undefined', 'error', 'success', 'warning']
      },
      table: {
        category: 'Validation'
      }
    },
    fullWidth: {
      description: 'formerly called Block',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    monospace: {
      description: 'monospace text',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    inset: {
      description: 'formerly called Contrast',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    disabled: {
      description: 'disabled field',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    required: {
      description: 'required field',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    invalid: {
      description: 'invalid field',
      control: {type: 'boolean'},
      table: {
        category: 'Validation'
      }
    },
    visuallyHidden: {
      description: 'visually hide label',
      control: {type: 'boolean'},
      table: {
        category: 'Label'
      }
    },
    placeholder: {
      type: 'string',
      name: 'placeholder',
      description: 'string',
      table: {
        category: 'Input'
      }
    },
    label: {
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'Label'
      }
    },
    caption: {
      name: 'caption',
      type: 'string',
      description: 'caption',
      table: {
        category: 'Caption'
      }
    },
    validation: {
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'Validation'
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
  fullWidth,
  placeholder,
  inset,
  disabled,
  visuallyHidden,
  monospace,
  focusElement,
  invalid,
  caption,
  validation,
  validationStatus
}) => (
  <>
    <div className={clsx('FormControl', fullWidth && 'FormControl--fullWidth')}>
      <label htmlFor="input-id" className={clsx('FormControl-label', visuallyHidden && 'sr-only')}>
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        id="input-id"
        disabled={disabled ? 'true' : undefined}
        className={clsx(
          'FormControl-textarea',
          inset && 'FormControl-inset',
          monospace && 'FormControl-monospace',
          validationStatus && `${validationStatus}`
        )}
      />
      {invalid && (
        <span className="FormControl-inlineValidation">
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
          <p id="validation-5e6e1c8a">{validation}</p>
        </span>
      )}
      {caption && (
        <p className="FormControl-caption" id="caption-ebb67985">
          {caption}
        </p>
      )}
    </div>
    {focusElement && focusMethod()}
  </>
)

export const Playground = InputTemplate.bind({})
Playground.args = {
  placeholder: 'Email address',
  label: 'Enter email address',
  fullWidth: false,
  monospace: false,
  inset: false,
  disabled: false,
  focusElement: false,
  caption: 'Caption',
  invalid: false,
  visuallyHidden: false,
  validation: '',
  validationStatus: 0
}
