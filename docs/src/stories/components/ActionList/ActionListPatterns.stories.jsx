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
NavWithSubItems.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  role: 'menu',
  ariaLabel: 'Main menu description',
  showDividers: false,
  children: (
    <>
      <ListItemTemplate text="Nav Item" href="/" />
      <ListItemTemplate text="Nav Item" href="/" />
      <ListItemTemplate text="Nav Item" href="/" />
      <ListItemTemplate
        collapsible
        containsSubItem
        text="Nav Item"
        children={
          <ListTemplate
            role="menu"
            subGroup
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
              </>
            }
          />
        }
      />
    </>
  )
}
NavWithSubItems.argTypes = {
  children: {
    control: false
  },
  role: {
    control: false
  }
}
NavWithSubItems.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const NavWithSubItemsLeadingVisual16px = ListTemplate.bind({})
NavWithSubItemsLeadingVisual16px.args = {
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
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        containsSubItem
        collapsible
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" />
                <ListItemTemplate
                  subItem
                  text="Sub Nav Item"
                  href="/"
                  leadingVisualSize="ActionList-item-content--visual--16"
                  leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
                />
              </>
            }
          />
        }
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
    </>
  )
}
NavWithSubItemsLeadingVisual16px.argTypes = {
  children: {
    control: false
  },
  role: {
    control: false
  }
}
NavWithSubItemsLeadingVisual16px.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const NavWithSubItemsLeadingVisual20px = ListTemplate.bind({})
NavWithSubItemsLeadingVisual20px.args = {
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
        leadingVisualSize="ActionList-item-content--visual--20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
      <ListItemTemplate
        containsSubItem
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" />
                <ListItemTemplate
                  subItem
                  text="Nav Item"
                  href="/"
                  leadingVisualSize="ActionList-item-content--visual--20"
                  leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
                />
              </>
            }
          />
        }
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--20"
        leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
      />
    </>
  )
}
NavWithSubItemsLeadingVisual20px.argTypes = {
  children: {
    control: false
  },
  role: {
    control: false
  }
}
NavWithSubItemsLeadingVisual20px.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const NavWithSubItemsLeadingVisual24px = ListTemplate.bind({})
NavWithSubItemsLeadingVisual24px.args = {
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
        leadingVisualSize="ActionList-item-content--visual--24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
      <ListItemTemplate
        containsSubItem
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav descrioption"
            children={
              <>
                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" />
                <ListItemTemplate
                  subItem
                  text="Nav Item"
                  href="/"
                  leadingVisualSize="ActionList-item-content--visual--24"
                  leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
                />
              </>
            }
          />
        }
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--24"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
      />
    </>
  )
}
NavWithSubItemsLeadingVisual24px.argTypes = {
  children: {
    control: false
  },
  role: {
    control: false
  }
}
NavWithSubItemsLeadingVisual24px.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const NavWithDivider = ListTemplate.bind({})
NavWithDivider.args = {
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
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <DividerTemplate />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
      <ListItemTemplate
        text="Nav Item"
        href="/"
        leadingVisualSize="ActionList-item-content--visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
      />
    </>
  )
}
NavWithDivider.argTypes = {
  children: {
    control: false
  },
  role: {
    control: false
  }
}
NavWithDivider.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const NavWithSectionDivider = ListTemplate.bind({})
NavWithSectionDivider.args = {
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
        // text="Nav Item"
        children={
          <ListTemplate
            ariaLabelledBy="some-unique-id"
            role="menu"
            children={
              <>
                <ListItemTemplate text="Nav Item" href="/" />
                <ListItemTemplate text="Nav Item" href="/" ariaCurrent="page" />
              </>
            }
          />
        }
      />
    </>
  )
}
NavWithSectionDivider.argTypes = {
  children: {
    control: false
  },
  role: {
    control: false
  }
}
NavWithSectionDivider.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const MenuSingleSelect = ListTemplate.bind({})
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

export const MenuMultiSelect = ListTemplate.bind({})
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
