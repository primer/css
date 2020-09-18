import React from 'react'
import primerStyles from '!!raw-loader!postcss-loader!../../../../../src/index.scss'
import {Frame} from '@primer/gatsby-theme-doctocat'

function LivePreviewWrapper({children}) {
  const [colorMode, setColorMode] = React.useState('light')

  return (
    <Frame>
      <link rel="stylesheet" href="https://github.com/site/assets/styleguide.css" />
      <style>{primerStyles}</style>
      <div data-color-mode={colorMode}>
        <button className="btn btn-sm" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
          Toggle
        </button>
        <div className="frame-example p-3">{children}</div>
      </div>
    </Frame>
  )
}

export default LivePreviewWrapper
