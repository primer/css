import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/ActionList/ActionListDivider',
  excludeStories: ['DividerTemplate'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook?node-id=2%3A2'
    }
  },
  argTypes: {
    variant: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-sectionDivider--filled'], // values
      control: {
        type: 'select',
        labels: ['subtle', 'filled']
      },
      defaultValue: ''
    },
    title: {
      defaultValue: '',
      type: 'string',
      name: 'title',
      description: 'string'
    },
    description: {
      defaultValue: '',
      type: 'string',
      name: 'description',
      description: 'string'
    },
    id: {
      defaultValue: '',
      type: 'string',
      name: 'id',
      description: 'Used for aria-labelledby'
    }
  },
  decorators: [
    Story => (
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    )
  ]
}

export const DividerTemplate = ({title, description, variant, id}) => (
  <>
    <li
      className={clsx('ActionList-sectionDivider', variant && `${variant}`)}
      role={title ? 'presentation' : 'separator'}
      id={id}
      aria-hidden={title ? true : undefined}
    >
      {title}
      {description && <span className="ActionList-sectionDivider--description">{description}</span>}
    </li>
  </>
)

export const Playground = DividerTemplate.bind({})
Playground.args = {
  title: 'Section title',
  description: 'Section description'
}
