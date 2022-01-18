import React from 'react'
import clsx from 'clsx'
import {DividerTemplate} from './ActionListDivider.stories'
import {ListItemTemplate} from './ActionListItem.stories'
import {ListTemplate} from './ActionList.stories'

export default {
  title: 'Components/ActionList/Examples'
}

export const NavRepoSettings = ListTemplate.bind({})
NavRepoSettings.storyName = '[nav] Repository settings'
NavRepoSettings.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Main menu description',
  showDividers: false,
  children: (
    <>
      <ListItemTemplate
        listSemantic
        text="General"
        href="#content"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`}
      />
      <DividerTemplate />
      <DividerTemplate title="Access" id="group-id-1" />
      <ListItemTemplate
        listSemantic
        containsSubItem
        children={
          <ListTemplate
            subGroup
            ariaLabelledBy="group-id-1"
            ariaLabel="Sub nav decription"
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
                  containsSubItem
                  text="Moderation options"
                  listSemantic
                  collapsible
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
                  <path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>
               </svg>`}
                  children={
                    <ListTemplate
                      containsSubItem
                      subGroup
                      ariaLabel="Sub nav decription"
                      children={
                        <>
                          <ListItemTemplate
                            listSemantic
                            subItem
                            text="Interaction limits"
                            href="/"
                            ariaCurrent="page"
                          />
                          <ListItemTemplate listSemantic subItem text="Blocked users" href="/" />
                          <ListItemTemplate listSemantic subItem text="Code review limits" href="/" />
                          <ListItemTemplate listSemantic subItem text="Reported content" href="/" />
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
      <DividerTemplate />
      <DividerTemplate title="Code and automation" id="group-id-2" />
      <ListItemTemplate
        containsSubItem
        listSemantic
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav decription"
            ariaLabelledBy="group-id-2"
            children={
              <>
                <ListItemTemplate
                  text="Branches"
                  listSemantic
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>`}
                />
                <ListItemTemplate
                  text="Actions"
                  listSemantic
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path></svg>`}
                />
                <ListItemTemplate
                  text="Webhooks"
                  listSemantic
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-broadcast">
                  <path fill-rule="evenodd" d="M3.267 1.457c.3.286.312.76.026 1.06A6.475 6.475 0 001.5 7a6.472 6.472 0 001.793 4.483.75.75 0 01-1.086 1.034 8.89 8.89 0 01-.276-.304l.569-.49-.569.49A7.971 7.971 0 010 7c0-2.139.84-4.083 2.207-5.517a.75.75 0 011.06-.026zm9.466 0a.75.75 0 011.06.026A7.975 7.975 0 0116 7c0 2.139-.84 4.083-2.207 5.517a.75.75 0 11-1.086-1.034A6.475 6.475 0 0014.5 7a6.475 6.475 0 00-1.793-4.483.75.75 0 01.026-1.06zM8.75 8.582a1.75 1.75 0 10-1.5 0v5.668a.75.75 0 001.5 0V8.582zM5.331 4.736a.75.75 0 10-1.143-.972A4.983 4.983 0 003 7c0 1.227.443 2.352 1.177 3.222a.75.75 0 001.146-.967A3.483 3.483 0 014.5 7c0-.864.312-1.654.831-2.264zm6.492-.958a.75.75 0 00-1.146.967c.514.61.823 1.395.823 2.255 0 .86-.31 1.646-.823 2.255a.75.75 0 101.146.967A4.983 4.983 0 0013 7a4.983 4.983 0 00-1.177-3.222z"></path>
               </svg>`}
                />
                <ListItemTemplate
                  text="Environments"
                  listSemantic
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-server">
                  <path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v4c0 .372.116.717.314 1a1.742 1.742 0 00-.314 1v4c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0016 12.75v-4c0-.372-.116-.717-.314-1 .198-.283.314-.628.314-1v-4A1.75 1.75 0 0014.25 1H1.75zm0 7.5a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25H1.75zM1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v4a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-4zm5.5 2A.75.75 0 017.75 4h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 4.75zM7.75 10a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM3 4.75A.75.75 0 013.75 4h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 4.75zM3.75 10a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>
               </svg>`}
                />
                <ListItemTemplate
                  text="Pages"
                  listSemantic
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-file">
                  <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
               </svg>`}
                />
              </>
            }
          />
        }
      />
      <DividerTemplate />
      <DividerTemplate title="Security" id="group-id-3" />
      <ListItemTemplate
        containsSubItem
        listSemantic
        children={
          <ListTemplate
            subGroup
            ariaLabel="Sub nav decription"
            ariaLabelledBy="group-id-3"
            children={
              <>
                <ListItemTemplate
                  listSemantic
                  text="Code security and analysis"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.533.133a1.75 1.75 0 00-1.066 0l-5.25 1.68A1.75 1.75 0 001 3.48V7c0 1.566.32 3.182 1.303 4.682.983 1.498 2.585 2.813 5.032 3.855a1.7 1.7 0 001.33 0c2.447-1.042 4.049-2.357 5.032-3.855C14.68 10.182 15 8.566 15 7V3.48a1.75 1.75 0 00-1.217-1.667L8.533.133zm-.61 1.429a.25.25 0 01.153 0l5.25 1.68a.25.25 0 01.174.238V7c0 1.358-.275 2.666-1.057 3.86-.784 1.194-2.121 2.34-4.366 3.297a.2.2 0 01-.154 0c-2.245-.956-3.582-2.104-4.366-3.298C2.775 9.666 2.5 8.36 2.5 7V3.48a.25.25 0 01.174-.237l5.25-1.68zM9.5 6.5a1.5 1.5 0 01-.75 1.3v2.45a.75.75 0 01-1.5 0V7.8A1.5 1.5 0 119.5 6.5z"></path></svg>`}
                />
                <ListItemTemplate
                  listSemantic
                  text="Deploy keys"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path></svg>`}
                />
                <ListItemTemplate
                  listSemantic
                  text="Secrets"
                  href="/"
                  leadingVisualSize="ActionList-content--visual16"
                  leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M0 2.75A2.75 2.75 0 012.75 0h10.5A2.75 2.75 0 0116 2.75v10.5A2.75 2.75 0 0113.25 16H2.75A2.75 2.75 0 010 13.25V2.75zM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25H2.75z"></path><path d="M8 4a.75.75 0 01.75.75V6.7l1.69-.975a.75.75 0 01.75 1.3L9.5 8l1.69.976a.75.75 0 01-.75 1.298L8.75 9.3v1.951a.75.75 0 01-1.5 0V9.299l-1.69.976a.75.75 0 01-.75-1.3L6.5 8l-1.69-.975a.75.75 0 01.75-1.3l1.69.976V4.75A.75.75 0 018 4z"></path></svg>`}
                />
              </>
            }
          />
        }
      />
    </>
  )
}
NavRepoSettings.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const NavDiscussionsPane = ListTemplate.bind({})
NavDiscussionsPane.storyName = '[nav] Discussions pane'
NavDiscussionsPane.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  ariaLabel: 'Categories',
  showDividers: false,
  children: (
    <>
      <ListItemTemplate
        listSemantic
        text="All discussions"
        href="/"
        ariaCurrent={true}
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path></svg>`}
      />
      <DividerTemplate />
      <ListItemTemplate
        listSemantic
        text="Announcements"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`🔔`}
      />
      <ListItemTemplate
        listSemantic
        text="General"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`💬`}
      />
      <ListItemTemplate
        listSemantic
        text="Ideas"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`🏮`}
      />
      <ListItemTemplate
        text="Questions and answers"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`🌻`}
        listSemantic
      />
      <ListItemTemplate
        text="Show and tell"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`👋`}
        listSemantic
      />
      <ListItemTemplate
        listSemantic
        text="Polls"
        href="/"
        leadingVisualSize="ActionList-content--visual16"
        leadingVisual={`🍒`}
      />
    </>
  )
}
NavDiscussionsPane.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const MenuSingleSelect = ListTemplate.bind({})
MenuSingleSelect.storyName = '[menu] Single select milestone'
MenuSingleSelect.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  role: 'menu',
  showDividers: true,
  children: (
    <>
      <ListItemTemplate
        text="Generators support"
        description="June 7 – July 16"
        singleSelect
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path></svg>`}
      />
      <ListItemTemplate
        text="Slot deprecation"
        description="July 15"
        singleSelect
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path></svg>`}
      />
      <ListItemTemplate
        text="Experimental overrides"
        description="Feb 15 – Feb 28"
        singleSelect
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path></svg>`}
      />
      <ListItemTemplate
        text="Preview routes"
        description="Jan 1"
        singleSelect
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path></svg>`}
      />
    </>
  )
}
MenuSingleSelect.decorators = [
  Story => (
    <div>
      <details class="dropdown details-reset details-overlay d-inline-block" open="true">
        <summary class="btn" aria-haspopup="true">
          Milestone
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
MenuMultiSelect.storyName = '[menu] Multi select assignee'
MenuMultiSelect.args = {
  ...ListTemplate.args,
  ...ListItemTemplate.args,
  role: 'menu',
  showDividers: true,
  children: (
    <>
      <ListItemTemplate
        text="simuri"
        description="Simon Luthi"
        descriptionVariant="ActionList-item-descriptionWrap--inline"
        multiSelect
        leadingVisual={`
          <img
            src="https://avatars.githubusercontent.com/u/378023?s=60&amp;v=4"
            class="avatar avatar-user"
            alt="simurai"
            width="20"
            height="20"
            style="border-radius: 50%;"
          ></img>
        `}
      />
      <ListItemTemplate
        text="jonrohan"
        description="Jon Rohan"
        descriptionVariant="ActionList-item-descriptionWrap--inline"
        multiSelect
        leadingVisual={`
          <img
            src="https://avatars.githubusercontent.com/u/54012?s=60&v=4"
            class="avatar avatar-user"
            alt="simurai"
            width="20"
            height="20"
            style="border-radius: 50%;"
          ></img>
        `}
      />
      <ListItemTemplate
        text="vdepizzol"
        description="Vinicius Depizzol"
        descriptionVariant="ActionList-item-descriptionWrap--inline"
        multiSelect
        leadingVisual={`
          <img
            src="https://avatars.githubusercontent.com/u/293280?s=60&v=4"
            class="avatar avatar-user"
            alt="vdepizzol"
            width="20"
            height="20"
            style="border-radius: 50%;"
          ></img>
        `}
      />
      <ListItemTemplate
        text="colebemis"
        description="Cole Bemis"
        descriptionVariant="ActionList-item-descriptionWrap--inline"
        multiSelect
        leadingVisual={`
          <img
            src="https://avatars.githubusercontent.com/u/4608155?s=60&v=4"
            class="avatar avatar-user"
            alt="colebemis"
            width="20"
            height="20"
            style="border-radius: 50%;"
          ></img>
        `}
      />
      <ListItemTemplate
        text="emilybrick"
        description="Emily Brick"
        descriptionVariant="ActionList-item-descriptionWrap--inline"
        multiSelect
        leadingVisual={`
          <img
            src="https://avatars.githubusercontent.com/u/586552?s=60&v=4"
            class="avatar avatar-user"
            alt="emilybrick"
            width="20"
            height="20"
            style="border-radius: 50%;"
          ></img>
        `}
      />
    </>
  )
}
MenuMultiSelect.decorators = [
  Story => (
    <div>
      <details class="dropdown details-reset details-overlay d-inline-block" open="true">
        <summary class="btn" aria-haspopup="true">
          Assignees
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

export const List = ListTemplate.bind({})
List.storyName = '[list] Repo links'
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
        ariaLevel="1"
        listSemantic
        href="/"
        text="github.com/primer"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>`}
      />
      <ListItemTemplate
        ariaLevel="1"
        listSemantic
        href="/"
        text="MIT License"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>`}
      />
      <ListItemTemplate
        ariaLevel="1"
        listSemantic
        href="/"
        text="256 stars"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>`}
      />
      <ListItemTemplate
        ariaLevel="1"
        listSemantic
        href="/"
        text="3 forks"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>`}
      />
    </>
  )
}

const folder = `<svg aria-hidden="true" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path fill-rule="evenodd" d="M2 4.75C2 3.784 2.784 3 3.75 3h4.971c.58 0 1.12.286 1.447.765l1.404 2.063a.25.25 0 00.207.11h8.471c.966 0 1.75.783 1.75 1.75V19.25A1.75 1.75 0 0120.25 21H3.75A1.75 1.75 0 012 19.25V4.75z"></path></svg>`

const file = `<svg aria-hidden="true" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>`

const trailingVisual = `<svg aria-hidden="true" role="img" class="color-fg-attention" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path fill-rule="evenodd" d="M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z"></path></svg>`

export const ActionListTreeViewTemplate = ListTemplate.bind({})
ActionListTreeViewTemplate.storyName = '[tree] Action Tree View'
ActionListTreeViewTemplate.args = {
  role: 'tree',
  ariaLabel: 'Main menu description',
  showDividers: false,
  variant: 'ActionList--tree',
  children: (
    <>
      <ListItemTemplate
        ariaLevel="1"
        ariaSetSize="2"
        ariaPosInset="1"
        treeitem
        containsSubItem
        text="pages"
        collapsibleLeading
        leadingVisual={folder}
        children={
          <ListTemplate
            role="group"
            containsSubItem
            subGroup
            ariaLabel="Sub nav description"
            children={
              <>
                <ListItemTemplate
                  ariaLevel="2"
                  ariaSetSize="3"
                  ariaPosInset="1"
                  subItem
                  treeitem
                  text="file.tsx"
                  href="/"
                  leadingVisual={file}
                  trailingVisual={trailingVisual}
                />
                <ListItemTemplate
                  treeitem
                  ariaLevel="2"
                  ariaSetSize="3"
                  ariaPosInset="2"
                  subItem
                  text="file.tsx"
                  href="/"
                  leadingVisual={file}
                  trailingVisual={trailingVisual}
                />
                <ListItemTemplate
                  treeitem
                  ariaLevel="2"
                  ariaSetSize="3"
                  ariaPosInset="3"
                  truncateItem
                  subItem
                  text="filewithreallylongnamewhoaaaaaaohmy.tsx"
                  href="/"
                  leadingVisual={file}
                  trailingVisual={trailingVisual}
                />
              </>
            }
          />
        }
      />
      <ListItemTemplate
        ariaLevel="1"
        ariaSetSize="2"
        ariaPosInset="2"
        treeitem
        containsSubItem
        text="public"
        collapsibleLeading
        leadingVisual={folder}
        children={
          <ListTemplate
            role="group"
            containsSubItem
            subGroup
            ariaLabel="Sub nav description"
            children={
              <>
                <ListItemTemplate
                  ariaLevel="2"
                  ariaSetSize="2"
                  ariaPosInset="1"
                  treeitem
                  subItem
                  text="file.tsx"
                  href="/"
                  leadingVisual={file}
                  trailingVisual={trailingVisual}
                />
                <ListItemTemplate
                  ariaLevel="2"
                  ariaSetSize="2"
                  ariaPosInset="2"
                  treeitem
                  subItem
                  containsSubItem
                  collapsibleLeading
                  text="fonts"
                  href="/"
                  leadingVisual={folder}
                  trailingVisual={trailingVisual}
                  children={
                    <ListTemplate
                      role="group"
                      containsSubItem
                      subGroup
                      ariaLabel="Sub nav description"
                      children={
                        <>
                          <ListItemTemplate
                            ariaLevel="3"
                            ariaSetSize="2"
                            ariaPosInset="1"
                            subItem
                            treeitem
                            containsSubItem
                            collapsibleLeading
                            text="Inter"
                            href="/"
                            leadingVisual={folder}
                            trailingVisual={trailingVisual}
                            children={
                              <ListTemplate
                                role="group"
                                containsSubItem
                                subGroup
                                ariaLabel="Sub nav description"
                                children={
                                  <>
                                    <ListItemTemplate
                                      ariaLevel="4"
                                      ariaSetSize="4"
                                      ariaPosInset="1"
                                      subItem
                                      treeitem
                                      text="file.tsx"
                                      href="/"
                                      leadingVisual={file}
                                      trailingVisual={trailingVisual}
                                    />
                                    <ListItemTemplate
                                      ariaLevel="4"
                                      ariaSetSize="4"
                                      ariaPosInset="2"
                                      subItem
                                      treeitem
                                      text="file.tsx"
                                      href="/"
                                      leadingVisual={file}
                                      trailingVisual={trailingVisual}
                                    />
                                    <ListItemTemplate
                                      ariaLevel="4"
                                      ariaSetSize="4"
                                      ariaPosInset="3"
                                      subItem
                                      treeitem
                                      text="file.tsx"
                                      href="/"
                                      leadingVisual={file}
                                      trailingVisual={trailingVisual}
                                    />
                                    <ListItemTemplate
                                      ariaLevel="4"
                                      ariaSetSize="4"
                                      ariaPosInset="4"
                                      treeitem
                                      subItem
                                      containsSubItem
                                      collapsibleLeading
                                      text="fonts"
                                      href="/"
                                      leadingVisual={folder}
                                      trailingVisual={trailingVisual}
                                      children={
                                        <ListTemplate
                                          role="group"
                                          containsSubItem
                                          subGroup
                                          ariaLabel="Sub nav description"
                                          children={
                                            <>
                                              <ListItemTemplate
                                                ariaLevel="5"
                                                ariaSetSize="3"
                                                ariaPosInset="1"
                                                subItem
                                                treeitem
                                                containsSubItem
                                                collapsibleLeading
                                                text="Inter"
                                                href="/"
                                                leadingVisual={folder}
                                                trailingVisual={trailingVisual}
                                                children={
                                                  <ListTemplate
                                                    role="group"
                                                    containsSubItem
                                                    subGroup
                                                    ariaLabel="Sub nav description"
                                                    children={
                                                      <>
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          ariaSetSize="3"
                                                          ariaPosInset="1"
                                                          subItem
                                                          treeitem
                                                          text="file.tsx"
                                                          href="/"
                                                          leadingVisual={file}
                                                          trailingVisual={trailingVisual}
                                                        />
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          ariaSetSize="3"
                                                          ariaPosInset="2"
                                                          subItem
                                                          treeitem
                                                          text="file.tsx"
                                                          href="/"
                                                          leadingVisual={file}
                                                          trailingVisual={trailingVisual}
                                                        />
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          ariaSetSize="3"
                                                          ariaPosInset="3"
                                                          subItem
                                                          treeitem
                                                          text="file.tsx"
                                                          href="/"
                                                          leadingVisual={file}
                                                          trailingVisual={trailingVisual}
                                                        />
                                                      </>
                                                    }
                                                  />
                                                }
                                              />
                                              <ListItemTemplate
                                                ariaLevel="5"
                                                ariaSetSize="3"
                                                ariaPosInset="2"
                                                subItem
                                                treeitem
                                                text="filex.tsx"
                                                href="/"
                                                leadingVisual={file}
                                                trailingVisual={trailingVisual}
                                              />
                                              <ListItemTemplate
                                                ariaLevel="5"
                                                ariaSetSize="3"
                                                ariaPosInset="3"
                                                treeitem
                                                subItem
                                                containsSubItem
                                                treeitem
                                                collapsibleLeading
                                                text="fonts"
                                                href="/"
                                                leadingVisual={folder}
                                                trailingVisual={trailingVisual}
                                                children={
                                                  <ListTemplate
                                                    role="group"
                                                    containsSubItem
                                                    subGroup
                                                    ariaLabel="Sub nav description"
                                                    children={
                                                      <>
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          ariaSetSize="3"
                                                          ariaPosInset="1"
                                                          subItem
                                                          treeitem
                                                          containsSubItem
                                                          collapsibleLeading
                                                          text="Inter"
                                                          href="/"
                                                          leadingVisual={folder}
                                                          trailingVisual={trailingVisual}
                                                          children={
                                                            <ListTemplate
                                                              role="group"
                                                              containsSubItem
                                                              subGroup
                                                              ariaLabel="Sub nav description"
                                                              children={
                                                                <>
                                                                  <ListItemTemplate
                                                                    ariaLevel="7"
                                                                    ariaSetSize="3"
                                                                    ariaPosInset="1"
                                                                    subItem
                                                                    treeitem
                                                                    text="file.tsx"
                                                                    href="/"
                                                                    leadingVisual={file}
                                                                    trailingVisual={trailingVisual}
                                                                  />
                                                                  <ListItemTemplate
                                                                    ariaLevel="7"
                                                                    ariaSetSize="3"
                                                                    ariaPosInset="2"
                                                                    subItem
                                                                    treeitem
                                                                    text="file.tsx"
                                                                    href="/"
                                                                    leadingVisual={file}
                                                                    trailingVisual={trailingVisual}
                                                                  />
                                                                  <ListItemTemplate
                                                                    ariaLevel="7"
                                                                    ariaSetSize="3"
                                                                    ariaPosInset="3"
                                                                    subItem
                                                                    treeitem
                                                                    text="file.tsx"
                                                                    href="/"
                                                                    leadingVisual={file}
                                                                    trailingVisual={trailingVisual}
                                                                  />
                                                                </>
                                                              }
                                                            />
                                                          }
                                                        />
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          ariaSetSize="3"
                                                          ariaPosInset="2"
                                                          subItem
                                                          treeitem
                                                          text="file3.tsx"
                                                          href="/"
                                                          leadingVisual={file}
                                                          trailingVisual={trailingVisual}
                                                        />
                                                        <ListItemTemplate
                                                          ariaLevel="6"
                                                          ariaSetSize="3"
                                                          ariaPosInset="3"
                                                          treeitem
                                                          subItem
                                                          containsSubItem
                                                          treeitemtreeitem
                                                          collapsibleLeading
                                                          text="fonts"
                                                          href="/"
                                                          leadingVisual={folder}
                                                          trailingVisual={trailingVisual}
                                                          children={
                                                            <ListTemplate
                                                              role="group"
                                                              containsSubItem
                                                              subGroup
                                                              ariaLabel="Sub nav description"
                                                              children={
                                                                <>
                                                                  <ListItemTemplate
                                                                    ariaLevel="7"
                                                                    ariaSetSize="2"
                                                                    ariaPosInset="1"
                                                                    subItem
                                                                    treeitem
                                                                    containsSubItem
                                                                    collapsibleLeading
                                                                    text="Inter"
                                                                    href="/"
                                                                    leadingVisual={folder}
                                                                    trailingVisual={trailingVisual}
                                                                    children={
                                                                      <ListTemplate
                                                                        role="group"
                                                                        containsSubItem
                                                                        subGroup
                                                                        ariaLabel="Sub nav description"
                                                                        children={
                                                                          <>
                                                                            <ListItemTemplate
                                                                              ariaLevel="8"
                                                                              ariaSetSize="3"
                                                                              ariaPosInset="1"
                                                                              subItem
                                                                              treeitem
                                                                              text="file.tsx"
                                                                              href="/"
                                                                              leadingVisual={file}
                                                                              trailingVisual={trailingVisual}
                                                                            />
                                                                            <ListItemTemplate
                                                                              ariaLevel="8"
                                                                              ariaSetSize="3"
                                                                              ariaPosInset="2"
                                                                              subItem
                                                                              treeitem
                                                                              text="file.tsx"
                                                                              href="/"
                                                                              leadingVisual={file}
                                                                              trailingVisual={trailingVisual}
                                                                            />
                                                                            <ListItemTemplate
                                                                              ariaLevel="8"
                                                                              ariaSetSize="3"
                                                                              ariaPosInset="3"
                                                                              subItem
                                                                              treeitemtreeitem
                                                                              text="file.tsx"
                                                                              href="/"
                                                                              leadingVisual={file}
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
                                  </>
                                }
                              />
                            }
                          />
                          <ListItemTemplate
                            ariaLevel="3"
                            ariaSetSize="2"
                            ariaPosInset="2"
                            treeitem
                            subItem
                            text="file.tsx"
                            href="/"
                            leadingVisual={file}
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
  )
}

export const MenuContextMenu = ListTemplate.bind({})
MenuContextMenu.storyName = '[menu] Context menu'
MenuContextMenu.args = {
  role: 'menu',
  ariaLabel: 'Main menu description',
  showDividers: false,
  children: (
    <>
      <ListItemTemplate onClick={() => alert('Hello!')} text="Copy link" trailingVisual={`⌘⇧C`} menuItem />
      <ListItemTemplate onClick={() => alert('Hello!')} text="Quote reply" trailingVisual={`⌘⇧R`} menuItem />
      <ListItemTemplate onClick={() => alert('Hello!')} text="Edit comment" menuItem />
      <DividerTemplate menuItem />
      <ListItemTemplate
        onClick={() => alert('Hello!')}
        text="Delete comment"
        variant="ActionList-item--danger"
        menuItem
      />
    </>
  )
}
MenuContextMenu.decorators = [
  Story => (
    <details class="details-overlay details-reset position-relative d-inline-block" open="">
      <summary class="timeline-comment-action Link--secondary btn-link" aria-haspopup="menu" role="button">
        <svg
          aria-label="Show options"
          role="img"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="octicon octicon-kebab-horizontal"
        >
          <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
      </summary>
      <span className="dropdown-menu dropdown-menu-se">
        <Story />
      </span>
    </details>
  )
]
