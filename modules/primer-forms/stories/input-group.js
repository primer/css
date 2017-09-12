import React from 'react'
import {Octicon} from '../../../.storybook/Octicon'

export default () => (
  <div className="input-group">
    <input
      className="form-control"
      type="text"
      placeholder="Username"
      aria-label="Username"
    />
    <span className="input-group-button">
      <button className="btn" type="button" aria-label="Copy to clipboard">
        <Octicon name="clippy" />
      </button>
    </span>
  </div>
)
