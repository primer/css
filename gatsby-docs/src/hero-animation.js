import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import heroAnimation from './hero-animation.json'

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  animationData: heroAnimation
}

function HeroAnimation() {
  return <ReactBodymovin options={bodymovinOptions} />
}

export default HeroAnimation
