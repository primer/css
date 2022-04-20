import React from 'react'
import clsx from 'clsx'
import {PageLayoutTemplate} from './PageLayout.stories'
import {SplitPageLayoutTemplate} from './SplitPageLayout.stories'
import {ActionListTreeViewTemplate} from '../../ui-patterns/ActionList/ActionListTree.stories'
import {RepoSettings, NavDiscussionsPane} from '../NavigationList/NavigationListExamples.stories'
import {LayoutAlphaTemplate} from './LayoutAlpha.stories'

export default {
  title: 'Components/Layout/Beta/Examples'
}

export const Settings = SplitPageLayoutTemplate.bind({})
Settings.storyName = 'Settings'
Settings.parameters = {
  layout: 'fullscreen'
}
Settings.args = {
  // Structure
  padding: 'normal',

  // Responsive
  primaryRegion: 'pane',

  // Pane
  paneWidth: 'wide',
  paneIsSticky: true,

  // Content
  contentWidth: 'md',

  paneChildren: (
    <>
      <h2 className="h3 ml-2 mr-2">Repository settings</h2>
      <div className="ml-n2 mr-n2">
        <RepoSettings {...RepoSettings.args} />
      </div>
    </>
  ),

  contentChildren: (
    <>
      <h3 className="f3 text-normal">General</h3>
      <div className="Box mt-3 p-3" style={{minHeight: '200px'}}>
        {' '}
      </div>
      <div className="Box mt-3 p-3" style={{minHeight: '400px'}}>
        {' '}
      </div>
      <div className="Box mt-3 p-3" style={{minHeight: '600px'}}>
        {' '}
      </div>
    </>
  )
}

