import React from 'react'
import primerStyles from '!!raw-loader!postcss-loader!../../../../../src/index.scss'
import {Frame} from '@primer/gatsby-theme-doctocat'

function LivePreviewWrapper({children}) {
  return (
    <Frame>
      <link rel="stylesheet" href="https://github.com/site/assets/styleguide.css" />
      <style>{primerStyles}</style>
      <div className="p-3">{children}</div>
    </Frame>
  )
}

export default LivePreviewWrapper
