import React from 'react'
import dynamic from 'next/dynamic'

const ClipboardCopy = React.createFactory('clipboard-copy')

export default dynamic(
  () => {
    return import('clipboard-copy-element').then(() => ClipboardCopy)
  },
  {
    ssr: false
  }
)
