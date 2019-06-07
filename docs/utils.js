import React from 'react'

import styleguideCSS from '!!file-loader!!raw-loader!../static/github/styleguide.css'
// import styleguideJS from '../static/github/styleguide.js'

export const CommonStyles = () => {
  const sheets = [styleguideCSS]
  return sheets.map(href => <link href={href} rel="stylesheet" key={href} />)
}

export const CommonScripts = () => {
  const scripts = [/* styleguideJS */]
  return scripts.map(href => <script src={href} />)
}
