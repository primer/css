import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    }
  },
  argTypes: {
    variant: {
      options: [0, 1, 2, 3], // iterator
      mapping: [null, 'btn-primary', 'btn-outline', 'btn-danger'], // values
      control: {
        type: 'select',
        labels: ['default', 'primary', 'outline', 'danger']
      },
      defaultValue: ''
    },
    label: {
      defaultValue: 'Button',
      type: 'string',
      name: 'label',
      description: 'string'
    }
  }
}

const Template = ({label, variant}) => (
  <>
    <button className={clsx('btn', variant && `${variant}`)}>{label}</button>
  </>
)

export const Button = Template.bind({})
