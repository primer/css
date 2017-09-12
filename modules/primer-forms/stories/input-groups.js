import React from 'react'
import {Octicon} from '../../../.storybook/Octicon'

export default () => (
  <form className="p-4">
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
  </form>
)
