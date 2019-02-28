import React from 'react'
import dynamic from 'next/dynamic'
import animation from './PrimerCSSAnimation.json'

const ReactBodymovin = dynamic(() => import('react-bodymovin'), {
  ssr: false
})

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  animationData: animation
}

const PrimerCSSAnimation = props => <ReactBodymovin options={bodymovinOptions} {...props} />

export default PrimerCSSAnimation
