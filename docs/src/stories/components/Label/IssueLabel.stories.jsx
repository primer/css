import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Label/IssueLabel',
  excludeStories: ['IssueLabelTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2, 3], // iterator
      mapping: [
        'color-bg-accent-emphasis',
        'color-bg-danger-emphasis',
        'color-bg-success-emphasis',
        'color-bg-attention-emphasis'
      ], // values
      control: {
        type: 'select',
        labels: ['accent', 'danger', 'success', 'attention'] // public labels
      },
      description: 'Colors',
      table: {
        category: 'CSS'
      }
    },
    size: {
      options: [0, 1], // iterator
      mapping: ['', 'IssueLabel--big'], // values
      control: {
        type: 'select',
        labels: ['default', 'big'] // public labels
      },
      description: 'Size',
      table: {
        category: 'CSS'
      }
    },
    text: {
      name: 'stringExample',
      type: 'string',
      description: 'Label text',
      table: {
        category: 'HTML'
      }
    }
  }
}

// build every component case here in the template (private api)
export const IssueLabelTemplate = ({variant, size, text}) => (
  <span className={clsx('IssueLabel', 'color-fg-on-emphasis', variant && `${variant}`, size && `${size}`)}>{text}</span>
)

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = IssueLabelTemplate.bind({})
Playground.args = {
  text: 'bug 🐛',
  variant: 'color-bg-accent-emphasis'
}
