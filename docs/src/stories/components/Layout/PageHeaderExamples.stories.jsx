import React from 'react'
import clsx from 'clsx'
import {PageHeaderTemplate} from './PageHeader.stories'

export default {
  title: 'Components/Layout/Page Header/Examples'
}

export const PageHeaderSettings = PageHeaderTemplate.bind({})
PageHeaderSettings.storyName = 'Repository settings';
// PageHeaderSettings.parameters = {
//   layout: 'fullscreen'
// }
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
  )
};

