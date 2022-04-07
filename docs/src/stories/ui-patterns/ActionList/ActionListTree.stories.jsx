import React from 'react'
import {ListTemplate} from './ActionList.stories'
import {ListItemTemplate} from './ActionListItem.stories'
import {ActionListItemCollapsibleTemplate} from '../../ui-patterns/ActionList/ActionListItemCollapsible.stories.jsx'

export default {
  title: 'UI Patterns/ActionList/ActionTreeView',
  excludeStories: ['ActionListTreeViewTemplate'],
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

const folder = `<svg aria-hidden="true" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path fill-rule="evenodd" d="M2 4.75C2 3.784 2.784 3 3.75 3h4.971c.58 0 1.12.286 1.447.765l1.404 2.063a.25.25 0 00.207.11h8.471c.966 0 1.75.783 1.75 1.75V19.25A1.75 1.75 0 0120.25 21H3.75A1.75 1.75 0 012 19.25V4.75z"></path></svg>`

const file = `<svg aria-hidden="true" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>`

const trailingVisual = `<svg aria-hidden="true" role="img" class="color-fg-attention" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path fill-rule="evenodd" d="M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z"></path></svg>`

export const ActionListTreeViewTemplate = ({showGroupIcon, showSubItemIcon, text, truncateItem}) => (
  <ListTemplate ariaLabel="Some description" role="tree" variant="ActionList--tree">
    <>
      <ListItemTemplate
        truncateItem={truncateItem}
        ariaLevel="1"
        treeitem
        text={text}
        leadingVisual={showSubItemIcon && file}
        trailingVisual={trailingVisual}
        treeItemSingleton
      />
      <ActionListItemCollapsibleTemplate
        text="level 1"
        leadingVisual={showGroupIcon && folder}
        truncateItem={truncateItem}
        ariaLevel="1"
        collapsePosition={0}
        containsSubItem
        containsActiveSubItem
      >
        <ListTemplate listType="nested">
          <ListItemTemplate
            truncateItem={truncateItem}
            ariaLevel="2"
            treeitem
            subItem
            text={text}
            ariaCurrent="page"
            leadingVisual={showSubItemIcon && file}
            trailingVisual={trailingVisual}
          />
          <ActionListItemCollapsibleTemplate
            text="level 2"
            leadingVisual={showGroupIcon && folder}
            truncateItem={truncateItem}
            ariaLevel="2"
            collapsePosition={0}
            containsSubItem
          >
            <ListTemplate listType="nested">
              <ActionListItemCollapsibleTemplate
                text="level 3"
                ariaLevel="3"
                leadingVisual={showGroupIcon && folder}
                truncateItem={truncateItem}
                collapsePosition={0}
                containsSubItem
              >
                <ListTemplate listType="nested">
                  <ListItemTemplate
                    truncateItem={truncateItem}
                    ariaLevel="4"
                    treeitem
                    subItem
                    text={text}
                    leadingVisual={showSubItemIcon && file}
                    trailingVisual={trailingVisual}
                  />
                  <ListItemTemplate
                    truncateItem={truncateItem}
                    ariaLevel="4"
                    treeitem
                    subItem
                    text={text}
                    leadingVisual={showSubItemIcon && file}
                    trailingVisual={trailingVisual}
                  />
                  <ListItemTemplate
                    truncateItem={truncateItem}
                    ariaLevel="4"
                    treeitem
                    subItem
                    text={text}
                    leadingVisual={showSubItemIcon && file}
                    trailingVisual={trailingVisual}
                  />
                </ListTemplate>
              </ActionListItemCollapsibleTemplate>
              <ListItemTemplate
                truncateItem={truncateItem}
                ariaLevel="3"
                treeitem
                subItem
                text={text}
                leadingVisual={showSubItemIcon && file}
                trailingVisual={trailingVisual}
              />
            </ListTemplate>
          </ActionListItemCollapsibleTemplate>
        </ListTemplate>
      </ActionListItemCollapsibleTemplate>
      <ListItemTemplate
        truncateItem={truncateItem}
        ariaLevel="1"
        treeitem
        text={text}
        leadingVisual={showSubItemIcon && file}
        trailingVisual={trailingVisual}
        treeItemSingleton
      />
    </>
  </ListTemplate>
)

export const Playground = ActionListTreeViewTemplate.bind({})
Playground.args = {
  showSubItemIcon: true,
  showGroupIcon: true,
  text: 'item'
}
