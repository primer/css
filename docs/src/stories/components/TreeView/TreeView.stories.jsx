import React from 'react'
import {ActionListTreeViewTemplate} from '../../ui-patterns/ActionList/ActionListTree.stories.jsx'

export default {
  title: 'Components/TreeView/TreeView',
  excludeStories: ['TreeViewTemplate'],
  layout: 'padded',
  argTypes: {
    showGroupIcon: {
      control: {type: 'boolean'},
      description: 'show subgroup leading icon',
      table: {
        category: 'Interactive'
      }
    },
    showSubItemIcon: {
      control: {type: 'boolean'},
      description: 'show subgroup item leading icon',
      table: {
        category: 'Interactive'
      }
    },
    text: {
      defaultValue: '',
      type: 'string',
      name: 'title',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    truncateItem: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    }
  }
}

export const TreeViewTemplate = ActionListTreeViewTemplate.bind({})

export const Playground = TreeViewTemplate.bind({})
Playground.args = {
  showSubItemIcon: true,
  showGroupIcon: true,
  text: 'item'
}
