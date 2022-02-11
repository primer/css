import React from 'react'
import {NavigationListTemplate} from './NavigationList.stories'
import {DividerTemplate} from '../../ui-patterns/ActionList/ActionListDivider.stories.jsx'

export default {
  title: 'Components/NavigationList/NavigationListDivider',
  excludeStories: ['NavigationListDividerTemplate'],
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

export const NavigationListDividerTemplate = DividerTemplate.bind({})

export const Playground = NavigationListDividerTemplate.bind({})
Playground.args = {
  title: 'Section title',
  description: 'Section description'
}
Playground.decorators = [
  Story => (
    <NavigationListTemplate>
      <Story />
    </NavigationListTemplate>
  )
]
