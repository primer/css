import React from 'react'
import {BADGE} from '@geometricpanda/storybook-addon-badges'

export default {
  title: 'Deprecated/FilterList',
  parameters: {
    storyType: 'banner',
    controls: {hideNoControlsWarning: true},
    badges: [BADGE.DEPRECATED],
  },
}

export const Default = () => {
  return (
    <ul className="filter-list">
      <li>
        <a className="filter-item" href="#url" aria-current="page">
          First filter
          <span className="count">21</span>
        </a>
      </li>
      <li>
        <a className="filter-item" href="#url">
          Second filter
          <span className="count">3</span>
        </a>
      </li>
      <li>
        <a className="filter-item" href="#url">
          Third filter
        </a>
      </li>
    </ul>
  )
}
