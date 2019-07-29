import React from 'react'
// TODO: explain this
import primerStyles from '!!raw-loader!sass-loader!../../../../../src/index.scss'

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
