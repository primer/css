import React from 'react'
import PropTypes from 'prop-types'
import {BorderBox, Box, Flex, Heading, Link, Text} from '@primer/components'
import {getAssetPath} from '../utils'
import UtilitiesImage from './UtilitiesImage.svg'
import ObjectsImage from './ObjectsImage.svg'
import ComponentsImage from './ComponentsImage.svg'
import SpacingImage from './SpacingImage.svg'
import ColorImage from './ColorImage.svg'

export {default as PrimerCSSAnimation} from './PrimerCSSAnimation.js'

const OverviewTitle = props => <Heading fontSize={3} fontWeight="normal" is="div" {...props} />
const OverviewText = props => <Text fontSize={1} {...props} />

export function StylesOverview(props) {
  const styleTypes = [
    {
      name: 'Utilities',
      desc: 'Single purpose, immutable styles, that do one thing well.',
      image: UtilitiesImage
    },
    {
      name: 'Objects',
      desc: 'Scaffolding for common page and content layouts.',
      image: ObjectsImage
    },
    {
      name: 'Components',
      desc: 'Abstracted patterns for frequently used visual styles.',
      image: ComponentsImage
    }
  ]
  return (
    <Flex {...props}>
      {styleTypes.map(({name, desc, image}) => (
        <Flex.Item is={Text} textAlign="center" mx={4} key={name}>
          <Image src={image} height={90} mb={2} />
          <OverviewTitle>{name}</OverviewTitle>
          <OverviewText>{desc}</OverviewText>
        </Flex.Item>
      ))}
    </Flex>
  )
}

StylesOverview.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.node,
      desc: PropTypes.node,
      image: PropTypes.func
    })
  )
}

export function PrimitivesOverview(props) {
  const primitiveTypes = [
    {
      name: 'Highly composable spacing scale',
      desc: `The base-8 spacing scale is highly composable and works with the density of GitHub’s content. Margin and padding spacers bring consistency to vertical and horizontal rhythm, while remaining flexible so you can tweak layouts to work for every context.`,
      image: SpacingImage
    },
    {
      name: 'Customizable typography',
      desc: `Font size and line-height options work together to result in more sensible numbers. Font styles come in a range of weights and sizes so that we can style appropriately for content and readability. Type utilities allow us to change the visual styles while keeping markup semantic.`,
      image: getAssetPath('typography.png')
    },
    {
      name: 'Meaningful color',
      desc: `The color system allows us to add meaningful signals to content and interactions. Color variables and utilities offer thematic styling options without being tied to structure. Text and background colors come in a range of accessible combinations to ensure we build inclusive interfaces.`,
      image: ColorImage
    }
  ]
  return (
    <Box width={['auto', 'auto', 10 / 12]} mx="auto" {...props}>
      {primitiveTypes.map(({name, desc, image}) => (
        <Flex key={name} my={6} alignItems="center">
          <Box width={300} mr={6} py={2}>
            <Image src={image} />
          </Box>
          <Box>
            <OverviewTitle>{name}</OverviewTitle>
            <OverviewText>{desc}</OverviewText>
          </Box>
        </Flex>
      ))}
    </Box>
  )
}

PrimitivesOverview.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.node,
      desc: PropTypes.node,
      image: PropTypes.func
    })
  )
}

function Image(props) {
  const {src, ...rest} = props
  switch (typeof src) {
    case 'string':
      return <Box is="img" width="100%" alt="" {...props} />
    case 'function':
      return <Box is={src} {...rest} />
    default:
      throw new Error(`Unrecognized Image.src type: "${typeof src}"`)
  }
}

export function PrimerPackageBox({count, ...rest}) {
  return (
    <Flex justifyContent="space-around" {...rest}>
      <BorderBox bg="gray.1" width="auto" px={6} py={3} my={4}>
        <Flex alignItems="center" justifyContent="space-around">
          <Text fontSize={3} fontWeight="bold" mb={2} textAlign="center">
            <Link href={bundleSourceURL('primer')} color="inherit">
              Primer
            </Link>
          </Text>
        </Flex>
        {count ? (
          <Text is="div" textAlign="center">
            This package includes all {count} Primer modules.
          </Text>
        ) : null}
      </BorderBox>
    </Flex>
  )
}

PrimerPackageBox.propTypes = {
  count: PropTypes.number
}

export function MetaPackageBox({children, meta = {}, title, ...rest}) {
  const {name, imports = []} = meta
  const bundles = imports.filter(bundle => !/support/.test(bundle))
  return (
    <Flex.Item is={BorderBox} bg="white" maxWidth={220} {...rest}>
      <BorderBox bg="gray.1" border={0} borderBottom={1} borderRadius={0} px={3} py={2}>
        <Heading is="div" fontSize={2}>
          <Link href={bundleSourceURL(name)} color="inherit">
            {title}
          </Link>
        </Heading>
      </BorderBox>
      <Text is="div" fontSize={1} p={3}>
        {children}
        <Text is="div" fontWeight="bold" mt={4} mb={2}>
          {bundles.length} bundles:
        </Text>
        <ul className="list-style-none pl-0">
          {bundles.map(bundle => (
            <li key={bundle}>
              {/* TODO: link to the actual page! */}
              <Link href={bundleURL(bundle)}>{bundle}</Link>
            </li>
          ))}
        </ul>
      </Text>
    </Flex.Item>
  )
}

MetaPackageBox.propTypes = {
  meta: PropTypes.shape({
    name: PropTypes.string,
    imports: PropTypes.arrayOf(PropTypes.string)
  }),
  title: PropTypes.node
}

function bundleURL(name) {
  return `/css/bundle?name=${name}`
}

function bundleSourceURL(name, branch = 'master') {
  // TODO get this from Metalsmith or page metadata???
  return `https://github.com/primer/css/blob/${branch}/src/${name}`
}
