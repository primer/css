import React from 'react'
import heroAnimation from './hero-animation.json'
import {ReactComponent as HeroIllustration} from './hero-illustration.svg'

const ReactBodymovin = React.lazy(() => import('react-bodymovin'))

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  animationData: heroAnimation
}

function HeroAnimation() {
  return (
    <React.Suspense fallback={<HeroIllustration />}>
      <ReactBodymovin options={bodymovinOptions} />
    </React.Suspense>
  )
}

export default HeroAnimation
