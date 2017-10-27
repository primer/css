import React from 'react'
import {storiesOf} from '@storybook/react'
import octicons from 'octicons'

export const Octicon = (props) => {
  const {name} = props
  if (name in octicons) {
    const svg = octicons[name].toSVG(props)
    return <span dangerouslySetInnerHTML={ {__html: svg } }  />
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