export const Discussions = PageLayoutTemplate.bind({})
Discussions.parameters = {
  layout: 'fullscreen'
}
Discussions.storyName = 'Discussions'
Discussions.args = {
  responsiveVariant: 'separateRegions',
  panePosition: 'start',
  paneWidth: 'narrow',
  hasHeader: true,
  headerChildren: (
    <>
      <div class="d-block d-md-none">
        <div className="d-flex flex-items-center width-full flex-wrap" style={{gap: '16px'}}>
          <h2 className="h3 ml-2 mr-2 flex-1">
            All discussions
            <span class="no-wrap">
              {/*
            I'm using a `no-wrap` class between the heading and the `triangle-down`
            octicon to make sure it won't be ever rendered as a typographic widow
            */}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
              <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
            </svg>
          </h2>
          <button class="btn btn-primary">New</button>
          <button
            class="btn btn-octicon"
            style={{margin: 0, border: '1px solid var(--color-border-default)', width: '32px', height: '32px'}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
              <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </div>
        <div className="mt-3">
          <input className="form-control flex-1 width-full" placeholder="Search discussions" />
        </div>
      </div>
      <div className="hide-md hide-sm">
        <div className="d-flex flex-items-center width-full flex-wrap" style={{gap: '8px'}}>
          <input className="form-control flex-1" placeholder="Search discussions" />

          <div class="BtnGroup d-block">
            <button class="BtnGroup-item btn" type="button">
              New
            </button>
            <button class="BtnGroup-item btn" type="button">
              Top
            </button>
          </div>

          <button class="btn">Labels</button>

          <button class="btn btn-primary">New discussion</button>
        </div>
      </div>
    </>
  ),

  paneChildren: (
    <>
      <div className="ml-n2 mr-n2 mt-n2 mb-n2">
        <NavDiscussionsPane {...NavDiscussionsPane.args} />
      </div>
    </>
  ),

  contentChildren: (
    <>
      <LayoutAlphaTemplate
        container="xl"
        sidebarPosition="end"
        sidebarWidth="narrow"
        flowRowUntil="lg"
        mainChildren={
          <>
            <div className="Box p-3" style={{minHeight: '800px'}}>
              {' '}
            </div>
          </>
        }
        sidebarChildren={
          <>
            <div className="Box p-3" style={{minHeight: '200px'}}>
              {' '}
            </div>
            <div className="Box mt-3 p-3" style={{minHeight: '200px'}}>
              {' '}
            </div>
          </>
        }
      />
    </>
  )
}

export const IssueDetail = PageLayoutTemplate.bind({})
IssueDetail.storyName = 'Issue detail'
IssueDetail.parameters = {
  layout: 'fullscreen'
}
IssueDetail.args = {
  panePosition: 'end',
  paneWidth: 'default',
  hasHeader: true,
  hasHeaderDivider: true,
  headerDividerWhenNarrow: 'filled',
  paneDividerWhenNarrow: 'filled',
  headerChildren: (
    <>
      <h2 className="f2">
        Traverse does not calculate scope in object deconstructor
        <span className="f2-light color-fg-muted"> #14024</span>
      </h2>
      <div className="d-flex flex-items-center flex-wrap mt-2" style={{gap: '8px'}}>
        <span title="Status: Open" class="State State--open">
          <svg
            height="16"
            class="octicon octicon-issue-opened"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            <path
              fill-rule="evenodd"
              d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
            ></path>
          </svg>{' '}
          Open
        </span>
        <span className="color-fg-muted">
          <strong class="color-fg-default">monalisa</strong> opened this issue 6 days ago
        </span>
      </div>
    </>
  ),
  contentChildren: (
    <>
      <div className="Box p-3" style={{minHeight: '1200px'}}>
        {' '}
      </div>
    </>
  ),
  paneChildren: (
    <>
      <div className="Box p-3" style={{minHeight: '140px'}}>
        {' '}
      </div>
      <div className="Box p-3 mt-3" style={{minHeight: '200px'}}>
        {' '}
      </div>
      <div className="Box p-3 mt-3" style={{minHeight: '140px'}}>
        {' '}
      </div>
    </>
  )
}

export const PullDetail = SplitPageLayoutTemplate.bind({});
PullDetail.storyName = 'Pull request detail';
PullDetail.parameters = {
  layout: 'fullscreen',
};
PullDetail.args = {
  padding: 'none',
  primaryRegion: 'content',
  paneWidth: 'wide',
  paneIsSticky: true,
  contentWidth: 'full',
  hasHeader: true,
  hasFooter: true,
  headerChildren: (
    <>
      <div className="mt-3 mx-3">
        <h2 className="f2">
          Traverse does not calculate scope in object deconstructor
          <span className="f2-light color-fg-muted"> #14024</span>
        </h2>
        <div className="d-flex flex-items-center flex-wrap mt-2" style={{gap: '8px'}}>
          <span title="Status: Open" class="State State--open">
            <svg height="16" class="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg> Open
          </span>
          <span className="color-fg-muted"><strong class="color-fg-default">monalisa</strong> opened this issue 6 days ago</span>
        </div>
        <nav className="UnderlineNav ml-n2 mt-2" style={{marginBottom: '-1px'}}>
          <div className="UnderlineNav-body" role="tablist">
            <button className="UnderlineNav-item" role="tab" type="button">
              <svg className="UnderlineNav-octicon octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path></svg>
              Conversation
            </button>
            <button className="UnderlineNav-item" role="tab" type="button">
              <svg className="UnderlineNav-octicon octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path></svg>
              Commits
            </button>
            <button className="UnderlineNav-item" role="tab" type="button">
              <svg className="UnderlineNav-octicon octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.5 1.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v7.736a.75.75 0 101.5 0V1.75A1.75 1.75 0 0011.25 0h-8.5A1.75 1.75 0 001 1.75v11.5c0 .966.784 1.75 1.75 1.75h3.17a.75.75 0 000-1.5H2.75a.25.25 0 01-.25-.25V1.75zM4.75 4a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM4 7.75A.75.75 0 014.75 7h2a.75.75 0 010 1.5h-2A.75.75 0 014 7.75zm11.774 3.537a.75.75 0 00-1.048-1.074L10.7 14.145 9.281 12.72a.75.75 0 00-1.062 1.058l1.943 1.95a.75.75 0 001.055.008l4.557-4.45z"></path></svg>
              Checks
            </button>
            <button className="UnderlineNav-item" role="tab" type="button" aria-selected="true">
              <svg className="UnderlineNav-octicon octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V4.664a.25.25 0 00-.073-.177l-2.914-2.914a.25.25 0 00-.177-.073H2.75zM1 1.75C1 .784 1.784 0 2.75 0h7.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V1.75zm7 1.5a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0V7h-1.5a.75.75 0 010-1.5h1.5V4A.75.75 0 018 3.25zm-3 8a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"></path></svg>
              Files changed
              <span class="Counter">12</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  ),
  contentChildren: (
    <>
      <div className="m-3">
        <div className="d-flex flex-row flex-justify-end" style={{gap: '16px'}}>
          <button class="btn btn-primary" type="button" style={{paddingInline: '12px'}}>
            Review changes
            <span class="dropdown-caret ml-2"></span>
          </button>
          <button class="btn px-2" type="button">
            <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </button>
        </div>
        <div className="Box mt-3 p-3" style={{minHeight: '600px'}}> </div>
        <div className="Box mt-3 p-3" style={{minHeight: '600px'}}> </div>
        <div className="Box mt-3 p-3" style={{minHeight: '600px'}}> </div>
        <div className="Box mt-3 p-3" style={{minHeight: '600px'}}> </div>
      </div>
    </>
  ),
  paneChildren: (
    <>
      <div className="position-sticky top-0 p-3 color-bg-default" style={{zIndex: 2}}>
        <div className="d-flex flex-justify-between" style={{gap: '16px'}}>
          <button className="btn" type="button" style={{paddingInline: '12px'}}>
            <span className="text-normal color-fg-muted">Show:</span> all changes
            <span className="dropdown-caret ml-2"></span>
          </button>

          <button className="btn btn-octicon p-2 mr-n2">
            <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.177 7.823l2.396-2.396A.25.25 0 017 5.604v4.792a.25.25 0 01-.427.177L4.177 8.177a.25.25 0 010-.354z"></path><path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25H9.5v-13H1.75zm12.5 13H11v-13h3.25a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25z"></path></svg>
          </button>
        </div>
        <div className="mt-3">
          <input class="form-control input-block" type="text" placeholder="Filter changed files" />
        </div>
      </div>
      <ActionListTreeViewTemplate {...ActionListTreeViewTemplate.args} />
      {/* <div className="Box p-3" style={{minHeight: '140px'}}> </div>
      <div className="Box p-3 mt-3" style={{minHeight: '200px'}}> </div>
      <div className="Box p-3 mt-3" style={{minHeight: '140px'}}> </div> */}
    </>
  ),
  footerChildren: (
    <>
      footer
    </>
  )
};
