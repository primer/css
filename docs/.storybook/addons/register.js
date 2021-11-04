import React from 'react'
import {addons, types} from '@storybook/addons'

import {ADDON_ID} from './constants'
import {FocusToggle} from './FocusToggle'

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Focus toggle',
    type: types.TOOL,
    match: ({viewMode}) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => <FocusToggle />
  })
})
