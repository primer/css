import React, {useState, memo} from 'react'
import {Icons, IconButton} from '@storybook/components'

export const FocusToggle = memo(() => {
  //   const iframe = document.getElementById('storybook-preview-iframe')
  const [outline, setOutline] = useState(false)
  const toggleOutline = () => setOutline(!outline)

  //   focusMethod = function getFocus() {
  //     iframe.contentWindow.document.getElementsByTagName('button').focus()
  //   }

  return (
    <IconButton key="outline" title="Toggle focus" onClick={toggleOutline}>
      <Icons icon="circlehollow" />
    </IconButton>
  )
})
