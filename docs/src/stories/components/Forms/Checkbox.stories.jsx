import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Forms/Checkbox',
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
  excludeStories: ['CheckboxTemplate'],
  argTypes: {
    disabled: {
      description: 'disabled field',
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    note: {
      type: 'string',
      name: 'note',
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
    highlight: {
      control: {type: 'boolean'},
      description: 'highlight label',
      table: {
        category: 'CSS'
      }
    },
    checked: {
      control: {type: 'boolean'},
      description: 'checkbox state',
      table: {
        category: 'CSS'
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
    },
    type: {
      options: [0, 1], // iterator
      mapping: ['checkbox', 'radio'], // values
      control: {
        type: 'inline-radio',
        labels: ['checkbox', 'radio'] // public labels
      },
      description: 'input type'
    }
  }
}

const focusMethod = function getFocus() {
  // find the focusable element
  var checkbox = document.getElementsByTagName('input')[0]
  // set focus on element
  checkbox.focus()
}

export const CheckboxTemplate = ({label, note, highlight, disabled, checked, focusElement, focusAllElements, type}) => (
  <>
    <div class="form-checkbox">
      <label>
        <input
          type={type}
          checked={checked}
          aria-describedby="help-text-for-checkbox"
          disabled={disabled}
          className={focusAllElements && 'focus'}
        />
        {label && highlight ? <em class="highlight">{label}</em> : label}
      </label>
      {note && (
        <p class="note" id="help-text-for-checkbox">
          {note}
        </p>
      )}
    </div>
    {focusElement && focusMethod()}
  </>
)

export const Playground = CheckboxTemplate.bind({})
Playground.args = {
  label: 'Label',
  focusElement: false,
  disabled: false,
  checked: false,
  highlight: false,
  note: '',
  type: 'checkbox',
  focusAllElements: false
}
