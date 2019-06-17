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

## Primer CSS bundles

Each component or group of styles is distributed via npm as a separate CSS file, or "bundle". We also distribute "meta-packages" for core (shared) elements, product-specific (github.com) styles, and marketing.

<PrimerPackageBox meta={bundles.primer} count={Object.keys(bundles).length - 1} mb={4} />

<Flex justifyContent="space-around" mb={6}>
  <MetaPackageBox title="Core" meta={bundles.core} width={1/3}>
    The core bundle contains styles that are shared between GitHub product and marketing websites.
  </MetaPackageBox>
  <MetaPackageBox title="Product" meta={bundles.product} width={1/3}>
    The product bundle contains styles that are used on GitHub product websites.
  </MetaPackageBox>
  <MetaPackageBox title="Marketing" meta={bundles.marketing} width={1/3}>
    The marketing bundle contains styles that are used on GitHub marketing websites.
  </MetaPackageBox>
</Flex>


<div className="bg-gray py-6">
  <div className="d-flex flex-wrap flex-md-nowrap px-6 gutter-lg">
    <div className="col-12 col-md-9 pr-0 pr-lg-2">
      <h3 className="f3 text-normal m-0">Use Primer CSS in your project</h3>
      <p className="my-3">Pick and choose what you need. Install the entire Primer CSS bundle or individual packages via npm.</p>
      <a href="/css/getting-started" className="btn btn-outline">Installation instructions</a>
    </div>
  </div>
</div>
