import React from 'react'
import {ActionListTreeViewTemplate} from './ActionListTree.stories'

export default {
  title: 'UI Patterns/ActionList/ActionTreeView/Features'
}

export const TruncateText = ActionListTreeViewTemplate.bind({})
TruncateText.args = {
  truncateItem: true,
  text: 'Super duper long text that will truncate on smaller width rows'
}

export const WrapText = ActionListTreeViewTemplate.bind({})
WrapText.args = {
  text: 'Super duper long text that will wrap on smaller width rows'
}
