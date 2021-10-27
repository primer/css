import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Label/Counter',
  excludeStories: ['LabelCounterTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2], // iterator
      mapping: ['', 'Counter--primary', 'Counter--secondary'], // values
      control: {
        type: 'select',
        labels: ['default', 'primary', 'secondary'] // public labels
      },
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
export const LabelCounterTemplate = ({variant, text, icon}) => (
  <span className={clsx('Counter', variant && `${variant}`)}>
    <>
      {icon && icon}
      {text}
    </>
  </span>
)

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = LabelCounterTemplate.bind({})
Playground.args = {
  text: '23',
  variant: 'Counter--primary'
}
