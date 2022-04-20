import React from 'react'
import clsx from 'clsx'
import {ListTemplate} from './ActionList.stories'

export default {
  title: 'UI Patterns/ActionList/ActionListDivider',
  excludeStories: ['DividerTemplate'],
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
      description: 'Provide label for NavigationList <ul> aria-labelledby',
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
      role={title ? undefined : 'separator'}
      aria-hidden={title ? undefined : true}
    >
      {title && (
        <h3 className="ActionList-sectionDivider-title" id={id}>
          {title}
        </h3>
      )}
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
Playground.decorators = [
  Story => (
    <ListTemplate>
      <Story />
    </ListTemplate>
  )
]
