import React from 'react'
import clsx from 'clsx'
import {DividerTemplate} from './ActionListDivider.stories'
import {ListItemTemplate} from './ActionListItem.stories'
import {ListTemplate} from './ActionList.stories'

export default {
  title: 'Components/ActionList/Patterns'
  //   decorators: [
  //     Story => (
  //       <nav>
  //         <Story />
  //       </nav>
  //     )
  //   ]
}

export const NavWithSubItems = ListTemplate.bind({})
NavWithSubItems.storyName = '[Nav] Links + nested collapsible group'
NavWithSubItems.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  role: undefined,
  ariaLabel: 'Main menu description',
  showDividers: false,
  children: (
    <>
      <ListItemTemplate text="Nav Item" href="/" listSemantic />
      <ListItemTemplate text="Nav Item" href="/" listSemantic />
      <ListItemTemplate text="Nav Item" href="/" listSemantic />
      <ListItemTemplate
        listSemantic
        collapsible
        containsSubItem
        text="Nav Item"
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav description"
            children={
              <>
                <ListItemTemplate subItem text="Sub Nav Item" href="/" listSemantic />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" listSemantic />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" listSemantic />
              </>
            }
          />
        }
      />
    </>
  )
}
NavWithSubItems.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const NavWithSubItemsLeadingVisual16px = ListTemplate.bind({})
NavWithSubItemsLeadingVisual16px.storyName = '[Nav] Links + nested collapsible group leadingVisual 16px'
NavWithSubItemsLeadingVisual16px.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Main menu description',
  role: undefined,
  showDividers: false,
  children: (
    <>
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        containsSubItem
        collapsible
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate subItem text="Sub Nav Item" href="/" listSemantic />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" listSemantic />
                <ListItemTemplate
                  listSemantic
                  subItem
                  text="Sub Nav Item"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
                />
              </>
            }
          />
        }
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
    </>
  )
}
NavWithSubItemsLeadingVisual16px.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const NavWithSubItemsLeadingVisual20px = ListTemplate.bind({})
NavWithSubItemsLeadingVisual20px.storyName = '[Nav] Links + nested collapsible group leadingVisual 20px'
NavWithSubItemsLeadingVisual20px.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Main menu description',
  role: undefined,
  showDividers: false,
  children: (
    <>
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
      <ListItemTemplate
        listSemantic
        containsSubItem
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate subItem text="Sub Nav Item" href="/" listSemantic />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" listSemantic />
                <ListItemTemplate
                  listSemantic
                  subItem
                  text="Nav Item"
                  href="/"
                  leadingVisualSize="ActionList-content--visual20"
                  leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
                />
              </>
            }
          />
        }
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
    </>
  )
}
NavWithSubItemsLeadingVisual20px.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const NavWithSubItemsLeadingVisual24px = ListTemplate.bind({})
NavWithSubItemsLeadingVisual24px.storyName = '[Nav] Links + nested collapsible group leadingVisual 24px'
NavWithSubItemsLeadingVisual24px.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Main menu description',
  role: undefined,
  showDividers: false,
  children: (
    <>
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        containsSubItem
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate subItem text="Sub Nav Item" href="/" listSemantic />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" listSemantic />
                <ListItemTemplate
                  listSemantic
                  subItem
                  text="Nav Item"
                  href="/"
                  leadingVisualSize="ActionList-content--visual24"
                  leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
                />
              </>
            }
          />
        }
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
    </>
  )
}
NavWithSubItemsLeadingVisual24px.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const MenuWithDivider = ListTemplate.bind({})
MenuWithDivider.storyName = '[DropdownMenu] Divider'
MenuWithDivider.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Main menu description',
  role: 'menu',
  showDividers: false,
  children: (
    <>
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <DividerTemplate />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
    </>
  )
}
MenuWithDivider.decorators = [
  Story => (
    <div>
      <details class="dropdown details-reset details-overlay d-inline-block" open="true">
        <summary class="btn" aria-haspopup="true">
          Dropdown
          <div class="dropdown-caret"></div>
        </summary>
        <div class="SelectMenu">
          <div class="SelectMenu-modal">
            <Story />
          </div>
        </div>
      </details>
    </div>
  )
]

export const MenuWithSectionDivider = ListTemplate.bind({})
MenuWithSectionDivider.storyName = '[DropdownMenu] Section divider'
MenuWithSectionDivider.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Main menu description',
  role: 'menu',
  showDividers: false,
  children: (
    <>
      <ListItemTemplate text="Nav Item" href="/" />
      <ListItemTemplate text="Nav Item" href="/" />
      <ListItemTemplate text="Nav Item" href="/" />
      <DividerTemplate title="Section DividerTemplate (subtle)" id="some-unique-id" />
      <ListItemTemplate
        containsSubItem
        children={
          <ListTemplate
            ariaLabelledBy="some-unique-id"
            role="menu"
            children={
              <>
                <ListItemTemplate text="Nav Item" href="/" />
                <ListItemTemplate text="Nav Item" href="/" />
                <ListItemTemplate text="Nav Item" href="/" variant="ActionList-item--danger" />
              </>
            }
          />
        }
      />
    </>
  )
}
MenuWithSectionDivider.decorators = [
  Story => (
    <div>
      <details class="dropdown details-reset details-overlay d-inline-block" open="true">
        <summary class="btn" aria-haspopup="true">
          Dropdown
          <div class="dropdown-caret"></div>
        </summary>
        <div class="SelectMenu">
          <div class="SelectMenu-modal">
            <Story />
          </div>
        </div>
      </details>
    </div>
  )
]

