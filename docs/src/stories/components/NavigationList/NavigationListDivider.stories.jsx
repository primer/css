import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/NavigationList/NavigationListDivider',
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
    <span
      className={clsx('ActionList-sectionDivider', variant && `${variant}`)}
      role={title ? undefined : 'separator'}
      id={id}
      aria-hidden={title ? undefined : true}
    >
      {title && <h3 className="ActionList-sectionDivider-title">{title}</h3>}
      {description && <span className="ActionList-item-description">{description}</span>}
    </span>
  </>
)

export const Playground = DividerTemplate.bind({})
Playground.args = {
  title: 'Section title',
  description: 'Section description',
  variant: 'subtle'
}
