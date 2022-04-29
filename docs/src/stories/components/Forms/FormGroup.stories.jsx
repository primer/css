import React from 'react'
import clsx from 'clsx'
import {InputTemplate} from './Input.stories'

export default {
  title: 'Components/Forms/FormGroup',
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
  excludeStories: ['FormGroupTemplate'],
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
    },
    focusElement: {
      control: {type: 'boolean'},
      description: 'set focus on element',
      table: {
        category: 'Interactive'
      }
    },
    focusAllElements: {
      control: {type: 'boolean'},
      description: 'set focus on all elements for viewing in all themes',
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

export const FormGroupTemplate = ({
  label,
  type,
  id,
  size,
  block,
  placeholder,
  contrast,
  disabled,
  hideWebKit,
  monospace,
  focusElement,
  focusAllElements
}) => (
  <>
    <form class="pb-6">
      <div class="form-group errored">
        <div class="form-group-header">
          <label for="username-input">Username</label>
        </div>
        <div class="form-group-body">
          <InputTemplate {...InputTemplate.args} />
        </div>
        <p class="note error" id="username-input-validation">
          monalisa is not available. monalisa-beep, monalisa-cyber, or monalisa87 are available.
        </p>
      </div>
    </form>
  </>
)

export const Playground = FormGroupTemplate.bind({})
Playground.args = {
  type: 'email',
  id: 'some-id',
  placeholder: 'Email address',
  label: 'Enter email address',
  block: false,
  hideWebKit: false,
  monospace: false,
  contrast: false,
  disabled: false,
  focusElement: false,
  focusAllElements: false
}
