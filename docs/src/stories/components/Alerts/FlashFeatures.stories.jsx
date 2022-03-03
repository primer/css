import React from 'react'
import clsx from 'clsx'
import {FlashTemplate} from './Flash.stories'


export default {
  title: 'Components/Alerts/Flash/Features',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    // layout: 'padded'
  },
}

export const WithTitleAndAction = FlashTemplate.bind({})
WithTitleAndAction.args = {
  variant: 'error',
  message:
    `<strong>You’ve used 100% of your spending limit.</strong><br />
     To continue using metered services uninterrupted, update your spending limit.`,
  hasAction: true,
  actionChildren: (
    <>
      <button className="btn">Update spending limit</button>
    </>
  )
}

export const WithPrimaryButton = FlashTemplate.bind({})
WithPrimaryButton.args = {
  variant: 'info',
  hasVisual: false,
  message:
    `<strong>vdepizzol</strong> requested your review on this pull request.`,
  hasAction: true,
  actionChildren: (
    <>
      <button className="btn btn-primary">Add your review</button>
    </>
  )
}

export const WithCloseButton = FlashTemplate.bind({})
WithCloseButton.args = {
  variant: 'info',
  message: `The repository default branch has been updated to <strong>main</strong>.`,
  hasCloseButton: true,
}