export const MenuSingleSelect = ListTemplate.bind({})
MenuSingleSelect.storyName = '[DropdownMenu] Single select'
MenuSingleSelect.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Main menu description',
  role: 'menu',
  showDividers: false,
  children: (
    <>
      <ListItemTemplate text="Option label" singleSelect />
      <ListItemTemplate text="Option label" singleSelect />
      <ListItemTemplate text="Option label" singleSelect />
      <ListItemTemplate text="Option label" singleSelect />
      <ListItemTemplate text="Option label" singleSelect />
    </>
  )
}
MenuSingleSelect.decorators = [
  Story => (
    <div>
      <details class="dropdown details-reset details-overlay d-inline-block" open="true">
        <summary class="btn" aria-haspopup="true">
          Dropdown
          <div class="dropdown-caret"></div>
        </summary>
        <div class="SelectMenu">
          <div class="SelectMenu-modal">
            <Story />
          </div>
        </div>
      </details>
    </div>
  )
]

export const MenuMultiSelect = ListTemplate.bind({})
MenuMultiSelect.storyName = '[DropdownMenu] Multi select'
MenuMultiSelect.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Main menu description',
  role: 'menu',
  showDividers: false,
  children: (
    <>
      <ListItemTemplate text="Option label" multiSelect />
      <ListItemTemplate text="Option label" multiSelect />
      <ListItemTemplate text="Option label" multiSelect />
      <ListItemTemplate text="Option label" multiSelect />
      <ListItemTemplate text="Option label" multiSelect />
    </>
  )
}
MenuMultiSelect.decorators = [
  Story => (
    <div>
      <details class="dropdown details-reset details-overlay d-inline-block" open="true">
        <summary class="btn" aria-haspopup="true">
          Dropdown
          <div class="dropdown-caret"></div>
        </summary>
        <div class="SelectMenu">
          <div class="SelectMenu-modal">
            <Story />
          </div>
        </div>
      </details>
    </div>
  )
]

export const ListSingleSelect = ListTemplate.bind({})
ListSingleSelect.storyName = '[Listbox] Single select'
ListSingleSelect.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Select an option',
  role: 'listbox',
  showDividers: false,
  listboxMultiSelect: false,
  children: (
    <>
      <ListItemTemplate text="Option label" listSingleSelect />
      <ListItemTemplate text="Option label" listSingleSelect />
      <ListItemTemplate text="Option label" listSingleSelect />
      <ListItemTemplate text="Option label" listSingleSelect />
      <ListItemTemplate text="Option label" listSingleSelect />
    </>
  )
}

export const ListMultiSelect = ListTemplate.bind({})
ListMultiSelect.storyName = '[Listbox] Multi select'
ListMultiSelect.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Select multiple options',
  role: 'listbox',
  showDividers: false,
  listboxMultiSelect: true,
  children: (
    <>
      <ListItemTemplate text="Option label" listMultiSelect />
      <ListItemTemplate text="Option label" listMultiSelect />
      <ListItemTemplate text="Option label" listMultiSelect />
      <ListItemTemplate text="Option label" listMultiSelect />
      <ListItemTemplate text="Option label" listMultiSelect />
    </>
  )
}

export const List = ListTemplate.bind({})
List.storyName = '[List] Group of links'
List.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Details',
  role: undefined,
  showDividers: false,
  children: (
    <>
      <DividerTemplate title="Details" />
      <ListItemTemplate
        listSemantic
        href="/"
        text="github.com/primer"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        href="/"
        text="MIT License"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        href="/"
        text="256 stars"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>`}
      />
      <ListItemTemplate
        listSemantic
        href="/"
        text="3 forks"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>`}
      />
    </>
  )
}

export const NavWithSubItemsLeadingVisual16pxSubSections = ListTemplate.bind({})
NavWithSubItemsLeadingVisual16pxSubSections.storyName =
  '[Nav] Links + nested collapsible group leadingVisual 16px + sub sections'
