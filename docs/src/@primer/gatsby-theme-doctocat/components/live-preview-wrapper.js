import React from 'react'
import primerStyles from '!!raw-loader!postcss-loader!../../../../../src/index.scss'

function LivePreviewWrapper({children}) {
  return (
    <>
      <link rel="stylesheet" href="https://github.com/site/assets/styleguide.css" />
      <style>{primerStyles}</style>
      <div className="p-3">{children}</div>
    </>
  )
}

export default LivePreviewWrapper
