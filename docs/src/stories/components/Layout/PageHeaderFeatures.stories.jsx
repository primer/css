import React from 'react'
import clsx from 'clsx'
import {PageHeaderTemplate} from './PageHeader.stories'
import {CheckCircleFillIcon, GitBranchIcon, KebabHorizontalIcon} from '@primer/octicons-react'

export default {
  title: 'Components/Layout/Page Header/Features'
}

export const TitleOnly = PageHeaderTemplate.bind({});
TitleOnly.args = {
  title: 'Webhooks',
};

export const TitleWithParentLinkWhenNarrow = PageHeaderTemplate.bind({});
TitleWithParentLinkWhenNarrow.args = {
  title: 'Webhooks',

  hasParentLink: true,
  parentLinkLabel: 'Repository settings',
};

export const TitleWithLeadingVisual = PageHeaderTemplate.bind({});
TitleWithLeadingVisual.args = {
  title: 'main',

  hasLeadingVisual: true,
  leadingVisualChildren: (
    <GitBranchIcon />
  ),

  hasParentLink: true,
  parentLinkLabel: 'Branches',
};

export const TitleWithSingleAction = PageHeaderTemplate.bind({});
TitleWithSingleAction.args = {
  title: 'Webhooks',

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
  ),
};

export const TitleWithMultipleActions = PageHeaderTemplate.bind({});
TitleWithMultipleActions.args = {
  title: 'Project title',

  hasParentLink: true,
  parentLinkLabel: 'Repository settings',

  actionsChildren: (
    <>
      {/* Replace with new `Narrow` viewport range components */}
      <div className="d-block d-md-none d-lg-none d-xl-none">
        {/* Replace with IconButton */}
        <button className="btn p-1" style={{width: '32px', height: '32px'}}>
          <KebabHorizontalIcon />
        </button>
      </div>

      {/* Replace with `Regular` viewport range components */}
      <div className="d-none d-md-block d-lg-block d-xl-block">
        {/* Replace with ActionBar */}
        <div className="d-flex" style={{'gap': '8px'}}>
          <button className="btn">Re-run all jobs</button>
          {/* Replace with IconButton */}
          <button className="btn p-1" style={{width: '32px', height: '32px'}}>
            <KebabHorizontalIcon />
          </button>
        </div>
      </div>
    </>
  ),
};

export const InteractiveTitleWhenNarrow = PageHeaderTemplate.bind({});
InteractiveTitleWhenNarrow.args = {
  title: 'Issues',
  titleIsInteractiveWhenNarrow: true,
  hasParentLink: false,
};