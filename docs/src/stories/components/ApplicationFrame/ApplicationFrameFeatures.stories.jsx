import React from 'react'
import clsx from 'clsx'
import {ApplicationFrameTemplate} from './ApplicationFrame.stories'


export default {
  title: 'Components/ApplicationFrame/Features',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    // layout: 'padded'
    layout: 'fullscreen'
  },
}

export const ThemeableHeader = ApplicationFrameTemplate.bind({})
ThemeableHeader.args = {
  headerTemplate: 'themeable'
}

export const withAlert = ApplicationFrameTemplate.bind({})
withAlert.args = {
  headerTemplate: 'themeable',
  alertType: 'info',
  alertMessage: 'This is an info alert'
}