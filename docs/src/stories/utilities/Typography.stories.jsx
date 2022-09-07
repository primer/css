import React from 'react'

export default {
  title: 'Utilities/Typography',
  layout: 'padded'
}

// build every component case here in the template (private api)
export const SemanticScale = () => (
  <div>
    <h1>Heading one</h1>
    <h2>Heading two</h2>
    <h3>Heading three</h3>
    <h4>Heading four</h4>
    <h5>Heading five</h5>
    <h6>Heading six</h6>
  </div>
)

export const ResponsiveUtilities = () => (
  <div>
    <h1 class="h1">Heading one</h1>
    <h2 class="h2">Heading two</h2>
    <h3 class="h3">Heading three</h3>
    <h4 class="h4">Heading four</h4>
    <h5 class="h5">Heading five</h5>
    <h6 class="h6">Heading six</h6>
  </div>
)

export const ResponsiveUtilitiesNoWeight = () => (
  <div>
    <h1 class="f1">Heading one</h1>
    <h2 class="f2">Heading two</h2>
    <h3 class="f3">Heading three</h3>
    <h4 class="f4">Heading four</h4>
    <h5 class="f5">Heading five</h5>
    <h6 class="f6">Heading six</h6>
  </div>
)

export const ResponsiveUtilitiesLightWeight = () => (
  <div>
    <h1 class="f1-light">Heading one</h1>
    <h2 class="f2-light">Heading two</h2>
    <h3 class="f3-light">Heading three</h3>
    <h4 class="f4-light">Heading four</h4>
    <h5 class="f5-light">Heading five</h5>
    <h6 class="f6-light">Heading six</h6>
  </div>
)
