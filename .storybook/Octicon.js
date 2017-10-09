import React from 'react'
import {storiesOf} from '@storybook/react'

import octicons from 'octicons'
import SVGInline from 'react-svg-inline'

const Octicon = (props) => {
  const {name} = props
  if (name in octicons) {
    return <SVGInline svg={octicons[name].toSVG(props)} />
  } else {
    throw new Error(`No such octicon: "${name}"!`)
  }
}

const sizes = [64, 32, 16]

storiesOf('Octicons', module)
  .add('test', () => {
    const name = 'beaker'
    return (
      <div>{sizes.map((size, i) => (
        <Octicon name={name} width={size} height={size} key={i} />
      ))}</div>
    )
  })