NavWithSubItemsLeadingVisual16pxSubSections.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Main menu description',
  role: undefined,
  showDividers: false,
  children: (
    <>
      <ListItemTemplate
        listSemantic
        text="General"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`}
      />
      <DividerTemplate title="Access" id="group-id-1" />
      <ListItemTemplate
        listSemantic
        containsSubItem
        children={
          <ListTemplate
            subGroup
            ariaLabelledBy="group-id-1"
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate
                  listSemantic
                  text="Collaborators"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
                            <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                        </svg>`}
                />
                <ListItemTemplate
                  listSemantic
                  containsSubItem
                  text="Moderation options"
                  //   href="/"
                  collapsible
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
                  <path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>
               </svg>`}
                  children={
                    <ListTemplate
                      containsSubItem
                      subGroup
                      ariaLabel="Sub nav descrioption"
                      children={
                        <>
                          <ListItemTemplate
                            listSemantic
                            subItem
                            text="Interaction limits"
                            href="/"
                            ariaCurrent="page"
                            leadingVisualSize="ActionList-content--visual16"
                            leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-report">
                        <path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 00-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h6.5a.25.25 0 00.25-.25v-9.5a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0114.25 13H8.06l-2.573 2.573A1.457 1.457 0 013 14.543V13H1.75A1.75 1.75 0 010 11.25v-9.5zM9 9a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
                     </svg>`}
                          />
                        </>
                      }
                    />
                  }
                />
                <ListItemTemplate
                  text="Repository roles"
                  listSemantic
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-person">
                  <path fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path>
               </svg>`}
                />
              </>
            }
          />
        }
      />
      <DividerTemplate title="Code & operations" id="group-id-2" />
      <ListItemTemplate
        listSemantic
        containsSubItem
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav descrioption"
            ariaLabelledBy="group-id-2"
            children={
              <>
                <ListItemTemplate
                  listSemantic
                  text="Webhooks"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-broadcast">
                  <path fill-rule="evenodd" d="M3.267 1.457c.3.286.312.76.026 1.06A6.475 6.475 0 001.5 7a6.472 6.472 0 001.793 4.483.75.75 0 01-1.086 1.034 8.89 8.89 0 01-.276-.304l.569-.49-.569.49A7.971 7.971 0 010 7c0-2.139.84-4.083 2.207-5.517a.75.75 0 011.06-.026zm9.466 0a.75.75 0 011.06.026A7.975 7.975 0 0116 7c0 2.139-.84 4.083-2.207 5.517a.75.75 0 11-1.086-1.034A6.475 6.475 0 0014.5 7a6.475 6.475 0 00-1.793-4.483.75.75 0 01.026-1.06zM8.75 8.582a1.75 1.75 0 10-1.5 0v5.668a.75.75 0 001.5 0V8.582zM5.331 4.736a.75.75 0 10-1.143-.972A4.983 4.983 0 003 7c0 1.227.443 2.352 1.177 3.222a.75.75 0 001.146-.967A3.483 3.483 0 014.5 7c0-.864.312-1.654.831-2.264zm6.492-.958a.75.75 0 00-1.146.967c.514.61.823 1.395.823 2.255 0 .86-.31 1.646-.823 2.255a.75.75 0 101.146.967A4.983 4.983 0 0013 7a4.983 4.983 0 00-1.177-3.222z"></path>
               </svg>`}
                />
                <ListItemTemplate
                  listSemantic
                  text="Environments"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-server">
                  <path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v4c0 .372.116.717.314 1a1.742 1.742 0 00-.314 1v4c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0016 12.75v-4c0-.372-.116-.717-.314-1 .198-.283.314-.628.314-1v-4A1.75 1.75 0 0014.25 1H1.75zm0 7.5a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25H1.75zM1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v4a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-4zm5.5 2A.75.75 0 017.75 4h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 4.75zM7.75 10a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM3 4.75A.75.75 0 013.75 4h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 4.75zM3.75 10a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>
               </svg>`}
                />
                <ListItemTemplate
                  listSemantic
                  text="Pages"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-file">
                  <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
               </svg>`}
                />
                <ListItemTemplate
                  listSemantic
                  text="Unpublish GitHub Pages"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plug">
                  <path fill-rule="evenodd" d="M10.276 3.09a.25.25 0 01.192-.09h.782a.25.25 0 01.25.25v8.5a.25.25 0 01-.25.25h-.782a.25.25 0 01-.192-.09l-.95-1.14a.75.75 0 00-.483-.264l-3.124-.39a.25.25 0 01-.219-.249V5.133a.25.25 0 01.219-.248l3.124-.39a.75.75 0 00.483-.265l.95-1.14zM4 8v1.867a1.75 1.75 0 001.533 1.737l2.83.354.761.912c.332.4.825.63 1.344.63h.782A1.75 1.75 0 0013 11.75V11h2.25a.75.75 0 000-1.5H13v-4h2.25a.75.75 0 000-1.5H13v-.75a1.75 1.75 0 00-1.75-1.75h-.782c-.519 0-1.012.23-1.344.63l-.76.913-2.831.353A1.75 1.75 0 004 5.133V6.5H2.5A2.5 2.5 0 000 9v5.25a.75.75 0 001.5 0V9a1 1 0 011-1H4z"></path>
               </svg>`}
                  trailingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert color-icon-danger">
                  <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
               </svg>`}
                />
              </>
            }
          />
        }
      />
    </>
  )
}
NavWithSubItemsLeadingVisual16pxSubSections.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]
