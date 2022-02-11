import React from 'react'
import clsx from 'clsx'
import {PageLayoutTemplate} from './PageLayout.stories'
import {SplitPageLayoutTemplate} from './SplitPageLayout.stories'
import {RepoSettings, DiscussionsPane} from '../NavigationList/NavigationListExamples.stories'
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
  innerSpacing: 'normal',

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
        <DiscussionsPane {...DiscussionsPane.args} />
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
