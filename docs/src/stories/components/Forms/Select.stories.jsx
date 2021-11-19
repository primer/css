import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Forms/Select',
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
  excludeStories: ['SelectTemplate'],
  argTypes: {
    size: {
      options: [0, 1], // iterator
      mapping: [null, 'select-sm'], // values
      control: {
        type: 'select',
        labels: ['default', 'small']
      },
      table: {
        category: 'CSS'
      }
    },
    disabled: {
      description: 'disabled field',
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
  var select = document.getElementsByTagName('select')[0]
  // set focus on element
  select.focus()
}

export const SelectTemplate = ({label, id, size, placeholder, disabled, focusElement, focusAllElements}) => (
  <>
    <label for={id}>{label}</label>
    <select
      className={clsx('form-select', size && `${size}`, focusAllElements && 'focus')}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
    >
      <option>Choose an option</option>
      <option>Git</option>
      <option>Subversion</option>
      <option>Social Coding</option>
      <option>Beets</option>
      <option>Bears</option>
      <option>Battlestar Galactica</option>
    </select>
    {focusElement && focusMethod()}
  </>
)

export const Playground = SelectTemplate.bind({})
Playground.args = {
  id: 'some-id',
  placeholder: 'Select',
  label: 'Select one',
  focusElement: false,
  focusAllElements: false
}
