---
title: Primer CSS
---

import {Header, Sidebar, Container, Head} from '@primer/gatsby-theme-doctocat'
import Hero from '../components/hero'
import {Box, Flex} from '@primer/components'

export default ({children}) => (
  <Flex flexDirection="column" minHeight="100vh">
    <Head title="Primer CSS" />
    <Header />
    <Flex flex="1 1 auto" flexDirection={['column', 'column', 'row']}>
      <Sidebar />
      <Box width="100%">
        <Hero />
        <Container>{children}</Container>
      </Box>
    </Flex>
  </Flex>
)

# Introduction

Our goal is to create a system that enables us to build consistent user experiences with ease, yet with enough flexibility to support the broad spectrum of GitHub websites. This goal is embedded in our design and code decisions. Our approach to CSS is influenced by Object Oriented CSS principles, functional CSS, and BEM architecture.

## Highly reusable, flexible styles

Styles can be mixed and matched to achieve many different layouts, independent of their location. These styles fall into three categories:

## Systematically designed for GitHub

Primer CSS is built upon systems that form the foundation of our styles such as spacing, typography, and color. This systematic approach helps ensure our styles are consistent and interoperable with each other.

## Structure

Primer CSS is published to npm as `@primer/css`. Each of Primer CSS's "modules" lives in a subfolder under `src/` with an `index.scss` in it. Generally speaking, the styles are divided into three primary themes:

- **Core** styles (in `core/`) are common dependencies, which include support variables, native element and typography styles, buttons, navigation, tooltips, etc.
- **Product** styles (in `product/`) are specific to github.com, and include components such as avatars, labels, markdown styles, popovers, and progress indicators.
- **Marketing** styles (in `marketing/`) are specific to GitHub marketing efforts, including international and event-focused sites as well as the more design-heavy feature pages on github.com. Marketing styles include new colors and button styles, and extend the core typography and whitespace scales.
