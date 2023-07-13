import React from 'react'
import {BADGE} from '@geometricpanda/storybook-addon-badges'

export default {
  title: 'Deprecated/Loaders',
  parameters: {
    storyType: 'banner',
    controls: {hideNoControlsWarning: true},
    badges: [BADGE.DEPRECATED],
  },
}

export const Default = () => {
  return (
    <>
      <h2>
        <span>Loading</span>
        <span className="AnimatedEllipsis"></span>
      </h2>
      <span className="branch-name mt-2">
        <span>Loading</span>
        <span className="AnimatedEllipsis"></span>
      </span>
      <span className="Label mt-3">
        <span>Loading</span>
        <span className="AnimatedEllipsis"></span>
      </span>
      <button className="btn mt-3" aria-disabled="true">
        <span>Loading</span>
        <span className="AnimatedEllipsis"></span>
      </button>
    </>
  )
}
