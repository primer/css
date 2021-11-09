import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Forms/Input',
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
      mapping: [null, 'input-sm', 'input-lg'], // values
      control: {
        type: 'select',
        labels: ['default', 'small', 'large']
      },
      table: {
        category: 'CSS'
      }
    },
    block: {
      description: 'full width',
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    monospace: {
      description: 'monospace text',
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    contrast: {
      description: 'change input background to light gray',
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    disabled: {
      description: 'disabled field',
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    hideWebKit: {
      description: 'hide WebKit autofill icon',
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
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
    }
  }
}

export const InputTemplate = ({
  label,
  type,
  id,
  size,
  block,
  placeholder,
  contrast,
  disabled,
  hideWebKit,
  monospace
}) => (
  <>
    <label for={id}>{label}</label>
    <input
      className={clsx(
        'form-control',
        size && `${size}`,
        block && 'input-block',
        contrast && 'input-contrast',
        hideWebKit && 'input-hide-webkit-autofill',
        monospace && 'input-monospace'
      )}
      type={type}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
    />
  </>
)

export const Playground = InputTemplate.bind({})
Playground.args = {
  type: 'email',
  id: 'some-id',
  placeholder: 'Email address',
  label: 'Enter email address',
  block: false,
  hideWebKit: false,
  monospace: false,
  contrast: false,
  disabled: false
}
