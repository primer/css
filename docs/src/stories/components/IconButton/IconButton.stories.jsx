import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/IconButton',
  parameters: {
    layout: 'padded'
  },

  excludeStories: ['IconButtonTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2, 3], // iterator
      mapping: [
        null,
        'btn-outline',
        'btn-danger',
        'btn-invisible'
      ], // values
      control: {
        type: 'select',
        labels: ['default', 'outline', 'danger', 'invisible']
      },
      table: {
        category: 'CSS'
      }
    },
    label: {
      defaultValue: '<svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path></svg>',
      type: 'string',
      name: 'label',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
  }
}

const focusMethod = function getFocus() {
  // find the focusable element
  var button = document.getElementsByTagName('button')[0]
  // set focus on element
  button.focus()
}

export const IconButtonTemplate = ({
  label,
  variant,
  disabled,
  selected,
  focusElement,
}) => (
  <>
    <button
      disabled={disabled}
      className={clsx(
        'btn',
        'btn-icon',
        variant && `${variant}`,
      )}
      aria-selected={selected}
    >
      <span className="" dangerouslySetInnerHTML={{__html: label}} />
    </button>
    {focusElement && focusMethod()}
  </>
)

export const Playground = IconButtonTemplate.bind({})
Playground.args = {
  focusElement: false,
  focusAllElements: false
}
