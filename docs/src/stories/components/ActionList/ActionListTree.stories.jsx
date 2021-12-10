import React from 'react'
import clsx from 'clsx'
import {ListTemplate} from './ActionList.stories'
import {ListItemTemplate} from './ActionListItem.stories'

export default {
  title: 'Components/ActionList/TreeView',
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
    }
  }
}

const folder = `<svg aria-hidden="true" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path fill-rule="evenodd" d="M2 4.75C2 3.784 2.784 3 3.75 3h4.971c.58 0 1.12.286 1.447.765l1.404 2.063a.25.25 0 00.207.11h8.471c.966 0 1.75.783 1.75 1.75V19.25A1.75 1.75 0 0120.25 21H3.75A1.75 1.75 0 012 19.25V4.75z"></path></svg>`

const file = `<svg aria-hidden="true" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>`

const trailingVisual = `<svg aria-hidden="true" role="img" class="color-fg-attention" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path fill-rule="evenodd" d="M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z"></path></svg>`

export const ActionListTreeViewTemplate = ({showGroupIcon, showSubItemIcon}) => (
  <ListTemplate ariaLabel="Some description" role="tree-view" variant="ActionList--tree">
    <>
      <ListItemTemplate
        ariaLevel="1"
        role="none"
        listSemantic
        containsSubItem
        text="pages"
        collapsibleLeading
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={showGroupIcon && folder}
        children={
          <ListTemplate
            role="group"
            containsSubItem
            subGroup
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate
                  ariaLevel="2"
                  subItem
                  role="treeitem"
                  text="file.tsx"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={showSubItemIcon && file}
                  trailingVisual={trailingVisual}
                />
                <ListItemTemplate
                  role="treeitem"
                  ariaLevel="2"
                  subItem
                  listSemantic
                  text="file.tsx"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={showSubItemIcon && file}
                  trailingVisual={trailingVisual}
                />
                <ListItemTemplate
                  role="treeitem"
                  ariaLevel="2"
                  truncateItem
                  subItem
                  listSemantic
                  text="filewithreallylongnamewhoaaaaaaohmy.tsx"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={showSubItemIcon && file}
                  trailingVisual={trailingVisual}
                />
              </>
            }
          />
        }
      />
      <ListItemTemplate
        ariaLevel="1"
        listSemantic
        containsSubItem
        text="public"
        collapsibleLeading
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={showGroupIcon && folder}
        children={
          <ListTemplate
            role="group"
            containsSubItem
            subGroup
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate
                  ariaLevel="2"
                  role="treeitem"
                  subItem
                  listSemantic
                  text="file.tsx"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={showSubItemIcon && file}
                  trailingVisual={trailingVisual}
                />
                <ListItemTemplate
                  ariaLevel="2"
                  role="treeitem"
                  subItem
                  containsSubItem
                  listSemantic
                  collapsibleLeading
                  text="fonts"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={showGroupIcon && folder}
                  trailingVisual={trailingVisual}
                  children={
                    <ListTemplate
                      role="group"
                      containsSubItem
                      subGroup
                      ariaLabel="Sub nav descrioption"
                      children={
                        <>
                          <ListItemTemplate
                            ariaLevel="3"
                            subItem
                            listSemantic
                            containsSubItem
                            collapsibleLeading
                            text="Inter"
                            href="/"
                            leadingVisualSize="ActionList-content--visual16"
                            leadingVisual={showGroupIcon && folder}
                            trailingVisual={trailingVisual}
                            children={
                              <ListTemplate
                                role="group"
                                containsSubItem
                                subGroup
                                ariaLabel="Sub nav descrioption"
                                children={
                                  <>
                                    <ListItemTemplate
                                      ariaLevel="4"
                                      subItem
                                      listSemantic
                                      text="file.tsx"
                                      href="/"
                                      leadingVisualSize="ActionList-content--visual16"
                                      leadingVisual={showSubItemIcon && file}
                                      trailingVisual={trailingVisual}
                                    />
                                    <ListItemTemplate
                                      ariaLevel="4"
                                      subItem
                                      listSemantic
                                      text="file.tsx"
                                      href="/"
                                      leadingVisualSize="ActionList-content--visual16"
                                      leadingVisual={showSubItemIcon && file}
                                      trailingVisual={trailingVisual}
                                    />
                                    <ListItemTemplate
                                      ariaLevel="4"
                                      subItem
                                      listSemantic
                                      text="file.tsx"
                                      href="/"
                                      leadingVisualSize="ActionList-content--visual16"
                                      leadingVisual={showSubItemIcon && file}
                                      trailingVisual={trailingVisual}
                                    />
                                    <ListItemTemplate
                                      ariaLevel="4"
                                      role="treeitem"
                                      subItem
                                      containsSubItem
                                      listSemantic
                                      collapsibleLeading
                                      text="fonts"
                                      href="/"
                                      leadingVisualSize="ActionList-content--visual16"
                                      leadingVisual={showGroupIcon && folder}
                                      trailingVisual={trailingVisual}
                                      children={
                                        <ListTemplate
                                          role="group"
                                          containsSubItem
                                          subGroup
                                          ariaLabel="Sub nav descrioption"
                                          children={
                                            <>
                                              <ListItemTemplate
                                                ariaLevel="5"
                                                subItem
                                                listSemantic
                                                containsSubItem
                                                collapsibleLeading
                                                text="Inter"
                                                href="/"
                                                leadingVisualSize="ActionList-content--visual16"
                                                leadingVisual={showGroupIcon && folder}
                                                trailingVisual={trailingVisual}
                                                children={
                                                  <ListTemplate
                                                    role="group"
                                                    containsSubItem
                                                    subGroup
                                                    ariaLabel="Sub nav descrioption"
                                                    children={
                                                      <>
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          subItem
                                                          listSemantic
                                                          text="file.tsx"
                                                          href="/"
                                                          leadingVisualSize="ActionList-content--visual16"
                                                          leadingVisual={showSubItemIcon && file}
                                                          trailingVisual={trailingVisual}
                                                        />
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          subItem
                                                          listSemantic
                                                          text="file.tsx"
                                                          href="/"
                                                          leadingVisualSize="ActionList-content--visual16"
                                                          leadingVisual={showSubItemIcon && file}
                                                          trailingVisual={trailingVisual}
                                                        />
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          subItem
                                                          listSemantic
                                                          text="file.tsx"
                                                          href="/"
                                                          leadingVisualSize="ActionList-content--visual16"
                                                          leadingVisual={showSubItemIcon && file}
                                                          trailingVisual={trailingVisual}
                                                        />
                                                      </>
                                                    }
                                                  />
                                                }
                                              />
                                              <ListItemTemplate
                                                ariaLevel="5"
                                                subItem
                                                listSemantic
                                                text="filex.tsx"
                                                href="/"
                                                leadingVisualSize="ActionList-content--visual16"
                                                leadingVisual={showSubItemIcon && file}
                                                trailingVisual={trailingVisual}
                                              />
                                              <ListItemTemplate
                                                ariaLevel="5"
                                                role="treeitem"
                                                subItem
                                                containsSubItem
                                                listSemantic
                                                collapsibleLeading
                                                text="fonts"
                                                href="/"
                                                leadingVisualSize="ActionList-content--visual16"
                                                leadingVisual={showGroupIcon && folder}
                                                trailingVisual={trailingVisual}
                                                children={
                                                  <ListTemplate
                                                    role="group"
                                                    containsSubItem
                                                    subGroup
                                                    ariaLabel="Sub nav descrioption"
                                                    children={
                                                      <>
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          subItem
                                                          listSemantic
                                                          containsSubItem
                                                          collapsibleLeading
                                                          text="Inter"
                                                          href="/"
                                                          leadingVisualSize="ActionList-content--visual16"
                                                          leadingVisual={showGroupIcon && folder}
                                                          trailingVisual={trailingVisual}
                                                          children={
                                                            <ListTemplate
                                                              role="group"
                                                              containsSubItem
                                                              subGroup
                                                              ariaLabel="Sub nav descrioption"
                                                              children={
                                                                <>
                                                                  <ListItemTemplate
                                                                    ariaLevel="7"
                                                                    subItem
                                                                    listSemantic
                                                                    text="file.tsx"
                                                                    href="/"
                                                                    leadingVisualSize="ActionList-content--visual16"
                                                                    leadingVisual={showSubItemIcon && file}
                                                                    trailingVisual={trailingVisual}
                                                                  />
                                                                  <ListItemTemplate
                                                                    ariaLevel="7"
                                                                    subItem
                                                                    listSemantic
                                                                    text="file.tsx"
                                                                    href="/"
                                                                    leadingVisualSize="ActionList-content--visual16"
                                                                    leadingVisual={showSubItemIcon && file}
                                                                    trailingVisual={trailingVisual}
                                                                  />
                                                                  <ListItemTemplate
                                                                    ariaLevel="7"
                                                                    subItem
                                                                    listSemantic
                                                                    text="file.tsx"
                                                                    href="/"
                                                                    leadingVisualSize="ActionList-content--visual16"
                                                                    leadingVisual={showSubItemIcon && file}
                                                                    trailingVisual={trailingVisual}
                                                                  />
                                                                </>
                                                              }
                                                            />
                                                          }
                                                        />
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          subItem
                                                          listSemantic
                                                          text="file3.tsx"
                                                          href="/"
                                                          leadingVisualSize="ActionList-content--visual16"
                                                          leadingVisual={showSubItemIcon && file}
                                                          trailingVisual={trailingVisual}
                                                        />
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          role="treeitem"
                                                          subItem
                                                          containsSubItem
                                                          listSemantic
                                                          collapsibleLeading
                                                          text="fonts"
                                                          href="/"
                                                          leadingVisualSize="ActionList-content--visual16"
                                                          leadingVisual={showGroupIcon && folder}
                                                          trailingVisual={trailingVisual}
                                                          children={
                                                            <ListTemplate
                                                              role="group"
                                                              containsSubItem
                                                              subGroup
                                                              ariaLabel="Sub nav descrioption"
                                                              children={
                                                                <>
                                                                  <ListItemTemplate
                                                                    ariaLevel="7"
                                                                    subItem
                                                                    listSemantic
                                                                    containsSubItem
                                                                    collapsibleLeading
                                                                    text="Inter"
                                                                    href="/"
                                                                    leadingVisualSize="ActionList-content--visual16"
                                                                    leadingVisual={showGroupIcon && folder}
                                                                    trailingVisual={trailingVisual}
                                                                    children={
                                                                      <ListTemplate
                                                                        role="group"
                                                                        containsSubItem
                                                                        subGroup
                                                                        ariaLabel="Sub nav descrioption"
                                                                        children={
                                                                          <>
                                                                            <ListItemTemplate
                                                                              ariaLevel="8"
                                                                              subItem
                                                                              listSemantic
                                                                              text="file.tsx"
                                                                              href="/"
                                                                              leadingVisualSize="ActionList-content--visual16"
                                                                              leadingVisual={showSubItemIcon && file}
                                                                              trailingVisual={trailingVisual}
                                                                            />
                                                                            <ListItemTemplate
                                                                              ariaLevel="8"
                                                                              subItem
                                                                              listSemantic
                                                                              text="file.tsx"
                                                                              href="/"
                                                                              leadingVisualSize="ActionList-content--visual16"
                                                                              leadingVisual={showSubItemIcon && file}
                                                                              trailingVisual={trailingVisual}
                                                                            />
                                                                            <ListItemTemplate
                                                                              ariaLevel="8"
                                                                              subItem
                                                                              listSemantic
                                                                              text="file.tsx"
                                                                              href="/"
                                                                              leadingVisualSize="ActionList-content--visual16"
                                                                              leadingVisual={showSubItemIcon && file}
                                                                              trailingVisual={trailingVisual}
                                                                            />
                                                                          </>
                                                                        }
                                                                      />
                                                                    }
                                                                  />
                                                                  <ListItemTemplate
                                                                    ariaLevel="3"
                                                                    subItem
                                                                    listSemantic
                                                                    text="file4.tsx"
                                                                    href="/"
                                                                    leadingVisualSize="ActionList-content--visual16"
                                                                    leadingVisual={showSubItemIcon && file}
                                                                    trailingVisual={trailingVisual}
                                                                  />
                                                                </>
                                                              }
                                                            />
                                                          }
                                                        />
                                                      </>
                                                    }
                                                  />
                                                }
                                              />
                                            </>
                                          }
                                        />
                                      }
                                    />
                                  </>
                                }
                              />
                            }
                          />
                          <ListItemTemplate
                            ariaLevel="3"
                            subItem
                            listSemantic
                            text="file.tsx"
                            href="/"
                            leadingVisualSize="ActionList-content--visual16"
                            leadingVisual={showSubItemIcon && file}
                            trailingVisual={trailingVisual}
                          />
                        </>
                      }
                    />
                  }
                />
              </>
            }
          />
        }
      />
    </>
  </ListTemplate>
)

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = ActionListTreeViewTemplate.bind({})
Playground.args = {
  showSubItemIcon: true,
  showGroupIcon: true
}
