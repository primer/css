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

const story = storiesOf('Octicons', module)

Object.keys(octicons).forEach(name => {
  story.add(name, () => {
    return (
      <div>
        <Octicon name={name} height="64" />
        <Octicon name={name} height="32" />
        <Octicon name={name} height="16" />
      </div>
    )
  })
})
