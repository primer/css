import React from 'react'
import clsx from 'clsx'
import {PageLayoutTemplate} from './PageLayout.stories'
import {SplitPageLayoutTemplate} from './SplitPageLayout.stories'
import {NavRepoSettings, NavDiscussionsPane, ActionListTreeViewTemplate} from '../ActionList/ActionListExamples.stories'
import {LayoutAlphaTemplate} from './LayoutAlpha.stories'

export default {
  title: 'Components/Layout/Beta/Examples'
}

export const Settings = SplitPageLayoutTemplate.bind({});
Settings.storyName = 'Settings';
Settings.parameters = {
  layout: 'fullscreen',
};
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
        <NavRepoSettings {...NavRepoSettings.args} />
      </div>
    </>
  ),

  contentChildren: (
    <>
     <h3 className="f3 text-normal">General</h3>
     <div className="Box mt-3 p-3" style={{minHeight: '200px'}}> </div>
     <div className="Box mt-3 p-3" style={{minHeight: '400px'}}> </div>
     <div className="Box mt-3 p-3" style={{minHeight: '600px'}}> </div>
    </>
  )
};

export const Discussions = PageLayoutTemplate.bind({});
Discussions.parameters = {
  layout: 'fullscreen',
};
Discussions.storyName = 'Discussions';
Discussions.args = {
  responsiveVariant: 'separateRegions',
  panePosition: 'start',
  paneWidth: 'narrow',
  hasHeader: true,
  headerChildren: (
    <>
      <div class="d-block d-md-none">
        <div className="d-flex flex-items-center width-full flex-wrap" style={{gap: '16px'}}>
          <h2 className="h3 ml-2 mr-2 flex-1">All discussions<span class="no-wrap">
            {/*
            I'm using a `no-wrap` class between the heading and the `triangle-down`
            octicon to make sure it won't be ever rendered as a typographic widow
            */}
            </span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path></svg>
          </h2>
          <button class="btn btn-primary">New</button>
          <button class="btn btn-octicon" style={{margin: 0, border: '1px solid var(--color-border-default)', width: '32px', height: '32px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
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
            <button class="BtnGroup-item btn" type="button">New</button>
            <button class="BtnGroup-item btn" type="button">Top</button>
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
        container='xl'
        sidebarPosition='end'
        sidebarWidth='narrow'
        flowRowUntil='lg'
        mainChildren={
          <>
            <div className="Box p-3" style={{minHeight: '800px'}}> </div>
          </>
        }
        sidebarChildren={
          <>
            <div className="Box p-3" style={{minHeight: '200px'}}> </div>
            <div className="Box mt-3 p-3" style={{minHeight: '200px'}}> </div>
          </>
        }
      />
    </>
  )
};

export const IssueDetail = PageLayoutTemplate.bind({});
IssueDetail.storyName = 'Issue detail';
IssueDetail.parameters = {
  layout: 'fullscreen',
};
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
          <svg height="16" class="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg> Open
        </span>
        <span className="color-fg-muted"><strong class="color-fg-default">monalisa</strong> opened this issue 6 days ago</span>
      </div>
    </>
  ),
  contentChildren: (
    <>
      <div className="Box p-3" style={{minHeight: '1200px'}}> </div>
    </>
  ),
  paneChildren: (
    <>
      <div className="Box p-3" style={{minHeight: '140px'}}> </div>
      <div className="Box p-3 mt-3" style={{minHeight: '200px'}}> </div>
      <div className="Box p-3 mt-3" style={{minHeight: '140px'}}> </div>
    </>
  )
};

export const PullDetail = SplitPageLayoutTemplate.bind({});
PullDetail.storyName = 'Pull request detail';
PullDetail.parameters = {
  layout: 'fullscreen',
};
PullDetail.args = {
  padding: 'normal',
  primaryRegion: 'content',
  paneWidth: 'wide',
  paneIsSticky: true,
  contentWidth: 'full',
  hasHeader: true,
  hasFooter: true,
  headerChildren: (
    <>
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
      <nav className="UnderlineNav mt-2" style={{marginBottom: '-17px'}}>
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
    </>
  ),
  contentChildren: (
    <>
      <div className="Box p-3" style={{minHeight: '1200px'}}> </div>
    </>
  ),
  paneChildren: (
    <>
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
