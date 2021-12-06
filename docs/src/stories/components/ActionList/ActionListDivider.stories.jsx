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
        type: 'inline-radio',
        labels: ['subtle', 'filled']
      },
      table: {
        category: 'CSS'
      }
    },
    title: {
      defaultValue: '',
      type: 'string',
      name: 'title',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    description: {
      defaultValue: '',
      type: 'string',
      name: 'description',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    id: {
      defaultValue: '',
      type: 'string',
      name: 'id',
      description: 'Used for aria-labelledby',
      table: {
        category: 'HTML'
      }
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
      {description && <span className="ActionList-item-description">{description}</span>}
    </li>
  </>
)

export const Playground = DividerTemplate.bind({})
Playground.args = {
  title: 'Section title',
  description: 'Section description',
  variant: 'subtle'
}
