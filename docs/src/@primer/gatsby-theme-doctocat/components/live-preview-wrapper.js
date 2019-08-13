import React from 'react'
import primerStyles from '!!raw-loader!postcss-loader!../../../../../src/index.scss'

function LivePreviewWrapper({children}) {
  return (
    <>
      <style>{primerStyles}</style>
      <link rel="stylesheet" href="https://github.com/site/assets/styleguide.css" />
      <div className="p-3">{children}</div>
    </>
  )
}

export default LivePreviewWrapper
