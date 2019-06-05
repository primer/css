---
title: CSS
path: /
---

import {Box, Flex, Heading, Link, Text} from '@primer/components'
import {
  PrimerCSSAnimation,
  MetaPackageBox,
  PrimerPackageBox,
  PrimitivesOverview,
  StylesOverview
} from '../../docs/landing'
import {CONTENT_MAX_WIDTH} from '../../docs/constants'
import {name, version} from '../../package.json'
import {bundles} from '../../dist/meta.json'

export const Hero = () => (
  <Box bg="black">
    <Box maxWidth={CONTENT_MAX_WIDTH} p={6} mx="auto" mb={3}>
      <Box mt={4} mb={4}>
        <Heading color="blue.4" fontSize={7} pb={3} m={0}>
          Primer CSS
        </Heading>
        <Text as="div" color="blue.2" fontSize={2} mb={4}>
          v{version}
        </Text>
        <Box as={PrimerCSSAnimation} mb={6} />
      </Box>
    </Box>
  </Box>
)

# Introduction

Our goal is to create a system that enables us to build consistent user experiences with ease, yet with enough flexibility to support the broad spectrum of GitHub websites. This goal is embedded in our design and code decisions. Our approach to CSS is influenced by Object Oriented CSS principles, functional CSS, and BEM architecture.

## Highly reusable, flexible styles

Styles can be mixed and matched to achieve many different layouts, independent of their location. These styles fall into three categories:

<StylesOverview m={6} />

## Systematically designed for GitHub

Primer CSS is built upon systems that form the foundation of our styles such as spacing, typography, and color. This systematic approach helps ensure our styles are consistent and interoperable with each other.

<PrimitivesOverview />

## Structure
Primer CSS is published to [npm] as [@primer/css]. Each of Primer CSS's "modules" lives in a subfolder under `src/` with an `index.scss` in it. Generally speaking, the styles are divided into three primary themes:

* **Core** styles (in `core/`) are common dependencies, which include support variables, native element and typography styles, buttons, navigation, tooltips, etc.
* **Product** styles (in `product/`) are specific to github.com, and include components such as avatars, labels, markdown styles, popovers, and progress indicators.
* **Marketing** styles (in `marketing/`) are specific to GitHub marketing efforts, including international and event-focused sites as well as the more design-heavy feature pages on github.com. Marketing styles include new colors and button styles, and extend the core typography and whitespace scales.

<div class="bg-gray py-6">
  <div class="d-flex flex-wrap flex-md-nowrap px-6 gutter-lg">
    <div class="col-12 col-md-9 pr-0 pr-lg-2">
      <h3 class="f3 text-normal m-0">Use Primer CSS in your project</h3>
      <p class="my-3">Pick and choose what you need. Install the entire Primer CSS bundle or import individual folders.</p>
      <a href="/css/getting-started" class="btn btn-outline">Installation instructions</a>
    </div>
  </div>
</div>
