import React from 'react'
import clsx from 'clsx'
import { PageLayoutTemplate } from './PageLayout.stories'
import {SplitPageLayoutTemplate} from './SplitPageLayout.stories'
import {RepoSettings, DiscussionsPane} from '../ActionList/ActionListExamples.stories'
import {LayoutAlphaTemplate} from './LayoutAlpha.stories'

export default {
  title: 'Components/Layout/Beta/Patterns'
}

export const Settings = SplitPageLayoutTemplate.bind({});
Settings.storyName = 'Settings';
Settings.parameters = {
  layout: 'fullscreen',
};
Settings.args = {
  // Structure
  innerSpacing: 'normal',

  // Responsive
  responsivePrimaryRegion: 'content',

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
  panePosition: 'start',
  paneWidth: 'narrow',
  hasHeader: true,
  headerChildren: (
    <>
      <div className="d-flex flex-items-center width-full flex-wrap" style={{gap: '8px'}}>
        <input className="form-control flex-1" placeholder="Search discussions" />

        <div class="BtnGroup d-block">
          <button class="BtnGroup-item btn" type="button">New</button>
          <button class="BtnGroup-item btn" type="button">Top</button>
        </div>

        <button class="btn">Labels</button>

        <button class="btn btn-primary">New discussion</button>
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
        container='xl'

        // FIXME Layout alpha attributes

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
