import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Label/States',
  excludeStories: ['LabelStatesTemplate'],
  argTypes: {
    state: {
      options: [0, 1, 2, 3, 4], // iterator
      mapping: ['', 'State--draft', 'State--open', 'State--merged', 'State--closed'], // values
      control: {
        type: 'select',
        labels: ['default', 'draft', 'open', 'merged', 'closed'] // public labels
      },
      // description: 'Colors & icons',
      table: {
        category: 'CSS'
      }
    },
    size: {
      options: [0, 1], // iterator
      mapping: ['', 'State--small'], // values
      control: {
        type: 'select',
        labels: ['default', 'small'] // public labels
      },
      description: 'Size',
      table: {
        category: 'CSS'
      }
    },
    text: {
      name: 'text',
      type: 'string',
      description: 'Label text',
      table: {
        category: 'HTML'
      }
    },
    icon: {
      defaultValue: '',
      name: 'icon',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    }
  }
}

// build every component case here in the template (private api)
export const LabelStatesTemplate = ({state, size, text, icon}) => (
  <span className={clsx('State', state && `${state}`, size && `${size}`)}>
    <>
      {icon && <span dangerouslySetInnerHTML={{__html: icon}} />} {text}
    </>
  </span>
)

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = LabelStatesTemplate.bind({})
Playground.args = {
  text: 'Draft',
  state: 'State--draft'
}
