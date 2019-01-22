import React from 'react'
import dynamic from 'next/dynamic'

export default dynamic(
  () => {
    return import('details-dialog-element').then(() => React.createFactory('details-dialog'))
  },
  {ssr: false}
)
