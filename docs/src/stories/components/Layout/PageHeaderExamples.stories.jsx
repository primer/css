import React from 'react'
import clsx from 'clsx'
import {PageHeaderTemplate} from './PageHeader.stories'
import {IssueOpenedIcon, KebabHorizontalIcon} from '@primer/octicons-react'

export default {
  title: 'Components/Layout/Page Header/Examples'
}

export const Actions = PageHeaderTemplate.bind({});
Actions.args = {
  title: 'Webooks',

  hasParentLink: true,
  parentLinkLabel: 'Repository settings',

  actionsChildren: (
    <>
      <button className="btn btn-primary">
        {/* Replace with Primer Primitives viewport ranges */}
        <span className="d-block d-md-none d-lg-none d-xl-none">Add</span>
        <span className="d-none d-md-block d-lg-block d-xl-block">Add webhook</span>
      </button>
    </>
  )
};

export const PageHeaderSettings = PageHeaderTemplate.bind({})
PageHeaderSettings.storyName = 'Repository settings';
PageHeaderSettings.args = {
  // Title
  title: 'General',
  titleVariant: 'title-medium',
  titleTag: 'h1',
  titleInteractiveWhenNarrow: false,

  // Parent link
  hasParentLink: true,
  parentLinkLabel: 'Repository settings',
  parentLinkDisplay: ['narrow'],

  contextBarActionsChildren: (
    <>
      <button className="btn">asd</button>
    </>
  ),

  descriptionChildren: (
    <>
      <div className="d-flex flex-wrap" style={{'gap': '8px'}}>
        <span class="State State--small State--open">
          <IssueOpenedIcon /> Open
        </span>
        <span>
          <a href="#" className="Link--primary text-bold">simurai</a> wants to merge 12 commits into <span className="branch-name">main</span> from <span className="branch-name">pageHeader</span>
        </span>
      </div>
    </>
  ),

  navigationChildren: (
    <>
      <div className="tabnav">
        <nav className="tabnav-tabs" aria-label="Foo bar">
          <a className="tabnav-tab" href="#url" aria-current="page">Foo tab</a>
          <a className="tabnav-tab" href="#url">Bar tab</a>
        </nav>
      </div>
    </>
  ),
};


export const prDetail = PageHeaderTemplate.bind({})
prDetail.storyName = 'Pull request detail';
prDetail.args = {
  // Title
  title: 'PageHeader component',
  titleVariant: 'title-large',
  titleTag: 'h1',
  titleInteractiveWhenNarrow: false,

  // Parent link
  hasParentLink: true,
  parentLinkLabel: 'Issues',
  parentLinkDisplay: ['narrow'],

  actionsChildren: (
    <>
      {/* Replace with new `Narrow` viewport range components */}
      <div className="d-block d-md-none d-lg-none d-xl-none">
        <button className="btn p-1" style={{width: '32px', height: '32px'}}>
          <KebabHorizontalIcon />
        </button>
      </div>

      {/* Replace with `Regular` viewport range components */}
      <div className="d-none d-md-block d-lg-block d-xl-block">
        <button className="btn">Edit</button>
      </div>
    </>
  ),

  descriptionChildren: (
    <>
      <div className="d-flex flex-wrap" style={{'gap': '8px'}}>
        <span class="State State--small State--open">
          <IssueOpenedIcon /> Open
        </span>
        <span>
          <a href="#" className="Link--primary text-bold">simurai</a> wants to merge 12 commits into <span className="branch-name">main</span> from <span className="branch-name">pageHeader</span>
        </span>
      </div>
    </>
  ),

  navigationChildren: (
    <>
      <div className="tabnav">
        <nav className="tabnav-tabs" aria-label="Local">
          <a className="tabnav-tab" href="#url" aria-current="page">Conversation</a>
          <a className="tabnav-tab" href="#url">Commits</a>
          <a className="tabnav-tab" href="#url">Checks</a>
          <a className="tabnav-tab" href="#url">Files changed</a>
        </nav>
      </div>
    </>
  ),
};
