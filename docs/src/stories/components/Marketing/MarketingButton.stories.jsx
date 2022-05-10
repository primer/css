import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Marketing/Button',
  parameters: {
    layout: 'padded'
  },

  excludeStories: ['MarketingButtonTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2, 3], // iterator
      mapping: [null, 'btn-muted-mktg', 'btn-subtle-mktg', 'btn-signup-mktg'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'muted', 'subtle', 'signup']
      },
      table: {
        category: 'CSS'
      }
    },
    size: {
      options: [0, 1, 2], // iterator
      mapping: [null, 'btn-small-mktg', 'btn-large-mktg'], // values
      control: {
        type: 'inline-radio',
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
    animated: {
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    focusElement: {
      control: {type: 'boolean'},
      description: 'set focus on one element',
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
  var button = document.getElementsByTagName('button')[0]
  // set focus on element
  button.focus()
}

export const MarketingButtonTemplate = ({label, variant, disabled, size, animated, focusElement, focusAllElements}) => (
  <>
    <button
      disabled={disabled}
      className={clsx(
        'btn-mktg',
        variant && `${variant}`,
        size && `${size}`,
        animated && 'arrow-target-mktg',
        focusAllElements && 'focus'
      )}
    >
      {label}
      {animated && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="octicon arrow-symbol-mktg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
          ></path>
          <path stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
      )}
    </button>
    {focusElement && focusMethod()}
  </>
)

export const Playground = MarketingButtonTemplate.bind({})
Playground.args = {
  animated: false,
  focusElement: false,
  focusAllElements: false,
  variant: 0,
  size: 0
}
