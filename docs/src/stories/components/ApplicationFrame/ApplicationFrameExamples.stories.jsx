import React from 'react'
import clsx from 'clsx'
import {ApplicationFrameTemplate} from './ApplicationFrame.stories'
import {Settings} from '../Layout/LayoutExamples.stories'


export default {
  title: 'Components/ApplicationFrame/Examples',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    // layout: 'padded'
    layout: 'fullscreen'
  },
}

export const RepoSettings = ApplicationFrameTemplate.bind({})
RepoSettings.args = {
  headerTemplate: 'themeable',
  alertType: 'info',
  bodyChildren: (
    <>
      <Settings {...Settings.args} />
    </>
  ),
}