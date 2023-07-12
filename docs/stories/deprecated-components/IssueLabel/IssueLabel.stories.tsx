import React from 'react'

export default {
  title: 'Deprecated/IssueLabel',
  parameters: {
    storyType: 'banner',
    controls: {hideNoControlsWarning: true},
  },
}

export const Default = () => {
  return (
    <>
      <span className="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis mr-1">Primer</span>
      <span className="IssueLabel color-bg-danger-emphasis color-fg-on-emphasis mr-1">bug 🐛</span>
      <span className="IssueLabel color-bg-success-emphasis color-fg-on-emphasis mr-1">help wanted</span>
      <span className="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis mr-1">🚂 deploy: train</span>
    </>
  )
}

export const Big = () => {
  return (
    <>
      <span className="IssueLabel IssueLabel--big color-bg-accent-emphasis color-fg-on-emphasis mr-1">Primer</span>
      <span className="IssueLabel IssueLabel--big color-bg-danger-emphasis color-fg-on-emphasis mr-1">bug 🐛</span>
      <span className="IssueLabel IssueLabel--big color-bg-success-emphasis color-fg-on-emphasis mr-1">
        help wanted
      </span>
      <span className="IssueLabel IssueLabel--big color-bg-attention-emphasis color-fg-on-emphasis mr-1">
        🚂 deploy: train
      </span>
    </>
  )
}
