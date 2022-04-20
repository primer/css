import React from 'react'
import clsx from 'clsx'
import {ListTemplate} from '../../ui-patterns/ActionList/ActionList.stories.jsx'
import {DividerTemplate} from '../../ui-patterns/ActionList/ActionListDivider.stories.jsx'

export default {
  title: 'Components/ActionList/ActionListDivider',
  excludeStories: ['ActionDividerTemplate'],
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
  }
}

export const ActionDividerTemplate = DividerTemplate.bind({})

export const Playground = ActionDividerTemplate.bind({})
Playground.args = {
  title: 'Section title',
  description: 'Section description',
  variant: 0
}
Playground.decorators = [
  Story => (
    <ListTemplate>
      <Story />
    </ListTemplate>
  )
]
